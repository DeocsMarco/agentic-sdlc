# Planning & Requirements

## Standard Operating Procedure

---

### Header

| Field | Value |
|-------|-------|
| **Document ID** | SOP-PMR-001-v1.1.0 |
| **Version** | 1.1.0 |
| **Effective Date** | 2026-03-11 |
| **Review Date** | 2027-03-02 |
| **Department** | Project Management |
| **Process Stage** | 1. Planning & Requirements |
| **Approved By** | [Pending] |

---

### 1. Objective

This procedure establishes the standard process for initiating and planning a new project after contract signing. It covers stakeholder alignment, requirements gathering via user stories, PRD/SRS development, a lightweight technical feasibility check, resource planning, and formal approval — ensuring the project has a solid, validated foundation before entering the Design phase. Risk identification and SMART objectives are optional and applied case-by-case based on project complexity.

---

### 2. Scope

**In Scope**:
- Kick-off meeting planning and execution *(must have)*
- Stakeholder identification and alignment *(must have — includes third-party vendors and external stakeholders for larger clients)*
- Requirements elicitation via User Stories as the primary format; functional and non-functional needs captured within story acceptance criteria *(must have)*
- User story creation with acceptance criteria and product backlog management *(must have)*
- User flow creation *(must have)*
- Product Requirements Document (PRD) development — also referred to as SRS or FSD; same document, terminology varies by client and project *(must have)*
- Lightweight technical feasibility check — brief meeting with Tech Lead to confirm viability and surface blockers; full formal assessment optional for complex projects *(must have)*
- Timeline, milestone, and delivery plan *(must have)*
- Client requirements sign-off — literal signature required *(must have)*
- Internal planning approval *(must have)*
- SMART project objectives and success criteria definition *(optional — ownership across PM/AM/client is unclear; confirm ownership before starting; defer for standard projects)*
- Risk identification using the RAIDS framework *(optional — recommended for projects with many unknowns, high external dependencies, or multiple coordinating teams; not required for every project)*
- Resource availability check and team composition recommendation — PM confirms capacity with team leads; budget estimation is not PM-owned and is excluded *(must have)*
- Requirements baseline establishment *(optional — case-by-case; use when scope is large or risks of scope creep are high; MVP-first versioning approach is a future improvement under consideration)*

**Out of Scope**:
- Technical architecture decisions (covered in Design phase)
- Contract negotiation (completed in Pre-sales)
- Detailed task scheduling (created during Development phase)
- Ongoing risk monitoring (covered in project execution)

**Applies To**:
- All new client projects after contract signing
- Major change requests requiring re-planning
- Projects transitioning from discovery/pre-sales to execution phase

---

### 3. Prerequisites/Safety

The following must be in place before this process begins:

| Prerequisite | Source | Verification |
|--------------|--------|--------------|
| Signed Contract | Pre-sales / Account Manager | TMPL-CONTRACT-001 in project folder |
| Project Charter | Pre-sales | TMPL-CHARTER-001 approved |
| Project Handoff Complete | SOP-PM-002 (Project Handoff) | Handoff checklist signed |
| Client Contacts Identified | Account Manager | Contact list in CRM |
| Technical Constraints (if known) | Pre-sales / Technical Lead | Documented in handoff |

---

### 4. Responsibilities (RACI)

| Activity | Responsible | Accountable | Consulted | Informed |
|----------|-------------|-------------|-----------|----------|
| Schedule & Conduct Kick-off | PM | PM | AM, Client | Dev Team, QA |
| Gather Requirements | PM, BA | PM | Client, Designer, CEO | Dev, QA, All stakeholders |
| User Stories & SRS Development | PM, BA | PM | Dev, Designer, QA, Tech Lead | All stakeholders |
| Technical Feasibility Check | CTO, Tech Lead | CTO | Dev Team, PM | All stakeholders |
| Risk & Resource Planning | PM | PM | CTO, COO, Dev Lead, Managers | Finance, All stakeholders |
| Sign-off & Approval | PM | CEO/COO | Client, AM, All stakeholders | Management |

**Role Definitions**:
- **Responsible**: Does the work
- **Accountable**: Approves/owns the outcome
- **Consulted**: Provides input before decision
- **Informed**: Notified after decision

---

### 5. Materials/Resources Needed

| Material | Source | Format | Used In Step |
|----------|--------|--------|--------------|
| Signed Contract | Legal/AM | TMPL-CONTRACT-001 | Step 1, Step 2 |
| Project Charter | Pre-sales | TMPL-CHARTER-001 | Step 1, Step 2 |
| Project Handoff Document | Pre-sales | Document | Step 1, Step 2 |
| Kick-off Meeting Agenda Template | Templates | TMPL-AGENDA-001 | Step 1 |
| Pre-Meeting Preparation Checklist | Tier 4 | FORM-PM-004-001 | Step 1 |
| Meeting Facilitation Checklist | Tier 4 | FORM-PM-004-002 | Step 1 |
| Post-Meeting Follow-up Checklist | Tier 4 | FORM-PM-004-003 | Step 1 |
| Requirements Document Template | Templates | TMPL-REQ-001 | Step 2 |
| Stakeholder Interview Form | Tier 4 | FORM-PM-005-001 | Step 2 |
| Requirements Prioritization Form | Tier 4 | FORM-PM-005-002 | Step 2 |
| User Story Creation Form | Tier 4 | FORM-PM-005-003 | Step 2, Step 3 |
| Requirements Gathering Checklist | Tier 4 | CHECK-REQ-001 | Step 2 |
| User Story Template | Templates | TMPL-STORY-001 | Step 3 |
| PRD / SRS Template | Templates | TMPL-PRD-001 | Step 3 |
| User Story Quality Checklist | Tier 4 | CHECK-REQ-002 | Step 3 |
| SRS Completeness Checklist | Tier 4 | CHECK-REQ-003 | Step 3 |
| Technical Feasibility Checklist | Tier 4 | CHECK-REQ-004 | Step 4 |
| Risk Register Template | Templates | TMPL-RISK-001 | Step 5 |
| Risk Identification Worksheet | Tier 4 | FORM-PM-006-001 | Step 5 |
| Risk Scoring Form | Tier 4 | FORM-PM-006-002 | Step 5 |
| Risk Mitigation Planning Form | Tier 4 | FORM-PM-006-003 | Step 5 |
| Resource Plan Template | Templates | TMPL-RESOURCE-001 | Step 5 |
| Effort Estimation Worksheet | Tier 4 | FORM-PM-007-001 | Step 5 |
| Resource Allocation Form | Tier 4 | FORM-PM-007-002 | Step 5 |
| Requirements Sign-off Form | Tier 4 | FORM-PM-008-001 | Step 6 |
| Requirements Review Preparation Checklist | Tier 4 | CHECK-REQ-005 | Step 6 |
| Planning Package Checklist | Tier 4 | FORM-PM-009-001 | Step 6 |
| Leadership Presentation Checklist | Tier 4 | FORM-PM-009-002 | Step 6 |
| Approval Documentation Form | Tier 4 | FORM-PM-009-003 | Step 6 |

---

### 6. Procedure

#### Step 1: Kickoff Meeting

Coordinate with client and internal team to schedule and execute the formal project kick-off meeting.

- **Responsible**: Project Manager
- **Work Instruction**: WI-PMR-001
- **Action**:
  1. Review handoff documentation and contract for key dates/constraints
  2. Identify all required attendees (client stakeholders, internal team leads)
  3. Send meeting invite with agenda (TMPL-AGENDA-001) attached — minimum 3 business days notice
  4. Conduct kick-off meeting:
     - Introductions and project overview
     - Review project objectives and success criteria
     - Confirm timeline expectations and key milestones
     - Establish communication channels and meeting cadence
     - Define escalation paths for issues
     - Begin initial requirements discussion
  5. Document all decisions and action items
  6. Distribute meeting notes within 24 hours; track action items to completion
- **Inputs**: Project Handoff Document, Signed Contract (TMPL-CONTRACT-001), Project Charter (TMPL-CHARTER-001)
- **Output**: Meeting notes with decisions, action items, communication plan, and initial requirements

**Tip**: Record the meeting (with client permission) for team members who couldn't attend.

---

#### Step 2: Requirements Gathering

Elicit and capture all project requirements using User Stories as the primary format. Functional and non-functional needs are expressed through story acceptance criteria rather than as separate categorized lists. Prioritize using MoSCoW.

- **Responsible**: Project Manager, Business Analyst
- **Work Instruction**: WI-PMR-002
- **Action**:
  1. Plan requirements gathering activities (interviews, workshops, surveys, observation, document analysis)
  2. Conduct stakeholder interviews using FORM-PM-005-001
  3. Facilitate requirements workshops with cross-functional teams
  4. Review existing client documentation and systems
  5. Capture all requirements directly in User Story format — express functional and non-functional needs through story acceptance criteria, not as separate categorized lists
  6. Prioritize requirements using MoSCoW framework (Must Haves ≤ 60% of effort)
  7. Validate completeness: internal review with Tech Lead, Designer, QA Lead
  8. Verify with CHECK-REQ-001 (Requirements Gathering Checklist)

  > **Optional — SMART Objectives:** If requested by the client or internal leadership, define project-level KPIs, baselines, and success criteria. Confirm ownership (PM, AM, or client-side) before starting. This is not required for standard projects — defer until ownership is clear.

- **Inputs**: Meeting notes, client documentation, stakeholder access, Project Charter
- **Output**: Prioritized User Story list / Requirements backlog

**Go/No-Go — proceed to Step 3 when:**
- ☐ All requirement areas covered, no ambiguous items, client confirms completeness
- ☐ Must Have requirements ≤ 60% of total effort
- ☐ Internal team reviewed for feasibility; TBD items < 10% with resolution plan

---

#### Step 3: User Stories & PRD

Transform requirements into user stories with acceptance criteria and compile the Product Requirements Document (PRD). The PRD is also known as SRS or FSD — terminology varies by client and project; all refer to the same deliverable.

- **Responsible**: Project Manager, Business Analyst
- **Work Instruction**: WI-PMR-003
- **Action**:
  **Part A — User Stories:**
  1. Define user personas and roles
  2. Transform requirements into user stories (As a… I want… So that…)
  3. Define acceptance criteria for each story (Given/When/Then)
  4. Estimate story points (optional at this stage)
  5. Group stories into epics/features
  6. Create prioritized product backlog

  **Part B — PRD / SRS:**
  7. Define system overview and context
  8. Document functional requirements with use cases
  9. Define non-functional requirements with metrics
  10. Document interfaces (user, hardware, software, communication)
  11. Define data requirements
  12. Identify system integration points
  13. Build requirements traceability matrix
  14. Compile and peer-review PRD
- **Inputs**: Prioritized User Story list / Requirements backlog
- **Output**: User Stories, Product Backlog, PRD / SRS Document, Traceability Matrix

> **Note:** User stories are the most critical output of this step — they serve PM, QA, VA, Dev, and Design equally. The PRD/SRS encapsulates them with broader system context.

**Go/No-Go — proceed to Step 4 when:**
- ☐ All requirements covered by stories; SRS complete
- ☐ Traceability has no gaps
- ☐ Peer review passed; CHECK-REQ-002 and CHECK-REQ-003 verified

---

#### Step 4: Technical Feasibility Check

Confirm that all requirements are technically achievable before proceeding. This is a lightweight check, not a formal assessment — the goal is to surface any blockers early and get a go/no-go signal from the Tech Lead. Schedule a meeting rather than running through a full documentation procedure.

- **Responsible**: Project Manager (coordinates), Tech Lead / CTO (assesses)
- **Work Instruction**: WI-PMR-004
- **Action**:
  1. PM schedules a brief review meeting with Tech Lead (include CTO if needed)
  2. Walk through the PRD and user stories together — flag any requirements that seem complex, risky, or unclear
  3. Tech Lead gives a simple go/no-go signal per area; note any items needing revision or clarification
  4. PM documents flagged items and follows up with client if changes to requirements are needed
  5. *(For complex projects with many unknowns or external system integrations)* Conduct a deeper feasibility review using CHECK-REQ-004 and produce a Feasibility Assessment Report
- **Inputs**: PRD / SRS Document, User Stories
- **Output**: Documented go/no-go signal with any flagged items; *(optional for complex projects)* Feasibility Assessment Report

**Go/No-Go — proceed to Step 5 when:**
- ☐ Tech Lead has confirmed all requirements are achievable (or flagged items are resolved)
- ☐ No unresolved technical blockers remain

---

#### Step 5: Resource Planning & Timeline

Confirm resource availability, build the project timeline, and — for complex projects — identify risks using the RAIDS framework. Budget estimation is not owned by PM and is excluded from this step.

- **Responsible**: Project Manager
- **Work Instruction**: WI-PMR-005
- **Action**:
  **Resource & Timeline (required for all projects):**
  1. Identify required roles for the project; confirm availability with team leads and managers
  2. Note any resource constraints (shared resources, competing projects, availability gaps)
  3. Estimate effort per phase and epic; coordinate with Tech Lead for technical estimates
  4. Build project timeline with milestones, key dependencies, and target delivery dates

  **Risk Identification (optional — use RAIDS for complex projects):**
  5. *(Skip for standard projects)* If the project has many unknowns, multiple coordinating teams, or high external dependencies — conduct risk identification using the RAIDS framework (Risks, Assumptions, Issues, Dependencies, Stakeholders)
  6. Score identified risks (probability × impact); develop mitigation strategies for high-scoring items and assign owners
  7. Compile Risk Register (TMPL-RISK-001)
- **Inputs**: PRD / SRS, Feasibility output, Contract, Resource availability
- **Output**: Resource Plan, Project Timeline; *(optional)* Risk Register

**Go/No-Go — proceed to Step 6 when:**
- ☐ Resource availability confirmed (not assumed); constraints documented
- ☐ Timeline fits contract dates or gap is flagged and addressed
- ☐ *(If RAIDS conducted)* High-scoring risks have assigned mitigation owners

---

#### Step 6: Sign-off & Approval

Secure formal client sign-off on the requirements baseline and internal leadership approval to proceed to Design.

- **Responsible**: Project Manager
- **Work Instruction**: WI-PMR-006
- **Action**:
  **Client Sign-off:**
  1. Compile requirements package (SRS, user stories, objectives, timeline, assumptions, out-of-scope items)
  2. Distribute review package ≥ 3 business days before review meeting
  3. Conduct formal review meeting — walk through requirements, feasibility findings, user stories
  4. Obtain formal client signature on FORM-PM-008-001 (verbal approval is NOT sufficient)
  5. Distribute and archive signed requirements baseline

  **Internal Approval:**
  6. Compile Planning Package; verify with FORM-PM-009-001 checklist
  7. Prepare and deliver leadership presentation (send summary ≥ 1 day in advance)
  8. Obtain leadership decision and signature on FORM-PM-009-003
  9. Communicate approval to all stakeholders; schedule Design phase kick-off within 3–5 business days
  10. Close Planning & Requirements phase: archive documents, baseline requirements, update project status, record lessons learned
- **Inputs**: All planning and requirements documents, FORM-PM-008-001, FORM-PM-009-001, CHECK-REQ-005
- **Output**: Signed Requirements Sign-off, Planning Approval, Requirements Baseline, Design Phase Kick-off scheduled

**⚠️ Warning**: Do not proceed to Design phase without both formal client sign-off AND internal leadership approval. Verbal approval is not sufficient for either.

---

### 7. Quality Standards

| Deliverable | Acceptance Criteria | Verification Method | Owner |
|-------------|---------------------|---------------------|-------|
| Meeting Notes | All decisions and action items captured, distributed within 24 hours | Peer review | PM |
| User Story Backlog / Requirements | All requirement areas covered, stories have acceptance criteria, no ambiguous items, client confirms completeness | Checklist review (CHECK-REQ-001, CHECK-REQ-002) | PM |
| PRD / SRS Document | Complete, follows template, traceability included | Technical review (CHECK-REQ-003) | PM |
| Feasibility Check | All requirements surface-reviewed with Tech Lead; blockers resolved or flagged | Tech Lead sign-off | Tech Lead |
| Resource Plan | Roles identified, availability confirmed with managers | Manager review | PM |
| Risk Register *(if applicable)* | Major risks identified using RAIDS, mitigations assigned for high-scoring items | Team review | PM |
| Project Objectives *(if applicable)* | SMART criteria met, ownership confirmed, aligned with business case | Leadership review | PM |
| Signed Requirements | Client signature obtained, dated, archived | Document check | PM |
| Planning Approval | Leadership sign-off obtained | Document check | PM |

---

### 8. References

**Related SOPs**:

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-PM-002 | Project Handoff | Upstream (prerequisite) |
| SOP-DES-001 | Design Phase | Downstream (next phase) |

**Work Instructions**:

| Document ID | Title | SOP Step |
|-------------|-------|----------|
| WI-PMR-001 | Conducting Kickoff Meeting | Step 1 |
| WI-PMR-002 | Requirements Gathering | Step 2 |
| WI-PMR-003 | User Stories & PRD | Step 3 |
| WI-PMR-004 | Technical Feasibility | Step 4 |
| WI-PMR-005 | Risk & Resource Planning | Step 5 |
| WI-PMR-006 | Sign-off & Approval | Step 6 |

**Templates**:

| Document ID | Title | Purpose |
|-------------|-------|---------|
| TMPL-CONTRACT-001 | Signed Contract Template | Standard contract structure |
| TMPL-CHARTER-001 | Project Charter Template | Project charter for kickoff |
| TMPL-AGENDA-001 | Kick-off Meeting Agenda | Standard agenda for client kick-off |
| TMPL-REQ-001 | Requirements Document | Structured requirements capture |
| TMPL-STORY-001 | User Story Template | Consistent story format |
| TMPL-PRD-001 | PRD / SRS Template | Product requirements document (also known as SRS/FSD) |
| TMPL-RISK-001 | Risk Register | Risk tracking and mitigation *(optional — use for complex projects)* |
| TMPL-RESOURCE-001 | Resource Plan | Resource allocation planning |

**Forms & Checklists (Tier 4)**:

| Document ID | Title | Purpose |
|-------------|-------|---------|
| FORM-PM-004-001 | Pre-Meeting Preparation Checklist | Kick-off meeting prep verification |
| FORM-PM-004-002 | Meeting Facilitation Checklist | In-meeting execution checklist |
| FORM-PM-004-003 | Post-Meeting Follow-up Checklist | Post-meeting action tracking |
| FORM-PM-005-001 | Stakeholder Interview Form | Structured interview capture |
| FORM-PM-005-002 | Requirements Prioritization Form | MoSCoW prioritization |
| FORM-PM-005-003 | User Story Creation Form | INVEST story creation |
| CHECK-REQ-001 | Requirements Gathering Checklist | Gathering completeness |
| CHECK-REQ-002 | User Story Quality Checklist | Story quality verification |
| CHECK-REQ-003 | PRD Completeness Checklist | PRD/SRS completeness verification |
| CHECK-REQ-004 | Technical Feasibility Checklist | Technical assessment |
| CHECK-REQ-005 | Requirements Review Preparation Checklist | Review readiness |
| FORM-PM-006-001 | Risk Identification Worksheet | Risk discovery |
| FORM-PM-006-002 | Risk Scoring Form | Probability × Impact assessment |
| FORM-PM-006-003 | Risk Mitigation Planning Form | Mitigation strategy capture |
| FORM-PM-007-001 | Effort Estimation Worksheet | Story point / time estimation |
| FORM-PM-007-002 | Resource Allocation Form | Team assignment tracking |
| FORM-PM-007-003 | Budget Calculation Template | Cost estimation with contingency |
| FORM-PM-008-001 | Requirements Sign-off Form | Formal requirements baseline approval |
| FORM-PM-009-001 | Planning Package Checklist | Pre-approval package verification |
| FORM-PM-009-002 | Leadership Presentation Checklist | Approval meeting preparation |
| FORM-PM-009-003 | Approval Documentation Form | Formal planning phase approval |

**External References**:
- ISO 9001:2015 Clause 8.2 — Requirements for products and services
- IEEE 830 — Software Requirements Specifications
- PMBOK Guide — Project Planning, Scope Management, Risk Management
- ISO 31000 — Risk Management principles

---

### 9. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-02 | Process Merge | Created by merging SOP-PM-003-v3.0.0 (Project Planning) and SOP-PM-008-v3.0.0 (Requirements Management) into a single unified stage. 6 steps: Kickoff → Requirements Gathering → User Stories & SRS → Technical Feasibility → Risk & Resource Planning → Sign-off & Approval. Eliminated overlap between planning and requirements phases. Added TMPL-CONTRACT-001 and TMPL-CHARTER-001 as prerequisites. |
| 1.1.0 | 2026-03-11 | Team Review | Incorporated feedback from March 9 PM SOP review meeting (Marco, Aaliyah, Gemma, Juran). Scope: tagged must-have vs optional items. User Stories confirmed as primary requirements format — removed mandatory functional/nonfunctional/constraints categorization. SRS/PRD/FSD terminology unified (same doc, different names). Step 2: consolidated into user story-driven approach; SMART objectives marked optional pending ownership clarification. Step 3: renamed to "User Stories & PRD"; added note on user story cross-functional value. Step 4: replaced 8-step formal feasibility assessment with lightweight meeting + sign-off; full assessment remains optional for complex projects. Step 5: renamed to "Resource Planning & Timeline"; budget estimation removed (not PM-owned); RAIDS risk identification made optional (case-by-case, complex projects only). Quality Standards updated to match. |

---

*Document ID: SOP-PMR-001-v1.1.0 | Updated: 2026-03-11*
