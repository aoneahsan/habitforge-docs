---
id: customizer
title: "Theme customizer: appearance, color, size & shape"
description: Personalize HabitForge with the theme customizer — light/dark/system appearance, accent and gray colors, border radius, UI scaling, font size, panel style.
sidebar_label: Customizer
sidebar_position: 1
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge theme customizer
  - dark mode habit tracker
  - accent color
  - ui scaling
  - font size
  - border radius
  - system appearance
  - radix themes
---

# Theme customizer

**The HabitForge theme customizer is a single panel that controls how the whole app looks — appearance (light, dark, or system), accent color, gray tone, corner roundness, overall UI scale, body font size, and whether card surfaces are solid or translucent.** It is built on [Radix Themes](https://www.radix-ui.com/themes), uses card- and swatch-based selectors instead of plain dropdowns, applies every change instantly, and works whether or not you are signed in. When you are signed out, your choices are saved on the device; when you are signed in, they also follow you across devices. There is nothing to pay for — every option is part of the free app.

You open it from the **palette icon** in the app header (tooltip: "Customize theme"). The icon is visible to signed-out and signed-in users alike.

## Use cases

### Comfortable reading at night

Switch **Appearance** to **Dark** and bump **Font Size** to **Large** for low-light, long-session reading. Dark mode also recolors the native status and navigation bars on Android so the whole screen stays consistent, not just the page body.

### Matching the app to your mood or brand

Pick any of the 26 accent colors and pair it with a gray tone (slate, sage, sand, and four others). The accent drives buttons, links, focus rings, the loading logo, and selected states everywhere — so one tap re-themes the entire app.

### Small screens and accessibility

If touch targets feel cramped, raise **UI Scaling** to 105% or 110%. If you prefer a denser layout on a large monitor, drop it to 95% or 90%. This is independent of font size, so you can tune element size and text size separately.

## The seven options

| Option | Choices | Default | Selector |
|---|---|---|---|
| Appearance | Light, Dark, System | Light | Cards (Sun / Moon / Monitor icons) |
| Accent Color | 26 colors (indigo, violet, jade, tomato, …) | Indigo | Color swatches with tooltips + check mark |
| Gray Color | Gray, Mauve, Slate, Sage, Olive, Sand | Slate | Color swatches |
| Border Radius | None, Small, Medium, Large, Full | Medium | Chips |
| UI Scaling | 90%, 95%, 100%, 105%, 110% | 100% | Chips |
| Font Size | Small, Medium, Large | Medium | Cards with a live `Aa` preview |
| Panel Background | Solid, Translucent | Translucent | Cards with a description |

**Appearance → System** follows your operating system. HabitForge listens for OS theme changes live, so when your phone or desktop flips to dark in the evening, the app flips with it — no reload, no manual switch.

## How to change your theme

1. Tap the **palette icon** in the header to open the **Customize Theme** dialog.
2. Under **Appearance**, choose Light, Dark, or System.
3. Tap an **Accent Color** swatch — a check mark confirms the selection.
4. Optionally adjust **Gray Color**, **Border Radius**, **UI Scaling**, **Font Size**, and **Panel Background**.
5. Changes apply immediately behind the open dialog; close it when you are happy.

There is no "Save" button — every tap is committed the moment you make it.

## Where your choices are stored

- **Signed out:** preferences are written to the device through [`@capacitor/preferences`](https://capacitorjs.com/docs/apis/preferences) (the `hf_theme` store). The next visit on the same browser or device restores them. HabitForge never uses raw `localStorage`.
- **Signed in:** the same local write happens instantly, and the change is also pushed to your account profile in Firestore (`users/{uid}.settings.themeSettings`). When you sign in on another device, HabitForge pulls that profile and applies it, merged with sensible defaults for any newer option.

Because the theme is restored before the first paint, the app shows a short branded loading screen until both your saved theme and your sign-in state are ready — this avoids the flash of light-then-dark you see in apps that theme too late. See [Cross-device sync](./sync) for the full picture of what travels with your account.

## Tips

- **Start with appearance, then accent.** Those two carry the most visual weight; the rest is fine-tuning.
- **Use System if you toggle dark mode often.** Let the OS decide and the app keeps up automatically.
- **Translucent panels look best with a strong accent.** On Solid they are fully opaque; on Translucent a hint of your accent shows through card surfaces.
- **Tune scaling and font size independently.** Bigger touch targets do not have to mean bigger text, and vice-versa.

## FAQ

### Do I need an account to customize the theme?

No. The customizer is fully available signed out, and your choices persist on that device. Signing in only adds cross-device sync.

### Will my theme follow me to another phone or computer?

Only when you are signed in. Theme settings sync with your account; signed-out preferences stay on the one device. See [Cross-device sync](./sync).

### How do I undo my changes?

Re-open the customizer and pick the defaults: Light appearance, Indigo accent, Slate gray, Medium radius, 100% scaling, Medium font, Translucent panels.

### Is any of this a paid feature?

No. HabitForge is free, and every theme option is included. There are no premium themes or locked colors.

### Does the theme affect the native status bar on mobile?

Yes. On Android the app keeps the system status and navigation bars in step with your light/dark appearance, so the screen edges match the page.

## Where to next

- [Accent color and gray tone](./accent-colors) — the full color story.
- [Font size and UI scaling](./font-size) — sizing for comfort and accessibility.
- [Reduced motion](./reduced-motion) — calmer animations.
- [Cross-device sync](./sync) — what your account carries between devices.
- Try it now at [habitforge.aoneahsan.com](https://habitforge.aoneahsan.com).
