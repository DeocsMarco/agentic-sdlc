# Work Instruction: Code Documentation

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-DEV-003-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Development |
| **Parent SOP** | SOP-DEV-015 (Development Process) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for documenting code as defined in Step 3 of the Development Process (SOP-DEV-015). It ensures code is understandable, maintainable, and properly documented at all levels — from inline comments to API specifications.

---

## 2. Scope

**Applies To:**
- All new code written during the Development phase
- Modified code that changes behavior or interfaces
- API endpoints, configuration, and environment changes

**Responsible Role:** Developers

---

## 3. Prerequisites

Before starting code documentation, ensure you have:

☐ Working code implemented (WI-DEV-002)
☐ Documentation Standards document reviewed (DOC-DOCS-001)
☐ API documentation tooling configured (Swagger/OpenAPI if applicable)
☐ Access to project wiki or docs folder

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Working Code | WI-DEV-002 (Code Development) | Source files |
| Documentation Standards | Templates | DOC-DOCS-001 |
| Architecture Document | Design Phase | Document |
| Existing README | Repository | Markdown |

---

## 5. Procedure Steps

### Step 3.1: Add Inline Comments for Complex Logic

**Action:** Document non-obvious code with clear, purposeful comments.

**How to Execute:**

1. Comment the **why**, not the **what**. The code tells you what; comments explain why:
   ```typescript
   // ❌ Bad: Restates the code
   // Increment counter by 1
   counter++;

   // ✅ Good: Explains WHY
   // Retry counter tracks failed payment attempts. After 3 failures,
   // the transaction is flagged for manual review per PCI compliance.
   retryCounter++;
   ```

2. Add comments for:
   - Business rules that aren't obvious from the code
   - Workarounds or hacks (with TODO/FIXME and ticket reference)
   - Complex algorithms or non-trivial logic
   - Regex patterns
   - Magic numbers or constants

3. Use standard markers for actionable items:
   ```typescript
   // TODO(PROJ-150): Replace mock email service with SendGrid integration
   // FIXME(PROJ-151): Race condition when two users reset simultaneously
   // HACK: Workaround for third-party API returning 200 on errors — remove when they fix it
   ```

4. Do NOT comment:
   - Self-explanatory code
   - Commented-out code blocks (delete them; Git has history)
   - Obvious getters/setters

**Expected Outcome:** Complex logic has explanatory comments; no commented-out dead code; TODOs reference tickets.

**Quality Check:** ✅ Every comment explains "why" not "what", ✅ No commented-out code blocks, ✅ TODOs/FIXMEs have ticket references

---

### Step 3.2: Write JSDoc/Docstrings for Functions and Classes

**Action:** Add structured documentation to all public functions, classes, and modules.

**How to Execute:**

1. Document all public/exported functions with:
   - Description of what the function does
   - Parameter types and descriptions
   - Return type and description
   - Thrown exceptions
   - Usage example (for non-trivial functions)

   **TypeScript (JSDoc/TSDoc)**:
   ```typescript
   /**
    * Generates a password reset token and sends a reset email to the user.
    *
    * @param email - The user's registered email address
    * @param expiryHours - Token validity period in hours (default: 24)
    * @returns The generated reset token record
    * @throws {UserNotFoundError} If no user exists with the given email
    * @throws {RateLimitError} If reset was requested within the last 15 minutes
    *
    * @example
    * const token = await generateResetToken('user@example.com');
    * // token.id = "rst_abc123", token.expiresAt = 2026-02-20T09:00:00Z
    */
   async function generateResetToken(
     email: string,
     expiryHours: number = 24
   ): Promise<ResetToken> {
   ```

   **Python (Docstrings)**:
   ```python
   def generate_reset_token(email: str, expiry_hours: int = 24) -> ResetToken:
       """Generate a password reset token and send a reset email.

       Args:
           email: The user's registered email address.
           expiry_hours: Token validity period in hours. Defaults to 24.

       Returns:
           The generated ResetToken record.

       Raises:
           UserNotFoundError: If no user exists with the given email.
           RateLimitError: If reset was requested within the last 15 minutes.
       """
   ```

2. Document classes with a class-level docstring explaining purpose and usage:
   ```typescript
   /**
    * Manages user authentication flows including login, registration,
    * password reset, and session management.
    *
    * Uses JWT tokens for stateless authentication with Redis-backed
    * token blacklisting for logout/revocation.
    */
   class AuthService {
   ```

3. Document interfaces and type definitions:
   ```typescript
   /** Configuration for the password reset flow. */
   interface ResetConfig {
     /** Token validity period in hours */
     expiryHours: number;
     /** Minimum time between reset requests per user (minutes) */
     rateLimitMinutes: number;
     /** Maximum number of active tokens per user */
     maxActiveTokens: number;
   }
   ```

**Expected Outcome:** All public functions, classes, and interfaces have structured documentation.

**Quality Check:** ✅ Every exported function has a docstring, ✅ Parameters and return types documented, ✅ Exceptions/errors documented, ✅ IDE shows helpful hover documentation

---

### Step 3.3: Update README and Technical Documentation

**Action:** Keep project-level documentation current with new features.

**How to Execute:**

1. Update `README.md` when your feature changes:
   - New environment variables required
   - New scripts or commands added
   - New dependencies with setup steps
   - Changed API base URLs or configuration

2. Update or create feature-specific documentation in `docs/`:
   ```
   docs/
   ├── architecture.md        # System architecture overview
   ├── authentication.md      # Auth flow documentation
   ├── password-reset.md      # ← New feature doc
   └── deployment.md          # Deployment guide
   ```

3. Each feature doc should include:
   - Feature overview and purpose
   - How it works (flow diagram or step description)
   - Configuration required
   - Error scenarios and handling

4. Update `CHANGELOG.md` using Keep a Changelog format:
   ```markdown
   ## [Unreleased]

   ### Added
   - Password reset flow with email verification (PROJ-101)
   - Rate limiting on reset requests (15-minute cooldown)

   ### Changed
   - Auth service now supports configurable token expiry

   ### Fixed
   - Session not invalidated after password change (PROJ-115)
   ```

**Expected Outcome:** README reflects current state; feature documentation exists; CHANGELOG updated.

**Quality Check:** ✅ README setup instructions still work end-to-end, ✅ New env vars listed in README and `.env.example`, ✅ CHANGELOG has entry for every user-facing change

---

### Step 3.4: Document API Endpoints

**Action:** Create or update API documentation using OpenAPI/Swagger.

**How to Execute:**

1. For REST APIs, maintain an OpenAPI specification:
   ```yaml
   # openapi.yaml or via code annotations
   paths:
     /api/auth/reset-password:
       post:
         summary: Request a password reset
         description: |
           Generates a reset token and sends an email to the user.
           Rate limited to one request per 15 minutes per email.
         tags:
           - Authentication
         requestBody:
           required: true
           content:
             application/json:
               schema:
                 type: object
                 required: [email]
                 properties:
                   email:
                     type: string
                     format: email
                     example: user@example.com
         responses:
           '200':
             description: Reset email sent (always returns 200 to prevent email enumeration)
           '429':
             description: Rate limit exceeded
   ```

2. For code-first API docs (e.g., swagger-jsdoc), add annotations to route handlers:
   ```typescript
   /**
    * @openapi
    * /api/auth/reset-password:
    *   post:
    *     summary: Request a password reset
    *     tags: [Authentication]
    */
   router.post('/reset-password', authController.requestReset);
   ```

3. Ensure API docs include:
   - All endpoints with HTTP method
   - Request body schema with examples
   - Response schemas for success and error cases
   - Authentication requirements
   - Rate limiting details

4. Verify docs are accessible (e.g., `/api-docs` endpoint with Swagger UI).

**Expected Outcome:** API documentation is complete, accurate, and accessible via Swagger UI or equivalent.

**Quality Check:** ✅ Every endpoint is documented, ✅ Request/response examples are valid, ✅ Auth requirements specified, ✅ Swagger UI renders without errors

---

### Step 3.5: Document Configuration and Environment Variables

**Action:** Ensure all configuration is documented and discoverable.

**How to Execute:**

1. Update `.env.example` with every new environment variable:
   ```bash
   # Authentication
   JWT_SECRET=                    # Secret key for JWT signing (min 32 chars)
   JWT_EXPIRY=3600                # Token expiry in seconds (default: 1h)

   # Password Reset
   RESET_TOKEN_EXPIRY_HOURS=24   # Reset token validity (default: 24h)
   RESET_RATE_LIMIT_MINUTES=15   # Cooldown between reset requests
   SENDGRID_API_KEY=             # SendGrid API key for reset emails
   RESET_EMAIL_FROM=noreply@app.com  # Sender email for reset emails
   ```

2. Group variables by feature/service with comment headers.

3. Indicate which variables are:
   - Required vs. optional (with defaults)
   - Sensitive (secrets) vs. non-sensitive
   - Environment-specific (different per dev/staging/prod)

4. If the project has many config values, create a `docs/configuration.md` reference table:
   | Variable | Required | Default | Description |
   |----------|----------|---------|-------------|
   | `JWT_SECRET` | Yes | — | JWT signing secret |
   | `JWT_EXPIRY` | No | 3600 | Token TTL in seconds |

**Expected Outcome:** All environment variables documented with descriptions, defaults, and sensitivity flags.

**Quality Check:** ✅ `.env.example` matches actual variables used in code, ✅ No undocumented env vars, ✅ Defaults are sensible and documented

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Documented Code | Inline comments and function docstrings | Source files |
| Technical Documentation | Feature docs, architecture updates | Markdown in `docs/` |
| API Documentation | OpenAPI spec and Swagger UI | YAML/JSON + hosted UI |
| Updated README | Current setup and usage instructions | Markdown |
| Updated CHANGELOG | Record of changes | Markdown |
| Configuration Docs | `.env.example` and config reference | Files |

---

## 7. Success Criteria

✅ All public functions/classes have JSDoc/docstrings
✅ Complex logic has explanatory comments
✅ API endpoints documented in OpenAPI format
✅ README setup instructions verified working
✅ CHANGELOG updated with new changes
✅ `.env.example` matches actual configuration
✅ No commented-out dead code in the codebase

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **"I'll document it later" (never happens)** | Document as you code. Write the docstring before the function body — it clarifies your thinking |
| **API docs drift from actual behavior** | Use code-first documentation (swagger-jsdoc, FastAPI auto-docs) so docs are generated from code |
| **Overly verbose comments on obvious code** | Apply the "6-month test": would you understand this code in 6 months without the comment? If yes, skip it |
| **CHANGELOG neglected** | Add CHANGELOG update to PR checklist; one line per change takes 30 seconds |
| **`.env.example` missing new variables** | Add a pre-commit hook or CI check that compares `.env.example` keys against code references |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-DEV-015 | Development Process | Parent procedure |
| WI-DEV-002 | Code Development | Previous step (input) |
| WI-DEV-004 | Unit Testing | Next step |
| DOC-DOCS-001 | Documentation Standards | Compliance reference |

---

## 10. References

- JSDoc documentation: https://jsdoc.app
- OpenAPI Specification: https://spec.openapis.org/oas/v3.1.0
- Keep a Changelog: https://keepachangelog.com
- Google developer documentation style guide: https://developers.google.com/style

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-DEV-015 Step 3 |

---

**Document ID:** WI-DEV-003-v1.0.0 | **Tier:** 3 - Work Instructions
