# Work Instruction: Risk & Resource Planning

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-PMR-005-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-03-02 |
| **Review Date** | 2027-03-02 |
| **Department** | Project Management |
| **Parent SOP** | SOP-PMR-001 (Planning & Requirements) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for identifying, analyzing, and mitigating project risks, and for estimating effort, allocating resources, building the project timeline, and calculating the project budget. It covers Step 5 of the Planning & Requirements SOP (SOP-PMR-001), ensuring a systematic approach to risk management combined with realistic, achievable project plans within contracted constraints.

---

## 2. Scope

**Applies To:**
- All new client projects during the Planning & Requirements phase
- Major change requests with significant risk profile changes or requiring budget/resource re-planning
- Projects with elevated complexity, new technologies, or tight timelines

**Responsible Role:** Project Manager

---

## 3. Prerequisites

Before starting risk and resource planning, ensure you have:

☐ Requirements Document with prioritized user stories (WI-PMR-002 / WI-PMR-003 output)
☐ Project Objectives with success criteria (WI-PMR-002 output)
☐ Technical Feasibility Assessment Report (WI-PMR-004 output)
☐ Technical Constraints documented
☐ Risk Register Template (TMPL-RISK-001) available
☐ Budget Template (TMPL-BUDGET-001) and Resource Plan Template (TMPL-RESOURCE-001) available
☐ Signed Contract with budget and timeline information
☐ Resource availability data from team managers
☐ Key stakeholders available for risk identification session (CTO, COO, Dev Lead)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Requirements Document & User Stories | WI-PMR-002 / WI-PMR-003 output | Document / Backlog |
| Project Objectives | WI-PMR-002 output | Document |
| Feasibility Assessment Report | WI-PMR-004 output | Form (FORM-REQ-004) |
| Technical Constraints | Handoff / Tech Lead | Document section |
| Project Charter | Pre-sales | Document |
| Contract (scope/timeline/budget) | Legal / AM | PDF |
| Team composition | Resource Manager | List |
| Resource Availability | Team Managers / COO | Spreadsheet / System |
| Internal Rate Card | Finance / COO | Spreadsheet |
| Historical Project Data | Past projects | Spreadsheets / Reports |

---

## 5. Procedure Steps

### Part A: Risk Assessment

---

### Step 5.1: Prepare for Risk Identification

**Action:** Set up the risk identification workshop with the right participants and materials.

**How to Execute:**

1. Schedule a 90-minute risk identification workshop with:
   - PM (facilitator)
   - CTO or Tech Lead (technical risks)
   - COO (operational/resource risks)
   - Dev Lead (implementation risks)
   - QA Lead (quality risks)
   - Account Manager (client relationship risks)
2. Prepare materials:
   - Print/share the Requirements Document summary
   - Print/share the Project Objectives
   - Print/share the Technical Feasibility Assessment Report (especially yellow/red items)
   - Prepare FORM-PM-006-001 (Risk Identification Worksheet)
   - Have blank sticky notes or digital whiteboard ready
3. Review historical risks from similar past projects
4. Prepare the risk categories list: Technical, Resource, Schedule, Budget, Client, External

**Expected Outcome:** Workshop scheduled, all materials prepared, participants confirmed

**Quality Check:** ✅ All key roles represented, ✅ Historical risks reviewed, ✅ FORM-PM-006-001 prepared

---

### Step 5.2: Conduct Risk Identification Workshop

**Action:** Facilitate structured brainstorming to identify all project risks.

**How to Execute:**

1. Open the workshop:
   - Explain the purpose: "Identify everything that could go wrong so we can plan for it"
   - Set ground rules: no idea is too small, no judgment, quantity over quality initially

2. Walk through each risk category systematically using FORM-PM-006-001:

   **Technical Risks:** New/unfamiliar technologies? Complex integrations? Performance targets difficult to achieve? Data migration complexity? Technology maturity concerns?

   **Resource Risks:** Key person dependency? Skills gaps? Availability conflicts? Need for contractors? Turnover risk?

   **Schedule Risks:** Hard deadlines? Dependencies on client deliverables? Third-party vendor dependencies? Seasonal impacts? Underestimated complexity?

   **Budget Risks:** Scope creep potential? Unclear requirements? Third-party licensing costs? Infrastructure scaling costs? Currency fluctuation?

   **Client Risks:** Slow feedback/approvals? Changing stakeholders? Unclear decision-making authority? Internal politics? Unstable technical environment?

   **External Risks:** Regulatory changes? API deprecations? Market changes? Force majeure?

3. For each identified risk, capture:
   - Risk ID (e.g., RISK-001), Category, Description, Potential trigger, Potential impact

4. Review and merge duplicates. Aim for 15–30 identified risks for a typical project.

**Expected Outcome:** Comprehensive list of identified risks across all categories

**Quality Check:** ✅ All 6 categories explored, ✅ Each risk has specific description and trigger, ✅ 15–30 risks identified

---

### Step 5.3: Score and Prioritize Risks

**Action:** Assess each risk using probability × impact scoring and rank by priority.

**How to Execute:**

1. Use FORM-PM-006-002 (Risk Scoring Form)
2. Assess **Probability**: High (3, >60%), Medium (2, 20–60%), Low (1, <20%)
3. Assess **Impact**: High (3, severe), Medium (2, significant), Low (1, minor)
4. Calculate **Risk Score** = Probability × Impact:
   - **9 (H×H):** Critical — requires immediate mitigation
   - **6 (H×M or M×H):** High — requires mitigation plan
   - **4 (M×M):** Medium — develop mitigation, monitor
   - **3 or below:** Low — accept with monitoring

5. Create a risk matrix visualization:
   ```
                     Impact
                Low(1)  Med(2)  High(3)
   Prob High(3)  3       6       9
        Med(2)   2       4       6
        Low(1)   1       2       3
   ```

6. Sort risks by score (highest first)
7. Get team consensus on scoring

**Expected Outcome:** All risks scored and ranked by priority

**Quality Check:** ✅ Every risk has probability and impact scores, ✅ Team consensus on scoring

---

### Step 5.4: Develop Mitigation Strategies and Assign Owners

**Action:** Create actionable mitigation plans for high and medium-priority risks.

**How to Execute:**

1. Use FORM-PM-006-003 (Risk Mitigation Planning Form)
2. For each risk with score ≥ 4, choose a mitigation approach:
   - **Avoid:** Eliminate the risk by changing the plan
   - **Mitigate:** Reduce probability or impact
   - **Transfer:** Shift risk to another party
   - **Accept:** Acknowledge and prepare contingency

3. For each mitigation strategy, document:
   - Mitigation actions, Contingency plan, Trigger indicators, Resource requirements, Timeline

4. For risks with score ≤ 3, document as "Accepted" with brief monitoring note

5. Assign a responsible owner to each risk:
   - Technical risks → CTO/Tech Lead; Resource risks → PM/COO; Schedule risks → PM; Budget risks → PM/COO; Client risks → PM/AM; External risks → PM
   - Ensure no single person owns more than 40% of risks

**Expected Outcome:** Mitigation strategies documented for all medium and high-priority risks; every risk has an assigned owner

**Quality Check:** ✅ All risks ≥ 4 have mitigation strategies, ✅ Each strategy has contingency plan and triggers, ✅ Every risk has an owner

---

### Step 5.5: Compile the Risk Register

**Action:** Finalize the Risk Register document.

**How to Execute:**

1. Compile all risk data into TMPL-RISK-001:
   - Risk ID, Category, Description, Probability, Impact, Score
   - Mitigation approach and actions, Contingency plan, Trigger indicators
   - Owner, Status (Open), Review date

2. Create a risk summary for leadership:
   - Total risks by severity level
   - Top 5 risks with one-line descriptions
   - Risk matrix visualization

3. Store all completed forms in the project repository
4. Schedule the first risk review meeting (typically 2 weeks into Design phase)

**Expected Outcome:** Complete Risk Register ready for planning package

**Quality Check:** ✅ Risk Register follows TMPL-RISK-001 format, ✅ Summary prepared, ✅ All forms archived

---

### Part B: Effort Estimation, Resource Allocation & Budget

---

### Step 5.6: Estimate Effort Per Phase and Epic

**Action:** Break down the project into estimable units and determine effort for each.

**How to Execute:**

1. Use FORM-PM-007-001 (Effort Estimation Worksheet)
2. Identify the major project phases: Planning (remaining), Design, Development, Testing, Deployment & Launch, Post-Launch Support
3. For each phase, break effort down by epic and by role (Design, Frontend, Backend, QA, DevOps, PM hours)
4. Use estimation techniques:
   - **Expert judgment:** Consult Tech Lead and senior developers
   - **Analogous estimation:** Reference similar past projects
   - **Three-point estimation** for uncertain areas: Estimate = (O + 4M + P) / 6
   - **Story point mapping:** Convert story points to hours using team velocity
5. Add estimation buffers: +10–15% for new technologies, +10% for evolving requirements, +15–20% for complex integrations
6. Get Tech Lead sign-off on technical estimates

**Expected Outcome:** Effort estimates for every phase and epic, broken down by role

**Quality Check:** ✅ Every epic estimated, ✅ Estimates reviewed by Tech Lead, ✅ Buffers applied, ✅ FORM-PM-007-001 completed

---

### Step 5.7: Identify Required Roles and Check Availability

**Action:** Determine team composition and verify resource availability.

**How to Execute:**

1. Use FORM-PM-007-002 (Resource Allocation Form)
2. Based on effort estimates, identify required roles with allocation %, duration, and specific skills
3. Check availability with team managers (account for meetings, admin, other projects — assume 75–80% productive time)
4. Identify gaps and plan resolution: adjust timeline, request reallocation, plan for contractors, identify training needs
5. Create the team roster with names, roles, allocation percentages, and duration

**Expected Outcome:** Team roster with confirmed availability, gaps identified with resolution plans

**Quality Check:** ✅ All required roles identified, ✅ Availability confirmed with managers, ✅ Gaps have resolution plans

---

### Step 5.8: Build the Project Timeline with Milestones

**Action:** Create a realistic timeline mapping effort to calendar time.

**How to Execute:**

1. Start with hard constraints: contract dates, client milestones, external dependencies, team availability
2. Map phases to calendar (Design 2–4 weeks, Development = effort ÷ team capacity, QA concurrent + dedicated UAT, Deployment 1–2 weeks)
3. Define milestones: M1 Planning Approval, M2 Design Approval, M3 Sprint Reviews, M4 Feature Complete, M5 QA Sign-off, M6 UAT Sign-off, M7 Go-Live
4. Identify dependencies and critical path
5. Build the timeline in project management tool (Gantt chart or timeline view)
6. Validate against contract timeline — flag if timeline doesn't fit

**Expected Outcome:** Project timeline with milestones, dependencies, and critical path identified

**Quality Check:** ✅ All phases mapped, ✅ Milestones defined with dates, ✅ Critical path identified, ✅ Timeline fits contract (or gap flagged)

---

### Step 5.9: Calculate the Project Budget

**Action:** Translate effort estimates and resource plans into a financial budget.

**How to Execute:**

1. Use FORM-PM-007-003 (Budget Calculation Template)
2. Calculate **labor costs**: hours × internal rate for each team member; contractor rates where applicable
3. Calculate **non-labor costs**: software licenses, third-party services, infrastructure, training, travel
4. Calculate **contingency**: 10% base, adjust to 15–20% based on risk profile
5. Total = Labor Costs + Non-Labor Costs + Contingency
6. Create budget breakdown by phase

**Expected Outcome:** Complete budget estimate with labor, non-labor, contingency, and phase breakdown

**Quality Check:** ✅ All cost categories included, ✅ Contingency justified by risk profile, ✅ FORM-PM-007-003 completed

---

### Step 5.10: Compare Budget to Contract and Reconcile

**Action:** Verify the estimated budget against the contracted amount and resolve any gaps.

**How to Execute:**

1. Compare total estimated budget to contracted budget:
   - **Under budget:** Document margin as management reserve
   - **At budget (within 5%):** Proceed with caution
   - **Over budget (5–15%):** Identify optimization opportunities
   - **Significantly over budget (>15%):** Escalation required

2. If over budget, explore optimization: reduce scope, optimize resources, overlap phases, reduce contingency (risky), negotiate budget increase

3. Document reconciliation with rationale and recommendations

4. If budget cannot be reconciled without compromising quality, escalate to COO

**Expected Outcome:** Budget reconciled with contract, adjustments documented, or escalation initiated

**Quality Check:** ✅ Budget vs. contract comparison documented, ✅ Adjustments justified, ✅ Over-budget situations escalated

---

### Step 5.11: Compile All Risk & Resource Planning Deliverables

**Action:** Package all outputs for the approval step.

**How to Execute:**

1. Finalize and compile:
   - Risk Register (TMPL-RISK-001), Budget Estimate (TMPL-BUDGET-001), Resource Plan (TMPL-RESOURCE-001), Project Timeline, Budget Reconciliation

2. Create an executive summary (1 page):
   - Total budget, contingency, team size, duration, key milestones, top 3 budget risks and top 3 project risks

3. Store all completed forms in the project repository

4. Prepare materials for Sign-off & Approval (WI-PMR-006)

**Go/No-Go Criteria (proceed to Step 6 when ALL are met):**
- ☐ Risk Register complete with mitigations for all scores ≥ 4
- ☐ Budget is within contract or over-budget escalation is resolved
- ☐ Resource availability confirmed (not assumed)
- ☐ Timeline fits within contract dates or gap is flagged and addressed
- ☐ All forms completed and archived

**Expected Outcome:** All risk and resource planning documents compiled, ready for approval

**Quality Check:** ✅ All deliverables complete, ✅ Executive summary created, ✅ Forms archived, ✅ Ready for sign-off

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Risk Register | Complete risk inventory with scores and mitigations | Document (TMPL-RISK-001) |
| Risk Summary | Executive overview of risk profile | Document section |
| Risk Matrix | Visual probability × impact grid | Diagram |
| Budget Estimate | Complete cost breakdown with contingency | Document (TMPL-BUDGET-001) |
| Resource Plan | Team roster, allocations, availability | Document (TMPL-RESOURCE-001) |
| Project Timeline | Phases, milestones, dependencies, critical path | Gantt chart / Timeline |
| Budget Reconciliation | Contract comparison and adjustments | Document section |
| Executive Summary | 1-page overview for leadership | Document |
| Completed FORM-PM-006-001 | Risk Identification Worksheets | Form |
| Completed FORM-PM-006-002 | Risk Scoring Forms | Form |
| Completed FORM-PM-006-003 | Risk Mitigation Planning Forms | Form |
| Completed FORM-PM-007-001 | Effort Estimation Worksheet | Form |
| Completed FORM-PM-007-002 | Resource Allocation Form | Form |
| Completed FORM-PM-007-003 | Budget Calculation Template | Form |

---

## 7. Quality Checks

✅ All 11 procedure steps completed
✅ All risk categories explored (technical, resource, schedule, budget, client, external)
✅ 15–30 risks identified for a typical project
✅ Every risk scored with probability × impact
✅ All risks with score ≥ 4 have mitigation strategies
✅ Every risk has an assigned owner
✅ Every epic and phase has effort estimates
✅ Estimates reviewed by Tech Lead
✅ All required roles identified with confirmed availability
✅ Timeline includes milestones and critical path
✅ Budget includes labor, non-labor, and contingency
✅ Budget compared to contract amount
✅ Over-budget situations escalated appropriately
✅ Executive summary prepared
✅ All forms archived in project repository

---

## 8. Success Criteria

- Comprehensive risk coverage across all categories with actionable mitigations
- Team consensus on risk scores and priorities
- Clear ownership and monitoring responsibilities for all risks
- Effort estimates are realistic and validated by the technical team
- Resource availability is confirmed (not assumed)
- Timeline fits within contract dates or gaps are escalated
- Budget is within contract or reconciliation is documented
- Leadership has clear visibility into cost, timeline, risk, and resource commitments
- All deliverables are ready for approval package

---

## 9. Common Pitfalls

| Pitfall | Prevention |
|---------|------------|
| Only identifying technical risks | Force discussion through all 6 categories; client and resource risks are often the biggest threats |
| Risks too vague ("something might go wrong") | Require specific descriptions: what exactly could happen, triggered by what, impacting what |
| Everyone scores everything as "Medium" | Calibrate with examples: "A 3-week delay is Medium impact. A missed launch date is High." |
| Mitigation plans that are just "monitor closely" | Require specific actions: who does what, by when, with what trigger |
| Estimating with 100% resource utilization | Assume 75–80% productive time; account for meetings, admin, context switching |
| Forgetting PM and QA time in estimates | Include all roles from day one — PM overhead is typically 10–15% of project effort |
| Not including non-labor costs | Use a checklist: licenses, hosting, APIs, travel, training — these add up quickly |
| Contingency treated as slush fund | Contingency has specific risk-based justification; track usage against identified risks |
| Timeline based on effort alone | Map dependencies explicitly; a task might be 8 hours but blocked for 2 weeks |
| Assuming resources are available without checking | Always verify with managers — other projects compete for the same people |
| Budget reconciliation happens too late | Compare to contract early; don't wait until the approval meeting to discover a gap |

---

## 10. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-PMR-001 | Planning & Requirements | Parent procedure |
| WI-PMR-002 | Requirements Gathering | Upstream (provides requirements, objectives) |
| WI-PMR-003 | User Stories & SRS | Upstream (provides user stories, SRS) |
| WI-PMR-004 | Technical Feasibility | Upstream (provides feasibility assessment) |
| WI-PMR-006 | Sign-off & Approval | Downstream (uses risk register, budget, resource plan) |
| TMPL-RISK-001 | Risk Register Template | Output template |
| TMPL-BUDGET-001 | Budget Template | Output template |
| TMPL-RESOURCE-001 | Resource Plan Template | Output template |
| FORM-PM-006-001 | Risk Identification Worksheet | Risk discovery |
| FORM-PM-006-002 | Risk Scoring Form | Probability × Impact assessment |
| FORM-PM-006-003 | Risk Mitigation Planning Form | Mitigation strategy capture |
| FORM-PM-007-001 | Effort Estimation Worksheet | Estimation capture |
| FORM-PM-007-002 | Resource Allocation Form | Resource tracking |
| FORM-PM-007-003 | Budget Calculation Template | Budget calculation |

---

## 11. References

- SOP-PMR-001-v1.0.0, Step 5: Risk & Resource Planning
- ISO 31000:2018 — Risk Management Guidelines
- PMBOK Guide — Project Risk Management, Cost Management, Resource Management, Schedule Management
- ISO 9001:2015 Clause 6.1 — Actions to address risks and opportunities
- ISO 9001:2015 Clause 7.1 — Resources

---

## 12. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-02 | Process Merge | Created from WI-PM-006-v2.0.0; updated parent SOP to SOP-PMR-001; updated all cross-references to WI-PMR series; added Technical Feasibility Assessment Report as prerequisite input |

---

**Document ID:** WI-PMR-005-v1.0.0 | **Tier:** 3 - Work Instructions
