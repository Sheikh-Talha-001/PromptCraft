# Text-to-JSON Prompt Converter

## Overview

This is a full-stack web application that converts simple text descriptions into structured JSON prompts. The application features a React frontend with a modern UI built using shadcn/ui components and a Node.js/Express backend. The project is designed as a productivity tool for developers and content creators who need to transform natural language descriptions into properly formatted JSON structures.

**Recent Major Updates (January 2025):**
- Added comprehensive navigation system with Header and Footer components
- Implemented AI-powered auto prompt enhancement feature
- Created multi-page architecture (Home, About, Blog, Tools)
- Enhanced mobile responsiveness and accessibility
- Added FAQ section with comprehensive developer-focused questions
- Upgraded to modern minimalist design with gradient hero sections
- Implemented semantic SEO optimization throughout the site

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Modern, minimalistic layout with professional gradient elements.
Feature priorities: AI enhancement, mobile responsiveness, comprehensive navigation.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives including Accordion, Sheet, and enhanced Card components
- **Styling**: Tailwind CSS with custom design tokens, CSS variables, and gradient backgrounds
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing with multi-page navigation
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers
- **Layout Components**: 
  - Header with responsive navigation and mobile menu
  - Footer with comprehensive link structure
  - Hero sections with gradient backgrounds

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Development**: Hot reload with tsx for TypeScript execution

### Design System
- **Component Library**: Comprehensive shadcn/ui component collection including forms, navigation, data display, feedback components, Accordion, Sheet, and mobile-responsive elements
- **Theme System**: CSS custom properties for consistent theming with modern gradient overlays
- **Typography**: Multiple font families (DM Sans, Fira Code, Geist Mono) for different use cases with responsive sizing
- **Icons**: Lucide React for consistent iconography including Sparkles, Star, ChevronDown, and enhanced action icons
- **Layout Strategy**: Mobile-first responsive design with semantic HTML structure
- **Color Palette**: Blue and purple gradient scheme with accessible contrast ratios

### Development Architecture
- **Monorepo Structure**: Organized with separate client, server, and shared directories
- **Shared Types**: Common schemas and types in shared directory using Drizzle Zod
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Component Organization**: 
  - Page-level components in client/src/pages/
  - Reusable layout components in client/src/components/
  - UI primitives in client/src/components/ui/
- **Feature Architecture**:
  - AI-powered prompt enhancement with pattern recognition
  - Enhanced JSON generation with comprehensive parameter detection
  - Client-side processing for privacy and security

### Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless driver for cloud PostgreSQL
- **Migrations**: Drizzle Kit for database schema migrations
- **Schema Validation**: Zod schemas integrated with Drizzle for runtime validation

### Build and Deployment
- **Frontend Build**: Vite builds React app to dist/public
- **Backend Build**: esbuild bundles server code to dist/
- **Development Server**: Vite dev server with Express API proxy
- **Static Assets**: Served from attached_assets directory

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database with @neondatabase/serverless driver
- **Session Storage**: PostgreSQL-backed session store using connect-pg-simple

### UI and Design
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library with consistent SVG icons
- **shadcn/ui**: Pre-built components combining Radix UI with Tailwind styling

### Development Tools
- **Vite**: Fast build tool and development server with React plugin
- **TypeScript**: Static type checking and enhanced developer experience
- **Drizzle Kit**: Database toolkit for migrations and introspection
- **ESBuild**: Fast JavaScript bundler for production builds

### Utility Libraries
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Performant form handling with minimal re-renders
- **date-fns**: Modern JavaScript date utility library
- **clsx & tailwind-merge**: Utility for conditional CSS class names
- **class-variance-authority**: Type-safe variant API for component styling

### Replit Integration
- **Development Banner**: Replit-specific development environment integration
- **Error Overlay**: Runtime error modal for better debugging experience
- **Cartographer**: Replit's code mapping and navigation tool