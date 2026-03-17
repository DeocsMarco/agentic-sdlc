# User Story Quality Checklist

**Document ID**: CHECK-REQ-002-v1.0.0
**Version**: 1.0.0
**Effective Date**: 2026-02-14
**Review Date**: 2027-02-14
**Department**: Project Management / Business Analysis
**Parent WI**: WI-REQ-002 (User Story Creation)
**Approved By**: [Pending]

---

## Purpose

This checklist ensures all user stories created during WI-REQ-002 meet quality standards before inclusion in the product backlog. It verifies stories follow the standard format, pass INVEST criteria, and have adequate acceptance criteria.

**Use this checklist when:**
- User story creation is complete and backlog is being finalized
- During backlog refinement sessions
- When reviewing stories created by new team members

**Time Required**: 30-45 minutes

---

## Prerequisites

Before starting this checklist, ensure you have:

- ☑ Complete set of user stories (from WI-REQ-002)
- ☑ Requirements Document for cross-reference (from WI-REQ-001)
- ☑ Access to the product backlog in PM tool

---

## Checklist Items

### Section 1: User Personas (Step 2.1)

☐ **Item 1.1**: All distinct user types identified and documented
  - **Expected Outcome**: User persona document with goals, tech proficiency, and usage frequency
  - **Verification**: Every functional area has at least one associated persona
  - **Notes**: _____________________________________________

☐ **Item 1.2**: Personas validated with client
  - **Expected Outcome**: Client confirms personas represent real user groups
  - **Verification**: Written confirmation or meeting notes documenting validation
  - **Notes**: _____________________________________________

☐ **Item 1.3**: Every functional requirement maps to at least one persona
  - **Expected Outcome**: No orphan requirements without a user persona
  - **Verification**: Cross-reference requirements list against persona assignments
  - **Notes**: _____________________________________________

### Section 2: Story Format and INVEST (Step 2.2)

☐ **Item 2.1**: All stories follow "As a [persona], I want [action], So that [benefit]" format
  - **Expected Outcome**: Consistent format across all stories
  - **Verification**: Spot-check 20% of stories for format compliance
  - **Notes**: _____________________________________________

☐ **Item 2.2**: Stories are Independent — can be developed without depending on other stories
  - **Expected Outcome**: Minimal inter-story dependencies
  - **Verification**: No story requires another specific story to be completed first (unless documented)
  - **Notes**: _____________________________________________

☐ **Item 2.3**: Stories are Negotiable — details can be refined during development
  - **Expected Outcome**: Stories describe "what" not "how"
  - **Verification**: No stories prescribe specific implementation approach
  - **Notes**: _____________________________________________

☐ **Item 2.4**: Stories are Valuable — each delivers clear business value
  - **Expected Outcome**: The "so that" clause clearly states the benefit
  - **Verification**: Remove stories where no business value can be articulated
  - **Notes**: _____________________________________________

☐ **Item 2.5**: Stories are Estimable — team can estimate effort
  - **Expected Outcome**: Stories are clear enough for the team to provide estimates
  - **Verification**: No story has "needs clarification" blocking estimation
  - **Notes**: _____________________________________________

☐ **Item 2.6**: Stories are Small — completable within one sprint
  - **Expected Outcome**: No story exceeds 13 story points
  - **Verification**: Large stories have a documented plan to split
  - **Notes**: _____________________________________________

☐ **Item 2.7**: Stories are Testable — can be verified through testing
  - **Expected Outcome**: QA can derive test cases from each story
  - **Verification**: Spot-check 10 stories: can you write a test for each?
  - **Notes**: _____________________________________________

### Section 3: Acceptance Criteria (Step 2.3)

☐ **Item 3.1**: Every story has acceptance criteria
  - **Expected Outcome**: 3-7 acceptance criteria per story
  - **Verification**: No story has zero acceptance criteria
  - **Notes**: _____________________________________________

☐ **Item 3.2**: Acceptance criteria use Given/When/Then format
  - **Expected Outcome**: Consistent testable format across all criteria
  - **Verification**: Spot-check 20% of stories for format compliance
  - **Notes**: _____________________________________________

☐ **Item 3.3**: Happy path covered in acceptance criteria
  - **Expected Outcome**: Primary success scenario documented for each story
  - **Verification**: First AC of each story covers the main success flow
  - **Notes**: _____________________________________________

☐ **Item 3.4**: Error cases and edge cases included
  - **Expected Outcome**: At least one error/edge case AC per story where applicable
  - **Verification**: Stories involving user input have validation error ACs
  - **Notes**: _____________________________________________

### Section 4: Estimation and Prioritization (Steps 2.4-2.5)

☐ **Item 4.1**: Stories estimated (story points or T-shirt sizes)
  - **Expected Outcome**: All stories have an estimate (or marked as "preliminary")
  - **Verification**: Check PM tool for missing estimates
  - **Notes**: _____________________________________________

☐ **Item 4.2**: Stories organized into epics
  - **Expected Outcome**: Every story belongs to exactly one epic
  - **Verification**: No orphan stories outside of epics
  - **Notes**: _____________________________________________

☐ **Item 4.3**: Epics have clear descriptions and business objectives
  - **Expected Outcome**: Each epic has a 2-3 sentence description
  - **Verification**: Epic descriptions reference project requirements
  - **Notes**: _____________________________________________

☐ **Item 4.4**: Cross-cutting concerns identified
  - **Expected Outcome**: Stories affecting multiple epics tagged appropriately
  - **Verification**: Cross-cutting stories identified and assigned to relevant epic
  - **Notes**: _____________________________________________

### Section 5: Backlog Quality (Step 2.6)

☐ **Item 5.1**: Backlog prioritized (Must Have at top)
  - **Expected Outcome**: Stories ordered by priority with dependencies respected
  - **Verification**: Top 20% of backlog is Must Have
  - **Notes**: _____________________________________________

☐ **Item 5.2**: Requirements coverage is complete
  - **Expected Outcome**: Every functional requirement maps to at least one user story
  - **Verification**: Cross-reference requirements list against story list
  - **Notes**: _____________________________________________

☐ **Item 5.3**: No duplicate stories
  - **Expected Outcome**: Each unique capability has exactly one story
  - **Verification**: Search for stories with similar titles or descriptions
  - **Notes**: _____________________________________________

☐ **Item 5.4**: Backlog summary created
  - **Expected Outcome**: Story counts by priority, epic breakdown, total estimates
  - **Verification**: Summary document available for stakeholder review
  - **Notes**: _____________________________________________

---

## Completion Criteria

This checklist is complete when:

- ✅ All items checked (or marked ❌ if not applicable with justification)
- ✅ All stories pass INVEST criteria
- ✅ All stories have testable acceptance criteria
- ✅ Backlog organized, prioritized, and summarized
- ✅ Ready for SRS development (WI-REQ-003)

**Completed By**: _________________ **Role**: _________________ **Date**: _________

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Stories too large (>13 points) | Split by CRUD, role, workflow step, or data type |
| Missing acceptance criteria | Ask "How would QA verify this is done?" |
| Duplicate stories found | Merge into single story; update cross-references |
| Stories prescribe implementation | Rewrite to focus on user goal, not technical approach |
| No estimate provided | Mark as "needs estimation"; schedule estimation session with dev team |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-14 | System | Initial checklist created |

---

**Document ID**: CHECK-REQ-002-v1.0.0 | **Tier**: 4 - Operational Controls
