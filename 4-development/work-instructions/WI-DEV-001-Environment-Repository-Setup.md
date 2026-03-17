# Work Instruction: Environment & Repository Setup

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-DEV-001-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-02-19 |
| **Review Date** | 2027-02-19 |
| **Department** | Development |
| **Parent SOP** | SOP-DEV-015 (Development Process) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for setting up the development environment, Git repository, CI/CD pipeline, and project structure as defined in Step 1 of the Development Process (SOP-DEV-015). It ensures every project starts with a consistent, well-configured foundation.

---

## 2. Scope

**Applies To:**
- All new projects entering the Development phase
- Major refactors requiring repository restructuring
- Projects migrating to new infrastructure or tooling

**Responsible Roles:** DevOps, Dev Team

---

## 3. Prerequisites

Before starting environment setup, ensure you have:

☐ Approved Architecture Document (from Design Phase)
☐ Technology stack confirmed (languages, frameworks, databases)
☐ Cloud/infrastructure access provisioned
☐ Team members identified and accounts created
☐ Organization-level Git hosting access (GitHub/GitLab/Bitbucket)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Architecture Document | Design Phase (WI-DES-001) | Document |
| Technology Stack Specification | Architecture Document | Document section |
| Infrastructure Diagram | Architecture Document | Diagram |
| Team Roster | Project Planning | List |

---

## 5. Procedure Steps

### Step 1.1: Create and Configure Git Repository

**Action:** Initialize the project repository with proper configuration.

**How to Execute:**

1. Create a new repository in the organization's Git hosting platform:
   - Repository name follows convention: `{client}-{project}` (e.g., `acme-inventory-api`)
   - Set visibility (private for client projects)
   - Initialize with a `.gitignore` for the primary language

2. Configure repository settings:
   - Enable branch protection on `main` and `develop`
   - Require pull request reviews (minimum 1 approver)
   - Require status checks to pass before merging
   - Disable force pushes to protected branches
   - Enable automatic deletion of head branches after merge

3. Add essential root files:
   ```
   .gitignore          # Language/framework-specific ignores
   .editorconfig       # Consistent editor settings across IDEs
   LICENSE             # If applicable
   ```

4. Configure repository access:
   - Add team members with appropriate roles (maintainer, developer)
   - Add CI/CD service account with deploy permissions
   - Configure webhook integrations (Slack, Jira, etc.)

**Expected Outcome:** Repository created with branch protection, access controls, and base configuration files.

**Quality Check:** ✅ Protected branches cannot be pushed to directly, ✅ All team members have access, ✅ `.gitignore` covers all build artifacts and secrets

---

### Step 1.2: Set Up Branch Strategy

**Action:** Establish the branching model and naming conventions.

**How to Execute:**

1. Select branching strategy based on project needs:

   **GitFlow** (recommended for release-cycle projects):
   ```
   main          ← Production-ready code
   develop       ← Integration branch
   feature/*     ← New features (from develop)
   bugfix/*      ← Bug fixes (from develop)
   release/*     ← Release preparation (from develop)
   hotfix/*      ← Production fixes (from main)
   ```

   **Trunk-Based** (recommended for continuous deployment):
   ```
   main          ← Always deployable
   feature/*     ← Short-lived branches (< 2 days)
   release/*     ← Optional release branches
   ```

2. Define branch naming conventions:
   ```
   feature/TICKET-123-short-description
   bugfix/TICKET-456-fix-login-error
   hotfix/TICKET-789-critical-payment-fix
   release/v1.2.0
   ```

3. Create initial branches:
   ```bash
   git checkout -b develop
   git push -u origin develop
   ```

4. Document the chosen strategy in `CONTRIBUTING.md`:
   - Branch naming rules
   - When to branch from where
   - Merge direction (feature → develop → release → main)

**Expected Outcome:** Branch strategy established with `main` and `develop` branches created and protected.

**Quality Check:** ✅ Branch protection rules match strategy, ✅ Naming convention documented, ✅ Team understands merge flow

---

### Step 1.3: Configure CI/CD Pipeline

**Action:** Set up automated build, test, and deployment pipelines.

**How to Execute:**

1. Create pipeline configuration file in repository root:

   **GitHub Actions** (`.github/workflows/ci.yml`):
   ```yaml
   name: CI
   on:
     pull_request:
       branches: [develop, main]
     push:
       branches: [develop]

   jobs:
     build-and-test:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'
         - run: npm ci
         - run: npm run lint
         - run: npm run test -- --coverage
         - run: npm run build
   ```

2. Configure pipeline stages:
   - **Lint**: Run code linting and formatting checks
   - **Test**: Run unit tests with coverage reporting
   - **Build**: Compile/build the application
   - **Security**: Run dependency vulnerability scan (e.g., `npm audit`, Snyk)

3. Set up environment-specific deployment pipelines:
   - `develop` branch → Dev environment (automatic)
   - `release/*` branch → Staging environment (automatic)
   - `main` branch → Production (manual approval gate)

4. Configure pipeline secrets:
   - Add API keys, database credentials, and cloud access tokens
   - Use the platform's secret management (GitHub Secrets, GitLab CI Variables)
   - Never hardcode secrets in pipeline files

**Expected Outcome:** CI pipeline runs on every PR with lint, test, and build stages; deployment pipelines configured per environment.

**Quality Check:** ✅ Pipeline triggers on correct branches, ✅ Secrets stored securely (not in code), ✅ Failed checks block PR merge

---

### Step 1.4: Set Up Development Environments

**Action:** Provision and configure dev and staging environments.

**How to Execute:**

1. Create environment configuration files:
   ```
   .env.example        # Template with all variables (no real values)
   .env.development    # Local dev defaults (gitignored if contains secrets)
   .env.staging        # Staging config reference
   ```

2. Provision infrastructure per Architecture Document:
   - **Dev environment**: Shared or individual developer databases, API services
   - **Staging environment**: Production-mirror with test data
   - Use Infrastructure as Code (Terraform, CloudFormation, Pulumi) where possible

3. Set up local development tooling:
   - Docker Compose for local services (database, cache, message queue):
     ```yaml
     # docker-compose.yml
     services:
       db:
         image: postgres:16
         environment:
           POSTGRES_DB: app_dev
           POSTGRES_USER: dev
           POSTGRES_PASSWORD: dev
         ports:
           - "5432:5432"
       redis:
         image: redis:7-alpine
         ports:
           - "6379:6379"
     ```
   - Database seed/migration scripts
   - Mock services for external integrations

4. Verify every team member can:
   - Clone the repo and run the app locally within 30 minutes
   - Connect to shared dev services
   - Access staging environment

**Expected Outcome:** Dev and staging environments running and accessible; local setup reproducible.

**Quality Check:** ✅ New developer can run the project from clone to running in ≤30 minutes, ✅ `.env.example` lists all required variables, ✅ IaC files are version-controlled

---

### Step 1.5: Configure Code Quality Tools

**Action:** Install and configure linting, formatting, and pre-commit hooks.

**How to Execute:**

1. Install and configure linter for the primary language:

   **JavaScript/TypeScript (ESLint + Prettier)**:
   ```bash
   npm install -D eslint prettier eslint-config-prettier
   npx eslint --init
   ```

   **Python (Ruff or Flake8 + Black)**:
   ```bash
   pip install ruff black isort
   ```

2. Create configuration files:
   ```
   .eslintrc.json / ruff.toml       # Linter rules
   .prettierrc / pyproject.toml      # Formatter config
   ```

3. Set up pre-commit hooks using Husky (JS) or pre-commit (Python):
   ```bash
   # JavaScript
   npm install -D husky lint-staged
   npx husky init
   echo "npx lint-staged" > .husky/pre-commit
   ```

   Configure `lint-staged` in `package.json`:
   ```json
   "lint-staged": {
     "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
     "*.{json,md}": ["prettier --write"]
   }
   ```

4. Add quality scripts to `package.json` or `Makefile`:
   ```json
   "scripts": {
     "lint": "eslint src/",
     "lint:fix": "eslint src/ --fix",
     "format": "prettier --write src/",
     "format:check": "prettier --check src/"
   }
   ```

**Expected Outcome:** Linting and formatting run automatically on commit; CI pipeline enforces the same rules.

**Quality Check:** ✅ Pre-commit hooks block commits with lint errors, ✅ CI lint step uses identical rules, ✅ Team editors configured with matching settings (.editorconfig)

---

### Step 1.6: Set Up Project Structure

**Action:** Create the initial folder structure per the Architecture Document.

**How to Execute:**

1. Create folder structure matching the chosen architecture pattern. Example for a layered Node.js API:
   ```
   src/
   ├── config/           # App configuration
   ├── controllers/      # Route handlers
   ├── services/         # Business logic
   ├── repositories/     # Data access
   ├── models/           # Data models/entities
   ├── middleware/        # Express middleware
   ├── utils/            # Shared utilities
   ├── types/            # TypeScript type definitions
   └── index.ts          # App entry point
   tests/
   ├── unit/
   ├── integration/
   └── fixtures/
   docs/                 # Technical documentation
   scripts/              # Build/deploy/seed scripts
   ```

2. Add placeholder files (`index.ts` or `__init__.py`) in each directory to preserve structure in Git.

3. Configure path aliases if applicable:
   ```json
   // tsconfig.json
   "paths": {
     "@config/*": ["src/config/*"],
     "@services/*": ["src/services/*"]
   }
   ```

4. Verify structure aligns with component boundaries defined in the Architecture Document.

**Expected Outcome:** Project structure created, matching architecture design, with clear separation of concerns.

**Quality Check:** ✅ Structure matches Architecture Document component diagram, ✅ No ambiguity about where new code should go, ✅ Path aliases working

---

### Step 1.7: Create README Documentation

**Action:** Write a comprehensive project README.

**How to Execute:**

1. Create `README.md` with the following sections:
   ```markdown
   # Project Name

   Brief description of what the project does.

   ## Tech Stack
   - **Runtime**: Node.js 20
   - **Framework**: Express 4.x
   - **Database**: PostgreSQL 16
   - **Cache**: Redis 7

   ## Prerequisites
   - Node.js >= 20
   - Docker & Docker Compose
   - Git

   ## Getting Started

   ### 1. Clone the repository
   git clone git@github.com:org/project.git
   cd project

   ### 2. Install dependencies
   npm install

   ### 3. Set up environment
   cp .env.example .env
   # Edit .env with your local values

   ### 4. Start local services
   docker-compose up -d

   ### 5. Run migrations
   npm run db:migrate

   ### 6. Start the application
   npm run dev

   ## Scripts
   | Command | Description |
   |---------|-------------|
   | `npm run dev` | Start dev server with hot reload |
   | `npm run test` | Run unit tests |
   | `npm run lint` | Lint source code |
   | `npm run build` | Build for production |

   ## Branch Strategy
   [Link to CONTRIBUTING.md]

   ## Project Structure
   [Overview of folder structure]
   ```

2. Create `CONTRIBUTING.md` with branch strategy, commit conventions, and PR process.

3. Verify README accuracy by having a team member follow it from scratch.

**Expected Outcome:** README enables any developer to set up and run the project independently.

**Quality Check:** ✅ A new developer can follow README without asking questions, ✅ All scripts listed actually work, ✅ Environment variables documented

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Git Repository | Configured with branch protection and access | Git hosting platform |
| CI/CD Pipeline | Automated lint, test, build, deploy | Pipeline config file |
| Dev Environment | Local + shared development setup | Docker Compose, IaC |
| Staging Environment | Production-mirror environment | Cloud/IaC |
| Code Quality Config | Linter, formatter, pre-commit hooks | Config files |
| Project Structure | Folders matching architecture | Directory tree |
| README | Setup and contribution guide | Markdown |

---

## 7. Success Criteria

✅ All 7 procedure steps completed
✅ Repository accessible to all team members
✅ CI pipeline runs successfully on initial commit
✅ New developer can go from clone to running app in ≤ 30 minutes
✅ Pre-commit hooks catch lint/format issues
✅ Branch protection prevents direct pushes to main/develop
✅ All environments provisioned and accessible

---

## 8. Common Pitfalls & Solutions

| Pitfall | Solution |
|---------|----------|
| **Secrets committed to repo** | Add `.env` to `.gitignore` before first commit; use `git-secrets` or `gitleaks` as pre-commit hook; rotate any exposed credentials immediately |
| **"Works on my machine" syndrome** | Use Docker for local services; pin dependency versions (`package-lock.json`); document OS-specific setup steps |
| **CI pipeline too slow (>10 min)** | Cache dependencies (`actions/cache`); run lint and tests in parallel jobs; use smaller base images |
| **Branch protection bypassed** | Enable "Include administrators" in protection rules; audit protection settings quarterly |
| **README goes stale immediately** | Include README verification in PR checklist; automate what you can (generate API docs, script listings) |

---

## 9. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-DEV-015 | Development Process | Parent procedure |
| WI-DES-001 | Architecture Design | Input (architecture decisions) |
| WI-DEV-002 | Code Development | Next work instruction |
| DOC-CODE-001 | Coding Standards | Referenced in quality tools setup |
| TMPL-ARCH-001 | Architecture Document Template | Input source |

---

## 10. References

- Git branching strategies: https://www.atlassian.com/git/tutorials/comparing-workflows
- GitHub Actions documentation: https://docs.github.com/en/actions
- EditorConfig specification: https://editorconfig.org
- 12-Factor App methodology: https://12factor.net

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-19 | Initial | Work instruction created from SOP-DEV-015 Step 1 |

---

**Document ID:** WI-DEV-001-v1.0.0 | **Tier:** 3 - Work Instructions
