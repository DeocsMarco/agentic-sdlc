# Work Instruction: Code Review

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-DEV-005-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Development |
| **Parent SOP** | SOP-DEV-015 (Development Process) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for the code review process as defined in Step 5 of the Development Process (SOP-DEV-015). It ensures all code is peer-reviewed for quality, correctness, and compliance before being merged into the main codebase.

---

## 2. Scope

**Applies To:**
- All pull requests targeting `develop` or `main` branches
- Feature work, bug fixes, hotfixes, and refactoring
- Both the PR author and reviewers

**Responsible Roles:** Reviewers, Tech Lead

---

## 3. Prerequisites

Before starting code review, ensure you have:

☐ All unit tests passing with ≥ 80% coverage (WI-DEV-004, DP1 passed)
☐ CI pipeline green on the feature branch
☐ Code documented per WI-DEV-003
☐ Code Review Checklist available (FORM-REVIEW-001)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Pull Request | Git hosting platform | PR |
| Feature Branch | Repository | Git branch |
| Code Review Checklist | Templates | FORM-REVIEW-001 |
| User Story / Ticket | Project management tool | Ticket |

---

## 5. Procedure Steps

### Step 5.1: Create Pull Request with Description

**Action:** Open a well-structured pull request for the completed feature.

**How to Execute:**

1. Ensure your branch is up-to-date with `develop`:
   ```bash
   git fetch origin
   git rebase origin/develop
   # Resolve any conflicts
   git push --force-with-lease
   ```

2. Create a Pull Request using the project's PR template:

   ```markdown
   ## Summary
   Brief description of what this PR does.

   ## Ticket
   Closes PROJ-101

   ## Changes
   - Added password reset endpoint (`POST /api/auth/reset-password`)
   - Created ResetToken model and migration
   - Integrated SendGrid for reset emails
   - Added rate limiting (15-min cooldown)

   ## Testing
   - [ ] Unit tests added (92% coverage on new code)
   - [ ] Manual testing completed
   - [ ] Edge cases tested (invalid email, rate limit, expired token)

   ## Screenshots / API Examples
   (if applicable)

   ## Checklist
   - [ ] Code follows coding standards (DOC-CODE-001)
   - [ ] Self-reviewed my own code
   - [ ] Comments added for complex logic
   - [ ] Documentation updated (README, API docs, CHANGELOG)
   - [ ] No hardcoded secrets or credentials
   - [ ] No console.log/print statements left in
   ```

3. Link the PR to the ticket in the project management tool.

4. Set the PR title to follow the Conventional Commits format:
   ```
   feat(auth): add password reset flow (PROJ-101)
   ```

5. Self-review the diff before requesting reviewers. Check for:
   - Accidental file inclusions (`.env`, build artifacts, IDE config)
   - Debug code left in (console.log, debugger statements)
   - TODO comments without ticket references

**Expected Outcome:** PR created with complete description, linked to ticket, self-reviewed.

**Quality Check:** ✅ PR description explains what and why, ✅ Ticket linked, ✅ Self-review completed (no debug code, no accidental files)

---

### Step 5.2: Request Reviewers

**Action:** Assign appropriate reviewers to the PR.

**How to Execute:**

1. Select reviewers based on:
   - **Domain expertise**: Who knows this area of the codebase?
   - **Availability**: Don't assign someone on PTO or overloaded
   - **Distribution**: Rotate reviewers to spread knowledge

2. Assign minimum 1 reviewer (2 for critical paths: auth, payments, data models).

3. If the PR touches:
   - **Infrastructure/CI**: Include DevOps
   - **Database schema**: Include Tech Lead
   - **Security-sensitive code**: Include Tech Lead or security-aware reviewer
   - **API contracts**: Include frontend team member

4. Notify reviewers via the platform and team channel:
   ```
   PR ready for review: feat(auth): add password reset flow
   https://github.com/org/project/pull/42
   ~350 lines | auth service, new endpoint, migration
   ```

5. Expected review turnaround: within **4 business hours** for standard PRs, **2 hours** for hotfixes.

**Expected Outcome:** Appropriate reviewers assigned and notified; review expected within 4 hours.

**Quality Check:** ✅ At least 1 reviewer assigned, ✅ Critical paths have 2 reviewers, ✅ Reviewers notified with context

---

### Step 5.3: Perform Code Review (Reviewer)

**Action:** Review the PR for functionality, quality, testing, documentation, and security.

**How to Execute:**

1. Start by reading the PR description and linked ticket to understand the intent.

2. Review using FORM-REVIEW-001 criteria:

   **Functionality:**
   - Does the code do what the ticket requires?
   - Are acceptance criteria met?
   - Are edge cases handled?

   **Code Quality:**
   - Is the code readable and well-structured?
   - Are functions small and focused?
   - Are naming conventions consistent?
   - Is there unnecessary complexity or duplication?
   - Are SOLID principles followed?

   **Testing:**
   - Are tests present and meaningful?
   - Do tests cover the happy path and error paths?
   - Is coverage adequate for the changes?

   **Documentation:**
   - Are public functions documented (JSDoc/docstrings)?
   - Is the CHANGELOG updated?
   - Are new env vars in `.env.example`?

   **Security:**
   - No hardcoded secrets or credentials?
   - Input validation present?
   - SQL injection / XSS prevention where applicable?
   - Proper authorization checks?

3. Leave clear, constructive feedback:
   ```
   ✅ Good patterns:
   "Nice use of dependency injection here — makes testing clean."

   🔧 Suggestions (non-blocking):
   "nit: Consider extracting this validation into a reusable helper."

   ❌ Required changes (blocking):
   "Bug: This doesn't handle the case where `user.email` is null.
    The query will fail with an unhandled TypeError."
   ```

4. Categorize comments:
   - **Blocking**: Must fix before approval (bugs, security, missing validation)
   - **Non-blocking (nit)**: Suggestions that can be addressed now or in a follow-up
   - **Question**: Clarification needed to continue review

5. Complete review with a verdict:
   - **Approve**: Code is ready to merge
   - **Request Changes**: Blocking issues must be addressed
   - **Comment**: Non-blocking feedback only

**Expected Outcome:** Thorough review completed with clear, categorized feedback.

**Quality Check:** ✅ All FORM-REVIEW-001 categories checked, ✅ Feedback is specific and actionable, ✅ Blocking vs. non-blocking clearly indicated

---

### Step 5.4: Address Review Feedback (Author)

**Action:** Respond to and resolve all review comments.

**How to Execute:**

1. Read all comments before making changes (understand the full picture).

2. For each comment:
   - **Agree**: Make the fix, reply "Fixed in [commit hash]" or "Done"
   - **Disagree**: Explain your reasoning respectfully. If unresolved, escalate to Tech Lead
   - **Question**: Answer the question with context

3. Make fixes in new commits (don't force-push during review — it erases comment context):
   ```bash
   git commit -m "fix(auth): handle null email edge case per review"
   git push
   ```

4. Re-request review after addressing all blocking comments.

5. Resolve comment threads as they are addressed (both author and reviewer can resolve).

**Expected Outcome:** All blocking feedback addressed; non-blocking feedback addressed or tracked as follow-up tickets.

**Quality Check:** ✅ All blocking comments resolved, ✅ Each comment has a response, ✅ Non-blocking items tracked if deferred

---

### Step 5.5: Approve and Merge

**Action:** Obtain required approvals and merge the PR.

**How to Execute:**

1. **Approval requirements:**
   - Standard PRs: Minimum 1 approval
   - Critical path PRs (auth, payments, schema changes): Minimum 2 approvals
   - Tech Lead approval required for: new dependencies, architecture changes, database migrations

2. Before merging, verify:
   - CI pipeline is green (all checks passing)
   - Branch is up-to-date with `develop` (no conflicts)
   - All review conversations resolved

3. Select merge strategy:
   - **Squash and merge** (recommended for feature branches): Combines all commits into one clean commit on develop
   - **Merge commit**: Preserves full branch history (use for release branches)
   - **Rebase and merge**: Linear history without merge commits

4. Merge the PR:
   ```
   Squash commit message:
   feat(auth): add password reset flow (#42)

   - Added POST /api/auth/reset-password endpoint
   - Created ResetToken model and migration
   - Integrated SendGrid for reset emails
   - Added 15-minute rate limiting

   Closes PROJ-101
   ```

5. Verify the feature branch is deleted after merge (should be automatic if configured).

6. Update the ticket status to "Done" or "Ready for QA".

**Decision Point (DP2):**
- ✅ **PR approved and merged** → Proceed to Step 6 (Development Completion, WI-DEV-006)
- ❌ **PR not approved** → Address feedback (Step 5.4), re-request review

**Expected Outcome:** PR merged to develop with clean commit message; ticket updated.

**Quality Check:** ✅ Required approvals obtained, ✅ CI green before merge, ✅ No unresolved conversations, ✅ Feature branch deleted, ✅ Ticket status updated

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Approved Pull Request | PR with required approvals | Git platform |
| Merged Code | Feature merged to develop branch | Git |
| Review Record | Comments and approval history | PR history |
| Completed FORM-REVIEW-001 | Review checklist (if used formally) | Document |

---

## 7. Success Criteria

✅ All PRs reviewed before merge (no direct pushes to develop/main)
✅ All blocking feedback addressed
✅ Minimum approval requirements met
✅ CI pipeline green at time of merge
✅ PR description and commit message are clear and complete
✅ Review turnaround within 4 business hours

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Rubber-stamp reviews (approve without reading)** | Use FORM-REVIEW-001 checklist; Tech Lead should spot-check review quality; reviewers should leave at least 1 substantive comment |
| **PRs sit unreviewed for days** | Set team SLA (4 hours); use Slack reminders; make review time a visible team metric |
| **Huge PRs (1000+ lines)** | Reject and ask to split. Set a soft limit (400 lines). Authors should self-split before requesting review |
| **Review comments become personal** | Comment on the code, not the coder. "This function could be simplified" not "You wrote this wrong." Assume good intent |
| **Force-pushing during review** | Never force-push after review starts — it destroys comment context. Add fixup commits instead; squash on merge |
| **Merging with failing CI** | Branch protection should prevent this. If bypassed, revert immediately and fix |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-DEV-015 | Development Process | Parent procedure |
| WI-DEV-004 | Unit Testing | Previous step |
| WI-DEV-006 | Development Completion | Next step |
| FORM-REVIEW-001 | Code Review Checklist | Review criteria |
| DOC-CODE-001 | Coding Standards | Quality reference |

---

## 10. References

- Google Engineering Practices — Code Review: https://google.github.io/eng-practices/review/
- Conventional Comments: https://conventionalcomments.org
- Atlassian Code Review Best Practices: https://www.atlassian.com/agile/software-development/code-reviews

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-DEV-015 Step 5 |

---

**Document ID:** WI-DEV-005-v1.0.0 | **Tier:** 3 - Work Instructions
