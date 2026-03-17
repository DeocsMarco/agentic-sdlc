# Work Instruction: Low-Level Design (LLD)

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-DES-004-v1.0.0 |
| **Version** | 1.0.0 |
| **Effective Date** | 2026-01-18 |
| **Review Date** | 2027-01-18 |
| **Department** | Design / Development |
| **Parent SOP** | SOP-DES-001 (Design Phase) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for creating low-level design (LLD) documentation as defined in Step 4 of the Design Phase (SOP-DES-001). It breaks down the high-level architecture into detailed component specifications that developers can implement directly.

---

## 2. Scope

**Applies To:**
- All projects entering development phase
- Complex features requiring detailed technical design
- Projects with multiple developers needing clear specifications

**Responsible Role:** Development Team (with Tech Lead oversight)

---

## 3. Prerequisites

Before starting low-level design, ensure you have:

☐ Architecture Document (from WI-DES-001)
☐ Database Schema (from WI-DES-002)
☐ API Specification (from WI-DES-002)
☐ UI/UX Designs (from WI-DES-003)
☐ User Stories with acceptance criteria
☐ Low-Level Design Template (TMPL-LLD-001)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Architecture Document | WI-DES-001 | Document |
| Database Schema | WI-DES-002 | Document/Diagram |
| API Specification | WI-DES-002 | Document |
| User Stories | Requirements Phase | List |
| Component Diagram | Architecture Document | Diagram |

---

## 5. Procedure Steps

### Step 4.1: Break Down Architecture into Component Specifications

**Action:** Decompose high-level architecture components into detailed module/class specifications.

**How to Execute:**

1. **Review Component Diagram:**
   - Identify all components from architecture (e.g., Authentication Module, Data Processing Service, Reporting Engine)
   - List dependencies between components
   - Note external integrations

2. **For Each Component, Define:**

   ```
   Component: [Component Name]

   Purpose:
   [What this component does in 2-3 sentences]

   Responsibilities:
   - [Specific responsibility 1]
   - [Specific responsibility 2]
   - [Specific responsibility 3]

   Technology:
   - Language: [e.g., TypeScript]
   - Framework: [e.g., Node.js/Express]
   - Dependencies: [List of libraries/packages]

   Location:
   - Repository: [repo name]
   - Directory: [path/to/component]

   Interfaces:
   - Exposes: [API endpoints, events, methods this component provides]
   - Consumes: [Dependencies on other components, external APIs]

   Configuration:
   - Environment variables: [List required config]
   - Config files: [List configuration files needed]
   ```

3. **Identify Sub-Components/Modules:**
   - Break large components into smaller modules
   - Each module should have single responsibility
   - Document module hierarchy

   Example:
   ```
   Authentication Component
   ├── Login Module
   ├── Registration Module
   ├── Password Reset Module
   ├── Session Management Module
   └── Token Service Module
   ```

4. **Define Component Boundaries:**
   - What is inside this component's scope?
   - What is explicitly NOT this component's responsibility?
   - How does it communicate with other components?

**Expected Outcome:** Complete component specifications for all architecture components

**Quality Check:** ✅ Every architecture component has detailed specification, ✅ Component responsibilities are clear and non-overlapping, ✅ Dependencies documented

---

### Step 4.2: Define Class Diagrams and Data Structures

**Action:** Create detailed class diagrams showing object-oriented design.

**How to Execute:**

1. **For Each Component/Module, Design Classes:**

   Use UML class notation:
   ```
   ┌─────────────────────────────┐
   │      ClassName              │
   ├─────────────────────────────┤
   │ - privateProperty: type     │
   │ + publicProperty: type      │
   │ # protectedProperty: type   │
   ├─────────────────────────────┤
   │ + publicMethod(): returnType│
   │ - privateMethod(): void     │
   └─────────────────────────────┘
   ```

2. **Document Each Class:**

   ```
   Class: [ClassName]

   Purpose: [What this class represents/does]

   Properties:
   | Name | Type | Access | Description | Default |
   |------|------|--------|-------------|---------|
   | id | string | private | Unique identifier | - |
   | name | string | public | Display name | "" |
   | createdAt | Date | public | Creation timestamp | new Date() |

   Methods:
   | Name | Parameters | Return Type | Access | Description |
   |------|------------|-------------|--------|-------------|
   | constructor | (id, name) | - | public | Initialize instance |
   | validate | () | boolean | public | Validate object state |
   | save | () | Promise<void> | public | Persist to database |
   | toJSON | () | object | public | Serialize for API |
   | _encrypt | (data: string) | string | private | Internal helper |

   Relationships:
   - Inherits from: [BaseClass]
   - Implements: [IInterface1, IInterface2]
   - Composed of: [ChildClass1, ChildClass2]
   - Associates with: [RelatedClass]
   ```

3. **Define Interfaces/Contracts:**

   ```
   Interface: [IInterfaceName]

   Purpose: [Contract definition]

   Methods:
   | Method | Parameters | Return Type | Description |
   |--------|------------|-------------|-------------|
   | method1 | (param: type) | type | [description] |
   | method2 | () | void | [description] |
   ```

4. **Document Data Structures:**

   For non-class data structures:

   ```
   Type/Struct: [DataStructureName]

   Fields:
   {
     field1: type,        // Description
     field2: type,        // Description
     nested: {
       subfield1: type,   // Description
       subfield2: type    // Description
     },
     optional?: type      // Optional field
   }

   Example:
   {
     field1: "value",
     field2: 123,
     nested: {
       subfield1: true,
       subfield2: "text"
     }
   }
   ```

5. **Create Class Diagram:**
   - Use UML tool (draw.io, PlantUML, Lucidchart)
   - Show all classes with properties and methods
   - Draw relationships:
     - **Inheritance** (is-a): Solid line with hollow arrow
     - **Implementation**: Dashed line with hollow arrow
     - **Association** (has-a): Solid line
     - **Composition**: Solid line with filled diamond
     - **Dependency**: Dashed line with arrow
   - Include cardinality (1, *, 0..1, 1..*)

**Expected Outcome:** Class diagrams and class specifications for all components

**Quality Check:** ✅ All classes have clear responsibilities, ✅ Relationships properly defined, ✅ Data structures match database schema and API contracts

---

### Step 4.3: Document Algorithms and Business Logic

**Action:** Specify complex algorithms, calculations, and business rules.

**How to Execute:**

1. **Identify Complex Logic:**
   - Review user stories for business rules
   - Identify calculations (pricing, scoring, aggregations)
   - Note validation logic
   - Find workflow/state machine logic

2. **Document Algorithms in Pseudocode:**

   ```
   Algorithm: [AlgorithmName]

   Purpose: [What it calculates/does]

   Inputs:
   - [input1]: [type] - [description]
   - [input2]: [type] - [description]

   Output:
   - [returnValue]: [type] - [description]

   Pseudocode:
   FUNCTION algorithmName(input1, input2):
       // Step 1: Initialize
       result = 0

       // Step 2: Process
       FOR EACH item IN input1:
           IF item.condition:
               result = result + calculate(item, input2)
           END IF
       END FOR

       // Step 3: Validate and return
       IF result < 0:
           THROW ValidationError
       END IF

       RETURN result
   END FUNCTION

   Time Complexity: O(n)
   Space Complexity: O(1)

   Edge Cases:
   - Empty input: Return 0
   - Negative values: Throw error
   - Large dataset: Consider pagination
   ```

3. **Document Business Rules:**

   ```
   Business Rule: [Rule Name]

   Description: [Business requirement]

   Conditions:
   IF [condition1] AND [condition2]:
       THEN [action1]
   ELSE IF [condition3]:
       THEN [action2]
   ELSE:
       THEN [default action]

   Example:
   User with role="admin" OR user.id == resource.ownerId:
       Allow access
   Else:
       Deny access (403 Forbidden)

   Implementation Location: [Class.method or file path]
   ```

4. **Document State Machines (if applicable):**

   For entities with lifecycle states:

   ```
   State Machine: [EntityName] States

   States:
   - DRAFT: Initial state, can edit freely
   - SUBMITTED: Under review, read-only
   - APPROVED: Approved, can activate
   - ACTIVE: Live and operational
   - ARCHIVED: Historical, read-only

   Transitions:
   DRAFT → SUBMITTED: submit()
       Condition: All required fields filled
       Action: Set submittedAt timestamp, notify reviewers

   SUBMITTED → APPROVED: approve()
       Condition: User has approver role
       Action: Set approvedAt, approvedBy

   SUBMITTED → DRAFT: reject()
       Condition: User has approver role
       Action: Set rejectionReason, notify submitter

   APPROVED → ACTIVE: activate()
       Condition: Current date >= scheduledDate
       Action: Set activatedAt

   * → ARCHIVED: archive()
       Condition: User is owner or admin
       Action: Set archivedAt, make read-only

   State Diagram:
   [DRAFT] --submit()--> [SUBMITTED] --approve()--> [APPROVED] --activate()--> [ACTIVE]
      ^                      |                                                    |
      |                      |                                                    |
      +------reject()---------+                                                   |
                                                                                  |
      [ARCHIVED] <--archive()-----------------------------------------------from any state
   ```

5. **Document Calculation Formulas:**

   ```
   Calculation: [Name]

   Formula:
   result = (base × multiplier) + fee - discount

   Where:
   - base: Original amount (from user input)
   - multiplier: Rate based on tier (from config table)
   - fee: Fixed fee (constant: $5)
   - discount: Based on user.discountPercent / 100

   Example:
   base = $100
   multiplier = 1.15 (tier 2)
   fee = $5
   discount = $100 × 0.10 = $10

   result = ($100 × 1.15) + $5 - $10 = $110

   Rounding: Round to 2 decimal places
   Minimum: $0 (cannot be negative)
   Maximum: $10,000 (business rule)
   ```

**Expected Outcome:** Algorithms, business rules, and state machines documented

**Quality Check:** ✅ All complex logic from requirements is specified, ✅ Pseudocode is clear and implementable, ✅ Edge cases identified

---

### Step 4.4: Specify Component Interfaces

**Action:** Define public APIs and contracts for each component.

**How to Execute:**

1. **For Each Component, Document Public Interface:**

   ```
   Component Interface: [ComponentName]

   Public Methods/Functions:

   FUNCTION createUser(userData: CreateUserInput): Promise<User>

   Description: Creates a new user account

   Parameters:
   - userData: CreateUserInput
     {
       name: string (required, 2-100 chars),
       email: string (required, valid email),
       password: string (required, min 8 chars),
       role: 'admin' | 'user' (optional, default: 'user')
     }

   Returns: Promise<User>
   - Resolves to User object on success
   - Rejects with ValidationError if input invalid
   - Rejects with DuplicateError if email exists

   Throws:
   - ValidationError: Invalid input data
   - DuplicateError: Email already registered
   - DatabaseError: Database operation failed

   Example Usage:
   try {
     const user = await createUser({
       name: "John Doe",
       email: "john@example.com",
       password: "SecurePass123"
     });
     console.log("User created:", user.id);
   } catch (error) {
     if (error instanceof ValidationError) {
       // Handle validation error
     }
   }
   ```

2. **Document Event Interfaces (if event-driven):**

   ```
   Events Published:

   Event: user.created
   Payload: {
     userId: string,
     email: string,
     timestamp: Date
   }
   When: After successful user creation
   Consumers: [Email Service, Analytics Service]

   Event: user.updated
   Payload: {
     userId: string,
     changedFields: string[],
     timestamp: Date
   }
   When: After user profile update
   Consumers: [Audit Log Service]

   Events Consumed:

   Event: payment.completed
   Source: Payment Service
   Handler: onPaymentCompleted(payload)
   Action: Activate user subscription
   ```

3. **Define Service Contracts (for microservices):**

   ```
   Service: User Service

   Endpoints:
   POST   /api/v1/users          - Create user
   GET    /api/v1/users/:id      - Get user by ID
   PUT    /api/v1/users/:id      - Update user
   DELETE /api/v1/users/:id      - Delete user
   GET    /api/v1/users          - List users (paginated)

   Service Dependencies:
   - Email Service: Send welcome email
   - Auth Service: Generate JWT token
   - Storage Service: Upload profile image

   Health Check:
   GET /health
   Response: { status: "healthy", timestamp: "..." }
   ```

4. **Document Internal Interfaces (between modules):**

   ```
   Internal Interface: AuthService

   Used By: [UserController, SessionManager]

   Methods:
   - hashPassword(password: string): Promise<string>
   - verifyPassword(password: string, hash: string): Promise<boolean>
   - generateToken(userId: string): string
   - verifyToken(token: string): { userId: string } | null

   Not Exposed To: External consumers, only internal modules
   ```

5. **Define Data Transfer Objects (DTOs):**

   ```
   DTO: CreateUserInput
   {
     name: string,
     email: string,
     password: string,
     role?: 'admin' | 'user'
   }

   DTO: UserResponse
   {
     id: string,
     name: string,
     email: string,
     role: string,
     createdAt: string,  // ISO-8601
     updatedAt: string   // ISO-8601
   }
   Note: Password never included in responses

   DTO: UpdateUserInput
   {
     name?: string,
     email?: string
   }
   Note: Partial update, only provided fields updated
   ```

**Expected Outcome:** Complete interface specifications for all components

**Quality Check:** ✅ All public methods documented with parameters and returns, ✅ Error cases specified, ✅ Dependencies clearly listed

---

### Step 4.5: Define Error Handling Approach

**Action:** Specify how errors will be detected, handled, and reported.

**How to Execute:**

1. **Define Error Categories:**

   ```
   Error Categories:

   1. Validation Errors
   - User input validation failures
   - Business rule violations
   - HTTP Status: 400 Bad Request
   - Action: Return error details to user

   2. Authorization Errors
   - User not authenticated
   - User lacks required permissions
   - HTTP Status: 401 Unauthorized, 403 Forbidden
   - Action: Return generic error, log attempt

   3. Not Found Errors
   - Requested resource doesn't exist
   - HTTP Status: 404 Not Found
   - Action: Return not found message

   4. Conflict Errors
   - Duplicate resource (unique constraint violation)
   - Concurrent update conflict
   - HTTP Status: 409 Conflict
   - Action: Return conflict details

   5. External Service Errors
   - Third-party API failure
   - Network timeout
   - HTTP Status: 502 Bad Gateway, 504 Gateway Timeout
   - Action: Log error, return user-friendly message, retry if appropriate

   6. Server Errors
   - Unexpected exceptions
   - Database errors
   - HTTP Status: 500 Internal Server Error
   - Action: Log full error, return generic message to user
   ```

2. **Define Error Response Format:**

   ```
   Standard Error Response:
   {
     "error": {
       "code": "ERROR_CODE",
       "message": "Human-readable error message",
       "details": [
         {
           "field": "email",
           "message": "Email is already registered"
         }
       ],
       "timestamp": "2026-01-18T12:00:00Z",
       "requestId": "uuid-for-tracing"
     }
   }

   Error Codes:
   - VALIDATION_ERROR: Input validation failed
   - UNAUTHORIZED: Not authenticated
   - FORBIDDEN: Not authorized
   - NOT_FOUND: Resource not found
   - DUPLICATE: Resource already exists
   - CONFLICT: Concurrent update conflict
   - EXTERNAL_SERVICE_ERROR: Third-party service failed
   - INTERNAL_ERROR: Unexpected server error
   ```

3. **Document Error Handling Flow:**

   ```
   Error Handling Flow:

   1. Error Occurs (exception thrown)
      ↓
   2. Catch in Component Layer
      - Categorize error type
      - Add context (what operation failed)
      ↓
   3. Log Error
      - Validation/Not Found: Debug level
      - Authorization: Warning level (potential security issue)
      - Server errors: Error level
      - Include: timestamp, userId, requestId, stack trace
      ↓
   4. Transform to Response
      - Map to HTTP status code
      - Create error response object
      - Sanitize error (remove sensitive details for client)
      ↓
   5. Return to Client
      - Send error response
      - For 5xx errors: Generic message to client, details in logs
   ```

4. **Define Retry Strategy (for external services):**

   ```
   Retry Strategy:

   Applicable To: External API calls, database connections

   Retry Policy:
   - Max retries: 3
   - Backoff: Exponential (1s, 2s, 4s)
   - Retry on:
     - Network timeout
     - 5xx server errors
     - Connection refused

   - Do NOT retry on:
     - 4xx client errors (won't succeed on retry)
     - Authentication failures
     - Validation errors

   Circuit Breaker:
   - If service fails 5 times in 1 minute:
     - Open circuit (stop calling service)
     - Return cached data or default response
     - Retry after 30 seconds (half-open)
     - If successful, close circuit (resume normal)
   ```

5. **Document Logging Requirements:**

   ```
   Logging Standards:

   Log Levels:
   - DEBUG: Detailed diagnostic info (development only)
   - INFO: General informational messages (user actions)
   - WARNING: Unusual but handled situations (auth failures)
   - ERROR: Errors requiring attention (server errors)
   - CRITICAL: System failure (database down)

   What to Log:
   - All API requests: method, path, userId, timestamp, duration
   - All errors: level, message, stack trace, context
   - Business events: user.created, order.completed
   - Security events: login, logout, permission denied

   What NOT to Log:
   - Passwords (plain or hashed)
   - Credit card numbers
   - API keys or tokens
   - Personal data (if GDPR applies)

   Log Format (JSON):
   {
     "timestamp": "2026-01-18T12:00:00Z",
     "level": "ERROR",
     "message": "Failed to create user",
     "context": {
       "userId": "...",
       "requestId": "...",
       "error": "..."
     }
   }
   ```

**Expected Outcome:** Error handling strategy documented with error types, responses, and retry logic

**Quality Check:** ✅ All error categories defined, ✅ Error response format consistent, ✅ Logging requirements clear, ✅ Retry strategy for external calls

---

### Step 4.6: Document Configuration Requirements

**Action:** Specify all configuration needed by the system.

**How to Execute:**

1. **Define Environment Variables:**

   ```
   Environment Variables:

   Database:
   - DATABASE_URL: string (required)
     Description: PostgreSQL connection string
     Example: postgresql://user:pass@localhost:5432/dbname

   - DATABASE_POOL_SIZE: number (optional, default: 10)
     Description: Max database connections

   Authentication:
   - JWT_SECRET: string (required, sensitive)
     Description: Secret key for JWT signing
     Min length: 32 characters

   - JWT_EXPIRY: string (optional, default: "1h")
     Description: Token expiration time
     Format: Zeit/ms format (e.g., "1h", "7d")

   External Services:
   - EMAIL_SERVICE_URL: string (required)
     Description: Email service API endpoint

   - EMAIL_API_KEY: string (required, sensitive)
     Description: API key for email service

   - STORAGE_BUCKET: string (required)
     Description: Cloud storage bucket name

   Application:
   - PORT: number (optional, default: 3000)
     Description: HTTP server port

   - NODE_ENV: string (required)
     Values: "development" | "staging" | "production"
     Description: Environment mode

   - LOG_LEVEL: string (optional, default: "info")
     Values: "debug" | "info" | "warning" | "error"
     Description: Minimum log level
   ```

2. **Define Configuration Files:**

   ```
   Configuration Files:

   File: config/default.json
   Purpose: Default configuration for all environments
   {
     "app": {
       "name": "Application Name",
       "version": "1.0.0"
     },
     "server": {
       "port": 3000,
       "timeout": 30000
     },
     "pagination": {
       "defaultLimit": 20,
       "maxLimit": 100
     }
   }

   File: config/production.json
   Purpose: Production-specific overrides
   {
     "server": {
       "port": 8080
     },
     "logging": {
       "level": "warning"
     }
   }

   File: .env (not checked into version control)
   Purpose: Sensitive environment-specific values
   DATABASE_URL=...
   JWT_SECRET=...
   EMAIL_API_KEY=...
   ```

3. **Define Feature Flags:**

   ```
   Feature Flags:

   Flag: enable_new_dashboard
   Type: boolean
   Default: false
   Description: Enable new dashboard UI
   Rollout: Gradual (10% → 50% → 100%)

   Flag: max_upload_size_mb
   Type: number
   Default: 10
   Description: Maximum file upload size in MB
   Range: 1-100

   Flag: maintenance_mode
   Type: boolean
   Default: false
   Description: Enable maintenance mode (block all requests)

   Storage: Database table or remote config service
   ```

4. **Define Constants:**

   ```
   Application Constants:

   File: src/constants.ts

   export const PASSWORD_MIN_LENGTH = 8;
   export const PASSWORD_MAX_LENGTH = 128;
   export const SESSION_TIMEOUT_MINUTES = 30;
   export const MAX_LOGIN_ATTEMPTS = 5;
   export const LOCKOUT_DURATION_MINUTES = 15;

   export const ALLOWED_FILE_TYPES = [
     'image/jpeg',
     'image/png',
     'application/pdf'
   ];

   export const USER_ROLES = {
     ADMIN: 'admin',
     USER: 'user',
     GUEST: 'guest'
   } as const;
   ```

5. **Document Configuration Loading:**

   ```
   Configuration Loading Order:

   1. Load default.json (base configuration)
   2. Load {environment}.json (environment-specific overrides)
   3. Load .env file (environment variables)
   4. Override with process.env (system environment variables)

   Priority: System env > .env file > environment.json > default.json

   Validation:
   - On startup, validate all required config present
   - Fail fast if critical config missing
   - Log warning if optional config missing (using default)
   ```

**Expected Outcome:** Complete configuration requirements documented

**Quality Check:** ✅ All environment variables listed with types and defaults, ✅ Sensitive config identified, ✅ Configuration loading order defined

---

### Step 4.7: Create Sequence Diagrams for Complex Flows

**Action:** Visualize interactions between components for complex operations.

**How to Execute:**

1. **Identify Complex Flows:**
   - Multi-step user workflows
   - Interactions involving multiple components
   - Asynchronous operations
   - Error scenarios

2. **Create Sequence Diagrams:**

   Use UML sequence diagram notation:

   ```
   Flow: User Registration

   Actors/Components:
   - Client (Web Browser)
   - API Gateway
   - User Service
   - Auth Service
   - Email Service
   - Database

   Sequence:

   Client -> API Gateway: POST /api/v1/users (name, email, password)
   API Gateway -> User Service: createUser(userData)
   User Service -> User Service: validateInput(userData)

   alt validation fails
     User Service -> API Gateway: ValidationError
     API Gateway -> Client: 400 Bad Request
   end

   User Service -> Database: SELECT user WHERE email = ?
   Database -> User Service: null (not found)

   alt user exists
     User Service -> API Gateway: DuplicateError
     API Gateway -> Client: 409 Conflict
   end

   User Service -> Auth Service: hashPassword(password)
   Auth Service -> User Service: hashedPassword

   User Service -> Database: INSERT INTO users
   Database -> User Service: user (created)

   User Service -> Email Service: sendWelcomeEmail(user)
   Note: Email sent asynchronously

   User Service -> Auth Service: generateToken(userId)
   Auth Service -> User Service: jwt token

   User Service -> API Gateway: { user, token }
   API Gateway -> Client: 201 Created { user, token }

   Email Service -> Database: Log email sent
   ```

3. **Document Alternative Flows:**

   ```
   Alternative Flow: Email Service Unavailable

   ...
   User Service -> Email Service: sendWelcomeEmail(user)

   alt email service down
     Email Service -> User Service: ServiceUnavailableError
     User Service -> Queue: Queue email for retry
     Note: User creation still succeeds, email sent later
   end

   User Service -> API Gateway: { user, token }
   ...
   ```

4. **Create Diagrams for Key Flows:**

   Essential flows to diagram:
   - User authentication (login)
   - User registration
   - Primary CRUD operations (create, read, update, delete)
   - Complex business workflows (approval flow, checkout process)
   - Integration with external services
   - Error scenarios and recovery

5. **Use Consistent Notation:**

   ```
   Notation Guide:

   -> : Synchronous call
   --> : Asynchronous call/message
   --> : Return response

   alt/else/end : Conditional logic
   opt/end : Optional step
   loop/end : Repeated steps
   par/end : Parallel execution

   Note: Add explanation note
   ```

**Expected Outcome:** Sequence diagrams for all complex flows

**Quality Check:** ✅ All multi-component interactions diagrammed, ✅ Error scenarios included, ✅ Async operations clearly marked

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| LLD Document | Complete low-level design specification | Document (TMPL-LLD-001) |
| Component Specifications | Detailed specs for each component | Document sections |
| Class Diagrams | Object-oriented design diagrams | UML diagrams |
| Sequence Diagrams | Complex flow interactions | UML diagrams |
| Algorithm Documentation | Pseudocode for complex logic | Document sections |
| Interface Specifications | Public APIs and contracts | Document sections |
| Error Handling Strategy | Error categories and handling | Document section |
| Configuration Specs | Environment variables and config | Document section |

---

## 7. Quality Standards

### LLD Document Completeness

✅ All 7 procedure steps completed
✅ All architecture components have detailed specifications
✅ Class diagrams created for all modules
✅ Algorithms documented with pseudocode
✅ Component interfaces clearly defined
✅ Error handling strategy comprehensive
✅ Configuration requirements complete
✅ Sequence diagrams for complex flows
✅ Each component is independently testable
✅ Developer can implement directly from specs

---

## 8. Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Too much detail (over-specification) | Focus on complex logic and interfaces; simple CRUD doesn't need pseudocode |
| Specifications don't match API design | Cross-reference with WI-DES-002 outputs, ensure consistency |
| Class diagram too complex to read | Break into multiple diagrams by component, create summary diagram |
| Developers say specs are unclear | Add code examples, review specs with dev team before finalizing |
| Algorithm description ambiguous | Use pseudocode or flowcharts, include examples with sample data |
| Missing edge cases in error handling | Review each operation, ask "what could go wrong?", document all failure modes |

---

## 9. Tips for Success

- **Start with interfaces:** Define how components talk to each other first
- **Use examples liberally:** Show example requests, responses, data structures
- **Review with developers:** Have the team that will implement review LLD
- **Don't over-engineer:** Design for current requirements, not hypothetical future needs
- **Make it testable:** Every component should be independently unit-testable
- **Link to user stories:** Trace each component back to requirements it satisfies
- **Document assumptions:** Note any unclear requirements and decisions made
- **Use consistent naming:** Match names in LLD to database schema, API spec, UI mockups

---

## 10. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-DES-001 | Design Phase | Parent procedure |
| WI-DES-001 | Architecture Design | Input (architecture) |
| WI-DES-002 | Database & API Design | Input (schema, APIs) |
| WI-DES-003 | UI/UX Design | Input (wireframes) |
| TMPL-LLD-001 | Low-Level Design Template | Output template |
| CHECK-DES-004 | LLD Completeness Checklist | Completeness verification |
| FORM-DES-005 | Component Specification Form | Per-component dev summary card |
| WI-DES-005 | Design Review | Next work instruction |

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-18 | Initial | Work instruction created from SOP-DES-001 Step 4 |

---

**Document ID:** WI-DES-004-v1.0.0 | **Tier:** 3 - Work Instructions
