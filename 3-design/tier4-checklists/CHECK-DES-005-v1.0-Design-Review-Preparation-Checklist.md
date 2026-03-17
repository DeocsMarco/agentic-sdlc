# Design Review Preparation Checklist

**Document ID**: CHECK-DES-005-v1.0.0
**Version**: 1.0.0
**Effective Date**: 2026-02-13
**Review Date**: 2027-02-13
**Department**: Design / Development
**Parent WI**: WI-DES-005 (Design Review)
**Approved By**: [Pending]

---

## Purpose

This checklist ensures all prerequisites are met before conducting a design review meeting. It guides the Tech Lead through preparation steps to ensure the review runs smoothly, all documents are ready, and all stakeholders have the materials they need.

**Use this checklist when:**
- Design review meeting is 3-5 business days away
- All design documents (WI-DES-001 through WI-DES-004) are believed to be complete
- Tech Lead is preparing to facilitate the review

**Time Required**: 45-60 minutes

---

## Prerequisites

Before starting this checklist, ensure you have:

- ☑ Architecture Document completed (WI-DES-001)
- ☑ Database & API Design completed (WI-DES-002)
- ☑ UI/UX Design Package completed (WI-DES-003)
- ☑ Low-Level Design completed (WI-DES-004)
- ☑ Access to project management and calendar tools

---

## Checklist Items

### Section 1: Document Readiness (5 days before)

☐ **Item 1.1**: Architecture Document (TMPL-ARCH-001) is complete and internally consistent
  - **Expected Outcome**: All sections filled, diagrams attached, no placeholder text remaining
  - **Verification**: Run CHECK-DES-001 checklist — all items pass
  - **Notes**: _____________________________________________

☐ **Item 1.2**: Database & API Design (TMPL-DB-001) is complete
  - **Expected Outcome**: All tables defined, ERD created, all API endpoints specified
  - **Verification**: Run CHECK-DES-002 checklist — all items pass
  - **Notes**: _____________________________________________

☐ **Item 1.3**: UI/UX Design Package is complete with working prototype
  - **Expected Outcome**: Personas, wireframes, mockups, prototype, and design system ready
  - **Verification**: Run CHECK-DES-003 checklist — all items pass
  - **Notes**: _____________________________________________

☐ **Item 1.4**: Low-Level Design (TMPL-LLD-001) is complete
  - **Expected Outcome**: Component specs, class diagrams, algorithms, interfaces documented
  - **Verification**: Run CHECK-DES-004 checklist — all items pass
  - **Notes**: _____________________________________________

☐ **Item 1.5**: All design documents cross-referenced and consistent
  - **Expected Outcome**: Naming, terminology, data models consistent across all documents
  - **Verification**: Spot-check 5 entities/classes across architecture, database, API, and LLD
  - **Notes**: _____________________________________________

### Section 2: Meeting Logistics (3 days before)

☐ **Item 2.1**: Review meeting scheduled on calendars of all mandatory attendees
  - **Expected Outcome**: CTO, Tech Lead, QA Lead, PM, Dev Team all confirmed
  - **Verification**: Calendar invitations accepted by all mandatory attendees
  - **Notes**: _____________________________________________

☐ **Item 2.2**: Meeting duration sufficient (minimum 2 hours, recommended 2.5-3 hours)
  - **Expected Outcome**: Adequate time for all 4 design areas plus discussion
  - **Verification**: Calendar shows 2+ hours blocked
  - **Notes**: _____________________________________________

☐ **Item 2.3**: Meeting room booked or virtual meeting link created and tested
  - **Expected Outcome**: Location/link confirmed and included in calendar invitation
  - **Verification**: Virtual platform tested for screen sharing capability
  - **Notes**: _____________________________________________

☐ **Item 2.4**: Optional attendees invited (designer, client contact, DBA, DevOps, security)
  - **Expected Outcome**: Relevant optional attendees notified based on project needs
  - **Verification**: Invitations sent with "optional" designation
  - **Notes**: _____________________________________________

### Section 3: Material Distribution (2-3 days before)

☐ **Item 3.1**: All design documents shared with attendees for pre-reading
  - **Expected Outcome**: Documents accessible via shared drive, repo, or attached to invitation
  - **Verification**: Distribution email sent with links to all documents
  - **Notes**: _____________________________________________

☐ **Item 3.2**: Prototype link shared and accessible to all attendees
  - **Expected Outcome**: Interactive prototype (Figma/Sketch) link works for all attendees
  - **Verification**: Test link from incognito/guest browser
  - **Notes**: _____________________________________________

☐ **Item 3.3**: Agenda distributed with time allocations per design area
  - **Expected Outcome**: Written agenda showing: Architecture (30m), DB/API (30m), UI/UX (30m), LLD (30m), Discussion (30m), Actions (15m)
  - **Verification**: Agenda included in meeting invitation or follow-up email
  - **Notes**: _____________________________________________

☐ **Item 3.4**: Attendees requested to review materials beforehand
  - **Expected Outcome**: Clear ask for pre-read with focus areas highlighted
  - **Verification**: Pre-read request sent; specific review questions included for each role
  - **Notes**: _____________________________________________

### Section 4: Review Tools & Preparation (1 day before)

☐ **Item 4.1**: Design Review Checklist (FORM-DESIGN-001) printed or prepared digitally
  - **Expected Outcome**: Blank checklist ready for use during meeting
  - **Verification**: FORM-DESIGN-001 accessible and ready to fill during meeting
  - **Notes**: _____________________________________________

☐ **Item 4.2**: Findings Report template (FORM-DES-006) ready for post-meeting use
  - **Expected Outcome**: Blank form ready to compile findings after meeting
  - **Verification**: FORM-DES-006 accessible
  - **Notes**: _____________________________________________

☐ **Item 4.3**: Collaborative note-taking tool set up
  - **Expected Outcome**: Shared document (Google Docs, Notion, etc.) for real-time notes
  - **Verification**: Link shared with attendees; editing permissions confirmed
  - **Notes**: _____________________________________________

☐ **Item 4.4**: Presentation slides prepared (if using slides)
  - **Expected Outcome**: Summary slides for each design area highlighting key decisions
  - **Verification**: Slides cover architecture pattern, tech stack, ERD, key screens, component list
  - **Notes**: _____________________________________________

☐ **Item 4.5**: Screen sharing tested with all diagrams and prototype
  - **Expected Outcome**: Component diagrams, ERD, mockups, prototype all display correctly
  - **Verification**: Dry-run screen share; check resolution and readability
  - **Notes**: _____________________________________________

☐ **Item 4.6**: SRS and user stories accessible for cross-reference during meeting
  - **Expected Outcome**: Requirements documents available for traceability verification
  - **Verification**: SRS document open or bookmarked for quick access
  - **Notes**: _____________________________________________

### Section 5: Facilitator Preparation (day of meeting)

☐ **Item 5.1**: Tech Lead has reviewed all design documents personally
  - **Expected Outcome**: Facilitator can speak to any design decision and answer questions
  - **Verification**: Self-assessment: can explain each component without referencing docs
  - **Notes**: _____________________________________________

☐ **Item 5.2**: Known issues or open questions documented for discussion
  - **Expected Outcome**: List of items needing group decision prepared
  - **Verification**: Issues list ready to present during meeting
  - **Notes**: _____________________________________________

☐ **Item 5.3**: Parking lot list prepared for off-topic items
  - **Expected Outcome**: Section in collaborative notes for deferring non-review topics
  - **Verification**: "Parking Lot" section added to meeting notes document
  - **Notes**: _____________________________________________

---

## Completion Criteria

This checklist is complete when:

- ✅ All design documents pass their respective completeness checklists
- ✅ Meeting scheduled with all mandatory attendees confirmed
- ✅ Materials distributed 2+ days in advance
- ✅ Review tools and presentation prepared
- ✅ Facilitator has personally reviewed all documents

**Completed By**: _________________ **Role**: Tech Lead **Date**: _________

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Key attendee can't make the scheduled time | Reschedule if CTO; proceed without optional attendees; collect async feedback |
| Design documents not complete in time | Postpone review; partial reviews waste everyone's time |
| Prototype link doesn't work for external attendees | Export PDF/video walkthrough as backup; test with guest access |
| Too many documents for attendees to pre-read | Create 2-page executive summary highlighting key decisions and areas needing input |
| Meeting room AV equipment not working | Test day before; have backup laptop and hotspot ready |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-13 | System | Initial checklist created |

---

**Document ID**: CHECK-DES-005-v1.0.0 | **Tier**: 4 - Operational Controls
