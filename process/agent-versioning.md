# Agent Versioning

Every agent in the system is versioned. This tracks what built what, and allows controlled upgrades.

## Version Format

`MAJOR.MINOR.PATCH` (semver)

- **MAJOR** — fundamental change to agent's role or orchestration position
- **MINOR** — new capability added (e.g., QA agent gains performance testing)
- **PATCH** — prompt refinement, bug fix in behavior

## Agent Registry

| Agent | Current Version | Spec Location |
|-------|-----------------|---------------|
| Planning Agent | v1.0.0 | [`agents/planning-agent.md`](../agents/planning-agent.md) |
| Lead Dev Agent | v1.0.0 | [`agents/lead-dev-agent.md`](../agents/lead-dev-agent.md) |
| Dev Agent | v1.0.0 | [`agents/dev-agent.md`](../agents/dev-agent.md) |
| Docs Agent | v1.0.0 | [`agents/docs-agent.md`](../agents/docs-agent.md) |
| QA Agent | v1.0.0 | [`agents/qa-agent.md`](../agents/qa-agent.md) |

## What Each Spec Contains

Every agent spec documents:
1. **Purpose** — what the agent does
2. **Prerequisites (Inputs)** — what it needs to start
3. **Outputs** — what it produces and where
4. **Workflow flowchart** — visual of its internal process
5. **Rules** — constraints on behavior
6. **Version history** — changelog

## Orchestration Map

```mermaid
flowchart LR
    YOU([You]) -->|brief| PA[Planning Agent]
    PA -->|ticket| YOU
    YOU -->|approved ticket| LD[Lead Dev Agent]
    LD -->|assignment| DA[Dev Agent]
    LD -->|activate| DOC[Docs Agent]
    DA -->|PR| YOU
    YOU -->|approved for QA| QA[QA Agent]
    QA -->|pass → merge| DONE([Done])
    QA -->|fail → comments| DA
    YOU -->|feedback| DA

    style PA fill:#f0f4f8,stroke:#4A7AB5
    style LD fill:#e8e0f0,stroke:#7B5EA7
    style DA fill:#f5f0f7,stroke:#7B5EA7
    style DOC fill:#f5f0f7,stroke:#7B5EA7
    style QA fill:#f7f0f0,stroke:#B54A4A
```

## Tracking

When a feature is built, the Linear ticket should note which agent versions were used. This enables:
- Debugging — "this was built by dev-agent v1.0.0, which had [known issue]"
- A/B comparison — "v1.1.0 of QA agent catches 20% more issues"
- Rollback — if a new agent version performs worse, revert to prior version
