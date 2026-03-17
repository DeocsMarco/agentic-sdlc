# Budget Assessment Worksheet

**Form ID**: FORM-BUDGET-ASSESSMENT-001-v1.0.0
**Version**: 1.0.0
**Effective Date**: 2026-01-21
**Review Date**: 2027-01-21
**Department**: Management
**Parent SOP**: SOP-MGT-001-v1.1.0 (Proposal & Contract)
**Approved By**: [Pending]
**Complexity**: Moderate

---

## Purpose

This worksheet guides Account Managers through structured budget estimation for RFP opportunities. It ensures consistent cost calculation methodology, appropriate contingency planning, and clear budget gap analysis to support pricing and Go/No-Go decisions.

**Used By**: Account Manager (AM), with input from C-Suite and PM Lead
**Time Required**: 1-2 hours

---

## Methodology Overview

This budget assessment follows a bottom-up estimation approach:

**Key Principles**:
1. **Labor-Driven Costing**: Labor costs are the primary driver (typically 60-80% of total budget)
2. **Contingency Planning**: All estimates include risk-based contingency buffers
3. **Gap Analysis**: Compare total estimated cost against client budget to identify negotiation needs
4. **Profitability Check**: Ensure pricing supports target profit margins

**Steps**:
1. Estimate labor effort and costs
2. Estimate infrastructure and tooling costs
3. Add appropriate contingency based on risk level
4. Calculate total estimated cost
5. Compare against client budget (gap analysis)
6. Determine pricing strategy

---

## Reference Tables

### Table 1: Standard Billing Rates

| Role | Hourly Rate (USD) | Notes |
|------|-------------------|-------|
| C-Suite / Principal | $250 | Strategic advisory, architecture |
| Tech Lead / Senior Dev | $175 | Technical leadership, complex development |
| Mid-Level Developer | $125 | Standard development tasks |
| Junior Developer | $85 | Routine development, testing support |
| Project Manager | $150 | Planning, coordination, reporting |
| Designer (UI/UX) | $135 | Design, prototyping |
| QA Engineer | $100 | Testing, quality assurance |
| DevOps Engineer | $160 | Infrastructure, CI/CD, deployment |

**Note**: Rates are standard; adjust for specialized skills or market conditions

---

### Table 2: Contingency Guidelines

| Risk Level | Contingency % | When to Apply |
|------------|---------------|---------------|
| Low Risk | 10-15% | Familiar technology, clear requirements, experienced team |
| Medium Risk | 15-25% | Some new technology, moderate requirement ambiguity, mixed team |
| High Risk | 25-40% | New technology, vague requirements, new team, tight timeline |
| Very High Risk | 40-50% | Bleeding-edge tech, unclear scope, inexperienced team, aggressive schedule |

**Usage**: Apply to total base cost (Labor + Infrastructure) before adding to get Total Estimated Cost

---

### Table 3: Infrastructure Cost Estimates

| Category | Monthly Cost (USD) | Typical Project Duration Multiplier |
|----------|--------------------|------------------------------------|
| Cloud Hosting (Small) | $500 | × Project Months |
| Cloud Hosting (Medium) | $1,500 | × Project Months |
| Cloud Hosting (Large) | $5,000 | × Project Months |
| Development Tools/Licenses | $200 | × Project Months |
| Third-Party APIs/Services | $300 | × Project Months |
| Staging/Testing Environments | $400 | × Project Months |

**Usage**: Select applicable categories and multiply by project duration

---

## Budget Calculation Sections

### Project Information

| Field | Value |
|-------|-------|
| **RFP Reference Number** | ________________________________ |
| **Client Name** | ________________________________ |
| **Project Title** | ________________________________ |
| **Assessment Date** | ________________________________ |
| **Assessed By** | ________________________________ (AM Name) |
| **Project Duration (Months)** | ________________________________ |

---

### Step 1: Labor Cost Estimation

**Objective**: Calculate total labor costs based on effort estimates and billing rates

**Formula**: Labor_Cost = Sum(Effort_Hours × Hourly_Rate) for each role

---

#### Labor Breakdown by Role

**Role 1: C-Suite / Principal**
- **Estimated Hours**: _________________ hours
- **Hourly Rate**: $250 /hour
- **Calculation**: _______ hours × $250 = **$_________________**

**Role 2: Tech Lead / Senior Developer**
- **Estimated Hours**: _________________ hours
- **Hourly Rate**: $175 /hour
- **Calculation**: _______ hours × $175 = **$_________________**

**Role 3: Mid-Level Developer**
- **Estimated Hours**: _________________ hours
- **Hourly Rate**: $125 /hour
- **Calculation**: _______ hours × $125 = **$_________________**

**Role 4: Junior Developer**
- **Estimated Hours**: _________________ hours
- **Hourly Rate**: $85 /hour
- **Calculation**: _______ hours × $85 = **$_________________**

**Role 5: Project Manager**
- **Estimated Hours**: _________________ hours
- **Hourly Rate**: $150 /hour
- **Calculation**: _______ hours × $150 = **$_________________**

**Role 6: Designer (UI/UX)**
- **Estimated Hours**: _________________ hours
- **Hourly Rate**: $135 /hour
- **Calculation**: _______ hours × $135 = **$_________________**

**Role 7: QA Engineer**
- **Estimated Hours**: _________________ hours
- **Hourly Rate**: $100 /hour
- **Calculation**: _______ hours × $100 = **$_________________**

**Role 8: DevOps Engineer**
- **Estimated Hours**: _________________ hours
- **Hourly Rate**: $160 /hour
- **Calculation**: _______ hours × $160 = **$_________________**

---

**Total Labor Cost**:
```
Sum of all role costs = $_________________
```

**Verification**: Does total labor effort align with project duration? (Rule of thumb: 1 FTE = 160 hours/month)

☐ Yes, effort is reasonable
☐ No, revise estimates (explain): _________________________________

---

### Step 2: Infrastructure & Tooling Costs

**Objective**: Estimate non-labor costs for hosting, tools, and services

**Project Duration**: _______ months (from Project Information above)

---

**Cloud Hosting**:
- **Size**: ☐ Small ☐ Medium ☐ Large
- **Monthly Cost**: $_________________
- **Calculation**: $_______ × _______ months = **$_________________**

**Development Tools/Licenses**:
- **Monthly Cost**: $200 (standard)
- **Calculation**: $200 × _______ months = **$_________________**

**Third-Party APIs/Services**:
- **Monthly Cost**: $_________________
- **Calculation**: $_______ × _______ months = **$_________________**

**Staging/Testing Environments**:
- **Monthly Cost**: $400 (standard)
- **Calculation**: $400 × _______ months = **$_________________**

**Other Infrastructure Costs** (specify):
- **Description**: __________________________________________________
- **Total Cost**: **$_________________**

---

**Total Infrastructure Cost**:
```
Sum of all infrastructure costs = $_________________
```

---

### Step 3: Base Cost Summary

**Objective**: Combine labor and infrastructure for base project cost

**Calculation**:
```
Total Labor Cost (Step 1)         = $_________________
Total Infrastructure Cost (Step 2) = $_________________
─────────────────────────────────────────────────────
Base Project Cost                  = $_________________
```

---

### Step 4: Contingency Calculation

**Objective**: Add risk-based contingency buffer to base cost

**Risk Level Assessment**:

Select risk level based on project characteristics:

☐ **Low Risk (10-15%)**: Familiar tech, clear requirements, experienced team
☐ **Medium Risk (15-25%)**: Some new tech, moderate ambiguity, mixed team
☐ **High Risk (25-40%)**: New tech, vague requirements, new team, tight timeline
☐ **Very High Risk (40-50%)**: Bleeding-edge tech, unclear scope, inexperienced team

**Selected Contingency Percentage**: _______% (within range for selected risk level)

**Rationale for Contingency Selection** (justify specific percentage):
_______________________________________________________________
_______________________________________________________________

---

**Formula**: Contingency_Amount = Base_Project_Cost × (Contingency_% ÷ 100)

**Calculation**:
```
Base Project Cost           = $_________________
Contingency Percentage      = _______%
Contingency Amount          = $_______ × (___% ÷ 100) = $_________________
```

**Verification**: Is contingency adequate for identified risks?

☐ Yes, contingency covers known risks
☐ No, increase contingency (explain): _________________________________

---

### Step 5: Total Estimated Cost

**Objective**: Calculate final estimated project cost including contingency

**Formula**: Total_Estimated_Cost = Base_Project_Cost + Contingency_Amount

**Calculation**:
```
Base Project Cost           = $_________________
Contingency Amount          = $_________________
─────────────────────────────────────────────────────
Total Estimated Cost        = $_________________
```

**Note**: This is the minimum cost to deliver the project with acceptable risk coverage.

---

### Step 6: Budget Gap Analysis

**Objective**: Compare estimated cost against client budget to identify gaps or surpluses

**Client Budget Information**:
- **Client Stated Budget/Range**: $_________________
- **Client Maximum Budget**: $_________________ (if known)
- **Budget Type**: ☐ Fixed ☐ Range ☐ Not-to-Exceed ☐ Unspecified

---

**Formula**: Budget_Gap = Client_Maximum_Budget - Total_Estimated_Cost

**Calculation**:
```
Client Maximum Budget       = $_________________
Total Estimated Cost        = $_________________
─────────────────────────────────────────────────────
Budget Gap/Surplus          = $_________________
```

**Interpretation**:
- **Positive Gap (Surplus)**: Client budget exceeds our estimate → Good profitability potential
- **Zero Gap**: Client budget matches our estimate → Break-even or minimal profit
- **Negative Gap (Shortfall)**: Our estimate exceeds client budget → Must negotiate scope/price or decline

---

**Budget Gap Status**:
- ☐ **Surplus** ($_________): Client budget is **higher** than estimate by _______%
- ☐ **Match** (within ±5%): Client budget **aligns** with estimate
- ☐ **Shortfall** ($_________): Estimate **exceeds** client budget by _______%

---

### Step 7: Pricing Strategy & Profitability

**Objective**: Determine proposed pricing and verify profitability targets

**Target Profit Margin**: _______% (standard: 20-30% for services)

**Proposed Client Price**:
- **Option 1 - Cost-Plus Pricing**: Total_Estimated_Cost × (1 + Target_Margin%)
  ```
  Calculation: $_______ × (1 + ___%) = $_________________
  ```

- **Option 2 - Value-Based Pricing**: Based on client budget and value delivered
  ```
  Proposed Price: $_________________
  Rationale: ____________________________________________________
  ```

- **Option 3 - Competitive Pricing**: Based on market rates
  ```
  Proposed Price: $_________________
  Rationale: ____________________________________________________
  ```

**Selected Pricing Strategy**: ☐ Cost-Plus ☐ Value-Based ☐ Competitive

**Proposed Client Price**: $_________________

---

**Profitability Check**:
```
Proposed Client Price       = $_________________
Total Estimated Cost        = $_________________
─────────────────────────────────────────────────────
Estimated Profit            = $_________________
Estimated Profit Margin     = (Profit ÷ Price) × 100 = _______%
```

**Profitability Status**:
- ☐ **Excellent** (≥30%): Highly profitable, proceed with confidence
- ☐ **Good** (20-29%): Acceptable profitability, proceed
- ☐ **Marginal** (10-19%): Low profitability, justify strategically or renegotiate
- ☐ **Unprofitable** (<10%): Not viable, renegotiate scope/price or decline

---

## Summary

### Final Budget Assessment

**Project**: ______________________________________________________

| Budget Component | Amount (USD) |
|------------------|--------------|
| Total Labor Cost | $_________________ |
| Total Infrastructure Cost | $_________________ |
| Base Project Cost | $_________________ |
| Contingency Amount (___%) | $_________________ |
| **Total Estimated Cost** | **$_________________** |
| Client Maximum Budget | $_________________ |
| Budget Gap/Surplus | $_________________ |
| Proposed Client Price | $_________________ |
| Estimated Profit Margin | _______% |

---

### Quality Checks

Before finalizing this assessment, verify:

- [ ] All labor roles estimated with realistic effort hours
- [ ] Hourly rates align with standard rate card (or deviations justified)
- [ ] Infrastructure costs include all necessary services
- [ ] Contingency percentage aligns with risk level
- [ ] Budget gap analysis completed and interpreted correctly
- [ ] Proposed pricing achieves target profit margin (or exception justified)
- [ ] Assumptions documented in notes section below

---

### Assumptions & Notes

Document key assumptions underlying this budget estimate:

1. **Assumption**: _____________________________________________________
2. **Assumption**: _____________________________________________________
3. **Assumption**: _____________________________________________________
4. **Notes**: __________________________________________________________
   ____________________________________________________________________

---

### Recommendation

**Budget Feasibility**: ☐ Feasible ☐ Feasible with Adjustments ☐ Not Feasible

**Rationale** (200-300 words):
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________

**Required Actions** (if adjustments needed):
1. _______________________________________________________________
2. _______________________________________________________________
3. _______________________________________________________________

---

## Verification

**Completed By**:
- **Name**: ____________________
- **Role**: Account Manager
- **Date**: ____________________

**Verified By**:
- **Name**: ____________________
- **Role**: C-Suite / Finance Lead
- **Date**: ____________________

---

## Common Calculation Errors & Solutions

| Error | Cause | Solution |
|-------|-------|----------|
| **Labor cost way too high** | Overestimated hours or wrong rates | Cross-check with similar past projects; verify rate card |
| **Forgot infrastructure costs** | Only calculated labor | Review Table 3 and include all applicable categories |
| **Contingency too low** | Underestimated project risk | Reassess risk level; use higher end of contingency range |
| **Budget gap ignored** | Didn't compare to client budget | Always complete Step 6; negotiate scope if gap is negative |
| **Profit margin unrealistic** | Pricing doesn't cover costs + margin | Recalculate using Cost-Plus method; verify all costs included |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-21 | Implementation Team | Initial worksheet created for SOP-MGT-001 Step 2 |

---

**Form ID**: FORM-BUDGET-ASSESSMENT-001-v1.0.0 | **Tier**: 4 - Operational Controls | **Status**: Active
