# Work Instruction: User Stories & SRS Development

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-PMR-003-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-03-02 |
| **Review Date** | 2027-03-02 |
| **Department** | Project Management / Business Analysis |
| **Parent SOP** | SOP-PMR-001 (Planning & Requirements) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for transforming detailed requirements into well-structured user stories and then compiling all requirements into a formal System Requirements Specification (SRS) document. This covers Step 3 of the Planning & Requirements SOP (SOP-PMR-001), ensuring a complete, traceable path from stakeholder needs through user stories to a formal SRS that serves as the authoritative reference for Design and Development.

---

## 2. Scope

**Applies To:**
- All projects after requirements gathering (WI-PMR-002) is complete
- Backlog refinement sessions requiring new user stories
- Change requests that introduce new requirements
- Major change requests requiring SRS updates
- System redesign or re-platforming initiatives

**Responsible Role:** Project Manager (PM), Business Analyst (BA)

---

## 3. Prerequisites

Before starting, ensure you have:

☐ Completed Requirements Document (from WI-PMR-002)
☐ Prioritized requirements list — MoSCoW (from WI-PMR-002)
☐ Project Objectives with success criteria (from WI-PMR-002)
☐ User personas or stakeholder roles defined
☐ Non-functional requirements with measurable targets
☐ User Story Template (TMPL-STORY-001)
☐ SRS Document Template (TMPL-SRS-001)
☐ Requirements Traceability Matrix template (FORM-REQ-003)
☐ Access to project management tool (Jira, Linear, etc.)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Detailed Requirements Document | WI-PMR-002 | Document (TMPL-REQ-001) |
| Prioritized Requirements List | WI-PMR-002 | Spreadsheet/Document |
| Non-functional Requirements | WI-PMR-002 | Document section |
| Project Objectives | WI-PMR-002 | Document |
| User Personas / Roles | Project Planning | Document |
| Project Scope Document | Project Planning | Document |
| Stakeholder Interview Records | WI-PMR-002 | Forms |

---

## 5. Procedure Steps

### Part A: User Story Creation

#### Step 3.1: Define User Personas and Roles

**Action:** Identify all distinct user types who will interact with the system.

**How to Execute:**

1. Review the requirements document and stakeholder register to identify user types:
   - End users (by role: admin, manager, standard user, guest)
   - System administrators
   - External users (customers, partners, vendors)
   - Automated actors (scheduled jobs, integrations, APIs)

2. For each user type, create a brief persona:
   ```
   Persona: Store Manager
   Goals: Monitor sales performance, manage inventory, approve returns
   Tech Proficiency: Moderate (comfortable with web apps, not developer)
   Frequency of Use: Daily, 2-4 hours
   Key Pain Points: Current reporting is manual and time-consuming
   ```

3. Map personas to functional areas in the requirements document

4. Validate personas with the client to ensure they represent real user groups

**Expected Outcome:** Documented user personas mapped to requirements areas

**Quality Check:** ✅ Every functional requirement maps to at least one persona

---

#### Step 3.2: Decompose Requirements into User Stories

**Action:** Transform each requirement into one or more user stories using the standard format.

**How to Execute:**

1. For each functional requirement, write one or more user stories:
   - Format: **"As a [user persona], I want [action/capability], so that [business benefit]"**
   - Use FORM-PM-005-003 (User Story Creation Form)

2. Apply the INVEST criteria to each story:
   - **I**ndependent: Can be developed and delivered independently
   - **N**egotiable: Details can be discussed and refined
   - **V**aluable: Delivers clear value to the user or business
   - **E**stimable: Team can estimate the effort required
   - **S**mall: Can be completed within one sprint (1–2 weeks)
   - **T**estable: Has clear criteria for "done"

3. If a requirement is too large for one story:
   - Split by user type: "As an admin..." vs. "As a user..."
   - Split by operation: Create, Read, Update, Delete
   - Split by data type: "...manage products" → "...add products", "...update prices"
   - Split by workflow step: "...complete checkout" → "...add to cart", "...enter payment", "...confirm order"

4. Record each story using FORM-REQ-002 (User Story Card)

**Expected Outcome:** Complete set of user stories covering all functional requirements

**Quality Check:** ✅ Every functional requirement is covered by at least one user story

---

#### Step 3.3: Write Acceptance Criteria

**Action:** Define clear, testable acceptance criteria for each user story.

**How to Execute:**

1. For each user story, write acceptance criteria using Given/When/Then format:
   ```
   Given [precondition/context],
   When [action performed],
   Then [expected result].
   ```

2. Include criteria for:
   - **Happy path**: Normal successful scenario
   - **Edge cases**: Boundary conditions, empty states, maximum limits
   - **Error handling**: Invalid inputs, system errors, permission denied
   - **Business rules**: Validation rules, calculations, workflows

3. Example:
   ```
   Story: As a store manager, I want to approve return requests so that customers receive timely refunds.

   AC1: Given a pending return request, When the manager clicks "Approve", Then the request status changes to "Approved" and the customer receives an email notification.
   AC2: Given a return request older than 30 days, When the manager views the request, Then a warning banner displays "Outside return policy window."
   AC3: Given the manager is not assigned to the store, When they try to approve a return, Then they see "Permission denied" and the action is blocked.
   ```

4. Aim for 3–7 acceptance criteria per story (fewer = too vague, more = story too large)

**Expected Outcome:** Every user story has testable acceptance criteria

**Quality Check:** ✅ QA can write test cases directly from the acceptance criteria

---

#### Step 3.4: Estimate Story Points

**Action:** Assign relative effort estimates to user stories for planning purposes.

**How to Execute:**

1. If the development team is available, conduct a story estimation session:
   - Use Planning Poker or T-shirt sizing (S, M, L, XL)
   - Use Fibonacci sequence for story points: 1, 2, 3, 5, 8, 13, 21

2. Estimation guidelines:
   - **1 point**: Simple configuration change, text update
   - **2 points**: Simple CRUD operation with basic validation
   - **3 points**: Standard feature with some business logic
   - **5 points**: Complex feature with multiple integrations or conditions
   - **8 points**: Large feature requiring significant design decisions
   - **13 points**: Very complex, consider splitting
   - **21 points**: Too large — must be split into smaller stories

3. If the dev team is not yet available:
   - Use T-shirt sizing (PM/BA estimate)
   - Mark estimates as "preliminary" to be refined later
   - Focus on identifying stories that seem "too large" (XL) and split them

**Expected Outcome:** Stories with effort estimates (or flagged for later estimation)

**Quality Check:** ✅ No story larger than 13 points without a plan to split it

---

#### Step 3.5: Organize Stories into Epics and Create Product Backlog

**Action:** Group related user stories into logical hierarchies and compile the prioritized backlog.

**How to Execute:**

1. Create Epics (large bodies of work):
   - Each epic corresponds to a major functional area or feature set
   - Example epics: "User Authentication", "Order Management", "Reporting Dashboard"
   - Each epic should have a clear description and business objective

2. Group stories under epics:
   - Every story must belong to exactly one epic
   - If a story doesn't fit any epic, create a new epic or reconsider the story

3. Within each epic, order stories by:
   - Dependencies (prerequisite stories first)
   - Priority (Must Have before Should Have)
   - Logical flow (registration before login before profile management)

4. Identify cross-cutting stories:
   - Stories that affect multiple epics (e.g., "audit logging for all actions")
   - Tag these as "cross-cutting" and assign to the most relevant epic

5. Enter all stories into the project management tool:
   - Title, Description, Acceptance Criteria, Epic, Priority, Story Points, Labels/Tags

6. Order the backlog:
   - Must Have stories at the top
   - Within Must Have, order by dependency and business value
   - Should Have stories next, Could Have at the bottom

7. Create a backlog summary:
   - Total story count by priority (Must/Should/Could/Won't)
   - Total story points by priority (if estimated)
   - Epic breakdown with story counts

**Expected Outcome:** Prioritized product backlog in project management tool with stories organized into epics

**Quality Check:** ✅ Backlog accurately represents all requirements; every story belongs to an epic

---

### Part B: SRS Development

#### Step 3.6: Define System Overview and Context

**Action:** Write the introductory sections of the SRS establishing the system's purpose, scope, and context.

**How to Execute:**

1. Open TMPL-SRS-001 and complete the document header with project details

2. Write the **System Purpose** section:
   - What problem does the system solve?
   - Who are the primary users?
   - What business objectives does it support?

3. Write the **System Scope** section:
   - What is included in this system
   - What is explicitly excluded
   - Boundaries of the system (what it does vs. what external systems do)

4. Create the **System Context Diagram**:
   - Draw the system as a central box
   - Show all actors (users, external systems) around it
   - Draw arrows showing data/interaction flows
   - Label each flow with the type of interaction

5. Document **Definitions, Acronyms, and Abbreviations**

6. List **References** to related documents (Project Charter, Scope Document, Requirements Document, applicable standards)

**Expected Outcome:** SRS Sections 1–2 completed with system context diagram

**Quality Check:** ✅ A new team member could understand the system's purpose and boundaries from these sections alone

---

#### Step 3.7: Document Functional Requirements with Use Cases

**Action:** Transform functional requirements and user stories into formal use case specifications.

**How to Execute:**

1. For each major functional area, create use cases:
   ```
   Use Case: UC-001 - User Registration
   Actor: New User
   Precondition: User has a valid email address
   Main Flow:
     1. User navigates to registration page
     2. User enters name, email, and password
     3. System validates email uniqueness
     4. System sends verification email
     5. User clicks verification link
     6. System activates account
   Alternate Flows:
     3a. Email already exists → Show error, suggest login
     4a. Email service unavailable → Queue and retry, show "check email later"
   Postcondition: User account created and verified
   ```

2. For each use case, link to source requirements and related user stories

3. Create use case diagrams for each functional area

4. Ensure complete coverage:
   - Every functional requirement maps to at least one use case
   - Every user story's acceptance criteria are reflected in use case flows

**Expected Outcome:** Complete use case specifications for all functional areas

**Quality Check:** ✅ Traceability exists from every functional requirement to a use case

---

#### Step 3.8: Define Non-Functional Requirements with Metrics

**Action:** Formalize non-functional requirements with specific, measurable acceptance criteria in the SRS.

**How to Execute:**

1. For each NFR category, document using the format:
   ```
   NFR-001: Response Time
   Category: Performance
   Requirement: All API endpoints shall respond within 500ms for the 95th percentile under normal load
   Measurement Method: Load testing with 500 concurrent users
   Acceptance Criteria: 95th percentile response time ≤ 500ms
   Priority: Must Have
   Related Functional Areas: All
   ```

2. Cover all NFR categories: Performance, Scalability, Availability, Security, Usability, Maintainability, Compatibility

3. For each NFR, specify how it will be measured, when it will be verified, and what happens if it's not met

**Expected Outcome:** All non-functional requirements documented with measurable criteria

**Quality Check:** ✅ Every NFR has a number, a measurement method, and a pass/fail threshold

---

#### Step 3.9: Document Interface and Data Requirements

**Action:** Specify all system interfaces and data requirements.

**How to Execute:**

1. **User Interface Requirements:** Screen layout principles, navigation patterns, responsive breakpoints, accessibility standards, key screen list

2. **Software Interface Requirements:** OS dependencies, database specs, third-party libraries, API specs

3. **Hardware Interface Requirements (if applicable):** Minimum hardware, peripherals

4. **Communication Interface Requirements:** Network protocols, API protocols, data exchange formats, message queues

5. **Data Requirements:**
   - Major data entities with key attributes and relationships
   - Data validation and business rules
   - Data retention and archival policies
   - Data migration requirements (source systems, mapping, cleansing, rollback strategy)
   - Reporting and analytics requirements (reports, dashboards, exports)

**Expected Outcome:** All interface and data requirements documented with specifications

**Quality Check:** ✅ Every external touchpoint documented; data entities cover all information in functional requirements

---

#### Step 3.10: Identify System Integration Points

**Action:** Document all external systems the new system must integrate with.

**How to Execute:**

1. For each integration, document:
   - Integration Name, External System (name, version, vendor)
   - Purpose, Direction, Method, Data Format, Frequency
   - Authentication, Error Handling, SLA/Availability

2. Create an integration matrix:

   | Integration | System | Direction | Method | Frequency | Priority |
   |-------------|--------|-----------|--------|-----------|----------|
   | Payment Processing | Stripe | Bidirectional | REST API | Real-time | Must |
   | Email Notifications | SendGrid | Outbound | REST API | Event-triggered | Must |
   | ERP Sync | SAP | Bidirectional | File/API | Daily batch | Should |

3. For each integration, identify who provides documentation/credentials, sandbox availability, and known limitations

**Expected Outcome:** Complete integration specifications for all external systems

**Quality Check:** ✅ Every integration has identified authentication method and error handling approach

---

#### Step 3.11: Build Requirements Traceability Matrix

**Action:** Create a traceability matrix linking stakeholder needs → requirements → user stories → use cases.

**How to Execute:**

1. Using FORM-REQ-003, create the traceability matrix:

   | Stakeholder Need | Requirement ID | User Story | Use Case | Priority | Status |
   |-----------------|---------------|------------|----------|----------|--------|
   | Track orders in real time | FR-015 | US-042 | UC-008 | Must | Documented |
   | Export monthly reports | FR-023 | US-055 | UC-012 | Should | Documented |

2. Verify completeness — no orphan requirements or user stories

3. Identify and fill any gaps

**Expected Outcome:** Complete bidirectional traceability matrix

**Quality Check:** ✅ No gaps in traceability from stakeholder needs through to use cases

---

#### Step 3.12: Compile and Review SRS Document

**Action:** Assemble all sections into the final SRS document and perform internal review.

**How to Execute:**

1. Compile all sections into TMPL-SRS-001:
   - Section 1: Introduction (Purpose, Scope, Definitions, References)
   - Section 2: System Overview and Context
   - Section 3: Functional Requirements and Use Cases
   - Section 4: Non-Functional Requirements
   - Section 5: Interface Requirements
   - Section 6: Data Requirements
   - Section 7: Integration Requirements
   - Section 8: Requirements Traceability Matrix
   - Section 9: Assumptions and Constraints
   - Section 10: Appendices

2. Perform self-review using CHECK-REQ-003 (SRS Completeness Checklist)

3. Conduct peer review:
   - Share SRS with another BA or PM for review
   - Review for completeness, consistency, and clarity
   - Check for conflicting requirements
   - Verify all cross-references are correct

4. Address review feedback and update the document

5. Mark SRS as "Ready for Technical Review" (Step 4: WI-PMR-004)

**Expected Outcome:** Complete SRS document ready for technical feasibility review

**Quality Check:** ✅ SRS passes the CHECK-REQ-003 completeness checklist

---

### Go/No-Go Gate

Before proceeding to Step 4 (Technical Feasibility), confirm:

- ☐ All functional requirements covered by user stories
- ☐ All user stories have acceptance criteria
- ☐ Product backlog created and prioritized
- ☐ SRS document compiled with all sections complete
- ☐ Traceability matrix has no gaps
- ☐ Internal peer review completed

**If any item fails:** Iterate on the incomplete areas before proceeding.

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| User Personas | Defined user types with goals and context | Document |
| User Stories | Complete set of stories in standard format | PM Tool / FORM-REQ-002 |
| Acceptance Criteria | Testable criteria for each story | Part of user stories |
| Product Backlog | Prioritized, organized backlog | PM Tool |
| Backlog Summary | Overview of story counts and estimates | Document/Spreadsheet |
| SRS Document | Complete system requirements specification | Document (TMPL-SRS-001) |
| Use Case Specifications | Detailed use cases for all functional areas | SRS Section 3 |
| Requirements Traceability Matrix | Bidirectional traceability | Form (FORM-REQ-003) |
| System Context Diagram | Visual system boundary and interactions | Diagram |
| Integration Specifications | External system integration details | SRS Section 7 |
| Completed CHECK-REQ-002 | User Story Quality Checklist | Checklist |
| Completed CHECK-REQ-003 | SRS Completeness Checklist | Checklist |

---

## 7. Quality Standards

### User Story Completeness

✅ All Part A steps completed (3.1–3.5)
✅ User personas defined and validated with client
✅ Every functional requirement covered by at least one story
✅ All stories follow "As a... I want... So that..." format
✅ Every story has 3–7 acceptance criteria
✅ Stories pass INVEST criteria check
✅ No story exceeds 13 story points without split plan
✅ Backlog organized into epics and prioritized

### SRS Document Completeness

✅ All Part B steps completed (3.6–3.12)
✅ System context diagram created
✅ All functional requirements have use cases
✅ All NFRs have measurable targets
✅ Interface requirements cover all system touchpoints
✅ Data requirements include entities, rules, and migration
✅ All integrations specified with authentication and error handling
✅ Traceability matrix complete with no gaps
✅ Peer review completed and feedback addressed

---

## 8. Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Story too large to estimate | Split by CRUD operation, user role, or workflow step |
| Acceptance criteria too vague | Ask: "How would QA test this?" and "What does 'done' look like?" |
| Can't identify the user persona | Every action has a person behind it; ask "Who initiates this?" |
| Requirements don't map cleanly to stories | One requirement may need multiple stories; that's normal |
| Team disagrees on story points | Use median or majority vote; discuss outlier estimates |
| SRS too long and unwieldy | Use clear section numbering; include table of contents; make sections self-contained |
| Conflicting requirements discovered during compilation | Log in conflict resolution log; resolve with stakeholders before proceeding |
| Traceability gaps | Work backward from use cases to requirements to stakeholder needs |
| Integration details unknown | Contact client IT team; mark unknowns as "TBD" with a deadline to resolve |
| Too much detail for this phase | Keep SRS at "what" level, not "how" — implementation details belong in Design |

---

## 9. Tips for Success

- **Think from the user's perspective:** Write stories about user goals, not system functions
- **Keep stories small:** If you can't explain it in 2 sentences, split it
- **Acceptance criteria are the contract:** This is what QA tests and what the client accepts
- **Don't gold-plate:** Capture what's needed, not every possible enhancement
- **Involve the dev team early:** Their input on estimation and feasibility prevents surprises later
- **Use consistent language:** Define terms in the glossary and use them consistently throughout
- **Write for multiple audiences:** Executives read the overview; developers read the details
- **Use diagrams generously:** Context diagrams, use case diagrams, and data flow diagrams save thousands of words
- **Don't specify the solution:** Say "the system shall send notifications" not "the system shall use Firebase Push Notifications"
- **Think about what's missing:** The hardest requirements to find are the ones nobody mentions

---

## 10. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-PMR-001 | Planning & Requirements | Parent procedure |
| WI-PMR-002 | Requirements Gathering | Previous work instruction |
| WI-PMR-004 | Technical Feasibility | Next work instruction |
| TMPL-STORY-001 | User Story Template | Output template |
| TMPL-SRS-001 | SRS Document Template | Output template |
| CHECK-REQ-002 | User Story Quality Checklist | Quality verification |
| CHECK-REQ-003 | SRS Completeness Checklist | Completeness verification |
| FORM-PM-005-003 | User Story Creation Form | Story creation |
| FORM-REQ-002 | User Story Card | Story capture form |
| FORM-REQ-003 | Requirements Traceability Matrix | Traceability tracking |

---

## 11. References

- SOP-PMR-001-v1.0.0, Step 3: User Stories & SRS Development
- IEEE 830 — Recommended Practice for Software Requirements Specifications
- PMBOK Guide — Scope Management
- Mike Cohn, *User Stories Applied* — INVEST criteria and story writing

---

## 12. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-02 | Process Merge | Created from WI-REQ-002-v2.0.0 (which already incorporated WI-REQ-003); updated parent SOP to SOP-PMR-001; updated all cross-references to WI-PMR series |

---

**Document ID:** WI-PMR-003-v1.0.0 | **Tier:** 3 - Work Instructions
