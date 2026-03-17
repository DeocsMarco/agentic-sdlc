# Work Instruction: Bug Resolution

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-QA-004-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Quality Assurance |
| **Parent SOP** | SOP-QA-001 (Testing & QA) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for resolving bugs found during testing as defined in Step 4 of the Testing & QA phase (SOP-QA-001). It establishes the process for triaging, prioritizing, fixing, verifying, and closing defects to ensure all critical and high-priority bugs are resolved before user acceptance testing.

---

## 2. Scope

**Applies To:**
- All bugs found during System Testing (WI-QA-001), Integration Testing (WI-QA-002), and Performance Testing (WI-QA-003)
- Regression bugs discovered during fix verification
- Bugs escalated from UAT (WI-QA-005) back to this process

**Responsible Roles:** Dev Team (fix), QA Team (verify), Tech Lead (triage)

---

## 3. Prerequisites

Before starting bug resolution, ensure you have:

☐ Bug reports logged in bug tracker from testing phases (WI-QA-001 through WI-QA-003)
☐ Bug tracker access for all Dev and QA team members
☐ Test environment available for verification
☐ Git branching strategy defined for bug fixes (e.g., `bugfix/TICKET-ID-description`)
☐ CI/CD pipeline running for automated builds and unit test execution
☐ Code review process in place (PR reviews)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Bug Reports | Testing phases (WI-QA-001 to WI-QA-003) | Bug tracker tickets |
| Test Environment | DevOps | Deployed environment |
| Source Code Repository | Development | Git repository |
| Test Case Suite | QA Team | Test management tool |
| CI/CD Pipeline | DevOps | Automated pipeline |

---

## 5. Procedure Steps

### Step 4.1: Bug Triage and Prioritization

**Action:** Review all reported bugs, validate them, and assign severity and priority for resolution order.

**How to Execute:**

1. Schedule a triage meeting with QA Lead, Tech Lead, and PM (daily during active bug resolution, 15–30 minutes).
2. For each new/unreviewed bug:
   - **Validate**: Confirm the bug is reproducible (QA demonstrates or Dev attempts reproduction).
   - **Deduplicate**: Check if it's a duplicate of an existing ticket — merge if so.
   - **Classify severity**:
     - **Critical**: System crash, data loss/corruption, security vulnerability, complete feature failure with no workaround. *Example: Submitting payment form causes 500 error and charges card without creating order.*
     - **High**: Major feature broken, significant user impact, no reasonable workaround. *Example: Search returns incorrect results for queries with special characters.*
     - **Medium**: Feature partially works, workaround exists but inconvenient. *Example: Date picker defaults to wrong timezone; user can manually type the date.*
     - **Low**: Cosmetic, minor inconvenience, edge case with minimal user impact. *Example: Footer alignment off by 2px on tablet breakpoint.*
   - **Assign priority** (determines fix order):
     - **P1**: Fix immediately — blocks testing or release
     - **P2**: Fix in current sprint — important but not blocking
     - **P3**: Fix if time permits — nice to have
     - **P4**: Defer to next release — backlog
   - **Decide disposition**:
     - Fix Now (P1/P2)
     - Defer with PM Approval (P3/P4 — Medium/Low severity only)
     - Won't Fix (by design, not a bug, or cost exceeds value — requires PM approval)
     - Need More Info (return to QA for additional details)
3. Document triage decisions on each ticket:
   ```
   Triage Decision: Fix Now
   Severity: High
   Priority: P1
   Assigned To: [Developer Name]
   Target Fix Date: [Date]
   Notes: Blocks checkout flow testing
   ```
4. **Critical bugs block release** — the release cannot proceed until all Critical bugs are resolved.
5. **Medium/Low bugs can be deferred** with explicit PM approval documented on the ticket.

**Expected Outcome:** All bugs triaged with severity, priority, assignment, and disposition.

**Quality Check:** ✅ Every bug has severity and priority assigned. ✅ Every P1/P2 bug has an assigned developer. ✅ Deferred bugs have PM approval documented.

---

### Step 4.2: Bug Assignment to Developers

**Action:** Assign triaged bugs to the appropriate developers based on expertise and capacity.

**How to Execute:**

1. Assign bugs based on:
   - **Code ownership**: Developer who built the feature/module
   - **Expertise**: Developer most familiar with the technology involved
   - **Availability**: Current workload and sprint capacity
2. For each assigned bug, ensure the developer has:
   - Access to reproduce the bug (test environment, test account, test data)
   - Clear reproduction steps from the bug report
   - Understanding of the expected behavior (link to user story/acceptance criteria)
3. Set target fix dates:
   - P1 (Critical): Same day or next business day
   - P2 (High): Within 2–3 business days
   - P3 (Medium): Within current sprint
   - P4 (Low): Next sprint or backlog
4. Communicate assignments — don't just update the ticket; notify via team channel.
5. If a developer cannot reproduce a bug, pair them with the QA who found it for a screen-share session.

**Expected Outcome:** All P1/P2 bugs assigned to developers with target dates.

**Quality Check:** ✅ No P1/P2 bugs unassigned. ✅ Developers acknowledged their assignments. ✅ Target dates are realistic.

---

### Step 4.3: Fix Implementation and Unit Testing

**Action:** Developer implements the fix, writes/updates unit tests, and ensures no regressions.

**How to Execute:**

1. Create a branch from the release/develop branch:
   ```
   git checkout -b bugfix/TICKET-123-fix-payment-error
   ```
2. Before coding the fix:
   - Reproduce the bug locally to confirm understanding
   - Identify the root cause (not just the symptom)
   - Consider the blast radius — what else might this code path affect?
3. Implement the fix:
   - Fix the root cause, not just the symptom
   - Keep the change minimal — don't refactor unrelated code in a bug fix branch
   - If the fix requires a database migration, document it clearly
4. Write or update unit tests:
   - Add a test that would have caught this bug (reproduces the exact failure scenario)
   - Ensure all existing unit tests still pass
   - If the bug was in error handling, add error path tests
5. Test locally:
   - Verify the fix resolves the reported issue
   - Run the full unit test suite — all green
   - Manually test adjacent functionality (if the fix touches shared code)
6. Update the bug ticket:
   ```
   Status: In Review
   Fix Branch: bugfix/TICKET-123-fix-payment-error
   Root Cause: [Brief explanation]
   Fix Description: [What was changed and why]
   Unit Tests Added: [List of new/updated tests]
   ```

**Expected Outcome:** Bug fixed with unit tests, ready for code review.

**Quality Check:** ✅ Root cause identified (not just symptom patched). ✅ New unit test covers the exact failure scenario. ✅ All existing unit tests pass. ✅ Change is minimal and focused.

---

### Step 4.4: Pull Request Creation and Code Review

**Action:** Submit the fix for peer review and merge upon approval.

**How to Execute:**

1. Create a Pull Request with:
   - Title: `[TICKET-123] Fix: [Brief description]`
   - Description: Link to bug ticket, root cause, fix description, testing done
   - Reviewer: At least one peer developer (ideally the module owner if different)
2. PR must pass:
   - CI pipeline (build, lint, unit tests, integration tests)
   - Code review approval (at least 1 reviewer)
   - No merge conflicts with target branch
3. Reviewer checks:
   - Fix addresses root cause, not just symptom
   - No unintended side effects
   - Unit test adequately covers the bug scenario
   - Code quality maintained (no hacks, proper error handling)
4. After approval, merge to the release/develop branch.
5. Trigger deployment to test environment (automatic via CI/CD or manual).
6. Update ticket status to "Ready for QA Verification."

**Expected Outcome:** Bug fix merged and deployed to test environment.

**Quality Check:** ✅ PR approved by reviewer. ✅ CI pipeline green. ✅ Deployed to test environment successfully.

---

### Step 4.5: QA Verification in Test Environment

**Action:** QA verifies the fix resolves the reported issue in the test environment.

**How to Execute:**

1. Confirm the test environment has the latest build with the fix deployed.
2. Execute the exact steps from the original bug report:
   - Follow the Steps to Reproduce verbatim
   - Verify the Expected Result now occurs (not the previous Actual Result)
3. Test variations of the original bug:
   - Different input values that could trigger the same issue
   - Different browsers/devices if it was a UI bug
   - Edge cases related to the original scenario
4. Verify no regressions in adjacent functionality:
   - Test 3–5 related test cases from the same module
   - If the fix touched shared code, test other features that use it
5. Update the bug ticket:
   - **If PASSED**:
     ```
     Verification: PASSED
     Verified By: [QA Name]
     Verified Date: [Date]
     Verified Build: [Build number/version]
     Status: → Verified (Ready to Close)
     ```
   - **If FAILED**:
     ```
     Verification: FAILED
     Reason: [What still doesn't work]
     Evidence: [New screenshots/steps]
     Status: → Reopened
     Assigned To: [Original developer]
     ```
6. Reopened bugs get highest priority within their severity level.

**Expected Outcome:** Bug fix verified as working or ticket reopened with new details.

**Quality Check:** ✅ Original reproduction steps verified. ✅ Variations tested. ✅ Adjacent functionality spot-checked. ✅ Ticket updated with verification details.

---

### Step 4.6: Close Bug Tickets

**Action:** Formally close verified bug tickets and update tracking metrics.

**How to Execute:**

1. After QA verification passes, close the ticket:
   ```
   Status: Closed
   Resolution: Fixed
   Closed By: [QA Name]
   Closed Date: [Date]
   Fix Version: [Release version]
   ```
2. For deferred bugs (P3/P4 with PM approval):
   ```
   Status: Deferred
   Resolution: Deferred to [next release/sprint]
   PM Approval: [PM Name, Date]
   Reason: [Why deferred]
   ```
3. For Won't Fix:
   ```
   Status: Closed
   Resolution: Won't Fix
   Reason: [Justification]
   Approved By: [PM/Tech Lead Name]
   ```
4. Update the bug tracking dashboard/metrics:
   - Total bugs found, fixed, deferred, won't fix
   - Bugs by severity and module
   - Average time to fix by severity
   - Reopen rate (bugs that failed verification)
5. Review metrics with QA Lead weekly — high reopen rates indicate fix quality issues.

**Expected Outcome:** All resolved bugs formally closed with proper documentation.

**Quality Check:** ✅ Every closed bug has verification evidence. ✅ Deferred bugs have PM approval. ✅ Bug metrics updated.

---

### Step 4.7: Regression Testing of Affected Areas

**Action:** Execute targeted regression tests on areas affected by bug fixes to ensure fixes didn't introduce new issues.

**How to Execute:**

1. For each batch of bug fixes deployed, identify affected modules:
   - Check which files/modules were changed in the fix PRs
   - Map changed modules to relevant test cases
2. Execute all test cases for affected modules (not just the fixed bug's test case).
3. If any regression found:
   - Log as new bug with "Regression" tag
   - Link to the fix that caused it
   - Priority: P1 (regressions from fixes are always high priority)
4. After a full cycle of fixes and verification, execute the complete regression suite (from WI-QA-001 Step 1.6).
5. Only proceed to DP2 when the full regression suite passes.

**Expected Outcome:** Regression testing confirms fixes don't introduce new issues.

**Quality Check:** ✅ All affected modules retested. ✅ No new regressions introduced. ✅ Full regression suite passed.

---

### Decision Point 2 (DP2): All Critical/High Bugs Resolved?

**After completing bug resolution cycle:**

| Condition | Action |
|-----------|--------|
| **YES** — All Critical and High severity bugs are resolved and verified | Proceed to **WI-QA-005 (User Acceptance Testing)** |
| **NO** — Critical or High bugs remain open | **Continue Step 4** — repeat triage, fix, verify cycle |

> **Gate Criteria:**
> - Zero open Critical bugs
> - Zero open High bugs
> - Medium/Low bugs may remain open if deferred with PM approval
> - Full regression suite passing
> - QA Lead confirms readiness for UAT

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Fixed Code | Bug fixes merged to release branch | Git repository |
| Updated Unit Tests | New tests covering fixed bug scenarios | Test files in repository |
| Verified Bug Closures | All bugs verified and closed/deferred | Bug tracker tickets |
| Bug Metrics Report | Summary of bugs by severity, module, fix time | Report/Dashboard |
| Regression Test Results | Results from regression testing after fixes | Test report |

---

## 7. Success Criteria

✅ All Critical bugs resolved and verified
✅ All High bugs resolved and verified
✅ Deferred Medium/Low bugs have PM approval
✅ Full regression suite passing after all fixes
✅ Bug reopen rate < 15% (fixes are effective)
✅ QA Lead confirms readiness for UAT

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Fixing symptoms, not root cause** — bug keeps coming back in different forms | Require root cause analysis on every bug fix; reviewer must verify root cause is addressed |
| **Bug fix introduces new bugs** — insufficient regression testing | Mandatory regression testing of affected modules after every fix batch; reviewer checks blast radius |
| **Endless bug loop** — fixes create new bugs create new fixes | Set a time-box; if bug count isn't decreasing after 2 sprints, escalate to Tech Lead for architecture review |
| **QA and Dev disagree on severity** — "it's a feature not a bug" | Triage meeting resolves disputes; PM is the tiebreaker; document decision rationale |
| **Developer can't reproduce** — "works on my machine" | QA pairs with Dev via screen share; verify environment parity; check test data differences |
| **Deferred bugs pile up** — tech debt grows invisibly | Track deferred bugs on a dashboard; review with PM monthly; allocate 10–20% of sprint capacity for deferred bugs |
| **Skipping regression after "simple" fixes** — "I only changed one line" | One-line changes can break everything; always run regression on affected module minimum |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-QA-001 | Testing & QA | Parent procedure |
| WI-QA-001 | System & Manual Testing | Bug source (system/functional) |
| WI-QA-002 | Integration Testing | Bug source (integration) |
| WI-QA-003 | Performance Testing | Bug source (performance) |
| WI-QA-005 | User Acceptance Testing | Next step after resolution |

---

## 10. References

- ISTQB Foundation Level — Defect Management
- IEEE 1044 — Standard Classification for Software Anomalies
- Atlassian Bug Tracking Best Practices

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-QA-001 Step 4 |

---

**Document ID:** WI-QA-004-v1.0.0 | **Tier:** 3 - Work Instructions
