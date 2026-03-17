# SRS Completeness Checklist

**Document ID**: CHECK-REQ-003-v1.0.0
**Version**: 1.0.0
**Effective Date**: 2026-02-14
**Review Date**: 2027-02-14
**Department**: Project Management / Business Analysis
**Parent WI**: WI-REQ-003 (SRS Development)
**Approved By**: [Pending]

---

## Purpose

This checklist ensures the System Requirements Specification (SRS) document is complete and ready for technical feasibility review (WI-REQ-004). It verifies all required sections are populated, cross-references are correct, and the document meets quality standards.

**Use this checklist when:**
- SRS draft is believed to be complete
- Before submitting SRS for technical review
- After incorporating review feedback to verify completeness

**Time Required**: 30-45 minutes

---

## Prerequisites

Before starting this checklist, ensure you have:

- ☑ SRS Document draft (TMPL-SRS-001)
- ☑ Requirements Document (from WI-REQ-001)
- ☑ User Stories (from WI-REQ-002)
- ☑ Requirements Traceability Matrix (FORM-REQ-003)

---

## Checklist Items

### Section 1: Introduction and System Overview (Step 3.1)

☐ **Item 1.1**: System purpose clearly stated
  - **Expected Outcome**: 1-2 paragraphs explaining what problem the system solves
  - **Verification**: A new reader can understand the system's purpose
  - **Notes**: _____________________________________________

☐ **Item 1.2**: System scope defined with explicit inclusions and exclusions
  - **Expected Outcome**: Clear boundaries of what is and isn't in scope
  - **Verification**: Scope aligns with approved Project Scope Document
  - **Notes**: _____________________________________________

☐ **Item 1.3**: System context diagram created
  - **Expected Outcome**: Visual showing system boundary, actors, and external systems
  - **Verification**: All user types and external systems from requirements are shown
  - **Notes**: _____________________________________________

☐ **Item 1.4**: Definitions, acronyms, and abbreviations documented
  - **Expected Outcome**: Glossary of all domain-specific and technical terms
  - **Verification**: No undefined acronyms used in the document
  - **Notes**: _____________________________________________

☐ **Item 1.5**: References listed
  - **Expected Outcome**: All related documents referenced (Charter, Scope, Standards)
  - **Verification**: References are up to date with correct versions
  - **Notes**: _____________________________________________

### Section 2: Functional Requirements and Use Cases (Step 3.2)

☐ **Item 2.1**: All functional requirements have use case specifications
  - **Expected Outcome**: Use cases for every major functional area
  - **Verification**: Cross-reference functional requirements list against use cases
  - **Notes**: _____________________________________________

☐ **Item 2.2**: Use cases include main flow and alternate/exception flows
  - **Expected Outcome**: Happy path + at least 1 alternate flow per use case
  - **Verification**: Spot-check 5 use cases for alternate flows
  - **Notes**: _____________________________________________

☐ **Item 2.3**: Use cases linked to source requirements and user stories
  - **Expected Outcome**: Traceability from requirement → use case → user story
  - **Verification**: Cross-references are correct and bidirectional
  - **Notes**: _____________________________________________

☐ **Item 2.4**: Use case diagrams created for each functional area
  - **Expected Outcome**: Visual showing actors, use cases, and relationships
  - **Verification**: All actors from context diagram appear in use case diagrams
  - **Notes**: _____________________________________________

### Section 3: Non-Functional Requirements (Step 3.3)

☐ **Item 3.1**: Performance requirements defined with measurable targets
  - **Expected Outcome**: Response time, throughput, resource utilization targets
  - **Verification**: Every performance NFR has a specific number and measurement method
  - **Notes**: _____________________________________________

☐ **Item 3.2**: Scalability requirements defined with growth projections
  - **Expected Outcome**: User growth, data growth, geographic expansion targets
  - **Verification**: Projections cover 1-3 year horizon
  - **Notes**: _____________________________________________

☐ **Item 3.3**: Availability requirements defined with SLA targets
  - **Expected Outcome**: Uptime, RTO, RPO, maintenance window defined
  - **Verification**: Values are realistic and agreed with client
  - **Notes**: _____________________________________________

☐ **Item 3.4**: Security requirements documented comprehensively
  - **Expected Outcome**: Authentication, authorization, encryption, compliance covered
  - **Verification**: Applicable compliance standards identified and addressed
  - **Notes**: _____________________________________________

☐ **Item 3.5**: Usability requirements specified
  - **Expected Outcome**: Accessibility, browser support, device support, localization
  - **Verification**: WCAG level specified; supported browsers and versions listed
  - **Notes**: _____________________________________________

### Section 4: Interface Requirements (Step 3.4)

☐ **Item 4.1**: User interface requirements documented
  - **Expected Outcome**: Key screens listed with layout principles and standards
  - **Verification**: Responsive design breakpoints and accessibility requirements specified
  - **Notes**: _____________________________________________

☐ **Item 4.2**: Software interface requirements documented
  - **Expected Outcome**: OS, database, library, and API dependencies listed
  - **Verification**: All external software touchpoints identified
  - **Notes**: _____________________________________________

☐ **Item 4.3**: Communication interface requirements documented
  - **Expected Outcome**: Network protocols, API protocols, data formats specified
  - **Verification**: All data exchange formats defined
  - **Notes**: _____________________________________________

### Section 5: Data Requirements (Step 3.5)

☐ **Item 5.1**: Major data entities identified with key attributes
  - **Expected Outcome**: Entity list with descriptions and relationships
  - **Verification**: Every functional area has associated data entities
  - **Notes**: _____________________________________________

☐ **Item 5.2**: Data validation and business rules documented
  - **Expected Outcome**: Rules for key fields, calculations, derived values
  - **Verification**: Rules are specific and testable
  - **Notes**: _____________________________________________

☐ **Item 5.3**: Data migration requirements documented (if applicable)
  - **Expected Outcome**: Source systems, mapping, cleansing, timeline documented
  - **Verification**: Migration approach agreed with client
  - **Notes**: _____________________________________________

☐ **Item 5.4**: Reporting and analytics requirements specified
  - **Expected Outcome**: Required reports with purpose, frequency, and audience
  - **Verification**: All reporting needs from stakeholder interviews captured
  - **Notes**: _____________________________________________

### Section 6: Integration Requirements (Step 3.6)

☐ **Item 6.1**: All external integrations documented
  - **Expected Outcome**: Integration matrix with system, direction, method, auth, format
  - **Verification**: Every integration from requirements is in the matrix
  - **Notes**: _____________________________________________

☐ **Item 6.2**: Integration error handling specified
  - **Expected Outcome**: Fallback behavior for each integration failure scenario
  - **Verification**: Every integration has timeout and retry strategy
  - **Notes**: _____________________________________________

### Section 7: Traceability (Step 3.7)

☐ **Item 7.1**: Requirements Traceability Matrix complete
  - **Expected Outcome**: Stakeholder need → requirement → user story → use case linked
  - **Verification**: No orphan items (requirements without sources or stories without requirements)
  - **Notes**: _____________________________________________

☐ **Item 7.2**: Traceability is bidirectional
  - **Expected Outcome**: Can trace forward (need → requirement) and backward (use case → need)
  - **Verification**: Spot-check 5 items tracing in both directions
  - **Notes**: _____________________________________________

### Section 8: Document Quality (Step 3.8)

☐ **Item 8.1**: Document follows TMPL-SRS-001 structure
  - **Expected Outcome**: All template sections present and properly formatted
  - **Verification**: Table of contents matches template structure
  - **Notes**: _____________________________________________

☐ **Item 8.2**: Consistent terminology throughout document
  - **Expected Outcome**: Same terms used consistently (no "user" vs "customer" vs "client" confusion)
  - **Verification**: Search for inconsistent terms
  - **Notes**: _____________________________________________

☐ **Item 8.3**: No TBD or TODO items remaining
  - **Expected Outcome**: All sections complete or explicitly marked as out of scope
  - **Verification**: Search document for "TBD", "TODO", "placeholder"
  - **Notes**: _____________________________________________

☐ **Item 8.4**: Peer review completed
  - **Expected Outcome**: Another BA or PM has reviewed the document
  - **Verification**: Review comments addressed and documented
  - **Notes**: _____________________________________________

---

## Completion Criteria

This checklist is complete when:

- ✅ All items checked (or marked ❌ if not applicable with justification)
- ✅ SRS Document (TMPL-SRS-001) fully populated
- ✅ Traceability matrix complete and verified
- ✅ Peer review completed
- ✅ Document ready for technical feasibility review (WI-REQ-004)

**Completed By**: _________________ **Role**: _________________ **Date**: _________

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Traceability gaps found | Work backward from use cases to identify missing links |
| NFRs are vague | Rewrite using pattern: "System shall [verb] [target] under [condition]" |
| Missing use case alternate flows | Ask "What if the user enters wrong data?" and "What if the system is offline?" |
| Document inconsistencies | Assign one person to do a final consistency pass |
| TBD items remaining | Resolve or explicitly defer with stakeholder agreement |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-14 | System | Initial checklist created |

---

**Document ID**: CHECK-REQ-003-v1.0.0 | **Tier**: 4 - Operational Controls
