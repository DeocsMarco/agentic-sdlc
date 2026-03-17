# Work Instruction: Architecture & Data Design

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-DES-001-v2.0.0 |
| **Version** | 2.0.0 |
| **Effective Date** | 2026-02-27 |
| **Review Date** | 2027-02-27 |
| **Department** | Design / Development |
| **Parent SOP** | SOP-DES-001 (Design Phase) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for creating system architecture design and database/API design as defined in Step 1 of the Design Phase (SOP-DES-001). It ensures consistent architecture and data documentation across all projects, covering system structure, technology stack, infrastructure, security, database schema, API endpoints, and API contracts.

---

## 2. Scope

**Applies To:**
- All new client projects entering Design phase
- Major change requests requiring architecture or data model updates
- System redesign or refactoring initiatives
- All projects requiring database design or API interfaces

**Responsible Role:** Tech Lead, CTO, Backend Developer

---

## 3. Prerequisites

Before starting architecture and data design, ensure you have:

☐ Approved Requirements Baseline (from Requirements Phase)
☐ SRS Document (approved)
☐ User Stories (complete)
☐ Technical Feasibility Assessment (confirmed)
☐ Architecture Document Template (TMPL-ARCH-001)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Approved SRS | Requirements Phase | Document |
| Technical Constraints | Requirements/Handoff | Document section |
| Non-functional Requirements | SRS | List/Table |
| Integration Requirements | SRS | Specifications |
| User Stories | Requirements Phase | List |

---

## 5. Procedure Steps

## Part A: Architecture Design

### Step 1.1: Define System Architecture Pattern

**Action:** Select the appropriate architectural pattern for the system.

**How to Execute:**

1. Review project requirements focusing on:
   - Scale/volume requirements
   - Team structure and skills
   - Deployment environment
   - Integration complexity
   - Future scalability needs

2. Evaluate architecture patterns:
   - **Monolithic**: Single deployable unit; suitable for small-medium apps, small teams
   - **Microservices**: Distributed services; suitable for large scale, multiple teams
   - **Serverless**: Function-as-a-Service; suitable for event-driven, variable load
   - **Layered/N-Tier**: Logical separation; suitable for enterprise apps
   - **Event-Driven**: Async messaging; suitable for real-time, decoupled systems

3. Document selected pattern in Architecture Document:
   ```
   ## Architecture Pattern
   **Selected Pattern**: [Pattern Name]
   **Rationale**: [Why this pattern was chosen given requirements]
   **Tradeoffs Accepted**: [Known limitations of this pattern]
   ```

**Expected Outcome:** Architecture pattern selected and documented with rationale

**Quality Check:** ✅ Pattern aligns with non-functional requirements (scalability, maintainability, performance)

---

### Step 1.2: Create High-Level Component Diagram

**Action:** Design the major system components and their relationships.

**How to Execute:**

1. Identify major functional areas from SRS (e.g., Authentication, Data Processing, Reporting)

2. For each functional area, define components:
   - Component name
   - Primary responsibility
   - Technology/framework
   - Dependencies on other components

3. Create component diagram showing:
   - All major components (boxes/nodes)
   - Relationships/dependencies (arrows)
   - Data flow direction
   - External systems integration points

4. Use standard notation (UML Component Diagram or C4 Model Level 2)

5. Include diagram in Architecture Document with legend

**Expected Outcome:** Component diagram showing all major system parts and their interactions

**Quality Check:** ✅ Every major requirement maps to at least one component

---

### Step 1.3: Define Technology Stack

**Action:** Specify all languages, frameworks, and tools to be used.

**How to Execute:**

1. For each layer/component, select technologies:

   **Frontend:**
   - Framework: (e.g., React, Vue, Angular, native iOS/Android)
   - Language: (e.g., TypeScript, JavaScript, Swift, Kotlin)
   - State Management: (e.g., Redux, MobX, Vuex)
   - UI Library: (e.g., Material-UI, Ant Design, Bootstrap)

   **Backend:**
   - Framework: (e.g., Node.js/Express, Django, Spring Boot, .NET Core)
   - Language: (e.g., TypeScript, Python, Java, C#)
   - API Style: (e.g., REST, GraphQL, gRPC)

   **Database:**
   - Primary DB: (e.g., PostgreSQL, MySQL, MongoDB, DynamoDB)
   - Caching: (e.g., Redis, Memcached)
   - Search: (e.g., Elasticsearch, Algolia) if applicable

   **DevOps/Infrastructure:**
   - Cloud Provider: (e.g., AWS, Azure, GCP, on-premise)
   - Container Platform: (e.g., Docker, Kubernetes)
   - CI/CD: (e.g., GitHub Actions, GitLab CI, Jenkins)
   - Monitoring: (e.g., DataDog, New Relic, CloudWatch)

2. For each technology choice, document:
   - Reason for selection
   - Version to be used
   - Team familiarity (existing skill or training needed)

3. Verify technology choices align with:
   - Client infrastructure/preferences (if any)
   - Team capabilities
   - Budget constraints
   - Project timeline

**Expected Outcome:** Complete technology stack documented with versions and justifications

**Quality Check:** ✅ All technology choices approved by CTO, ✅ No unknown/untested technologies without explicit justification

---

### Step 1.4: Design Infrastructure

**Action:** Define servers, containers, cloud resources, and deployment architecture.

**How to Execute:**

1. **For Cloud Deployments:**
   - Define environments (Dev, Staging, Production)
   - Specify compute resources (instance types, auto-scaling rules)
   - Define networking (VPC, subnets, security groups)
   - Specify storage (S3 buckets, EBS volumes, object storage)
   - Define managed services (RDS, ElastiCache, etc.)

2. **For On-Premise Deployments:**
   - Specify server requirements (CPU, RAM, disk)
   - Define network topology
   - Plan load balancer configuration
   - Document backup infrastructure

3. **For Container-Based:**
   - Define container orchestration (Kubernetes, ECS, Docker Swarm)
   - Specify container resources (CPU/memory limits)
   - Plan persistent storage (volumes, persistent volume claims)
   - Document service mesh (if applicable)

4. Create infrastructure diagram showing:
   - Network zones (public/private subnets)
   - Load balancers
   - Application servers/containers
   - Database servers
   - External services integration
   - Firewall rules/security boundaries

**Expected Outcome:** Infrastructure design documented with diagrams and resource specifications

**Quality Check:** ✅ Infrastructure supports required availability/scalability, ✅ Security boundaries defined, ✅ Cost estimate within budget

---

### Step 1.5: Define Integration Points and External Interfaces

**Action:** Document all external systems, APIs, and third-party services.

**How to Execute:**

1. List all external integrations from requirements:
   - Third-party APIs (payment gateways, analytics, email services)
   - Client existing systems (ERP, CRM, legacy databases)
   - Authentication providers (OAuth, SAML, AD)
   - File storage (cloud storage, CDN)

2. For each integration, document:
   - Integration name and purpose
   - Integration method (REST API, SDK, webhook, database connection)
   - Authentication mechanism (API key, OAuth, certificate)
   - Data format (JSON, XML, CSV)
   - Expected volume/frequency
   - Error handling approach
   - Timeout/retry strategy

3. Create integration diagram showing system boundary, external systems, protocols, and data flow direction

4. Identify integration risks (SLA, rate limits, data format changes, auth complexity)

**Expected Outcome:** All integrations documented with protocols, authentication, and risk assessment

**Quality Check:** ✅ Every external dependency has fallback/error handling, ✅ Client has confirmed access to required external systems

---

### Step 1.6: Document Security Architecture

**Action:** Define security controls, authentication, authorization, and data protection.

**How to Execute:**

1. **Authentication Design:** User auth method, password policy, MFA, session management
2. **Authorization Design:** Access control model (RBAC/ABAC/ACL), role definitions, permissions matrix
3. **Data Protection:** Data classification, encryption at rest/in transit, key management
4. **Security Controls:** Input validation, SQL injection prevention, XSS/CSRF protection, rate limiting, audit logging
5. **Compliance Requirements:** GDPR, HIPAA, PCI-DSS as applicable

**Expected Outcome:** Comprehensive security architecture documented

**Quality Check:** ✅ Security measures address all identified risks, ✅ Compliance requirements satisfied, ✅ Security reviewed by CTO

---

### Step 1.7: Create Deployment Architecture Diagram

**Action:** Visualize how the system will be deployed to production.

**How to Execute:**

1. Create deployment diagram showing environments (Dev, Staging, Prod) with infrastructure components, deployment artifacts, configuration differences, network topology, and external dependencies

2. Document deployment process: build process, CI/CD pipeline, database migration strategy, zero-downtime approach, rollback procedure

**Expected Outcome:** Deployment architecture diagram with deployment process documented

**Quality Check:** ✅ Deployment process repeatable and automated, ✅ Rollback procedure defined, ✅ Environment configuration differences documented

---

## Part B: Database & API Design

### Step 1.8: Design Database Schema

**Action:** Create tables, fields, relationships, and constraints.

**How to Execute:**

1. **Identify Entities from Requirements:**
   - Review user stories and requirements
   - List all nouns that represent data (User, Project, Task, Report, etc.)
   - Group related attributes under each entity

2. **Define Tables:**
   For each entity, create table specification:
   ```
   Table: [TableName]
   Purpose: [What this table stores]

   Columns:
   | Column Name | Data Type | Null? | Default | Constraints |
   |-------------|-----------|-------|---------|-------------|
   | id | INT/UUID | No | Auto | PRIMARY KEY |
   | [field] | [type] | [Y/N] | [value] | [constraints] |
   ```

3. **Apply Normalization:**
   - **1NF**: Each column contains atomic values
   - **2NF**: No partial dependencies
   - **3NF**: No transitive dependencies
   - Stop at 3NF unless specific performance reasons to denormalize

4. **Define Indexes:** Primary key, foreign key, unique, composite, and full-text indexes as needed

5. **Document Constraints:** NOT NULL, UNIQUE, CHECK, DEFAULT values, foreign key constraints with cascade rules

**Expected Outcome:** Complete table specifications with columns, types, and constraints

**Quality Check:** ✅ All entities from requirements have corresponding tables, ✅ Normalized to 3NF, ✅ Indexes planned for query performance

---

### Step 1.9: Create ERD (Entity Relationship Diagram)

**Action:** Visualize entities and their relationships.

**How to Execute:**

1. Use standard ERD notation (Crow's Foot, Chen, or UML)
2. Define relationships with cardinality (1:1, 1:N, M:N)
3. Document foreign keys with cascade rules (ON DELETE/UPDATE behavior)
4. Handle M:N relationships with junction/bridge tables
5. Create ERD diagram using draw.io, Lucidchart, dbdiagram.io, or database tool

**Expected Outcome:** ERD diagram showing all entities and relationships

**Quality Check:** ✅ All tables appear in ERD, ✅ Relationships have cardinality marked, ✅ No orphan entities

---

### Step 1.10: Design API Endpoints

**Action:** Define RESTful or GraphQL API structure.

**How to Execute (REST API):**

1. **Identify Resources:** Each primary entity becomes a resource (plural nouns)

2. **Define Endpoints for Each Resource:**
   ```
   GET    /api/v1/[resource]           - List all (with pagination)
   GET    /api/v1/[resource]/:id       - Get single item
   POST   /api/v1/[resource]           - Create new item
   PUT    /api/v1/[resource]/:id       - Update entire item
   PATCH  /api/v1/[resource]/:id       - Update partial item
   DELETE /api/v1/[resource]/:id       - Delete item
   ```

3. **Add Custom Endpoints** for non-CRUD actions

4. **Document Query Parameters** for list endpoints (pagination, filtering, sorting, search)

5. **Define HTTP Status Codes** (200, 201, 204, 400, 401, 403, 404, 500)

**How to Execute (GraphQL API):** Define Types, Queries, Mutations, and Input types

**Expected Outcome:** Complete list of API endpoints with methods and purposes

**Quality Check:** ✅ All user actions have corresponding API endpoints, ✅ Naming follows conventions, ✅ CRUD operations covered

---

### Step 1.11: Define API Contracts (Request/Response Formats)

**Action:** Specify exact JSON structure for each endpoint.

**How to Execute:**

1. For each endpoint, document request format (headers, body with field types and validation) and response format (success and error responses)

2. Define standard error format:
   ```json
   {
     "error": {
       "code": "ERROR_CODE",
       "message": "Human-readable message",
       "details": [],
       "timestamp": "ISO-8601 datetime",
       "requestId": "uuid for tracing"
     }
   }
   ```

3. Define pagination format for list responses

**Expected Outcome:** API contracts documented for all endpoints with request/response examples

**Quality Check:** ✅ All fields have data type and validation specified, ✅ Error responses defined, ✅ Examples provided

---

### Step 1.12: Document Authentication, Authorization & API Documentation

**Action:** Define API security and create formal specification.

**How to Execute:**

1. **Authentication:** Choose mechanism (session-based, JWT, OAuth 2.0, API Keys) and document login flow

2. **Authorization:** Define permission matrix showing each endpoint × role with allow/deny

3. **Rate Limiting:** Define limits per user/IP with 429 response

4. **OpenAPI/Swagger:** Create `openapi.yaml` or `openapi.json` specification covering all endpoints, parameters, request/response schemas, and authentication requirements

**Expected Outcome:** Authentication/authorization documented with permission matrix; OpenAPI specification complete

**Quality Check:** ✅ All endpoints have authorization rules, ✅ Auth flow documented, ✅ OpenAPI spec validates

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Architecture Document | Complete architecture specification | Document (TMPL-ARCH-001) |
| Component Diagram | High-level system components | Diagram (UML/C4) |
| Infrastructure Diagram | Deployment infrastructure | Diagram |
| Deployment Diagram | Deployment architecture | Diagram |
| Technology Stack Specification | All technologies with versions | Document section |
| Security Architecture | Security controls and compliance | Document section |
| Integration Specifications | External systems integration | Document section |
| Database Schema | Table definitions with columns and constraints | Document (TMPL-ARCH-001 DB section) |
| ERD | Entity relationship diagram | Diagram |
| API Specification | Endpoint list with methods | Document section |
| API Contracts | Request/response formats for all endpoints | Document section |
| OpenAPI Spec | Formal API specification | YAML/JSON file |
| Permission Matrix | Authorization rules | Table |

---

## 7. Quality Standards

### Architecture Document Completeness

✅ Architecture pattern selected and justified
✅ Component diagram shows all major components
✅ Technology stack fully specified with versions
✅ Infrastructure design includes resource specs
✅ All external integrations documented
✅ Security architecture addresses identified risks
✅ Deployment architecture diagram created

### Database & API Design Completeness

✅ All entities from requirements have tables
✅ Normalized to 3NF (unless denormalization justified)
✅ ERD shows all relationships with cardinality
✅ Indexes planned for performance
✅ All user actions have API endpoints
✅ Request/response formats documented
✅ Authentication/authorization defined
✅ OpenAPI specification complete and valid

---

## 8. Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Technology choice unclear | Conduct spike/proof-of-concept for 2-3 alternatives, evaluate against criteria |
| Infrastructure cost too high | Review resource specs, consider managed services, right-size instances |
| Security requirements ambiguous | Consult with client security team, reference industry standards (OWASP, NIST) |
| Integration access unknown | Contact client IT team early to confirm access, credentials, documentation |
| Team unfamiliar with technology | Plan training time, pair with experienced developer, or choose familiar alternative |
| Over-normalized schema hurts performance | Identify query bottlenecks, denormalize specific tables with justification |
| API endpoints don't match user stories | Review each user story, ensure corresponding API operation exists |
| Inconsistent naming (users vs user) | Establish naming convention early: plural for collections, singular for instances |
| Missing error cases in API design | Review each endpoint, document failure scenarios |
| ERD too complex to read | Break into multiple diagrams by functional area |

---

## 9. Tips for Success

- **Start with the big picture:** Define architecture pattern before diving into components
- **Collaborate early:** Involve backend lead, frontend lead, and DevOps in decisions
- **Document tradeoffs:** Every architecture has pros/cons; document what you're accepting
- **Think about operations:** How will the system be monitored, backed up, scaled?
- **Database drives API:** Complete schema first, then define API endpoints
- **API versioning:** Plan for future changes with /v1/ in URL path
- **Use examples:** Include example requests/responses in documentation
- **Review with team:** Have backend and frontend review together to catch issues
- **Test with sample data:** Create sample records to validate relationships

---

## 10. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-DES-001 | Design Phase | Parent procedure |
| TMPL-ARCH-001 | Architecture Document Template | Output template |
| CHECK-DES-001 | Architecture & Data Design Checklist | Completeness verification |
| FORM-DES-005 | Component Specification | Per-component dev summary card |
| SOP-PM-008 | Requirements Management | Input source (SRS) |
| WI-DES-003 | UI/UX & Low-Level Design | Next work instruction |

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-18 | Initial | Work instruction created from SOP-DES-001 Step 1 |
| 2.0.0 | 2026-02-27 | SOP Trim | Merged WI-DES-002 (Database & API Design) into this document as Part B; renumbered steps; updated references |

---

**Document ID:** WI-DES-001-v2.0.0 | **Tier:** 3 - Work Instructions
