# New Client Project Setup Checklist

Use this when onboarding a new client project.

---

## Client Info
- **Client name:** 
- **Project name:** 
- **Primary contact:** You (always)
- **Stack:** 

## Repository
- [ ] Create GitHub repo (private)
- [ ] Set up branch protection on `main`
  - [ ] Require PR reviews
  - [ ] Require status checks
  - [ ] No direct pushes
- [ ] Add `.gitignore` for project stack
- [ ] Add `README.md` with project overview
- [ ] Add `docs/` directory for architecture docs

## Environments
- [ ] Dev environment provisioned
- [ ] Staging environment provisioned (if applicable)
- [ ] Prod environment provisioned (if applicable)
- [ ] Environment variables documented (not committed)
- [ ] Secrets stored in secure vault (not in repo)

## Linear
- [ ] Create Linear project/workspace
- [ ] Set up board columns:
  - Draft
  - Ready for Review
  - Ready for Dev
  - In Progress
  - In Review
  - In QA
  - Done
- [ ] Configure labels (feature, bug, chore, docs)

## CI/CD
- [ ] CI pipeline configured (lint, test, build)
- [ ] CD pipeline configured (deploy to staging/prod)
- [ ] Branch deploy rules set

## Agent Access
- [ ] Agents have repo access (scoped to this project only)
- [ ] No cross-client repo visibility
- [ ] Agent credentials isolated per project
- [ ] Cost monitoring enabled (token tracking per agent)

## Documentation
- [ ] Architecture document started
- [ ] Tech stack decisions documented
- [ ] API contracts documented (if applicable)

---

*Once complete, the project is ready for its first feature brief.*
