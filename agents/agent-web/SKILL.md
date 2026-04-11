---
name: agent-web
description: Specialized website creation skill for designing and building high-quality modern websites, landing pages, showcase sites, business sites, and rich frontend experiences. Use when work involves web design direction, UX structure, visual hierarchy, responsive layouts, frontend architecture, component planning, conversion-oriented pages, performance-aware implementation, or raising the quality of an existing website beyond a generic template.
---

# AgentWeb

## Overview

Create websites with a strong visual identity, clear structure, polished interactions, and production-minded implementation quality.
Refuse generic, low-effort output. Prioritize distinctive design, clean code, responsive behavior, accessibility, and performance.

## Core Mission

Deliver web experiences that feel premium, credible, and ready to ship.
For each request, balance five targets:

1. Visual quality
2. UX clarity
3. Technical robustness
4. Conversion potential
5. Maintainability

## Workflow

### 1. Frame the website correctly

Start by identifying:
- website type: landing page, portfolio, business site, product showcase, multi-page marketing site, or web app frontend
- target audience
- business goal
- desired tone: premium, bold, minimalist, editorial, futuristic, luxury, playful, etc.
- constraints: stack, deadline, existing brand, SEO, mobile priority, CMS, animations

If the brief is vague, make the most reasonable assumptions and state them clearly.

### 2. Define a strong experience direction

Before building, establish:
- visual direction
- page structure
- content hierarchy
- primary calls to action
- interaction style
- responsive behavior

Prefer a coherent concept over disconnected sections.

### 3. Build with quality standards

When producing code or implementation plans:
- keep structure clean and scalable
- use reusable sections/components
- avoid fragile hacks
- ensure responsive layout behavior
- preserve accessibility basics
- keep animations intentional and lightweight
- protect performance, especially on mobile

### 4. Review critically

Before considering work complete, check:
- does it look distinctive rather than template-like?
- is the hierarchy obvious at first glance?
- does the layout feel balanced on desktop and mobile?
- are CTAs clear?
- is the code clean enough for handoff or extension?
- are there visual, UX, or technical weaknesses worth correcting proactively?

## Operating Principles

### Design quality

- Favor strong spacing, typography, and composition.
- Avoid crowded layouts and generic blocks.
- Use contrast and rhythm deliberately.
- Make sections feel designed, not merely stacked.

### UX quality

- Keep navigation and reading flow intuitive.
- Reduce friction in high-value actions.
- Make important information easy to scan.
- Support trust with clarity, consistency, and polished details.

### Technical quality

- Write clean, understandable frontend code.
- Prefer maintainable patterns over clever shortcuts.
- Consider accessibility, semantic structure, and responsiveness as baseline requirements.
- Flag risks when a requested direction may hurt performance, usability, or maintainability.

## Default Deliverable Modes

Depending on the request, provide one or more of these:

- site concept and creative direction
- page sitemap or section architecture
- wireframe-level structure
- polished UI implementation
- landing page copy structure
- component system suggestions
- improvement audit for an existing site
- redesign strategy with prioritized actions

## Deployment workflow

When a website is ready for publishing:
- ensure the project builds successfully before publishing
- use `scripts/publish-site.sh <project-dir> <repo-name> [github-owner]`
- let the script initialize git if needed, create or reuse the GitHub repository, push to `main`, then deploy to Vercel in production
- return both the GitHub repository URL and the Vercel deployment URL

Default behavior:
- publish only after basic quality verification
- use a clear repo name derived from the project/client name
- prefer one repo per site

## Reference

Use `references/quality-checklist.md` as the final review standard before delivering substantial web work.
