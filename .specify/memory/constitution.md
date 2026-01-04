# TaskMan Constitution

## Core Principles

### I. Simplicity First
We prioritize simplicity in both code and architecture.
- **No Build Step**: Code runs directly in modern browsers.
- **Minimal Dependencies**: Vanilla JavaScript, no heavy frameworks (React/Angular/Vue).
- **Client-Side Only**: Data persistence via `localStorage`.

### II. Premium Aesthetics
The application must feel premium and state-of-the-art.
- **Visuals**: Use gradients, glassmorphism, and modern typography (Inter/Roboto).
- **Interactions**: Smooth micro-animations for feedback.
- **Responsiveness**: Flawless experience across devices.

### III. Code Quality
- **Readability**: Code is written for humans first. Clear naming conventions (`camelCase` JS, `kebab-case` CSS).
- **Modularity**: Separation of concerns (HTML structure, CSS style, JS logic).
- **Documentation**: "Why" over "What" in comments.

## Technology Guidelines

### Stack
- **Languages**: HTML5, CSS3, ES6+ JavaScript.
- **Server**: `npm` driven simple static server (e.g., `live-server`) for development.

### Constraints
- No transpilation or bundling (Webpack/Babel/Vite avoided for this specific scope unless requested).
- No external UI libraries (Bootstrap/Tailwind) unless explicitly approved (Vanilla CSS preferred).

## Governance
This constitution serves as the primary guidance for architectural and design decisions. Any deviation requires explicit user approval.

**Version**: 1.0.0 | **Ratified**: 2026-01-04
