# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **Designo Company Portfolio Website** - a multi-page responsive website built as a solution to a Frontend Mentor challenge. It's a design agency portfolio showcasing web design, app design, and graphic design services with a contact form and multiple office locations.

**Tech Stack:**

- Next.js 13 with App Directory
- TypeScript
- TailwindCSS + SCSS
- Formik + Yup for form validation
- libphonenumber-js for phone number validation
- Nodemailer for email functionality

## Development Commands

```bash
# Install dependencies
npm install

# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Environment Setup

Create `.env.local` for email functionality:

**Windows:**

```powershell
type nul > .env.local
```

**Required environment variables:**

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_ADDRESS=your-sender@gmail.com
SMTP_TO_ADDRESS=your-recipient@gmail.com
```

## Architecture & Code Organization

### Directory Structure

```
src/
├── app/                    # Next.js 13 App Directory
│   ├── (pages)/           # Route pages (about, contact, locations)
│   ├── globals.scss       # Global styles + TailwindCSS
│   └── layout.tsx         # Root layout with metadata
├── components/
│   ├── base/              # Reusable UI components (Button, Alert, etc.)
│   └── layout/            # Layout components (NavBar, Section)
├── features/              # Feature-specific components
│   ├── Projects.tsx       # Projects showcase
│   ├── Hero.tsx           # Hero sections
│   └── (page-specific)/   # Page-specific feature components
├── data/
│   ├── global.ts          # All static data/content
│   └── AlertContext.tsx   # Alert state management
├── pages/api/             # Next.js API routes
│   └── send-email.ts      # Email sending endpoint
└── utils/                 # Utility functions
```

### Key Architectural Patterns

**Data Management:**

- All static content is centralized in `src/data/global.ts`
- Uses React Context for alert/notification state
- Mock data structure for projects, locations, and content

**Component Organization:**

- `base/` - Generic reusable components
- `features/` - Page-specific feature components
- `layout/` - Layout and structural components
- Page components are minimal and compose features

**Styling System:**

- TailwindCSS with custom configuration
- Custom SCSS for complex animations (hamburger menu)
- Responsive design with mobile-first approach
- Custom grid system using `.container` class

### Form Handling Architecture

The contact form uses a sophisticated validation system:

- **Formik** for form state management
- **Yup** for schema validation
- **libphonenumber-js** for international phone validation
- Country selection affects phone validation
- Real-time validation with visual feedback

**Contact Form Flow:**

1. Client-side validation (Formik + Yup)
2. Form submission to `/api/send-email`
3. Server-side email sending (Nodemailer)
4. Success/error feedback via Alert context

## Key Implementation Details

### Responsive Design System

- Mobile-first responsive design
- Custom breakpoints: `sm: 480px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1440px`
- Grid-based layout system with 12-column grid

### Image Optimization

- Next.js Image component for automatic optimization
- Multiple image variants for different breakpoints
- Images stored in `public/assets/` with organized folder structure

### Email Integration

- **Current:** Mock implementation with 50% success rate
- **Production ready:** Commented code in `postContactMessage.ts`
- Uses Nodemailer API route for actual email sending

### Custom TailwindCSS Extensions

- Custom color palette (primary: #E7816B, secondary: #FFAD9B)
- Extended font sizes with specific line-heights and letter-spacing
- Custom font family integration (Jost from Google Fonts)

## Development Notes

### TypeScript Configuration

- Path aliases: `@/*` maps to `src/*`
- Strict mode enabled
- Configured for Next.js App Directory

### Linting & Code Quality

- ESLint with Airbnb TypeScript configuration
- Prettier integration
- Custom rules for React and TypeScript

### Performance Considerations

- Next.js automatic code splitting
- Image optimization with Sharp
- Font optimization with next/font

### Testing Contact Form

The contact form currently uses a mock implementation. To test with real email:

1. Set up environment variables
2. Uncomment the real implementation in `postContactMessage.ts`
3. Comment out the mock implementation

## Common Patterns

**Data Fetching Pattern:**
All static data is imported from `src/data/global.ts` and passed down as props.

**Component Pattern:**

```typescript
// Feature components receive data as props
interface ComponentProps {
  data: DataType;
}

export default function Component({ data }: ComponentProps) {
  // Component implementation
}
```

**Styling Pattern:**

```typescript
// Responsive classes with TailwindCSS
className = 'mobile-class md:tablet-class xl:desktop-class';
```

This project demonstrates modern React/Next.js patterns with a focus on responsive design, type safety, and user experience.
