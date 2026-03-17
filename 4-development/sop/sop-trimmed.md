# Development Process

## Standard Operating Procedure

---

### Header

| Field | Value |
|-------|-------|
| **Document ID** | SOP-DEV-015-v3.0.0 |
| **Version** | 3.0.0 |
| **Effective Date** | 2026-03-02 |
| **Review Date** | 2027-03-02 |
| **Department** | Development |
| **Process Stage** | 4. Development |
| **Approved By** | [Pending] |

---

### 1. Objective

This procedure establishes the standard process for software development, including environment setup, coding, documentation, unit testing, and code review. It ensures consistent, high-quality code is produced following established standards and practices.

---

### 2. Scope

**In Scope**:
- Development environment and repository setup
- Code development, documentation, and unit testing
- Code review process
- Development completion and handoff to testing

**Out of Scope**:
- Design decisions (completed in Design phase)
- Integration and system testing (covered in Testing phase)
- Deployment (covered in Deployment phase)

**Applies To**:
- All new development work after Design approval
- Bug fixes and enhancements
- Projects transitioning from Design to Testing phase

---

### 3. Prerequisites/Safety

The following must be in place before this process begins:

| Prerequisite | Source | Verification |
|--------------|--------|--------------|
| Approved Design Documents | SOP-DES-001 (Design Phase) | Design sign-off |
| Architecture Document | Design Phase | Document approved |
| LLD Document | Design Phase | Component specs complete |
| User Stories with Acceptance Criteria | Requirements Phase | Backlog ready |
| Development Resources Assigned | Project Planning | Team confirmed |

---

### 4. Responsibilities (RACI)

| Activity | Responsible | Accountable | Consulted | Informed |
|----------|-------------|-------------|-----------|----------|
| Environment & Repository Setup | DevOps, Dev Team | Tech Lead | CTO | PM |
| Code Development & Documentation | Developers | Tech Lead | Designer, QA | PM |
| Code Review | Reviewers, Tech Lead | Tech Lead | CTO | PM |
| Sprint Completion & QA Handoff | Tech Lead | Tech Lead | QA, PM | All stakeholders |

**Role Definitions**:
- **Responsible**: Does the work
- **Accountable**: Approves/owns the outcome
- **Consulted**: Provides input before decision
- **Informed**: Notified after decision

---

### 5. Materials/Resources Needed

| Material | Source | Format | Used In Step |
|----------|--------|--------|--------------|
| Architecture Document | Design Phase | Document | Step 1 |
| LLD Document | Design Phase | Document | Step 2 |
| User Stories | Requirements Phase | Backlog | Step 2 |
| Coding Standards | Templates | DOC-CODE-001 | Step 2 |
| Documentation Standards | Templates | DOC-DOCS-001 | Step 2 |
| Unit Test Framework | Tools | Jest/JUnit/etc. | Step 2 |
| Code Review Checklist | Templates | FORM-REVIEW-001 | Step 3 |

---

### 6. Procedure

| Step | Title | Description | Responsible | Inputs | Outputs | Notes |
|------|-------|-------------|-------------|--------|---------|-------|
| 1 | Environment & Repository Setup | 1. Create/configure Git repository<br>2. Set up branch strategy (GitFlow/trunk-based)<br>3. Configure CI/CD pipeline<br>4. Set up development environments (dev, staging)<br>5. Configure code quality tools (linting, formatting)<br>6. Set up project structure per architecture<br>7. Document setup instructions in README | DevOps, Dev Team | Architecture Document | Repository, CI/CD Pipeline, Dev Environment | Use infrastructure as code where possible |
| 2 | Code Development & Documentation | 1. Pull user stories from backlog for sprint<br>2. Create feature branch from develop<br>3. Implement code following LLD specifications<br>4. Follow coding standards and SOLID principles<br>5. Write clean, readable, maintainable code<br>6. Add inline comments for complex logic and write JSDoc/docstrings for functions and classes<br>7. Update README, API docs, and technical documentation as you code<br>8. Document configuration and environment variables<br>9. Write unit tests for all new code (follow TDD where applicable)<br>10. Achieve minimum code coverage (e.g., 80%)<br>11. Test edge cases, error conditions, and mock external dependencies<br>12. Run all tests locally before commit<br>13. Commit frequently with descriptive, atomic messages | Developers | User Stories, LLD Document, Coding Standards, Documentation Standards | Working Code, Documented Code, Unit Tests, Test Coverage Report | Document as you code; tests should be fast and isolated |
| **DP1** | **Decision: Tests Passing?** | Are all unit tests passing with required coverage? | Developers | Test Results | Decision | **YES** → Step 3<br>**NO** → Fix code/tests |
| 3 | Code Review | 1. Create Pull Request (PR) with description<br>2. Link PR to user story/ticket<br>3. Request review from peers/tech lead<br>4. Reviewers check: functionality, code quality, tests, docs<br>5. Address review feedback<br>6. Obtain required approvals<br>7. Merge to develop branch | Reviewers, Tech Lead | Pull Request | Approved PR, Merged Code | Minimum 1 approval required |
| **DP2** | **Decision: Code Review Approved?** | Has the code review been approved? | Tech Lead | PR Review | Decision | **YES** → Step 4<br>**NO** → Address feedback, re-request review |
| 4 | Sprint Completion & QA Handoff | 1. Verify all sprint stories are complete<br>2. Ensure all PRs merged to develop<br>3. Run full test suite on develop<br>4. Update project status/burndown<br>5. Document any known issues or tech debt<br>6. Prepare handoff notes for QA<br>7. Notify QA team for testing phase | Tech Lead | Merged Code, Test Results | Development Complete, QA Handoff | Ensure clean handoff to testing |

---

### 7. Quality Standards

| Deliverable | Acceptance Criteria | Verification Method | Owner |
|-------------|---------------------|---------------------|-------|
| Repository & Environment | Properly configured, documented, accessible | DevOps review | DevOps |
| Working Code & Documentation | Meets acceptance criteria, follows standards, fully documented | Code review, Peer review | Tech Lead |
| Unit Tests | Passing, adequate coverage (80%+) | CI pipeline | Tech Lead |
| Code Review | Approved by required reviewers | PR approval | Tech Lead |
| Development Complete | All stories done, tests passing, handoff ready | Sprint review | Tech Lead |

---

### 8. References

**Related SOPs**:

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-DES-001 | Design Phase | Upstream (prerequisite) |
| SOP-QA-001 | Testing & QA | Downstream (next phase) |

**Templates & Forms**:

| Document ID | Title | Purpose |
|-------------|-------|---------|
| DOC-CODE-001 | Coding Standards | Code style and practices guide |
| DOC-DOCS-001 | Documentation Standards | Documentation guidelines |
| FORM-REVIEW-001 | Code Review Checklist | Review criteria checklist |

**External References**:
- ISO 9001:2015 Clause 8.5 - Production and service provision
- Clean Code principles (Robert C. Martin)
- SOLID principles

---

### 9. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2025-12-02 | System Generated | Initial creation from process migration |
| 2.0.0 | 2025-12-13 | Manual Consolidation | Consolidated SOPs 4.1-4.6 into single comprehensive SOP |
| 3.0.0 | 2026-03-02 | Process Optimization | Trimmed from 6 to 4 steps: merged Code Development + Documentation + Unit Testing into single dev step; kept Code Review and Sprint Completion as distinct steps |

---

*Document ID: SOP-DEV-015-v3.0.0 | Generated: 2026-03-02*
