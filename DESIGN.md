---
name: Conglomerate Modern
colors:
  surface: '#0d1515'
  surface-dim: '#0d1515'
  surface-bright: '#333b3b'
  surface-container-lowest: '#081010'
  surface-container-low: '#151d1d'
  surface-container: '#192121'
  surface-container-high: '#232b2b'
  surface-container-highest: '#2e3636'
  on-surface: '#dce4e3'
  on-surface-variant: '#c5c5d4'
  inverse-surface: '#dce4e3'
  inverse-on-surface: '#2a3232'
  outline: '#8e909d'
  outline-variant: '#444652'
  surface-tint: '#b7c4ff'
  primary: '#b7c4ff'
  on-primary: '#002780'
  primary-container: '#4862be'
  on-primary-container: '#e4e7ff'
  inverse-primary: '#3d58b3'
  secondary: '#79db93'
  on-secondary: '#003919'
  secondary-container: '#00763a'
  on-secondary-container: '#97f9ae'
  tertiary: '#bfc7d8'
  on-tertiary: '#29313e'
  tertiary-container: '#606877'
  on-tertiary-container: '#e0e8f9'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#223f9a'
  secondary-fixed: '#95f8ad'
  secondary-fixed-dim: '#79db93'
  on-secondary-fixed: '#00210c'
  on-secondary-fixed-variant: '#005227'
  tertiary-fixed: '#dbe3f4'
  tertiary-fixed-dim: '#bfc7d8'
  on-tertiary-fixed: '#141c28'
  on-tertiary-fixed-variant: '#3f4755'
  background: '#0d1515'
  on-background: '#dce4e3'
  surface-variant: '#2e3636'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  editorial-italic:
    fontFamily: notoSerif
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-edge: 64px
  section-gap: 128px
---

## Brand & Style

This design system is engineered for a high-end corporate conglomerate, bridging the gap between traditional industrial stability and cutting-edge SaaS agility. The aesthetic is rooted in **Modern Corporate Minimalism** with strategic infusions of **Glassmorphism** to convey transparency and depth.

The design language targets institutional investors and global partners, evoking an emotional response of absolute reliability and forward-thinking innovation. High-end professional cues are achieved through generous whitespace, surgical precision in alignment, and rhythmic use of premium gradients inspired by the fluidity of modern fintech leaders.

## Colors

The color palette utilizes a sophisticated interplay between deep oceanic tones and vibrant tech-centric accents. 

- **Primary (#4862BE):** A professional, high-trust blue used for primary actions, links, and brand-identifying flourishes.
- **Secondary (#54B571):** A growth-oriented green reserved for success states, financial indicators, and environmental or sustainability-focused divisions.
- **Surface Palette:** The design system utilizes `#050C0C` as the foundational darkness for immersive modes and `#FFFFFF` for clean, high-clarity light modes. 
- **Accents:** Gradients should transition from Primary Blue to Secondary Green to represent the synergy between the conglomerate's various divisions. Use these sparingly for data visualizations and premium "hero" button states.

## Typography

Typography is used to establish a hierarchy that feels both technical and editorial. 

**Space Grotesk** is the voice of the conglomerate's innovation—used for headlines and technical data points where a geometric, futuristic tone is required. **Inter** serves as the workhorse for all UI elements and body copy, ensuring maximum readability across complex data sets. 

For high-level messaging and visionary statements, **Noto Serif** is introduced in italicized body blocks to provide a "premium editorial" feel, reminiscent of traditional annual reports but updated for a digital-first experience.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop, centered within a 1440px container to maintain a focused, premium feel. The layout utilizes a 12-column structure with generous 32px gutters to prevent visual crowding.

Spacing follows a strict 8px rhythmic scale. Horizontal margins are expansive (64px+) to allow the content to "breathe," mirroring the spaciousness found in Apple’s marketing layouts. Vertical rhythm is defined by large section gaps (128px) to clearly demarcate the transition between different business divisions or content types.

## Elevation & Depth

Hierarchy is achieved through **Glassmorphism** and ambient light rather than traditional heavy shadows. 

- **Surface Levels:** The base layer is the background color. Secondary layers use a subtle tonal shift (using `#212936` at 40% opacity in dark mode).
- **Glass Effects:** Overlays and navigation bars use a `backdrop-filter: blur(20px)` with a 1px "inner glow" border (white at 10% opacity) to simulate high-end hardware materials.
- **Shadows:** When depth is required (e.g., modals), use extra-diffused, long-cast shadows with a color tint derived from the background (e.g., a deep navy shadow for dark mode) to ensure the elevation feels integrated rather than floating.

## Shapes

The shape language is refined and consistent. A **Rounded (Level 2)** approach is applied to all UI elements to soften the corporate edge while maintaining a professional structure. 

Standard components utilize 0.5rem (8px) corners. High-level containers and cards use 1rem (16px) to emphasize their role as distinct content vessels. Buttons and inputs should maintain a consistent 8px radius, avoiding fully rounded pill shapes to keep the aesthetic grounded in a "corporate-tech" space rather than a "consumer-social" space.

## Components

### Buttons
Primary buttons use a subtle gradient from the Primary Blue to a slightly lighter variant, featuring a 1px border that glows on hover. Secondary buttons use a glass effect—semi-transparent backgrounds with a sharp, high-contrast label.

### Cards
Cards are the primary container for divisional data. They feature a 1px border using a "low-contrast outline" technique. In dark mode, these cards should have a subtle radial gradient background that originates from the top-left corner, simulating a light source.

### Input Fields
Inputs are minimalist, utilizing a bottom-border-only style or a very subtle filled background with no heavy borders. On focus, the bottom border animates into a Primary Blue gradient.

### Glass Navigation
The main navigation bar must be a floating glass element with a background blur. This keeps the conglomerates' multi-faceted content always within reach without obstructing the visual flow of the high-impact hero sections.

### Chips & Tags
Used for categorizing business sectors (e.g., "Technology," "Energy," "Logistics"). These should use the Tertiary Slate color with Space Grotesk labels in all-caps to denote technical precision.
?
