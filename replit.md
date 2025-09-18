# Overview

"My Life in 10 Years" is a futuristic personal blog website built as a single-page application showcasing the author's vision for their future. The site features a cosmic-inspired design with animated neural network backgrounds, smooth scroll animations, and a dark space aesthetic. Built with React, TypeScript, and Tailwind CSS, it presents content through immersive sections covering career vision, lifestyle goals, impact aspirations, and future outlook.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom design system featuring cosmic color palette and neural network theming
- **Component Library**: Radix UI primitives with shadcn/ui components for consistent, accessible UI elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management, React Context for theme management
- **Animation System**: CSS transitions and custom scroll-triggered animations using Intersection Observer API

## Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints and static file serving
- **Development Environment**: Vite for hot module replacement and optimized development experience
- **Session Management**: Prepared for PostgreSQL session storage using connect-pg-simple
- **Storage Layer**: Abstracted storage interface with in-memory implementation for user management

## Database Design
- **ORM**: Drizzle ORM for type-safe database interactions
- **Schema**: PostgreSQL with user authentication table structure (id, username, password)
- **Migrations**: Drizzle Kit for database schema management and version control

## Design System
- **Typography**: Inter font family with hierarchical sizing (4xl-6xl for heroes, 3xl-4xl for sections)
- **Color Palette**: Dark cosmic theme with deep space gradients, neural cyan accents, and neon purple highlights
- **Layout**: Mobile-first responsive design with max-width constraints and consistent spacing primitives
- **Components**: Reusable sections for hero presentation, navigation, and content display with scroll-based animations

## Interactive Features
- **Neural Network Canvas**: Custom WebGL-based particle system with mouse interaction and connecting node animations
- **Smooth Scrolling**: Navigation with automatic section detection and smooth scroll behavior
- **Progressive Animation**: Fade-in animations triggered by scroll position using Intersection Observer
- **Responsive Design**: Adaptive layouts for desktop and mobile viewing experiences

# External Dependencies

## UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for design system
- **Lucide React**: Icon library for consistent iconography throughout the application
- **Class Variance Authority**: Type-safe variant API for component styling

## Development Tools
- **Vite**: Modern build tool with fast hot module replacement and optimized production builds
- **TypeScript**: Static type checking for improved developer experience and code reliability
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins

## Database and Backend
- **Neon Database**: PostgreSQL-compatible serverless database for production deployment
- **Drizzle ORM**: TypeScript ORM with automatic type generation from database schema
- **Express.js**: Web application framework for API routes and middleware

## State Management
- **TanStack Query**: Powerful data synchronization for server state management
- **React Hook Form**: Form state management with validation support
- **Zod**: Schema validation library for type-safe data validation

## Animation and Interaction
- **Embla Carousel**: Touch-friendly carousel component for content presentation
- **Date-fns**: Modern date utility library for time-based functionality
- **Canvas API**: Native browser API for neural network particle system rendering