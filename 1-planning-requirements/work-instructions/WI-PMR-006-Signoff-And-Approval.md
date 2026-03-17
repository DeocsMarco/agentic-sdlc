# Work Instruction: Sign-off & Approval

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-PMR-006-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-03-02 |
| **Review Date** | 2027-03-02 |
| **Department** | Project Management |
| **Parent SOP** | SOP-PMR-001 (Planning & Requirements) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for conducting a formal requirements review, obtaining client sign-off on the requirements baseline, and securing internal leadership approval to proceed to the Design phase. It covers Step 6 of the Planning & Requirements SOP (SOP-PMR-001), combining client requirements approval and internal planning authorization into a single, streamlined workflow.

**⚠️ Critical Rule:** Verbal approval is NOT sufficient — for either client sign-off or internal approval. Formal, signed documents are required before proceeding.

---

## 2. Scope

**Applies To:**
- All new client projects completing the Planning & Requirements phase
- Major change requests requiring re-baselining of requirements or leadership re-approval
- Projects where planning assumptions have changed significantly

**Responsible Role:** Project Manager

---

## 3. Prerequisites

Before seeking approval and sign-off, ensure you have:

☐ Requirements Document completed and internally reviewed (WI-PMR-002)
☐ User Stories with acceptance criteria complete (WI-PMR-003)
☐ SRS Document completed (WI-PMR-003)
☐ Technical Feasibility Assessment Report (WI-PMR-004)
☐ Project Objectives defined with success criteria (WI-PMR-002)
☐ Risk Register completed (WI-PMR-005)
☐ Budget Estimate completed (WI-PMR-005)
☐ Resource Plan completed (WI-PMR-005)
☐ Project Timeline completed (WI-PMR-005)
☐ Client has received documents for pre-review (sent at least 3 business days prior)
☐ Requirements Sign-off Form (FORM-PM-008-001) prepared
☐ Planning Package Checklist (FORM-PM-009-001) available
☐ Requirements Review Preparation Checklist (CHECK-REQ-005) available
☐ No outstanding Critical issues

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Requirements Document | WI-PMR-002 output | Document (TMPL-REQ-001) |
| User Stories with Acceptance Criteria | WI-PMR-003 output | Backlog / Document |
| SRS Document | WI-PMR-003 output | Document (TMPL-SRS-001) |
| Feasibility Assessment Report | WI-PMR-004 output | Form (FORM-REQ-004) |
| Project Objectives | WI-PMR-002 output | Document |
| Risk Register | WI-PMR-005 output | Document (TMPL-RISK-001) |
| Budget Estimate | WI-PMR-005 output | Document (TMPL-BUDGET-001) |
| Resource Plan | WI-PMR-005 output | Document (TMPL-RESOURCE-001) |
| Project Timeline | WI-PMR-005 output | Gantt / Timeline |
| Requirements Traceability Matrix | WI-PMR-003 output | Form (FORM-REQ-003) |

---

## 5. Procedure Steps

### Part A: Formal Requirements Review

---

### Step 6.1: Prepare the Requirements Review Package

**Action:** Assemble the review package and ensure all materials are ready for stakeholder review.

**How to Execute:**

1. Complete CHECK-REQ-005 (Requirements Review Preparation Checklist) to verify readiness

2. Assemble the requirements review package:
   - SRS Document (latest version)
   - User Stories summary (epic breakdown, story counts, point estimates)
   - Feasibility Assessment Report with verdict
   - Risk register with Critical/High risks highlighted
   - Traceability Matrix
   - Open questions list (anything unresolved from previous steps)

3. Distribute the review package to all stakeholders **at least 3 business days** before the review meeting:
   - Client stakeholders (decision-makers, product owner, SMEs)
   - Technical team (CTO, Tech Lead)
   - QA Lead (if available)
   - Account Manager
   - Include a cover note summarizing what's in the package, what to focus on, known issues, and meeting details

4. Request stakeholders to read materials before the meeting and note any questions or concerns

**Expected Outcome:** Review package distributed to all stakeholders with adequate review time

**Quality Check:** ✅ Package distributed at least 3 business days before review meeting

---

### Step 6.2: Conduct the Formal Review Meeting

**Action:** Facilitate a structured review meeting walking through all requirements documentation.

**How to Execute:**

1. Meeting setup:
   - Duration: 2–4 hours (depending on project size)
   - Attendees: All primary stakeholders, CTO/Tech Lead, BA, PM
   - Recording: Record the meeting (with permission)
   - Assign roles: Facilitator (PM), Note-taker (BA or designated person)

2. Meeting agenda:
   - Opening (10 min): Purpose, ground rules, agenda overview
   - SRS Walkthrough (60–120 min): System overview, functional requirements, NFRs, interfaces, data, integrations — section by section
   - User Stories Review (30–45 min): Epic-by-epic walkthrough, acceptance criteria spot-checks, priority validation
   - Feasibility Findings (20–30 min): Present verdict, discuss yellow/red items, review technical risks
   - Open Questions & Issues (15–20 min)
   - Next Steps (10 min): Feedback timeline, approval process overview

3. During the walkthrough:
   - Go section by section — don't skip ahead
   - For each section, ask: "Is this complete and accurate?"
   - Capture all feedback using FORM-REQ-006 (Review Findings Report)
   - Classify feedback as: Correction, Clarification, Addition, Question
   - Don't debate solutions in the meeting — capture and resolve offline

4. For feasibility findings:
   - For yellow items: discuss conditions, document whether acceptable
   - For red items: present alternatives, agree on resolution (modify, defer, or remove)
   - Get stakeholder buy-in on risk acceptance

**Expected Outcome:** Complete review of all requirements with feedback captured

**Quality Check:** ✅ All SRS sections reviewed, ✅ All feedback logged with classification, ✅ Feasibility resolutions agreed

---

### Step 6.3: Process Feedback and Update Documents

**Action:** Consolidate review feedback and update all documents.

**How to Execute:**

1. Within 24 hours, consolidate all feedback:
   - Meeting notes, FORM-REQ-006 entries, post-meeting written feedback (allow 2 business days)

2. Categorize and assign each feedback item:

   | Category | Action Required |
   |----------|----------------|
   | Correction | Fix immediately in SRS/stories |
   | Clarification | Rewrite section for clarity |
   | Addition | Add new requirement/story through standard process |
   | Question | Research and respond to stakeholder |
   | Out of Scope | Log as future enhancement |

3. For each item, assign owner, deadline, and status

4. Update all documents:
   - Apply corrections and clarifications to SRS
   - Add new requirements (with proper IDs and traceability)
   - Update user stories and acceptance criteria
   - Update traceability matrix
   - Re-assess feasibility for modified requirements if needed
   - Increment document versions

5. If changes are minor: circulate updated documents for confirmation
6. If changes are significant: schedule a focused follow-up review session

**Expected Outcome:** All documents updated with review feedback incorporated

**Quality Check:** ✅ Every feedback item marked "Resolved" with reference to the update made

---

### Part B: Client Requirements Sign-off

---

### Step 6.4: Compile the Client Approval Package

**Action:** Assemble the final requirements package for client sign-off.

**How to Execute:**

1. Compile the following into a single requirements package:
   - **SRS Document** (final version — all review feedback incorporated)
   - **User Stories** (prioritized backlog with acceptance criteria)
   - **Project Objectives** (SMART objectives with success criteria)
   - **Timeline Overview** (high-level milestones and phase dates)
   - **Assumptions & Constraints** documented
   - **Out of Scope** (explicit list of Won't Have items)
   - **Feasibility Assessment Report** (with agreed resolutions)
   - **Requirements Traceability Matrix** (fully linked)

2. Create a cover page / executive summary:
   - Project name and reference, document version and date
   - Summary of scope (requirements count, epics, stories)
   - Key dates and milestones
   - Technical feasibility verdict
   - What the client is being asked to approve

3. Quality check: consistent formatting, no TBD items, cross-references correct

4. Prepare FORM-PM-008-001 (Requirements Sign-off Form):
   - Pre-fill project details
   - Include signature lines for all required signatories
   - Include statement that changes after sign-off follow the change request process

**Expected Outcome:** Complete, polished requirements package ready for client sign-off

**Quality Check:** ✅ All documents included, ✅ No TBD items, ✅ Executive summary created, ✅ Sign-off form prepared

---

### Step 6.5: Conduct Client Sign-off Meeting

**Action:** Walk the client through the final package and obtain formal signature.

**How to Execute:**

1. Schedule the sign-off meeting:
   - Duration: 30–60 minutes (this is not a review — it's a sign-off)
   - Attendees: Client decision-maker(s), PM, Account Manager

2. Presentation structure:
   - Executive Summary (5–10 min)
   - Changes Since Review (5–10 min)
   - Scope Confirmation (10 min) — **Review Out of Scope explicitly** and get acknowledgment of each exclusion
   - Risks and Mitigation (5 min)
   - Sign-off Request (5–10 min)

3. Seek sign-off:
   - If all concerns addressed: present FORM-PM-008-001 for signature
   - Explain: "You're approving this as the baseline. Changes after this follow the change request process."
   - If client needs minor changes: document, update within 3 business days, obtain signature on updated documents
   - If client needs major changes: assess impact, schedule follow-up — do NOT proceed until sign-off obtained

4. Obtain signature (digital signature preferred, printed form acceptable, email confirmation as last resort)

5. **⚠️ NEVER accept verbal-only approval.** If client resists signing, escalate to Account Manager.

**Expected Outcome:** Signed FORM-PM-008-001 with all required signatories

**Quality Check:** ✅ Decision-maker present, ✅ Out of scope explicitly acknowledged, ✅ Formal signature obtained (NOT verbal only)

---

### Step 6.6: Distribute and Archive Signed Requirements

**Action:** Distribute the approved baseline and archive properly.

**How to Execute:**

1. Distribute signed documents to all stakeholders (client and internal):
   - Subject: "[Project Name] — Requirements Baseline APPROVED [Date]"
   - Reference the change request process

2. Archive in project documentation repository:
   - Store signed FORM-PM-008-001
   - Store approved versions marked "APPROVED — v[X]"
   - Lock/protect approved versions from editing
   - Create baseline snapshot (export as PDF, store immutably)

3. Update project management tool: mark requirements phase milestone as complete

4. Initialize a change request log for tracking future scope changes

**Expected Outcome:** Signed documents distributed, archived, and baseline established

**Quality Check:** ✅ All stakeholders received signed documents, ✅ Documents archived and protected, ✅ Change request process communicated

---

### Part C: Internal Planning Approval

---

### Step 6.7: Compile the Internal Planning Package

**Action:** Assemble all planning deliverables for leadership review.

**How to Execute:**

1. Use FORM-PM-009-001 (Planning Package Checklist) to verify completeness

2. Compile:
   - Signed Requirements Document (client-approved baseline)
   - User Stories & Product Backlog (prioritized and estimated)
   - Project Objectives (SMART with success criteria)
   - Risk Register (scored risks with mitigations)
   - Budget Estimate (labor, non-labor, contingency, contract comparison)
   - Resource Plan (team roster, allocations, availability)
   - Project Timeline (phases, milestones, dependencies, critical path)
   - Client Sign-off Form (signed FORM-PM-008-001)

3. Create a **Planning Summary Document** (2–3 pages) for leadership:
   - Project Overview: Client, scope summary, business value
   - Key Numbers: Total budget, contingency, team size, duration, go-live date
   - Scope Summary: Epic count, Must Have vs. Should Have breakdown
   - Top 5 Risks: One-line each with scores and mitigation approach
   - Resource Highlights: Gaps, external contractors, key dependencies
   - Recommendation: "Approve to proceed to Design phase" with any caveats

**Expected Outcome:** Complete planning package with summary document, verified by checklist

**Quality Check:** ✅ FORM-PM-009-001 all items checked, ✅ Summary document created

---

### Step 6.8: Deliver Leadership Presentation and Obtain Approval

**Action:** Present to CEO/COO and secure formal authorization to proceed.

**How to Execute:**

1. Use FORM-PM-009-002 (Leadership Presentation Checklist) to structure preparation

2. Build a presentation (10–15 slides):
   - Project Overview → Scope Summary → Client Alignment → Timeline → Budget → Resource Plan → Risk Profile → Assumptions & Dependencies → Recommendation → Questions & Decision

3. Anticipate leadership questions:
   - "Is this profitable?" → Have margin calculation ready
   - "Do we have the team?" → Have specific names and allocation percentages
   - "What if X goes wrong?" → Reference top risks and mitigations
   - "When do we start billing?" → Have payment milestone alignment

4. Send the Planning Summary Document to leadership at least 1 day in advance

5. Schedule 30–45 minute approval meeting with CEO and/or COO

6. **Deliver the presentation:**
   - State recommendation upfront: "My recommendation is to approve. Here's why."
   - Keep under 20 minutes; leave time for questions
   - Be transparent about concerns; use data, not opinions

7. **Seek the decision:**
   - **Approved:** Confirm next steps
   - **Approved with conditions:** Document conditions with owners and deadlines
   - **Deferred:** Clarify what's needed and by when
   - **Rejected:** Understand reasons, discuss path forward

**Expected Outcome:** Leadership decision obtained and documented

**Quality Check:** ✅ FORM-PM-009-002 completed, ✅ Summary sent in advance, ✅ Decision clearly documented

---

### Step 6.9: Document Approval and Transition to Design

**Action:** Formalize the approval and initiate the Design phase.

**How to Execute:**

1. Complete FORM-PM-009-003 (Approval Documentation Form):
   - Decision: Approved / Approved with Conditions / Deferred / Rejected
   - Approver(s): Name, title, date
   - Conditions (if any) with owners and deadlines
   - Project authorization, budget authorization, resource authorization

2. Obtain approver signature on FORM-PM-009-003

3. If **Approved with Conditions:** list each condition with owner, due date, and whether it blocks Design start
4. If **Deferred:** document what's needed, set target date, do NOT begin Design

5. **Communicate approval:**
   - Internal: "[Project Name] — Planning & Requirements Phase APPROVED. Proceeding to Design."
   - Client: "We've received internal approval to proceed. Here's what happens next."

6. **Transition to Design:**
   - Schedule Design phase kick-off within 3–5 business days
   - Ensure all approved documents are accessible to the Design team
   - Brief Tech Lead and Design Lead on key requirements, constraints, and risks
   - Update project management tool with Design phase milestones
   - Set up requirements change management (change request form, change control board)

7. **Close Planning & Requirements phase:**
   - Mark phase as complete in project tool
   - Archive all forms and documents
   - Record lessons learned

**Expected Outcome:** Formal approval documented, all stakeholders notified, Design phase kick-off scheduled

**Quality Check:** ✅ FORM-PM-009-003 signed, ✅ Internal and client notified, ✅ Design kick-off scheduled, ✅ Documents accessible to Design team, ✅ Phase closed in project tool

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Review Findings Report | All feedback from the review | Form (FORM-REQ-006) |
| Updated SRS Document | SRS with all feedback incorporated | Document (TMPL-SRS-001) |
| Signed FORM-PM-008-001 | Requirements Sign-off Form with client signature | Signed PDF / Document |
| Approved Requirements Baseline | Locked versions of all approved documents | Documents / PDF archive |
| Planning Package | Complete set of all planning documents | Document bundle |
| Planning Summary | 2–3 page executive summary | Document |
| Leadership Presentation | Decision-focused slides/talking points | Slides / Document |
| Signed FORM-PM-009-003 | Approval Documentation Form | Signed form |
| Completed FORM-PM-009-001 | Planning Package Checklist | Checklist |
| Completed FORM-PM-009-002 | Leadership Presentation Checklist | Checklist |
| Completed CHECK-REQ-005 | Requirements Review Preparation Checklist | Checklist |
| Change Request Log | Initialized log for tracking future changes | Spreadsheet / Tool |
| Design Phase Kick-off Invite | Scheduled meeting with agenda | Calendar invite |

---

## 7. Quality Checks

### Part A: Review Completeness
✅ Review package distributed ≥ 3 business days before meeting
✅ All SRS sections reviewed with stakeholders
✅ User stories validated by client stakeholders
✅ Feasibility findings discussed and resolutions agreed
✅ All feedback items captured, categorized, assigned, and resolved
✅ Documents updated with all feedback incorporated

### Part B: Client Sign-off
✅ Requirements package compiled with no TBD items
✅ Executive summary created and presented
✅ Review meeting conducted with decision-maker present
✅ Out of scope items explicitly reviewed and acknowledged
✅ Formal client signature obtained (NOT verbal only)
✅ Signed requirements distributed and archived

### Part C: Internal Approval
✅ Planning Package Checklist (FORM-PM-009-001) fully verified
✅ Leadership Presentation Checklist (FORM-PM-009-002) completed
✅ Approval Documentation Form (FORM-PM-009-003) signed
✅ All stakeholders (internal and client) notified of approval
✅ Design phase kick-off scheduled within 3–5 business days
✅ All planning documents archived and accessible
✅ Planning & Requirements phase marked complete

---

## 8. Success Criteria

- Client has formally signed the Requirements Sign-off Form
- All stakeholders have received the approved baseline
- The approved baseline is archived and protected from unauthorized changes
- Change request process is in effect and communicated
- Leadership has formally approved the project to proceed
- All conditions (if any) are documented with owners and deadlines
- The project team knows the Design phase is starting and what's expected
- The client is informed and engaged for the next phase
- Design phase kick-off is on the calendar

---

## 9. Common Pitfalls

| Pitfall | Prevention |
|---------|------------|
| Accepting verbal approval ("Looks good, let's proceed") | Always require a signed form — for both client and internal. No exceptions |
| Client asks for "just one more thing" at the review | Acknowledge, note it, sign off on current baseline, add as change request |
| Sending documents without enough pre-review time | Always allow ≥ 3 business days; 5 is better |
| Missing the decision-maker at the review meeting | Confirm attendance directly; reschedule if they can't attend |
| Out of scope items not explicitly reviewed | Always walk through Won't Have items — silence is not agreement |
| Documents have TBD or placeholder items | Complete every item before seeking sign-off |
| Not locking approved versions | Lock/protect immediately after signing to prevent scope disputes |
| Presenting to leadership without advance materials | Always send summary ≥ 1 day before |
| Presentation too long or too detailed | Keep under 20 minutes — leaders want decisions, not document readings |
| Not anticipating "Is this profitable?" | Always have margin analysis ready |
| Proceeding to Design without formal approval | Never start Design work before the approval form is signed |
| Forgetting to notify client after internal approval | Client should hear about the green light promptly |
| Conditions from approval not tracked | Document every condition with owner and date; review in first Design standup |

---

## 10. Tips for Success

- **Distribute early:** 3 business days minimum, 5 is better
- **Set expectations:** Tell reviewers what to focus on and how to provide feedback
- **Separate the review from the sign-off:** Review is for discussion; sign-off is for commitment
- **Make approval easy:** The sign-off meeting should be a formality — do the hard work in the review
- **Be transparent about what sign-off means:** This is a commitment, not a wish list
- **Don't rush sign-off:** A delayed approval is better than one the client later disputes
- **Baseline immediately:** Lock documents the same day as approval
- **State your recommendation upfront:** "My recommendation is to approve" — then explain why
- **Celebrate the milestone:** Planning & Requirements approval is a significant achievement

---

## 11. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-PMR-001 | Planning & Requirements | Parent procedure |
| WI-PMR-002 | Requirements Gathering | Upstream (requirements, objectives) |
| WI-PMR-003 | User Stories & SRS | Upstream (stories, SRS, traceability) |
| WI-PMR-004 | Technical Feasibility | Upstream (feasibility assessment) |
| WI-PMR-005 | Risk & Resource Planning | Upstream (risk register, budget, resources) |
| SOP-DES-001 | Design Phase | Downstream (next phase) |
| FORM-PM-008-001 | Requirements Sign-off Form | Client sign-off |
| FORM-PM-009-001 | Planning Package Checklist | Package verification |
| FORM-PM-009-002 | Leadership Presentation Checklist | Presentation preparation |
| FORM-PM-009-003 | Approval Documentation Form | Formal approval capture |
| CHECK-REQ-005 | Requirements Review Preparation Checklist | Review readiness |
| FORM-REQ-006 | Review Findings Report | Feedback capture |
| FORM-REQ-007 | Change Request Form | Scope change management |

---

## 12. References

- SOP-PMR-001-v1.0.0, Step 6: Sign-off & Approval
- ISO 9001:2015 Clause 8.2.3 — Review of requirements for products and services
- ISO 9001:2015 Clause 8.1 — Operational planning and control
- PMBOK Guide — Scope Management, Integration Management

---

## 13. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-02 | Process Merge | Created by merging WI-PM-009-v2.0.0 (client sign-off + internal planning approval) and WI-REQ-005-v2.0.0 (requirements review + approval); combined into three-part workflow: formal review, client sign-off, internal approval; updated parent SOP to SOP-PMR-001; updated all cross-references to WI-PMR series |

---

**Document ID:** WI-PMR-006-v1.0.0 | **Tier:** 3 - Work Instructions
