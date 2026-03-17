# Feature Ticket Template (Linear)

This is the structure the planning agent follows when creating tickets.

---

## [FEATURE-XXX] Title

### Description
<!-- Clear description of what needs to be built -->

### User Story
As a [user type], I want to [action] so that [benefit].

### Acceptance Criteria
<!-- Must be testable — QA agent validates against these -->
- [ ] Given [context], when [action], then [expected result]
- [ ] Given [context], when [action], then [expected result]
- [ ] Given [context], when [action], then [expected result]

### Technical Context
<!-- Gathered by planning agent from docs, codebase, dev consultations -->
- **Relevant files/modules:** 
- **Existing patterns to follow:** 
- **API endpoints affected:** 
- **Database changes:** 
- **Environment variables:** 

### Feature Branch
`feature/[ticket-id]-[short-description]`

### Dependencies
<!-- Other tickets that must be completed first -->
- None / [FEATURE-XXX]

### Scope
<!-- What's included and what's explicitly excluded -->
**In scope:**
- 

**Out of scope:**
- 

### Sprint Position
<!-- Where this sits in the sprint sequence -->
Priority: P1 / P2 / P3
Sequence: [N] of [total]

### Estimated Scope
Small (< 1 day) / Medium (1-3 days) / Large (3+ days)

---

### Linear Status Flow
```
Draft → Ready for Review → Ready for Dev → In Progress → In Review → In QA → Done
                                                ↑                       |
                                                └───────────────────────┘
                                                     (if QA fails)
```
