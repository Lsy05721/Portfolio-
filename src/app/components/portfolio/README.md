# Portfolio System Documentation

This folder contains reusable components for maintaining a consistent portfolio presentation across all projects.

## Components

### 1. ProjectCard

A standardized card component for displaying projects in grid layouts.

**Props:**
- `id` (string): Unique project identifier for routing
- `title` (string): Project title
- `description` (string): One-line description (keep concise)
- `tools` (string[]): Array of tool/technology tags
- `imageSrc` (string, optional): Path to project cover image
- `customCover` (ReactNode, optional): Custom cover component (e.g., animated SVG)

**Usage:**
```tsx
<ProjectCard
  id="my-project"
  title="Project Title"
  description="A concise one-line description of the project."
  tools={["Tool 1", "Tool 2", "Tool 3"]}
  imageSrc="/path/to/image.png"
/>
```

**Design Rules:**
- Fixed height: 192px (h-48)
- Dark background matching portfolio theme (bg-slate-900/50)
- Purple accent borders (border-purple-500/20)
- Scale on hover (hover:scale-[1.02])
- Rounded corners (rounded-xl)
- Consistent spacing

---

### 2. ProjectDetailTemplate

A standardized template for all project detail pages following a consistent hierarchy.

**Required Props:**
- `metadata`: Project metadata (title, description, type, tools, tags, etc.)
- `overview`: Short explanation of project purpose
- `outcome`: What the project delivers
- `reflection`: Object with `whatWorks` and `improvements` fields

**Optional Props:**
- `hero`: Custom hero visual component
- `problem`: Problem statement
- `solution`: Solution approach
- `features`: Array of key features (max 3 recommended)
- `systemProcess`: System flow or process explanation
- `links`: Array of CTA links
- `additionalSections`: Array of custom sections

**Usage:**
```tsx
<ProjectDetailTemplate
  metadata={{
    title: "Project Name",
    description: "One-line project description",
    type: "Project Type",
    tools: "Tool 1 / Tool 2",
    duration: "4 weeks",
    tags: ["Tag1", "Tag2", "Tag3"]
  }}
  overview="This project aims to..."
  problem="The challenge was..."
  solution="This design responds to the problem by..."
  features={[
    {
      title: "Feature Name",
      description: "Feature description",
      icon: <IconComponent />
    }
  ]}
  outcome="This project delivers..."
  reflection={{
    whatWorks: "What succeeded...",
    improvements: "What could be improved..."
  }}
  links={[
    { label: "View Prototype", url: "https://..." }
  ]}
/>
```

---

## Page Structure Hierarchy

All project detail pages must follow this exact order:

1. **Hero** - Title, description, tags, metadata
2. **Overview** - Short project purpose
3. **Problem** (optional) - Issue being addressed
4. **Solution** (optional) - Design approach
5. **Key Features** (max 3) - Core functionality with icons/images
6. **System & Process** (optional) - Flow, logic, interaction
7. **Additional Sections** (optional) - Custom content
8. **Final Outcome** - What was delivered
9. **Reflection** - What works + improvements
10. **Links/CTA** - View prototype/code/video

---

## Design System

### Theme Approach

The portfolio uses a **dual-theme system**:
- **Project Cards (listings)**: Dark theme with purple accents - matches the main portfolio aesthetic
- **Project Detail Pages**: Light theme with slate colors - optimizes readability for longer content

This creates visual hierarchy: dark, engaging cards that draw attention → clean, readable detail pages that focus on content.

### Typography
- **Titles**: text-4xl md:text-5xl, text-slate-900
- **Subtitles**: text-2xl, text-slate-900
- **Body**: text-base, text-slate-700, leading-relaxed
- **Small**: text-sm, text-slate-600

### Colors
- **Primary**: slate-900 (text), slate-700 (secondary text)
- **Backgrounds**: white, slate-50, slate-100
- **Borders**: slate-200, slate-300
- **Accent**: Use sparingly for CTAs

### Spacing
- **Section margin**: mb-12 (48px)
- **Element margin**: mb-4, mb-6 (16px, 24px)
- **Padding**: p-6 (24px) for containers
- **Grid gap**: gap-4, gap-6 (16px, 24px)

### Components
- **Cards**: bg-white, rounded-lg, border border-slate-200
- **Containers**: bg-slate-50, rounded-lg, p-6, border border-slate-200
- **Tags**: bg-slate-100, text-slate-700, rounded or rounded-full

---

## Content Guidelines

### Tone & Voice
Use clear, professional language:
- ✅ "This project aims to..."
- ✅ "This design responds to..."
- ✅ "This system allows users to..."
- ❌ Casual explanations
- ❌ Inconsistent writing tone

### Descriptions
- Keep card descriptions to one sentence
- Focus on outcome, not process
- Be specific, not generic

### Images
- No decorative backgrounds
- Use clean visuals only
- Include short captions
- Focus on system or interaction

---

## Adding New Projects

### Step 1: Add to ProjectsListing
```tsx
const projects = [
  {
    id: "project-slug",
    title: "Project Title",
    description: "One-line description.",
    tools: ["Tool1", "Tool2"],
    imageSrc: "/path/to/image.png"
  }
];
```

### Step 2: Create Project Detail Component
```tsx
import ProjectDetailTemplate from "./portfolio/ProjectDetailTemplate";

export default function MyProject() {
  return (
    <ProjectDetailTemplate
      metadata={{ ... }}
      overview="..."
      outcome="..."
      reflection={{ ... }}
    />
  );
}
```

### Step 3: Add Route
```tsx
// routes.tsx
{ path: "project/project-slug", Component: MyProject }
```

---

## Best Practices

1. **Consistency First**: Use the template for ALL projects
2. **Content Over Design**: Focus on clear communication
3. **Keep It Simple**: Avoid unnecessary decoration
4. **Follow Hierarchy**: Maintain section order
5. **Test Responsiveness**: Ensure mobile compatibility
6. **Limit Features**: Max 3 key features per project
7. **Be Concise**: Short paragraphs, clear structure

---

## Migration Checklist

When converting existing projects to the new system:

- [ ] Replace custom card with `<ProjectCard />`
- [ ] Restructure detail page with `<ProjectDetailTemplate />`
- [ ] Update metadata format
- [ ] Simplify image handling
- [ ] Standardize section order
- [ ] Update typography classes
- [ ] Verify color scheme
- [ ] Test responsive layout
- [ ] Check consistency with other projects

---

This system ensures all projects feel like part of one cohesive portfolio, not individual disconnected pages.
