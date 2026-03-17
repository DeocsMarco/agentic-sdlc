# Work Instruction: Technical Feasibility Assessment

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-PMR-004-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-03-02 |
| **Review Date** | 2027-03-02 |
| **Department** | Project Management / Business Analysis |
| **Parent SOP** | SOP-PMR-001 (Planning & Requirements) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for conducting a technical feasibility assessment of the documented requirements as defined in Step 4 of the Planning & Requirements SOP (SOP-PMR-001). It ensures that all requirements are technically achievable within the project's constraints before proceeding to formal review and approval.

---

## 2. Scope

**Applies To:**
- All projects after SRS development (WI-PMR-003) is complete
- Change requests with significant technical implications
- Requirements flagged as technically uncertain during gathering

**Responsible Role:** CTO, Tech Lead

---

## 3. Prerequisites

Before starting the technical feasibility assessment, ensure you have:

☐ Completed SRS Document (from WI-PMR-003)
☐ Requirements Traceability Matrix (FORM-REQ-003)
☐ User Stories with acceptance criteria (from WI-PMR-003)
☐ Technical Feasibility Checklist (CHECK-REQ-004)
☐ Current team skills inventory
☐ Technology landscape awareness (current stack, capabilities)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| SRS Document | WI-PMR-003 | Document (TMPL-SRS-001) |
| Requirements Traceability Matrix | WI-PMR-003 | Form (FORM-REQ-003) |
| User Stories | WI-PMR-003 | PM Tool / Document |
| Team Skills Inventory | HR / Team Leads | Document/Spreadsheet |
| Technology Constraints | Client / Project Charter | Document |

---

## 5. Procedure Steps

### Step 4.1: Review SRS with Technical Team

**Action:** Conduct a structured walkthrough of the SRS with the technical team to identify feasibility concerns.

**How to Execute:**

1. Schedule a technical review session (2–4 hours depending on project size):
   - Attendees: CTO, Tech Lead, Senior Developers, DevOps Lead
   - Materials: SRS Document, printed or screen-shared

2. Walk through each SRS section:
   - **Functional Requirements**: Can each use case be implemented with known technologies?
   - **Non-Functional Requirements**: Are the performance/scalability targets achievable?
   - **Interface Requirements**: Are the specified interfaces realistic?
   - **Data Requirements**: Can the data model support the requirements?
   - **Integration Requirements**: Are the external integrations feasible?

3. For each requirement, the technical team should flag:
   - 🟢 **Feasible**: Can be implemented with known approach
   - 🟡 **Conditionally Feasible**: Feasible with caveats (extra time, different approach, additional resources)
   - 🔴 **Infeasible / High Risk**: Cannot be implemented as written, or extremely risky

4. Document all flags in a feasibility assessment log:
   ```
   REQ-ID: FR-015
   Status: 🟡 Conditionally Feasible
   Concern: Real-time order tracking requires WebSocket infrastructure not in current stack
   Condition: Need 2 additional sprints for WebSocket implementation + DevOps setup
   ```

**Expected Outcome:** Every requirement reviewed and flagged for feasibility status

**Quality Check:** ✅ All functional and non-functional requirements have a feasibility rating

---

### Step 4.2: Assess Technical Complexity

**Action:** Evaluate the overall technical complexity of the project and identify high-risk areas.

**How to Execute:**

1. Rate complexity dimensions on a 1–5 scale:

   | Dimension | Rating (1-5) | Notes |
   |-----------|-------------|-------|
   | Architecture complexity | | Number of components, distributed systems |
   | Integration complexity | | Number and types of external integrations |
   | Data complexity | | Volume, migration, real-time processing |
   | Security complexity | | Compliance requirements, encryption needs |
   | UI/UX complexity | | Real-time features, accessibility, multi-platform |
   | Algorithm complexity | | Business logic complexity, calculations |

2. Calculate overall complexity:
   - Average score 1–2: **Low complexity** — standard project
   - Average score 2–3: **Medium complexity** — some challenging areas
   - Average score 3–4: **High complexity** — significant technical challenges
   - Average score 4–5: **Very high complexity** — requires architectural spikes/PoCs

3. For each dimension rated 4 or 5:
   - Document the specific challenge
   - Identify potential approaches to address it
   - Estimate additional time/resources needed
   - Recommend spikes or proof-of-concepts if needed

**Expected Outcome:** Technical complexity assessment with identified high-risk areas

**Quality Check:** ✅ Every high-complexity dimension has a mitigation approach documented

---

### Step 4.3: Identify Technology Constraints and Knowledge Gaps

**Action:** Evaluate whether the team has the skills and technology access to deliver the requirements.

**How to Execute:**

1. Map requirements to required technologies:

   | Requirement Area | Required Technology | Team Experience | Gap? |
   |-----------------|-------------------|-----------------|------|
   | Real-time updates | WebSocket / SSE | Limited | Yes |
   | Payment processing | Stripe API | Experienced | No |
   | PDF generation | Puppeteer / wkhtmltopdf | Moderate | Minor |

2. For each technology gap, determine:
   - Can existing team members learn? (training time estimate)
   - Do we need to hire or contract a specialist?
   - Can we use a simpler alternative technology?
   - Is a proof-of-concept needed to validate feasibility?

3. Identify technology constraints:
   - Client-mandated technologies
   - Licensing restrictions
   - Compatibility requirements (must work with legacy systems)
   - Deployment constraints (on-premise, specific cloud region, air-gapped)

4. Document all identified gaps with resolution plans in FORM-REQ-004 (Feasibility Assessment Report)

**Expected Outcome:** Complete technology gap analysis with resolution plans

**Quality Check:** ✅ Every technology gap has a resolution plan (train, hire, alternative, or spike)

---

### Step 4.4: Evaluate Integration Requirements

**Action:** Assess the feasibility of each external system integration.

**How to Execute:**

1. For each integration in the SRS, verify:
   - **API availability**: Does the external system actually have the API we need?
   - **Documentation quality**: Is the API well-documented?
   - **Sandbox environment**: Is a test environment available?
   - **Authentication access**: Can we obtain API keys/credentials for development?
   - **Rate limits**: Are the rate limits compatible with our volume requirements?
   - **Data format compatibility**: Can we work with their data format?

2. Contact external system owners/vendors if information is missing

3. For each integration, assess risk:
   - **Low risk**: Well-documented API, sandbox available, team has experience
   - **Medium risk**: Documentation exists but incomplete, or team is new to it
   - **High risk**: Undocumented, no sandbox, vendor unresponsive, or legacy system

4. For high-risk integrations:
   - Recommend a proof-of-concept sprint
   - Identify fallback approaches (manual process, alternative service)
   - Escalate to PM for client discussion if access cannot be obtained

**Expected Outcome:** Integration feasibility assessment with risk ratings and action items

**Quality Check:** ✅ High-risk integrations have PoC or fallback plans documented

---

### Step 4.5: Assess Resource and Timeline Feasibility

**Action:** Evaluate whether the requirements can be delivered within the project's resource and timeline constraints.

**How to Execute:**

1. Create a high-level effort estimate:
   - Group requirements by functional area
   - Estimate effort for each area (in person-weeks or sprints)
   - Include integration development and infrastructure setup effort
   - Add contingency (20% for medium complexity, 30–40% for high complexity)

2. Compare against project constraints:
   - Available team size and availability
   - Project deadline
   - Budget for resources

3. Identify scenarios:
   - **All Must Have + Should Have fits**: Proceed as planned
   - **Only Must Have fits**: Recommend deferring Should Have to Phase 2
   - **Must Have doesn't fit**: STOP — escalate to PM for scope negotiation

4. Document using FORM-REQ-005 (Risk-Technology Matrix)

**Expected Outcome:** Resource and timeline feasibility assessment with recommendations

**Quality Check:** ✅ Effort estimate accounts for all requirements including integration and infrastructure

---

### Step 4.6: Identify and Document Technical Risks

**Action:** Compile all technical risks discovered during the assessment into a structured risk register.

**How to Execute:**

1. Consolidate risks from Steps 4.1–4.5 into a risk register:

   | Risk ID | Description | Probability | Impact | Severity | Mitigation | Owner |
   |---------|-------------|-------------|--------|----------|------------|-------|
   | TR-001 | WebSocket infrastructure may cause scaling issues | Medium | High | High | Conduct PoC in Sprint 1; fallback to polling | Tech Lead |
   | TR-002 | Legacy ERP API is undocumented | High | Medium | High | Schedule reverse-engineering session with client IT | BA |
   | TR-003 | Team has no iOS development experience | High | High | Critical | Hire iOS contractor or switch to React Native | CTO |

2. Classify severity:
   - **Critical**: Could prevent project delivery → requires immediate action
   - **High**: Could cause significant delay → needs mitigation plan
   - **Medium**: Could cause minor delay → monitor and plan
   - **Low**: Unlikely to affect delivery → accept and monitor

3. For Critical and High severity risks:
   - Assign an owner
   - Define specific mitigation actions with deadlines
   - Identify trigger conditions for activating contingency plans

4. Present risk summary to PM for inclusion in requirements review (WI-PMR-006)

**Expected Outcome:** Technical risk register with severity ratings and mitigation plans

**Quality Check:** ✅ All Critical/High risks have assigned owners and mitigation actions

---

### Step 4.7: Document Feasibility Findings

**Action:** Compile the complete feasibility assessment report.

**How to Execute:**

1. Complete FORM-REQ-004 (Feasibility Assessment Report) with:
   - Executive summary (overall feasibility verdict)
   - Requirement-by-requirement feasibility status
   - Technical complexity assessment
   - Technology gap analysis
   - Integration risk assessment
   - Resource and timeline assessment
   - Technical risk register
   - Recommendations

2. Write the feasibility verdict:
   - **Feasible**: All requirements can be implemented as specified
   - **Feasible with Conditions**: Requirements can be met with specific adjustments (list them)
   - **Partially Feasible**: Some requirements need revision (list which ones and why)
   - **Not Feasible**: Significant requirements cannot be met (requires scope renegotiation)

3. For any requirements needing revision:
   - Clearly state what needs to change
   - Suggest alternative approaches
   - Estimate impact of changes on scope/timeline

4. Submit the completed assessment to PM for inclusion in the review and sign-off process (WI-PMR-005/WI-PMR-006)

**Expected Outcome:** Complete Feasibility Assessment Report with clear verdict and recommendations

**Quality Check:** ✅ Report provides enough detail for PM to make informed decisions with the client

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Feasibility Assessment Report | Complete technical feasibility analysis | Form (FORM-REQ-004) |
| Risk-Technology Matrix | Resource and technology risk mapping | Form (FORM-REQ-005) |
| Technical Risk Register | All identified risks with mitigation plans | Report section |
| Feasibility Verdict | Overall assessment with conditions | Report section |
| Recommended Revisions | Requirements that need modification | List with alternatives |
| Completed CHECK-REQ-004 | Technical Feasibility Checklist | Checklist |

---

## 7. Quality Standards

### Feasibility Assessment Completeness

✅ All 7 procedure steps completed
✅ Every requirement has a feasibility rating (green/yellow/red)
✅ Technical complexity rated across all dimensions
✅ Technology gaps identified with resolution plans
✅ Integration risks assessed for all external systems
✅ Resource and timeline estimate completed
✅ Risk register includes all Critical and High risks with owners
✅ Clear feasibility verdict provided

---

## 8. Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Can't assess integration without API access | Request sandbox access from client; mark as "TBD" with deadline; plan PoC sprint |
| Team disagrees on feasibility of a requirement | Have each person document their concern; let CTO make final call |
| Client has unrealistic performance expectations | Show benchmarks from similar systems; propose achievable targets with enhancement roadmap |
| Technology gap is critical and timeline is tight | Recommend contractor/specialist hire; present cost vs. delay tradeoff to PM |
| Too many "yellow" requirements to address all | Prioritize by impact; focus on Must Have yellows first |
| External vendor is unresponsive about API details | Escalate through client relationship; plan for worst-case (build adapter/wrapper) |

---

## 9. Tips for Success

- **Be honest, not pessimistic:** Flag real risks, but also acknowledge what's straightforward
- **Propose solutions, not just problems:** Every red/yellow flag should come with a recommendation
- **Involve the right people:** Backend, frontend, DevOps, and security each see different risks
- **Time-box spikes:** If you need a proof-of-concept, define clear success criteria and a 1–3 day limit
- **Think about the whole lifecycle:** A technology may be easy to implement but hard to maintain
- **Document assumptions:** "This is feasible assuming..." makes your assessment transparent
- **Communicate early:** If something is clearly infeasible, tell the PM immediately — don't wait for the report

---

## 10. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-PMR-001 | Planning & Requirements | Parent procedure |
| WI-PMR-003 | User Stories & SRS | Previous work instruction |
| WI-PMR-005 | Risk & Resource Planning | Next work instruction |
| CHECK-REQ-004 | Technical Feasibility Checklist | Completeness verification |
| FORM-REQ-004 | Feasibility Assessment Report | Output form |
| FORM-REQ-005 | Risk-Technology Matrix | Risk documentation |

---

## 11. References

- SOP-PMR-001-v1.0.0, Step 4: Technical Feasibility Assessment
- PMBOK Guide — Risk Management, Scope Management
- ISO 9001:2015 Clause 8.2 — Requirements for products and services

---

## 12. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-02 | Process Merge | Created from WI-REQ-004-v1.0.0; updated parent SOP to SOP-PMR-001; updated all cross-references to WI-PMR series |

---

**Document ID:** WI-PMR-004-v1.0.0 | **Tier:** 3 - Work Instructions
