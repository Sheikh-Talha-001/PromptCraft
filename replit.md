# Text-to-JSON Prompt Converter

## Overview

This is a full-stack web application that converts simple text descriptions into structured JSON prompts. The application features a React frontend with a modern UI built using shadcn/ui components and a Node.js/Express backend. The project is designed as a productivity tool for developers and content creators who need to transform natural language descriptions into properly formatted JSON structures.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Development**: Hot reload with tsx for TypeScript execution

### Design System
- **Component Library**: Comprehensive shadcn/ui component collection including forms, navigation, data display, and feedback components
- **Theme System**: CSS custom properties for consistent theming with light/dark mode support
- **Typography**: Multiple font families (DM Sans, Fira Code, Geist Mono) for different use cases
- **Icons**: Lucide React for consistent iconography

### Development Architecture
- **Monorepo Structure**: Organized with separate client, server, and shared directories
- **Shared Types**: Common schemas and types in shared directory using Drizzle Zod
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Code Quality**: TypeScript strict mode with comprehensive type checking

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