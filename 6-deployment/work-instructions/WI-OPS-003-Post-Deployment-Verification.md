# Work Instruction: Post-Deployment Verification

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-OPS-003-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Operations / DevOps |
| **Parent SOP** | SOP-OPS-001 (Deployment & Release) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for verifying a production deployment as defined in Step 3 of the Deployment & Release SOP (SOP-OPS-001). It ensures the deployed application is functioning correctly before declaring the deployment successful. This step includes **Decision Point 1 (DP1):** Deployment Successful? YES → WI-OPS-005, NO → WI-OPS-004.

---

## 2. Scope

**Applies To:**
- All production deployments immediately after code deployment (WI-OPS-002)
- Verification of application health, functionality, performance, and data integrity

**Responsible Roles:** QA, DevOps

---

## 3. Prerequisites

Before starting post-deployment verification, ensure you have:

☐ WI-OPS-002 (Production Deployment) completed successfully
☐ Application confirmed running on new version
☐ Monitoring dashboards open and showing live metrics
☐ Smoke test scripts / checklist prepared
☐ Rollback plan ready for immediate execution (WI-OPS-004)
☐ QA representative present in war room

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Deployed Application | WI-OPS-002 output | Live system |
| Smoke Test Checklist | QA Team | Test scripts / manual checklist |
| Baseline Metrics | Pre-deployment monitoring | Dashboard / metrics |
| Release Notes | WI-OPS-001 output | TMPL-RELEASE-001 |
| Critical User Flows | Requirements / QA | Test scenarios |

---

## 5. Procedure Steps

### Step 3.1: Application Health Check

**Action:** Verify the application is running and responding to requests.

**How to Execute:**

1. **Check health endpoint:**
   ```bash
   curl -s https://app.example.com/health | jq .
   # Expected:
   # {
   #   "status": "healthy",
   #   "version": "v2.4.0",
   #   "database": "connected",
   #   "cache": "connected",
   #   "uptime": "5m"
   # }
   ```

2. **Verify all instances are healthy:**
   ```bash
   # Kubernetes
   kubectl get pods -n production -l app=app-name
   # All pods: STATUS=Running, READY=1/1, RESTARTS=0

   # Check readiness/liveness probe status
   kubectl describe pod -l app=app-name -n production | grep -A5 "Conditions:"
   ```

3. **Verify service endpoints:**
   ```bash
   # Main application URL
   curl -sI https://app.example.com | head -3
   # Expected: HTTP/2 200

   # API endpoint
   curl -s https://api.example.com/v1/status
   # Expected: 200 OK with valid JSON

   # Admin panel (if applicable)
   curl -sI https://admin.example.com | head -3
   ```

4. **Check SSL certificate:**
   ```bash
   echo | openssl s_client -connect app.example.com:443 2>/dev/null | openssl x509 -noout -dates
   # Verify: notAfter is > 30 days from now
   ```

**Expected Outcome:** All application instances healthy, all endpoints responding with correct status codes.

**Quality Check:** ✅ Health endpoint returns "healthy", ✅ All pods running with 0 restarts, ✅ All service URLs responding.

---

### Step 3.2: Execute Smoke Tests

**Action:** Run the smoke test suite against production to verify core functionality.

**How to Execute:**

1. **Automated smoke tests (preferred):**
   ```bash
   # Run smoke test suite against production
   ENVIRONMENT=production npx playwright test tests/smoke/ --reporter=html
   # OR
   pytest tests/smoke/ --base-url=https://app.example.com --html=smoke_report.html
   ```

2. **Manual smoke test checklist (if automated tests unavailable):**

   | # | Test | Steps | Expected Result | Pass/Fail |
   |---|------|-------|-----------------|-----------|
   | 1 | Homepage loads | Navigate to homepage | Page renders, no errors | |
   | 2 | User login | Login with test credentials | Successful login, redirect to dashboard | |
   | 3 | User registration | Register new account | Account created, confirmation email sent | |
   | 4 | Core feature 1 | [Project-specific test] | [Expected behavior] | |
   | 5 | Core feature 2 | [Project-specific test] | [Expected behavior] | |
   | 6 | API response | Call primary API endpoint | Valid JSON, correct schema | |
   | 7 | File upload | Upload test file | File stored, accessible | |
   | 8 | Email/notification | Trigger notification | Notification delivered | |
   | 9 | Search | Search for known term | Relevant results returned | |
   | 10 | Logout | Click logout | Session terminated, redirected | |

3. Document pass/fail for each test
4. For any failures: assess severity and whether rollback is needed

**Expected Outcome:** All smoke tests passing (100% pass rate required for critical tests).

**Quality Check:** ✅ All critical smoke tests pass, ✅ Results documented, ✅ Any failures assessed for rollback decision.

---

### Step 3.3: Verify Critical User Flows

**Action:** Test end-to-end critical user journeys that represent core business value.

**How to Execute:**

1. Identify the top 3–5 critical user flows for this application:
   - **E-commerce:** Browse → Add to Cart → Checkout → Payment → Confirmation
   - **SaaS:** Login → Dashboard → Create Resource → Save → View
   - **Content:** Login → Create Post → Publish → View Published

2. Execute each flow manually in production:
   - Use a real browser (not just cURL)
   - Test on both desktop and mobile viewports
   - Use production test accounts (not admin/superuser)
   - Verify the complete flow end-to-end, including email confirmations

3. Document each flow result:
   ```markdown
   **Flow: User Registration & Onboarding**
   - Step 1: Navigate to /register ✅
   - Step 2: Fill form, submit ✅
   - Step 3: Confirmation email received ✅ (delivery time: 8 seconds)
   - Step 4: Click email link, account activated ✅
   - Step 5: Onboarding wizard loads ✅
   - Result: PASS
   ```

4. Any broken critical flow is grounds for rollback decision

**Expected Outcome:** All critical user flows verified working end-to-end in production.

**Quality Check:** ✅ All critical flows pass, ✅ Tested on multiple viewports, ✅ Email/notification delivery confirmed.

---

### Step 3.4: Monitor Logs for Errors

**Action:** Review application logs for errors, exceptions, and unexpected warnings.

**How to Execute:**

1. **Check application logs:**
   ```bash
   # Recent errors
   kubectl logs -l app=app-name -n production --since=15m | grep -i "error\|exception\|fatal" | head -30

   # Count errors by type
   kubectl logs -l app=app-name -n production --since=15m | grep -ci "error"
   # Compare with baseline (pre-deployment error count in same timeframe)
   ```

2. **Check log aggregation (ELK/Loki/CloudWatch):**
   - Open Kibana/Grafana and filter for last 15 minutes
   - Compare error count with previous deployment baseline
   - Look for new error types not present before deployment

3. **Error classification:**
   - **New errors introduced by this deployment:** Investigate immediately
   - **Pre-existing errors at same rate:** Note but don't block
   - **Error spike (>3x baseline):** Trigger rollback discussion

4. **Check for silent failures:**
   - Verify background jobs are executing (Sidekiq, Celery, etc.)
   - Check queue consumers are processing messages
   - Verify scheduled tasks / cron jobs running

**Expected Outcome:** No new critical errors introduced by deployment; error rates at or below pre-deployment baseline.

**Quality Check:** ✅ No new error types in logs, ✅ Error rate ≤ baseline, ✅ Background jobs executing normally.

---

### Step 3.5: Verify Integrations

**Action:** Confirm all external integrations and third-party services are functioning.

**How to Execute:**

1. **Test each integration point:**

   | Integration | Test Method | Expected Result |
   |-------------|-------------|-----------------|
   | Payment Gateway | Process $0.01 test charge (sandbox) or verify webhook connectivity | Transaction succeeds or webhook acknowledged |
   | Email Service | Trigger test email | Email delivered within 30s |
   | SMS/Push Notifications | Trigger test notification | Notification received |
   | Analytics | Check events arriving | Events logged in dashboard |
   | External APIs | Call dependent APIs | Responses received, correct format |
   | SSO/OAuth | Login via SSO provider | Authentication succeeds |
   | File Storage (S3/GCS) | Upload and retrieve test file | File accessible |

2. **Check webhook endpoints:**
   ```bash
   # Verify webhook endpoint is accessible
   curl -X POST https://app.example.com/webhooks/stripe \
     -H "Content-Type: application/json" \
     -d '{"type": "test"}' -w "\n%{http_code}"
   # Expected: 200 or 400 (not 500 or timeout)
   ```

3. Document integration status for each external system
4. If a non-critical integration is failing, note it for follow-up but don't necessarily rollback

**Expected Outcome:** All critical integrations verified functional; non-critical integration issues documented.

**Quality Check:** ✅ All critical integrations working, ✅ Payment processing verified, ✅ Email delivery confirmed.

---

### Step 3.6: Check Performance Metrics

**Action:** Compare post-deployment performance metrics against pre-deployment baseline.

**How to Execute:**

1. **Capture current metrics and compare:**

   | Metric | Pre-Deploy Baseline | Post-Deploy Current | Threshold | Status |
   |--------|--------------------|--------------------|-----------|--------|
   | Error rate | 0.2% | | < 1% | |
   | P50 response time | 120ms | | < 300ms | |
   | P95 response time | 350ms | | < 1000ms | |
   | P99 response time | 800ms | | < 2000ms | |
   | Requests/sec | 500 | | ±20% baseline | |
   | CPU utilization | 35% | | < 80% | |
   | Memory utilization | 60% | | < 85% | |
   | DB query time (avg) | 15ms | | < 50ms | |

2. **Check from monitoring dashboard:**
   ```bash
   # Quick performance check via CLI (if metrics API available)
   curl -s "https://monitoring.example.com/api/v1/query?query=http_request_duration_seconds{quantile='0.95'}" | jq .
   ```

3. **Performance regression detection:**
   - If any metric exceeds threshold: investigate root cause
   - If response time increased >50% from baseline: potential performance regression
   - If CPU/memory significantly higher: possible memory leak or inefficiency

4. Fill in the metrics table and include in Verification Report

**Expected Outcome:** All performance metrics within acceptable thresholds, no significant regressions.

**Quality Check:** ✅ All metrics within thresholds, ✅ No performance regression >20% from baseline, ✅ Metrics table completed.

---

### Step 3.7: Verify Data Integrity

**Action:** Confirm that deployment (especially database migrations) did not corrupt or lose data.

**How to Execute:**

1. **Row count verification:**
   ```sql
   -- Compare critical table row counts with pre-deployment snapshot
   SELECT 'users' AS table_name, COUNT(*) AS row_count FROM users
   UNION ALL
   SELECT 'orders', COUNT(*) FROM orders
   UNION ALL
   SELECT 'transactions', COUNT(*) FROM transactions;
   -- Counts should match or exceed pre-deployment counts (new rows OK, fewer rows = problem)
   ```

2. **Sample data verification:**
   - Query 5–10 known records and verify data is intact
   - Check that migrated/transformed data is in the expected format
   - Verify foreign key relationships are intact

3. **New schema verification (if migration added tables/columns):**
   ```sql
   -- Verify new columns exist and have expected defaults
   SELECT column_name, data_type, column_default
   FROM information_schema.columns
   WHERE table_name = 'new_or_modified_table';
   ```

4. **Check for orphaned records:**
   ```sql
   -- Example: orders referencing non-existent users
   SELECT o.id FROM orders o
   LEFT JOIN users u ON o.user_id = u.id
   WHERE u.id IS NULL;
   -- Expected: 0 rows
   ```

**Expected Outcome:** Data integrity verified — no data loss, corruption, or orphaned records.

**Quality Check:** ✅ Row counts match or exceed pre-deployment, ✅ Sample records intact, ✅ No orphaned records.

---

### Step 3.8: Document Verification Results & DP1 Decision

**Action:** Compile all verification results into a report and make the Go/No-Go decision.

**How to Execute:**

1. **Compile Verification Report:**
   ```markdown
   # Post-Deployment Verification Report
   **Version:** v2.4.0
   **Date:** 2026-02-19
   **Verified By:** [QA Lead Name]

   ## Summary
   | Check | Result | Notes |
   |-------|--------|-------|
   | Application Health | ✅ PASS | All 5 pods healthy |
   | Smoke Tests | ✅ PASS | 10/10 passed |
   | Critical User Flows | ✅ PASS | 4/4 flows verified |
   | Log Analysis | ✅ PASS | No new errors |
   | Integrations | ✅ PASS | All 6 integrations working |
   | Performance | ✅ PASS | All metrics within threshold |
   | Data Integrity | ✅ PASS | Row counts match, data intact |

   ## Decision: DEPLOYMENT SUCCESSFUL ✅
   Proceed to: WI-OPS-005 (User Training & Handoff)
   ```

2. **Decision Point 1 (DP1): Deployment Successful?**

   **YES — All checks pass:**
   - Post announcement: "✅ Deployment v2.4.0 SUCCESSFUL — all verifications passed"
   - Update status page to "Operational"
   - Proceed to WI-OPS-005 (User Training & Handoff)

   **NO — Any critical check fails:**
   - Post announcement: "❌ Deployment v2.4.0 FAILED verification — initiating rollback"
   - Proceed immediately to WI-OPS-004 (Rollback Procedures)
   - Do not attempt to "fix forward" unless the fix is trivial and pre-tested

3. Get sign-off from QA Lead and Tech Lead on the decision
4. Archive the Verification Report with the deployment records

**Expected Outcome:** Clear Go/No-Go decision documented and communicated to all stakeholders.

**Quality Check:** ✅ All verification sections completed, ✅ Decision signed by QA Lead and Tech Lead, ✅ Next step (WI-OPS-005 or WI-OPS-004) initiated.

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Verification Report | Complete results of all verification checks | Document |
| Smoke Test Results | Pass/fail for all smoke test cases | Test report |
| Performance Metrics Comparison | Pre vs. post deployment metrics | Table / dashboard |
| DP1 Decision Record | Go/No-Go decision with justification | Signed document |

---

## 7. Success Criteria

✅ Application health check passes on all instances
✅ 100% of critical smoke tests pass
✅ All critical user flows verified end-to-end
✅ No new error types in application logs
✅ All critical integrations functional
✅ Performance metrics within acceptable thresholds
✅ Data integrity verified (no loss or corruption)
✅ DP1 decision documented and communicated

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Smoke tests pass but real users experience errors** | Test with production-like accounts and data, not just admin users; test on multiple browsers/devices |
| **Performance looks fine initially but degrades over time** | Monitor for at least 30 minutes; watch for memory leaks (gradual memory increase) |
| **Integration test passes but webhook delivery fails** | Verify webhook URLs are correct for production (not staging URLs); check firewall rules |
| **Data integrity check misses subtle corruption** | Compare checksums on critical data, not just row counts; verify computed/derived fields |
| **Declaring success too early** | Wait minimum 15 minutes of stable metrics before declaring success; have a "bake time" policy |
| **Fixing forward instead of rolling back** | If the fix isn't already tested and ready, rollback first; fix-forward is risky under pressure |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-OPS-001 | Deployment & Release | Parent procedure |
| WI-OPS-002 | Production Deployment | Previous step |
| WI-OPS-004 | Rollback Procedures | If verification fails (DP1=NO) |
| WI-OPS-005 | User Training & Handoff | If verification passes (DP1=YES) |

---

## 10. References

- Google SRE Handbook — Monitoring and Alerting
- ITIL Service Transition — Release Verification
- Smoke Testing Best Practices (Martin Fowler)
- ISO 9001:2015 Clause 8.6 — Release of products and services

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-OPS-001 Step 3 |

---

**Document ID:** WI-OPS-003-v1.0.0 | **Tier:** 3 - Work Instructions
