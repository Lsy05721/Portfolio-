# Portfolio Design System Tokens

This document defines the design tokens (colors, typography, spacing) used throughout the portfolio system.

---

## Color Palette

### Project Cards (Dark Theme)

#### Text Colors
```css
text-white           /* Card titles */
text-purple-200      /* Hover state for titles */
text-slate-400       /* Card descriptions */
text-purple-300      /* Tags, links, accents */
```

#### Background Colors
```css
bg-slate-900/50      /* Card background */
bg-slate-800         /* Image placeholder background */
bg-purple-500/10     /* Tag backgrounds */
```

#### Border Colors
```css
border-purple-500/20 /* Default card border */
border-purple-400/60 /* Hover state border */
border-purple-400/20 /* Tag borders */
```

### Project Detail Pages (Light Theme)

#### Text Colors
```css
text-slate-900       /* Primary headings */
text-slate-700       /* Body text, secondary headings */
text-slate-600       /* Supporting text, labels */
text-slate-500       /* Muted text, metadata */
```

#### Background Colors
```css
bg-white             /* Cards, primary containers */
bg-slate-50          /* Secondary containers, alternating sections */
bg-slate-100         /* Tags, badges, tertiary containers */
```

#### Border Colors
```css
border-slate-200     /* Default borders */
border-slate-300     /* Hover state borders */
```

### Interactive States
```css
/* Cards */
hover:scale-[1.02]           /* Card hover scale */
hover:border-purple-400/60   /* Card border hover */
group-hover:text-purple-200  /* Title hover */
group-hover:scale-110        /* Image hover scale */
group-hover:translate-x-1    /* Arrow hover */

/* Detail Pages */
hover:bg-slate-700           /* Button hover */
hover:text-slate-900         /* Link hover */
hover:border-slate-300       /* Border hover */
```

---

## Typography Scale

### Headings
```css
/* Page Title */
text-4xl md:text-5xl  /* 36px / 48px */
text-slate-900

/* Section Heading */
text-2xl              /* 24px */
text-slate-900
mb-4 or mb-6

/* Subsection Heading */
text-lg               /* 18px */
text-slate-900
mb-3

/* Card Title */
text-xl               /* 20px */
text-slate-900
```

### Body Text
```css
/* Regular Body */
text-base             /* 16px */
text-slate-700
leading-relaxed       /* 1.625 */

/* Large Body (Hero, Overview) */
text-xl               /* 20px */
text-slate-700
leading-relaxed

/* Small Body */
text-sm               /* 14px */
text-slate-600
```

### Labels & Tags
```css
text-sm               /* 14px */
text-slate-700

text-xs               /* 12px */
text-slate-700
uppercase
tracking-wide
```

---

## Spacing System

### Section Margins
```css
mb-16  /* 64px - Between major sections (Hero, Overview, etc.) */
mb-12  /* 48px - Between standard sections */
mb-8   /* 32px - Between subsections */
```

### Element Margins
```css
mb-6   /* 24px - Standard element spacing */
mb-4   /* 16px - Tight element spacing */
mb-3   /* 12px - Very tight spacing */
mb-2   /* 8px - Minimal spacing */
```

### Container Padding
```css
p-8    /* 32px - Large containers, hero sections */
p-6    /* 24px - Standard containers, cards */
p-4    /* 16px - Compact containers */
```

### Grid & Layout Gaps
```css
gap-6  /* 24px - Standard grid gap */
gap-4  /* 16px - Tight grid gap */
gap-3  /* 12px - Tag/badge gaps */
gap-2  /* 8px - Very tight gaps */
```

### Page Containers
```css
max-w-4xl   /* 896px - Project detail pages */
max-w-7xl   /* 1280px - Wide layouts, listings */
px-4 sm:px-6 lg:px-8  /* Responsive horizontal padding */
py-12       /* 48px - Vertical page padding */
```

---

## Component Patterns

### Project Card (Dark Theme - for listings)
```tsx
className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 hover:scale-[1.02]"
```

### Project Card Tag (Dark Theme)
```tsx
className="px-2 py-1 text-xs bg-purple-500/10 border border-purple-400/20 text-purple-300 rounded"
```

### Detail Page Card (Light Theme)
```tsx
className="bg-white rounded-xl border border-slate-200 overflow-hidden"
```

### Detail Page Container / Section Background (Light Theme)
```tsx
className="bg-slate-50 rounded-lg p-6 border border-slate-200"
```

### Detail Page Tag / Badge (Light Theme)
```tsx
className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full"
```

### Button / Link (Primary)
```tsx
className="px-6 py-3 bg-slate-900 hover:bg-slate-700 text-white rounded-lg transition-colors duration-300"
```

### Button / Link (Secondary)
```tsx
className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-300"
```

---

## Border Radius

```css
rounded-xl   /* 12px - Cards, large containers */
rounded-lg   /* 8px - Standard containers, buttons */
rounded      /* 4px - Small elements */
rounded-full /* 9999px - Tags, badges, pills */
```

---

## Shadows

```css
/* Default - Minimal */
shadow-sm    /* Use sparingly */

/* Hover State */
hover:shadow-lg

/* Featured Elements */
shadow-2xl   /* Hero images, featured content only */
```

---

## Transitions

```css
transition-all duration-300      /* Standard transition */
transition-colors duration-300   /* Color-only transition */
transition-transform duration-300 /* Transform-only transition */
```

---

## Aspect Ratios

### Images
```css
aspect-[4/3]   /* Project card covers */
aspect-video   /* Video embeds (16:9) */
aspect-square  /* Icons, thumbnails */
```

---

## Grid Layouts

### Project Cards
```css
grid md:grid-cols-3 gap-6
```

### Features (2-column)
```css
grid md:grid-cols-2 gap-6
```

### Metadata (3-column)
```css
grid grid-cols-2 md:grid-cols-3 gap-4
```

---

## Responsive Breakpoints

```css
sm:  /* 640px */
md:  /* 768px */
lg:  /* 1024px */
xl:  /* 1280px */
```

Common patterns:
- `md:grid-cols-3` - 1 column on mobile, 3 on tablet+
- `md:text-5xl` - Larger text on desktop
- `sm:px-6 lg:px-8` - Responsive padding

---

## Icon Sizes

```tsx
size={14}  /* Tags, small indicators */
size={16}  /* Inline text icons */
size={18}  /* Buttons, links */
size={20}  /* Section headings, features */
size={24}  /* Large headings, primary icons */
```

---

## Usage Guidelines

### Do's
✅ Use slate colors for all text and backgrounds
✅ Maintain consistent spacing between sections
✅ Use rounded-xl for cards, rounded-lg for containers
✅ Keep shadows minimal (shadow-sm or none)
✅ Use transition-all duration-300 for smooth interactions

### Don'ts
❌ Don't use colors outside the slate palette
❌ Don't use arbitrary spacing values
❌ Don't use heavy shadows everywhere
❌ Don't mix border radius values randomly
❌ Don't skip responsive variants

---

## Accessibility

### Contrast Ratios
- `text-slate-900` on `bg-white`: 16.1:1 ✅
- `text-slate-700` on `bg-white`: 10.1:1 ✅
- `text-slate-600` on `bg-white`: 7.6:1 ✅

All combinations meet WCAG AA standards.

### Focus States
```css
focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
```

### Interactive Elements
- Minimum touch target: 44x44px
- Hover states: Always include
- Transitions: Keep under 300ms

---

This design system ensures visual consistency across all portfolio pages while maintaining professional appearance and accessibility standards.
