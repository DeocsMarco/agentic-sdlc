# Work Instruction: UI/UX & Low-Level Design

## Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-DES-003-v2.0.0 |
| **Version** | 2.0.0 |
| **Effective Date** | 2026-02-27 |
| **Review Date** | 2027-02-27 |
| **Department** | Design / Development |
| **Parent SOP** | SOP-DES-001 (Design Phase) |
| **Approved By** | [Pending] |

---

## 1. Purpose

This work instruction provides step-by-step guidance for creating UI/UX designs and low-level design (LLD) documentation as defined in Step 2 of the Design Phase (SOP-DES-001). It ensures user interfaces are designed with user needs, brand consistency, and usability in mind, and that high-level architecture is broken down into detailed component specifications that developers can implement directly.

---

## 2. Scope

**Applies To:**
- All projects with user-facing interfaces (web, mobile, desktop)
- All projects entering development phase requiring detailed technical design
- Redesign initiatives affecting user interface or component specifications

**Responsible Role:** Designer (Part A), Development Team with Tech Lead oversight (Part B)

---

## 3. Prerequisites

Before starting, ensure you have:

☐ Approved SRS (from Requirements Phase)
☐ User Stories with acceptance criteria
☐ Architecture Document (from WI-DES-001) including database schema and API specification
☐ UI/UX Design Tools access (Figma/Sketch/Adobe XD)
☐ Brand guidelines (if available from client)

---

## 4. Inputs Required

| Input | Source | Format |
|-------|--------|--------|
| Approved SRS | Requirements Phase | Document |
| User Stories | Requirements Phase | List |
| Architecture Document | WI-DES-001 | Document |
| Database Schema & API Spec | WI-DES-001 | Document/Diagram |
| Brand Guidelines | Client | Document/Style guide |
| Target User Profiles | Requirements Phase | User research data |

---

## 5. Procedure Steps

## Part A: UI/UX Design

### Step 2.1: Create User Personas and Journey Maps

**Action:** Define representative users and map their interactions with the system.

**How to Execute:**

1. **Create User Personas** (3-5 primary user types):
   - Demographics (age range, role/title, technical skill level)
   - Goals and pain points
   - Behavior patterns and preferred tools/devices
   - Needs from system

2. **Create Journey Maps** for each persona's primary workflows:
   - Map each stage of interaction: entry point → user action → system response
   - Document thoughts, emotions, and pain points at each stage
   - Identify key touchpoints, critical decision points, and potential frustration points

**Expected Outcome:** 3-5 user personas with complete journey maps for primary workflows

**Quality Check:** ✅ Personas represent actual user types from requirements, ✅ Journey maps cover all major user stories

---

### Step 2.2: Design Information Architecture

**Action:** Organize content and functionality into logical structure.

**How to Execute:**

1. Create content inventory listing all screens/pages and features
2. Create sitemap showing hierarchical navigation
3. Define navigation structure (primary, secondary, utility, footer)
4. Create information hierarchy per screen (primary/secondary/tertiary content)

**Expected Outcome:** Sitemap and navigation structure documented with hierarchy defined

**Quality Check:** ✅ All user stories have corresponding screens, ✅ Max 3 clicks to any function

---

### Step 2.3: Create Wireframes for All Screens

**Action:** Design low-fidelity layout for each screen/page.

**How to Execute:**

1. For each screen, create wireframe showing layout structure, content blocks, UI elements, and annotations
2. Use gray scale only (no colors) with placeholder content
3. Annotate interactions (hover states, click actions, validation, loading states)
4. Create mobile/responsive wireframes if applicable
5. Design empty states, loading states, and error states

**Expected Outcome:** Wireframes for all screens in sitemap with annotations

**Quality Check:** ✅ Every user story has corresponding wireframe, ✅ All interactive elements documented

---

### Step 2.4: Design Visual Mockups

**Action:** Create high-fidelity designs with colors, typography, and branding.

**How to Execute:**

1. Establish design system foundation (color palette, typography, spacing system)
2. Apply visual design to wireframes with brand colors, typography, real content, and interactive states (default, hover, active, disabled, focus)
3. Design key screens first (dashboard → primary flows → secondary screens)
4. Ensure brand consistency and accessibility (contrast ratio ≥ 4.5:1 WCAG AA)

**Expected Outcome:** High-fidelity mockups for all key screens with consistent branding

**Quality Check:** ✅ Designs follow brand guidelines, ✅ Color contrast meets WCAG AA, ✅ All states designed

---

### Step 2.5: Build Interactive Prototypes

**Action:** Create clickable prototypes to simulate user flows.

**How to Execute:**

1. Link screens together with interaction hotspots in design tool
2. Define interactions (click, hover, scroll, drag, swipe)
3. Add transitions (slide, fade, 200-300ms duration)
4. Implement 2-3 key user flows end-to-end
5. Self-test all flows for broken links

**Expected Outcome:** Interactive prototype with all major user flows working

**Quality Check:** ✅ All primary user stories completable in prototype, ✅ Navigation works as expected

---

### Step 2.6: Conduct Usability Review

**Action:** Test prototype with stakeholders and get feedback.

**How to Execute:**

1. **Internal Review:** Present to design team, PM, and developers; document feedback with severity
2. **Client Review:** Schedule review meeting, walk through key flows, allow client to click through
3. **Accessibility Review:** Check color contrast, tab order, touch target sizes (min 44x44px)
4. **Compile Review Findings:** Create prioritized list (High/Medium/Low)

**Expected Outcome:** Review findings documented with prioritized action items

**Quality Check:** ✅ Client review completed, ✅ Usability issues identified, ✅ Accessibility checked

**Go/No-Go:** Client must approve UI/UX designs before proceeding to Part B. If not approved, revise designs based on feedback and re-present.

---

### Step 2.7: Document Design System/Style Guide

**Action:** Create reusable component library and style specifications.

**How to Execute:**

1. Document color system (primary, secondary, neutral, semantic palettes with hex values)
2. Document typography (font families, type scale H1 through caption, weights, line heights)
3. Create component library (buttons, input fields, cards, modals, alerts, tables, dropdowns, radio/checkboxes, tabs, badges, progress indicators, navigation bars) — each with specs and states
4. Document spacing system (base unit, scale) and grid system (desktop, tablet, mobile breakpoints)
5. Document icon system (library, sizes, usage guidelines)

**Expected Outcome:** Complete design system documentation with component library

**Quality Check:** ✅ All components in mockups are documented, ✅ Design tokens defined, ✅ Developer can implement from specs

---

## Part B: Low-Level Design

### Step 2.8: Break Down Architecture into Component Specifications

**Action:** Decompose high-level architecture components into detailed module/class specifications.

**How to Execute:**

1. **Review Component Diagram** from architecture, list all components and dependencies

2. **For Each Component, Define:**
   - Purpose, responsibilities (specific, non-overlapping)
   - Technology (language, framework, dependencies)
   - Location (repository, directory path)
   - Interfaces: what it exposes and what it consumes
   - Configuration (environment variables, config files)

3. **Identify Sub-Components/Modules** for large components:
   ```
   Authentication Component
   ├── Login Module
   ├── Registration Module
   ├── Password Reset Module
   ├── Session Management Module
   └── Token Service Module
   ```

4. **Define Component Boundaries:** What's in scope, what's not, communication method

**Expected Outcome:** Complete component specifications for all architecture components

**Quality Check:** ✅ Every architecture component has detailed specification, ✅ Responsibilities clear and non-overlapping

---

### Step 2.9: Define Class Diagrams and Data Structures

**Action:** Create detailed class diagrams showing object-oriented design.

**How to Execute:**

1. For each component/module, design classes with properties (name, type, access, default), methods (name, parameters, return type, access), and relationships (inheritance, composition, association)

2. Define interfaces/contracts for polymorphic behavior

3. Document Data Transfer Objects (DTOs) matching API request/response contracts with validation rules

4. Create UML class diagram showing all classes, relationships, and cardinality

**Expected Outcome:** Class diagrams and class specifications for all components

**Quality Check:** ✅ All classes have clear responsibilities, ✅ Data structures match database schema and API contracts

---

### Step 2.10: Document Algorithms and Business Logic

**Action:** Specify complex algorithms, calculations, and business rules.

**How to Execute:**

1. Identify complex logic from user stories (business rules, calculations, validation, workflows)

2. Document algorithms in pseudocode with inputs, outputs, complexity, and edge cases

3. Document business rules with conditions, actions, and implementation location

4. Document state machines for entities with lifecycle states (states, transitions, conditions, side effects)

5. Document calculation formulas with examples, rounding rules, min/max values

**Expected Outcome:** Algorithms, business rules, and state machines documented

**Quality Check:** ✅ All complex logic specified, ✅ Pseudocode is implementable, ✅ Edge cases identified

---

### Step 2.11: Specify Component Interfaces and Error Handling

**Action:** Define public APIs, contracts, and error handling for each component.

**How to Execute:**

1. **For each component, document public interface:** All public methods with parameters, return types, descriptions, thrown exceptions, and example usage

2. **Document event interfaces** (if event-driven): Events published and consumed with payloads

3. **Define error categories:** Validation (400), Authorization (401/403), Not Found (404), Conflict (409), External Service (502), Server (500) — each with handling approach

4. **Define error response format** consistent with API contracts

5. **Define retry strategy** for external services: max retries, exponential backoff, circuit breaker thresholds

6. **Document logging requirements:** Log levels, what to log, what NOT to log (passwords, tokens, PII), log format (JSON)

**Expected Outcome:** Complete interface specifications and error handling strategy

**Quality Check:** ✅ All public methods documented, ✅ Error cases specified, ✅ Retry strategy defined

---

### Step 2.12: Document Configuration and Create Sequence Diagrams

**Action:** Specify configuration requirements and visualize complex interactions.

**How to Execute:**

1. **Define environment variables** with name, type, required/optional, default, description; mark sensitive variables

2. **Define configuration files** (default.json, environment-specific overrides, .env for secrets)

3. **Define feature flags** and constants

4. **Document configuration loading order:** System env > .env file > environment.json > default.json

5. **Create sequence diagrams** for all multi-component interactions using UML notation:
   - Authentication flow, primary CRUD, complex business workflows
   - Include alternative/error flows with alt/else blocks
   - Mark async operations distinctly

**Expected Outcome:** Configuration requirements and sequence diagrams complete

**Quality Check:** ✅ All env variables listed, ✅ Sensitive config identified, ✅ Complex flows diagrammed with error scenarios

---

## 6. Outputs/Deliverables

| Deliverable | Description | Format |
|-------------|-------------|--------|
| User Personas | 3-5 representative user profiles | Document/Slides |
| Journey Maps | User flows for primary workflows | Diagrams |
| Sitemap | Information architecture structure | Diagram |
| Wireframes | Low-fidelity layouts for all screens | Design file |
| Mockups | High-fidelity visual designs | Design file (Figma/Sketch) |
| Prototype | Interactive clickable prototype | Prototype link |
| Style Guide | Design system and component library | Document/Design file |
| Usability Review Report | Findings and action items | Document |
| LLD Document | Complete low-level design specification | Document (TMPL-ARCH-001 LLD section) |
| Component Specifications | Detailed specs for each component | Document sections |
| Class Diagrams | Object-oriented design diagrams | UML diagrams |
| Sequence Diagrams | Complex flow interactions | UML diagrams |

---

## 7. Quality Standards

### UI/UX Design Completeness

✅ User personas created for primary user types
✅ Wireframes created for all screens
✅ Mockups match brand guidelines
✅ Interactive prototype demonstrates key user flows
✅ Accessibility standards met (WCAG AA)
✅ Client review completed and feedback addressed
✅ Design system documented with all components

### LLD Document Completeness

✅ All architecture components have detailed specifications
✅ Class diagrams created for all modules
✅ Algorithms documented with pseudocode
✅ Component interfaces clearly defined
✅ Error handling strategy comprehensive
✅ Configuration requirements complete
✅ Sequence diagrams for complex flows
✅ Each component is independently testable

---

## 8. Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Client feedback contradicts user research | Present data, recommend user testing, offer compromise |
| Design doesn't match technical constraints | Meet with developers early, adjust design |
| Too many screens to wireframe in time | Prioritize key flows, reuse patterns, create templates |
| Too much LLD detail (over-specifying CRUD) | Focus on complex logic; reference patterns for standard operations |
| Specifications don't match API design | Cross-reference with WI-DES-001 outputs, resolve discrepancies |
| Developers say specs unclear | Add code examples, walk through with dev team |
| Missing edge cases in error handling | Review each operation, ask "what could go wrong?" |

---

## 9. Tips for Success

- **Involve users early:** Get feedback on wireframes before investing in mockups
- **Design mobile-first:** Start with mobile layouts, expand to desktop
- **Start with interfaces:** Define how components talk to each other first
- **Use examples liberally:** Show example requests, responses, data structures
- **Review with developers:** Have the implementing team review LLD
- **Make it testable:** Every component should be independently unit-testable
- **Link to user stories:** Trace each component back to requirements

---

## 10. Related Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| SOP-DES-001 | Design Phase | Parent procedure |
| WI-DES-001 | Architecture & Data Design | Input documents |
| TMPL-ARCH-001 | Architecture Document Template | Output template (includes LLD section) |
| CHECK-DES-003 | UI/UX & LLD Design Checklist | Completeness verification |
| FORM-DES-005 | Component Specification | Per-component dev summary card |
| WI-DES-005 | Design Review | Next work instruction |

---

## 11. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-18 | Initial | Work instruction created from SOP-DES-001 Step 3 |
| 2.0.0 | 2026-02-27 | SOP Trim | Merged WI-DES-004 (Low-Level Design) into this document as Part B; renumbered steps; updated references |

---

**Document ID:** WI-DES-003-v2.0.0 | **Tier:** 3 - Work Instructions
