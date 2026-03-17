# Work Instruction: Unit Testing

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-DEV-004-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Development |
| **Parent SOP** | SOP-DEV-015 (Development Process) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for writing and running unit tests as defined in Step 4 of the Development Process (SOP-DEV-015). It ensures all new code is verified through automated tests with adequate coverage before proceeding to code review.

---

## 2. Scope

**Applies To:**
- All new feature code
- Bug fixes (regression tests)
- Refactored code (existing tests updated)

**Responsible Role:** Developers

---

## 3. Prerequisites

Before starting unit testing, ensure you have:

☐ Working code implemented (WI-DEV-002)
☐ Test framework installed and configured (Jest, Vitest, pytest, JUnit, etc.)
☐ Coverage tool configured in CI pipeline
☐ Test database or mock infrastructure available

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Working Code | WI-DEV-002 (Code Development) | Source files |
| Acceptance Criteria | User Stories | Ticket |
| Unit Test Framework | Project setup (WI-DEV-001) | Configured tooling |

---

## 5. Procedure Steps

### Step 4.1: Write Unit Tests for New Code

**Action:** Create tests that verify individual functions and modules in isolation.

**How to Execute:**

1. Create test files following the project convention:
   ```
   # Mirror source structure
   src/services/auth.service.ts     →  tests/unit/services/auth.service.test.ts
   src/utils/validation.ts          →  tests/unit/utils/validation.test.ts
   ```

2. Follow the **Arrange-Act-Assert** (AAA) pattern:
   ```typescript
   describe('AuthService', () => {
     describe('generateResetToken', () => {
       it('should create a token with 24-hour expiry for valid email', async () => {
         // Arrange
         const mockUserRepo = { findByEmail: jest.fn().mockResolvedValue({ id: 1, email: 'test@example.com' }) };
         const service = new AuthService(mockUserRepo);

         // Act
         const token = await service.generateResetToken('test@example.com');

         // Assert
         expect(token).toBeDefined();
         expect(token.expiresAt).toBeInstanceOf(Date);
         expect(token.expiresAt.getTime() - Date.now()).toBeCloseTo(24 * 60 * 60 * 1000, -4);
       });

       it('should throw UserNotFoundError for unregistered email', async () => {
         // Arrange
         const mockUserRepo = { findByEmail: jest.fn().mockResolvedValue(null) };
         const service = new AuthService(mockUserRepo);

         // Act & Assert
         await expect(service.generateResetToken('nobody@example.com'))
           .rejects.toThrow(UserNotFoundError);
       });
     });
   });
   ```

3. Use descriptive test names that read as specifications:
   ```
   ✅ "should create a token with 24-hour expiry for valid email"
   ✅ "should throw UserNotFoundError for unregistered email"
   ✅ "should enforce 15-minute rate limit between requests"
   ❌ "test token"
   ❌ "works correctly"
   ```

4. Test naming convention: `should {expected behavior} when {condition}`

**Expected Outcome:** Test files created for all new/changed code with descriptive test names following AAA pattern.

**Quality Check:** ✅ Each public function has at least one test, ✅ Test names describe expected behavior, ✅ Tests follow AAA pattern

---

### Step 4.2: Test Edge Cases and Error Conditions

**Action:** Cover boundary conditions, error paths, and exceptional scenarios.

**How to Execute:**

1. For each function, identify edge cases:

   | Category | Examples |
   |----------|---------|
   | **Null/undefined inputs** | Null email, missing required fields |
   | **Empty values** | Empty string, empty array, zero |
   | **Boundary values** | Max length, min length, exactly at limit |
   | **Invalid formats** | Malformed email, negative numbers, special characters |
   | **Concurrency** | Duplicate requests, race conditions |
   | **Error responses** | Network failures, timeout, 500 from external API |

2. Write tests for each identified edge case:
   ```typescript
   describe('generateResetToken - edge cases', () => {
     it('should throw ValidationError for empty email string', async () => {
       await expect(service.generateResetToken('')).rejects.toThrow(ValidationError);
     });

     it('should throw ValidationError for malformed email', async () => {
       await expect(service.generateResetToken('not-an-email')).rejects.toThrow(ValidationError);
     });

     it('should throw RateLimitError if called within 15 minutes of last reset', async () => {
       const recentToken = { createdAt: new Date(Date.now() - 5 * 60 * 1000) }; // 5 min ago
       mockTokenRepo.findLatestByEmail.mockResolvedValue(recentToken);

       await expect(service.generateResetToken('user@example.com'))
         .rejects.toThrow(RateLimitError);
     });
   });
   ```

3. Aim for the "happy path + sad paths" coverage:
   - 1 test for the success case
   - 1 test per distinct error/validation path
   - 1 test per boundary condition that matters

**Expected Outcome:** Edge cases and error conditions covered; tests verify both success and failure paths.

**Quality Check:** ✅ Every error path in the code has a corresponding test, ✅ Boundary values tested, ✅ Null/empty inputs handled

---

### Step 4.3: Mock External Dependencies

**Action:** Isolate unit tests from databases, APIs, file systems, and other external services.

**How to Execute:**

1. Identify external dependencies in the code under test:
   - Database repositories/ORMs
   - HTTP clients (API calls)
   - Email/notification services
   - File system operations
   - Date/time (use fixed timestamps)

2. Use dependency injection to make mocking possible:
   ```typescript
   // ✅ Good: Dependencies injected — easy to mock
   class AuthService {
     constructor(
       private userRepo: UserRepository,
       private tokenRepo: TokenRepository,
       private emailService: EmailService
     ) {}
   }

   // ❌ Bad: Direct imports — hard to mock
   class AuthService {
     async resetPassword(email: string) {
       const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
     }
   }
   ```

3. Create mocks for each dependency:
   ```typescript
   const mockUserRepo = {
     findByEmail: jest.fn(),
     save: jest.fn(),
   };
   const mockEmailService = {
     sendResetEmail: jest.fn().mockResolvedValue(undefined),
   };
   ```

4. Verify mock interactions when side effects matter:
   ```typescript
   it('should send reset email after token creation', async () => {
     await service.generateResetToken('user@example.com');

     expect(mockEmailService.sendResetEmail).toHaveBeenCalledWith(
       'user@example.com',
       expect.stringContaining('reset-token')
     );
     expect(mockEmailService.sendResetEmail).toHaveBeenCalledTimes(1);
   });
   ```

5. **Do NOT mock the unit under test.** Only mock its dependencies.

**Expected Outcome:** Tests run without network, database, or external service access; all dependencies mocked.

**Quality Check:** ✅ Tests pass with no network connectivity, ✅ No real database calls in unit tests, ✅ Mock interactions verified where side effects matter

---

### Step 4.4: Achieve Coverage Target and Run Tests

**Action:** Run the test suite, verify coverage meets the 80% minimum, and ensure CI passes.

**How to Execute:**

1. Run tests locally with coverage:
   ```bash
   # JavaScript/TypeScript
   npm run test -- --coverage

   # Python
   pytest --cov=src --cov-report=term-missing
   ```

2. Review the coverage report:
   ```
   -------------------|---------|----------|---------|---------|
   File               | % Stmts | % Branch | % Funcs | % Lines |
   -------------------|---------|----------|---------|---------|
   auth.service.ts    |   92.3  |   85.7   |  100.0  |   91.7  |
   validation.ts      |  100.0  |  100.0   |  100.0  |  100.0  |
   reset-token.model  |   78.5  |   60.0   |   80.0  |   76.9  | ← Below 80%
   -------------------|---------|----------|---------|---------|
   ```

3. Target minimums:
   - **Overall**: ≥ 80% line coverage
   - **New code**: ≥ 90% line coverage (aim higher for new work)
   - **Critical paths** (auth, payments, data mutations): ≥ 95%

4. If coverage is below threshold:
   - Identify uncovered lines in the report
   - Add tests for uncovered branches and functions
   - Do NOT add meaningless tests just to hit the number (e.g., testing getters/setters with no logic)

5. Run the full test suite and verify all tests pass:
   ```bash
   npm run test
   # Expected: All tests passing, 0 failures
   ```

6. Push and verify CI pipeline passes:
   ```bash
   git push origin feature/PROJ-101-password-reset
   # Check CI dashboard — all green
   ```

**Decision Point (DP1):**
- ✅ **Tests passing with ≥ 80% coverage** → Proceed to Step 5 (Code Review, WI-DEV-005)
- ❌ **Tests failing or coverage below 80%** → Fix code or add tests, re-run

**Expected Outcome:** All tests passing locally and in CI; coverage meets or exceeds 80%.

**Quality Check:** ✅ Zero test failures, ✅ Coverage ≥ 80% overall, ✅ CI pipeline green, ✅ No skipped or disabled tests without a ticket reference

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Unit Tests | Test files covering all new/changed code | Test source files |
| Test Coverage Report | Coverage percentages per file | CI artifact / terminal output |
| Passing CI Pipeline | All checks green | CI dashboard |

---

## 7. Success Criteria

✅ All unit tests passing (zero failures)
✅ Code coverage ≥ 80% overall, ≥ 90% for new code
✅ Edge cases and error conditions tested
✅ External dependencies mocked (no real I/O in unit tests)
✅ Tests run in < 60 seconds (fast feedback)
✅ CI pipeline passes with all checks green
✅ No skipped tests without documented reason

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Tests tightly coupled to implementation** | Test behavior, not implementation. If refactoring breaks tests but not functionality, the tests are too coupled. Assert on outputs and side effects, not internal method calls |
| **Slow tests (> 60s)** | Mock all I/O; avoid `setTimeout`/delays in tests; run slow integration tests separately from unit tests |
| **Flaky tests (pass sometimes, fail others)** | Eliminate time-dependent logic (use fixed timestamps); avoid shared mutable state between tests; use `beforeEach` to reset |
| **Testing private methods directly** | Don't. Test them through the public interface. If a private method is complex enough to need its own tests, it should be extracted into its own module |
| **100% coverage as a goal** | 80% is the floor, not the ceiling. Chasing 100% leads to brittle, low-value tests on trivial code. Focus coverage on business logic |
| **No tests for error paths** | Error handling is where bugs hide. Test every `catch` block and validation failure |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-DEV-015 | Development Process | Parent procedure |
| WI-DEV-002 | Code Development | Previous step (input) |
| WI-DEV-003 | Code Documentation | Parallel step |
| WI-DEV-005 | Code Review | Next step |

---

## 10. References

- Jest documentation: https://jestjs.io/docs
- Testing best practices: https://github.com/goldbergyoni/javascript-testing-best-practices
- Martin Fowler on unit testing: https://martinfowler.com/bliki/UnitTest.html
- Test-Driven Development by Example (Kent Beck)

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-DEV-015 Step 4 |

---

**Document ID:** WI-DEV-004-v1.0.0 | **Tier:** 3 - Work Instructions
