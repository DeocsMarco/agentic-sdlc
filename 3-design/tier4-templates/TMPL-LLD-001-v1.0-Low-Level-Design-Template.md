# Low-Level Design Document Template

**Document ID**: TMPL-LLD-001-v1.0.0
**Version**: 1.0.0
**Effective Date**: 2026-02-13
**Review Date**: 2027-02-13
**Department**: Design / Development
**Parent WI**: WI-DES-004 (Low-Level Design)
**Approved By**: [Pending]

---

## Purpose

This template provides the standard structure for creating low-level design (LLD) documents. It breaks down high-level architecture into detailed component specifications, class designs, algorithms, and interface contracts that developers can implement directly.

**Completed By**: Development Team, Tech Lead
**Approver**: Tech Lead
**Time Required**: 3-7 days (iterative, depending on complexity)

---

## Instructions

1. Complete one LLD document per major component or module
2. Reference the Architecture Document (TMPL-ARCH-001) for component context
3. Reference the Database Design (TMPL-DB-001) for data structures
4. Include pseudocode for complex business logic; skip for simple CRUD
5. Have the implementing developer(s) review before finalizing

**Important**: LLD should be detailed enough that a developer can implement without guessing. When in doubt, add more detail.

---

## Document Header

| Field | Value |
|-------|-------|
| **Project Name** | ________________________________ |
| **Component Name** | ________________________________ |
| **Parent Architecture Component** | ________________________________ |
| **Author** | ________________________________ |
| **Date Created** | ________________________________ |
| **Status** | ☐ Draft ☐ In Review ☐ Approved ☐ Baselined |

---

## 1. Component Overview

**Purpose**: ________________________________
_______________________________________________________________

**Responsibilities**:
1. _______________________________________________________________
2. _______________________________________________________________
3. _______________________________________________________________

**Out of Scope** (explicitly NOT this component's job):
1. _______________________________________________________________
2. _______________________________________________________________

**Technology**:

| Aspect | Value |
|--------|-------|
| Language | ________________________________ |
| Framework | ________________________________ |
| Key Dependencies | ________________________________ |
| Repository Path | ________________________________ |

---

## 2. Module Structure

_Break component into sub-modules._

```
[Component Name]
├── [Module 1]
│   ├── [Sub-module 1a]
│   └── [Sub-module 1b]
├── [Module 2]
│   ├── [Sub-module 2a]
│   └── [Sub-module 2b]
└── [Module 3]
```

### Module Descriptions

| Module | Responsibility | Dependencies |
|--------|---------------|--------------|
| | | |
| | | |
| | | |

---

## 3. Class / Interface Definitions

_For each significant class, complete a block below. Copy as needed._

### Class: [ClassName]

**Purpose**: ________________________________

**Properties**:

| Name | Type | Access | Default | Description |
|------|------|--------|---------|-------------|
| | | ☐ public ☐ private ☐ protected | | |
| | | ☐ public ☐ private ☐ protected | | |
| | | ☐ public ☐ private ☐ protected | | |

**Methods**:

| Name | Parameters | Return Type | Access | Description |
|------|------------|-------------|--------|-------------|
| | | | ☐ public ☐ private | |
| | | | ☐ public ☐ private | |
| | | | ☐ public ☐ private | |

**Relationships**:
- Inherits from: ________________________________
- Implements: ________________________________
- Composed of: ________________________________
- Associates with: ________________________________

---

### Interface: [IInterfaceName]

**Purpose**: ________________________________

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| | | | |
| | | | |

---

## 4. Data Transfer Objects (DTOs)

_Define input/output data shapes._

### DTO: [DTOName]

```
{
  field1: type,        // Description
  field2: type,        // Description
  field3?: type,       // Optional - Description
  nested: {
    subfield1: type    // Description
  }
}
```

**Validation Rules**:

| Field | Rule | Error Message |
|-------|------|---------------|
| | | |
| | | |

---

## 5. Algorithms & Business Logic

_Document complex algorithms in pseudocode. Skip for simple CRUD operations._

### Algorithm: [Name]

**Purpose**: ________________________________

**Inputs**:
- `param1` (type): ________________________________
- `param2` (type): ________________________________

**Output**: `returnType` — ________________________________

**Pseudocode**:
```
FUNCTION algorithmName(param1, param2):
    // Step 1: [Description]
    
    // Step 2: [Description]
    
    // Step 3: [Description]
    
    RETURN result
END FUNCTION
```

**Complexity**: Time O(____) | Space O(____)

**Edge Cases**:

| Input | Expected Output | Handling |
|-------|----------------|----------|
| Empty/null input | | |
| Maximum values | | |
| Invalid input | | |

---

## 6. State Machines (if applicable)

### State Machine: [Entity] Lifecycle

**States**:

| State | Description | Allowed Transitions |
|-------|-------------|---------------------|
| | | |
| | | |
| | | |

**Transitions**:

| From | To | Trigger | Condition | Side Effects |
|------|-----|---------|-----------|--------------|
| | | | | |
| | | | | |

**Diagram**:
```
[State A] --trigger()--> [State B] --trigger()--> [State C]
```

---

## 7. Component Interfaces

_Define how this component communicates with others._

### Exposed Interface (what this component provides)

| Method/Endpoint | Parameters | Returns | Description |
|----------------|------------|---------|-------------|
| | | | |
| | | | |

### Consumed Interface (what this component depends on)

| Service/Component | Method/Endpoint | Purpose |
|-------------------|----------------|---------|
| | | |
| | | |

### Events (if event-driven)

**Events Published**:

| Event Name | Payload | When | Consumers |
|-----------|---------|------|-----------|
| | | | |

**Events Consumed**:

| Event Name | Source | Handler | Action |
|-----------|--------|---------|--------|
| | | | |

---

## 8. Error Handling

### Error Categories for This Component

| Category | HTTP Status | Error Code | Handling |
|----------|-------------|------------|----------|
| Validation | 400 | VALIDATION_ERROR | Return field-level errors |
| Not Found | 404 | NOT_FOUND | Return resource identifier |
| Authorization | 403 | FORBIDDEN | Log attempt, return generic message |
| External Service | 502 | EXTERNAL_ERROR | Retry with backoff, log, return fallback |
| Internal | 500 | INTERNAL_ERROR | Log full error, return generic message |

### Retry Strategy (for external calls)

| Dependency | Max Retries | Backoff | Circuit Breaker Threshold |
|-----------|-------------|---------|--------------------------|
| | | ☐ Linear ☐ Exponential | ____ failures in ____ min |

---

## 9. Configuration

### Environment Variables

| Variable | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| | | ☐ Yes ☐ No | | |
| | | ☐ Yes ☐ No | | |
| | | ☐ Yes ☐ No | | |

☐ Sensitive (mark variables that contain secrets)

### Constants

| Name | Value | Description |
|------|-------|-------------|
| | | |
| | | |

---

## 10. Sequence Diagrams

_Include for complex multi-component interactions._

### Flow: [Flow Name]

**Actors/Components**: [List participants]

```
[Actor A] -> [Component B]: action()
[Component B] -> [Component C]: process()
[Component C] -> [Component B]: result
[Component B] -> [Actor A]: response
```

---

## 11. Testing Considerations

| Aspect | Approach |
|--------|----------|
| **Unit Tests** | ________________________________ |
| **Mockable Dependencies** | ________________________________ |
| **Test Data** | ________________________________ |
| **Critical Paths** | ________________________________ |

---

## Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Author (Developer) | | | |
| Reviewer (Tech Lead) | | | |
| Approver (Tech Lead) | | | |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | [Date] | [Author] | Initial low-level design document |

---

**Document ID**: TMPL-LLD-001-v1.0.0 | **Tier**: 4 - Operational Controls
