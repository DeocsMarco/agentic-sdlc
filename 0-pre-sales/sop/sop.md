# Proposal & Contract

## Standard Operating Procedure

---

### Header

| Field | Value |
|-------|-------|
| **Document ID** | SOP-MGT-001-v2.0.0 |
| **Version** | 2.0.0 |
| **Effective Date** | 2026-02-20 |
| **Review Date** | 2027-02-20 |
| **Department** | Management |
| **Process Stage** | 0. Pre-Sales |
| **Approved By** | [Pending] |

---

### 1. Objective

This procedure defines the standard process for evaluating client opportunities, developing proposals, securing contracts, and handing off projects to execution. It covers the complete pre-sales lifecycle from RFP receipt through project manager assignment.

---

### 2. Scope

**In Scope**:
- RFP review and feasibility assessment
- Strategy development and proposal preparation
- Contract signing and validation
- Project handoff from Account Manager to Project Manager

**Out of Scope**:
- Communication plan creation (covered in Planning phase, SOP-PM-003)
- Ongoing client relationship management post-handoff
- Detailed project planning and scheduling

**Applies To**:
- All new client projects requiring proposals
- Major re-engagement opportunities with existing clients

---

### 3. Prerequisites/Safety

The following must be in place before this process begins:

| Prerequisite | Source | Verification |
|--------------|--------|--------------|
| Client RFP or engagement request | Client | Document received and accessible |
| Company capability profile | Internal | Current services portfolio available |
| Strategic priorities for current period | C-Suite | Documented and accessible |

---

### 4. Responsibilities (RACI)

| Activity | Responsible | Accountable | Consulted | Informed |
|----------|-------------|-------------|-----------|----------|
| Review RFP & Assess Feasibility | AM | C-Suite | PM Lead, Finance Lead | Admin |
| Develop Strategy & Proposal | AM, C-Suite | C-Suite | PM Lead, Tech Lead | PM |
| Contract Signing | AM | C-Suite | Legal | PM, Admin |
| Project Handoff | AM, PM | AM | C-Suite, PM Lead | All Team Members |

**Role Definitions**:
- **Responsible**: Does the work
- **Accountable**: Approves/owns the outcome
- **Consulted**: Provides input before decision
- **Informed**: Notified after decision

---

### 5. Materials/Resources Needed

| Material | Source | Format | Used In Step |
|----------|--------|--------|--------------|
| Client RFP | Client | Document | Step 1 |
| FORM-FEASIBILITY-001 | Templates | Form | Step 1 |
| FORM-BUDGET-ASSESSMENT-001 | Templates | Form | Step 1 |
| PLAN-STRATEGY-001 | Templates | Plan | Step 2 |
| TMPL-PROPOSAL-001 | Templates | Template | Step 2 |
| TMPL-HANDOFF-001 | Templates | Template | Step 4 |

---

### 6. Procedure

#### Step 1: Review RFP & Assess Feasibility

The pre-sales process begins when the Account Manager (AM) receives a client Request for Proposal. The AM conducts a single-pass evaluation covering completeness, strategic fit, and multi-dimensional feasibility (technical, resource, timeline, budget) to produce a Go/No-Go recommendation.

- **Responsible**: Account Manager
- **Action**:
  1. Receive RFP and organize in project folder
  2. Review RFP for completeness — verify scope, requirements, timeline, budget, and deliverables are clearly stated
  3. If information is missing, initiate clarification with client (max 2 rounds)
  4. Assess strategic fit — does the opportunity align with company capabilities, target markets, and current priorities?
  5. Conduct feasibility assessment across four dimensions: technical capability, resource availability, timeline realism, and budget alignment
  6. Calculate preliminary budget estimate using FORM-BUDGET-ASSESSMENT-001
  7. Document findings in FORM-FEASIBILITY-001 and produce Go/No-Go recommendation with rationale
  8. Submit to C-Suite for review and decision
- **Inputs**: Client RFP, company capability profile, resource availability data
- **Outputs**: Completed FORM-FEASIBILITY-001, FORM-BUDGET-ASSESSMENT-001, Go/No-Go recommendation
- **Work Instruction**: WI-MGT-001 (Review RFP & Assess Feasibility)

**Tip**: Block 4–6 hours of uninterrupted time. Rushing this step is the #1 cause of bad project commitments.

---

#### Decision Point: Go/No-Go

```
            +---------------------------+
            |  Is the opportunity       |
            |  feasible and strategic?  |
            +-----------+---------------+
                        |
             +----------+----------+
             |                     |
             v                     v
          [YES]                  [NO]
             |                     |
             v                     v
      → Step 2               → Decline RFP
      (Strategy & Proposal)  (Send professional
                              decline letter)
```

**If YES**: Feasibility score ≥ 3.0, no critical barriers, budget viable, C-Suite approves → Proceed to Step 2
**If NO**: Major red flags, weak strategic fit, budget gap >30%, or C-Suite declines → Send decline letter within 2 business days

---

#### Step 2: Develop Strategy & Proposal

With feasibility confirmed, the AM and C-Suite collaborate to develop a project strategy and transform it into a client-ready proposal. This step covers strategic planning, proposal drafting, internal approval, and submission.

- **Responsible**: Account Manager, C-Suite
- **Action**:
  1. Define project approach — select methodology (Agile/Waterfall/Hybrid), outline phases, and specify technology stack
  2. Plan resource allocation — identify team structure, roles, and availability
  3. Develop risk mitigation strategy for top risks identified in Step 1
  4. Define milestones, success criteria, and client engagement model
  5. Document strategy in PLAN-STRATEGY-001 and obtain C-Suite approval
  6. Draft proposal using TMPL-PROPOSAL-001 — include scope, timeline, pricing, deliverables, terms & conditions
  7. Conduct quality review — verify accuracy, completeness, and alignment with strategy/budget
  8. Obtain C-Suite final approval on proposal
  9. Submit proposal to client via specified method before deadline
  10. Send confirmation follow-up within 24 hours
- **Inputs**: FORM-FEASIBILITY-001, FORM-BUDGET-ASSESSMENT-001, Client RFP
- **Outputs**: Approved PLAN-STRATEGY-001, submitted proposal (TMPL-PROPOSAL-001)
- **Work Instruction**: WI-MGT-002 (Strategy & Proposal)

---

#### Step 3: Contract Signing

Upon client acceptance of the proposal, the AM receives and validates the signed contract. This is a straightforward administrative step.

- **Responsible**: Account Manager
- **Action**:
  1. Receive signed contract from client
  2. Validate contract terms match the submitted proposal — check scope, pricing, timeline, payment terms, and legal clauses
  3. If discrepancies found, flag to C-Suite and resolve with client before proceeding
  4. File executed contract in project folder
  5. Notify PM Lead, Finance, and Admin that contract is signed
  6. Identify and assign Project Manager (coordinate with PM Lead)
- **Inputs**: Submitted proposal, signed contract
- **Outputs**: Validated and filed contract, PM assignment

**Checklist**:
- ☐ Contract received and reviewed
- ☐ Terms match proposal (scope, price, timeline, payment)
- ☐ No unauthorized changes or additions
- ☐ Contract filed in `Projects/[Client-Name]/Contract/`
- ☐ Stakeholders notified (PM Lead, Finance, Admin)
- ☐ Project Manager assigned

---

#### Step 4: Project Handoff

The final step transitions the project from pre-sales to execution. The AM transfers all context — client relationship, contract details, strategic decisions, and risk awareness — to the assigned Project Manager in a structured meeting.

- **Responsible**: Account Manager, Project Manager
- **Action**:
  1. Compile handoff package — gather all project documents (RFP, proposal, strategy, budget, contract, client communications)
  2. Pre-fill TMPL-HANDOFF-001 Sections 1–7 with project context
  3. Schedule 60–90 minute handoff meeting with PM (and PM Lead as observer)
  4. Conduct handoff meeting covering: client background, project scope & business context, timeline & milestones, budget & commercial terms, team & resources, risks & assumptions, communication plan
  5. Verify PM readiness — PM should be able to explain the client's needs, key deliverables, top risks, and stakeholder dynamics
  6. Obtain signatures (AM, PM, PM Lead) on TMPL-HANDOFF-001
  7. Send joint AM/PM introduction email to client
  8. Notify C-Suite that handoff is complete
- **Inputs**: All project documents, signed contract, TMPL-HANDOFF-001
- **Outputs**: Completed TMPL-HANDOFF-001, PM introduction to client, project transitioned to Planning phase
- **Work Instruction**: WI-MGT-003 (Project Handoff)

**Warning**: Do not rush the handoff. Incomplete knowledge transfer is the leading cause of early-project friction with clients.

---

### 7. Quality Standards

| Deliverable | Acceptance Criteria | Verification Method | Owner |
|-------------|---------------------|---------------------|-------|
| Feasibility Assessment | All dimensions scored, Go/No-Go recommendation with rationale | C-Suite review | AM |
| Budget Estimate | Realistic cost breakdown with contingency, gap analysis complete | Finance review | AM |
| Project Strategy | All sections complete, aligned with feasibility and budget | C-Suite approval | AM |
| Submitted Proposal | Scope, timeline, pricing, terms complete; no placeholders; RFP requirements addressed | C-Suite approval | AM |
| Validated Contract | Terms match proposal, filed and distributed | Document check | AM |
| Handoff Document | All sections complete, PM passes readiness questions, 3 signatures obtained | PM Lead verification | AM |

---

### 8. References

**Related SOPs**:

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-PM-003 | Project Planning | Downstream (next phase after handoff) |

**Work Instructions**:

| Document ID | Title | SOP Step |
|-------------|-------|----------|
| WI-MGT-001 | Review RFP & Assess Feasibility | Step 1 |
| WI-MGT-002 | Strategy & Proposal | Step 2 |
| WI-MGT-003 | Project Handoff | Step 4 |

**Templates & Forms**:

| Document ID | Title | Purpose |
|-------------|-------|---------|
| FORM-FEASIBILITY-001 | Feasibility Assessment | Multi-dimensional feasibility scoring |
| FORM-BUDGET-ASSESSMENT-001 | Budget Assessment Worksheet | Cost estimation and gap analysis |
| PLAN-STRATEGY-001 | Project Strategy Plan | Strategy documentation |
| TMPL-PROPOSAL-001 | Proposal Template | Client-facing proposal document |
| TMPL-HANDOFF-001 | Project Handoff Template | AM-to-PM knowledge transfer |

---

### 9. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2025-12-02 | System Generated | Initial creation from process migration |
| 1.1.0 | 2025-12-13 | System Transform | Transformed to 011 format with decision points |
| 1.2.0 | 2026-02-18 | Gap Rectification | Fixed RACI, added WI references, clarified handoff flows |
| 2.0.0 | 2026-02-20 | Process Streamlining | Major revision: consolidated 7 steps to 4 (merged RFP review + feasibility, strategy + proposal; simplified contract signing to checklist; removed communication plan step to Planning phase). Reduced from 6 WIs to 3. Removed 3 redundant forms. Updated RACI, materials, references, and quality standards. |

---

*Document ID: SOP-MGT-001-v2.0.0 | Updated: 2026-02-20*
