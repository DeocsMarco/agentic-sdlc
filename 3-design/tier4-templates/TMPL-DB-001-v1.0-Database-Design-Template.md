# Database Design Document Template

**Document ID**: TMPL-DB-001-v1.0.0
**Version**: 1.0.0
**Effective Date**: 2026-02-13
**Review Date**: 2027-02-13
**Department**: Design / Development
**Parent WI**: WI-DES-002 (Database & API Design)
**Approved By**: [Pending]

---

## Purpose

This template provides the standard structure for creating database design documents. It covers schema definitions, entity relationships, data models, and API specifications to ensure comprehensive and consistent data architecture documentation.

**Completed By**: Tech Lead, Backend Developer
**Approver**: Tech Lead
**Time Required**: 3-5 days (iterative)

---

## Instructions

1. Complete all sections, replacing placeholder content with project-specific details
2. Create ERD diagram using a diagramming tool and attach/link
3. Define all tables before creating relationships
4. Ensure API endpoints align with database entities
5. Submit for review once all sections are complete

**Important**: Database design directly drives API design. Complete schema first, then define API endpoints.

---

## Document Header

| Field | Value |
|-------|-------|
| **Project Name** | ________________________________ |
| **Database Type** | ☐ PostgreSQL ☐ MySQL ☐ MongoDB ☐ Other: ______ |
| **API Style** | ☐ REST ☐ GraphQL ☐ gRPC ☐ Other: ______ |
| **Author** | ________________________________ |
| **Date Created** | ________________________________ |
| **Status** | ☐ Draft ☐ In Review ☐ Approved ☐ Baselined |

---

## 1. Data Model Overview

_Provide a high-level summary of the data architecture, including entity count, primary relationships, and design philosophy._

_______________________________________________________________
_______________________________________________________________
_______________________________________________________________

---

## 2. Entity Definitions

_For each business entity, complete the following block. Copy as needed._

### Entity: [Entity Name]

**Description**: ________________________________

**Business Rules**:
1. _______________________________________________
2. _______________________________________________

**Lifecycle States** (if applicable):
- ☐ [State 1] → [State 2] (condition: _____________)
- ☐ [State 2] → [State 3] (condition: _____________)

---

## 3. Table Definitions

_For each database table, complete the following block. Copy as needed._

### Table: [table_name]

**Purpose**: ________________________________

| Column | Data Type | Null? | Default | Constraints | Description |
|--------|-----------|-------|---------|-------------|-------------|
| id | UUID/INT | No | Auto | PRIMARY KEY | Unique identifier |
| | | | | | |
| | | | | | |
| | | | | | |
| created_at | TIMESTAMP | No | NOW() | | Record creation time |
| updated_at | TIMESTAMP | No | NOW() | | Last modification time |

**Indexes**:

| Index Name | Columns | Type | Purpose |
|-----------|---------|------|---------|
| pk_[table]_id | id | PRIMARY | Primary key |
| idx_[table]_[col] | | ☐ UNIQUE ☐ INDEX ☐ FULLTEXT | |
| | | ☐ UNIQUE ☐ INDEX ☐ FULLTEXT | |

---

## 4. Entity Relationship Diagram

_Insert or link ERD below._

**Diagram**: [Attach image or link to dbdiagram.io / draw.io / Lucidchart]

**Notation Used**: ☐ Crow's Foot ☐ Chen ☐ UML ☐ Other: ______

---

## 5. Relationships

| Entity A | Relationship | Entity B | FK Column | Cascade Rules |
|----------|-------------|----------|-----------|---------------|
| | ☐ 1:1 ☐ 1:N ☐ M:N | | | ON DELETE: ☐ CASCADE ☐ SET NULL ☐ RESTRICT |
| | ☐ 1:1 ☐ 1:N ☐ M:N | | | ON DELETE: ☐ CASCADE ☐ SET NULL ☐ RESTRICT |
| | ☐ 1:1 ☐ 1:N ☐ M:N | | | ON DELETE: ☐ CASCADE ☐ SET NULL ☐ RESTRICT |

**Junction Tables** (for M:N relationships):

| Junction Table | FK 1 | FK 2 | Additional Columns |
|---------------|------|------|--------------------|
| | | | |

---

## 6. Normalization Notes

**Normalization Level**: ☐ 1NF ☐ 2NF ☐ 3NF ☐ BCNF

**Intentional Denormalization** (if any):

| Table | Column(s) | Reason | Performance Impact |
|-------|-----------|--------|--------------------|
| | | | |

---

## 7. API Endpoint Specification

### 7.1 Resource: [resource_name]

**Base URL**: `/api/v1/[resource]`

| Method | Endpoint | Description | Auth Required | Roles |
|--------|----------|-------------|---------------|-------|
| GET | /api/v1/[resource] | List all (paginated) | ☐ Yes ☐ No | |
| GET | /api/v1/[resource]/:id | Get single item | ☐ Yes ☐ No | |
| POST | /api/v1/[resource] | Create new item | ☐ Yes ☐ No | |
| PUT | /api/v1/[resource]/:id | Update entire item | ☐ Yes ☐ No | |
| PATCH | /api/v1/[resource]/:id | Partial update | ☐ Yes ☐ No | |
| DELETE | /api/v1/[resource]/:id | Delete item | ☐ Yes ☐ No | |

**Custom Endpoints**:

| Method | Endpoint | Description | Auth Required | Roles |
|--------|----------|-------------|---------------|-------|
| | | | | |

---

### 7.2 Request/Response Formats

**Create Request**:
```json
POST /api/v1/[resource]

{
  "field1": "type (required/optional, validation)",
  "field2": "type (required/optional, validation)"
}
```

**Success Response**:
```json
{
  "id": "uuid",
  "field1": "value",
  "field2": "value",
  "createdAt": "ISO-8601",
  "updatedAt": "ISO-8601"
}
```

**List Response**:
```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

**Error Response**:
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message",
    "details": []
  }
}
```

---

### 7.3 Query Parameters (List Endpoints)

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | integer | 1 | Page number |
| limit | integer | 20 | Items per page (max: 100) |
| sort | string | created_at | Sort field |
| order | string | desc | Sort direction (asc/desc) |
| search | string | | Full-text search query |
| | | | |

---

### 7.4 Permission Matrix

| Endpoint | Method | Guest | User | Admin |
|----------|--------|-------|------|-------|
| /[resource] | GET | | | |
| /[resource] | POST | | | |
| /[resource]/:id | GET | | | |
| /[resource]/:id | PUT | | | |
| /[resource]/:id | DELETE | | | |

Legend: ✅ = Allowed | ❌ = Denied | 🔒 = Owner only

---

## 8. Data Migration Strategy [Optional]

| Step | Description | Tool/Method | Duration | Rollback |
|------|-------------|-------------|----------|----------|
| 1 | | | | |
| 2 | | | | |

---

## 9. Seed/Sample Data

| Table | Sample Records | Purpose |
|-------|---------------|---------|
| | | ☐ Development ☐ Testing ☐ Demo |
| | | ☐ Development ☐ Testing ☐ Demo |

---

## Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Author (Backend Dev) | | | |
| Reviewer (Tech Lead) | | | |
| Approver (Tech Lead) | | | |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | [Date] | [Author] | Initial database design document |

---

**Document ID**: TMPL-DB-001-v1.0.0 | **Tier**: 4 - Operational Controls
