# Work Instruction: Requirements Gathering

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-PMR-002-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-03-02 |
| **Review Date** | 2027-03-02 |
| **Department** | Project Management / Business Analysis |
| **Parent SOP** | SOP-PMR-001 (Planning & Requirements) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for gathering, documenting, categorizing, and prioritizing detailed project requirements as defined in Step 2 of the Planning & Requirements SOP (SOP-PMR-001). It ensures all stakeholder needs are systematically captured through structured elicitation techniques, requirements are documented with SMART criteria, and priorities are established using MoSCoW classification before proceeding to user story creation and SRS development.

---

## 2. Scope

**Applies To:**
- All new client projects entering the Planning & Requirements phase after kick-off
- Change requests requiring requirements re-gathering
- Projects where initial requirements need expansion for upcoming milestones

**Responsible Roles:** Project Manager (PM), Business Analyst (BA)

---

## 3. Prerequisites

Before starting requirements gathering, ensure you have:

☐ Kick-off meeting completed (WI-PMR-001)
☐ Meeting notes with initial requirements discussion
☐ Stakeholder Register (complete with contact details and roles)
☐ Project Scope Document (approved)
☐ Project Charter (available for reference)
☐ Signed Contract (TMPL-CONTRACT-001 verified)
☐ Requirements Document Template (TMPL-REQ-001) available
☐ Access to client's existing documentation and systems (if applicable)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Kick-off Meeting Notes | WI-PMR-001 output | Document |
| Stakeholder Register | Project Planning | Document/Spreadsheet |
| Project Scope Document | Project Planning | Document |
| Project Charter | Pre-sales | Document |
| Signed Contract | Legal / AM | PDF |
| Client Documentation | Client | Various (docs, specs, screenshots) |
| Existing System Access | Client IT | Credentials / demo environment |

---

## 5. Procedure Steps

### Step 2.1: Plan Requirements Gathering Activities

**Action:** Create a structured plan for how requirements will be elicited from stakeholders.

**How to Execute:**

1. Review the stakeholder register and identify:
   - **Primary stakeholders:** Decision-makers, end-users, sponsors
   - **Secondary stakeholders:** IT staff, compliance, operations
   - **External stakeholders:** Third-party vendors, regulators

2. Determine the appropriate elicitation technique for each stakeholder group:
   - **Interviews**: Best for executives, key decision-makers (1-on-1, 30–60 min)
   - **Workshops**: Best for cross-functional teams (group, 2–4 hours)
   - **Surveys/Questionnaires**: Best for large user groups (async, 15–30 min)
   - **Observation**: Best for understanding current workflows (on-site, 1–2 hours)
   - **Document Analysis**: Best for understanding existing systems (async)

3. Create a requirements gathering schedule:
   ```
   Week 1: Stakeholder interviews (executives, sponsors)
   Week 1-2: User workshops (end-users, department leads)
   Week 2: Document analysis and observation
   Week 2-3: Follow-up sessions for clarification
   ```

4. Prepare interview guides and workshop agendas tailored to each group using FORM-PM-005-001 (Stakeholder Interview Form)

5. Send calendar invitations with context (what to prepare, expected duration, goals)
   - Decision-makers first (to set context and priorities)
   - SMEs and end users next (for detailed requirements)
   - Technical contacts last (for integration specifics)
   - Allow 45–60 minutes per session with 15 minutes between sessions for notes

**Expected Outcome:** Requirements gathering schedule with assigned techniques per stakeholder group

**Quality Check:** ✅ Every primary stakeholder has at least one scheduled elicitation session, ✅ Interview guides customized per role, ✅ FORM-PM-005-001 prepared for each session

---

### Step 2.2: Conduct Stakeholder Interviews

**Action:** Perform structured interviews with key stakeholders to capture their needs, expectations, and constraints.

**How to Execute:**

1. Before each interview:
   - Review stakeholder's role and responsibilities
   - Prepare questions specific to their area (use FORM-PM-005-001 or FORM-REQ-001)
   - Set up recording (with permission) or arrange a note-taker

2. During the interview:
   - State the purpose and expected duration
   - Start with open-ended questions:
     - "What are the biggest pain points with the current process?"
     - "What does success look like for this project?"
     - "What are your must-have features?"
     - "Walk me through your typical day using [current system]"
   - Follow up with specific questions:
     - "How many users will access the system simultaneously?"
     - "What data needs to be migrated from the existing system?"
     - "Are there regulatory or compliance requirements?"
   - Capture both functional needs (what the system should do) and non-functional needs (how the system should perform)
   - For each requirement, note:
     - **What:** The specific need or capability
     - **Why:** The business reason or pain point
     - **Who:** Which user role needs it
     - **How critical:** Initial priority indication from the stakeholder
   - Note assumptions, constraints, and dependencies mentioned

3. After each interview, within 2 hours:
   - Complete the interview form while details are fresh
   - Send summary back to the stakeholder for validation
   - Flag any conflicting requirements discovered across interviews

**Expected Outcome:** Completed interview records for all key stakeholders with validated notes

**Quality Check:** ✅ Interview summary sent to and confirmed by stakeholder within 48 hours, ✅ All scheduled interviews completed

---

### Step 2.3: Facilitate Requirements Workshops

**Action:** Run collaborative workshops with cross-functional teams to elicit and validate requirements.

**How to Execute:**

1. Workshop preparation:
   - Book meeting room or set up virtual collaboration space
   - Prepare workshop materials (whiteboard, sticky notes, or digital equivalents)
   - Create agenda with clear time blocks:
     - Introduction & Goals (10 min)
     - Current State Review (20 min)
     - Future State Brainstorming (40 min)
     - Prioritization Exercise (30 min)
     - Wrap-up & Next Steps (10 min)

2. During the workshop:
   - Set ground rules (one speaker at a time, all ideas welcome, no criticism during brainstorming)
   - Use facilitation techniques:
     - **Brainstorming**: Generate ideas freely, then cluster
     - **User Journey Mapping**: Walk through user scenarios end-to-end
     - **Process Modeling**: Map current vs. desired workflows
     - **Affinity Diagramming**: Group related requirements together
   - Capture every requirement on its own card/note
   - Ask clarifying questions to remove ambiguity

3. After the workshop:
   - Consolidate all captured requirements
   - Remove duplicates, combine related items
   - Distribute workshop outcomes to all participants for review

**Expected Outcome:** Consolidated list of requirements from workshop participants

**Quality Check:** ✅ Workshop outcomes distributed and validated by participants within 1 week

---

### Step 2.4: Review Existing Documentation and Systems

**Action:** Analyze existing system documentation, user manuals, and current workflows to identify implicit requirements.

**How to Execute:**

1. Collect and review:
   - Current system user manuals and help documentation
   - System architecture diagrams (if replacing an existing system)
   - Business process documents and workflow diagrams
   - Previous project requirements or change request logs
   - Regulatory/compliance documentation applicable to the domain
   - Competitor references provided by client

2. For each document, identify:
   - Features/capabilities that must be preserved (migration requirements)
   - Pain points or limitations that must be addressed
   - Data structures and formats currently in use
   - Integration points with other systems
   - Reporting requirements and data outputs

3. If observing current workflows:
   - Shadow users performing key tasks
   - Note steps, time taken, handoffs, and workarounds
   - Identify bottlenecks and error-prone steps
   - Document implicit requirements users may not articulate
   - Screenshot current workflows for reference

4. Compile findings into a document analysis summary

**Expected Outcome:** Document analysis summary identifying implicit and migration requirements

**Quality Check:** ✅ Analysis covers all existing systems that will be replaced or integrated with

---

### Step 2.5: Document and Categorize Requirements

**Action:** Organize all raw requirements into a structured Requirements Document.

**How to Execute:**

1. Consolidate all interview notes, workshop outcomes, and document analysis into TMPL-REQ-001

2. Categorize each requirement:
   - **Functional Requirements:** What the system must do (features, workflows, calculations)
   - **Non-Functional Requirements:** How the system must perform:
     - Performance (response times, throughput)
     - Scalability (concurrent users, data volume)
     - Availability (uptime targets, maintenance windows)
     - Security (authentication, authorization, data protection)
     - Usability (accessibility, device support, language)
     - Compliance (regulatory, legal)
   - **Constraints:** Limitations imposed on the solution (technology, integration, timeline, budget)
   - **Assumptions:** Things assumed to be true that need validation

3. For each requirement, document:
   - **Requirement ID**: Unique identifier (e.g., FR-001, NFR-001)
   - **Title**: Short descriptive name
   - **Description**: Clear, unambiguous, testable description
   - **Source**: Which stakeholder/workshop requested it
   - **Priority**: Placeholder — formal prioritization in Step 2.7
   - **Dependencies**: Other requirements it depends on
   - **Acceptance Criteria**: How we'll know it's done

4. Ensure each requirement passes SMART validation:
   - **Specific:** Clear and unambiguous
   - **Measurable:** Can be verified/tested
   - **Achievable:** Technically possible within constraints
   - **Relevant:** Aligned with project scope and business objectives
   - **Traceable:** Can be traced to a stakeholder need

5. Group functional requirements by functional area:
   - User Management (registration, authentication, profiles)
   - Core Business Logic (primary workflows and processes)
   - Data Management (CRUD operations, data processing)
   - Reporting & Analytics (dashboards, reports, exports)
   - Communication (notifications, messaging, alerts)
   - Integration (third-party systems, APIs, data exchange)

6. Identify and resolve conflicts:
   - When two stakeholders want contradictory things, flag it
   - Escalate to the decision-maker for resolution
   - Document the decision and rationale

7. Identify gaps — requirements that seem incomplete or areas where no stakeholder provided input — and schedule follow-up sessions

**Expected Outcome:** Structured Requirements Document with all requirements categorized and uniquely identified

**Quality Check:** ✅ Every requirement has a unique ID, ✅ No ambiguous or untestable requirements, ✅ Conflicts resolved and documented, ✅ Gaps identified with follow-up plan

---

### Step 2.6: Document Non-Functional Requirements with Measurable Targets

**Action:** Capture and document all non-functional requirements with specific, quantifiable targets.

**How to Execute:**

1. For each category, work with stakeholders and technical team to define measurable targets:

   **Performance:**
   - Page load time targets (e.g., < 2 seconds)
   - API response time targets (e.g., < 500ms for 95th percentile)
   - Throughput requirements (e.g., 1000 concurrent users)
   - Batch processing windows (if applicable)

   **Availability & Reliability:**
   - Uptime target (e.g., 99.9%)
   - Maximum acceptable downtime per month
   - Recovery Time Objective (RTO) and Recovery Point Objective (RPO)
   - Backup frequency and retention

   **Security:**
   - Authentication requirements (SSO, MFA, password policies)
   - Authorization levels and role definitions
   - Data encryption requirements (at rest, in transit)
   - Compliance standards (GDPR, HIPAA, PCI-DSS, SOC 2)
   - Audit logging requirements

   **Scalability:**
   - Expected user growth over 1–3 years
   - Data volume growth projections
   - Peak load scenarios

   **Usability:**
   - Target user personas and technical proficiency
   - Accessibility standards (WCAG 2.1 AA)
   - Supported devices and browsers
   - Localization/internationalization requirements

   **Maintainability:**
   - Code standards and documentation expectations
   - Deployment frequency targets
   - Support and SLA requirements

2. Document each NFR with measurable targets:
   ```
   NFR-001: Performance - Page Load
   Target: All pages load within 2 seconds on 4G connection
   Measurement: Lighthouse performance score > 90
   Priority: Must Have
   ```

**Expected Outcome:** Complete non-functional requirements with measurable targets for each category

**Quality Check:** ✅ Every NFR has a quantifiable target, not vague statements like "fast" or "secure"

---

### Step 2.7: Prioritize Requirements with Client (MoSCoW)

**Action:** Conduct MoSCoW prioritization with the client to establish requirement importance.

**How to Execute:**

1. Prepare for prioritization session:
   - Print or share the requirements list (IDs, descriptions, categories)
   - Use FORM-PM-005-002 (Requirements Prioritization Form)
   - Schedule a 60–90 minute session with the client decision-maker and PM

2. Explain the MoSCoW framework:
   - **Must Have:** Critical for launch; system is unusable without these
   - **Should Have:** Important but not critical; workarounds exist
   - **Could Have:** Nice to have; include if time/budget allows
   - **Won't Have (this release):** Explicitly out of scope for now; may be in future phases

3. Walk through each requirement:
   - Read the requirement aloud
   - Ask the client to assign a MoSCoW category
   - Challenge "Must Have" inflation: "If we couldn't deliver this for launch, would you still go live?"
   - Document the assigned priority and any discussion notes

4. Validate the distribution:
   - **Must Haves** should not exceed 60% of total effort
   - If they do, revisit with the client to reduce scope
   - Ensure "Won't Have" items are explicitly acknowledged

5. Resolve conflicts:
   - Identify requirements that contradict each other
   - Bring conflicting stakeholders together to discuss
   - Document the resolution decision and rationale
   - Get sign-off from both parties on the resolution

6. Get client confirmation on the final prioritization
7. Create a requirements summary table showing counts by priority and category

**Expected Outcome:** All requirements prioritized using MoSCoW, client-confirmed

**Quality Check:** ✅ Client decision-maker participated, ✅ Must Haves ≤ 60% of scope, ✅ Won't Haves explicitly documented, ✅ No requirement left unprioritized, ✅ Prioritization reviewed and agreed upon by client stakeholder(s)

---

### Step 2.8: Define SMART Project Objectives

**Action:** Establish clear, measurable objectives that align with the business case and client expectations.

**How to Execute:**

1. Review business case and project charter:
   - Identify the key business outcomes the project must deliver
   - Understand the client's strategic goals and how this project fits
   - Note any quantitative targets mentioned during interviews or kick-off

2. Define SMART objectives:
   - **Specific:** Clearly defined, no ambiguity (e.g., "Reduce order processing time" not "Make things faster")
   - **Measurable:** Has a quantifiable metric (e.g., "from 15 minutes to 3 minutes")
   - **Achievable:** Realistic given scope, budget, and timeline
   - **Relevant:** Directly tied to business value and client goals
   - **Time-bound:** Has a target date or phase (e.g., "by go-live" or "within 3 months of launch")

3. For each objective, establish success criteria:
   - Define the KPI (Key Performance Indicator)
   - Set the baseline (current state)
   - Set the target (desired state)
   - Define how it will be measured (tool, method, frequency)
   - Example:
     ```
     Objective: Reduce customer support ticket volume for order inquiries
     KPI: Monthly order-related support tickets
     Baseline: 450 tickets/month
     Target: ≤150 tickets/month (67% reduction)
     Measurement: Support system report, measured monthly for 3 months post-launch
     ```

4. Align objectives with client stakeholders:
   - Present proposed objectives in a review session
   - Confirm each objective resonates with the client's vision
   - Get explicit agreement on each objective

5. Cross-reference objectives with requirements:
   - Every Must Have requirement should trace to at least one objective
   - If an objective has no supporting requirements, identify the gap
   - If a Must Have requirement doesn't support any objective, question its priority

**Expected Outcome:** Project Objectives Document with SMART objectives, success criteria, KPIs, and client alignment

**Quality Check:** ✅ All objectives pass SMART criteria, ✅ Each objective has measurable success criteria, ✅ Client confirmed alignment, ✅ Objectives trace to requirements

---

### Step 2.9: Validate Requirements and Objectives Completeness

**Action:** Perform a final review to ensure requirements and objectives are complete and ready for the next phase.

**How to Execute:**

1. Cross-reference requirements against:
   - Contract scope — every contracted deliverable has requirements
   - Kick-off meeting notes — every discussed item is captured
   - Stakeholder interview summaries — no feedback lost
   - Project objectives — every objective has supporting requirements

2. Conduct internal review:
   - Walk through requirements with Tech Lead (technical feasibility)
   - Walk through with Designer (UX implications)
   - Walk through with QA Lead (testability)
   - Review objectives with leadership for alignment with company strategy

3. Identify any remaining gaps or TBD items:
   - Each TBD must have an owner and resolution date
   - No more than 10% of requirements should be TBD at this stage

4. Complete CHECK-REQ-001 (Requirements Gathering Checklist)

5. Prepare the Requirements Document and Objectives for client review:
   - Clean formatting, consistent language
   - Table of contents for easy navigation
   - Executive summary highlighting key scope decisions and objectives

6. Send to client for pre-review before the formal sign-off session (WI-PMR-006)

**Go/No-Go Criteria (proceed to Step 3 when ALL are met):**
- ☐ All requirement areas covered with no ambiguous items
- ☐ Client confirms requirements completeness
- ☐ All objectives pass SMART validation
- ☐ Must Have requirements ≤ 60% of total effort
- ☐ Internal team reviewed for feasibility
- ☐ TBD items < 10% with resolution plan

**Expected Outcome:** Complete, validated Requirements Document, prioritized requirements, and Project Objectives — ready for user story creation and SRS development

**Quality Check:** ✅ Every contract deliverable mapped to requirements, ✅ Internal team reviewed for feasibility, ✅ TBD items < 10% with resolution plan, ✅ Documents sent to client for pre-review

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Requirements Document | Categorized functional/non-functional requirements | Document (TMPL-REQ-001) |
| Stakeholder Interview Records | Completed interview forms | Forms (FORM-PM-005-001 / FORM-REQ-001) |
| Workshop Outcomes | Consolidated workshop findings | Meeting notes/Document |
| Requirements Prioritization | MoSCoW-prioritized requirements list | Form (FORM-PM-005-002) |
| Project Objectives Document | SMART objectives with success criteria and KPIs | Document |
| Conflict Resolution Log | Resolved conflicts with decisions | Document section |
| Completed CHECK-REQ-001 | Requirements Gathering Checklist | Checklist |

---

## 7. Quality Checks

✅ All 9 procedure steps completed
✅ Every primary stakeholder interviewed or included in workshop
✅ Functional requirements organized by functional area
✅ Non-functional requirements have measurable targets
✅ All requirements prioritized using MoSCoW
✅ Must Haves ≤ 60% of total estimated effort
✅ Conflicting requirements identified and resolved
✅ Requirements validated by source stakeholders
✅ SMART objectives defined with measurable success criteria
✅ Objectives aligned with client and traced to requirements
✅ Internal team review completed (Tech Lead, Designer, QA)
✅ Requirements and Objectives sent to client for pre-review
✅ CHECK-REQ-001 completed

---

## 8. Success Criteria

- All contracted deliverables have corresponding requirements
- Client confirms requirements are complete and accurate
- Every requirement passes SMART validation
- No unresolved conflicts between stakeholders
- SMART objectives are defined, measurable, and client-approved
- Every objective traces to supporting requirements
- Requirements and Objectives are ready for user story creation and SRS development (WI-PMR-003)

---

## 9. Common Pitfalls

| Pitfall | Prevention |
|---------|------------|
| Stakeholder says "just make it like [competitor]" | Dig deeper: "Which specific features? What would you change?" Document concrete requirements, not references |
| All requirements marked "Must Have" | Challenge each one: "Would you delay launch for this?" Use the 60% rule as a hard constraint |
| Acceptance criteria too vague ("system should be fast") | Quantify: "Page load < 2 seconds for 95th percentile." If you can't test it, it's not a requirement |
| Missing non-functional requirements | Use a checklist: performance, security, scalability, availability, compliance. Ask explicitly about each |
| Requirements change between sessions | Version control the document; send summaries after each session for confirmation |
| Skipping end-user interviews | Decision-makers often don't know daily workflows. Always interview actual users |
| Objectives that aren't measurable ("improve user experience") | Insist on a KPI and target number. "Improve NPS from 32 to 50" is measurable; "improve UX" is not |
| Objectives disconnected from requirements | Cross-reference every objective to supporting requirements. If they don't trace, something is missing |
| Scope creep during gathering | Reference approved scope document; log out-of-scope items as future requests |
| Stakeholder unavailable for interview | Schedule alternative time within 1 week; escalate to PM if repeated |

---

## 10. Tips for Success

- **Listen more than you talk:** Your job is to capture, not prescribe
- **Ask "why" repeatedly:** Understand the need behind the request
- **Use examples and scenarios:** "Walk me through how you would..." elicits better requirements than abstract questions
- **Document immediately:** Don't rely on memory; capture during or right after sessions
- **Validate continuously:** Send summaries back to stakeholders for confirmation
- **Look for hidden stakeholders:** Operations, support, compliance teams often have critical requirements
- **Quantify everything:** Replace "fast" with "< 2 seconds" and "lots of users" with "500 concurrent"

---

## 11. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-PMR-001 | Planning & Requirements | Parent procedure |
| WI-PMR-001 | Conducting Kickoff Meeting | Upstream (provides initial context) |
| WI-PMR-003 | User Stories & SRS | Next work instruction |
| TMPL-REQ-001 | Requirements Document Template | Output template |
| CHECK-REQ-001 | Requirements Gathering Checklist | Completeness verification |
| FORM-PM-005-001 | Stakeholder Interview Form | Interview capture |
| FORM-PM-005-002 | Requirements Prioritization Form | MoSCoW prioritization |
| FORM-REQ-001 | Stakeholder Interview Record | Interview capture (alternate) |

---

## 12. References

- SOP-PMR-001-v1.0.0, Step 2: Requirements Gathering
- PMBOK Guide — Scope Management, Requirements Collection
- ISO 9001:2015 Clause 8.2 — Requirements for products and services
- Mike Cohn, *User Stories Applied* — INVEST criteria and story writing

---

## 13. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-02 | Process Merge | Created by merging WI-REQ-001-v1.0.0 and WI-PM-005-v2.0.0; used REQ version as base with enhanced SMART objectives, success criteria, and KPI sections from PM-005; updated parent SOP to SOP-PMR-001; updated document references to WI-PMR series |

---

**Document ID:** WI-PMR-002-v1.0.0 | **Tier:** 3 - Work Instructions
