# Work Instruction: Rollback Procedures

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-OPS-004-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Operations / DevOps |
| **Parent SOP** | SOP-OPS-001 (Deployment & Release) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides detailed step-by-step guidance for rolling back a failed production deployment as defined in Step 4 of the Deployment & Release SOP (SOP-OPS-001). This is a **critical, high-risk activity** — speed and precision are essential. The primary goal is restoring system stability; root-cause analysis comes after the system is stable. **Stability over new features — always.**

---

## 2. Scope

**Applies To:**
- Any production deployment that fails post-deployment verification (DP1 = NO)
- Any production incident triggered by a deployment
- Emergency rollbacks initiated by on-call personnel

**Responsible Role:** DevOps

---

## 3. Prerequisites

Before initiating rollback, ensure you have:

☐ Rollback Plan (TMPL-ROLLBACK-001) prepared during WI-OPS-001
☐ Production backups verified (database + application state)
☐ Previous application version identified and artifacts available
☐ DevOps Lead present and authorized to execute rollback
☐ Communication channel open with all stakeholders
☐ Monitoring dashboards open

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Rollback Plan | WI-OPS-001 output | TMPL-ROLLBACK-001 |
| Production Backups | WI-OPS-001 output | Database dumps / snapshots |
| Previous Version Artifacts | CI/CD Registry | Docker images / packages |
| Verification Report (failed) | WI-OPS-003 output | Document |
| Deployment Log | WI-OPS-002 output | Document |

---

## 5. Procedure Steps

### Step 4.1: Evaluate Rollback Decision Criteria

**Action:** Confirm that rollback is the correct course of action based on objective criteria.

**How to Execute:**

1. **Review the rollback trigger that was hit:**

   | Trigger | Threshold | Current Value | Rollback? |
   |---------|-----------|---------------|-----------|
   | Error rate | > 5% sustained for 5 min | | |
   | P95 response time | > 2000ms sustained for 5 min | | |
   | Critical user flow broken | Any critical flow fails | | |
   | Database corruption | Any data loss detected | | |
   | P1 incidents | > 3 within 30 minutes | | |
   | Application crash loops | > 3 restarts in 10 minutes | | |
   | Security vulnerability | Critical CVE exposed | | |

2. **Decision matrix:**
   - **Immediate rollback (no discussion):**
     - Data corruption or loss
     - Application completely unresponsive
     - Security breach / vulnerability exposed
     - Payment processing broken
   - **Rollback after 5-minute assessment:**
     - Elevated error rates (> 5%)
     - Performance degradation (> 2x baseline)
     - Multiple P1 incidents
   - **Consider fix-forward (only if):**
     - Fix is already tested and ready (< 5 minute deploy)
     - Issue is isolated to non-critical feature
     - Risk of fix is lower than risk of rollback
     - Team unanimously agrees

3. **Get verbal confirmation from Tech Lead:** "Confirmed: initiating rollback"
4. Record decision time, trigger, and authorizer in incident log

**Expected Outcome:** Clear, documented rollback decision with trigger criteria and authorization.

**Quality Check:** ✅ Rollback trigger objectively met, ✅ Tech Lead authorized rollback, ✅ Decision time recorded.

---

### Step 4.2: Notify Stakeholders of Rollback

**Action:** Immediately communicate rollback initiation to all relevant parties.

**How to Execute:**

1. **Post rollback announcement (within 2 minutes of decision):**
   ```
   🔴 ROLLBACK INITIATED
   Version: v2.4.0 → v2.3.0
   Reason: [Error rate exceeded 5% / Critical flow broken / etc.]
   Started: 2026-02-19 03:45 UTC
   Estimated Duration: 15 minutes
   Lead: @devops-lead
   Status: IN PROGRESS

   Action Required:
   - Support team: Prepare for user inquiries
   - Dev team: Stand by for investigation
   - PM: Prepare stakeholder communication
   ```

2. **Notification channels:**
   - War room / Slack #incidents: Immediate
   - Support team: Immediate (they'll receive user reports)
   - PM / Leadership: Within 5 minutes
   - Status page: Update to "Degraded Performance" or "Maintenance"
   - External users: Only if experiencing visible impact

3. **Do NOT wait for perfect information** — notify with what you know now, update later

**Expected Outcome:** All stakeholders notified of rollback within 2 minutes of decision.

**Quality Check:** ✅ War room notified, ✅ Support team alerted, ✅ Status page updated, ✅ PM informed.

---

### Step 4.3: Execute Application Rollback

**Action:** Revert the application to the previous stable version.

**How to Execute:**

1. **Kubernetes rollback:**
   ```bash
   # Quick rollback to previous revision
   kubectl rollout undo deployment/app-name -n production

   # OR rollback to specific revision
   kubectl rollout history deployment/app-name -n production
   kubectl rollout undo deployment/app-name -n production --to-revision=42

   # Monitor rollback progress
   kubectl rollout status deployment/app-name -n production --timeout=300s

   # Verify previous version is running
   kubectl get pods -n production -l app=app-name \
     -o jsonpath='{.items[*].spec.containers[0].image}'
   # Expected: registry.example.com/app:v2.3.0
   ```

2. **Blue-green rollback:**
   ```bash
   # Switch traffic back to blue (previous stable)
   aws elbv2 modify-listener --listener-arn $LISTENER_ARN \
     --default-actions Type=forward,TargetGroupArn=$BLUE_TG_ARN

   # OR Kubernetes service selector
   kubectl patch service app-name -n production \
     -p '{"spec":{"selector":{"version":"v2.3.0"}}}'

   # Verify traffic is hitting blue
   curl -sI https://app.example.com | grep X-App-Version
   # Expected: X-App-Version: v2.3.0

   # Tear down green environment
   kubectl delete deployment app-green -n production
   ```

3. **Canary rollback:**
   ```bash
   # Remove canary — route 100% to stable
   kubectl apply -f - <<EOF
   apiVersion: networking.istio.io/v1beta1
   kind: VirtualService
   metadata:
     name: app-name
   spec:
     hosts: [app.example.com]
     http:
     - route:
       - destination:
           host: app-stable
         weight: 100
   EOF

   # Delete canary deployment
   kubectl delete deployment app-canary -n production
   ```

4. **Traditional server rollback:**
   ```bash
   # Symlink swap
   ln -sfn /opt/app/releases/v2.3.0 /opt/app/current
   sudo systemctl restart app-service

   # Verify
   curl -s localhost:8080/health
   ```

5. **Revert configuration changes:**
   ```bash
   # Restore previous ConfigMap
   kubectl apply -f k8s/production/configmap-v2.3.0.yaml -n production

   # Revert environment variables
   aws ssm put-parameter --name "/prod/app/NEW_FEATURE_FLAG" \
     --value "false" --type String --overwrite

   # Restart to pick up config
   kubectl rollout restart deployment/app-name -n production
   ```

6. **Clear caches:**
   ```bash
   # Redis cache flush (selective — only app-related keys)
   redis-cli -h $REDIS_HOST -n 0 KEYS "app:cache:*" | xargs redis-cli DEL

   # CDN invalidation
   aws cloudfront create-invalidation --distribution-id $DIST_ID --paths "/*"
   ```

**Expected Outcome:** Application reverted to previous version (v2.3.0), all instances running and healthy.

**Quality Check:** ✅ All pods running previous version, ✅ Health endpoint returns previous version, ✅ Configuration reverted.

---

### Step 4.4: Restore Database from Backup

**Action:** If database migrations were applied during the failed deployment, restore the database to its pre-deployment state.

**How to Execute:**

1. **Assess whether database restore is needed:**
   - If no migrations were run: **Skip this step**
   - If migrations were run but are backward-compatible: **May skip** (consult Dev Lead)
   - If migrations were destructive (dropped columns, changed data): **Restore required**

2. **Execute migration rollback (preferred if available):**
   ```bash
   # Django
   python manage.py migrate app_name 0042_previous_migration

   # Rails
   RAILS_ENV=production rails db:rollback STEP=3

   # Flyway (if undo migrations available)
   flyway undo

   # Verify migration state
   python manage.py showmigrations
   ```

3. **If migration rollback is unavailable — restore from backup:**
   ```bash
   # ⚠️ WARNING: This will overwrite current production data
   # Any data created AFTER the backup will be LOST

   # Step 1: Stop application to prevent new writes
   kubectl scale deployment/app-name --replicas=0 -n production

   # Step 2: Restore PostgreSQL
   pg_restore -h $PROD_DB_HOST -U $DB_USER -d $DB_NAME \
     --clean --if-exists backup_pre_deploy.dump

   # Step 3: Restore MySQL
   mysql -h $PROD_DB_HOST -u $DB_USER -p $DB_NAME < backup_pre_deploy.sql

   # Step 4: Verify restore
   psql -h $PROD_DB_HOST -U $DB_USER -d $DB_NAME \
     -c "SELECT COUNT(*) FROM users;"
   # Should match pre-deployment count

   # Step 5: Restart application
   kubectl scale deployment/app-name --replicas=5 -n production
   ```

4. **Data loss assessment:**
   - Calculate time between backup and restore
   - Identify what data was created/modified in that window
   - Document affected records for manual recovery if possible
   - Notify affected users if data was lost

5. **Verify database integrity after restore:**
   ```sql
   -- Run integrity checks
   SELECT COUNT(*) FROM users;
   SELECT COUNT(*) FROM orders WHERE created_at > '[backup_timestamp]';
   -- Check for constraint violations
   SELECT * FROM pg_stat_user_tables WHERE n_dead_tup > 10000;
   ```

**Expected Outcome:** Database restored to pre-deployment state with integrity verified.

**Quality Check:** ✅ Database schema matches pre-deployment, ✅ Row counts match backup, ✅ Data loss (if any) documented and communicated.

---

### Step 4.5: Verify System Stability on Previous Version

**Action:** Run the same verification checks from WI-OPS-003 to confirm the rolled-back system is stable.

**How to Execute:**

1. **Run abbreviated verification (same as WI-OPS-003 but focused):**

   | Check | Method | Result |
   |-------|--------|--------|
   | Health endpoint | `curl /health` | |
   | All pods healthy | `kubectl get pods` | |
   | Error rate | Monitoring dashboard | |
   | Response time | Monitoring dashboard | |
   | Critical user flow 1 | Manual test | |
   | Critical user flow 2 | Manual test | |
   | Database accessible | Query test | |
   | Integrations working | API test | |

2. **Monitor for 15 minutes minimum:**
   ```bash
   # Watch error rate
   watch -n 10 'kubectl logs -l app=app-name -n production --since=1m | grep -ci error'

   # Verify request flow
   kubectl logs -l app=app-name -n production -f --since=1m | tail -20
   ```

3. **Confirm metrics have returned to pre-deployment baseline:**
   - Error rate back to < 1%
   - Response times back to normal
   - No crash loops
   - All integrations functional

4. **Post stability confirmation:**
   ```
   ✅ ROLLBACK COMPLETE — System Stable
   Version: v2.3.0 (previous stable)
   Error rate: 0.3% (normal)
   Response time P95: 340ms (normal)
   All critical flows verified
   System is STABLE
   ```

**Expected Outcome:** Rolled-back system confirmed stable with all metrics at pre-deployment baseline.

**Quality Check:** ✅ All health checks pass, ✅ Metrics at baseline for 15+ minutes, ✅ Critical flows working.

---

### Step 4.6: Document Rollback Reasons and Actions

**Action:** Create a detailed incident report documenting what happened, why, and what was done.

**How to Execute:**

1. **Create Incident Report:**
   ```markdown
   # Incident Report — Failed Deployment v2.4.0

   **Date:** 2026-02-19
   **Severity:** P1 / P2
   **Duration:** [Deployment start] to [Rollback complete]
   **Impact:** [User-facing impact description]

   ## Timeline
   | Time (UTC) | Event |
   |------------|-------|
   | 03:00 | Deployment started |
   | 03:15 | Deployment completed |
   | 03:20 | Error rate spike detected (8%) |
   | 03:25 | Critical user flow (checkout) failing |
   | 03:27 | Rollback decision made |
   | 03:28 | Stakeholders notified |
   | 03:30 | Application rollback executed |
   | 03:35 | Database restore completed |
   | 03:40 | System stability confirmed |
   | 03:45 | Rollback complete, system operational |

   ## Root Cause (Preliminary)
   [What went wrong — initial assessment]

   ## Impact
   - Users affected: [number/percentage]
   - Duration of impact: [minutes]
   - Data loss: [none / details]
   - Revenue impact: [if applicable]

   ## Actions Taken
   1. [Action 1]
   2. [Action 2]

   ## Lessons Learned (Preliminary)
   - [Lesson 1]
   - [Lesson 2]
   ```

2. Save incident report in project documentation
3. Share with PM for stakeholder communication
4. Tag for post-mortem review (Step 4.7)

**Expected Outcome:** Comprehensive incident report documenting timeline, impact, and preliminary root cause.

**Quality Check:** ✅ Timeline complete and accurate, ✅ Impact quantified, ✅ Shared with stakeholders.

---

### Step 4.7: Conduct Post-Mortem Analysis

**Action:** Facilitate a blameless post-mortem to identify root cause and prevent recurrence.

**How to Execute:**

1. **Schedule post-mortem meeting within 48 hours:**
   - Attendees: DevOps, Dev Lead, QA Lead, PM
   - Duration: 60 minutes
   - Facilitator: Tech Lead or Engineering Manager

2. **Post-mortem structure (blameless):**

   **What happened?**
   - Factual timeline of events
   - What was the expected behavior?
   - What was the actual behavior?

   **Why did it happen? (5 Whys):**
   ```
   Why did checkout fail?
   → API endpoint returned 500 errors
   Why did the API return 500?
   → Database query failed on new column
   Why did the query fail?
   → Migration added column but didn't backfill existing rows
   Why wasn't this caught in staging?
   → Staging database had fewer rows, no null values
   Why wasn't staging data representative?
   → No process to sync production-like data to staging
   ```

   **What went well?**
   - Rollback executed quickly
   - Monitoring detected the issue
   - Communication was clear

   **What could be improved?**
   - Staging data should mirror production volume
   - Migration should include data backfill step
   - Add specific test for null handling

3. **Document action items with owners and deadlines:**

   | Action Item | Owner | Deadline | Priority |
   |-------------|-------|----------|----------|
   | Create staging data sync process | DevOps | 2026-03-05 | High |
   | Add null-handling tests to CI | Dev Lead | 2026-02-26 | High |
   | Update migration checklist | QA Lead | 2026-02-26 | Medium |

4. Share post-mortem document with the team
5. Track action items to completion

**Expected Outcome:** Blameless post-mortem completed with root cause identified and action items assigned.

**Quality Check:** ✅ Root cause identified (5 Whys completed), ✅ Action items assigned with deadlines, ✅ Post-mortem shared with team.

---

### Step 4.8: Plan Remediation and Re-Deployment

**Action:** Define the fix, testing plan, and re-deployment schedule.

**How to Execute:**

1. **Define the fix:**
   - What code/config/migration changes are needed?
   - Estimated development time
   - Who will implement the fix?

2. **Define the re-testing plan:**
   - What specific tests must pass before re-deployment?
   - Add regression test for the specific failure mode
   - Test with production-like data volume
   - Require extra QA sign-off for the failed area

3. **Schedule re-deployment:**
   - Do NOT rush — stability over speed
   - Allow minimum 24 hours between rollback and re-deployment attempt
   - Follow the full WI-OPS-001 → WI-OPS-002 → WI-OPS-003 cycle again
   - Consider a smaller release scope (remove risky changes, deploy incrementally)

4. **Update deployment process if needed:**
   - Add checks that would have caught this issue
   - Update deployment checklist (FORM-DEPLOY-001)
   - Update rollback plan with lessons learned

5. Communicate re-deployment plan to stakeholders

**Expected Outcome:** Remediation plan with fix, testing requirements, and re-deployment schedule documented.

**Quality Check:** ✅ Fix identified and assigned, ✅ Regression tests added, ✅ Re-deployment scheduled with full cycle, ✅ Stakeholders informed of timeline.

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Restored System | Production running on previous stable version | Live system |
| Incident Report | Detailed timeline and impact documentation | Document |
| Post-Mortem | Blameless analysis with root cause and action items | Document |
| Remediation Plan | Fix description, testing plan, re-deployment schedule | Document |

---

## 7. Success Criteria

✅ System rolled back and stable on previous version
✅ Database restored (if needed) with integrity verified
✅ All stakeholders notified of rollback and status
✅ Incident report completed with accurate timeline
✅ Post-mortem conducted within 48 hours
✅ Root cause identified with 5 Whys analysis
✅ Action items assigned with owners and deadlines
✅ Remediation and re-deployment plan documented
✅ Total rollback time < 30 minutes (from decision to stable)

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Incomplete rollback — app reverted but database not** | Always check if migrations ran; create a rollback decision tree: code only → database too → full restore |
| **Backup is corrupted or missing** | Verify backups BEFORE deployment (WI-OPS-001 Step 1.7); test restore in staging; store in redundant locations |
| **Rollback takes too long** | Practice rollbacks in staging regularly; keep rollback scripts up-to-date; automate rollback in CI/CD |
| **Data created during failed deployment is lost** | Document the window of data loss; extract from WAL/binlog if possible; communicate with affected users |
| **Blaming individuals in post-mortem** | Enforce blameless culture; focus on systems and processes, not people; use "the system allowed" not "person X caused" |
| **Rushing re-deployment without fixing root cause** | Mandatory 24-hour cool-down; require regression test for specific failure; full deployment cycle required |
| **Not updating the deployment process** | Every rollback should produce at least one process improvement; update checklist immediately |
| **Panic-driven decisions** | Follow the documented rollback plan step-by-step; the plan was written calmly — trust it |
| **Forgetting to revert configuration** | Include config rollback in the rollback plan; use IaC so config is versioned alongside code |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-OPS-001 | Deployment & Release | Parent procedure |
| WI-OPS-001 | Deployment Preparation | Rollback plan source |
| WI-OPS-002 | Production Deployment | Failed deployment reference |
| WI-OPS-003 | Post-Deployment Verification | Verification that triggered rollback |
| TMPL-ROLLBACK-001 | Rollback Plan Template | Rollback procedure template |

---

## 10. References

- Google SRE Handbook — Postmortem Culture: Learning from Failure
- ITIL Incident Management
- Etsy "Blameless Post-Mortems" methodology
- PagerDuty Incident Response documentation
- ISO 9001:2015 Clause 10.2 — Nonconformity and corrective action

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-OPS-001 Step 4 |

---

**Document ID:** WI-OPS-004-v1.0.0 | **Tier:** 3 - Work Instructions
