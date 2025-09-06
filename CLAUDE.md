# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build for production**: `npm run build` (uses Turbopack for faster builds)  
- **Start production server**: `npm start`
- **Lint code**: `npm run lint` (ESLint with Next.js configuration)
- Dont ask to run npm run dev, it's usually running already

## Project Architecture

This is a Next.js 15 application using the App Router architecture with the following stack:

- **Framework**: Next.js 15.5.2 with App Router
- **Runtime**: React 19.1.0
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **Build tool**: Turbopack (Next.js's Rust-based bundler)
- **Fonts**: Geist Sans and Geist Mono via next/font/google
- **Linting**: ESLint 9 with Next.js TypeScript preset

### Key Architectural Patterns

- **App Router Structure**: Uses `src/app/` directory with `layout.tsx` and `page.tsx` convention
- **Path Mapping**: `@/*` alias maps to `./src/*` for cleaner imports
- **Font Optimization**: CSS variables for consistent font loading (`--font-geist-sans`, `--font-geist-mono`)
- **Responsive Design**: Mobile-first Tailwind classes with `sm:` breakpoint modifiers
- **Dark Mode**: Built-in dark mode support via Tailwind's `dark:` variants

### File Structure

- `src/app/layout.tsx`: Root layout with font variables and metadata
- `src/app/page.tsx`: Homepage component with responsive grid layout
- `src/app/globals.css`: Global styles and Tailwind directives
- `public/`: Static assets (SVG icons for Next.js, Vercel, etc.)

### TypeScript Configuration

- Target ES2017 with DOM libraries
- Strict mode enabled with `noEmit: true`
- Next.js plugin integrated for enhanced type checking
- Module resolution set to "bundler" for modern build tools