# Portfolio System Quick Start Guide

## Overview

Your portfolio now uses a **standardized system** that ensures all projects have:
- Consistent layout and hierarchy
- Professional presentation
- Easy maintenance and updates
- Unified design language

---

## Key Components

### 1. **ProjectCard** - For Project Listings
Located: `src/app/components/portfolio/ProjectCard.tsx`

Use this component in your projects listing page.

**Example:**
```tsx
<ProjectCard
  id="my-project"
  title="Project Title"
  description="One concise sentence describing the project."
  tools={["Python", "Pygame", "Systems"]}
  imageSrc={projectImage}
/>
```

### 2. **ProjectDetailTemplate** - For Project Pages
Located: `src/app/components/portfolio/ProjectDetailTemplate.tsx`

Use this component for all project detail pages.

**Example:**
```tsx
<ProjectDetailTemplate
  metadata={{
    title: "Breakout Plus",
    description: "A modern remake of the classic arcade game.",
    type: "Game Development",
    tools: "Python / Pygame",
    duration: "4 weeks",
    tags: ["Game Design", "Systems"]
  }}
  overview="This project aims to..."
  outcome="This project delivers..."
  reflection={{
    whatWorks: "The system successfully...",
    improvements: "Future work could include..."
  }}
/>
```

---

## Adding a New Project (3 Steps)

### Step 1: Add to Projects List
File: `src/app/components/ProjectsListing.tsx`

```tsx
const projects = [
  {
    id: "new-project",
    title: "New Project Title",
    description: "One-line description.",
    tools: ["Tool 1", "Tool 2"],
    imageSrc: projectImage
  },
  // ... other projects
];
```

### Step 2: Create Project Detail Page
File: `src/app/components/NewProject.tsx`

```tsx
import ProjectDetailTemplate from "./portfolio/ProjectDetailTemplate";

export default function NewProject() {
  return (
    <ProjectDetailTemplate
      metadata={{
        title: "New Project",
        description: "Project description",
        type: "Project Type",
        tools: "Tools Used",
        tags: ["Tag1", "Tag2"]
      }}
      overview="This project aims to..."
      problem="The challenge addressed was..." // optional
      solution="This design responds by..." // optional
      features={[ // optional
        {
          title: "Feature Name",
          description: "What this feature does",
        }
      ]}
      outcome="This project delivers..."
      reflection={{
        whatWorks: "What succeeded",
        improvements: "What could improve"
      }}
      links={[ // optional
        { label: "View Prototype", url: "#" }
      ]}
    />
  );
}
```

### Step 3: Add Route
File: `src/app/routes.tsx`

```tsx
import NewProject from "./components/NewProject";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // ... other routes
      { path: "project/new-project", Component: NewProject },
    ],
  },
]);
```

---

## Page Structure (Follow This Order)

Every project detail page should have these sections in this order:

1. **Hero** (required)
   - Title, description, tags, metadata

2. **Overview** (required)
   - What the project is about

3. **Problem** (optional)
   - What challenge was addressed

4. **Solution** (optional)
   - How you approached it

5. **Key Features** (optional, max 3)
   - Main functionality points

6. **System & Process** (optional)
   - Flow, logic, or interaction diagrams

7. **Final Outcome** (required)
   - What was delivered

8. **Reflection** (required)
   - What works + what could improve

9. **Links** (optional)
   - View prototype / code / video

---

## Design Rules

### Typography
- **Page Titles**: Large (text-4xl to text-5xl), dark (text-slate-900)
- **Section Headings**: Medium (text-2xl), dark (text-slate-900)
- **Body Text**: Regular (text-base), medium (text-slate-700)
- **Small Text**: Small (text-sm), light (text-slate-600)

### Colors
- **Text**: slate-900, slate-700, slate-600
- **Backgrounds**: white, slate-50, slate-100
- **Borders**: slate-200, slate-300
- Keep it clean and professional

### Layout
- Maximum width: 4xl (max-w-4xl)
- Consistent spacing: mb-12 between sections
- White background for cards
- Light gray (slate-50) for containers

---

## Content Guidelines

### Writing Style
✅ **Use:**
- "This project aims to..."
- "This design responds to..."
- "This system allows users to..."
- Professional, clear language

❌ **Avoid:**
- Casual tone
- Inconsistent voice
- Vague descriptions

### Project Descriptions
- **Card descriptions**: One sentence only
- **Page descriptions**: 2-3 sentences max
- Focus on **outcome**, not just process
- Be **specific**, not generic

### Images
- Clean visuals only
- No decorative backgrounds
- Focus on system or interaction
- Include brief captions

---

## Current Examples

### Using the System
✅ **Breakout Plus** - Uses `ProjectDetailTemplate`
- File: `src/app/components/BreakoutPlusProjectNew.tsx`
- Shows all sections properly structured

### Using ProjectCard
✅ **All Projects** in ProjectsListing
- File: `src/app/components/ProjectsListing.tsx`
- Consistent card layout

---

## Checklist for New Projects

When adding a new project:

- [ ] Add to `ProjectsListing.tsx` with correct data
- [ ] Create project detail component using `ProjectDetailTemplate`
- [ ] Follow required section order
- [ ] Keep descriptions concise (one line for cards)
- [ ] Use consistent typography (slate colors)
- [ ] Include all required fields (metadata, overview, outcome, reflection)
- [ ] Add optional sections only if needed
- [ ] Add route in `routes.tsx`
- [ ] Test on mobile and desktop
- [ ] Verify consistency with other projects

---

## Benefits of This System

1. **Consistency** - All projects look cohesive
2. **Speed** - Add new projects quickly
3. **Maintainability** - Update one template, affect all projects
4. **Professional** - Clean, organized presentation
5. **Scalable** - Easy to add 5, 10, or 50 projects

---

## Need Help?

See full documentation: `src/app/components/portfolio/README.md`

---

**Remember**: The goal is a professional portfolio system, not individual custom pages. Consistency is key!
