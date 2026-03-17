# Work Instruction: Testing Sign-off

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-QA-006-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Quality Assurance |
| **Parent SOP** | SOP-QA-001 (Testing & QA) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for completing testing sign-off as defined in Step 6 of the Testing & QA phase (SOP-QA-001). It ensures all test results are compiled, metrics documented, approvals obtained, and the deployment handoff package is prepared — establishing the formal gate between Testing and Deployment.

---

## 2. Scope

**Applies To:**
- All projects that have completed UAT with client acceptance (WI-QA-005)
- The formal transition from Testing & QA to Deployment & Release

**Responsible Roles:** QA Lead (primary), PM (co-signer)

---

## 3. Prerequisites

Before starting testing sign-off, ensure you have:

☐ Client acceptance obtained (Full or Conditional) from UAT (WI-QA-005)
☐ All Critical and High bugs resolved and verified
☐ Deferred bugs documented with PM approval
☐ All test reports from Steps 1–5 available
☐ Testing Sign-off Form (FORM-QA-001) available
☐ Access to bug tracker for metrics extraction

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| System Test Results | WI-QA-001 | Test report |
| Integration Test Results | WI-QA-002 | Test report |
| Performance Test Report | WI-QA-003 | Test report |
| Bug Resolution Summary | WI-QA-004 | Bug tracker / report |
| UAT Results & Client Acceptance | WI-QA-005 | UAT report + signed form |
| Testing Sign-off Form | Templates | FORM-QA-001 |

---

## 5. Procedure Steps

### Step 6.1: Compile Final Test Report

**Action:** Aggregate all testing results from all phases into a single comprehensive test report.

**How to Execute:**

1. Create the Final Test Report with the following sections:
   ```
   Final Test Report — [Project Name] v[X.Y.Z]
   Date: [Date]
   Prepared By: [QA Lead Name]
   
   1. Executive Summary
   2. Test Scope and Approach
   3. System & Manual Testing Results
   4. Integration Testing Results
   5. Performance Testing Results
   6. Bug Resolution Summary
   7. UAT Results
   8. Test Coverage and Metrics
   9. Known Issues and Workarounds
   10. Recommendations
   11. Sign-off
   ```
2. **Executive Summary** (1 page max):
   - Overall quality assessment: Ready / Ready with Conditions / Not Ready
   - Key statistics: total tests, pass rate, bugs found/fixed/deferred
   - Highlights: major risks, notable achievements
3. For each testing phase (sections 3–7):
   - Summary of what was tested
   - Pass/fail counts
   - Key findings
   - Link to detailed phase report
4. Ensure consistency — numbers in the summary must match the detailed reports.

**Expected Outcome:** Comprehensive Final Test Report aggregating all testing phases.

**Quality Check:** ✅ All 5 testing phases represented. ✅ Numbers are consistent across summary and details. ✅ Executive summary fits on 1 page.

---

### Step 6.2: Document Test Coverage and Metrics

**Action:** Calculate and document test coverage metrics and quality indicators.

**How to Execute:**

1. Calculate test coverage metrics:
   ```
   | Metric                           | Value    |
   |----------------------------------|----------|
   | Total Requirements               | [X]      |
   | Requirements with Test Cases     | [X]      |
   | Requirements Coverage            | [X%]     |
   | Total Test Cases                 | [X]      |
   | Test Cases Executed              | [X]      |
   | Execution Coverage               | [X%]     |
   | Test Cases Passed                | [X]      |
   | Test Cases Failed                | [X]      |
   | Pass Rate                        | [X%]     |
   ```
2. Calculate defect metrics:
   ```
   | Metric                           | Value    |
   |----------------------------------|----------|
   | Total Bugs Found                 | [X]      |
   | Critical                         | [X]      |
   | High                             | [X]      |
   | Medium                           | [X]      |
   | Low                              | [X]      |
   | Bugs Fixed & Verified            | [X]      |
   | Bugs Deferred                    | [X]      |
   | Bug Fix Rate                     | [X%]     |
   | Bug Reopen Rate                  | [X%]     |
   | Average Time to Fix (Critical)   | [X days] |
   | Average Time to Fix (High)       | [X days] |
   ```
3. Calculate UAT metrics:
   ```
   | Metric                           | Value    |
   |----------------------------------|----------|
   | UAT Scenarios                    | [X]      |
   | Passed                           | [X]      |
   | Failed (resolved)                | [X]      |
   | UAT Cycles Required              | [X]      |
   | Client Acceptance Type           | Full / Conditional |
   ```
4. Compare metrics against quality thresholds:
   - Requirements coverage > 95% (target: 100%)
   - Test execution coverage: 100%
   - Pass rate > 95%
   - Bug fix rate > 90%
   - Bug reopen rate < 15%

**Expected Outcome:** Complete metrics dashboard included in Final Test Report.

**Quality Check:** ✅ All metrics calculated accurately. ✅ Metrics compared against thresholds. ✅ Any below-threshold metric has an explanation.

---

### Step 6.3: List Known Issues with Workarounds

**Action:** Document all known issues going into production with their workarounds and planned resolution.

**How to Execute:**

1. Compile the known issues list from:
   - Deferred bugs from WI-QA-004 (Medium/Low with PM approval)
   - Conditional acceptance items from WI-QA-005
   - Any limitations documented during testing
2. For each known issue, document:
   ```
   | # | Issue | Severity | Workaround | Target Fix Version | Owner |
   |---|-------|----------|------------|--------------------|-------|
   | 1 | CSV export slow >5K rows | Medium | Filter to <5K rows | v1.1 | Dev Team |
   | 2 | Date picker shows UTC | Low | Users in UTC+8 add 8hrs | v1.1 | Dev Team |
   | 3 | IE11 layout issues | Low | Use Chrome/Edge | Won't Fix | N/A |
   ```
3. For each workaround, verify it actually works — don't document theoretical workarounds.
4. Ensure support team / client is aware of known issues before deployment.
5. Create tickets in the backlog for all items targeted for future fix versions.

**Expected Outcome:** Known issues list with verified workarounds, included in Final Test Report and deployment handoff.

**Quality Check:** ✅ Every known issue has a workaround (or explicit "no workaround" noted). ✅ Workarounds verified as functional. ✅ Future fix versions assigned.

---

### Step 6.4: Obtain QA Lead Sign-off

**Action:** QA Lead formally certifies the system has met quality standards for release.

**How to Execute:**

1. QA Lead reviews the complete Final Test Report:
   - All testing phases completed
   - Metrics meet quality thresholds
   - All Critical/High bugs resolved
   - Known issues are acceptable for release
2. QA Lead completes their section of FORM-QA-001:
   ```
   QA Lead Certification
   
   I certify that:
   ☐ All planned test phases have been completed
   ☐ All Critical and High severity defects have been resolved
   ☐ Test coverage meets the defined quality thresholds
   ☐ Known issues have been documented with workarounds
   ☐ The system is ready for deployment
   
   QA Lead Name: _______________
   Signature: _______________
   Date: _______________
   
   Conditions (if any): ___________________________
   ```
3. If QA Lead cannot sign off:
   - Document the specific blockers
   - Create action plan to resolve blockers
   - Do NOT proceed to deployment

**Expected Outcome:** QA Lead sign-off obtained on FORM-QA-001.

**Quality Check:** ✅ QA Lead has reviewed the complete Final Test Report. ✅ All certification checkboxes confirmed. ✅ Any conditions are specific and documented.

---

### Step 6.5: Obtain Client Sign-off

**Action:** Client formally approves the system for deployment to production.

**How to Execute:**

1. Present the Final Test Report summary to the client business approver:
   - Executive summary
   - UAT results
   - Known issues list
   - Deployment timeline
2. Client completes their section of FORM-QA-001:
   ```
   Client Certification
   
   I confirm that:
   ☐ User Acceptance Testing has been completed satisfactorily
   ☐ The system meets the agreed business requirements
   ☐ Known issues and workarounds are acceptable for go-live
   ☐ I authorize deployment to production
   
   Client Approver Name: _______________
   Signature: _______________
   Date: _______________
   
   Conditions (if any): ___________________________
   ```
3. If client has already signed off during UAT (WI-QA-005 Step 5.7), reference that sign-off — do not require duplicate signatures unless significant changes occurred after UAT.
4. Store the signed form in the project documentation repository.

**Expected Outcome:** Client sign-off obtained on FORM-QA-001.

**Quality Check:** ✅ Client approver has authority to approve. ✅ Sign-off is in writing (not verbal). ✅ Signed form stored in project repository.

---

### Step 6.6: Prepare Deployment Handoff Package

**Action:** Assemble everything the Deployment team needs to release the system to production.

**How to Execute:**

1. Create the Deployment Handoff Package containing:
   ```
   Deployment Handoff Package — [Project Name] v[X.Y.Z]
   
   1. Release Build
      - Git tag/commit: [hash]
      - Build artifact location: [URL/path]
      - Build verified: ☐ Yes
   
   2. Deployment Instructions
      - Environment variables / config changes
      - Database migrations required
      - Third-party service configuration changes
      - Feature flags to enable/disable
      - DNS/routing changes
   
   3. Rollback Plan
      - Previous stable version: [X.Y.Z-1]
      - Rollback procedure: [steps]
      - Rollback decision criteria: [what triggers rollback]
   
   4. Post-Deployment Verification
      - Smoke test checklist (5-10 critical checks)
      - Monitoring alerts to watch
      - Key metrics to verify
   
   5. Sign-offs
      - QA Lead: [Name, Date] ✅
      - Client: [Name, Date] ✅
   
   6. Attachments
      - Final Test Report
      - Known Issues List
      - FORM-QA-001 (signed)
   ```
2. Review the handoff package with the Deployment/DevOps team:
   - Walk through deployment instructions
   - Confirm rollback plan is feasible
   - Verify they have access to all referenced artifacts
3. Get acknowledgment from the Deployment team that the package is complete and clear.

**Expected Outcome:** Complete deployment handoff package delivered to Deployment team.

**Quality Check:** ✅ Handoff package reviewed with Deployment team. ✅ Rollback plan included and feasible. ✅ All sign-offs attached.

---

### Step 6.7: Archive All Test Artifacts

**Action:** Store all testing documentation and artifacts for project records and audit trail.

**How to Execute:**

1. Archive the following in the project documentation repository:
   - Final Test Report
   - All phase-specific test reports (System, Integration, Performance, UAT)
   - Test case suite (current version)
   - Bug tracker export (all bugs with resolution)
   - Performance test scripts and results data
   - UAT scripts (completed with client results)
   - FORM-QA-001 (signed by QA Lead and Client)
   - Deployment Handoff Package
2. Organize in a standard folder structure:
   ```
   /[Project]/testing/v[X.Y.Z]/
   ├── final-test-report.pdf
   ├── system-test-results/
   ├── integration-test-results/
   ├── performance-test-results/
   ├── bug-resolution-summary/
   ├── uat-results/
   ├── sign-off-form-QA-001.pdf
   └── deployment-handoff.pdf
   ```
3. Verify all documents are accessible to authorized team members.
4. Notify PM that testing phase is complete and all artifacts are archived.

**Expected Outcome:** All test artifacts archived and organized for project records.

**Quality Check:** ✅ All artifacts listed above are archived. ✅ Folder structure is consistent. ✅ PM notified of completion.

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Final Test Report | Comprehensive report covering all testing phases | Document (PDF) |
| Testing Sign-off (FORM-QA-001) | Signed by QA Lead and Client | Signed form |
| Deployment Handoff Package | Everything needed for deployment | Document package |
| Known Issues List | Deferred issues with workarounds | Document |
| Archived Test Artifacts | All testing documentation stored | Project repository |

---

## 7. Success Criteria

✅ Final Test Report compiled and complete
✅ Test coverage metrics meet quality thresholds
✅ Known issues documented with workarounds
✅ QA Lead sign-off obtained
✅ Client sign-off obtained
✅ Deployment handoff package delivered and acknowledged
✅ All test artifacts archived

**⚠️ CRITICAL: Do NOT proceed to deployment without BOTH QA Lead and Client sign-off.**

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Skipping sign-off** — "everyone agreed verbally, let's just deploy" | Enforce the gate: no signed FORM-QA-001 = no deployment; exceptions require VP/Director approval |
| **Incomplete handoff** — deployment team discovers missing config or migration | Use the handoff checklist; walk through it with DevOps; get their acknowledgment before closing |
| **Metrics don't add up** — summary numbers don't match detailed reports | Cross-check all numbers before finalizing; have a second QA review the math |
| **Known issues surprise the client post-launch** — "nobody told us about this" | Share the known issues list with client BEFORE sign-off; include in deployment handoff |
| **No rollback plan** — deployment goes wrong with no way back | Rollback plan is mandatory in the handoff package; verify it's feasible with DevOps |
| **Archiving skipped** — "we'll do it later" (never happens) | Archive as part of this WI, not after deployment; it's a step, not an afterthought |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-QA-001 | Testing & QA | Parent procedure |
| FORM-QA-001 | Testing Sign-off Form | Sign-off document |
| WI-QA-005 | User Acceptance Testing | Previous step |
| SOP-OPS-001 | Deployment & Release | Downstream (next phase) |

---

## 10. References

- ISO 9001:2015 Clause 8.6 — Release of Products and Services
- IEEE 829 — Standard for Software Test Documentation
- ISTQB Foundation Level — Test Completion

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-QA-001 Step 6 |

---

**Document ID:** WI-QA-006-v1.0.0 | **Tier:** 3 - Work Instructions
