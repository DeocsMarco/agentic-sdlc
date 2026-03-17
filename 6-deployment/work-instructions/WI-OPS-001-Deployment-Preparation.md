# Work Instruction: Deployment Preparation

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-OPS-001-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Operations / DevOps |
| **Parent SOP** | SOP-OPS-001 (Deployment & Release) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for preparing a production deployment as defined in Step 1 of the Deployment & Release SOP (SOP-OPS-001). It ensures all prerequisites are verified, backups are taken, stakeholders are notified, and the deployment window is properly scheduled before any production changes occur.

---

## 2. Scope

**Applies To:**
- All production deployments following Testing phase approval
- Hotfix and patch deployments
- Major version releases and minor updates

**Responsible Roles:** DevOps, Dev Team

---

## 3. Prerequisites

Before starting deployment preparation, ensure you have:

☐ Testing phase completed with QA sign-off (SOP-QA-001)
☐ UAT approved by client/product owner
☐ Production environment provisioned and accessible
☐ Deployment Checklist template (FORM-DEPLOY-001) available
☐ Release Notes template (TMPL-RELEASE-001) available
☐ Rollback Plan template (TMPL-ROLLBACK-001) available
☐ Access credentials for production environment confirmed
☐ CI/CD pipeline tested in staging environment

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Testing Sign-off | QA Lead / Testing Phase | Signed document |
| UAT Approval | Client / Product Owner | Sign-off form |
| Deployment Checklist | Templates | FORM-DEPLOY-001 |
| Build Artifacts | CI/CD Pipeline | Docker images / packages |
| Environment Configuration | DevOps | Config files / env vars |
| Change Log | Dev Team | Git log / CHANGELOG.md |

---

## 5. Procedure Steps

### Step 1.1: Verify Testing Sign-Off

**Action:** Confirm that all testing gates have been passed and formally signed off.

**How to Execute:**

1. Retrieve the QA sign-off document from the Testing phase output
2. Verify the following are complete:
   - Unit test pass rate ≥ 95%
   - Integration tests passing
   - UAT scenarios completed and approved
   - Performance test results within acceptable thresholds
   - Security scan completed with no critical/high vulnerabilities
3. Confirm sign-off signatures from QA Lead and Product Owner
4. If any test category is incomplete or failed, **STOP** — do not proceed until resolved
5. File the sign-off document in the project's deployment folder

**Expected Outcome:** Verified, signed testing approval with all test gates passed.

**Quality Check:** ✅ Sign-off document has all required signatures and no open critical defects remain.

---

### Step 1.2: Complete Deployment Checklist

**Action:** Fill out FORM-DEPLOY-001 to systematically verify deployment readiness.

**How to Execute:**

1. Open FORM-DEPLOY-001 (Deployment Checklist)
2. Work through each section:

   **Code Readiness:**
   - [ ] Feature branch merged to release branch
   - [ ] Code review completed for all changes
   - [ ] Build artifacts generated and versioned (e.g., `v2.4.0-rc1`)
   - [ ] Artifact stored in registry (Docker Hub, Artifactory, S3)

   **Database Changes:**
   - [ ] Migration scripts tested in staging
   - [ ] Migration rollback scripts prepared and tested
   - [ ] Data seed/transformation scripts reviewed
   - [ ] No destructive schema changes without backup plan

   **Configuration:**
   - [ ] Environment variables documented and set
   - [ ] Feature flags configured for gradual rollout
   - [ ] Third-party API keys/secrets rotated if needed
   - [ ] SSL certificates valid (expiry > 30 days)

   **Infrastructure:**
   - [ ] Server capacity adequate for deployment
   - [ ] Disk space sufficient (>20% free)
   - [ ] Load balancer health checks configured
   - [ ] DNS TTL lowered (if DNS changes planned)

3. Flag any unchecked items and assign owners for resolution
4. Do not proceed to deployment until all items are checked

**Expected Outcome:** Fully completed deployment checklist with zero open items.

**Quality Check:** ✅ Every checklist item marked complete or explicitly waived with documented justification.

---

### Step 1.3: Prepare Release Notes

**Action:** Create release notes documenting all changes in this deployment using TMPL-RELEASE-001.

**How to Execute:**

1. Open TMPL-RELEASE-001 (Release Notes Template)
2. Populate the following sections:

   ```markdown
   # Release Notes — v[X.Y.Z]
   **Release Date:** [Scheduled Date]
   **Environment:** Production

   ## New Features
   - [TICKET-123] Feature description — brief user-facing summary

   ## Bug Fixes
   - [TICKET-456] Fix description — what was broken and how it's fixed

   ## Improvements
   - [TICKET-789] Performance/UX improvement description

   ## Breaking Changes
   - List any API changes, removed features, or behavioral differences

   ## Known Issues
   - Any accepted issues shipping with this release

   ## Dependencies Updated
   - Library/package version changes
   ```

3. Pull change descriptions from Git log, JIRA/Linear tickets, and PR descriptions
4. Write in user-friendly language (non-technical stakeholders will read this)
5. Have the Dev Lead review for accuracy and completeness
6. Share draft with PM for stakeholder communication

**Expected Outcome:** Complete release notes ready for distribution to stakeholders and support team.

**Quality Check:** ✅ Every merged PR/ticket is represented, ✅ Breaking changes clearly highlighted, ✅ Reviewed by Dev Lead.

---

### Step 1.4: Document Rollback Procedure

**Action:** Create a rollback plan using TMPL-ROLLBACK-001 specific to this deployment.

**How to Execute:**

1. Open TMPL-ROLLBACK-001 (Rollback Plan Template)
2. Document the following:

   **Rollback Triggers** (when to initiate):
   - Error rate exceeds 5% (baseline: <1%)
   - API response time exceeds 2000ms (baseline: <500ms)
   - Critical user flow broken (login, checkout, data submission)
   - Database corruption detected
   - More than 3 P1 incidents within 30 minutes

   **Rollback Steps:**
   ```bash
   # 1. Switch traffic to previous version
   kubectl rollout undo deployment/app-name -n production
   # OR for blue-green:
   aws elbv2 modify-listener --listener-arn $ARN --default-actions TargetGroupArn=$BLUE_TG

   # 2. Restore database (if migrations ran)
   pg_restore -h $DB_HOST -U $DB_USER -d $DB_NAME backup_pre_deploy.sql

   # 3. Verify rollback
   curl -s https://app.example.com/health | jq .status

   # 4. Clear CDN/cache
   aws cloudfront create-invalidation --distribution-id $DIST_ID --paths "/*"
   ```

   **Rollback Owner:** DevOps Lead
   **Estimated Rollback Time:** [X minutes]
   **Communication Plan:** Who to notify during rollback

3. Test rollback procedure in staging environment
4. Confirm database backup restore time is within acceptable window
5. Get Tech Lead approval on rollback plan

**Expected Outcome:** Tested, approved rollback plan ready for immediate execution if needed.

**Quality Check:** ✅ Rollback tested in staging, ✅ Restore time documented, ✅ Approved by Tech Lead.

---

### Step 1.5: Schedule Deployment Window

**Action:** Select and schedule the deployment during a low-traffic period.

**How to Execute:**

1. Analyze traffic patterns to identify low-traffic windows:
   - Review analytics (Google Analytics, CloudWatch) for weekly/daily patterns
   - Common low-traffic windows: weekday early morning (2:00–6:00 AM), weekends
   - Avoid: month-end, pay periods, marketing campaign launches, holidays
2. Estimate deployment duration:
   - Code deployment: X minutes
   - Database migration: X minutes
   - Verification: X minutes
   - Buffer (add 50%): X minutes
   - **Total window needed:** X minutes
3. Check team availability for the chosen window (DevOps, QA, Dev on-call)
4. Create calendar invite for all deployment participants:
   - Include deployment runbook link
   - Include war room / communication channel details
   - Include rollback plan link
5. Get final approval from Tech Lead and PM for the window

**Expected Outcome:** Confirmed deployment window with all participants available and calendar blocked.

**Quality Check:** ✅ Window is during verified low-traffic period, ✅ All required team members confirmed availability.

---

### Step 1.6: Notify Stakeholders

**Action:** Send deployment notification to all stakeholders.

**How to Execute:**

1. Prepare notification using the communication plan:

   **Internal Notification (48 hours before):**
   - Recipients: Dev team, QA, Support, PM, Leadership
   - Content: Date/time, expected duration, changes summary, impact
   - Channel: Email + Slack #deployments channel

   **External Notification (24 hours before, if user-facing downtime):**
   - Recipients: Clients, end users (via in-app banner or status page)
   - Content: Maintenance window, expected duration, workarounds
   - Channel: Status page (e.g., Statuspage.io), email, in-app notification

2. Include in all notifications:
   - Deployment date and time (with timezone)
   - Expected duration
   - Summary of changes (link to release notes)
   - Expected impact (downtime? degraded performance?)
   - Contact person for questions
3. Confirm receipt from key stakeholders (PM, Support Lead)

**Expected Outcome:** All stakeholders notified and aware of upcoming deployment.

**Quality Check:** ✅ Internal notification sent ≥48h before, ✅ External notification sent ≥24h before (if applicable), ✅ Key stakeholders acknowledged.

---

### Step 1.7: Create Production Backup

**Action:** Take a full backup of the current production state before any changes.

**How to Execute:**

1. **Database Backup:**
   ```bash
   # PostgreSQL
   pg_dump -h $PROD_DB_HOST -U $DB_USER -Fc $DB_NAME > backup_$(date +%Y%m%d_%H%M%S).dump

   # MySQL
   mysqldump -h $PROD_DB_HOST -u $DB_USER -p $DB_NAME > backup_$(date +%Y%m%d_%H%M%S).sql

   # Verify backup integrity
   pg_restore --list backup_*.dump | head -20
   ```

2. **Application State Backup:**
   - Tag the current running container image / artifact version
   - Snapshot current configuration files
   - Export feature flag states
   - Back up uploaded files / user-generated content (if stored locally)

3. **Infrastructure Snapshot (if applicable):**
   ```bash
   # AWS EC2 snapshot
   aws ec2 create-snapshot --volume-id $VOL_ID --description "Pre-deploy $(date)"

   # Kubernetes — record current state
   kubectl get deployment app-name -n production -o yaml > deployment_backup.yaml
   ```

4. **Verify Backups:**
   - Confirm backup file size is reasonable (not 0 bytes, not truncated)
   - Test restore in a non-production environment if time permits
   - Store backups in a separate location (different region/account)
   - Document backup locations and restore commands

5. Record backup completion time and file locations

**Expected Outcome:** Verified, complete backups of database, application state, and configuration stored securely.

**Quality Check:** ✅ Backup file sizes verified (non-zero, expected range), ✅ Backup stored in separate location, ✅ Restore commands documented.

---

### Step 1.8: Verify Environment Readiness

**Action:** Final verification that the production environment is ready to receive the deployment.

**How to Execute:**

1. **Infrastructure Checks:**
   - [ ] Server/container health: all nodes healthy
   - [ ] Disk space: >20% free on all nodes
   - [ ] CPU/Memory: within normal baseline (no existing resource pressure)
   - [ ] Network connectivity: application can reach database, cache, external APIs

2. **Service Dependencies:**
   - [ ] Database accessible and responding
   - [ ] Cache (Redis/Memcached) healthy
   - [ ] Message queue (RabbitMQ/Kafka) operational
   - [ ] External APIs reachable (payment gateway, email service, etc.)

3. **CI/CD Pipeline:**
   - [ ] Pipeline tested with staging deployment
   - [ ] Deployment scripts executable with production credentials
   - [ ] Artifact accessible from production servers

4. **Monitoring:**
   - [ ] Monitoring dashboards loaded and displaying current metrics
   - [ ] Alerts configured and tested (Slack/PagerDuty)
   - [ ] Log aggregation receiving production logs

5. Run final staging deployment as a dress rehearsal if this is a major release

**Expected Outcome:** Production environment verified healthy and ready for deployment.

**Quality Check:** ✅ All infrastructure checks passed, ✅ All service dependencies responding, ✅ Pipeline verified.

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Deployment Plan | Complete plan including window, team, rollback | Document |
| Completed Checklist | FORM-DEPLOY-001 fully completed | Form |
| Release Notes | User-facing change documentation | TMPL-RELEASE-001 |
| Rollback Plan | Tested rollback procedure | TMPL-ROLLBACK-001 |
| Production Backups | Database and application state backups | Dump files / snapshots |
| Stakeholder Notifications | Sent deployment notifications | Email / Slack records |

---

## 7. Success Criteria

✅ Testing sign-off verified with all signatures
✅ Deployment checklist 100% complete
✅ Release notes reviewed and distributed
✅ Rollback plan tested in staging and approved
✅ Deployment window scheduled during low-traffic period
✅ All stakeholders notified within required timeframes
✅ Production backups created and verified
✅ Environment readiness confirmed
✅ All deployment participants confirmed availability

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Forgot to backup before deploying** | Make backup step a hard gate in CI/CD pipeline — deployment cannot start without backup confirmation |
| **Config drift between staging and production** | Use infrastructure-as-code (Terraform, Pulumi); diff staging vs. prod configs before every deployment |
| **Deployment window too short** | Always add 50% buffer; include rollback time in the window estimate |
| **Stakeholders not notified** | Automate notifications via CI/CD pipeline hooks; use a distribution list, not individual emails |
| **SSL certificate expiring during deployment** | Add certificate expiry check to checklist; set up automated renewal (Let's Encrypt / ACM) |
| **Database migration not tested** | Mandatory: run migration against a staging copy of production data before every deployment |
| **Missing environment variables in production** | Diff `.env.staging` vs. `.env.production`; use a secrets manager (Vault, AWS Secrets Manager) |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-OPS-001 | Deployment & Release | Parent procedure |
| SOP-QA-001 | Testing & QA | Upstream (prerequisite) |
| FORM-DEPLOY-001 | Deployment Checklist | Checklist template |
| TMPL-RELEASE-001 | Release Notes Template | Output template |
| TMPL-ROLLBACK-001 | Rollback Plan Template | Output template |
| WI-OPS-002 | Production Deployment | Next work instruction |

---

## 10. References

- ITIL Release and Deployment Management
- ISO 9001:2015 Clause 8.5 — Production and service provision
- The Phoenix Project — DevOps deployment practices
- Google SRE Handbook — Release Engineering

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-OPS-001 Step 1 |

---

**Document ID:** WI-OPS-001-v1.0.0 | **Tier:** 3 - Work Instructions
