# Work Instruction: Code Development

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-DEV-002-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Development |
| **Parent SOP** | SOP-DEV-015 (Development Process) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for writing production code as defined in Step 2 of the Development Process (SOP-DEV-015). It ensures developers follow consistent practices for branching, coding, committing, and delivering working features.

---

## 2. Scope

**Applies To:**
- All feature development work within a sprint
- Bug fixes and enhancements
- Any code changes that result in a pull request

**Responsible Role:** Developers

---

## 3. Prerequisites

Before starting code development, ensure you have:

☐ Development environment set up and running (WI-DEV-001)
☐ Access to project management tool (Jira, Linear, etc.)
☐ Sprint backlog groomed with estimated stories
☐ LLD Document available for the feature area
☐ Coding Standards document reviewed (DOC-CODE-001)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| User Stories with Acceptance Criteria | Requirements Phase / Sprint Backlog | Tickets |
| LLD Document | Design Phase (WI-DES-002) | Document |
| Coding Standards | Templates | DOC-CODE-001 |
| Architecture Document | Design Phase | Document |

---

## 5. Procedure Steps

### Step 2.1: Pull User Stories from Sprint Backlog

**Action:** Select and prepare work items for development.

**How to Execute:**

1. Review the sprint backlog in the project management tool.

2. Pick the highest-priority unassigned story or the next story assigned to you.

3. Before writing any code, verify the story is ready:
   - Acceptance criteria are clear and testable
   - Dependencies on other stories are resolved or non-blocking
   - Design specs (LLD) cover the feature
   - Questions/ambiguities have been answered by the Product Owner

4. Move the ticket to "In Progress" and assign yourself.

5. Break the story into technical subtasks if it involves multiple components:
   ```
   Story: PROJ-101 — User can reset password
   ├── Subtask: Add reset endpoint to auth controller
   ├── Subtask: Create email service integration
   ├── Subtask: Build reset token model and migration
   └── Subtask: Add reset password UI form
   ```

6. Estimate if the story will take more than 2 days. If so, discuss splitting it with the Tech Lead.

**Expected Outcome:** Story assigned, understood, and broken into actionable subtasks.

**Quality Check:** ✅ Acceptance criteria are unambiguous, ✅ No blocking dependencies, ✅ LLD section exists for this feature

---

### Step 2.2: Create Feature Branch

**Action:** Create an isolated branch for the work.

**How to Execute:**

1. Ensure your local `develop` branch is up to date:
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. Create a feature branch following the naming convention:
   ```bash
   git checkout -b feature/PROJ-101-password-reset
   ```

   Naming format: `feature/{TICKET-ID}-{short-kebab-description}`

   Examples:
   ```
   feature/PROJ-101-password-reset
   bugfix/PROJ-202-fix-null-avatar
   hotfix/PROJ-303-patch-payment-timeout
   ```

3. Push the branch to remote immediately (makes it visible to the team):
   ```bash
   git push -u origin feature/PROJ-101-password-reset
   ```

4. **One branch per story.** Do not combine multiple unrelated stories in a single branch.

**Expected Outcome:** Feature branch created from latest `develop`, pushed to remote, named correctly.

**Quality Check:** ✅ Branch name includes ticket ID, ✅ Branch is based on latest `develop`, ✅ Only one story per branch

---

### Step 2.3: Implement Code per LLD Specifications

**Action:** Write the feature code following design specs and coding standards.

**How to Execute:**

1. Open the LLD Document section for your feature. Identify:
   - Data models / database changes needed
   - API endpoints or interface contracts
   - Business logic rules
   - Integration points

2. Implement in logical order (typically bottom-up):
   - **Layer 1**: Data models, database migrations, repository layer
   - **Layer 2**: Service/business logic layer
   - **Layer 3**: Controller/API layer or UI components
   - **Layer 4**: Integration wiring, configuration

3. Follow coding standards (DOC-CODE-001):
   - Use consistent naming conventions (camelCase for JS/TS, snake_case for Python)
   - Keep functions small and focused (≤ 30 lines as a guideline)
   - Apply SOLID principles:
     - **S**ingle Responsibility: Each class/module does one thing
     - **O**pen/Closed: Extend behavior without modifying existing code
     - **L**iskov Substitution: Subtypes must be substitutable
     - **I**nterface Segregation: Small, specific interfaces over large ones
     - **D**ependency Inversion: Depend on abstractions, not implementations

4. Handle errors explicitly:
   ```typescript
   // ❌ Bad: Swallowing errors
   try { await saveUser(user); } catch (e) { }

   // ✅ Good: Handle or propagate with context
   try {
     await saveUser(user);
   } catch (error) {
     logger.error('Failed to save user', { userId: user.id, error });
     throw new AppError('USER_SAVE_FAILED', 'Could not save user profile', error);
   }
   ```

5. Avoid premature optimization. Write clear, correct code first. Optimize only when profiling shows a bottleneck.

**Expected Outcome:** Feature code implemented per LLD, following coding standards and SOLID principles.

**Quality Check:** ✅ Implementation matches LLD spec, ✅ No lint errors, ✅ Error handling present for failure paths, ✅ Functions are small and focused

---

### Step 2.4: Follow Commit Conventions

**Action:** Make frequent, well-structured commits.

**How to Execute:**

1. Use Conventional Commits format:
   ```
   <type>(<scope>): <short description>

   [optional body]

   [optional footer(s)]
   ```

   Types:
   | Type | Use When |
   |------|----------|
   | `feat` | Adding a new feature |
   | `fix` | Fixing a bug |
   | `refactor` | Restructuring code (no behavior change) |
   | `docs` | Documentation only |
   | `test` | Adding or updating tests |
   | `chore` | Build, CI, tooling changes |
   | `style` | Formatting, whitespace (no logic change) |

2. Examples of good commit messages:
   ```
   feat(auth): add password reset endpoint

   Implements POST /api/auth/reset-password with email validation,
   token generation, and expiry (24h). Sends reset email via SendGrid.

   Closes PROJ-101
   ```

   ```
   fix(auth): prevent reset token reuse after password change

   Previously, reset tokens remained valid after the password was
   changed. Now tokens are invalidated upon successful reset.

   Fixes PROJ-115
   ```

3. Commit frequently — at least once per logical unit of work:
   - After adding a model and migration
   - After implementing a service method
   - After connecting the controller
   - After adding tests

4. **Keep commits atomic**: Each commit should leave the codebase in a working state. Never commit half-written functions or broken imports.

5. Stage selectively — don't `git add .` blindly:
   ```bash
   git add src/services/auth.service.ts
   git add src/models/reset-token.model.ts
   git commit -m "feat(auth): add reset token model and auth service method"
   ```

**Expected Outcome:** Clean, descriptive commit history with atomic changes.

**Quality Check:** ✅ Each commit message follows Conventional Commits, ✅ Commits are atomic (codebase builds after each), ✅ Ticket ID referenced in commit or PR

---

### Step 2.5: Keep Changes Focused and Manage Scope

**Action:** Resist scope creep and keep the branch focused on the story.

**How to Execute:**

1. If you discover a bug unrelated to your story:
   - Create a new ticket in the backlog
   - Do NOT fix it in your current branch (unless it's a 1-line fix that blocks your work)
   - Mention it in standup

2. If you notice refactoring opportunities:
   - Note them in a tech debt ticket
   - Only refactor if it directly supports the current feature
   - Refactoring-only changes get their own branch and PR

3. Keep your branch diff manageable:
   - Target: < 400 lines changed per PR
   - If approaching 500+ lines, discuss splitting with Tech Lead
   - Large PRs are harder to review and more error-prone

4. Regularly rebase or merge from `develop` to avoid drift:
   ```bash
   git fetch origin
   git rebase origin/develop
   # OR
   git merge origin/develop
   ```
   Rebase frequency: at least every 2 days, or daily on active projects.

**Expected Outcome:** Branch contains only changes related to the assigned story; no scope creep.

**Quality Check:** ✅ No unrelated changes in the diff, ✅ PR diff is reviewable (< 400 lines ideally), ✅ Branch is up-to-date with develop

---

### Step 2.6: Handle Blockers

**Action:** Identify and escalate blockers promptly.

**How to Execute:**

1. If blocked by an unclear requirement:
   - Post the specific question in the ticket comments
   - Tag the Product Owner or BA
   - If no response within 4 hours, escalate in standup or to Tech Lead
   - Do NOT guess — incorrect assumptions cost more to fix later

2. If blocked by a technical dependency (another team's API, infrastructure):
   - Create a mock/stub to unblock yourself
   - Document the mock contract and assumptions
   - Create a follow-up ticket to replace mock with real integration

3. If blocked by an environment issue:
   - Raise immediately in the team channel
   - Tag DevOps with specific error details (not just "it's broken")
   - Switch to another story if the block will last > 2 hours

4. Update the ticket status to "Blocked" with a clear reason and who can unblock it.

**Expected Outcome:** Blockers identified early, communicated clearly, and worked around where possible.

**Quality Check:** ✅ Blocker is documented in the ticket, ✅ Relevant person is tagged, ✅ Developer switched to alternative work if block persists

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Working Code | Feature implemented per LLD and acceptance criteria | Source files in feature branch |
| Feature Branch | Isolated branch with clean commit history | Git branch |
| Updated Subtasks | Ticket status reflects progress | Project management tool |

---

## 7. Success Criteria

✅ All acceptance criteria for the story are met
✅ Code follows coding standards (DOC-CODE-001) with zero lint errors
✅ Commits follow Conventional Commits format
✅ Branch contains only changes related to the assigned story
✅ Code builds and runs successfully locally
✅ No hardcoded secrets, credentials, or environment-specific values

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Starting to code without reading the LLD** | Spend 15-30 minutes reading the relevant LLD section before touching code; saves hours of rework |
| **Giant "god commit" with everything** | Commit after each logical step; if you're writing a commit message longer than 3 lines of body, the commit is too big |
| **Branching from a stale develop** | Always `git pull origin develop` before creating a branch; set up a git alias: `git config alias.fresh "!git checkout develop && git pull && git checkout -b"` |
| **Mixing refactoring with feature work** | Keep them separate. Reviewers can't tell if a behavior change is intentional when buried in a refactor |
| **Sitting on a blocker for hours** | 30-minute rule: if you're stuck for 30 minutes with no progress, ask for help. It's not weakness, it's efficiency |
| **Hardcoding config values** | Use environment variables from day one; reference `.env.example` for all config |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-DEV-015 | Development Process | Parent procedure |
| WI-DEV-001 | Environment & Repository Setup | Previous step |
| WI-DEV-003 | Code Documentation | Next step |
| WI-DEV-004 | Unit Testing | Parallel step |
| DOC-CODE-001 | Coding Standards | Compliance reference |

---

## 10. References

- Conventional Commits: https://www.conventionalcommits.org
- SOLID Principles: https://en.wikipedia.org/wiki/SOLID
- Clean Code (Robert C. Martin)
- Atlassian Git Feature Branch Workflow: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-DEV-015 Step 2 |

---

**Document ID:** WI-DEV-002-v1.0.0 | **Tier:** 3 - Work Instructions
