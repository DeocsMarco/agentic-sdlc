# API Endpoint Specification Form

**Form ID**: FORM-DES-002-v1.0.0
**Version**: 1.0.0
**Effective Date**: 2026-02-13
**Review Date**: 2027-02-13
**Department**: Design / Development
**Parent WI**: WI-DES-002 (Database & API Design)
**Approved By**: [Pending]

---

## Purpose

This form captures the detailed specification for a single API endpoint or resource group. It ensures each endpoint is fully defined with request/response contracts, validation rules, error cases, and authorization before implementation begins.

**Completed By**: Backend Developer, Tech Lead
**Approver**: Tech Lead
**Time Required**: 15-30 minutes per resource

---

## Instructions

1. **Complete one form per API resource** (e.g., /users, /projects, /tasks)
2. **Define all CRUD operations** plus any custom endpoints
3. **Specify request/response bodies** with field-level detail
4. **Document all error scenarios** and corresponding status codes
5. **Include authorization rules** for each operation

**Important**: Share completed forms with frontend developers for early feedback on data shape.

---

## Form Fields

### Resource Information

| Field | Value |
|-------|-------|
| **Resource Name** | ________________________________ |
| **Base URL** | /api/v1/________________________________ |
| **Related Entity** | ________________________________ (database table) |
| **Owner** | ________________________________ (developer responsible) |

---

### Endpoints

#### Endpoint 1: List Resources

| Field | Value |
|-------|-------|
| **Method** | GET |
| **URL** | /api/v1/[resource] |
| **Description** | ________________________________ |
| **Auth Required** | ☐ Yes ☐ No |
| **Allowed Roles** | ________________________________ |

**Query Parameters**:

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| page | integer | No | 1 | Page number |
| limit | integer | No | 20 | Items per page (max 100) |
| sort | string | No | | Sort field |
| order | string | No | desc | asc or desc |
| | | | | |
| | | | | |

**Success Response** (200):
```json
{
  "data": [
    {
      "_comment": "Define fields here"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 0,
    "totalPages": 0
  }
}
```

---

#### Endpoint 2: Get Single Resource

| Field | Value |
|-------|-------|
| **Method** | GET |
| **URL** | /api/v1/[resource]/:id |
| **Description** | ________________________________ |
| **Auth Required** | ☐ Yes ☐ No |
| **Allowed Roles** | ________________________________ |

**Path Parameters**:

| Parameter | Type | Description |
|-----------|------|-------------|
| id | UUID/integer | Resource identifier |

**Success Response** (200):
```json
{
  "_comment": "Define full resource fields here"
}
```

---

#### Endpoint 3: Create Resource

| Field | Value |
|-------|-------|
| **Method** | POST |
| **URL** | /api/v1/[resource] |
| **Description** | ________________________________ |
| **Auth Required** | ☐ Yes ☐ No |
| **Allowed Roles** | ________________________________ |

**Request Body**:

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| | | ☐ Yes ☐ No | | |
| | | ☐ Yes ☐ No | | |
| | | ☐ Yes ☐ No | | |
| | | ☐ Yes ☐ No | | |

**Success Response** (201):
```json
{
  "_comment": "Define created resource fields here"
}
```

---

#### Endpoint 4: Update Resource

| Field | Value |
|-------|-------|
| **Method** | PUT / PATCH |
| **URL** | /api/v1/[resource]/:id |
| **Description** | ________________________________ |
| **Auth Required** | ☐ Yes ☐ No |
| **Allowed Roles** | ________________________________ |

**Request Body** (same as create, all fields optional for PATCH):

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| | | ☐ Yes ☐ No | | |
| | | ☐ Yes ☐ No | | |

**Success Response** (200):
```json
{
  "_comment": "Define updated resource fields here"
}
```

---

#### Endpoint 5: Delete Resource

| Field | Value |
|-------|-------|
| **Method** | DELETE |
| **URL** | /api/v1/[resource]/:id |
| **Description** | ________________________________ |
| **Auth Required** | ☐ Yes ☐ No |
| **Allowed Roles** | ________________________________ |
| **Soft Delete?** | ☐ Yes (set deleted_at) ☐ No (permanent) |

**Success Response** (204): No Content

---

#### Custom Endpoints

_Add any non-CRUD endpoints specific to this resource._

| Method | URL | Description | Auth | Roles |
|--------|-----|-------------|------|-------|
| | | | ☐ Yes ☐ No | |
| | | | ☐ Yes ☐ No | |

---

### Error Scenarios

| Scenario | Status Code | Error Code | Message |
|----------|-------------|------------|---------|
| Invalid request body | 400 | VALIDATION_ERROR | Field-specific error messages |
| Not authenticated | 401 | UNAUTHORIZED | Authentication required |
| Insufficient permissions | 403 | FORBIDDEN | You don't have access |
| Resource not found | 404 | NOT_FOUND | [Resource] not found |
| Duplicate resource | 409 | DUPLICATE | [Resource] already exists |
| | | | |

---

### Rate Limiting

| Endpoint Pattern | Limit | Window | Applies To |
|-----------------|-------|--------|------------|
| All endpoints | ____/min | 1 minute | Per user |
| POST (create) | ____/min | 1 minute | Per user |
| | | | |

---

### Notes

**Implementation Notes**:
_______________________________________________________________
_______________________________________________________________

**Dependencies on Other Resources**:
_______________________________________________________________

**Frontend Considerations**:
_______________________________________________________________

---

## Approval Section

**Specified By**:
- **Name**: ____________________
- **Role**: ____________________
- **Date**: ____________________

**Reviewed By (Frontend)**:
- **Name**: ____________________
- **Date**: ____________________
- **Feedback**: _______________________________________________

**Approved By**:
- **Name**: ____________________
- **Role**: Tech Lead
- **Date**: ____________________

---

## Validation Checklist

Before submitting this form, verify:

- [ ] All CRUD endpoints defined
- [ ] Request bodies include field types and validation rules
- [ ] Response bodies match database entity structure
- [ ] All error scenarios documented
- [ ] Authorization rules specified for each endpoint
- [ ] Rate limiting defined
- [ ] Frontend developer has reviewed response shapes

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-13 | System | Initial form created |

---

**Form ID**: FORM-DES-002-v1.0.0 | **Tier**: 4 - Operational Controls
