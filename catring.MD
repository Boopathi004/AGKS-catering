# AGKS Catering Website Structure Documentation

**Author:** Manus AI

## 1. Introduction

This document outlines the structure, design philosophy, and technical implementation of the AGKS Catering website. The website is designed to provide an immersive and unique user experience, reflecting the brand's commitment to culinary artistry and innovation.

## 2. Design Philosophy: 3D Immersive Experience

The AGKS Catering website adopts a **Neomorphism meets 3D Realism** design language. This approach blends soft, sculpted UI elements with photorealistic 3D food imagery and animated transitions, drawing inspiration from modern product design and gaming interfaces. The core principles guiding this design are:

*   **Depth & Dimensionality:** Layered 3D effects, parallax scrolling, and perspective transforms create visual hierarchy and engagement.
*   **Smooth Micro-interactions:** Fluid animations on hover, scroll, and load provide a premium, responsive feel.
*   **Bold Visual Storytelling:** 3D rendered food imagery and animated elements communicate quality and craftsmanship.
*   **Accessibility Through Clarity:** Despite visual complexity, typography and spacing ensure readability, and animations respect `prefers-reduced-motion`.

### 2.1. Color Philosophy

*   **Primary Palette:** Deep charcoal (`#1a1a1a`), warm cream (`#f5f1ed`), and rich terracotta (`#c85a3a`).
*   **Accent Colors:** Soft gold (`#d4af37`) for premium touches, vibrant sage green (`#7a9b6f`) for freshness.
*   **Rationale:** The dark base enhances 3D elements, warm tones suggest culinary comfort, and gold adds luxury, while sage represents fresh ingredients.

### 2.2. Typography System

*   **Display Font:** "Playfair Display" (serif, bold) for headings, conveying elegance.
*   **Body Font:** "Inter" (sans-serif, regular/medium) for readability.
*   **Accent Font:** "Poppins" (sans-serif, semi-bold) for CTAs and highlights.

### 2.3. Brand Essence & Voice

*   **Positioning:** AGKS Catering transforms corporate events into unforgettable culinary experiences through innovative design and impeccable execution.
*   **Personality:** Sophisticated, Innovative, Warm.
*   **Voice:** Bold, aspirational headlines; action-oriented CTAs; conversational yet professional microcopy.

## 3. Website Structure

The website is a single-page application (SPA) built with React, featuring distinct sections accessible via smooth scrolling and a sticky navigation bar. The overall structure is as follows:

```
/home/ubuntu/agks-catering/
├── client/
│   ├── public/
│   │   └── ... (favicon, robots.txt)
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Services.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   │   └── ... (custom React hooks)
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Loading.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/ (placeholder for static template)
├── shared/ (placeholder for static template)
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── vite.config.ts
```

### 3.1. Key Components and Sections

1.  **Loading Page (`client/src/pages/Loading.tsx`)**
    *   **Description:** The initial entry point, featuring a 3D animated rotating food cube, particle effects, and a dynamic progress bar. This sets the immersive tone for the website.
    *   **Visual Assets:** `agks-3d-cube-food.webp`, `agks-abstract-food-particles.webp`.
    *   **Animations:** `animate-rotate-3d`, `animate-float`, `animate-pulse-glow`.

2.  **Header (`client/src/components/Header.tsx`)**
    *   **Description:** A sticky navigation bar with a glassmorphism effect, responsive menu for mobile, and the AGKS Catering logo.
    *   **Logo:** `agks-logo-icon.webp`.
    *   **Navigation Items:** Home, Services, Gallery, About, Contact.

3.  **Hero Section (`client/src/components/Hero.tsx`)**
    *   **Description:** Full-screen hero area with a 3D food imagery background, a gradient overlay, a bold heading, subheading, and prominent Call-to-Action (CTA) buttons.
    *   **Visual Assets:** `agks-hero-3d.webp`.
    *   **Key Elements:** "Elevate Your Event" heading, client satisfaction statistics.

4.  **Services Section (`client/src/components/Services.tsx`)**
    *   **Description:** Showcases AGKS Catering's offerings using 3D card designs with glassmorphism, hover animations, and clear descriptions.
    *   **Services:** Bespoke Menus, Full-Service Events, Premium Presentation, Timely Delivery.

5.  **Gallery Section (`client/src/components/Gallery.tsx`)**
    *   **Description:** An image grid displaying the portfolio of culinary creations and events, featuring parallax effects, hover animations, and a lightbox modal for detailed viewing.
    *   **Visual Assets:** `agks-gourmet-spread.webp`, `agks-hero-3d.webp`, `agks-3d-cube-food.webp`.

6.  **About Section (`client/src/components/About.tsx`)**
    *   **Description:** Presents the brand's story, a timeline of milestones, and core values. Includes an image showcasing the team or event.
    *   **Visual Assets:** `agks-gourmet-spread.webp`.
    *   **Milestones:** Founded (2009), Expansion (2014), Innovation (2019), Excellence (2024).

7.  **Contact Section (`client/src/components/Contact.tsx`)**
    *   **Description:** Provides a contact form for inquiries, along with contact information (phone, email, address) and social media links.

8.  **Footer (`client/src/components/Footer.tsx`)**
    *   **Description:** Contains quick links, service categories, contact details, and copyright information.
    *   **Logo:** `agks-logo-icon.webp`.

## 4. Technologies Used

*   **Frontend Framework:** React (with Wouter for routing)
*   **Styling:** Tailwind CSS v4 (with custom design tokens and animations)
*   **UI Components:** Shadcn/ui (extended for custom designs)
*   **Icons:** Lucide React
*   **Animations:** Custom CSS keyframes and Tailwind animations
*   **Asset Management:** Manus-provided static asset hosting for optimized images.

## 5. Development Guidelines & Customizations

*   **Global Styles:** `client/src/index.css` defines the custom color palette using OKLCH format, typography (Playfair Display, Inter, Poppins), and custom utility classes for 3D effects, glassmorphism, and CTA buttons.
*   **Image Handling:** All visual assets are hosted via Manus's static asset service, ensuring optimal performance and avoiding deployment timeouts. Images are referenced directly using their provided CDN URLs.
*   **Animations:** Emphasis on smooth, performant animations using `transform` and `opacity` for GPU acceleration. `prefers-reduced-motion` is respected for accessibility.
*   **Responsive Design:** Mobile-first approach with thoughtful breakpoints for various screen sizes.

## 6. Visual Assets

The following high-quality 3D rendered images were generated and used across the website:

*   **Hero Background:** `https://d2xsxph8kpxj0f.cloudfront.net/310519663758215964/S2uhsScAeyFTEmP633ruT9/agks-hero-3d-edWV7H7Re2DLXLAxeJxv7S.webp`
*   **3D Food Cube (Loading):** `https://d2xsxph8kpxj0f.cloudfront.net/310519663758215964/S2uhsScAeyFTEmP633ruT9/agks-3d-cube-food-XTGbTGfS64GjtezDZWAAa9.webp`
*   **Gourmet Spread (Gallery/About):** `https://d2xsxph8kpxj0f.cloudfront.net/310519663758215964/S2uhsScAeyFTEmP633ruT9/agks-gourmet-spread-FG7hN2tTombpqsZqKwH6Hg.webp`
*   **Logo Icon:** `https://d2xsxph8kpxj0f.cloudfront.net/310519663758215964/S2uhsScAeyFTEmP633ruT9/agks-logo-icon-oGHTYSwb66FWP9KU46y72B.webp`
*   **Abstract Food Particles (Background):** `https://d2xsxph8kpxj0f.cloudfront.net/310519663758215964/S2uhsScAeyFTEmP633ruT9/agks-abstract-food-particles-7La549svZU3MyjEtQ5byNf.webp`

## 7. Conclusion

The AGKS Catering website is built to deliver a visually stunning and highly interactive experience, showcasing the brand's unique identity and culinary excellence through a modern 3D immersive design. The modular component structure ensures maintainability and scalability for future enhancements.
