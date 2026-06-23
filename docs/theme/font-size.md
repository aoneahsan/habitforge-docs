---
id: font-size
title: Font size and UI scaling in HabitForge
description: Set body text to Small, Medium, or Large and scale the whole UI from 90% to 110% in HabitForge — two independent controls for readable, comfortable layouts.
sidebar_label: Font & scaling
sidebar_position: 3
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge font size
  - ui scaling
  - text size
  - larger text
  - readability
  - accessibility sizing
  - radix scaling
---

# Font size and UI scaling

**HabitForge gives you two independent sizing controls in the theme customizer: Font Size, which sets body text to Small, Medium, or Large, and UI Scaling, which shrinks or grows every element from 90% up to 110%.** Font Size changes how big the copy reads; UI Scaling changes how big the controls, cards, spacing, and icons are. Keeping them separate means you can have large text with a compact layout, or roomy touch targets with normal-sized text — whatever is comfortable. Defaults are **Medium** font and **100%** scaling. Both are free, apply instantly, and are saved with the rest of your theme.

## Use cases

### Easier reading without zooming the page

Set **Font Size** to **Large** for a noticeably bigger body text across the app, without resorting to browser zoom (which can break layouts). The Large preview tile shows a bigger `Aa` so you can see the jump before you commit.

### Comfortable touch targets on a phone

Raise **UI Scaling** to 105% or 110% so buttons, chips, and cards grow and become easier to tap one-handed. This is especially useful alongside HabitForge's 44-pixel minimum touch targets.

### A denser dashboard on a big monitor

On a large desktop screen you may want to see more at once. Drop **UI Scaling** to 95% or 90% to tighten spacing and fit more habits and trackers in view, while keeping the font size wherever it reads best for you.

## How the two controls differ

| Control | Choices | Default | What it affects |
|---|---|---|---|
| Font Size | Small, Medium, Large | Medium | The root text size, so all copy scales together |
| UI Scaling | 90%, 95%, 100%, 105%, 110% | 100% | The size of every UI element — controls, spacing, icons |

Because they are separate, the combinations are yours to mix. Large font at 95% scaling gives big readable text in a tight layout. Medium font at 110% gives a roomy interface with normal text. There is no single "size" slider that forces both at once.

## How to change sizing

1. Open the **theme customizer** from the **palette icon** in the header.
2. Under **Font Size**, tap the **Small**, **Medium**, or **Large** card. Each card shows a live `Aa` preview at that size.
3. Under **UI Scaling**, tap a percentage chip from **90%** to **110%**.
4. The app resizes immediately behind the dialog. Adjust until it feels right, then close.

Like the rest of the customizer, there is no save button — each choice is applied and stored the moment you tap it.

## How it interacts with your device settings

HabitForge's in-app Font Size and UI Scaling sit on top of your operating system's own accessibility settings. The app also respects your device's system text-size and zoom preferences, so the in-app controls are an extra layer of comfort rather than a replacement. If you already use a large system font, you may find Medium in-app font is plenty; if not, Large gives you the bigger text without changing anything system-wide.

## Tips

- **Change one control at a time.** Adjust Font Size first, then nudge UI Scaling — it is easier to judge each effect on its own.
- **Large font, normal scale** is the most popular accessibility combo — bigger words without a bulky layout.
- **Lower scaling for dense data pages.** Trackers and the wellness dashboard show more rows at 90–95% scaling.
- **Pair with appearance.** Large text in [dark mode](./customizer) is a comfortable low-light reading setup.

## FAQ

### What is the difference between Font Size and UI Scaling?

Font Size changes text only. UI Scaling changes the size of the whole interface — buttons, padding, icons, and text together. Use Font Size for readability and UI Scaling for overall density.

### Will my sizing choices sync across devices?

Yes, when you are signed in. Both settings are stored with your account theme and applied on your other devices. Signed out, they persist on the current device only. See [Cross-device sync](./sync).

### Does increasing the size break any layouts?

HabitForge is built to stay responsive from small phones to wide desktops, so larger sizes reflow rather than overflow. If you ever see something cramped, lower UI Scaling a step.

### Is there a way to make text even bigger than Large?

Combine **Large** font with a higher **UI Scaling** (110%), and optionally raise your device's system text size too — the app honors that as well.

### Are these sizing options free?

Yes. Like every theme option in HabitForge, Font Size and UI Scaling are part of the free app.

## Where to next

- [Theme customizer overview](./customizer) — all the theming controls in one place.
- [Accent color and gray tone](./accent-colors) — color the resized interface.
- [Reduced motion](./reduced-motion) — pair comfortable sizing with calmer animation.
- Set your sizing now at [habitforge.aoneahsan.com](https://habitforge.aoneahsan.com).
