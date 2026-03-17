# Work Instruction: Development Completion

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-DEV-006-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Development |
| **Parent SOP** | SOP-DEV-015 (Development Process) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for completing the development cycle and handing off to QA as defined in Step 6 of the Development Process (SOP-DEV-015). It ensures all sprint work is verified, documented, and cleanly transitioned to the testing phase.

---

## 2. Scope

**Applies To:**
- End of each sprint or development cycle
- Feature-complete milestones
- Any handoff from Development to QA

**Responsible Role:** Tech Lead

---

## 3. Prerequisites

Before starting development completion, ensure you have:

☐ All sprint stories have approved and merged PRs (WI-DEV-005)
☐ CI pipeline passing on `develop` branch
☐ Access to project management tool for status updates
☐ QA team identified and available

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Merged Code | WI-DEV-005 (Code Review) | develop branch |
| Test Results | CI Pipeline | Test reports |
| Sprint Backlog | Project management tool | Ticket list |
| Acceptance Criteria | User Stories | Ticket details |

---

## 5. Procedure Steps

### Step 6.1: Verify All Sprint Stories Are Complete

**Action:** Confirm every committed story has been implemented, reviewed, and merged.

**How to Execute:**

1. Open the sprint board and review each story:

   | Story | Status | PR | Tests | Docs |
   |-------|--------|-----|-------|------|
   | PROJ-101 Password Reset | ✅ Merged | #42 | ✅ | ✅ |
   | PROJ-102 Email Verification | ✅ Merged | #45 | ✅ | ✅ |
   | PROJ-103 Profile Settings | ⚠️ In Review | #47 | ✅ | ✅ |

2. For each story, verify:
   - Ticket status is "Done" or "Ready for QA"
   - Associated PR is merged to `develop`
   - Acceptance criteria are met (cross-reference ticket)
   - Code documentation is complete (WI-DEV-003)

3. For incomplete stories:
   - If almost done (in review): Wait for merge or push for expedited review
   - If significantly incomplete: Move to next sprint with a note explaining why
   - Document the reason for carry-over in sprint notes

4. Update all ticket statuses to reflect their true state.

**Expected Outcome:** All sprint stories accounted for — either merged and complete, or explicitly carried over with documented reason.

**Quality Check:** ✅ No stories stuck in ambiguous states, ✅ Every "Done" story has a merged PR, ✅ Carry-overs documented with reason

---

### Step 6.2: Run Full Test Suite on Develop Branch

**Action:** Execute the complete test suite against the integrated `develop` branch.

**How to Execute:**

1. Ensure `develop` branch has all merged PRs:
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. Run the full test suite locally:
   ```bash
   npm run test -- --coverage --verbose
   ```

3. Verify results:
   - **Zero failures**: All tests pass
   - **Coverage ≥ 80%**: Overall line coverage meets threshold
   - **No new warnings**: No deprecation or lint warnings introduced

4. If tests fail on `develop` (integration issues from merging multiple features):
   - Identify the conflicting changes
   - Create a hotfix branch: `bugfix/PROJ-XXX-fix-develop-integration`
   - Fix, test, PR, merge — do NOT skip the review process even for fixes

5. Trigger a full CI pipeline run on `develop` and verify all stages pass:
   - Lint ✅
   - Unit tests ✅
   - Build ✅
   - Security scan ✅

6. Save or screenshot the CI results for the handoff record.

**Expected Outcome:** Full test suite passing on `develop` with ≥ 80% coverage; CI pipeline green.

**Quality Check:** ✅ Zero test failures on develop, ✅ Coverage meets threshold, ✅ CI pipeline fully green, ✅ No integration regressions

---

### Step 6.3: Update Project Status and Document Tech Debt

**Action:** Update sprint metrics and capture any technical debt introduced.

**How to Execute:**

1. Update the sprint burndown/status:
   - Stories completed vs. committed
   - Story points delivered vs. planned
   - Velocity trend (compare to last 3 sprints)

2. Document any technical debt created or discovered during the sprint:

   ```markdown
   ## Tech Debt Log — Sprint 5

   | ID | Description | Impact | Priority | Ticket |
   |----|-------------|--------|----------|--------|
   | TD-001 | Reset token cleanup job not implemented | Expired tokens accumulate in DB | Medium | PROJ-120 |
   | TD-002 | Email service has no retry logic | Failed emails silently lost | High | PROJ-121 |
   | TD-003 | Auth tests use hardcoded timestamps | Tests may break on DST changes | Low | PROJ-122 |
   ```

3. For each tech debt item:
   - Create a backlog ticket with clear description
   - Assess impact (performance, maintainability, reliability, security)
   - Set priority (address high-impact debt within 2 sprints)

4. Update the project README or `docs/tech-debt.md` with current known debt.

5. Note any architectural decisions made during the sprint that deviate from the original design — update the Architecture Document if significant.

**Expected Outcome:** Sprint metrics updated; tech debt documented with tickets created; architecture deviations recorded.

**Quality Check:** ✅ Sprint velocity recorded, ✅ All tech debt has tickets, ✅ High-priority debt scheduled for upcoming sprints

---

### Step 6.4: Prepare QA Handoff and Notify QA Team

**Action:** Create handoff documentation and notify QA that development is ready for testing.

**How to Execute:**

1. Prepare the QA Handoff document:

   ```markdown
   # QA Handoff — Sprint 5

   ## Date: 2026-02-19
   ## Branch: develop (commit: abc1234)
   ## Environment: staging (https://staging.app.example.com)

   ## Stories Ready for Testing

   | Ticket | Title | PR | Key Changes | Test Focus Areas |
   |--------|-------|----|-------------|-----------------|
   | PROJ-101 | Password Reset | #42 | New endpoint, email flow | Reset flow end-to-end, rate limiting, expired tokens |
   | PROJ-102 | Email Verification | #45 | Verification on signup | Signup flow, resend verification, link expiry |

   ## Environment Setup Notes
   - New env vars added: `SENDGRID_API_KEY`, `RESET_TOKEN_EXPIRY_HOURS`
   - Database migration required: `npm run db:migrate`
   - SendGrid test mode enabled on staging (emails go to inbox only)

   ## Known Issues / Limitations
   - Token cleanup job not yet implemented (expired tokens remain in DB but are rejected by the API)
   - Email delivery may have 30-second delay in staging

   ## Test Data
   - Test user: testuser@example.com / TestPass123!
   - Admin user: admin@example.com / AdminPass123!

   ## API Changes
   - New: POST /api/auth/reset-password
   - New: POST /api/auth/reset-password/confirm
   - Updated: Swagger docs at /api-docs

   ## Rollback Plan
   - Revert to commit xyz7890 if critical issues found
   ```

2. Deploy `develop` branch to the staging environment:
   ```bash
   # Trigger staging deployment (or verify auto-deploy completed)
   # Run database migrations on staging
   # Verify staging environment is healthy
   ```

3. Notify the QA team:
   - Send handoff document via the agreed channel (email, Slack, Jira)
   - Tag QA lead and assigned testers
   - Include link to staging environment and API docs
   - Set expectation for testing start date

4. Schedule a brief handoff meeting (15 minutes) if the sprint included complex features:
   - Walk through the changes
   - Demonstrate the happy path
   - Highlight areas of concern or risk

5. Update ticket statuses to "Ready for QA".

**Expected Outcome:** QA team notified with complete handoff documentation; staging environment deployed and verified; QA can begin testing independently.

**Quality Check:** ✅ Handoff document covers all stories, ✅ Staging environment running and accessible, ✅ QA team acknowledged receipt, ✅ Test data and credentials provided, ✅ Known issues documented

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Development Complete Status | All stories verified and merged | Sprint board |
| QA Handoff Document | Testing guide with environment details | Markdown / Document |
| Sprint Metrics | Velocity, burndown, completion rate | Project management tool |
| Tech Debt Log | Documented debt with tickets | Markdown + tickets |
| Staging Deployment | Code deployed and verified | Environment |

---

## 7. Success Criteria

✅ All committed sprint stories merged and verified
✅ Full test suite passing on `develop` (zero failures)
✅ Staging environment deployed and accessible
✅ QA Handoff document delivered and acknowledged
✅ Sprint metrics updated
✅ Tech debt documented with backlog tickets
✅ QA team can begin testing without developer assistance

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **"It works on develop" but staging is broken** | Always deploy to staging and smoke-test before handoff. Check env vars, migrations, and external service config on staging |
| **QA finds issues immediately because handoff was incomplete** | Use the handoff template consistently. Include known issues — QA wastes time investigating things you already know about |
| **Tech debt never gets addressed** | Track debt with tickets, review in sprint planning, and allocate 10-20% of sprint capacity to debt reduction |
| **Sprint carry-overs become invisible** | Document carry-overs explicitly in sprint notes. If a story carries over twice, escalate — it may need to be re-scoped |
| **Handoff is just "it's on staging, go test"** | That's not a handoff. QA needs context: what changed, what to focus on, what's known-broken, where to find things |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-DEV-015 | Development Process | Parent procedure |
| WI-DEV-005 | Code Review | Previous step |
| SOP-QA-001 | Testing & QA | Downstream (next phase) |

---

## 10. References

- Scrum Guide — Sprint Review: https://scrumguides.org
- Atlassian — Sprint Retrospectives: https://www.atlassian.com/agile/scrum/sprint-reviews

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-DEV-015 Step 6 |

---

**Document ID:** WI-DEV-006-v1.0.0 | **Tier:** 3 - Work Instructions
