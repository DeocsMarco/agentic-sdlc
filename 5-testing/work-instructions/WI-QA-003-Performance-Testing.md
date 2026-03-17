# Work Instruction: Performance Testing

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-QA-003-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Quality Assurance |
| **Parent SOP** | SOP-QA-001 (Testing & QA) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for executing performance testing as defined in Step 3 of the Testing & QA phase (SOP-QA-001). It ensures the system meets defined performance benchmarks for response time, throughput, and scalability under expected and peak load conditions.

---

## 2. Scope

**Applies To:**
- All projects with defined performance requirements (SLAs, response time targets)
- Systems expected to handle concurrent users or high transaction volumes
- Projects deploying to production environments with resource constraints

**Responsible Role:** QA Team (with DevOps consultation)

---

## 3. Prerequisites

Before starting performance testing, ensure you have:

☐ System & Manual Testing (WI-QA-001) and Integration Testing (WI-QA-002) substantially complete
☐ Production-like test environment available (matching prod specs for CPU, memory, network)
☐ Performance testing tools installed and configured (JMeter, k6, Artillery, or equivalent)
☐ Realistic test data seeded (volume similar to expected production)
☐ Performance criteria defined (from requirements or SLA documents)
☐ Monitoring tools configured (APM, server metrics, database monitoring)
☐ Baseline metrics from previous release (if applicable)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Performance Requirements / SLAs | Requirements Phase | Document |
| Production-like Test Environment | DevOps | Deployed environment |
| Performance Testing Tools | Tools | JMeter/k6/Artillery |
| Realistic Test Data | QA/DevOps | Seeded database |
| Architecture Document | Design Phase | Document (infrastructure specs) |
| Monitoring/APM Access | DevOps | Dashboard access |

---

## 5. Procedure Steps

### Step 3.1: Define Performance Criteria

**Action:** Establish clear, measurable performance benchmarks before testing.

**How to Execute:**

1. Extract performance requirements from project documentation:
   - Response time targets (e.g., API responses < 200ms at P95, page load < 3s)
   - Throughput targets (e.g., 500 requests/second)
   - Concurrent user targets (e.g., 1,000 simultaneous users)
   - Error rate thresholds (e.g., < 0.1% error rate under load)
   - Resource utilization limits (e.g., CPU < 80%, Memory < 85%)
2. If no explicit requirements exist, define reasonable defaults:
   ```
   | Metric                  | Target         |
   |-------------------------|----------------|
   | API Response (P50)      | < 100ms        |
   | API Response (P95)      | < 500ms        |
   | API Response (P99)      | < 1,000ms      |
   | Page Load Time          | < 3 seconds    |
   | Throughput              | > 100 req/sec  |
   | Error Rate Under Load   | < 1%           |
   | CPU Utilization (peak)  | < 80%          |
   | Memory Utilization      | < 85%          |
   ```
3. Identify critical user journeys to test under load:
   - Login → Dashboard → Core feature → Logout
   - Search/filter with large result sets
   - File upload/download
   - Report generation
4. Get PM/Tech Lead sign-off on performance criteria before testing.

**Expected Outcome:** Documented performance criteria with measurable targets approved by stakeholders.

**Quality Check:** ✅ Criteria are specific and measurable (not "should be fast"). ✅ Critical user journeys identified. ✅ PM/Tech Lead approved.

---

### Step 3.2: Create Performance Test Scripts

**Action:** Build automated test scripts that simulate realistic user behavior under load.

**How to Execute:**

1. Choose the appropriate tool for your environment:
   - **k6**: JavaScript-based, good for API load testing, CI-friendly
   - **JMeter**: GUI-based, good for complex scenarios, widely supported
   - **Artillery**: YAML-based, good for quick API tests, easy to configure
2. For each critical user journey, create a test script:
   - Simulate realistic user think time (2–5 seconds between actions)
   - Use parameterized test data (don't hit the same record every time)
   - Include authentication flow (login → get token → use token)
   - Vary request payloads realistically
3. Example k6 script structure:
   ```javascript
   import http from 'k6/http';
   import { check, sleep } from 'k6';

   export const options = {
     stages: [
       { duration: '2m', target: 100 },  // ramp up
       { duration: '5m', target: 100 },  // steady state
       { duration: '2m', target: 0 },    // ramp down
     ],
     thresholds: {
       http_req_duration: ['p(95)<500'],
       http_req_failed: ['rate<0.01'],
     },
   };

   export default function () {
     const res = http.get('https://test-env.example.com/api/endpoint');
     check(res, { 'status is 200': (r) => r.status === 200 });
     sleep(Math.random() * 3 + 1);
   }
   ```
4. Validate scripts at low concurrency (1–5 users) before running at scale.

**Expected Outcome:** Validated performance test scripts for all critical user journeys.

**Quality Check:** ✅ Scripts run successfully at low concurrency. ✅ Realistic think times included. ✅ Parameterized data avoids cache-only testing.

---

### Step 3.3: Execute Load Testing

**Action:** Test the system under expected normal and peak load conditions.

**How to Execute:**

1. **Baseline test**: Run with 1 virtual user to establish single-user response times.
2. **Normal load test**: Ramp to expected concurrent user count and sustain for 10–15 minutes.
3. **Peak load test**: Ramp to 2x expected concurrent users and sustain for 5–10 minutes.
4. During each test, monitor:
   - Response times (P50, P95, P99) — from the test tool
   - Error rates — from the test tool
   - CPU utilization — from server monitoring
   - Memory utilization — from server monitoring
   - Database query times — from APM/database monitoring
   - Network I/O — from server monitoring
5. Record results in a structured format:
   ```
   | Test Scenario | VUs | Duration | P50 (ms) | P95 (ms) | P99 (ms) | Error % | CPU % | Mem % |
   |---------------|-----|----------|----------|----------|----------|---------|-------|-------|
   | Baseline      | 1   | 5 min    | 45       | 78       | 120      | 0%      | 5%    | 30%   |
   | Normal Load   | 100 | 15 min   | 85       | 210      | 450      | 0.02%  | 45%   | 55%   |
   | Peak Load     | 200 | 10 min   | 150      | 480      | 890      | 0.5%   | 72%   | 68%   |
   ```
6. Compare results against criteria from Step 3.1.

**Expected Outcome:** Load test results documented with pass/fail against performance criteria.

**Quality Check:** ✅ Baseline established. ✅ Normal and peak load tested. ✅ Server metrics captured alongside response times.

---

### Step 3.4: Execute Stress Testing

**Action:** Push the system beyond expected limits to identify breaking points and failure behavior.

**How to Execute:**

1. Gradually increase load beyond peak until the system degrades:
   - Start at peak load (2x expected)
   - Increase by 50 VUs every 2 minutes
   - Continue until error rate exceeds 5% or response times exceed 5x target
2. Record the breaking point:
   - At what VU count did errors start appearing?
   - At what VU count did response times degrade significantly?
   - What failed first — CPU, memory, database connections, or network?
3. Observe system behavior under stress:
   - Does the system degrade gracefully (slower but functional) or catastrophically (crashes, data loss)?
   - Do error messages remain user-friendly?
   - Does the system recover after load decreases? How quickly?
4. Identify bottlenecks:
   - If CPU maxes first → compute-bound (optimize code, add instances)
   - If memory maxes first → memory leak or inefficient caching
   - If database connections max → connection pool too small or slow queries
   - If network maxes → large payloads or inefficient data transfer

**Expected Outcome:** Breaking point identified; system failure mode documented; bottlenecks identified.

**Quality Check:** ✅ Breaking point clearly identified. ✅ Recovery behavior documented. ✅ Bottleneck root cause identified.

---

### Step 3.5: Execute Endurance Testing (If Applicable)

**Action:** Run the system under sustained moderate load for an extended period to detect memory leaks and resource exhaustion.

**How to Execute:**

1. Run at 70–80% of expected peak load for 4–8 hours (or overnight).
2. Monitor throughout for:
   - Gradual increase in memory usage (memory leak indicator)
   - Gradual increase in response times (resource exhaustion)
   - Gradual increase in error rates
   - Database connection count growth
   - Disk space consumption (log files, temp files)
3. Compare metrics at start vs. end:
   - Memory usage should be stable (not climbing)
   - Response times should be stable (not degrading)
   - Error rates should be stable (not increasing)
4. If degradation detected, capture heap dumps or profiling data for Dev team.

**Expected Outcome:** Endurance test results showing system stability (or instability) over extended period.

**Quality Check:** ✅ Test ran for minimum 4 hours. ✅ Memory trend is flat (no leak). ✅ Response time trend is flat.

---

### Step 3.6: Analyze Results Against Benchmarks

**Action:** Compare all performance test results against defined criteria and identify pass/fail.

**How to Execute:**

1. Create a performance results summary table:
   ```
   | Metric               | Target    | Actual    | Status |
   |----------------------|-----------|-----------|--------|
   | API P95 Response     | < 500ms   | 210ms     | ✅ PASS |
   | Page Load Time       | < 3s      | 2.1s      | ✅ PASS |
   | Error Rate (peak)    | < 1%      | 0.5%      | ✅ PASS |
   | CPU (peak)           | < 80%     | 72%       | ✅ PASS |
   | Memory Stability     | No leak   | Flat      | ✅ PASS |
   | Breaking Point       | > 2x load | 3.5x load | ✅ PASS |
   ```
2. For any FAIL results:
   - Log a performance bug with the specific metric, target, and actual value
   - Include profiling data, monitoring screenshots, and test tool output
   - Classify severity: target missed by < 20% = Medium; > 20% = High; system unusable = Critical
3. Identify optimization opportunities even for passing metrics (e.g., "API P95 passes at 210ms but could be improved with query optimization").

**Expected Outcome:** Performance analysis with clear pass/fail per metric and optimization recommendations.

**Quality Check:** ✅ Every metric from Step 3.1 has a measured result. ✅ Failed metrics have bug tickets. ✅ Analysis includes root cause for failures.

---

### Step 3.7: Document Performance Findings

**Action:** Compile the complete Performance Test Report.

**How to Execute:**

1. Create the report with sections:
   - **Executive Summary**: Overall pass/fail, key findings, recommendations
   - **Test Environment**: Infrastructure specs, tool versions, data volume
   - **Performance Criteria**: Targets defined in Step 3.1
   - **Load Test Results**: Tables and charts from Step 3.3
   - **Stress Test Results**: Breaking point and bottleneck analysis from Step 3.4
   - **Endurance Test Results**: Stability findings from Step 3.5
   - **Analysis**: Pass/fail per metric from Step 3.6
   - **Recommendations**: Performance optimizations suggested
   - **Defects**: Links to performance bug tickets
2. Include charts/graphs (response time distribution, throughput over time, resource utilization trends).
3. Deliver to QA Lead and Tech Lead.

**Expected Outcome:** Complete Performance Test Report delivered.

**Quality Check:** ✅ Report includes all test phases. ✅ Charts/visual evidence included. ✅ Recommendations are actionable.

---

### Decision Point 1 (DP1): Bugs Found?

**After completing Steps 1–3 (System Testing, Integration Testing, Performance Testing):**

| Condition | Action |
|-----------|--------|
| **YES** — Bugs found during any testing phase | Proceed to **WI-QA-004 (Bug Resolution)** |
| **NO** — No bugs found across all testing phases | Skip to **WI-QA-005 (User Acceptance Testing)** |

> **Note:** It is extremely rare to have zero bugs. If no bugs were found, the QA Lead should review test coverage to ensure testing was thorough enough.

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Performance Test Report | Complete findings from all performance testing phases | Report |
| Performance Test Scripts | Automated load/stress/endurance scripts | k6/JMeter/Artillery files |
| Performance Bug Reports | Defects for metrics that failed targets | Bug tracker tickets |
| Monitoring Data | Server metrics captured during tests | APM exports / screenshots |

---

## 7. Success Criteria

✅ Performance criteria defined and approved before testing
✅ Load, stress, and endurance tests executed
✅ All metrics compared against targets with pass/fail status
✅ Breaking point identified through stress testing
✅ Performance bottlenecks identified with root cause
✅ Performance Test Report delivered to QA Lead and Tech Lead

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Testing on undersized environment** — results don't reflect production | Ensure test environment matches production specs (CPU, memory, network, database size) |
| **Cache warming skews results** — first run slow, subsequent runs fast | Run a warm-up phase before measuring; or test with cache cold if that's the user experience |
| **Unrealistic test data** — testing with 10 records when prod has 1M | Seed realistic data volumes; performance with 10 rows tells you nothing |
| **No think time in scripts** — hammering server unrealistically | Always include 1–5 second think times between actions to simulate real user behavior |
| **Only testing happy path under load** — missing error-path performance | Include error scenarios in load scripts (invalid logins, 404s, etc.) |
| **Ignoring database performance** — only looking at API response times | Monitor database query times, connection pool usage, and lock contention during tests |
| **Running tests from same network as server** — no network latency | Run load generators from a different region/zone to include realistic network latency |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-QA-001 | Testing & QA | Parent procedure |
| WI-QA-002 | Integration Testing | Previous step |
| WI-QA-004 | Bug Resolution | Next step (if bugs found) |
| WI-QA-005 | User Acceptance Testing | Next step (if no bugs) |

---

## 10. References

- k6 Documentation — https://k6.io/docs/
- Apache JMeter User Manual
- ISTQB Performance Testing Syllabus

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-QA-001 Step 3 |

---

**Document ID:** WI-QA-003-v1.0.0 | **Tier:** 3 - Work Instructions
