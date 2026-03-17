# Work Instruction: Production Deployment

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-OPS-002-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Operations / DevOps |
| **Parent SOP** | SOP-OPS-001 (Deployment & Release) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides detailed step-by-step guidance for executing a production deployment as defined in Step 2 of the Deployment & Release SOP (SOP-OPS-001). This is a **high-risk activity** — every step must be followed precisely. Rushing or skipping steps can cause downtime, data loss, or service degradation.

---

## 2. Scope

**Applies To:**
- All production deployments during approved deployment windows
- Blue-green, canary, and rolling update deployments
- Database migrations executed alongside code deployments
- Configuration and infrastructure changes during deployment

**Responsible Role:** DevOps

---

## 3. Prerequisites

Before starting production deployment, ensure you have:

☐ WI-OPS-001 (Deployment Preparation) fully completed
☐ Deployment Plan approved by Tech Lead
☐ Rollback plan tested and approved (TMPL-ROLLBACK-001)
☐ Production backups verified (database + application state)
☐ Deployment window active (within scheduled time)
☐ War room / communication channel open with all participants
☐ Monitoring dashboards open and showing baseline metrics
☐ On-call personnel confirmed available

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Deployment Plan | WI-OPS-001 output | Document |
| Build Artifacts | CI/CD Pipeline | Docker images / packages |
| Migration Scripts | Dev Team | SQL / ORM migrations |
| Configuration Changes | DevOps | Env vars / config files |
| Rollback Plan | WI-OPS-001 output | TMPL-ROLLBACK-001 |

---

## 5. Procedure Steps

### Step 2.1: Initiate Deployment in Approved Window

**Action:** Confirm the deployment window is active and announce deployment start.

**How to Execute:**

1. Verify current time is within the approved deployment window
2. Confirm all deployment participants are present in the war room:
   - DevOps Lead (deployer)
   - Dev Team representative (code knowledge)
   - QA representative (verification)
   - On-call support (escalation)
3. Post deployment start announcement:
   ```
   🚀 DEPLOYMENT STARTING
   Version: v2.4.0
   Environment: Production
   Started: 2026-02-19 03:00 UTC
   Expected Duration: 45 minutes
   Deployer: @devops-lead
   Rollback Owner: @devops-lead
   Status: IN PROGRESS
   ```
4. Set status page to "Maintenance" if applicable
5. Record deployment start time in the deployment log
6. Confirm one final time: **"Backups verified? Rollback plan ready? Go/No-Go?"**
   - All participants must confirm "Go"
   - Any "No-Go" halts deployment immediately

**Expected Outcome:** Deployment formally initiated with all participants confirmed and communication channels active.

**Quality Check:** ✅ Deployment started within approved window, ✅ All participants present, ✅ Go/No-Go confirmed by all.

---

### Step 2.2: Execute Deployment Scripts / CI-CD Pipeline

**Action:** Run the deployment pipeline to push new code artifacts to production.

**How to Execute:**

1. **For CI/CD Pipeline Deployments:**
   ```bash
   # Trigger production deployment pipeline
   # GitHub Actions example:
   gh workflow run deploy-production.yml \
     --ref release/v2.4.0 \
     -f environment=production \
     -f version=v2.4.0

   # GitLab CI example:
   gitlab-ci trigger --project $PROJECT_ID \
     --ref release/v2.4.0 \
     --variable ENVIRONMENT=production
   ```

2. **For Kubernetes Deployments:**
   ```bash
   # Update image tag in deployment
   kubectl set image deployment/app-name \
     app=registry.example.com/app:v2.4.0 \
     -n production

   # OR apply updated manifests
   kubectl apply -f k8s/production/ -n production

   # Watch rollout progress
   kubectl rollout status deployment/app-name -n production --timeout=300s
   ```

3. **For Blue-Green Deployment:**
   ```bash
   # Deploy to green (inactive) environment
   kubectl apply -f k8s/green/ -n production

   # Wait for green pods to be ready
   kubectl wait --for=condition=ready pod -l env=green -n production --timeout=300s

   # Verify green environment health
   curl -s https://green.internal.example.com/health

   # DO NOT switch traffic yet — wait for Step 2.3 (database) and Step 2.4 (config)
   ```

4. **For Canary Deployment:**
   ```bash
   # Deploy canary (5-10% traffic)
   kubectl apply -f k8s/canary/ -n production

   # Configure traffic split (e.g., Istio)
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
         weight: 90
       - destination:
           host: app-canary
         weight: 10
   EOF

   # Monitor canary for 10-15 minutes before proceeding
   ```

5. Monitor pipeline execution in real-time
6. Document any warnings or non-critical errors encountered

**Expected Outcome:** New application version deployed (or staged in green/canary) with pipeline completing successfully.

**Quality Check:** ✅ Pipeline completed without errors, ✅ New version artifacts confirmed on target servers, ✅ No unexpected warnings.

---

### Step 2.3: Execute Database Migrations

**Action:** Run database migration scripts if this deployment includes schema or data changes.

**How to Execute:**

1. **Pre-migration safety checks:**
   ```bash
   # Verify backup exists and is recent (< 1 hour old)
   ls -la backup_*.dump
   # Check: file size > 0, timestamp within deployment window

   # Check current migration state
   # Django:
   python manage.py showmigrations --plan | grep "\[ \]"
   # Rails:
   rails db:migrate:status | grep "down"
   # Flyway:
   flyway info
   ```

2. **Execute migrations:**
   ```bash
   # Put application in maintenance mode (if destructive migration)
   kubectl scale deployment/app-name --replicas=0 -n production
   # OR use maintenance mode flag
   curl -X POST https://admin.example.com/maintenance/enable

   # Run migrations
   # Django:
   python manage.py migrate --no-input 2>&1 | tee migration_log.txt
   # Rails:
   RAILS_ENV=production rails db:migrate 2>&1 | tee migration_log.txt
   # Raw SQL:
   psql -h $DB_HOST -U $DB_USER -d $DB_NAME -f migrations/v2.4.0.sql 2>&1 | tee migration_log.txt
   # Flyway:
   flyway -url=$DB_URL -user=$DB_USER migrate 2>&1 | tee migration_log.txt
   ```

3. **Verify migration success:**
   ```bash
   # Check migration status
   python manage.py showmigrations --plan | tail -5
   # All should show [X] (applied)

   # Verify schema changes
   psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c "\dt"  # list tables
   psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c "\d new_table_name"  # verify new table structure

   # Verify data integrity
   psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c "SELECT COUNT(*) FROM critical_table;"
   # Compare with pre-migration count
   ```

4. **If migration fails:**
   - Do NOT proceed with deployment
   - Execute rollback migration immediately:
     ```bash
     python manage.py migrate app_name previous_migration_name
     ```
   - If rollback migration fails, restore from backup (see WI-OPS-004)
   - Notify all participants: "Migration failed — initiating rollback"

5. Save migration log for post-deployment review

**Expected Outcome:** All database migrations applied successfully with schema and data verified.

**Quality Check:** ✅ All migrations show as applied, ✅ Data row counts match expectations, ✅ No errors in migration log.

---

### Step 2.4: Apply Configuration Updates

**Action:** Update environment variables, feature flags, and configuration settings.

**How to Execute:**

1. **Update environment variables:**
   ```bash
   # Kubernetes ConfigMap/Secret
   kubectl apply -f k8s/production/configmap.yaml -n production
   kubectl apply -f k8s/production/secrets.yaml -n production

   # AWS Parameter Store
   aws ssm put-parameter --name "/prod/app/NEW_FEATURE_FLAG" \
     --value "true" --type String --overwrite

   # Verify variables are set
   kubectl exec -it deploy/app-name -n production -- env | grep NEW_FEATURE
   ```

2. **Update feature flags:**
   - Log into feature flag service (LaunchDarkly, Unleash, etc.)
   - Verify flags are set to intended state for production
   - Keep new features disabled until post-deployment verification passes
   - Document flag states:
     ```
     FEATURE_NEW_DASHBOARD: OFF (enable after verification)
     FEATURE_NEW_API_V2: ON (backward compatible)
     FEATURE_LEGACY_REMOVAL: OFF (enable in 1 week)
     ```

3. **Update third-party service configurations:**
   - Webhook URLs updated to new endpoints (if changed)
   - API rate limits adjusted (if needed)
   - CORS origins updated (if new domains)

4. **Restart application to pick up configuration:**
   ```bash
   # Rolling restart (zero-downtime)
   kubectl rollout restart deployment/app-name -n production
   kubectl rollout status deployment/app-name -n production
   ```

**Expected Outcome:** All configuration changes applied and verified in production environment.

**Quality Check:** ✅ Environment variables confirmed set, ✅ Feature flags in correct state, ✅ Application restarted and healthy after config change.

---

### Step 2.5: Deploy Application Code

**Action:** Complete the code deployment and ensure all instances are running the new version.

**How to Execute:**

1. **Verify deployment rollout is complete:**
   ```bash
   # Kubernetes
   kubectl rollout status deployment/app-name -n production
   # Expected: "deployment "app-name" successfully rolled out"

   # Check all pods are running new version
   kubectl get pods -n production -l app=app-name \
     -o jsonpath='{.items[*].spec.containers[0].image}'
   # All should show: registry.example.com/app:v2.4.0

   # Verify pod health
   kubectl get pods -n production -l app=app-name
   # All should show STATUS: Running, READY: 1/1
   ```

2. **For blue-green: verify green environment before switching:**
   ```bash
   # Run health checks against green
   curl -s https://green.internal.example.com/health
   # Expected: {"status": "healthy", "version": "v2.4.0"}

   # Run quick smoke test against green
   curl -s https://green.internal.example.com/api/ping
   ```

3. **Verify version endpoint:**
   ```bash
   curl -s https://app.example.com/api/version
   # Expected: {"version": "v2.4.0", "build": "abc123", "deployed": "2026-02-19T03:15:00Z"}
   ```

4. **Check application logs for startup errors:**
   ```bash
   kubectl logs -l app=app-name -n production --since=5m | grep -i error
   # Expected: no critical errors
   ```

5. Confirm all replicas are healthy and serving traffic

**Expected Outcome:** All application instances running new version, healthy, and serving requests.

**Quality Check:** ✅ All pods/instances running correct version, ✅ No startup errors in logs, ✅ Health endpoints returning healthy.

---

### Step 2.6: Update Load Balancer / DNS

**Action:** Route production traffic to the newly deployed version.

**How to Execute:**

1. **For blue-green — switch traffic to green:**
   ```bash
   # AWS ALB — update target group
   aws elbv2 modify-listener --listener-arn $LISTENER_ARN \
     --default-actions Type=forward,TargetGroupArn=$GREEN_TG_ARN

   # Kubernetes Service — update selector
   kubectl patch service app-name -n production \
     -p '{"spec":{"selector":{"version":"v2.4.0"}}}'

   # Nginx — update upstream
   # Update nginx.conf, then:
   nginx -t && nginx -s reload
   ```

2. **For canary — gradually increase traffic:**
   ```
   Step 1: 10% canary (monitor 10 min)
   Step 2: 25% canary (monitor 10 min)
   Step 3: 50% canary (monitor 10 min)
   Step 4: 100% — promote canary to stable
   ```

3. **For DNS changes:**
   ```bash
   # Update DNS record
   aws route53 change-resource-record-sets \
     --hosted-zone-id $ZONE_ID \
     --change-batch file://dns-change.json

   # Check DNS propagation
   dig app.example.com +short
   # May take 60-300 seconds depending on TTL
   ```

4. **Verify traffic is reaching new version:**
   ```bash
   # Check access logs for new version
   kubectl logs -l app=app-name -n production --since=1m | tail -5

   # Verify response headers (if version header is set)
   curl -sI https://app.example.com | grep X-App-Version
   # Expected: X-App-Version: v2.4.0
   ```

5. Monitor error rates immediately after traffic switch (next 5 minutes are critical)

**Expected Outcome:** Production traffic routed to new version with no errors during switchover.

**Quality Check:** ✅ Traffic confirmed hitting new version, ✅ Error rate stable (not spiking), ✅ Response times within baseline.

---

### Step 2.7: Monitor Deployment Progress

**Action:** Actively monitor system health for the first 15–30 minutes after deployment.

**How to Execute:**

1. **Watch key metrics on monitoring dashboard:**
   - **Error rate:** Should remain < 1% (if spikes > 5%, trigger rollback)
   - **Response time (p95):** Should remain < 500ms (if > 2000ms, trigger rollback)
   - **Request throughput:** Should match pre-deployment baseline (± 10%)
   - **CPU / Memory:** Should remain within normal range
   - **Database connections:** No connection pool exhaustion
   - **Queue depth:** No unexpected message backlog

2. **Watch application logs:**
   ```bash
   # Stream production logs
   kubectl logs -f -l app=app-name -n production --since=1m | grep -i "error\|warn\|fatal"
   ```

3. **Monitor external dependencies:**
   - Payment gateway transactions completing
   - Email/notification delivery working
   - Third-party API integrations responding

4. **Check for user-reported issues:**
   - Monitor support channels (Slack, email, help desk)
   - Check social media / status page for reports

5. **Decision points during monitoring:**
   - **0–5 min:** Watch for immediate crashes, startup errors → instant rollback if critical
   - **5–15 min:** Watch for elevated error rates, slow responses → rollback if sustained
   - **15–30 min:** Confirm stability under normal load → proceed to verification (WI-OPS-003)

6. Post monitoring status update:
   ```
   ✅ DEPLOYMENT STATUS UPDATE (T+15 min)
   Error rate: 0.3% (normal)
   P95 response time: 320ms (normal)
   All pods healthy: 5/5
   No critical errors in logs
   Status: STABLE — proceeding to verification
   ```

**Expected Outcome:** System confirmed stable for 15–30 minutes post-deployment with all metrics within acceptable range.

**Quality Check:** ✅ Error rate < 1% for sustained 15 minutes, ✅ Response times within baseline, ✅ No critical log entries.

---

### Step 2.8: Document Issues Encountered

**Action:** Record any issues, deviations, or observations during the deployment process.

**How to Execute:**

1. Throughout the deployment, maintain a real-time log:
   ```markdown
   ## Deployment Log — v2.4.0 — 2026-02-19

   | Time (UTC) | Event | Severity | Action Taken |
   |------------|-------|----------|--------------|
   | 03:00 | Deployment started | Info | — |
   | 03:05 | Pipeline triggered | Info | — |
   | 03:12 | Migration warning: slow query on users table | Warning | Monitored, completed in 45s |
   | 03:15 | All pods healthy | Info | — |
   | 03:16 | Traffic switched to new version | Info | — |
   | 03:20 | Brief error spike (2.1%) — resolved in 30s | Warning | Cache warming |
   | 03:30 | Stable for 15 min — proceeding to verification | Info | — |
   ```

2. Categorize issues:
   - **Critical:** Requires rollback or immediate action
   - **Warning:** Non-blocking but needs follow-up
   - **Info:** Observations for future improvement

3. For each issue, document:
   - What happened
   - Root cause (if known)
   - Action taken
   - Follow-up needed

4. Save deployment log alongside release notes for future reference
5. Flag items for the post-deployment retrospective

**Expected Outcome:** Complete deployment log documenting all events, issues, and actions during the deployment.

**Quality Check:** ✅ All events timestamped, ✅ Issues categorized by severity, ✅ Action items identified for follow-up.

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Deployed Application | New version running in production | Live system |
| Deployment Log | Timestamped record of all deployment events | Document |
| Traffic Confirmation | Evidence that traffic is reaching new version | Logs / metrics |
| Monitoring Baseline | Post-deployment metrics snapshot | Dashboard screenshot |

---

## 7. Success Criteria

✅ Application deployed within approved window
✅ All instances running correct version
✅ Database migrations applied successfully
✅ Configuration updates verified
✅ Traffic routed to new version
✅ Error rate stable (< 1%) for 15+ minutes
✅ Response times within baseline
✅ No critical errors in application logs
✅ Deployment log completed

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Deploying outside the approved window** | Hard stop — reschedule. Never deploy "just real quick" outside the window |
| **DNS propagation delays** | Lower TTL to 60s at least 24 hours before deployment; verify propagation with `dig` from multiple locations |
| **Database migration locks tables** | Use online schema migration tools (gh-ost, pt-online-schema-change); test migration time on production-size dataset |
| **Config drift between staging and prod** | Diff all config files/env vars before deployment; use identical IaC for both environments |
| **Pod crash loops after deployment** | Check resource limits (OOMKilled?), missing env vars, failing health checks; rollback if not resolved in 5 min |
| **Partial deployment (some pods old, some new)** | Kubernetes rolling update handles this, but verify all pods show new version; use `kubectl rollout status` |
| **Cache serving stale content** | Invalidate CDN/application cache after deployment; warm cache proactively |
| **Canary not getting enough traffic to evaluate** | Ensure canary weight is sufficient (≥5%); extend monitoring window if traffic is low |
| **War room participants unavailable** | Do not start deployment without all required roles present; postpone if anyone drops |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-OPS-001 | Deployment & Release | Parent procedure |
| WI-OPS-001 | Deployment Preparation | Previous step |
| WI-OPS-003 | Post-Deployment Verification | Next step |
| WI-OPS-004 | Rollback Procedures | If deployment fails |
| TMPL-ROLLBACK-001 | Rollback Plan Template | Rollback reference |

---

## 10. References

- Kubernetes Deployment Strategies documentation
- AWS Blue-Green Deployment Best Practices
- ITIL Release and Deployment Management
- Google SRE Handbook — Release Engineering
- Martin Fowler — Blue Green Deployment pattern

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-OPS-001 Step 2 |

---

**Document ID:** WI-OPS-002-v1.0.0 | **Tier:** 3 - Work Instructions
