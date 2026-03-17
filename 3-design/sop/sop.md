# Design Phase

## Standard Operating Procedure

---

### Header

| Field | Value |
|-------|-------|
| **Document ID** | SOP-DES-001-v3.0.0 |
| **Version** | 3.0.0 |
| **Effective Date** | 2026-02-27 |
| **Review Date** | 2027-02-27 |
| **Department** | Design / Development |
| **Process Stage** | 3. Design |
| **Approved By** | [Pending] |

---

### 1. Objective

This procedure establishes the standard process for creating the technical and visual design of the system. It covers architecture and data design, UI/UX and low-level design, design review, and approval/handoff to ensure a comprehensive blueprint is created before development begins.

---

### 2. Scope

**In Scope**:
- System architecture design
- Database schema and API design
- UI/UX wireframes and prototypes
- Low-level design (component specifications)
- Design clarifications (resolving ambiguities from Requirements)
- Design documentation
- Design review and approval
- Developer handoff

**Out of Scope**:
- Formal requirements gathering (completed in Requirements phase)
- Actual coding/implementation (covered in Development phase)
- Testing (covered in Testing phase)

**Applies To**:
- All new client projects after Requirements approval
- Major change requests requiring design updates
- Projects transitioning from Requirements to Development phase

---

### 3. Prerequisites/Safety

The following must be in place before this process begins:

| Prerequisite | Source | Verification |
|--------------|--------|--------------|
| Approved Requirements Baseline | SOP-PMR-001 (Planning & Requirements) | Sign-off document |
| PRD / SRS Document | Planning & Requirements Phase | PRD approved |
| User Stories | Planning & Requirements Phase | Backlog complete |
| Technical Feasibility Check | Planning & Requirements Phase | Tech Lead sign-off documented |

---

### 4. Responsibilities (RACI)

| Activity | Responsible | Accountable | Consulted | Informed |
|----------|-------------|-------------|-----------|----------|
| Architecture & Data Design | Tech Lead, CTO, Backend Dev | CTO | Dev Team, PM, QA | All stakeholders |
| UI/UX & Low-Level Design | Designer, Dev Team | Tech Lead | Client, PM, QA | All stakeholders |
| Design Review | Tech Lead | CTO | All teams | Client |
| Approval & Handoff | CTO, Client | CTO | PM, AM | All stakeholders |

**Role Definitions**:
- **Responsible**: Does the work
- **Accountable**: Approves/owns the outcome
- **Consulted**: Provides input before decision
- **Informed**: Notified after decision

---

### 5. Materials/Resources Needed

| Material | Source | Format | Used In Step |
|----------|--------|--------|--------------|
| Approved SRS | Requirements Phase | Document | Step 1, Step 2 |
| User Stories | Requirements Phase | Document | Step 1, Step 2 |
| Architecture Document Template | Templates | TMPL-ARCH-001 | Step 1, Step 2 |
| Architecture & Data Design Checklist | Checklists | CHECK-DES-001 | Step 1 |
| UI/UX & LLD Design Checklist | Checklists | CHECK-DES-003 | Step 2 |
| Component Specification Form | Forms | FORM-DES-005 | Step 2 |
| Design Review Findings Report | Forms | FORM-DES-006 | Step 3 |
| Design Approval Sign-Off & Handoff | Forms | FORM-DES-007 | Step 4 |
| UI/UX Design Tools | Tools | Figma/Sketch | Step 2 |

---

### 6. Procedure

| Step | Title | Description | Responsible | Inputs | Outputs | Notes |
|------|-------|-------------|-------------|--------|---------|-------|
| 1 | Architecture & Data Design | 1. Define system architecture pattern<br>2. Create high-level component diagram<br>3. Define technology stack<br>4. Design infrastructure<br>5. Define integration points and external interfaces<br>6. Document security architecture<br>7. Create deployment architecture diagram<br>8. Design database schema<br>9. Create ERD<br>10. Design API endpoints<br>11. Define API contracts<br>12. Document auth/authorization and create OpenAPI spec | Tech Lead, CTO, Backend Dev | SRS, Technical Constraints | Architecture Document (incl. DB schema, API spec), Diagrams | Go/No-Go: Architecture technically sound before proceeding. If not, revise. |
| 2 | UI/UX & Low-Level Design | 1. Create user personas and journey maps<br>2. Design information architecture<br>3. Create wireframes for all screens<br>4. Design visual mockups<br>5. Build interactive prototypes<br>6. Conduct usability review<br>7. Document design system/style guide<br>8. Break down architecture into component specs<br>9. Define class diagrams and data structures<br>10. Document algorithms and business logic<br>11. Specify component interfaces and error handling<br>12. Document configuration and create sequence diagrams | Designer, Dev Team | SRS, User Stories, Architecture Document | Wireframes, Mockups, Prototype, Style Guide, LLD Document, Component Specs | Go/No-Go: Client must approve UI/UX before LLD begins. If not approved, revise and re-present. |
| 3 | Design Review | 1. Pre-review preparation (verify documents, schedule, distribute)<br>2. Review architecture & data design with technical team<br>3. Review UI/UX with stakeholders<br>4. Review LLD with development team<br>5. Identify gaps, risks, and cross-cutting concerns<br>6. Document findings and action items | Tech Lead | All design documents | Review Findings Report (FORM-DES-006), Action Items | Go/No-Go: All P0/P1 findings must be resolved before proceeding to Step 4. If not, address findings and return to relevant step. |
| 4 | Approval & Handoff | 1. Verify design package completeness<br>2. Present to CTO for technical approval<br>3. Present to client for business approval<br>4. Obtain sign-offs<br>5. Baseline design documents<br>6. Developer handoff (access, documents, kickoff)<br>7. Initiate Development phase | CTO, Client | All design documents, Review Findings | Approved Design Baseline, Developer Handoff Package, Authorization to Proceed | Do not start development without all signatures on FORM-DES-007. |

---

### 7. Quality Standards

| Deliverable | Acceptance Criteria | Verification Method | Owner |
|-------------|---------------------|---------------------|-------|
| Architecture Document | Complete; addresses all NFRs; includes DB schema, API spec, and LLD | Technical review, CHECK-DES-001 | CTO |
| UI/UX Designs | Client approved; consistent with brand; accessible (WCAG AA) | Client review, CHECK-DES-003 | Designer |
| Design Review | All areas assessed; findings documented with action items | FORM-DES-006 completed | Tech Lead |
| Design Approval | All sign-offs obtained; baseline created; team handed off | FORM-DES-007 completed | CTO |

---

### 8. References

**Related SOPs**:

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-PMR-001 | Planning & Requirements | Upstream (prerequisite) |
| SOP-DEV-015 | Development Process | Downstream (next phase) |

**Work Instructions**:

| Document ID | Title | SOP Step |
|-------------|-------|----------|
| WI-DES-001 | Architecture & Data Design | Step 1 |
| WI-DES-003 | UI/UX & Low-Level Design | Step 2 |
| WI-DES-005 | Design Review | Step 3 |
| WI-DES-006 | Design Approval | Step 4 |

**Templates, Forms & Checklists (Tier 4)**:

| Document ID | Title | Purpose |
|-------------|-------|---------|
| TMPL-ARCH-001 | Architecture Document Template | Master design document (architecture, DB, API, LLD) |
| CHECK-DES-001 | Architecture & Data Design Checklist | WI-DES-001 completeness verification |
| CHECK-DES-003 | UI/UX & LLD Design Checklist | WI-DES-003 completeness verification |
| FORM-DES-005 | Component Specification | Per-component dev summary card |
| FORM-DES-006 | Design Review Findings Report | Pre-review prep, review checklist, and post-review findings |
| FORM-DES-007 | Design Approval Sign-Off & Handoff | Gate document for Design → Development with handoff tracking |

**External References**:
- ISO 9001:2015 Clause 8.3 - Design and development
- IEEE 1016 - Software Design Descriptions
- TOGAF - Architecture Framework

---

### 9. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2025-12-02 | System Generated | Initial creation from process migration |
| 2.0.0 | 2025-12-13 | Manual Consolidation | Consolidated SOPs 3.1-3.5 into single comprehensive SOP |
| 2.1.0 | 2026-02-13 | System | Added WI references, Tier 4 forms/checklists/templates; corrected downstream SOP ID; added Design Clarifications to scope |
| 3.0.0 | 2026-02-27 | SOP Trim | Trimmed from 6 steps + 2 decision points to 4 steps with inlined go/no-go criteria. Merged Steps 1+2 → Step 1 (Architecture & Data Design), Steps 3+4 → Step 2 (UI/UX & Low-Level Design). Reduced Tier 4 items from 18 to 6. Simplified RACI to 4 activities. Updated all references. |

---

*Document ID: SOP-DES-001-v3.0.0 | Updated: 2026-02-27*
