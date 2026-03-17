# Low-Level Design Completeness Checklist

**Document ID**: CHECK-DES-004-v1.0.0
**Version**: 1.0.0
**Effective Date**: 2026-02-13
**Review Date**: 2027-02-13
**Department**: Design / Development
**Parent WI**: WI-DES-004 (Low-Level Design)
**Approved By**: [Pending]

---

## Purpose

This checklist ensures all required low-level design activities from WI-DES-004 are completed before proceeding to design review. It verifies that component specifications, class diagrams, algorithms, interfaces, error handling, and configuration are documented at implementation-ready detail.

**Use this checklist when:**
- LLD document draft is believed to be complete
- Before submitting LLD for design review (WI-DES-005)
- When reviewing another developer's LLD

**Time Required**: 30-45 minutes

---

## Prerequisites

Before starting this checklist, ensure you have:

- ☑ Architecture Document (WI-DES-001) completed
- ☑ Database Schema and API Specification (WI-DES-002) completed
- ☑ UI/UX Designs (WI-DES-003) completed
- ☑ LLD Document draft (TMPL-LLD-001)

---

## Checklist Items

### Section 1: Component Specifications (Step 4.1)

☐ **Item 1.1**: Every architecture component has a detailed LLD specification
  - **Expected Outcome**: Each component from architecture diagram has corresponding LLD section
  - **Verification**: Cross-reference component list from Architecture Document
  - **Notes**: _____________________________________________

☐ **Item 1.2**: Component responsibilities are clear and non-overlapping
  - **Expected Outcome**: Each component has distinct responsibilities; no ambiguity about ownership
  - **Verification**: No two components share the same responsibility
  - **Notes**: _____________________________________________

☐ **Item 1.3**: Sub-modules identified for large components
  - **Expected Outcome**: Components with 5+ classes broken into logical modules
  - **Verification**: Module hierarchy diagram shows clear organization
  - **Notes**: _____________________________________________

☐ **Item 1.4**: Component dependencies documented
  - **Expected Outcome**: Each component lists what it depends on and what depends on it
  - **Verification**: No circular dependencies; dependency graph is a DAG
  - **Notes**: _____________________________________________

### Section 2: Class Diagrams & Data Structures (Step 4.2)

☐ **Item 2.1**: Classes defined with properties, methods, and access modifiers
  - **Expected Outcome**: Each class has complete specification including types and visibility
  - **Verification**: No methods without return types; no properties without data types
  - **Notes**: _____________________________________________

☐ **Item 2.2**: Class relationships defined (inheritance, composition, association)
  - **Expected Outcome**: UML relationships documented for all class interactions
  - **Verification**: Relationships match database schema foreign keys
  - **Notes**: _____________________________________________

☐ **Item 2.3**: Interfaces/contracts defined for polymorphic behavior
  - **Expected Outcome**: Interfaces defined where multiple implementations are expected
  - **Verification**: Interface methods are clear and implementable
  - **Notes**: _____________________________________________

☐ **Item 2.4**: DTOs defined matching API request/response contracts
  - **Expected Outcome**: Input and output data shapes documented with validation rules
  - **Verification**: DTOs match API specification from WI-DES-002
  - **Notes**: _____________________________________________

☐ **Item 2.5**: Data structures match database schema and API contracts
  - **Expected Outcome**: Class properties align with database columns; DTOs match API bodies
  - **Verification**: Cross-reference with TMPL-DB-001 and FORM-DES-002
  - **Notes**: _____________________________________________

### Section 3: Algorithms & Business Logic (Step 4.3)

☐ **Item 3.1**: Complex business logic documented in pseudocode
  - **Expected Outcome**: Any logic more complex than CRUD has pseudocode specification
  - **Verification**: Pseudocode is clear enough for any developer to implement
  - **Notes**: _____________________________________________

☐ **Item 3.2**: Business rules from requirements traced to implementation location
  - **Expected Outcome**: Each business rule maps to specific class.method
  - **Verification**: No business rule left unimplemented
  - **Notes**: _____________________________________________

☐ **Item 3.3**: State machines documented for entities with lifecycle states
  - **Expected Outcome**: States, transitions, conditions, and side effects defined
  - **Verification**: State machine covers all valid transitions; no dead-end states
  - **Notes**: _____________________________________________

☐ **Item 3.4**: Edge cases identified and handled
  - **Expected Outcome**: Each algorithm has edge case table (empty input, max values, etc.)
  - **Verification**: Edge cases have defined handling behavior
  - **Notes**: _____________________________________________

☐ **Item 3.5**: Calculation formulas documented with examples
  - **Expected Outcome**: Any pricing, scoring, or aggregation formulas fully specified
  - **Verification**: Sample data produces expected output when formula applied
  - **Notes**: _____________________________________________

### Section 4: Component Interfaces (Step 4.4)

☐ **Item 4.1**: Public interface documented for each component
  - **Expected Outcome**: All public methods with parameters, return types, and descriptions
  - **Verification**: Consumers of each component can implement calls from documentation
  - **Notes**: _____________________________________________

☐ **Item 4.2**: Error cases specified for each public method
  - **Expected Outcome**: Possible exceptions/errors listed with conditions
  - **Verification**: Each method documents what can go wrong and how it's signaled
  - **Notes**: _____________________________________________

☐ **Item 4.3**: Event interfaces documented (if event-driven)
  - **Expected Outcome**: Events published and consumed listed with payloads
  - **Verification**: Event publishers and consumers are consistent
  - **Notes**: _____________________________________________

☐ **Item 4.4**: Internal interfaces documented for module boundaries
  - **Expected Outcome**: Cross-module calls documented even within same component
  - **Verification**: Module boundaries are clear; internal dependencies visible
  - **Notes**: _____________________________________________

### Section 5: Error Handling (Step 4.5)

☐ **Item 5.1**: Error categories defined with HTTP status codes
  - **Expected Outcome**: Validation, auth, not found, conflict, external, internal errors categorized
  - **Verification**: Error categories match standard error response format from API spec
  - **Notes**: _____________________________________________

☐ **Item 5.2**: Retry strategy defined for external service calls
  - **Expected Outcome**: Max retries, backoff type, circuit breaker thresholds documented
  - **Verification**: Retry-eligible vs non-retriable errors distinguished
  - **Notes**: _____________________________________________

☐ **Item 5.3**: Logging requirements specified
  - **Expected Outcome**: Log levels, what to log, what NOT to log (secrets), format defined
  - **Verification**: Sensitive data (passwords, tokens) explicitly listed as DO NOT LOG
  - **Notes**: _____________________________________________

### Section 6: Configuration (Step 4.6)

☐ **Item 6.1**: All environment variables listed with types and defaults
  - **Expected Outcome**: Every config value needed by this component is documented
  - **Verification**: Developer can set up component from config documentation alone
  - **Notes**: _____________________________________________

☐ **Item 6.2**: Sensitive variables identified (secrets, API keys)
  - **Expected Outcome**: Secrets marked; guidance for secure storage provided
  - **Verification**: No secrets have hardcoded default values
  - **Notes**: _____________________________________________

☐ **Item 6.3**: Configuration loading order documented
  - **Expected Outcome**: Priority: env vars > .env file > config files > defaults
  - **Verification**: Loading order is consistent across all components
  - **Notes**: _____________________________________________

### Section 7: Sequence Diagrams (Step 4.7)

☐ **Item 7.1**: Sequence diagrams created for all multi-component interactions
  - **Expected Outcome**: Complex flows showing message passing between components
  - **Verification**: At minimum: authentication flow, primary CRUD, one complex workflow
  - **Notes**: _____________________________________________

☐ **Item 7.2**: Error/alternative flows included in diagrams
  - **Expected Outcome**: Alt/else blocks showing error paths
  - **Verification**: At least 1 error scenario per diagram
  - **Notes**: _____________________________________________

☐ **Item 7.3**: Async operations clearly marked
  - **Expected Outcome**: Synchronous vs asynchronous calls distinguished
  - **Verification**: Async calls use dashed arrows or explicit notation
  - **Notes**: _____________________________________________

### Section 8: Overall Quality

☐ **Item 8.1**: A developer can implement from this LLD without guessing
  - **Expected Outcome**: No ambiguous specifications; all decisions made
  - **Verification**: Have a developer not involved in design review the LLD for clarity
  - **Notes**: _____________________________________________

☐ **Item 8.2**: Each component is independently unit-testable
  - **Expected Outcome**: Dependencies are injectable; no hard-coded external calls
  - **Verification**: Testing considerations section filled out per component
  - **Notes**: _____________________________________________

☐ **Item 8.3**: Naming conventions consistent across all components
  - **Expected Outcome**: Classes, methods, variables follow established conventions
  - **Verification**: Naming matches database schema, API spec, and UI mockup labels
  - **Notes**: _____________________________________________

---

## Completion Criteria

This checklist is complete when:

- ✅ All items checked (or marked ❌ if not applicable with justification)
- ✅ LLD Document (TMPL-LLD-001) fully populated for all components
- ✅ Class diagrams and sequence diagrams created
- ✅ Implementing developer(s) have reviewed and understand the design
- ✅ Ready for design review (WI-DES-005)

**Completed By**: _________________ **Role**: _________________ **Date**: _________

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| LLD too detailed (over-specifying simple CRUD) | Focus detail on complex logic; reference patterns for standard operations |
| Class design doesn't match API contracts | Cross-reference with TMPL-DB-001 and FORM-DES-002; resolve discrepancies |
| Developers say LLD is unclear | Add code examples; walk through with developer and capture questions |
| Missing edge cases discovered during review | Add edge case table to each algorithm; have QA review for missing scenarios |
| LLD scope too large for one document | Split into multiple LLD docs per component; create index document |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-13 | System | Initial checklist created |

---

**Document ID**: CHECK-DES-004-v1.0.0 | **Tier**: 4 - Operational Controls
