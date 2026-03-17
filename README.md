# Agentic SDLC

A process framework for AI-augmented software development. Specialized agents execute work, humans orchestrate and approve.

## How It Works

You provide a brief. Agents plan, build, test, and document — all tracked through Linear. You review at two gates before anything ships.

```mermaid
flowchart TD
    subgraph S1["<b>1 — Requirements</b>"]
        A1([📋 You: Initial Brief]) --> A2[🔍 Planning Agent: Gather Context]
        A2 -->|reads docs, repo, consults devs| A3[📝 Create Feature Ticket + Sprint Plan]
        A3 --> A4[📌 Linear: Ready for Review]
        A4 --> A5{🔒 You: Approve?}
        A5 -->|Needs Changes| A3
        A5 -->|Approved| A6[📌 Linear: Ready for Dev]
    end

    subgraph S2["<b>2 — Development</b>"]
        B1[👨‍💻 Lead Dev: Assigns Specialist] --> B2[⚙️ Dev Agent: Feature Branch + Build]
        B3[📝 Docs Agent: Documents Alongside]
        B2 --> B4[🔀 Open PR]
        B4 --> B5{🔒 You: Review}
        B5 -->|Feedback| B6[💬 Comments on PR/Ticket]
        B6 --> B2
        B5 -->|Looks Good| B7[📌 Linear: In QA]
    end

    subgraph S3["<b>3 — Testing</b>"]
        C1[🧪 QA Agent: Run App Locally] --> C2[✅ Test Acceptance Criteria]
        C2 --> C3[🤖 Write Automated Tests]
        C3 --> C4{Tests Pass?}
        C4 -->|Pass| C5[✅ Approve PR → Merge]
        C4 -->|Fail| C6[💬 Report on PR + Linear]
        C6 --> C7{🚨 Critical / Recurring?}
        C7 -->|Yes| C8([⚠️ Escalate to You])
        C7 -->|No| C9[📌 Back to Dev]
    end

    subgraph S4["<b>4 — Deployment</b>"]
        D1[🚀 TBD]
    end

    A6 --> B1
    B2 -.-> B3
    B7 --> C1
    C9 --> B2
    C5 --> D1

    style S1 fill:#f0f4f8,stroke:#4A7AB5,stroke-width:2px
    style S2 fill:#f5f0f7,stroke:#7B5EA7,stroke-width:2px
    style S3 fill:#f7f0f0,stroke:#B54A4A,stroke-width:2px
    style S4 fill:#f0f7f5,stroke:#4A8B6E,stroke-width:2px,stroke-dasharray: 5 5
```

## Agents

| Agent | Role | Supervised By |
|-------|------|---------------|
| **Planning Agent** | Requirements gathering, context discovery, Linear tickets, sprint planning | You |
| **Lead Dev Agent** | Assigns work to specialists, oversees development quality | You |
| **Dev Agent(s)** | Specialized per stack — builds features on feature branches | Lead Dev |
| **Docs Agent** | Documents alongside development | Lead Dev |
| **QA Agent** | Functional testing, automated test writing, reports on PR + Linear | You |

Each agent has a versioned spec in [`agents/`](agents/) with prerequisites, outputs, and orchestration flowcharts.

## Human Gates

| Gate | When | What You Do |
|------|------|-------------|
| **Gate 1** | After planning, before dev | Review feature ticket + sprint plan on Linear |
| **Gate 2** | During/after dev, before merge | Review implementation, provide feedback via PR/ticket comments |

Your feedback is treated the same as QA feedback — dev agent sees both and adapts on the same branch.

## Project Setup (Per Client)

Every client project gets:
- Isolated GitHub repo + environments (dev/staging/prod)
- Linear workspace
- CI/CD pipeline
- Branch protection rules
- Secret management (no cross-client visibility)
- Cost monitoring (tokens per agent per project)

## Key Principles

- **Linear is the source of truth** — tickets, statuses, handoffs, metrics, client visibility
- **Specialized agents > generalists** — right tool for the job, supervised by lead dev
- **Project isolation** — no cross-client data leaks
- **You are the client interface** — no direct client-to-agent communication
- **Per-feature pricing** — scoped, measurable, transparent
- **Same branch, persistent context** — dev agents see their prior work + all feedback

## Directory Structure

```
agentic-sdlc/
├── README.md
├── agents/                     # Agent specs (versioned)
│   ├── planning-agent.md
│   ├── lead-dev-agent.md
│   ├── dev-agent.md
│   ├── docs-agent.md
│   └── qa-agent.md
├── templates/                  # Reusable templates
│   ├── initial-brief.md        # What you fill out to kick off a feature
│   ├── feature-ticket.md       # Linear ticket structure
│   └── project-setup.md        # New client project checklist
├── patterns/                   # Company-wide patterns library
│   └── README.md
└── process/                    # Process documentation
    ├── lifecycle.md            # Detailed stage-by-stage walkthrough
    ├── linear-workflow.md      # Linear board columns + status transitions
    └── agent-versioning.md     # How agents are versioned + tracked
```

## Pricing

Per-feature model. Each feature ticket is a deliverable with defined acceptance criteria. Cost = agent token usage + infrastructure + margin.

---

*Framework v2.0 — Built for agentic development teams*
