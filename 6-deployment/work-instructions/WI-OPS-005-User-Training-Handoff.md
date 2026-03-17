# Work Instruction: User Training & Handoff

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-OPS-005-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Operations / DevOps |
| **Parent SOP** | SOP-OPS-001 (Deployment & Release) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for conducting user training and handing off the deployed system to end users and support teams, as defined in Step 5 of the Deployment & Release SOP (SOP-OPS-001). Effective training ensures users can leverage new features and reduces the volume of post-launch support requests.

---

## 2. Scope

**Applies To:**
- All production deployments that introduce user-facing changes
- Feature releases, UI changes, workflow modifications
- Handoff from development/DevOps to support team

**Responsible Roles:** PM, Support

---

## 3. Prerequisites

Before starting user training and handoff, ensure you have:

☐ Deployment verified successful (WI-OPS-003, DP1 = YES)
☐ Release notes finalized (TMPL-RELEASE-001)
☐ Training materials prepared (TMPL-TRAINING-001)
☐ User documentation updated for new features
☐ Support team briefed on changes
☐ Training environment or production sandbox available (if applicable)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Release Notes | WI-OPS-001 output | TMPL-RELEASE-001 |
| Training Materials | PM / Dev Team | TMPL-TRAINING-001 |
| User Documentation | Technical Writer / Dev | Guides, FAQs, videos |
| Known Issues List | WI-OPS-003 output | Document |
| Support Team Roster | Support Lead | Contact list |

---

## 5. Procedure Steps

### Step 5.1: Schedule Training Sessions

**Action:** Plan and schedule training sessions for end users and support staff.

**How to Execute:**

1. **Identify training audiences:**
   - **Tier 1:** Support team (must be trained BEFORE end users)
   - **Tier 2:** Power users / team leads / admin users
   - **Tier 3:** General end users

2. **Determine training format per audience:**

   | Audience | Format | Duration | Timing |
   |----------|--------|----------|--------|
   | Support team | Live workshop + Q&A | 60–90 min | Day 0 (deployment day) |
   | Power users | Live demo + hands-on | 45–60 min | Day 1–2 |
   | General users | Recorded video + docs | 15–30 min | Day 2–5 |

3. **Schedule sessions:**
   - Send calendar invites with agenda and prerequisites
   - Include video conferencing link (Zoom/Teams/Meet)
   - Schedule across multiple time zones if applicable
   - Offer at least 2 time slots for each audience tier
   - Include "optional Q&A" 15-minute buffer after each session

4. **Prepare the training environment:**
   - Set up demo accounts with realistic sample data
   - Ensure training environment mirrors production (post-deployment)
   - Test screen sharing and recording tools
   - Prepare backup plan if live demo fails (screenshots, slides)

**Expected Outcome:** Training sessions scheduled for all audience tiers with invites sent and environment prepared.

**Quality Check:** ✅ All audience tiers have scheduled sessions, ✅ Calendar invites sent, ✅ Training environment verified working.

---

### Step 5.2: Conduct Feature/Change Training

**Action:** Deliver training covering new features, changes, and updated workflows.

**How to Execute:**

1. **Training session structure:**
   ```
   [5 min]  Welcome & overview of what changed (high-level)
   [15 min] Demo of new features (live walkthrough)
   [10 min] Changed workflows (before vs. after)
   [5 min]  Known issues and workarounds
   [10 min] Hands-on practice (attendees try it themselves)
   [10 min] Q&A
   [5 min]  Where to find help (docs, support channels)
   ```

2. **Key content to cover:**
   - What's new (mapped to release notes)
   - What's changed (workflow differences — show before/after)
   - What's removed or deprecated
   - How to perform common tasks with new features
   - Where to report issues

3. **Training best practices:**
   - Record all live sessions for later reference
   - Use real scenarios relevant to the audience's daily work
   - Show, don't just tell — live demo > slides
   - Pause for questions after each major feature
   - Provide a printed/PDF "quick reference card" for key changes

4. **For support team training (Tier 1), additionally cover:**
   - Common issues users will encounter
   - Troubleshooting steps for known edge cases
   - Escalation paths for new feature-related issues
   - Updated FAQ responses

5. Track attendance for each session

**Expected Outcome:** Training sessions delivered with features demonstrated, questions answered, and sessions recorded.

**Quality Check:** ✅ All scheduled sessions conducted, ✅ Sessions recorded, ✅ Attendance tracked (>80% of invited attendees).

---

### Step 5.3: Provide User Documentation and Guides

**Action:** Distribute updated documentation covering all new features and changes.

**How to Execute:**

1. **Prepare documentation package using TMPL-TRAINING-001:**

   **User Guide Updates:**
   - New feature walkthroughs with screenshots
   - Updated workflow diagrams
   - Step-by-step instructions for changed processes
   - Keyboard shortcuts / quick actions (if applicable)

   **FAQ Document:**
   ```markdown
   ## Frequently Asked Questions — v2.4.0

   **Q: Where did [old feature] go?**
   A: It has been moved to [new location]. Here's how to access it: [steps]

   **Q: How do I use [new feature]?**
   A: [Step-by-step instructions with screenshot]

   **Q: Something isn't working as expected. What do I do?**
   A: 1. Clear browser cache  2. Try incognito mode  3. Contact support at [channel]
   ```

   **Video Tutorials (if applicable):**
   - 2–5 minute focused videos per feature
   - Upload to internal knowledge base / LMS
   - Include in email announcement

2. **Distribution channels:**
   - In-app help center / knowledge base: Update articles
   - Email: Send documentation links with release announcement
   - Slack/Teams: Pin documentation in relevant channels
   - PDF: Attach to training calendar invites

3. **Ensure documentation is accessible:**
   - Mobile-friendly format
   - Searchable (indexed in help center)
   - Versioned (users can reference previous versions)

**Expected Outcome:** Complete, updated documentation distributed through all relevant channels.

**Quality Check:** ✅ All new features documented, ✅ Screenshots current (post-deployment), ✅ Distributed via ≥2 channels.

---

### Step 5.4: Set Up Support Channels

**Action:** Establish and communicate support channels for post-deployment user assistance.

**How to Execute:**

1. **Configure support channels:**

   | Channel | Tool | Purpose | Response SLA |
   |---------|------|---------|--------------|
   | Help desk tickets | Zendesk / Jira Service Desk | Formal issue tracking | 4 hours |
   | Slack channel | #app-support or #help | Quick questions | 1 hour (business hours) |
   | Email | support@company.com | External user support | 8 hours |
   | In-app chat | Intercom / Drift | Real-time assistance | 5 minutes (if staffed) |

2. **Prepare support team:**
   - Share release notes and known issues list
   - Update canned responses / macros for common questions
   - Create new ticket categories for new features
   - Brief on escalation paths (Support → Dev → DevOps)

3. **Set up monitoring for support volume:**
   - Track ticket volume for new feature-related issues
   - Set alert if ticket volume exceeds 2x normal rate
   - Dashboard showing open tickets by category

4. **Communicate channels to users:**
   ```markdown
   ## Need Help?
   - 🔍 **Search docs first:** [help center URL]
   - 💬 **Quick question:** Slack #app-support
   - 🎫 **Report an issue:** [help desk URL]
   - 📧 **Email:** support@company.com
   - ⏰ **Support hours:** Mon-Fri, 9:00-18:00 [timezone]
   ```

**Expected Outcome:** Support channels configured, staffed, and communicated to all users.

**Quality Check:** ✅ All channels operational, ✅ Support team briefed and ready, ✅ Channel information communicated to users.

---

### Step 5.5: Execute Support Team Handoff

**Action:** Formally hand off system ownership from the development/DevOps team to the support team.

**How to Execute:**

1. **Handoff meeting agenda (60 minutes):**
   - System architecture overview (10 min)
   - New features and how they work internally (15 min)
   - Common failure modes and troubleshooting (15 min)
   - Monitoring dashboards walkthrough (10 min)
   - Escalation procedures (5 min)
   - Q&A (5 min)

2. **Handoff documentation package:**
   - System architecture diagram (simplified for support)
   - Runbook for common issues:
     ```markdown
     ## Issue: User reports "page not loading"
     1. Check application health: [monitoring URL]
     2. Check user's browser console for errors
     3. Try clearing cache / incognito
     4. If server-side: check logs at [log URL]
     5. If persists: escalate to DevOps with [template]
     ```
   - Contact list for escalation (Dev Lead, DevOps, PM)
   - Known issues and workarounds
   - Monitoring dashboard URLs and what to watch

3. **Define support ownership transition:**
   - **Week 1 (hypercare):** Dev team provides L2/L3 support, responds within 1 hour
   - **Week 2:** Dev team provides L3 only, support handles L1/L2
   - **Week 3+:** Standard support model, Dev team consulted as needed

4. Get sign-off from Support Lead acknowledging handoff

**Expected Outcome:** Support team fully briefed and equipped to handle user issues independently.

**Quality Check:** ✅ Handoff meeting conducted, ✅ Documentation package delivered, ✅ Hypercare period defined, ✅ Support Lead signed off.

---

### Step 5.6: Collect Initial User Feedback

**Action:** Gather early feedback from users to identify issues and improvement opportunities.

**How to Execute:**

1. **Deploy feedback collection (within 48 hours of launch):**
   - In-app feedback widget (e.g., "How's the new version? 👍👎")
   - Short survey (max 5 questions):
     ```
     1. How would you rate the new features? (1-5 stars)
     2. Was anything confusing or hard to find? (text)
     3. Did you experience any issues? (yes/no + text)
     4. What would you improve? (text)
     5. Overall satisfaction with the update? (1-5 stars)
     ```
   - Monitor social media / community forums for unsolicited feedback
   - Review support ticket themes

2. **Aggregate feedback after 5 business days:**
   - Categorize: Bug reports, UX confusion, feature requests, positive feedback
   - Quantify: % satisfied, top 3 issues, top 3 feature requests
   - Prioritize: Critical issues → immediate fix, UX issues → next sprint, feature requests → backlog

3. **Share feedback report with stakeholders:**
   - Dev team: Actionable bugs and UX issues
   - PM: Feature requests and satisfaction metrics
   - Leadership: Summary metrics and user sentiment

**Expected Outcome:** Initial user feedback collected, categorized, and shared with relevant teams.

**Quality Check:** ✅ Feedback collection active within 48 hours, ✅ Report generated after 5 business days, ✅ Critical issues escalated immediately.

---

### Step 5.7: Address Immediate User Questions

**Action:** Actively monitor and respond to user questions during the first week post-deployment.

**How to Execute:**

1. **Assign dedicated support during hypercare period:**
   - At least one team member monitoring each support channel
   - Dev team member available for technical escalations
   - Response time targets: Slack < 1 hour, tickets < 4 hours, email < 8 hours

2. **Track and resolve common questions:**
   - If the same question is asked 3+ times: create an FAQ entry
   - If a workflow is consistently confusing: create a how-to video
   - If a bug is found: prioritize fix and communicate workaround

3. **Daily standup during hypercare (first 5 business days):**
   - Support volume (tickets opened / resolved)
   - Top issues / questions
   - Any blockers or escalations needed
   - Update documentation based on recurring questions

4. **End of hypercare report:**
   ```markdown
   ## Hypercare Summary — v2.4.0
   - Duration: [date] to [date]
   - Tickets opened: [X]
   - Tickets resolved: [Y]
   - Top 3 issues: [list]
   - Documentation updates made: [list]
   - User satisfaction: [metric]
   - Recommendation: [transition to standard support / extend hypercare]
   ```

**Expected Outcome:** All user questions addressed promptly during hypercare period, documentation updated with recurring topics.

**Quality Check:** ✅ All questions responded to within SLA, ✅ FAQ updated with common questions, ✅ Hypercare summary report completed.

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Trained Users | Users trained on new features and changes | Training records |
| Training Recordings | Recorded sessions for future reference | Video files |
| Updated Documentation | User guides, FAQs, tutorials | Knowledge base |
| Support Channels Active | Configured and staffed support channels | Live channels |
| Handoff Documentation | Runbooks, escalation paths for support team | Document package |
| Feedback Report | Aggregated user feedback | Report |
| Hypercare Summary | Post-launch support summary | Report |

---

## 7. Success Criteria

✅ Training sessions delivered to all audience tiers
✅ >80% attendance rate for scheduled sessions
✅ Training recorded for future reference
✅ User documentation updated and distributed
✅ Support channels operational and communicated
✅ Support team handoff completed with sign-off
✅ Initial feedback collected within 48 hours
✅ All hypercare questions addressed within SLA
✅ Hypercare summary report completed

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Training treated as afterthought** | Schedule training during deployment planning (WI-OPS-001); allocate PM time for material preparation |
| **Training only covers features, not workflows** | Show before/after workflows; focus on "how does my daily work change?" not just "what's new" |
| **Documentation not updated before launch** | Make documentation update a deployment gate — no deploy without updated docs |
| **Support team learns about changes from users** | Train support team FIRST (Tier 1), before any user-facing communication |
| **No one monitors feedback** | Assign specific owner for feedback collection; include in hypercare standup |
| **Hypercare period too short** | Minimum 5 business days; extend if ticket volume hasn't stabilized |
| **Users don't know where to get help** | Include support channel info in release announcement, in-app, and training sessions |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-OPS-001 | Deployment & Release | Parent procedure |
| WI-OPS-003 | Post-Deployment Verification | Previous step (DP1=YES) |
| WI-OPS-006 | Maintenance & Monitoring Setup | Next step |
| TMPL-RELEASE-001 | Release Notes Template | Input |
| TMPL-TRAINING-001 | Training Materials Template | Training template |

---

## 10. References

- ADDIE Model for Instructional Design
- ITIL Service Transition — Knowledge Management
- ISO 9001:2015 Clause 7.2 — Competence
- Atlassian Runbook best practices

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-OPS-001 Step 5 |

---

**Document ID:** WI-OPS-005-v1.0.0 | **Tier:** 3 - Work Instructions
