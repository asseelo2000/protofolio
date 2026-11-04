---
version: alpha
name: Cohere-arabic-design-analysis
description: Arabic RTL adaptation of the 2026 enterprise AI web interface (audited against https://aseeltaresh.netlify.app/), unified entirely around the Cairo typeface family. Preserves the stark white editorial space, deep green-black product bands, soft mineral surfaces, and rounded media cards while fixing Arabic UI/UX defects: overriding Latin-only display/monospace stacks (which cause missing-glyph fallbacks on headings, nav links, buttons, and badges), enforcing zero letter-spacing, expanding vertical line heights, and isolating bidirectional (BiDi) technical terms, dates, and metrics.

colors:
  primary: "#17171c"
  cohere-black: "#000000"
  ink: "#212121"
  deep-green: "#003c33"
  dark-navy: "#071829"
  canvas: "#ffffff"
  soft-stone: "#eeece7"
  pale-green: "#edfce9"
  pale-blue: "#f1f5ff"
  hairline: "#d9d9dd"
  border-light: "#e5e7eb"
  card-border: "#f2f2f2"
  muted: "#93939f"
  slate: "#75758a"
  body-muted: "#616161"
  action-blue: "#1863dc"
  focus-blue: "#4c6ee6"
  coral: "#ff7759"
  coral-soft: "#ffad9b"
  form-focus: "#9b60aa"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  error: "#b30000"

typography:
  hero-display:
    fontFamily: Cairo
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  product-display:
    fontFamily: Cairo
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  section-display:
    fontFamily: Cairo
    fontSize: 52px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  section-heading:
    fontFamily: Cairo
    fontSize: 42px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  card-heading:
    fontFamily: Cairo
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  feature-heading:
    fontFamily: Cairo
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: 0
  body-large:
    fontFamily: Cairo
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  body:
    fontFamily: Cairo
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0
  button:
    fontFamily: Cairo
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.65
    letterSpacing: 0
  caption:
    fontFamily: Cairo
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  mono-label:
    fontFamily: Cairo
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: 0
  micro:
    fontFamily: Cairo
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 22px
  xl: 30px
  pill: 32px
  full: 9999px

spacing:
  xxs: 2px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 8px 0
  button-pill-outline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: 6px 14px
  announcement-bar:
    backgroundColor: "{colors.cohere-black}"
    textColor: "{colors.on-dark}"
    typography: "{typography.micro}"
    height: 40px
  hero-photo-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
  agent-console-card:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.sm}"
    padding: 24px
  trust-logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
  capability-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 24px
  dark-feature-band:
    backgroundColor: "{colors.deep-green}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: 80px
  product-card:
    backgroundColor: "{colors.soft-stone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 32px
  blog-filter-chip:
    backgroundColor: transparent
    textColor: "{colors.coral}"
    typography: "{typography.card-heading}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  research-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-large}"
  contact-form-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 32px
  footer-newsletter:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.micro}"
---

## Overview

This system defines the Arabic Right-to-Left (`dir="rtl"`, `lang="ar"`) web interface, retaining the sober enterprise AI command-center aesthetic—stark white editorial canvases, deep green-black and dark navy product bands, soft mineral surfaces, and rounded media cards—while resolving the live typographic, font-fallback, and bidirectional (BiDi) layout defects observed in the Arabic view (`العربية`) of `https://aseeltaresh.netlify.app/`.

The entire Arabic interface standardizes on the **`Cairo`** typeface family across display, UI, body, button, navigation, and technical label roles. On the live site, English display and monospace font classes (`CohereText`, `Unica77`, `CohereMono` / `JetBrains Mono` / `Syne`) are applied directly to headings, navigation links, buttons, status pills, and section badges (`01 / ...`) without an Arabic webfont override—causing missing-glyph boxes (`[?]`) or jarring system fallback fonts alongside disconnected cursive letters from inherited `letter-spacing`. Replacing every font role in `:lang(ar)` and `[dir="rtl"]` with `Cairo`, zeroing out all letter-spacing (`letter-spacing: 0`), expanding line heights across every step, and isolating mixed LTR technical strings (`.NET 8`, `Corporate IBS`, `Flutter 60fps`, `+11`, timeline dates) with `<bdi>` / `unicode-bidi: isolate` makes the Arabic view feel native and cohesive.

**Key Characteristics:**
- Unified **`Cairo`** typography across all roles (`hero-display`, headings, navigation, buttons, `mono-label` badges, and body text), overriding all Latin-only display and monospace classes in `[dir="rtl"]`.
- Strictly zero letter-spacing (`letter-spacing: 0`) on every element—especially uppercase badges, status pills, buttons, and display headlines—so Arabic cursive joins and ligatures never fracture.
- Expanded vertical line heights (`1.20–1.45` for display/headings and `1.70–1.75` for body prose) to prevent vertical glyph collisions and clipping against card borders.
- Explicit BiDi isolation (`<bdi>` or `unicode-bidi: isolate` / `dir="ltr"`) for mixed English technical terms (`.NET 8`, `React 18`, `Corporate IBS`), stats (`+11`, `92.51`, `60fps`), section numbering (`01 /`), and timeline date ranges (`2025 - 2026`).
- Calibrated base and micro sizes (`17px` body, `19px` lead copy, `15px` buttons, `14px` badges, `13px` micro) so Arabic letter loops and dots stay crisp across desktop and mobile.
- Balanced RTL container alignment (`margin-inline: auto`) and mirrored directional icons (`↖` for external links, `←` for forward actions) built on CSS logical properties.

## Colors

### Brand & Accent

- **Cohere Black** (`#000000`): Announcement bar, highest-contrast text, and the global brand anchor.
- **Near-Black Primary** (`#17171c`): Primary CTA buttons, dark footer, and deep UI cards.
- **Deep Enterprise Green** (`#003c33`): Product hero bands for North and Command-style dark sections.
- **Dark Navy** (`#071829`): Financial-services and security-oriented solution bands.
- **Action Blue** (`#1863dc`): Editorial links, pagination, and secondary action emphasis.
- **Coral** (`#ff7759`): Blog category chips, taxonomy outlines, and warm product markers.
- **Soft Coral** (`#ffad9b`): Pale chip borders and segmented article-label details.

### Surface & Background

- **Canvas White** (`#ffffff`): Dominant page background and form/card surface.
- **Soft Stone** (`#eeece7`): Product cards, testimonial placeholders, and warm neutral surface blocks.
- **Pale Green Wash** (`#edfce9`): North page section backdrop behind stacked dark capability panels.
- **Pale Blue Wash** (`#f1f5ff`): Blog CTA surface behind abstract 3D imagery.
- **Card Border** (`#f2f2f2`): Softest card containment line.

### Text & Rules

- **Ink** (`#212121`): Default body text and most link text on light backgrounds.
- **Muted Slate** (`#93939f`): Footer links, dates, metadata, and de-emphasized labels.
- **Slate** (`#75758a`): Research separators and tertiary text.
- **Hairline** (`#d9d9dd`): Standard list rules and section dividers.
- **Border Light** (`#e5e7eb`): Secondary divider and utility rule.

### Semantic

- **Focus Blue** (`#4c6ee6`): Keyboard focus and ring color.
- **Form Focus Violet** (`#9b60aa`): Focus border for text inputs.
- **Error Red** (`#b30000`): Extracted ring/shadow color associated with validation-like states.

### Gradient System

Gradients are never used as a generic UI fill. Gradients and color fields are media-led: abstract 3D hero imagery, deep blue open-science particle fields, red-orange product video posters, and dark green-to-black product environments. Keep UI surfaces flat; reserve gradient richness for large media panels and CTA image bands.

## Typography

### Font Family

- **Display**: `Cairo`, falling back to `Tajawal`, `Noto Sans Arabic`, `ui-sans-serif`, and `system-ui`. Must explicitly override English display font classes (`h1`–`h4`, `.font-display`, `.font-heading`, logo wordmark) when `dir="rtl"` or `lang="ar"` is active.
- **Body/UI**: `Cairo`, falling back to `Tajawal`, `Noto Sans Arabic`, `ui-sans-serif`, and `system-ui`. Applied to all paragraphs, navigation links, tabs, and form controls.
- **Technical labels (`mono-label`)**: `Cairo` (weight `600`), falling back to `Tajawal`, `Noto Sans Arabic`, `ui-sans-serif`, and `system-ui`. Must explicitly override `.font-mono`, status pills, section index badges (`01 / ...`), filter counters, and tech-stack tags in Arabic view so monospace fonts without Arabic glyphs never produce `[?]` tofu boxes.
- **Icons**: Custom icon fonts and thin-line geometric illustrations; directional icons mirror horizontally in RTL (`↗` becomes `↖` for external links; `→` becomes `←` for forward actions).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---:|---:|---:|---:|---|
| Hero Display | Cairo | 80px | 600 | 1.20 | 0 | Home page H1 declaration scale; replaces `96px` / `line-height: 1.0` / `-1.92px` to prevent clipping. |
| Product Display | Cairo | 64px | 600 | 1.25 | 0 | Major section and product hero headlines. |
| Section Display | Cairo | 52px | 600 | 1.25 | 0 | Large section headings (Projects, Enterprise AI, Expertise, Contact). |
| Section Heading | Cairo | 42px | 500 | 1.35 | 0 | Split hero, timeline, and CTA headings. |
| Card Heading | Cairo | 30px | 500 | 1.40 | 0 | Project card titles, experience role titles, and feature headers. |
| Feature Heading | Cairo | 24px | 500 | 1.45 | 0 | Sub-cards, filter tabs, and capability titles. |
| Body Large | Cairo | 19px | 400 | 1.70 | 0 | Hero lead paragraph and section introductions (`+1px` over English). |
| Body | Cairo | 17px | 400 | 1.75 | 0 | Default project descriptions, bullet lists, form inputs, and links. |
| Button | Cairo | 15px | 600 | 1.65 | 0 | Primary and outline CTA buttons, nav CTA, and action links. |
| Caption | Cairo | 14px | 400 | 1.60 | 0 | Stats subtitles, dates, and metadata. |
| Mono Label | Cairo | 14px | 600 | 1.60 | 0 | Hero status pill, section numbers (`01 /`), tech stack badges, and contact card labels. |
| Micro | Cairo | 13px | 400 | 1.55 | 0 | Footer copyright, filter tab counts `(11)`, and small utility labels. |

### Principles

- **Override every English font class in RTL**: Never leave `.font-mono`, `.font-display`, or heading classes bound only to Latin fonts (`CohereText`, `Unica77`, `CohereMono`, `Syne`, `JetBrains Mono`). In `[dir="rtl"]` and `:lang(ar)`, bind all text and badge classes to `'Cairo', 'Tajawal', 'Noto Sans Arabic', sans-serif`.
- **Zero letter-spacing everywhere**: Reset all negative tracking (`-1.92px` to `-0.32px` on headings) and positive tracking (`0.28px` / `0.05em`–`0.1em` on buttons, nav links, and mono badges) to `letter-spacing: 0`. Non-zero tracking disconnects Arabic cursive ligatures.
- **Give Arabic vertical breathing room**: Replace `line-height: 1.0–1.2` on headings with `1.20–1.45`, and raise body copy from `1.4–1.5` to `1.70–1.75` so `Cairo`'s ascenders and descenders never touch card borders or adjacent lines.
- **Isolate Bidirectional (BiDi) mixed strings**: Wrap embedded LTR technical tokens (`.NET 8`, `Corporate IBS`, `Flutter 60fps`, `React 18`, `Zero-Trust`), metric values (`+11`, `92.51`, `60fps`), timeline dates (`2025 - 2026`), and section prefixes (`01 /`) in `<bdi>` or `unicode-bidi: isolate` (with `dir="ltr"` on pure numeric/code tokens) so periods, plus signs, slashes, and hyphens never flip to the wrong side.
- **Use calibrated `Cairo` weights (`400`, `500`, `600`) instead of uppercase or italics**: Disable `text-transform: uppercase` and `font-style: italic` in RTL; use `Cairo` SemiBold (`600`) for badges/buttons/display and Medium (`500`) for section/card headings.

## Layout

### Spacing System

The system uses an 8px base with alignment values: `2px`, `6px`, `8px`, `10px`, `12px`, `16px`, `20px`, `22px`, `24px`, `28px`, `32px`, `36px`, `40px`, `56px`, `60px`, `64px`, and `80px`.

All horizontal spacing, margins, paddings, and borders must use **CSS logical properties** (`margin-inline-start`, `margin-inline-end`, `padding-inline-start`, `padding-inline-end`, `border-inline-start`, `inset-inline-end`) rather than physical `left` and `right` properties. Set `dir="rtl"` and `lang="ar"` once on the root `<html>` element.

### Grid & Container

- **Global nav** uses a mirrored three-zone RTL layout: site logo/name on the right (`inline-start`) rendered in `Cairo` SemiBold (`600`), navigation links centered in `15px` `Cairo` Medium (`500`), and language toggle (`EN`) + primary CTA pill on the left (`inline-end`).
- **Home hero** maintains a balanced container (`max-width: 1280px; margin-inline: auto`) so right-aligned RTL hero content (`text-align: start`) does not leave an asymmetrical empty void on the left side of wide desktop screens. If using a split 2-column hero, place the primary headline/CTA column on the right (`inline-start`) and the visual/stats card composition on the left (`inline-end`).
- **Stats & metrics strip** orders cards right-to-left while keeping numeric values (`+11`, `3`, `92.51`, `60fps`) isolated with `dir="ltr"` / `unicode-bidi: isolate` so `+` and `.` symbols stay anchored to the number, paired with `14px` `Cairo` subtitle labels below.
- **Project & capability sections** use 2- or 3-column card grids ordered from right to left, with card headings, descriptions, and tech-stack badge rows aligned to `inline-start` (right).
- **Experience & background timeline** places timeline markers and tabs on the right (`inline-start`), job titles in `Cairo` Medium (`500`), and date badges wrapped in `dir="ltr"` / `unicode-bidi: isolate` so year ranges (`2024 - 2026`) never invert into `8 2026 -`.
- **Contact form & info cards** use two-column rows flowing right-to-left. Card labels (`GITHUB`, `EMAIL`, `LOCATION` translated to Arabic) render in `14px` `Cairo` SemiBold (`600`), while email addresses, URLs, and phone numbers retain `dir="ltr"` so they read cleanly left-to-right.

### Whitespace Philosophy

Whitespace acts as a structural trust signal. Large vertical intervals (`80px` section spacing) separate the hero claim, metrics strip, selected projects, enterprise AI capabilities, experience timeline, and contact section. Keep Arabic paragraph containers constrained to `60ch–75ch` (`max-width: 68ch`) so lines remain effortless to scan from right to left.

## Elevation & Depth

The interface is predominantly flat. Depth comes from surface alternation, media contrast, rounded corners, and thin borders rather than drop shadows.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, white or dark field | Hero copy, timeline lists, editorial surfaces |
| Bordered | 1px `#d9d9dd`, `#e5e7eb`, or dark translucent rules | Project cards, stats cells, forms, pale cards, footer inputs |
| Media Lift | Rounded image or card over contrasting section color | Hero cards, project previews, Enterprise AI dark bands |
| Dark Product Field | Deep green or navy full-width band | Enterprise AI & Security sections, dark feature bands |

## Shapes

### Radius Scale

| Token | Value | Role |
|---|---:|---|
| `xs` | 4px | Small images, search fields, utility elements |
| `sm` | 8px | Tech stack chips, small cards, dialogs |
| `md` | 16px | Project cards, experience cards, contact info blocks |
| `lg` | 22px | Signature media-card, dark feature band, and form container radius |
| `xl` | 30px | Filter tab pills and outline badges |
| `pill` | 32px | Primary CTA buttons |
| `full` | 9999px | Status pills, round indicator dots, and fully pill-shaped controls |

### Image Treatment

Images and interactive project previews sit inside rounded cards (`16px` to `22px` radii) with `1px` subtle borders (`#e5e7eb`). Ensure overlaid status badges and directional arrows inside media cards respect RTL positioning.

## Components

### **`button-primary`**

Near-black (`#17171c`) or white pill CTA, depending on surface contrast. Uses `15px` `Cairo` SemiBold (`600`), `1.65` line height, `0` letter-spacing, `12px 24px` padding, and a `32px` pill radius. Any trailing icon (such as a down arrow `↓` or forward arrow `←`) sits on the left (`inline-end`) of the Arabic label using `margin-inline-start: 8px`.

### **`button-secondary`**

Text-only or light-bordered action link rendered in `17px` `Cairo` Regular (`400`) or Medium (`500`), with `text-underline-offset: 6px` so the underline clears Arabic descenders. External link arrows use `↖` (top-left) in RTL, placed at `inline-end`.

### **`button-pill-outline`**

Outlined pill control with transparent fill, `1px` border (`#d9d9dd` or `#17171c`), `15px` `Cairo` SemiBold (`600`), `0` letter-spacing, `6px 14px` padding, and `30px` radius. Used for project category filters (with counts wrapped in `<bdi>(11)</bdi>`), topic tags, and secondary hero CTAs.

### **`announcement-bar`**

Full-width black strip above the nav, `40px` tall (`+4px` over English `36px` to prevent clipping `13px` `Cairo` at `1.55` line height), centered microcopy, and close control at `inline-end` (left).

### **`hero-photo-card`**

Rounded card (`22px` radius) used in the hero and solution sections, pairing visual previews or architecture highlights with dark console modules.

### **`agent-console-card`**

Dark panel (`#17171c`) displaying status chips, system architecture badges, and technical metrics. All Arabic labels use `14px` `Cairo` SemiBold (`600`) with `letter-spacing: 0`, while code identifiers and version numbers use `<bdi dir="ltr">`.

### **`trust-logo-strip`**

Centered `14px` `Cairo` caption (`line-height: 1.6`) above a row of monochrome partner/technology marks or key metric counters.

### **`capability-card`**

Content block with thin-line geometric icon, `24px` `Cairo` Medium (`500`) heading (`line-height: 1.45`, `letter-spacing: 0`), `17px` `Cairo` body copy (`line-height: 1.75`), and right-aligned (`text-align: start`) action links.

### **`dark-feature-band`**

Deep green (`#003c33`) or dark navy (`#071829`) full-width section (`22px` radius, `80px` padding) used for Enterprise AI and security breakdowns. Headings and checklist items use `Cairo` in white (`#ffffff`) with green checkmarks (`✔`) anchored on the right (`inline-start`) and `margin-inline-end: 12px`.

### **`product-card`**

Warm stone (`#eeece7`) or white bordered card (`16px`–`22px` radius, `32px` padding) used for featured projects and system summaries. Project titles use `30px` `Cairo` Medium (`500`) (`line-height: 1.4`). Embedded English parentheticals (e.g., `(Corporate IBS)`) and tech stack tags (`.NET 8`, `React 18`, `Flutter 60fps`) are wrapped in `<bdi>` tags so trailing periods and parentheses never invert.

### **`blog-filter-chip`**

Coral taxonomy/filter chip (`#ff7759`) using `Cairo` Medium (`500`), `line-height: 1.4`, `letter-spacing: 0`, `8px` radius, and `8px 16px` padding. Active chips invert to solid coral fill; inactive chips use coral outline.

### **`research-table`**

Rule-separated list / timeline rows in `19px` `Cairo` (`line-height: 1.7`) with the role or publication title aligned right (`inline-start`), category pills centered, and `<bdi dir="ltr">` date ranges aligned left (`inline-end`) with `font-variant-numeric: tabular-nums`.

### **`contact-form-card`**

Rounded white panel (`22px` radius, `32px` padding) with right-aligned (`text-align: start`) `Cairo` labels (`14px` weight `600`), `17px` `Cairo` inputs (preventing iOS zoom), and `dir="ltr"` on email/URL fields. Companion contact info cards (`GITHUB`, `EMAIL`, `LOCATION`) render their titles in `14px` `Cairo` SemiBold (`600`) with `letter-spacing: 0`.

### **`footer-newsletter`**

Dark footer block (`#17171c`) with logo wordmark, tagline, and copyright rendered in `Cairo` (never an unmapped Latin display font), plus a back-to-top control anchored at `inline-end` (left).

## Do's and Don'ts

### Do

- Bind **`Cairo`** to every selector in `[dir="rtl"]` and `:lang(ar)`—including `h1`–`h6`, `.font-display`, `.font-mono`, `nav a`, `button`, `.badge`, and footer wordmarks—so no element falls back to missing-glyph tofu boxes (`[?]`).
- Explicitly enforce `letter-spacing: 0 !important` and `text-transform: none !important` across all Arabic text and badge classes.
- Use expanded line heights (`1.20–1.45` for display/headings; `1.70–1.75` for body copy) so Arabic ascenders, descenders, and *tashkeel* never collide or touch card borders.
- Wrap all mixed LTR technical terms (`.NET 8`, `Corporate IBS`, `Flutter 60fps`), stats (`+11`, `92.51`), section numbers (`01 /`), and timeline date ranges (`2024 - 2026`) in `<bdi>` or `unicode-bidi: isolate` (`dir="ltr"`).
- Build layouts with CSS logical properties (`margin-inline-start`, `padding-inline-end`, `text-align: start`) and keep centered container margins (`margin-inline: auto`) balanced on desktop.
- Mirror directional arrows (`←` for forward progression, `↖` for external links) and place trailing button icons on the left (`inline-end`) of Arabic labels.

### Don't

- Do not leave English-only fonts (`CohereText`, `Unica77`, `CohereMono`, `Syne`, `JetBrains Mono`) active on headings, nav links, buttons, or badges when switching to `العربية`.
- Do not apply negative letter-spacing (`-1.92px` to `-0.32px`) or positive tracking (`0.28px` / `0.05em`) to Arabic text.
- Do not use `line-height: 1.0` on Arabic display headlines or `1.4–1.5` on Arabic paragraphs.
- Do not allow raw LTR numbers, dates, or `.NET 8`-style tokens to sit unisolated inside RTL paragraphs where punctuation flips to the wrong side.
- Do not drop Arabic UI, badge, or footer text below `13px` (`14px` preferred for badges), or mobile form inputs below `16px`.
- Do not push the entire hero container flush against the right viewport edge without a balanced `max-width` container or two-column counterweight on the left.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Small Mobile | <425px | Single-column RTL cards, compact nav, hero display scales down to `40px–44px` (`line-height: 1.25`) |
| Mobile | 425-640px | Hero media and stats stack, card grids become one column, form rows stack, body holds at `16px–17px` minimum |
| Large Mobile | 640-768px | Wider one-column RTL layouts with larger media cards (`hero-display` at `52px`) |
| Tablet | 768-1024px | Two-column RTL cards begin, nav spacing tightens (`hero-display` at `64px`) |
| Desktop | 1024-1440px | Full 3-zone RTL nav, 3-column card grids, balanced hero container (`hero-display` at `80px`) |
| Large Desktop | 1440-2560px | Centered `max-width` containers (`margin-inline: auto`) and `80px` vertical section rhythm |

### Touch Targets

Primary CTAs, language switcher buttons (`EN` / `العربية`), and filter pills maintain comfortable touch sizing through `12px 24px` button padding (`8px 16px` on filter chips), `15px` `Cairo` labels, and `1.65` line height so Arabic descenders never clip on mobile touchscreens.

### Collapsing Strategy

- Nav collapses from full horizontal RTL links (logo right, links center, language toggle + CTA left) to a compact mobile header with logo on the right (`inline-start`) and menu/language controls on the left (`inline-end`).
- Hero layout and 4-column stats bar collapse from horizontal RTL rows to stacked cards.
- Project, Enterprise AI, and Expertise grids collapse from 3 RTL columns to 2 and then 1.
- Contact form and info cards collapse from paired RTL columns to a single right-aligned column.

## Iteration Guide

1. **Load `Cairo` globally**: Import `Cairo` weights `400`, `500`, `600`, and `700` from Google Fonts (`https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap`) in `<head>` before your main stylesheet.
2. **Override all font and tracking tokens in RTL**: Add a root RTL CSS rule that forces `Cairo` and zeroes out letter-spacing across every heading, body, button, nav, and monospace badge selector:
   ```css
   :lang(ar), [dir="rtl"],
   [dir="rtl"] h1, [dir="rtl"] h2, [dir="rtl"] h3, [dir="rtl"] h4,
   [dir="rtl"] nav a, [dir="rtl"] button, [dir="rtl"] .font-mono,
   [dir="rtl"] .font-display, [dir="rtl"] .badge {
     font-family: 'Cairo', 'Tajawal', 'Noto Sans Arabic', system-ui, sans-serif !important;
     letter-spacing: 0 !important;
     text-transform: none !important;
     font-style: normal !important;
   }
   ```
3. **Isolate mixed LTR strings (`BiDi` fix)**: Wrap technical tags (`.NET 8`, `Corporate IBS`, `React 18`, `Flutter 60fps`), stat counters (`+11`, `92.51`, `60fps`), section indices (`01 /`), and timeline dates (`2024 - 2026`) in `<bdi>` or a `.ltr-token { direction: ltr; unicode-bidi: isolate; display: inline-block; }` utility class.
4. **Balance the Hero & Section Containers**: Ensure `.container` uses `margin-inline: auto` and `max-width: 1280px` (or a 2-column RTL flex/grid split) so switching to `dir="rtl"` aligns text to the right of the container without collapsing the left side of the viewport into empty space.
5. **Mirror directional arrows**: Flip external link icons (`↗` → `↖`) in RTL or apply `[dir="rtl"] .icon-external { transform: scaleX(-1); }`.

## Known Gaps

- **Missing Arabic glyphs in English display/mono webfonts**: If `Cairo` is only applied to `body` while `h1`–`h4`, `button`, or `.font-mono` retain a higher-specificity CSS rule pointing to a Latin-only webfont, those elements will render as `[?]` tofu boxes or broken system fallbacks. The Iteration Guide CSS reset above must override all component font classes.
- **Unisolated punctuation at sentence boundaries**: When an Arabic paragraph ends with an English technical term (such as `Corporate IBS` or `.NET 8`) followed by a period, wrap the English term in `<bdi>` so the period remains on the far left (end of the Arabic sentence) rather than jumping to the right of the English word.
- **Fixed-height pill and header clipping**: Because `Cairo` has taller vertical metrics (`line-height: 1.20–1.75`) than `CohereText`/`Unica77` (`1.0–1.5`), avoid fixed pixel heights with `overflow: hidden` on headline wrappers and badges; use `min-height` and vertical padding instead.