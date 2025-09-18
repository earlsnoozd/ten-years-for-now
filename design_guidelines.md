# Design Guidelines: My Life in 10 Years

## Design Approach
**Reference-Based Approach** - Drawing inspiration from futuristic tech interfaces like Linear and Notion, combined with cosmic/space aesthetics for the neural network theme.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary:**
- Background: Deep space gradient from `240 85% 5%` (dark navy) to `240 70% 12%` (cosmic purple)
- Neural nodes: `200 100% 70%` (bright cyan) with `280 100% 80%` (neon purple) accents
- Text primary: `0 0% 95%` (near white)
- Text secondary: `0 0% 70%` (light gray)

**Accent Colors:**
- Interactive elements: `160 100% 50%` (electric green)
- Gradient overlays: Subtle cosmic gradients using purple-to-blue transitions

### B. Typography
**Font Stack:** Inter (Google Fonts)
- Hero headline: 4xl-6xl weight-700 tracking-tight
- Section headlines: 3xl-4xl weight-600
- Body text: lg-xl weight-400 leading-relaxed
- Navigation: base weight-500

### C. Layout System
**Spacing Primitives:** Tailwind units of 4, 8, 16, 24
- Section padding: py-24 px-8
- Content max-width: max-w-4xl mx-auto
- Text spacing: space-y-8 for content blocks

### D. Component Library

**Navigation:**
- Fixed top navigation with backdrop blur
- Minimal design with smooth scroll-to-section links
- Subtle glow effects on hover states

**Hero Section:**
- Full viewport height with centered content
- Animated neural network canvas background
- Large typography hierarchy with fade-in animations

**Content Sections:**
- Clean card-like presentation over cosmic background
- Generous whitespace and readable text blocks
- Scroll-triggered fade-in animations for text content

**Neural Network Elements:**
- Canvas-based particle system with connecting lines
- Gentle pulsing animations on nodes
- Interactive hover effects with subtle color shifts
- Parallax movement during scroll

### E. Animations
**Minimal and Purposeful:**
- Neural network nodes: Gentle pulse (2-3s intervals)
- Text reveals: Fade-in with slight upward motion on scroll
- Navigation: Smooth scroll behavior with easing
- Particles: Slow drift movement for ambient feel

## Visual Treatment
**Cosmic Futuristic Theme:**
- Deep space background with subtle star field texture
- Neural network connections using thin, glowing lines
- Gradient overlays for depth and visual interest
- Minimal UI elements that don't compete with the cosmic theme

**Key Design Principles:**
- Prioritize readability with high contrast text
- Use animation sparingly for ambient atmosphere
- Maintain clean typography hierarchy
- Balance futuristic aesthetics with personal warmth

## Images
**Neural Network Background:** Generated canvas particle system - no external images needed. The hero section will feature a full-screen animated neural network background created with JavaScript canvas, eliminating the need for static hero images.