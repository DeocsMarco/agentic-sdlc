# Database & API Design Completeness Checklist

**Document ID**: CHECK-DES-002-v1.0.0
**Version**: 1.0.0
**Effective Date**: 2026-02-13
**Review Date**: 2027-02-13
**Department**: Design / Development
**Parent WI**: WI-DES-002 (Database & API Design)
**Approved By**: [Pending]

---

## Purpose

This checklist ensures all required database and API design activities from WI-DES-002 are completed before proceeding to UI/UX Design (WI-DES-003). It verifies completeness of the Database Design Document (TMPL-DB-001) across all seven procedure steps.

**Use this checklist when:**
- Database design document draft is believed to be complete
- Before submitting database/API design for design review (WI-DES-005)
- When reviewing another developer's database design

**Time Required**: 30-45 minutes

---

## Prerequisites

Before starting this checklist, ensure you have:

- ☑ Approved SRS from Requirements Phase
- ☑ Architecture Document completed (WI-DES-001)
- ☑ Database Design Document draft (TMPL-DB-001)
- ☑ ERD diagram created

---

## Checklist Items

### Section 1: Database Schema (Step 2.1)

☐ **Item 1.1**: All entities from SRS requirements identified and modeled as tables
  - **Expected Outcome**: Every noun/data object from user stories has a corresponding table
  - **Verification**: Cross-reference user stories against table list — no missing entities
  - **Notes**: _____________________________________________

☐ **Item 1.2**: All columns defined with appropriate data types
  - **Expected Outcome**: Each column has name, data type, nullability, default, constraints
  - **Verification**: No columns with generic type (e.g., just "TEXT" for everything)
  - **Notes**: _____________________________________________

☐ **Item 1.3**: Primary keys defined for all tables
  - **Expected Outcome**: Every table has a primary key (auto-increment INT or UUID)
  - **Verification**: No table without PK constraint
  - **Notes**: _____________________________________________

☐ **Item 1.4**: Normalization applied to 3NF (or justified denormalization)
  - **Expected Outcome**: No repeating groups (1NF), no partial dependencies (2NF), no transitive dependencies (3NF)
  - **Verification**: Denormalization decisions documented with performance justification
  - **Notes**: _____________________________________________

☐ **Item 1.5**: Indexes planned for query performance
  - **Expected Outcome**: PK indexes (auto), FK indexes, unique indexes, composite indexes for common queries
  - **Verification**: Index table completed for each table with purpose documented
  - **Notes**: _____________________________________________

☐ **Item 1.6**: Constraints defined (NOT NULL, UNIQUE, CHECK, DEFAULT)
  - **Expected Outcome**: Business validation rules enforced at database level where appropriate
  - **Verification**: Required fields have NOT NULL, unique fields have UNIQUE constraint
  - **Notes**: _____________________________________________

### Section 2: Data Models (Step 2.2)

☐ **Item 2.1**: Entity definitions include business rules and descriptions
  - **Expected Outcome**: Each entity has description, business rules, and lifecycle states
  - **Verification**: At least 1-2 business rules per entity
  - **Notes**: _____________________________________________

☐ **Item 2.2**: Validation rules documented for all constrained attributes
  - **Expected Outcome**: Format rules, range rules, required vs optional, allowed values
  - **Verification**: Email fields have format validation, numeric fields have ranges
  - **Notes**: _____________________________________________

☐ **Item 2.3**: Data types are appropriate and specific
  - **Expected Outcome**: VARCHAR with max lengths, DECIMAL for currency, ENUM for fixed values
  - **Verification**: No overly generic types without justification
  - **Notes**: _____________________________________________

### Section 3: ERD (Step 2.3)

☐ **Item 3.1**: ERD diagram created showing all entities and relationships
  - **Expected Outcome**: Visual diagram with standard notation (Crow's Foot, Chen, or UML)
  - **Verification**: All tables from schema appear in ERD; legend included
  - **Notes**: _____________________________________________

☐ **Item 3.2**: Relationships defined with cardinality (1:1, 1:N, M:N)
  - **Expected Outcome**: Each relationship line shows cardinality at both ends
  - **Verification**: No unmarked relationships
  - **Notes**: _____________________________________________

☐ **Item 3.3**: Foreign keys specified with cascade rules
  - **Expected Outcome**: FK columns, referenced tables, ON DELETE/UPDATE behavior
  - **Verification**: Each FK has explicit cascade rule (CASCADE, SET NULL, RESTRICT)
  - **Notes**: _____________________________________________

☐ **Item 3.4**: M:N relationships resolved with junction tables
  - **Expected Outcome**: Junction tables with composite PKs and any relationship attributes
  - **Verification**: No M:N relationships without junction table
  - **Notes**: _____________________________________________

☐ **Item 3.5**: No orphan entities (all connected to at least one other)
  - **Expected Outcome**: Every entity participates in at least one relationship
  - **Verification**: Visual check of ERD for isolated entities
  - **Notes**: _____________________________________________

### Section 4: API Endpoints (Step 2.4)

☐ **Item 4.1**: All primary entities have CRUD API endpoints
  - **Expected Outcome**: GET (list), GET (single), POST, PUT/PATCH, DELETE for each resource
  - **Verification**: Endpoint table completed for each resource
  - **Notes**: _____________________________________________

☐ **Item 4.2**: Custom endpoints defined for non-CRUD actions
  - **Expected Outcome**: Actions like password reset, archive, status change have endpoints
  - **Verification**: All user stories with special actions have corresponding API operations
  - **Notes**: _____________________________________________

☐ **Item 4.3**: API naming follows REST conventions
  - **Expected Outcome**: Plural nouns for collections, consistent URL structure, versioned (/v1/)
  - **Verification**: No verbs in URLs (except custom actions), consistent pluralization
  - **Notes**: _____________________________________________

☐ **Item 4.4**: Query parameters defined for list endpoints
  - **Expected Outcome**: Pagination, filtering, sorting, search parameters documented
  - **Verification**: All list endpoints support page/limit at minimum
  - **Notes**: _____________________________________________

### Section 5: API Contracts (Step 2.5)

☐ **Item 5.1**: Request formats documented for all endpoints
  - **Expected Outcome**: JSON body structure with field types, required/optional, validation
  - **Verification**: Each POST/PUT/PATCH endpoint has request body example
  - **Notes**: _____________________________________________

☐ **Item 5.2**: Response formats documented for all endpoints
  - **Expected Outcome**: Success response with all fields; list response with pagination
  - **Verification**: Each endpoint has success response example
  - **Notes**: _____________________________________________

☐ **Item 5.3**: Error response format standardized
  - **Expected Outcome**: Consistent error object with code, message, details array
  - **Verification**: Standard error format documented; error codes listed
  - **Notes**: _____________________________________________

☐ **Item 5.4**: HTTP status codes correctly mapped
  - **Expected Outcome**: 200/201/204 for success; 400/401/403/404/409/500 for errors
  - **Verification**: Each endpoint documents applicable status codes
  - **Notes**: _____________________________________________

### Section 6: Authentication & Authorization (Step 2.6)

☐ **Item 6.1**: Authentication mechanism documented with flow
  - **Expected Outcome**: Auth flow (login → token → subsequent requests) fully specified
  - **Verification**: Auth endpoints documented (login, register, refresh, logout)
  - **Notes**: _____________________________________________

☐ **Item 6.2**: Permission matrix created for all endpoints
  - **Expected Outcome**: Table showing each endpoint × role with allow/deny
  - **Verification**: No endpoints without authorization rules
  - **Notes**: _____________________________________________

☐ **Item 6.3**: Rate limiting defined
  - **Expected Outcome**: Rate limit rules per user/IP with 429 response documented
  - **Verification**: Rate limit values specified
  - **Notes**: _____________________________________________

### Section 7: API Documentation (Step 2.7)

☐ **Item 7.1**: OpenAPI/Swagger specification created (or planned)
  - **Expected Outcome**: openapi.yaml/json file covering all endpoints
  - **Verification**: Spec validates with OpenAPI linter
  - **Notes**: _____________________________________________

☐ **Item 7.2**: Interactive API documentation available (or planned)
  - **Expected Outcome**: Swagger UI or equivalent for developers to explore API
  - **Verification**: Documentation URL or plan documented
  - **Notes**: _____________________________________________

---

## Completion Criteria

This checklist is complete when:

- ✅ All items checked (or marked ❌ if not applicable with justification)
- ✅ Database Design Document (TMPL-DB-001) fully populated
- ✅ ERD diagram created and attached
- ✅ All API endpoints documented with contracts
- ✅ Document ready for design review (WI-DES-005)

**Completed By**: _________________ **Role**: _________________ **Date**: _________

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Schema doesn't match user stories | Go back to each user story, list data needed, verify table/column exists |
| Over-normalized schema (too many joins) | Identify top 5 queries, denormalize for performance with documented justification |
| API endpoint naming inconsistent | Adopt naming convention doc, apply uniformly, have second person review |
| Missing error cases | Walk through each endpoint asking "what can go wrong?" for each step |
| Frontend says API doesn't return needed data | Include frontend dev in API design review; consider BFF pattern |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-13 | System | Initial checklist created |

---

**Document ID**: CHECK-DES-002-v1.0.0 | **Tier**: 4 - Operational Controls
