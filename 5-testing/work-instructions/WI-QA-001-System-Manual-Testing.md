# Work Instruction: System & Manual Testing

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-QA-001-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Quality Assurance |
| **Parent SOP** | SOP-QA-001 (Testing & QA) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for executing system and manual testing as defined in Step 1 of the Testing & QA phase (SOP-QA-001). It ensures consistent, thorough testing of all functional requirements, UI/UX design compliance, edge cases, and regression scenarios before integration and performance testing begin.

---

## 2. Scope

**Applies To:**
- All projects entering Testing & QA phase after Development handoff
- Hotfix and patch releases requiring regression testing
- Feature additions requiring test case updates

**Responsible Role:** QA Team

---

## 3. Prerequisites

Before starting system & manual testing, ensure you have:

☐ Development handoff received and confirmed (SOP-DEV-015 complete)
☐ Test environment provisioned and accessible
☐ Test data seeded in test environment
☐ User stories with acceptance criteria available in backlog
☐ Design mockups/prototypes accessible for UI/UX validation
☐ CI pipeline green — all unit tests passing
☐ Bug tracking system access (Jira/Linear/etc.)
☐ Test Case Template (TMPL-TEST-001) available

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| User Stories with Acceptance Criteria | Requirements Phase | Backlog items |
| Dev Handoff Package | Development Phase | Document + deployed build |
| Design Mockups / Prototypes | Design Phase | Figma/Sketch/Adobe XD |
| Test Case Template | Templates | TMPL-TEST-001 |
| Existing Test Case Suite | QA Repository | Spreadsheet/Test management tool |
| Known Defects from Dev | Development Phase | Bug tracker tickets |

---

## 5. Procedure Steps

### Step 1.1: Create or Update Test Cases from User Stories

**Action:** Translate every user story and acceptance criterion into executable test cases.

**How to Execute:**

1. Pull the full list of user stories for the current sprint/release from the backlog.
2. For each user story, extract every acceptance criterion — each criterion becomes at least one test case.
3. Write test cases using TMPL-TEST-001 with the following structure:
   ```
   Test Case ID: TC-[MODULE]-[NNN]
   Title: [Short descriptive title]
   User Story: [US-XXX]
   Preconditions: [State required before execution]
   Test Steps:
     1. [Action]
     2. [Action]
   Expected Result: [What should happen]
   Priority: Critical / High / Medium / Low
   ```
4. For each user story, also create negative test cases (invalid inputs, unauthorized access, boundary values).
5. Tag test cases by module/feature for traceability.
6. Store test cases in the test management tool (TestRail, Zephyr, or spreadsheet).

**Expected Outcome:** Complete test case suite covering all acceptance criteria with positive and negative scenarios.

**Quality Check:** ✅ Every acceptance criterion has at least one test case mapped. ✅ Traceability matrix shows 100% requirement coverage.

---

### Step 1.2: Execute Functional Test Cases

**Action:** Systematically execute all test cases against the deployed build in the test environment.

**How to Execute:**

1. Verify the correct build version is deployed to the test environment — confirm with Dev team if unsure.
2. Execute test cases in priority order: Critical → High → Medium → Low.
3. For each test case, record:
   - **Status**: Pass / Fail / Blocked
   - **Actual Result**: What actually happened (especially for failures)
   - **Screenshots/Evidence**: Capture for every failure
   - **Environment details**: Browser, OS, device, screen resolution
4. If a test is blocked (dependency not available, environment issue), mark as Blocked and notify the team immediately.
5. Do not skip failing tests — execute every test case even if related tests have already failed.
6. Re-test any previously failing tests that Dev claims are fixed before moving on.

**Expected Outcome:** All functional test cases executed with pass/fail status and evidence recorded.

**Quality Check:** ✅ Zero test cases left in "Not Executed" status. ✅ All failures have screenshots and reproducible steps.

---

### Step 1.3: Verify Acceptance Criteria

**Action:** Confirm that every acceptance criterion from user stories is demonstrably met.

**How to Execute:**

1. Open the traceability matrix linking user stories → acceptance criteria → test cases.
2. For each acceptance criterion, verify:
   - At least one test case passed that directly validates this criterion.
   - The passing test matches the exact wording of the criterion (not an approximation).
3. If an acceptance criterion cannot be verified through testing (e.g., "system should be maintainable"), flag it and escalate to PM for alternative verification.
4. Mark each acceptance criterion as: ✅ Verified / ❌ Failed / ⚠️ Partial.
5. For any ❌ or ⚠️, create a defect ticket immediately.

**Expected Outcome:** Acceptance criteria verification report showing status of every criterion.

**Quality Check:** ✅ All Critical/High user stories have 100% criteria verified or defects logged. ✅ PM is notified of any partially met criteria.

---

### Step 1.4: Test UI/UX Against Design Mockups

**Action:** Compare the implemented UI pixel-by-pixel against approved design mockups.

**How to Execute:**

1. Open the design mockups (Figma/Sketch) and the live application side by side.
2. Check each screen/page for:
   - **Layout**: Component positioning, spacing, alignment matches design
   - **Typography**: Font family, size, weight, line height, color
   - **Colors**: Background, text, button, border colors match design system
   - **Responsive behavior**: Test at breakpoints (mobile 375px, tablet 768px, desktop 1280px, large 1920px)
   - **Interactive states**: Hover, focus, active, disabled, loading, error states
   - **Animations/Transitions**: Timing, easing, and behavior match specs
3. Check cross-browser compatibility:
   - Chrome (latest), Firefox (latest), Safari (latest), Edge (latest)
   - iOS Safari, Android Chrome (if mobile-responsive)
4. Verify accessibility basics:
   - Tab navigation order is logical
   - Form labels are associated with inputs
   - Color contrast meets WCAG AA (4.5:1 for text)
   - Alt text on images
5. Log UI discrepancies as bugs with severity:
   - **High**: Layout broken, unusable on a supported browser
   - **Medium**: Visual inconsistency noticeable to users
   - **Low**: Minor pixel differences, cosmetic only

**Expected Outcome:** UI/UX validation report with pass/fail per screen and browser.

**Quality Check:** ✅ All screens tested on at least 3 browsers. ✅ Responsive breakpoints verified. ✅ No High-severity UI bugs remain unlogged.

---

### Step 1.5: Test Edge Cases and Error Handling

**Action:** Deliberately test boundary conditions, invalid inputs, and error scenarios.

**How to Execute:**

1. For each input field, test:
   - Empty/blank submission
   - Maximum length input (paste 10,000 characters)
   - Special characters: `<script>alert('xss')</script>`, `'; DROP TABLE users; --`
   - Unicode/emoji: `こんにちは`, `🎉🔥`, RTL text `مرحبا`
   - Numeric boundaries: 0, -1, MAX_INT, decimal precision
   - File uploads: oversized files, wrong format, empty files, files with special name characters
2. Test error scenarios:
   - Network disconnection mid-operation
   - Session timeout during form submission
   - Concurrent edits to the same resource
   - Rapid double-click on submit buttons
   - Back button after form submission
   - Direct URL access to pages requiring authentication
3. Test data boundaries:
   - Empty lists/tables (zero state)
   - Single item in list
   - Maximum pagination (1000+ items)
   - Search with no results
4. Verify error messages are:
   - User-friendly (no stack traces, no raw error codes)
   - Specific (not just "An error occurred")
   - Actionable (tells user what to do)

**Expected Outcome:** Edge case test results documented; all error handling verified as user-friendly.

**Quality Check:** ✅ No unhandled exceptions visible to users. ✅ All error messages are non-technical and actionable. ✅ XSS/SQL injection inputs are sanitized.

---

### Step 1.6: Perform Regression Testing

**Action:** Re-execute tests on previously working features to ensure new changes haven't broken them.

**How to Execute:**

1. Identify the regression test suite:
   - All Critical and High priority test cases from previous releases
   - Test cases for modules adjacent to changed code (check with Dev team for impact analysis)
   - Any test cases that previously failed and were fixed
2. Execute the regression suite in full — do not cherry-pick.
3. Compare results against the last test run:
   - Previously passing tests now failing = **regression bug** (log immediately with high priority)
   - Previously failing tests now passing = verify and update status
4. If regression bugs are found:
   - Tag the bug as "Regression" in the tracker
   - Link to the change/PR that likely caused it
   - Escalate to Dev Lead immediately — regressions indicate insufficient unit test coverage
5. Document regression test execution summary:
   - Total tests run
   - Pass/Fail/Blocked counts
   - New regressions found
   - Comparison to previous run

**Expected Outcome:** Regression test report showing no new regressions, or all regressions logged and escalated.

**Quality Check:** ✅ 100% of regression suite executed. ✅ Zero regressions left unlogged. ✅ Regression trend tracked across releases.

---

### Step 1.7: Log All Defects in Bug Tracker

**Action:** Create detailed, reproducible bug reports for every defect found.

**How to Execute:**

1. For every defect found in Steps 1.2–1.6, create a bug ticket with:
   ```
   Title: [Module] - [Brief description of the bug]
   Severity: Critical / High / Medium / Low
   Priority: P1 / P2 / P3 / P4
   Environment: [Browser, OS, build version, test environment URL]
   Steps to Reproduce:
     1. Navigate to [URL]
     2. Click [button]
     3. Enter [data]
     4. Observe [behavior]
   Expected Result: [What should happen per requirement]
   Actual Result: [What actually happens]
   Attachments: [Screenshots, screen recordings, console logs]
   Related Test Case: [TC-XXX]
   User Story: [US-XXX]
   ```
2. Severity definitions:
   - **Critical**: System crash, data loss, security vulnerability, core feature completely broken
   - **High**: Major feature not working, no workaround available
   - **Medium**: Feature works but not as expected, workaround exists
   - **Low**: Cosmetic issue, minor inconvenience
3. Assign bugs to the appropriate developer or leave unassigned for triage (per team convention).
4. Link bugs to the related test case and user story for traceability.
5. After logging all bugs, update the test execution summary with defect counts by severity.

**Expected Outcome:** All defects logged in bug tracker with complete reproduction steps and evidence.

**Quality Check:** ✅ Every bug has reproducible steps (another QA can reproduce from the ticket alone). ✅ Severity and priority are correctly assigned. ✅ No duplicate bugs logged.

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Test Case Suite | All test cases for the release | Test management tool / spreadsheet |
| Test Execution Report | Pass/Fail/Blocked results for all test cases | Report |
| Bug Reports | Defects found during testing | Bug tracker tickets |
| Traceability Matrix | User stories → Acceptance criteria → Test cases mapping | Spreadsheet |
| UI/UX Validation Report | Design compliance per screen/browser | Report |
| Regression Test Report | Regression suite results and trend | Report |

---

## 7. Success Criteria

✅ All test cases derived from acceptance criteria executed
✅ Traceability matrix shows 100% requirement coverage
✅ All Critical/High defects logged with reproduction steps
✅ UI/UX tested on all supported browsers and breakpoints
✅ Regression suite shows no new regressions (or all logged)
✅ Edge cases and error handling verified
✅ Test execution report delivered to QA Lead

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Incomplete test cases** — testing from memory instead of documented cases | Always write test cases BEFORE executing; never "exploratory test only" for acceptance criteria |
| **Missing negative tests** — only testing the happy path | Mandate at least 1 negative test per acceptance criterion; review test cases before execution |
| **Stale test data** — tests fail because data was modified by previous runs | Reset test data before each test cycle; use isolated test accounts per tester |
| **Environment drift** — test env doesn't match production config | Verify environment parity checklist before each cycle; flag differences in test report |
| **Flaky tests** — tests that pass/fail inconsistently | Re-run flaky tests 3x; if inconsistent, log as bug with "Intermittent" tag and investigate root cause (usually timing, race conditions, or test data dependency) |
| **Skipping regression** — "we only changed one thing" | Always run the full regression suite; the one thing you didn't test is the one that breaks |
| **Vague bug reports** — "it doesn't work" | Reject bug reports missing Steps to Reproduce; enforce the template |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-QA-001 | Testing & QA | Parent procedure |
| TMPL-TEST-001 | Test Case Template | Test case format |
| SOP-DEV-015 | Development Process | Upstream (input source) |
| WI-QA-002 | Integration Testing | Next work instruction |
| WI-QA-004 | Bug Resolution | Defect handling process |

---

## 10. References

- ISTQB Foundation Level Syllabus — Test Design Techniques
- IEEE 829 — Standard for Software Test Documentation
- OWASP Testing Guide — Security test inputs

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-QA-001 Step 1 |

---

**Document ID:** WI-QA-001-v1.0.0 | **Tier:** 3 - Work Instructions
