# Agentic SDLC — Software Development Lifecycle Framework

A comprehensive, ISO 9001:2015-aligned process framework for agentic software development. Designed for AI-augmented teams where human leads orchestrate AI agents through a structured 7-stage lifecycle.

## 🗺️ Lifecycle Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                        AGENTIC SDLC                                 │
│                                                                     │
│  ┌──────────┐   ┌──────────────┐   ┌──────────┐   ┌────────────┐  │
│  │   0.     │   │     1.       │   │   3.     │   │    4.      │  │
│  │Pre-Sales │──▶│  Planning &  │──▶│ Design   │──▶│Development │  │
│  │          │   │ Requirements │   │          │   │            │  │
│  └──────────┘   └──────────────┘   └──────────┘   └─────┬──────┘  │
│                                                          │         │
│                                                          ▼         │
│                 ┌──────────┐                      ┌──────────┐     │
│                 │   6.     │◀─────────────────────│   5.     │     │
│                 │Deploy &  │                      │ Testing  │     │
│                 │ Release  │                      │  & QA    │     │
│                 └──────────┘                      └──────────┘     │
│                      │                                  │          │
│                      │         ┌──────────┐             │          │
│                      └────────▶│ Rollback │◀────────────┘          │
│                                │ (if needed)                       │
│                                └──────────┘                        │
└─────────────────────────────────────────────────────────────────────┘
```

## 📐 Document Hierarchy (ISO 9001:2015)

```
Tier 1 — Quality Manual        (Organization-wide policies)
  └─ Tier 2 — SOPs             (Stage-level procedures — HOW a stage works)
       └─ Tier 3 — Work Instructions  (Step-by-step task guidance — HOW to do each task)
            └─ Tier 4 — Forms/Checklists/Templates  (Operational records & tools)
```

## 📁 Repository Structure

```
agentic-sdlc/
├── README.md                       ◀ You are here
├── 0-pre-sales/                    # Proposal, feasibility, handoff
│   ├── sop/sop.md                  # SOP-PRE-001
│   ├── work-instructions/          # WI-MGT-001 → 003
│   └── tier4-forms/                # 5 forms/templates
│
├── 1-planning-requirements/        # Combined planning + requirements
│   ├── sop/sop.md                  # SOP-PMR-001 v1.1.0
│   ├── work-instructions/          # WI-PMR-001 → 006
│   ├── tier4/                      # 20 forms/checklists
│   └── templates/                  # Charter, Contract templates
│
├── 3-design/                       # Architecture → UI/UX → LLD → Review
│   ├── sop/sop.md                  # SOP-DES-001
│   ├── work-instructions/          # WI-DES-001 → 006
│   ├── tier4-checklists/           # 8 checklists
│   ├── tier4-forms/                # 11 forms
│   └── tier4-templates/            # Architecture, DB, LLD templates
│
├── 4-development/                  # Env setup → Code → Test → Review
│   ├── sop/sop.md                  # SOP-DEV-001
│   └── work-instructions/          # WI-DEV-001 → 006
│
├── 5-testing/                      # System → Integration → UAT → Signoff
│   ├── sop/sop.md                  # SOP-QA-001
│   └── work-instructions/          # WI-QA-001 → 006
│
└── 6-deployment/                   # Prep → Deploy → Verify → Rollback → Handoff
    ├── sop/sop.md                  # SOP-OPS-001
    └── work-instructions/          # WI-OPS-001 → 005
```

## 📊 Completion Status

| Stage | SOP | Work Instructions | Tier 4 |
|-------|:---:|:-----------------:|:------:|
| **0 — Pre-Sales** | ✅ | ✅ 3 WIs | ✅ 5 docs |
| **1 — Planning & Requirements** | ✅ v1.1.0 | ✅ 6 WIs | ✅ 20 docs |
| **3 — Design** | ✅ | ✅ 6 WIs | ✅ 18 docs |
| **4 — Development** | ✅ | ✅ 6 WIs | ⏳ Pending |
| **5 — Testing** | ✅ | ✅ 6 WIs | ⏳ Pending |
| **6 — Deployment** | ✅ | ✅ 5 WIs | ⏳ Pending |

**Total:** 6 SOPs · 32 Work Instructions · 43 Tier 4 documents (of ~80 planned)

## 🔑 SOP Reference Map

| ID | Title | Stage | Scope |
|----|-------|-------|-------|
| SOP-PRE-001 | Proposal & Contract Management | 0 | RFP review → feasibility → proposal → handoff |
| SOP-PMR-001 | Planning & Requirements | 1 | Kickoff → requirements → risk → signoff |
| SOP-DES-001 | Design Phase | 3 | Architecture → DB/API → UI/UX → LLD → review |
| SOP-DEV-001 | Development Process | 4 | Env setup → code → docs → unit test → review |
| SOP-QA-001 | Testing & QA | 5 | System test → integration → UAT → signoff |
| SOP-OPS-001 | Deployment & Release | 6 | Prep → deploy → verify → rollback → training |

## 🤖 Agentic Context

This framework is designed for teams where **AI agents execute tasks** under human supervision:

- **Work Instructions (Tier 3)** are written to be actionable by both humans and AI agents
- **Checklists (Tier 4)** serve as verification gates — agents can self-check, humans approve
- **Forms (Tier 4)** capture structured data that agents produce and humans validate
- **SOPs (Tier 2)** define the orchestration flow a human PM follows to coordinate agents

### Roles in the Agentic Model

| Role | Human/AI | Responsibility |
|------|----------|----------------|
| PM / Lead | Human | Orchestration, approvals, stakeholder comms |
| Dev Agent | AI | Code implementation per WI-DEV-* |
| Design Agent | AI | Architecture & design docs per WI-DES-* |
| QA Agent | AI | Test execution per WI-QA-* |
| Docs Agent | AI | Documentation & form completion |
| Reviewer | Human | Quality gates, signoffs |

## 📝 Evolution

This framework evolved through 13 specification iterations:

| Spec | Focus |
|------|-------|
| 001–003 | Document structure & outline |
| 004 | Process CSV migration (raw lifecycle data) |
| 005–006 | SOP generation & content population |
| 007 | Proposal/contract + SOP migration |
| 008 | Content population refinement |
| 009 | Cross-stage coherence audit |
| 010 | Tier 2/3 simplification |
| 011 | Streamlined structure (stage consolidation) |
| 012 | Tier 4: PM Planning phase |
| 013 | Tier 4: Design phase |

Full spec history available in the source repo: `D:\sandlot ops\specs\`

---

## 🚧 Roadmap

- [ ] Tier 4 documents for Development (stage 4)
- [ ] Tier 4 documents for Testing (stage 5)
- [ ] Tier 4 documents for Deployment (stage 6)
- [ ] Cross-stage traceability matrix
- [ ] Agent prompt templates per Work Instruction
- [ ] Getoutline import/sync

---

*Created: 2026-03-17 · Based on Sandlot Ops specs 001–013*
