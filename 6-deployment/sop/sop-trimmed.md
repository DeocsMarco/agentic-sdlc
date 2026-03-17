# Deployment & Release

## Standard Operating Procedure

---

### Header

| Field | Value |
|-------|-------|
| **Document ID** | SOP-OPS-001-v3.0.0 |
| **Version** | 3.0.0 |
| **Effective Date** | 2026-03-02 |
| **Review Date** | 2027-03-02 |
| **Department** | Operations / DevOps |
| **Process Stage** | 6. Deployment |
| **Approved By** | [Pending] |

---

### 1. Objective

This procedure establishes the standard process for deploying software to production, including preparation, deployment execution, verification, rollback procedures, user training, and ongoing maintenance. It ensures smooth, reliable releases with minimal disruption to users.

---

### 2. Scope

**In Scope**:
- Deployment preparation and planning
- Production deployment execution
- Post-deployment verification and rollback
- User training, support handoff, and monitoring setup

**Out of Scope**:
- Testing (completed in Testing phase)
- Feature development (completed in Development phase)
- Major incident response (separate incident management SOP)

**Applies To**:
- All production deployments after Testing approval
- Hotfixes and patches
- Projects transitioning from Testing to Production

---

### 3. Prerequisites/Safety

The following must be in place before this process begins:

| Prerequisite | Source | Verification |
|--------------|--------|--------------|
| Testing Sign-off | SOP-QA-001 (Testing & QA) | QA sign-off form |
| UAT Approval | Testing Phase | Client sign-off |
| Production Environment | DevOps | Environment ready |
| Deployment Checklist | DevOps | Checklist complete |
| Rollback Plan | DevOps | Plan documented |
| Communication Plan | PM | Stakeholders notified |

---

### 4. Responsibilities (RACI)

| Activity | Responsible | Accountable | Consulted | Informed |
|----------|-------------|-------------|-----------|----------|
| Deployment Preparation | DevOps, Dev Team | Tech Lead | QA, PM | All stakeholders |
| Deploy to Production | DevOps | Tech Lead | Dev Team | PM, Client |
| Post-Deploy Verification & Rollback | QA, DevOps | QA Lead, Tech Lead | Dev Team | PM, Client |
| Training, Handoff & Monitoring | PM, Support, DevOps | PM, Tech Lead | Client, Dev Team | All stakeholders |

**Role Definitions**:
- **Responsible**: Does the work
- **Accountable**: Approves/owns the outcome
- **Consulted**: Provides input before decision
- **Informed**: Notified after decision

---

### 5. Materials/Resources Needed

| Material | Source | Format | Used In Step |
|----------|--------|--------|--------------|
| Testing Sign-off | Testing Phase | Document | Step 1 |
| Deployment Checklist | Templates | FORM-DEPLOY-001 | Step 1 |
| Release Notes | Dev Team | Document | Step 1, Step 4 |
| Rollback Plan | DevOps | Document | Step 1, Step 3 |
| Monitoring Tools | Tools | DataDog/etc. | Step 3, Step 4 |
| Training Materials | PM/Support | Documents/Videos | Step 4 |
| Support Documentation | Dev Team | Document | Step 4 |

---

### 6. Procedure

| Step | Title | Description | Responsible | Inputs | Outputs | Notes |
|------|-------|-------------|-------------|--------|---------|-------|
| 1 | Deployment Preparation | 1. Review and verify testing sign-off<br>2. Complete deployment checklist<br>3. Prepare release notes<br>4. Document rollback procedure<br>5. Schedule deployment window<br>6. Notify all stakeholders<br>7. Backup current production state<br>8. Verify production environment ready | DevOps, Dev Team | Testing Sign-off, Checklist | Deployment Plan, Backups | Schedule during low-traffic period |
| 2 | Deploy to Production | 1. Initiate deployment during approved window<br>2. Execute deployment scripts/pipeline<br>3. Run database migrations (if applicable)<br>4. Update configuration settings<br>5. Deploy application code<br>6. Update load balancers/DNS (if applicable)<br>7. Monitor deployment progress<br>8. Document any issues encountered | DevOps | Deployment Plan, Code Artifacts | Deployed Application | Use blue-green or canary deployment if possible |
| 3 | Post-Deployment Verification & Rollback | 1. Verify application is running and check system logs for errors<br>2. Execute smoke tests and verify critical user flows<br>3. Verify integrations are working and monitor performance metrics<br>4. Verify data integrity and document verification results<br>5. **If issues found**: Initiate rollback decision and notify stakeholders<br>6. **If rolling back**: Execute rollback procedure and restore database from backup if needed<br>7. **If rolling back**: Verify system is stable on previous version<br>8. **If rolling back**: Document rollback reason, conduct post-mortem, and plan re-deployment | QA, DevOps | Deployed Application, Rollback Plan, Backups | Verification Report (or Restored System, Incident Report) | Have rollback ready; prioritize stability over new features |
| **DP1** | **Decision: Deployment Successful?** | Is the deployment verified and stable? | QA Lead | Verification Report | Decision | **YES** → Step 4<br>**NO** → Execute rollback in Step 3, then plan remediation |
| 4 | Training, Handoff & Monitoring | 1. Schedule and conduct training sessions with end users on new features/changes<br>2. Provide user documentation and guides<br>3. Set up support channels and hand off to support team<br>4. Collect initial user feedback and address immediate questions<br>5. Configure production monitoring and set up alerts for critical metrics<br>6. Document monitoring dashboards and establish on-call rotation<br>7. Configure log aggregation and schedule regular health checks<br>8. Close deployment and complete project handoff | PM, Support, DevOps | Release Notes, Training Materials, Monitoring Tools | Trained Users, Support Ready, Monitoring Active, Maintenance Plan | Record training for future reference; ensure 24/7 coverage for critical systems |

---

### 7. Quality Standards

| Deliverable | Acceptance Criteria | Verification Method | Owner |
|-------------|---------------------|---------------------|-------|
| Deployment Plan | Complete, reviewed, approved | Team review | Tech Lead |
| Production Deployment | Successful, no critical errors | Smoke tests | DevOps |
| Verification Report | All checks passed, documented | QA review | QA Lead |
| Rollback (if needed) | System restored, stable | System check | Tech Lead |
| User Training | Users trained, documentation provided | Training completion | PM |
| Monitoring | Active, alerts configured | Dashboard review | DevOps |

---

### 8. References

**Related SOPs**:

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-QA-001 | Testing & QA | Upstream (prerequisite) |
| SOP-SUP-001 | Support & Maintenance | Downstream (ongoing) |

**Templates & Forms**:

| Document ID | Title | Purpose |
|-------------|-------|---------|
| FORM-DEPLOY-001 | Deployment Checklist | Pre-deployment verification |
| TMPL-RELEASE-001 | Release Notes Template | Document release contents |
| TMPL-ROLLBACK-001 | Rollback Plan Template | Rollback procedure documentation |
| TMPL-TRAINING-001 | Training Materials Template | User training guide |

**External References**:
- ISO 9001:2015 Clause 8.5 - Production and service provision
- ITIL Release Management
- DevOps best practices

---

### 9. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2025-12-02 | System Generated | Initial creation from process migration |
| 2.0.0 | 2025-12-13 | Manual Consolidation | Consolidated SOPs 6.1-6.7 into single comprehensive SOP |
| 3.0.0 | 2026-03-02 | Process Optimization | Trimmed from 6 to 4 steps: merged Post-Deployment Verification + Rollback (rollback as contingency within verification); merged User Training + Maintenance & Monitoring into single handoff step |

---

*Document ID: SOP-OPS-001-v3.0.0 | Generated: 2026-03-02*
