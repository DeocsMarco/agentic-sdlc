# Work Instruction: User Acceptance Testing (UAT)

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-QA-005-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Quality Assurance |
| **Parent SOP** | SOP-QA-001 (Testing & QA) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for executing User Acceptance Testing (UAT) as defined in Step 5 of the Testing & QA phase (SOP-QA-001). It ensures the client validates the system against their business requirements, provides structured feedback, and grants formal acceptance before deployment.

---

## 2. Scope

**Applies To:**
- All projects requiring client approval before deployment
- Major feature releases requiring client validation
- Projects transitioning from QA testing to deployment

**Responsible Roles:** Client (primary tester), QA Team (facilitation and support)

---

## 3. Prerequisites

Before starting UAT, ensure you have:

☐ All Critical and High bugs resolved (DP2 passed — WI-QA-004)
☐ Full regression suite passing
☐ UAT environment provisioned with latest stable build
☐ UAT environment is isolated from ongoing QA/Dev work
☐ UAT Script Template (TMPL-UAT-001) prepared
☐ Client contacts identified and availability confirmed
☐ Client has access credentials for UAT environment
☐ Known issues list prepared (deferred Medium/Low bugs with workarounds)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| UAT Script Template | Templates | TMPL-UAT-001 |
| Stable UAT Environment | DevOps | Deployed environment |
| User Stories with Acceptance Criteria | Requirements Phase | Backlog |
| Known Issues List | QA Team (WI-QA-004) | Document |
| Client Contact List | PM | Contact details |
| Design Mockups | Design Phase | Reference material |

---

## 5. Procedure Steps

### Step 5.1: Prepare UAT Environment

**Action:** Set up a dedicated, stable environment specifically for client acceptance testing.

**How to Execute:**

1. Request a UAT environment from DevOps that:
   - Mirrors production configuration (same services, same infrastructure specs)
   - Is isolated — no deployments or changes during UAT period
   - Has realistic sample data (anonymized production data or comprehensive seed data)
   - Has all third-party integrations connected (sandbox/test mode)
2. Verify the UAT environment:
   - Deploy the exact build that passed QA testing (same version/tag)
   - Run a quick smoke test (login, navigate core features, submit a form)
   - Confirm all services are running and responsive
   - Verify test data is present and makes sense for UAT scenarios
3. Create client access:
   - Set up test user accounts for each UAT participant with appropriate roles
   - Prepare a credentials sheet (share securely — not via plain email)
   - Verify each account can log in and access the system
4. Prepare the known issues document:
   ```
   Known Issues — UAT Build v[X.Y.Z]
   | # | Issue | Severity | Workaround | Target Fix |
   |---|-------|----------|------------|------------|
   | 1 | Date picker shows UTC | Low | Manually adjust time | v1.1 |
   | 2 | Export CSV slow for >5K rows | Medium | Filter to smaller set | v1.1 |
   ```
5. Share environment URL, credentials, and known issues with client 1–2 days before UAT starts.

**Expected Outcome:** Stable UAT environment ready with client access and known issues documented.

**Quality Check:** ✅ Smoke test passed on UAT environment. ✅ Client accounts working. ✅ Known issues list shared with client.

---

### Step 5.2: Create UAT Scripts from User Stories

**Action:** Transform user stories into step-by-step UAT test scripts the client can follow.

**How to Execute:**

1. Select the user stories to include in UAT:
   - All stories in the current release scope
   - Prioritize by business value — core workflows first
   - Group by business process (e.g., "Order Management", "Reporting", "User Management")
2. For each user story, create a UAT script using TMPL-UAT-001:
   ```
   UAT Scenario: [US-XXX] [User Story Title]
   Business Process: [e.g., Order Management]
   Preconditions: [What must be true before starting]
   
   Steps:
   1. Navigate to [URL/page]
   2. Click [button/link]
   3. Enter [specific test data]
   4. Verify [expected result]
   5. [Continue...]
   
   Expected Outcome: [What the client should see/experience]
   
   Client Result: ☐ Pass  ☐ Fail  ☐ Pass with Comments
   Client Notes: ___________________________
   ```
3. Write scripts in **business language**, not technical language:
   - ❌ "Verify the POST /api/orders endpoint returns 201"
   - ✅ "Create a new order and verify it appears in the Orders list"
4. Include specific test data the client should use (names, amounts, dates).
5. Organize scripts into a logical flow — the client should be able to work through them sequentially.
6. Have PM review UAT scripts before sending to client to ensure business alignment.

**Expected Outcome:** Complete UAT script document covering all user stories in business-friendly language.

**Quality Check:** ✅ Every user story in scope has a UAT script. ✅ Scripts use business language. ✅ PM has reviewed and approved scripts.

---

### Step 5.3: Schedule UAT Sessions with Client

**Action:** Coordinate UAT sessions with client stakeholders to maximize participation and efficiency.

**How to Execute:**

1. Identify UAT participants:
   - **Primary testers**: End users who will use the system daily (mandatory)
   - **Business approver**: Client stakeholder who can sign off (mandatory)
   - **Subject matter experts**: For domain-specific validation (recommended)
2. Schedule UAT sessions:
   - Block 2–4 hour sessions (longer sessions lose focus)
   - Plan for 2–5 days of UAT depending on system complexity
   - Schedule at least 2 sessions to allow for issue resolution between sessions
   - Example schedule:
     ```
     Day 1 (Tue): UAT Session 1 — Core workflows (3 hours)
     Day 2 (Wed): QA addresses findings from Session 1
     Day 3 (Thu): UAT Session 2 — Remaining scenarios + retests (3 hours)
     Day 4 (Fri): Final fixes if needed
     Day 5 (Mon): UAT Session 3 — Final verification + sign-off (2 hours)
     ```
3. Send calendar invites with:
   - UAT environment URL and credentials
   - UAT script document
   - Known issues list
   - Contact info for QA support during sessions
   - Clear expectation: **Client performs the testing** (not just watches a demo)
4. Confirm attendance 2 days before the first session — reschedule if key participants can't attend.

**Expected Outcome:** UAT sessions scheduled with confirmed participants.

**Quality Check:** ✅ Primary testers and business approver confirmed. ✅ Calendar invites sent with all materials. ✅ Client understands they must perform testing themselves.

---

### Step 5.4: Guide Client Through UAT Scenarios

**Action:** Facilitate UAT sessions by supporting the client while they execute test scenarios.

**How to Execute:**

1. Start each session with a brief overview (5–10 minutes):
   - What's being tested today
   - How to record results (pass/fail/comments on the UAT script)
   - Who to contact for questions or issues
   - Remind: explore beyond the scripts if something feels off
2. During the session:
   - **Let the client drive** — they click, they type, they navigate
   - QA observes and takes notes, but does NOT operate the system for the client
   - If the client is stuck, guide verbally: "Try clicking the Orders tab" not "Let me show you"
   - Screen share (if remote) so QA can observe and capture issues in real-time
3. For each UAT scenario:
   - Client executes the steps from the UAT script
   - Client records their result: Pass / Fail / Pass with Comments
   - For failures: capture what happened, expected vs. actual, screenshot if possible
   - For "Pass with Comments": capture the feedback — this is valuable UX insight
4. Encourage exploratory testing:
   - "Is there anything else you'd normally do at this point in your workflow?"
   - "Does the terminology match what your team uses?"
   - "Is the navigation intuitive for your team?"
5. At the end of each session:
   - Review findings together — confirm QA understood the issues correctly
   - Agree on severity of issues found
   - Communicate timeline for addressing findings

**Expected Outcome:** UAT scenarios executed by client with results and feedback captured.

**Quality Check:** ✅ Client performed the testing (not QA demonstrating). ✅ All scenarios have a recorded result. ✅ Feedback captured in writing (not just verbal).

---

### Step 5.5: Capture Feedback and Issues

**Action:** Document all client feedback, categorize issues, and track to resolution.

**How to Execute:**

1. Compile all feedback from UAT sessions into a structured list:
   ```
   | # | Type | Description | Severity | UAT Scenario | Client Priority |
   |---|------|-------------|----------|--------------|-----------------|
   | 1 | Bug | Discount not applied on bulk orders | High | UAT-012 | Must Fix |
   | 2 | UX | "Submit" button hard to find on mobile | Medium | UAT-005 | Should Fix |
   | 3 | Enhancement | Want export to PDF, not just CSV | Low | UAT-018 | Nice to Have |
   | 4 | Clarification | Report columns need renamed labels | Low | UAT-020 | Should Fix |
   ```
2. Categorize each item:
   - **Bug**: System doesn't work as specified → log in bug tracker, route to WI-QA-004
   - **UX Issue**: Works but confusing/inconvenient → log for current or next release
   - **Enhancement**: New requirement not in original scope → PM decides (in scope or change request)
   - **Clarification**: Misunderstanding of requirement → clarify with client, update if needed
3. For items categorized as Enhancements (out of scope):
   - PM discusses with client — is this a change request (new scope + timeline impact)?
   - Do NOT commit to enhancements during UAT without PM approval
4. Create action plan for Must Fix and Should Fix items with target dates.

**Expected Outcome:** All UAT feedback categorized, tracked, and action-planned.

**Quality Check:** ✅ Every feedback item categorized and assigned. ✅ Bugs logged in tracker. ✅ Enhancements flagged for PM decision. ✅ Action plan communicated to client.

---

### Step 5.6: Address UAT Findings

**Action:** Fix bugs and issues found during UAT, then deploy to UAT environment for re-testing.

**How to Execute:**

1. Route bugs to the bug resolution process (WI-QA-004):
   - Triage, assign, fix, verify — same process as before
   - Priority: UAT bugs get priority over deferred QA bugs
2. For UX issues agreed to fix in current release:
   - Create tickets, assign to developers
   - Fix, review, deploy to UAT environment
3. After fixes are deployed:
   - QA verifies all fixes in UAT environment before client re-tests
   - Update the UAT feedback tracker with fix status
   - Notify client that fixes are ready for re-testing
4. Do NOT redeploy to UAT during an active client session — coordinate deployment windows.

**Expected Outcome:** UAT findings addressed and deployed for client re-testing.

**Quality Check:** ✅ All Must Fix items resolved. ✅ QA pre-verified before client re-tests. ✅ UAT environment updated with fixes.

---

### Step 5.7: Obtain Formal Client Acceptance

**Action:** Get the client's formal sign-off that the system meets their requirements.

**How to Execute:**

1. Compile the UAT summary:
   - Total scenarios tested: X
   - Passed: X / Failed: X / Passed with Comments: X
   - Issues found: X (Fixed: X, Deferred: X, Out of Scope: X)
   - Known issues remaining (with workarounds)
2. Present the UAT summary to the client business approver.
3. Request formal acceptance:
   - Client signs off that the system meets acceptance criteria
   - Acceptance can be:
     - **Full Acceptance**: All requirements met, proceed to deployment
     - **Conditional Acceptance**: Proceed with deployment, listed items to be fixed in v1.1
     - **Rejection**: Critical issues remain, repeat UAT after resolution
4. Document acceptance in writing:
   ```
   UAT Sign-off
   Project: [Project Name]
   Build Version: [X.Y.Z]
   Date: [Date]
   
   ☐ Full Acceptance — Approved for deployment
   ☐ Conditional Acceptance — Approved with conditions listed below
   ☐ Rejected — Issues listed below must be resolved
   
   Conditions/Notes: ___________________________
   
   Client Approver: _______________  Date: ________
   PM Acknowledgment: _____________  Date: ________
   ```
5. If rejected, return to Step 5.6 and schedule additional UAT sessions.

**Expected Outcome:** Formal client acceptance (or rejection with clear next steps).

**Quality Check:** ✅ Client acceptance documented in writing. ✅ Conditions (if any) are specific and trackable. ✅ PM has acknowledged the acceptance.

---

### Decision Point 3 (DP3): UAT Passed?

| Condition | Action |
|-----------|--------|
| **YES** — Client granted Full or Conditional Acceptance | Proceed to **WI-QA-006 (Testing Sign-off)** |
| **NO** — Client rejected or critical findings remain | Address findings (Step 5.6) and **repeat UAT** (Step 5.3–5.7) |

> **Note:** Maximum 3 UAT cycles recommended. If UAT fails 3 times, escalate to senior management — there may be a requirements misalignment that needs resolution at a higher level.

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| UAT Results | Pass/fail per scenario with client feedback | UAT Script (completed) |
| Client Feedback Log | Categorized list of all feedback items | Spreadsheet/Document |
| Client Acceptance | Formal sign-off document | Signed form |
| UAT Issues List | Bugs and items found during UAT | Bug tracker tickets |

---

## 7. Success Criteria

✅ All UAT scenarios executed by the client (not demonstrated by QA)
✅ All Must Fix items resolved and re-verified
✅ Client has formally accepted the system (Full or Conditional)
✅ Acceptance conditions are documented and trackable
✅ UAT artifacts archived for project records

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Demo disguised as UAT** — QA drives while client watches | Explicitly set the rule: client's hands on keyboard; QA only guides verbally |
| **Client no-shows** — key stakeholders too busy for UAT | Schedule UAT 2+ weeks in advance; get PM to escalate importance; offer flexible time slots |
| **Scope creep during UAT** — client requests new features as "bugs" | Categorize clearly: Bug vs. Enhancement; PM gates all new scope; use change request process |
| **Unstable UAT environment** — bugs found that aren't real (env issues) | Smoke test before every session; freeze deployments during UAT; have DevOps on standby |
| **Client doesn't know what to test** — wanders aimlessly | Provide structured UAT scripts; walk through the first scenario together; then let them continue |
| **Conditional acceptance becomes infinite** — conditions keep growing | Cap conditions; define "conditional" as max 5 non-critical items; anything more = rejection + re-scope |
| **No written sign-off** — verbal "looks good" treated as acceptance | Always get it in writing; use the formal sign-off form; no exceptions |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-QA-001 | Testing & QA | Parent procedure |
| TMPL-UAT-001 | UAT Script Template | UAT script format |
| WI-QA-004 | Bug Resolution | Bug fix process for UAT findings |
| WI-QA-006 | Testing Sign-off | Next step after UAT acceptance |

---

## 10. References

- ISTQB Foundation Level — Acceptance Testing
- ISO 9001:2015 Clause 8.6 — Release of Products and Services
- Agile Alliance — User Acceptance Testing

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-QA-001 Step 5 |

---

**Document ID:** WI-QA-005-v1.0.0 | **Tier:** 3 - Work Instructions
