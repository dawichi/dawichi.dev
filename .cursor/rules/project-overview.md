---
description: "Project overview and architecture documentation for dawichi.dev CV/portfolio website"
alwaysApply: true
---

# dawichi.dev - CV/Portfolio Website

## Project Overview
This is a personal CV/portfolio website built with Astro, showcasing professional experience, skills, projects, and personal information. The site is a static site that can be deployed to any static hosting service.

## Tech Stack
- **Framework**: Astro 5.1.1 (static site generator)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.17, SCSS (Sass 1.83.0)
- **Package Manager**: pnpm
- **Code Quality**: Prettier with Astro and Tailwind plugins

## Project Structure

### `/src/pages/`
- `index.astro` - Main landing page with all sections
- `projects.astro` - Projects showcase page

### `/src/components/`
Main UI components:
- `Landing.astro` - Hero section with introduction
- `About.astro` - About me section
- `Timeline.astro` - Container for experience and studies timeline
- `TimelineBlock.astro` - Individual timeline block component (displays experience or studies)
- `Skills.astro` - Skills section with technology cards
- `SkillsCard.astro` - Individual skill card component
- `Languages.astro` - Language proficiency section
- `Travel.astro` - Travel section with world map
- `Contact.astro` - Contact form
- `Animate.astro` - Animation wrapper component
- `Icon.astro` - Social media icon component
- `/layout/` - Layout components (Navbar, DarkToggle)

### `/src/layouts/`
- `Layout.astro` - Main layout wrapper with HTML structure, metadata, and footer

### `/src/config/`
- `projects.ts` - Project data configuration
- `styles.ts` - Shared style constants (Tailwind classes)

### `/src/types/`
- `Timeline.ts` - Timeline data types and experience/studies arrays

### `/src/styles/`
- `global.scss` - Global stylesheet

### `/public/`
Static assets:
- `/img/` - Images (blog images, showcase screenshots, flags)
- `/svg/` - SVG illustrations and icons

## Key Features
- Dark mode support (class-based, toggleable)
- Responsive design (mobile-first with Tailwind breakpoints)
- Animated sections using Animate.css
- Bootstrap Icons for iconography
- Devicon.dev for technology icons
- Contact form integration (getform.io)

## Component Architecture
- Components are Astro components (`.astro` files)
- Server-side rendering by default (static at build time)
- Client-side JavaScript can be added via `<script>` tags in components
- TypeScript interfaces defined in `/src/types/`
- Shared configuration in `/src/config/`

## Data Flow
- Timeline data: Defined in `src/types/Timeline.ts` as TypeScript arrays
- Project data: Defined in `src/config/projects.ts`
- Components receive data via Astro props
- Static data is processed at build time
- Dynamic calculations (like date calculations) should be done client-side for real-time updates

## Styling Approach
- Tailwind CSS utility classes for most styling
- SCSS for global styles and custom CSS
- Dark mode handled via `dark:` Tailwind classes
- Shared style constants in `src/config/styles.ts`

## Build & Development
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

