# Architecture & Data Design Completeness Checklist

**Document ID**: CHECK-DES-001-v2.0.0
**Version**: 2.0.0
**Effective Date**: 2026-02-27
**Review Date**: 2027-02-27
**Department**: Design / Development
**Parent WI**: WI-DES-001 (Architecture & Data Design)
**Approved By**: [Pending]

---

## Purpose

This checklist ensures all required architecture and data design activities from WI-DES-001 are completed before proceeding to UI/UX & Low-Level Design (WI-DES-003). It verifies completeness of the Architecture Document (TMPL-ARCH-001) across architecture, database schema, and API specification.

**Use this checklist when:**
- Architecture and data design drafts are believed to be complete
- Before submitting for design review (WI-DES-005)
- When onboarding a new Tech Lead to verify design state

**Time Required**: 45-60 minutes

---

## Prerequisites

- ☑ Approved SRS from Requirements Phase
- ☑ Architecture Document draft (TMPL-ARCH-001) including DB and API sections
- ☑ All architecture diagrams and ERD created
- ☑ Technology stack decisions finalized

---

## Checklist Items

### Section 1: Architecture Pattern (Step 1.1)

☐ **1.1**: Architecture pattern selected (monolith, microservices, serverless, layered, event-driven, or hybrid)
☐ **1.2**: Rationale documented explaining why this pattern was chosen given project requirements
☐ **1.3**: Tradeoffs and at least 2 alternatives considered are documented

### Section 2: Component Diagram (Step 1.2)

☐ **2.1**: All major functional areas from SRS identified as components
☐ **2.2**: Component diagram created using standard notation (UML or C4) with legend
☐ **2.3**: Component dependencies and data flow direction documented; no orphan components

### Section 3: Technology Stack (Step 1.3)

☐ **3.1**: Frontend technology stack fully specified with versions and justifications
☐ **3.2**: Backend technology stack fully specified with versions and justifications
☐ **3.3**: Database and storage technologies specified and aligned with data requirements
☐ **3.4**: DevOps/infrastructure tools specified and compatible with stack
☐ **3.5**: Team readiness assessed; training plan for any "New" technologies
☐ **3.6**: Technology choices approved by CTO

### Section 4: Infrastructure Design (Step 1.4)

☐ **4.1**: All environments defined (Development, Staging, Production) with resources and access
☐ **4.2**: Infrastructure diagram created with security boundaries
☐ **4.3**: Resource specifications and cost estimates documented within budget
☐ **4.4**: Auto-scaling rules defined (if applicable)

### Section 5: Integration Points (Step 1.5)

☐ **5.1**: All external integrations listed with method, authentication, and data format
☐ **5.2**: Integration risks identified with probability/impact and mitigation plans
☐ **5.3**: Fallback/error handling defined for each external dependency (timeout, retry, fallback)
☐ **5.4**: Integration diagram created showing system boundary and external systems

### Section 6: Security Architecture (Step 1.6)

☐ **6.1**: Authentication mechanism selected and documented (method, password policy, MFA, session)
☐ **6.2**: Authorization model defined with roles and permissions matrix
☐ **6.3**: Data protection measures specified (encryption at rest/in transit, key management)
☐ **6.4**: Security controls addressed (input validation, injection prevention, XSS, CSRF, rate limiting, audit logging)
☐ **6.5**: Compliance requirements identified and addressed (GDPR, HIPAA, PCI-DSS)

### Section 7: Deployment Architecture (Step 1.7)

☐ **7.1**: Deployment diagram created showing all environments
☐ **7.2**: Deployment process documented step by step with CI/CD pipeline
☐ **7.3**: Rollback procedure defined with target time
☐ **7.4**: Zero-downtime strategy selected (if required)

### Section 8: Database Schema (Steps 1.8-1.9)

☐ **8.1**: All entities from SRS requirements identified and modeled as tables
☐ **8.2**: All columns defined with appropriate data types, nullability, defaults, and constraints
☐ **8.3**: Primary keys defined for all tables
☐ **8.4**: Normalization applied to 3NF (or denormalization justified with documentation)
☐ **8.5**: Indexes planned for query performance (PK, FK, unique, composite)
☐ **8.6**: Constraints defined (NOT NULL, UNIQUE, CHECK, DEFAULT)
☐ **8.7**: Entity definitions include business rules and descriptions
☐ **8.8**: Validation rules documented for all constrained attributes
☐ **8.9**: ERD diagram created showing all entities, relationships, and cardinality
☐ **8.10**: Foreign keys specified with cascade rules (CASCADE, SET NULL, RESTRICT)
☐ **8.11**: M:N relationships resolved with junction tables
☐ **8.12**: No orphan entities (all connected to at least one other)

### Section 9: API Design (Steps 1.10-1.12)

☐ **9.1**: All primary entities have CRUD API endpoints
☐ **9.2**: Custom endpoints defined for non-CRUD actions
☐ **9.3**: API naming follows REST/GraphQL conventions (plural nouns, versioned /v1/)
☐ **9.4**: Query parameters defined for list endpoints (pagination, filtering, sorting)
☐ **9.5**: Request formats documented for all endpoints with field types and validation
☐ **9.6**: Response formats documented for all endpoints
☐ **9.7**: Error response format standardized with codes and messages
☐ **9.8**: HTTP status codes correctly mapped
☐ **9.9**: Authentication mechanism documented with flow (login → token → requests)
☐ **9.10**: Permission matrix created for all endpoints × roles
☐ **9.11**: Rate limiting defined with values specified
☐ **9.12**: OpenAPI/Swagger specification created or planned

### Section 10: Document Quality

☐ **10.1**: Non-functional requirements traceability matrix completed
☐ **10.2**: Architecture decisions log maintained (at least 3-5 key decisions)
☐ **10.3**: Risks and assumptions documented (at least 3 of each)

---

## Completion Criteria

- ✅ All items checked (or marked ❌ with justification)
- ✅ Architecture Document (TMPL-ARCH-001) fully populated including DB and API sections
- ✅ All diagrams created and attached (component, infrastructure, deployment, ERD, integration)
- ✅ CTO has reviewed technology stack choices
- ✅ Frontend developer has reviewed API response shapes
- ✅ Document ready for design review (WI-DES-005)

**Completed By**: _________________ **Role**: _________________ **Date**: _________

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Can't decide between architecture patterns | Conduct 1-2 day spike/PoC comparing approaches against key NFRs |
| Team lacks expertise in selected technology | Add training timeline; consider pairing with experienced consultant |
| Infrastructure cost exceeds budget | Review resource sizing, consider managed services, reserved instances |
| Schema doesn't match user stories | Go back to each user story, list data needed, verify table/column exists |
| Over-normalized schema (too many joins) | Identify top 5 queries, denormalize with documented justification |
| API endpoint naming inconsistent | Adopt naming convention, apply uniformly, have second person review |
| Frontend says API doesn't return needed data | Include frontend dev in API design review; consider BFF pattern |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-13 | System | Initial checklist created |
| 2.0.0 | 2026-02-27 | SOP Trim | Merged CHECK-DES-002 (Database & API Design Checklist) into this document; added Sections 8-9 for DB/API verification |

---

**Document ID**: CHECK-DES-001-v2.0.0 | **Tier**: 4 - Operational Controls
