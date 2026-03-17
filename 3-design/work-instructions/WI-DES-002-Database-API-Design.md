# Work Instruction: Database & API Design

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-DES-002-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-01-18 |
| **Review Date** | 2027-01-18 |
| **Department** | Design / Development |
| **Parent SOP** | SOP-DES-001 (Design Phase) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for designing database schema and API endpoints as defined in Step 2 of the Design Phase (SOP-DES-001). It ensures data models and API contracts are properly designed before development.

---

## 2. Scope

**Applies To:**
- All projects requiring database design
- Projects with API interfaces (internal or external)
- System redesigns affecting data models

**Responsible Role:** Tech Lead, Backend Developer

---

## 3. Prerequisites

Before starting database and API design, ensure you have:

☐ Approved SRS (from Requirements Phase)
☐ Architecture Document (from WI-DES-001)
☐ User Stories with acceptance criteria
☐ Database Design Template (TMPL-DB-001)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Approved SRS | Requirements Phase | Document |
| Architecture Document | WI-DES-001 | Document |
| User Stories | Requirements Phase | List |
| Technology Stack | Architecture Document | Specification |

---

## 5. Procedure Steps

### Step 2.1: Design Database Schema

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
   - **1NF**: Each column contains atomic values (no arrays/lists in single column)
   - **2NF**: No partial dependencies (all non-key columns depend on entire primary key)
   - **3NF**: No transitive dependencies (non-key columns don't depend on other non-key columns)
   - Stop at 3NF unless specific performance reasons to denormalize

4. **Define Indexes:**
   - Primary key indexes (automatic)
   - Foreign key indexes (for join performance)
   - Unique indexes (for uniqueness constraints)
   - Composite indexes (for common query patterns)
   - Full-text indexes (for search functionality)

5. **Document Constraints:**
   - NOT NULL constraints
   - UNIQUE constraints
   - CHECK constraints (value validation)
   - DEFAULT values
   - Foreign key constraints with cascade rules

**Expected Outcome:** Complete table specifications with columns, types, and constraints

**Quality Check:** ✅ All entities from requirements have corresponding tables, ✅ Normalized to 3NF, ✅ Indexes planned for query performance

---

### Step 2.2: Define Data Models and Entities

**Action:** Create logical data model showing business objects and attributes.

**How to Execute:**

1. **Create Entity Definitions:**
   For each business entity:
   ```
   Entity: [Name]
   Description: [Business definition]

   Attributes:
   - [attribute1]: [type] - [description]
   - [attribute2]: [type] - [description]

   Business Rules:
   - [Rule 1: e.g., "User must have at least one role"]
   - [Rule 2: e.g., "Email must be unique across all users"]

   Lifecycle States:
   - [State 1] → [State 2] (condition)
   ```

2. **Define Data Types:**
   - String/VARCHAR: text data (specify max length)
   - Integer: whole numbers
   - Decimal/Numeric: precise numbers (currency, measurements)
   - Boolean: true/false flags
   - Date/DateTime/Timestamp: temporal data
   - JSON/JSONB: structured/semi-structured data
   - BLOB: binary data (files, images)
   - ENUM: predefined value sets

3. **Document Validation Rules:**
   For each attribute that requires validation:
   - Format rules (email regex, phone format, etc.)
   - Range rules (min/max values)
   - Required vs. optional
   - Allowed values (enumerations)
   - Cross-field validation (e.g., end_date > start_date)

**Expected Outcome:** Data model documented with entities, attributes, and business rules

**Quality Check:** ✅ All user story data elements mapped to entities, ✅ Validation rules capture all business constraints

---

### Step 2.3: Create ERD (Entity Relationship Diagram)

**Action:** Visualize entities and their relationships.

**How to Execute:**

1. **Use ERD Notation:**
   - **Entities**: Rectangles with entity name
   - **Attributes**: Ovals connected to entities (or list inside entity box)
   - **Relationships**: Diamonds or lines connecting entities
   - **Cardinality**: 1:1, 1:N, M:N notation

2. **Define Relationships:**
   For each pair of related entities:
   - Identify relationship type:
     - One-to-One (1:1): User ↔ UserProfile
     - One-to-Many (1:N): Customer ↔ Orders
     - Many-to-Many (M:N): Students ↔ Courses (via enrollment junction table)

   - Document relationship:
     ```
     [Entity1] ←→ [Entity2]
     Type: [1:1 | 1:N | M:N]
     Description: [Entity1] [verb] [Entity2]
     Foreign Key: [column] REFERENCES [table]([column])
     Cascade Rules: [ON DELETE/UPDATE action]
     ```

3. **Handle Many-to-Many:**
   - Create junction/bridge table
   - Composite primary key from both foreign keys
   - Additional attributes for the relationship (if any)

   Example:
   ```
   Students ↔ Enrollments ↔ Courses

   Enrollments Table:
   - student_id (FK to Students)
   - course_id (FK to Courses)
   - enrollment_date
   - grade
   - PRIMARY KEY (student_id, course_id)
   ```

4. **Create ERD Diagram:**
   - Use tool: draw.io, Lucidchart, dbdiagram.io, or database tool
   - Show all tables as entities
   - Draw relationship lines with cardinality
   - Include primary/foreign key indicators
   - Add legend explaining notation

**Expected Outcome:** ERD diagram showing all entities and relationships

**Quality Check:** ✅ All tables appear in ERD, ✅ Relationships have cardinality marked, ✅ No orphan entities (all connected)

---

### Step 2.4: Design API Endpoints

**Action:** Define RESTful or GraphQL API structure.

**How to Execute (REST API):**

1. **Identify Resources:**
   - Each primary entity typically becomes a resource
   - Resource naming: plural nouns (users, projects, tasks)

2. **Define Endpoints for Each Resource:**

   Standard CRUD pattern:
   ```
   GET    /api/v1/[resource]           - List all (with pagination)
   GET    /api/v1/[resource]/:id       - Get single item
   POST   /api/v1/[resource]           - Create new item
   PUT    /api/v1/[resource]/:id       - Update entire item
   PATCH  /api/v1/[resource]/:id       - Update partial item
   DELETE /api/v1/[resource]/:id       - Delete item
   ```

3. **Add Custom Endpoints:**
   For actions that don't fit CRUD:
   ```
   POST   /api/v1/users/:id/reset-password
   POST   /api/v1/projects/:id/archive
   GET    /api/v1/reports/sales-summary
   ```

4. **Document Query Parameters:**
   For list endpoints:
   - Pagination: ?page=1&limit=20
   - Filtering: ?status=active&role=admin
   - Sorting: ?sort=created_at&order=desc
   - Search: ?q=keyword

5. **Define HTTP Status Codes:**
   - 200 OK: Successful GET/PUT/PATCH
   - 201 Created: Successful POST
   - 204 No Content: Successful DELETE
   - 400 Bad Request: Invalid input
   - 401 Unauthorized: Not authenticated
   - 403 Forbidden: Not authorized
   - 404 Not Found: Resource doesn't exist
   - 500 Internal Server Error: Server error

**How to Execute (GraphQL API):**

1. **Define Types:**
   ```graphql
   type User {
     id: ID!
     name: String!
     email: String!
     role: Role!
     createdAt: DateTime!
   }

   enum Role {
     ADMIN
     USER
     GUEST
   }
   ```

2. **Define Queries:**
   ```graphql
   type Query {
     user(id: ID!): User
     users(limit: Int, offset: Int): [User!]!
     searchUsers(query: String!): [User!]!
   }
   ```

3. **Define Mutations:**
   ```graphql
   type Mutation {
     createUser(input: CreateUserInput!): User!
     updateUser(id: ID!, input: UpdateUserInput!): User!
     deleteUser(id: ID!): Boolean!
   }

   input CreateUserInput {
     name: String!
     email: String!
     password: String!
     role: Role!
   }
   ```

**Expected Outcome:** Complete list of API endpoints with methods and purposes

**Quality Check:** ✅ All user actions have corresponding API endpoints, ✅ Naming follows REST/GraphQL conventions, ✅ CRUD operations covered for all resources

---

### Step 2.5: Define API Contracts (Request/Response Formats)

**Action:** Specify exact JSON structure for each endpoint.

**How to Execute:**

1. **For Each Endpoint, Document:**

   **Request Format:**
   ```json
   POST /api/v1/users

   Request Headers:
   Content-Type: application/json
   Authorization: Bearer <token>

   Request Body:
   {
     "name": "string (required, 2-100 chars)",
     "email": "string (required, valid email)",
     "password": "string (required, min 8 chars)",
     "role": "enum (required, one of: admin, user, guest)"
   }
   ```

   **Response Format:**
   ```json
   Success Response (201 Created):
   {
     "id": "uuid",
     "name": "string",
     "email": "string",
     "role": "string",
     "createdAt": "ISO-8601 datetime",
     "updatedAt": "ISO-8601 datetime"
   }

   Error Response (400 Bad Request):
   {
     "error": {
       "code": "VALIDATION_ERROR",
       "message": "Invalid input data",
       "details": [
         {
           "field": "email",
           "message": "Email already exists"
         }
       ]
     }
   }
   ```

2. **Define Standard Error Format:**
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

3. **Define Pagination Format:**
   ```json
   GET /api/v1/users?page=1&limit=20

   {
     "data": [...],
     "pagination": {
       "page": 1,
       "limit": 20,
       "total": 150,
       "totalPages": 8
     }
   }
   ```

**Expected Outcome:** API contracts documented for all endpoints with request/response examples

**Quality Check:** ✅ All fields have data type and validation specified, ✅ Error responses defined, ✅ Examples provided for complex structures

---

### Step 2.6: Document Authentication and Authorization

**Action:** Define how API security will work.

**How to Execute:**

1. **Authentication Mechanism:**

   Choose and document:
   - **Session-based**: Cookie with session ID
   - **Token-based**: JWT in Authorization header
   - **OAuth 2.0**: Third-party authentication
   - **API Keys**: For service-to-service

   Document flow:
   ```
   POST /api/v1/auth/login
   Request: { "email": "...", "password": "..." }
   Response: { "token": "jwt-token", "expiresIn": 3600 }

   Subsequent requests:
   Authorization: Bearer <jwt-token>
   ```

2. **Authorization Rules:**

   For each endpoint, specify required permissions:
   ```
   GET    /api/v1/users          - Requires: authenticated
   POST   /api/v1/users          - Requires: admin role
   DELETE /api/v1/users/:id      - Requires: admin role OR self
   GET    /api/v1/users/:id      - Requires: authenticated
   ```

3. **Permission Matrix:**

   Create table:
   | Endpoint | Method | Guest | User | Admin |
   |----------|--------|-------|------|-------|
   | /users | GET | ❌ | ✅ | ✅ |
   | /users | POST | ❌ | ❌ | ✅ |
   | /users/:id | GET | ❌ | ✅ (self) | ✅ (all) |
   | /users/:id | PUT | ❌ | ✅ (self) | ✅ (all) |
   | /users/:id | DELETE | ❌ | ❌ | ✅ |

4. **Rate Limiting:**
   - Define rate limits per user/IP
   - Example: 100 requests per minute per user
   - Document response when limit exceeded (429 Too Many Requests)

**Expected Outcome:** Authentication and authorization documented with permission matrix

**Quality Check:** ✅ All endpoints have authorization rules, ✅ Authentication flow documented, ✅ Rate limiting defined

---

### Step 2.7: Create API Documentation (OpenAPI/Swagger)

**Action:** Generate formal API specification.

**How to Execute:**

1. **Use OpenAPI 3.0 Specification:**

   Create `openapi.yaml` or `openapi.json`:
   ```yaml
   openapi: 3.0.0
   info:
     title: [Project Name] API
     version: 1.0.0
     description: [API description]

   servers:
     - url: https://api.example.com/v1
       description: Production
     - url: https://staging-api.example.com/v1
       description: Staging

   paths:
     /users:
       get:
         summary: List all users
         parameters:
           - name: page
             in: query
             schema:
               type: integer
         responses:
           '200':
             description: Success
             content:
               application/json:
                 schema:
                   $ref: '#/components/schemas/UserList'

   components:
     schemas:
       User:
         type: object
         properties:
           id:
             type: string
             format: uuid
           name:
             type: string
   ```

2. **Document All Endpoints:**
   - Path and method
   - Parameters (path, query, header)
   - Request body schema
   - Response schemas (success and error)
   - Authentication requirements
   - Examples

3. **Use Swagger UI:**
   - Host interactive API documentation
   - Allow developers to test API endpoints
   - Auto-generate from OpenAPI spec

**Expected Outcome:** OpenAPI specification file with all endpoints documented

**Quality Check:** ✅ Specification validates with OpenAPI linter, ✅ All endpoints from design included, ✅ Swagger UI generates correctly

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| Database Schema | Table definitions with columns and constraints | Document (TMPL-DB-001) |
| ERD | Entity relationship diagram | Diagram |
| Data Model | Entity definitions with attributes and rules | Document section |
| API Specification | Endpoint list with methods | Document section |
| API Contracts | Request/response formats for all endpoints | Document section |
| OpenAPI Spec | Formal API specification | YAML/JSON file |
| Permission Matrix | Authorization rules | Table |

---

## 7. Quality Standards

### Database Design Completeness

✅ All entities from requirements have tables
✅ Normalized to 3NF (unless denormalization justified)
✅ ERD shows all relationships with cardinality
✅ Indexes planned for performance
✅ Foreign key constraints defined

### API Design Completeness

✅ All user actions have API endpoints
✅ Request/response formats documented
✅ Authentication/authorization defined
✅ Error responses specified
✅ OpenAPI specification complete and valid

---

## 8. Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Over-normalized schema hurts performance | Identify query bottlenecks, denormalize specific tables with justification |
| API endpoints don't match user stories | Review each user story, ensure corresponding API operation exists |
| Inconsistent naming (users vs user) | Establish naming convention early: plural for collections, singular for instances |
| Missing error cases in API design | Review each endpoint, document failure scenarios (invalid input, not found, forbidden) |
| ERD too complex to read | Break into multiple diagrams by functional area, create summary diagram |

---

## 9. Tips for Success

- **Start with data model:** Database design drives API design
- **Think about queries:** Design schema with common queries in mind
- **API versioning:** Plan for future changes with /v1/ in URL path
- **Use examples:** Include example requests/responses in documentation
- **Review with team:** Have backend and frontend review together to catch issues
- **Test with sample data:** Create sample records to validate relationships
- **Document assumptions:** Note any unclear requirements as design decisions

---

## 10. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-DES-001 | Design Phase | Parent procedure |
| WI-DES-001 | Architecture Design | Prerequisites |
| TMPL-DB-001 | Database Design Template | Output template |
| CHECK-DES-002 | Database & API Design Checklist | Completeness verification |
| FORM-DES-002 | API Endpoint Specification | Per-resource API contract form |
| WI-DES-003 | UI/UX Design | Next work instruction |

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-18 | Initial | Work instruction created from SOP-DES-001 Step 2 |

---

**Document ID:** WI-DES-002-v1.0.0 | **Tier:** 3 - Work Instructions
