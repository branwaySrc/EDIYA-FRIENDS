# DESIGN.md

## Purpose

This document is the shared design memory for the `ediya-ansan` project.
We will keep UI/UX decisions, reusable patterns, tone, layout rules, and design tradeoffs here so the product stays consistent as it grows.

## Product Direction

- Build a polished web experience with a strong brand point of view.
- Prefer clear hierarchy and fast comprehension over decorative complexity.
- Keep the interface modern, confident, and warm rather than generic.
- Treat usability, accessibility, and visual identity as a single system.

## Core Principles

### 1. Brand Before Boilerplate

Avoid default-looking layouts and interchangeable components.
Every screen should feel intentionally designed for this product.

### 2. Visual Hierarchy First

Users should immediately understand:

- what this page is for
- what is most important
- what action comes next

### 3. Consistency With Range

Reuse patterns, spacing rules, and interaction language.
Allow visual variation only when it strengthens communication.

### 4. Accessibility Is A Baseline

- Maintain strong color contrast.
- Ensure keyboard access for interactive components.
- Use semantic structure and meaningful labels.
- Motion should support comprehension, never distract.

### 5. Mobile Is Not A Shrunk Desktop

Design responsive layouts intentionally.
Important content and actions must remain obvious on smaller screens.

## Initial UI System Guidance

### Layout

- Prefer spacious section-based layouts over cramped card stacking.
- Use a clear content rhythm with consistent horizontal and vertical spacing.
- Start from a strong hero or page header that frames the screen purpose.

### Typography

- Choose typography with personality when we define the brand system.
- Use type scale to create obvious hierarchy before adding extra decoration.
- Keep body copy easy to scan and avoid long dense paragraphs in the UI.

### Color

- Define colors as reusable tokens before scaling screens.
- Use color with intent: emphasis, feedback, grouping, and mood.
- Avoid relying on a single accent color everywhere.

### Components

- Prefer a small number of strong reusable components.
- Each component should have a clear purpose, not just visual variation.
- States must be designed explicitly: default, hover, focus, active, disabled, empty, loading, error.

### Motion

- Use motion to guide attention and clarify state changes.
- Keep transitions quick and deliberate.
- Avoid decorative animation that slows task completion.

## (Home)

Home-specific patterns live here so future section work can continue from the current direction without re-deciding the basics.

### Structure

- The home route entry is `src/app/(home)/page.tsx`.
- Keep `page.tsx` as a composition layer only. It should import and render major feature sections, not hold full section markup.
- Major home sections live in `src/app/(home)/(features)`.
- Use one TSX file per large home section, such as `hero.tsx`, `intro.tsx`, and `about.tsx`.
- Put repeated home-only sizing tokens in `src/app/(home)/(features)/shared.ts`.
- Current shared home tokens are `contentBoxSize`, `badgeSize`, and `homeContainerClassName`.

### Hero

- Use `public/video/hero.mp4` as the top visual background.
- The hero should sit behind the fixed global navigation.
- Use autoplay, muted, loop, and playsInline for background-video behavior.
- Keep the hero constrained to `max-w-[1920px]`.
- Current hero height rhythm is `h-[80vh]`, `min-h-150`, and `max-h-200`.
- Add a soft dark gradient overlay above the video to preserve navigation and foreground readability.

### Intro Cards

- Use `Intro` for the service-introduction card grid.
- Use `homeContainerClassName` for the `max-w-[1100px]` centered content container with `px-4`.
- Use a two-column grid on large screens with stacked cards inside each column.
- Use `ContentBox` only as the shell for background, border, radius, and padding.
- Keep card content composed with `Badge`, `Heading`, `Text`, and `Action` primitives.
- Use `contentBoxSize` for default card shell shape and spacing unless a section intentionally needs a new rhythm.
- Use `badgeSize` for section-level pill badges.
- Card CTAs should sit at the lower-right edge of the card content area with label text outside the circular icon.
- Use `Action.Link` with transparent background for card CTAs, `Action.Text` for "자세히 보기", and `Action.Icon icon="arrow-right"` for the circular arrow.

### Film

- Use `Film` for customer-playable YouTube content.
- Place `Film` after `Intro` and before `About` in the home composition.
- Match the `Intro` header rhythm: centered `max-w-3xl`, badge first, two-line `Heading.lg`, and optional supporting `Text.sm`.
- Use full-width `#F2F2F2` as the section background.
- Keep the YouTube player inside the home container with an `aspect-video` iframe, rounded corners, and a dark video shell.
- Use the YouTube embed URL format, such as `https://www.youtube.com/embed/{videoId}?rel=0`, so customers can play the video directly.

### About

- Use `About` for the full-width split section.
- The section should expand to full viewport width and split into two columns on large screens.
- The visual/media side should occupy one half and may use illustration, image, or brand-shaped placeholder treatment.
- The text side should use the primary blue background.
- Text content should stay left-aligned inside its readable column.
- Keep the copy column at roughly `max-w-md`, positioned from the center boundary of the split rather than floating freely across the full half.

### Color Direction

- Home sections should avoid orange accents.
- Use `ediyaBlue` and primary-blue variations for emphasis.
- Use pale blue surfaces such as `#E6F0FA` or `#EEF3FB` for soft supporting cards.
- Use dark navy surfaces such as `#111E3A` when the card needs stronger contrast.
- Use white text only on dark or primary-blue surfaces.

### Typography And Labels

- Use `Inter` through the app-level font configuration.
- Use shared `Text` and `Heading` components rather than raw heading or paragraph styling.
- Use `Heading.lg` for major section headlines.
- Use `Heading.sm` for card titles.
- Use `Text.sm` for card descriptions and CTA labels.
- Keep badge labels short and functional, such as "서비스 소개", "스토리", or "Who We Are".

### Global Navigation Relationship

- The default home navigation should use `Gnb type="dynamic"` behavior.
- At the top of the hero, the GNB uses the dark-to-transparent gradient state with `logo__.svg` and white links.
- After scroll, the GNB becomes white, swaps to `logo.svg`, and uses default text color.
- Navigation links should be created with `Action.Link`.
- Nav hover underline may use the `hoverLine` animation, expanding from the center with primary color.

## Pattern Log

Add confirmed design patterns here as we establish them.

| Date | Area | Pattern | Why |
| --- | --- | --- | --- |
| 2026-08-02 | Documentation | Centralized design memory in `DESIGN.md` | Keeps UI decisions consistent across future iterations |
| 2026-08-02 | Typography | Use shared `Text` and `Heading` component families with size variants | Keeps type usage consistent and reusable across screens |
| 2026-08-02 | Typography | Use `Inter` as the base font family | Establishes a clean, modern baseline for all UI text |
| 2026-08-02 | Color | Register text-specific color tokens in `colors.ts` via `TextColor` naming | Separates typography color intent from broader UI color usage |
| 2026-08-02 | App Structure | Separate home route entry from home feature sections using `(home)` and `(home)/(features)` | Makes large home UI areas easier to organize and reuse intentionally |
| 2026-08-02 | Actions | Build buttons as composable `Action.Link/Button/Text/Icon` primitives | Keeps interactive UI consistent while allowing flexible icon and text composition |
| 2026-08-02 | Actions | Let action rounded values use `full` or numeric pixels with a `10px` default | Preserves a reusable baseline while keeping shape control flexible |
| 2026-08-02 | Global Navigation | Fixed top GNB uses gradient at page top and white background after scroll | Keeps first-viewport overlay flexible while preserving readability during scroll |
| 2026-08-02 | Global Navigation | GNB logo, menu links, and download CTA use the shared `Action` primitives | Keeps global navigation interactions aligned with the base action system |
| 2026-08-02 | Global Navigation | GNB logo swaps from `logo__.svg` at page top to `logo.svg` after scroll | Maintains logo contrast across transparent video overlay and white navigation states |
| 2026-08-02 | Global Navigation | GNB accepts `type="dynamic"` or `type="idle"` | `dynamic` preserves scroll-based overlay behavior, while `idle` keeps white background and `logo.svg` fixed |
| 2026-08-02 | Actions | `Action.Link` may use `hoverLine` for a primary underline that expands from center | Creates a consistent animated navigation affordance without affecting button-style links |
| 2026-08-02 | Home Hero | Use `public/video/hero.mp4` as a full-width autoplay background hero behind the fixed GNB | Makes the first viewport visually brand-led while preserving the global navigation overlay |
| 2026-08-02 | Home Hero | Place a soft dark gradient overlay above hero video | Improves text and navigation readability without making the video feel flat |
| 2026-08-06 | Content Box | Use `ContentBox` only for border, radius, padding, and background shell styling | Keeps card content composition flexible while preserving consistent surface treatment |
| 2026-08-06 | Service Section | Use a two-column service card grid with asymmetrical visual emphasis | Makes the service introduction easier to scan and closer to the approved reference layout |
| 2026-08-06 | Badge | Use `Badge` for small pill labels with configurable background, text color, and numeric radius | Keeps section labels and card labels visually consistent while allowing contextual color changes |
| 2026-08-06 | Split Section | Use full-width 50/50 media and primary text panels with centered `max-w-md` copy | Keeps wide sections immersive while preserving readable text width at the center of each half |
| 2026-08-06 | Color | Avoid orange accents in new home sections and use primary blue instead | Keeps the EDIYA visual direction more consistent and brand-led |
| 2026-08-06 | Footer | Use a two-column footer with logo, service ownership, contact, operator, and copyright details | Keeps legal and contact information scannable without crowding the page bottom |
| 2026-08-06 | App Structure | Split home sections into `Hero`, `Intro`, and `About` feature components with shared size tokens | Keeps `page.tsx` focused on composition while each section owns its own UI details |
| 2026-08-06 | Home Film | Add a customer-playable YouTube film section with the same header rhythm as `Intro` | Keeps embedded video content consistent with the existing home section hierarchy |

## Decision Log

Record meaningful design choices here.

| Date | Decision | Status | Notes |
| --- | --- | --- | --- |
| 2026-08-02 | Use `DESIGN.md` as the canonical design record | Active | Update this file whenever we define or revise UI patterns |
| 2026-08-02 | Typography exports use `Text.xs/sm/base/lg` and `Heading.sm/base/lg` | Active | Reusable API for consistent type scale application |
| 2026-08-02 | Text weights start with `regular` and `bold` only | Active | Keeps the initial system intentionally narrow and easier to maintain |
| 2026-08-02 | Text colors start with `primary`, `default`, and `sub` | Active | Matches current product hierarchy: brand, base content, supporting copy |
| 2026-08-02 | Home route uses `src/app/(home)` and feature-level grouping under `src/app/(home)/(features)` | Active | Use `(features)` for major home sections and keep the top-level page focused on composition |
| 2026-08-02 | Action text uses `Text.sm` by default and button icons match text size scale | Active | Preserves consistency between button labels and supporting icons |
| 2026-08-02 | Action rounded defaults to `10px` and may be overridden with `full` or a number | Active | Avoids hard-coding pill buttons while allowing intentional shape changes |
| 2026-08-02 | GNB link text may use `white` at the top of the page and `default` after scroll | Active | Supports transparent top navigation over darkened hero or page backgrounds |

## Update Rules

Update this file whenever we:

- define a new visual pattern
- choose a color, type, spacing, or motion rule
- create a reusable component style
- make a UX tradeoff worth preserving
- reject a pattern and want to document why

## Entry Template

Use this format for new notes when needed:

```md
## YYYY-MM-DD - Topic

Context:
- What we were designing

Decision:
- What we chose

Reason:
- Why this is the right pattern

Follow-up:
- What should stay consistent next time
```
