# Repeating Linear Gradint

## A minimal Next.js + Tailwind CSS component that demonstrates how to create unique grid scale borders using `repeating-linear-gradient()`.

## What This Demonstrates

- **Repeating gradients as patterns** — diagonal hatching and horizontal line rules via `repeating-linear-gradient`
- **CSS mask compositing** — `mask-b-from-10%` / `mask-t-from-10%` to fade line textures at edges

---

## Core Snippet

```tsx
// Diagonal hatched border — used for top/bottom scales
const Horizontal_Scale = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "h-10 w-full border-y border-[var(--pattern)]",
      "bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)]",
      "bg-size-[10px_10px]", // Tailwind v4: no config needed
      className,
    )}
  />
);

// Horizontal line rule with directional mask fade
const Line = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "h-10 w-full",
      "bg-[repeating-linear-gradient(to_bottom,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_0.45rem)]",
      className, // caller passes mask-b-from-10% or mask-t-from-10%
    )}
  />
);
```

**Set the token once, change everything:**

```css
:root {
  --pattern: oklch(0% 0 0 / 20%); /* swap for any color */
}
```

---

## Usage

```tsx
<Line className="mask-b-from-10% absolute inset-x-0 top-0" />
<Horizontal_Scale className="absolute top-0 w-screen" />
<Vertical_Scale className="absolute left-0 h-screen" />
```

Stack `absolute`-positioned instances of each primitive around a `relative` container to assemble the full drafting-frame layout.

---

## Stack

| Layer     | Choice                      |
| --------- | --------------------------- |
| Framework | Next.js 15 (App Router)     |
| Styling   | Tailwind CSS v4 (no config) |
| Language  | TypeScript                  |
