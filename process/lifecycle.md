# Lifecycle — Stage-by-Stage Walkthrough

## Stage 1: Requirements

**Trigger:** You submit an initial brief.

**What happens:**
1. Planning agent receives your brief
2. Reads project documentation (README, architecture docs, API specs)
3. Scans the codebase for relevant patterns and existing implementations
4. Checks the patterns library for applicable company-wide patterns
5. If docs are incomplete → consults lead dev agent for technical constraints
6. Creates feature ticket(s) on Linear with:
   - Description, user story
   - Testable acceptance criteria
   - Feature branch name
   - Technical context gathered
   - Dependencies
7. Creates sprint plan (ordered sequence with dependencies)
8. Sets ticket status: **Ready for Review**

**Your action:** Review the ticket on Linear.
- Approve → status moves to **Ready for Dev**
- Request changes → planning agent revises

---

## Stage 2: Development

**Trigger:** Ticket status changes to "Ready for Dev" on Linear.

**What happens:**
1. Lead dev agent analyzes the ticket's stack requirements
2. Assigns the appropriate specialist dev agent
3. Dev agent creates feature branch (name from ticket)
4. Dev agent builds the feature following acceptance criteria
5. Docs agent runs alongside — documents new APIs, components, config changes
6. Dev agent opens a PR referencing the Linear ticket
7. Ticket status: **In Review**

**Your action (Gate 2):** Review the PR.
- Provide feedback as comments on the PR or Linear ticket
- Dev agent sees your comments + its prior work, makes targeted fixes on the same branch
- When satisfied → you signal it's ready for QA
- Ticket status: **In QA**

**Feedback loop:** Your comments and QA comments are treated identically. The dev agent always:
1. Reads all feedback (yours + QA)
2. Reviews its own prior commits
3. Makes targeted fixes (not full rewrites)
4. Pushes to the same branch

---

## Stage 3: Testing

**Trigger:** Ticket status changes to "In QA" or PR is ready for QA.

**What happens:**
1. QA agent picks up the PR
2. Reads acceptance criteria from the Linear ticket
3. Runs the app locally
4. Performs functional testing against each acceptance criterion
5. Writes automated tests for the feature
6. Reports results on both the PR and Linear ticket

**Outcomes:**
- **All pass** → QA approves PR → merge → ticket status: **Done**
- **Failures found** → QA documents issues on PR + Linear → ticket status: **Back to Dev**
- **Critical/recurring issues** → QA escalates to you with explanation

**Escalation triggers:**
- Core functionality fundamentally broken
- Same issue recurring across multiple QA cycles (signals requirements problem)
- Can't test due to environment/dependency issues
- Acceptance criteria are ambiguous

---

## Stage 4: Deployment

To be defined.

---

## Status Flow (Linear)

```
Draft → Ready for Review → Ready for Dev → In Progress → In Review → In QA → Done
                                                ↑                       |
                                                └───────────────────────┘
                                                     (QA fail → Back to Dev)
```
