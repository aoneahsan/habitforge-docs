---
id: categories-tags
title: Categories, tags, and visual organisation
description: How HabitForge organises habits without explicit categories or free-form tags. Color, icon, and the keystone flag — what they do and the recommended patterns for grouping habits visually.
sidebar_label: Categories & tags
sidebar_position: 7
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - habit categories
  - habit tags
  - keystone habit
  - habit organisation
---

# Categories, tags, and visual organisation

**HabitForge does not have free-form tags or category dropdowns.** Habits are organised by three lighter mechanisms: a colour swatch, an icon, and a single keystone flag. This page documents those three controls, why HabitForge skipped tags on purpose, and the recommended patterns for grouping habits when you have more than three.

## Why no tags or categories?

A few honest reasons:

1. **Tags reward the wrong activity.** In every productivity app that has free-form tags, users spend more time tagging than doing. The dopamine of organising starts to substitute for the dopamine of doing.
2. **Categorisation degrades.** A user who tags "fitness" on day one ends up with `fitness`, `Fitness`, `health-fitness`, `body`, and `exercise` six months later. Cleanup never happens.
3. **The colour-and-icon system gets you 90% of the way.** Three dozen colour swatches × about a hundred icons gives every reasonable habit a distinct visual identity without a typed metadata layer.
4. **The keystone flag handles the one cross-cutting axis that matters.** "This habit is more important than the others" is the only metadata most users genuinely want; everything else is noise.

If you really need tags, the workaround is to put a hashtag in the **Description** field. The free-text search on the habit list will find it. But the product opinion remains: you don't need it.

## Color

### What colour does

The selected colour controls:

- The strength bar's gradient (within the band's colour family).
- The habit row's background tint on the dashboard.
- The dot beside the habit's name in the calendar heatmap and the wellness dashboard.
- The icon background on the habit detail page header.

### Choosing a colour

The picker shows a curated palette of about 24 swatches: 8 primary hues × 3 saturations. The default is the brand orange. Accent-colour selection is also available globally in the [theme customizer](/docs/theme) — the per-habit colour overrides the global accent for that habit.

### Recommended colour patterns

Two patterns work well; both beat random selection.

**Pattern A: by life area.** All health habits in green. All focus habits in blue. All learning habits in purple. The dashboard becomes scannable at a glance — you can tell which area is doing well today by which colour band is full.

**Pattern B: by intensity.** Hard habits in red. Medium in amber. Easy in green. The bar's band colour will sometimes match (when strength is low and difficulty is hard, both are red), which doubles as a visual reminder.

Mix-and-match is fine, but pick one mental model rather than alternating.

## Icon

### What icon does

The icon appears next to the habit name in:

- Today's checklist on the dashboard.
- The keystone-priority section.
- The calendar heatmap legend.
- The browser-extension popup.
- The local-notification body, when the platform supports it.

### Choosing an icon

The icon picker shows roughly 100 [Lucide](https://lucide.dev/) icons grouped into categories (health, focus, learning, productivity, hobbies, finance, social). The picker is filterable — type "drink" and matching icons surface.

There is no upload option. The choice is curated for visual consistency across the dashboard; arbitrary uploads would produce a chaotic look that defeats the purpose.

### Recommended icon patterns

- **Pick a literal icon for literal habits.** Drinking water → glass icon. Walking → footprint icon. Sleep → moon icon. No need to be clever.
- **Pick an emotional icon for abstract habits.** "Feel grateful" → heart icon. "Show up consistently" → flag icon. The icon is the emotional anchor.
- **Don't repeat icons.** Two habits with the same icon are visually confusable.

## Keystone flag

### What keystone does

When a habit is flagged Keystone:

- It appears in a "Keystones" section at the top of the dashboard, above other habits.
- It is included in the upcoming "show only keystones" filter.
- A small star indicator appears next to its name.

The strength math, streak engine, reminders, and notifications are not affected by the flag. **Keystone is a label and a sort priority — nothing more.**

### What keystone does NOT do

- It does not magnify gains or losses.
- It does not give you a multiplier.
- It does not auto-detect itself. *You* decide what's a keystone.

Charles Duhigg's *The Power of Habit* (2012) coined the term to describe habits that produce a cascade of other behaviour changes — exercise leading to better sleep leading to better diet, etc. The research base for the cascade effect is mixed; HabitForge exposes the flag because labelling your own keystones is useful even if the cascade isn't always real.

### Recommended keystone usage

Limit yourself to **two or three** keystone habits. The whole point of the flag is that it's a small subset. If half your habits are keystones, the flag stops meaning anything.

Common keystone picks:

- Sleep (because it affects everything else).
- A daily movement habit (walking, stretching, exercise).
- A daily journal entry (because it forces a reflection moment).

If your dashboard has six keystone habits, the typography goes weird and the priority sort stops feeling priority-y. The product gently suggests you reconsider.

## Working with many habits

If you have more than three or four habits, a few patterns help.

### Reduce first

Most users with many habits would be better off with fewer. The sober question: of the habits in this list, which are at strength 50+? Those are the ones working. The rest are aspirations, not habits.

Archive aspirations until the active list is at most four, then reintroduce one at a time. See [Edit and archive](./edit-archive#archive-a-habit).

### Group by colour

If you genuinely need eight habits, give each life area a distinct colour. The dashboard becomes a colour-grouped checklist that scans in a single glance.

### Use the keystone flag for the top two

Promote the two most important habits to keystone. The dashboard puts them at the top; the rest become "secondary" without you needing to actively prioritise.

### Use the description field for what counts

For ambiguous habits — "exercise," "read," "journal" — use the description field to write the rule. This isn't categorisation; it's clarity. Six months from now you'll thank yourself.

## What about life-area dashboards?

The wellness dashboard (sidebar → Dashboard) groups habits by life area automatically based on which trackers and journals you use alongside. If you use the [Water tracker](/docs/trackers) and have a "drink water" habit, both show up in the "Health" cluster. The grouping is heuristic; it doesn't require you to tag habits.

This auto-grouping is the closest HabitForge gets to categories. It's read-only — you can't override it — but it's also disposable. The real organising layer is colour and icon.

## Frequently asked questions

### Can I add my own colour to the picker?

Not via UI. The palette is curated for visual consistency. If a specific colour matters to you (brand colour, partner's favourite, etc.), the closest swatch is usually fine.

### Can I add my own icon?

No. The icon picker is the curated [Lucide](https://lucide.dev/) set.

### Can I have more than one keystone flag per habit?

The flag is a boolean: a habit is or isn't keystone. There are no "tiers" of keystone-ness.

### Can I sort the dashboard manually?

Not today. The sort order is: keystones first (by recency), then non-keystones (by recency). A drag-to-reorder feature is on the wishlist.

### How does colour interact with dark mode?

Each colour has a calibrated dark-mode variant so the bar and icon backgrounds remain WCAG AA on dark backgrounds. You don't pick a separate dark-mode colour — the same swatch picks both.

### Is there search across habits?

Yes — the dashboard has a small search input that filters by name, description, cue, routine, and reward. Hashtags you put in the description (e.g., `#health`) are findable through search. This is the closest thing HabitForge has to user-defined tags.

### Why doesn't HabitForge ship with built-in life-area categories?

Because life-area is exactly the wrong granularity for habits. Most users' "health" category contains five different habits with no shared schedule, difficulty, or behaviour. Categorising them together adds zero information. Colour and icon are the right tool — they let you visually group when grouping helps and ignore the grouping when it doesn't.

### Will tags ever be added?

Maybe. The criterion would be: a clear use case that colour + icon + keystone flag does not solve. So far that hasn't surfaced. The roadmap entry is open but low priority.

## Where to next

- [Create a habit](./create) — every field on the form.
- [Edit and archive](./edit-archive) — reorganise your habits.
- [Strength visual](./strength-visual) — what the colour bands mean.
- [Theme customizer](/docs/theme) — accent colours and global theming (Batch 9).
