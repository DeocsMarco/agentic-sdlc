# Requirements Gathering Completeness Checklist

**Document ID**: CHECK-REQ-001-v1.0.0
**Version**: 1.0.0
**Effective Date**: 2026-02-14
**Review Date**: 2027-02-14
**Department**: Project Management / Business Analysis
**Parent WI**: WI-REQ-001 (Requirements Gathering)
**Approved By**: [Pending]

---

## Purpose

This checklist ensures all required requirements gathering activities from WI-REQ-001 are completed before proceeding to User Story Creation (WI-REQ-002). It verifies that stakeholder needs have been systematically captured, documented, and prioritized.

**Use this checklist when:**
- Requirements gathering is believed to be complete
- Before transitioning to user story creation
- When onboarding a new BA to verify requirements state

**Time Required**: 20-30 minutes

---

## Prerequisites

Before starting this checklist, ensure you have:

- ☑ Access to the Requirements Document (TMPL-REQ-001)
- ☑ Stakeholder interview records (FORM-REQ-001)
- ☑ Workshop outcomes documentation
- ☑ Prioritized requirements list

---

## Checklist Items

### Section 1: Planning and Preparation (Step 1.1)

☐ **Item 1.1**: Requirements gathering plan created with schedule
  - **Expected Outcome**: Documented plan showing elicitation techniques per stakeholder group
  - **Verification**: Plan includes dates, attendees, and techniques for each session
  - **Notes**: _____________________________________________

☐ **Item 1.2**: All primary stakeholders identified and scheduled
  - **Expected Outcome**: Every primary stakeholder has at least one session scheduled
  - **Verification**: Cross-reference stakeholder register against session schedule
  - **Notes**: _____________________________________________

☐ **Item 1.3**: Interview guides and workshop agendas prepared
  - **Expected Outcome**: Tailored question sets for each stakeholder group
  - **Verification**: Guides reference project scope and stakeholder responsibilities
  - **Notes**: _____________________________________________

### Section 2: Stakeholder Interviews (Step 1.2)

☐ **Item 2.1**: All scheduled stakeholder interviews conducted
  - **Expected Outcome**: Every primary stakeholder interviewed or included in workshop
  - **Verification**: FORM-REQ-001 completed for each interview
  - **Notes**: _____________________________________________

☐ **Item 2.2**: Interview summaries validated by stakeholders
  - **Expected Outcome**: Stakeholders confirmed accuracy of captured requirements
  - **Verification**: Written confirmation (email or sign-off) from each interviewee
  - **Notes**: _____________________________________________

☐ **Item 2.3**: Conflicting requirements identified across interviews
  - **Expected Outcome**: Conflicts documented with source stakeholders noted
  - **Verification**: Conflict log created (if conflicts exist)
  - **Notes**: _____________________________________________

### Section 3: Workshops and Observation (Steps 1.3-1.4)

☐ **Item 3.1**: Requirements workshops conducted with cross-functional teams
  - **Expected Outcome**: Workshop outcomes documented and distributed
  - **Verification**: Attendance records and outcome documents available
  - **Notes**: _____________________________________________

☐ **Item 3.2**: Existing documentation and systems reviewed
  - **Expected Outcome**: Document analysis summary created
  - **Verification**: Summary identifies migration requirements and implicit requirements
  - **Notes**: _____________________________________________

☐ **Item 3.3**: Current workflows observed (if applicable)
  - **Expected Outcome**: Workflow observations documented with pain points identified
  - **Verification**: Observation notes reference specific bottlenecks and workarounds
  - **Notes**: _____________________________________________

### Section 4: Functional Requirements (Step 1.5)

☐ **Item 4.1**: All functional requirements documented with unique IDs
  - **Expected Outcome**: Each requirement has ID, title, description, source, priority
  - **Verification**: Requirements numbered sequentially (FR-001, FR-002, etc.)
  - **Notes**: _____________________________________________

☐ **Item 4.2**: Requirements grouped by functional area
  - **Expected Outcome**: Logical grouping (User Management, Core Logic, Reporting, etc.)
  - **Verification**: Each functional area has at least one requirement
  - **Notes**: _____________________________________________

☐ **Item 4.3**: Each requirement has at least one acceptance criterion
  - **Expected Outcome**: Testable criteria for every functional requirement
  - **Verification**: Spot-check 10 requirements for clear acceptance criteria
  - **Notes**: _____________________________________________

☐ **Item 4.4**: Requirements are specific and unambiguous
  - **Expected Outcome**: No vague terms like "fast", "easy to use", "flexible"
  - **Verification**: Search document for common vague terms; replace with specifics
  - **Notes**: _____________________________________________

### Section 5: Non-Functional Requirements (Step 1.6)

☐ **Item 5.1**: Performance requirements defined with measurable targets
  - **Expected Outcome**: Response time, throughput, and load targets specified
  - **Verification**: Each performance NFR has a number (e.g., "< 2 seconds")
  - **Notes**: _____________________________________________

☐ **Item 5.2**: Availability and reliability requirements defined
  - **Expected Outcome**: Uptime target, RTO, RPO documented
  - **Verification**: Values reviewed with client for realism
  - **Notes**: _____________________________________________

☐ **Item 5.3**: Security requirements defined
  - **Expected Outcome**: Authentication, authorization, encryption, compliance requirements documented
  - **Verification**: Compliance standards identified (GDPR, HIPAA, etc.) if applicable
  - **Notes**: _____________________________________________

☐ **Item 5.4**: Scalability requirements defined
  - **Expected Outcome**: User growth, data growth, peak load projections documented
  - **Verification**: Growth projections cover 1-3 year horizon
  - **Notes**: _____________________________________________

☐ **Item 5.5**: Usability requirements defined
  - **Expected Outcome**: Accessibility standards, device support, localization needs documented
  - **Verification**: Target user personas referenced for usability decisions
  - **Notes**: _____________________________________________

### Section 6: Prioritization (Step 1.7)

☐ **Item 6.1**: All requirements prioritized using MoSCoW
  - **Expected Outcome**: Every requirement classified as Must/Should/Could/Won't
  - **Verification**: Priority distribution is balanced (~60% Must, ~20% Should, ~20% Could)
  - **Notes**: _____________________________________________

☐ **Item 6.2**: Conflicting requirements resolved
  - **Expected Outcome**: All conflicts have documented resolution with stakeholder agreement
  - **Verification**: Conflict resolution log shows resolution and sign-off
  - **Notes**: _____________________________________________

☐ **Item 6.3**: Prioritization reviewed and agreed by client stakeholders
  - **Expected Outcome**: Client has confirmed the priority assignments
  - **Verification**: Written confirmation from client decision-maker
  - **Notes**: _____________________________________________

---

## Completion Criteria

This checklist is complete when:

- ✅ All items checked (or marked ❌ if not applicable with justification)
- ✅ Requirements Document (TMPL-REQ-001) fully populated
- ✅ All stakeholder interviews validated
- ✅ MoSCoW prioritization agreed by client
- ✅ Document ready for user story creation (WI-REQ-002)

**Completed By**: _________________ **Role**: _________________ **Date**: _________

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Stakeholder unavailable for validation | Allow 48h for email confirmation; escalate if no response |
| Too many Must Have requirements | Challenge with "What happens if we don't have this at launch?" |
| Vague non-functional requirements | Use specific templates: "System shall [verb] [metric] under [condition]" |
| Missing stakeholder group | Check for operations, support, compliance, and training teams |
| Requirements overlap or duplicate | Merge and cross-reference; maintain single source of truth |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-14 | System | Initial checklist created |

---

**Document ID**: CHECK-REQ-001-v1.0.0 | **Tier**: 4 - Operational Controls
