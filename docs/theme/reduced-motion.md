---
id: reduced-motion
title: Reduced motion support in HabitForge
description: HabitForge honors your prefers-reduced-motion setting — it trims animations, stops the loading screen from rotating, and disables spinners and transitions.
sidebar_label: Reduced motion
sidebar_position: 4
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge reduced motion
  - prefers-reduced-motion
  - disable animations
  - motion sensitivity
  - accessibility animations
  - calmer ui
  - wcag motion
---

# Reduced motion

**HabitForge respects your `prefers-reduced-motion` setting, so when you tell your device you prefer less animation, the app quiets nearly every animation, transition, and auto-scroll down to a hairline duration.** There is no in-app toggle to hunt for — HabitForge reads the standard operating-system preference, the same one used across the web, and adapts automatically. Reveal-on-mount entrances, hover lifts, the loading spinner's rotation, the boot screen's rotating tips, and smooth-scrolling all collapse to instant when reduced motion is on. This is part of HabitForge's commitment to WCAG 2.1 AA accessibility and applies everywhere in the free app.

## Use cases

### Motion sensitivity and vestibular comfort

For users who feel dizzy or unwell from on-screen movement, sweeping transitions and spinning elements can be a real barrier. Turning on reduced motion at the device level makes HabitForge calm: content appears in place rather than sliding or fading in, so daily check-ins do not trigger discomfort.

### Focus without distraction

Some users simply find motion distracting. With reduced motion on, the interface stops drawing the eye with entrance animations and hover effects, which can help when you are concentrating during a focus or study session.

### Slower or older devices

Animations cost a little performance. Reducing them can make the app feel snappier on lower-end hardware, since the browser skips the transition work entirely.

## What changes when reduced motion is on

| Element | Normal | Reduced motion |
|---|---|---|
| Page/element entrances (`reveal-on-mount`) | Fade and slide up | Appear instantly |
| Card hover | Subtle lift | No movement |
| Loading spinner | Rotates | Static ring |
| Boot screen tips | Rotate every few seconds | One static line |
| Smooth scrolling | Animated | Jumps directly |
| All CSS transitions and keyframes | Animated | Hairline duration (effectively off) |

The reduction is global. A single rule covers every animation and transition in the app — including spinners, pulses, fades, slide-ups, and any future additions — so nothing motion-heavy slips through, and the layout is never broken by removing the movement.

## How to turn it on

Reduced motion is a device setting, not an in-app one. Enable it where you normally manage accessibility:

1. **Windows:** Settings → Accessibility → Visual effects → turn off **Animation effects**.
2. **macOS:** System Settings → Accessibility → Display → enable **Reduce motion**.
3. **iOS / iPadOS:** Settings → Accessibility → Motion → enable **Reduce Motion**.
4. **Android:** Settings → Accessibility → enable **Remove animations** (wording varies by device).
5. Reopen or return to HabitForge — it picks up the change immediately, including live if you toggle it while the app is open.

HabitForge listens for changes to this preference, so you do not have to restart the app for it to take effect.

## How it is implemented

Two layers honor your preference. A global CSS rule under `@media (prefers-reduced-motion: reduce)` reduces the duration of every animation, transition, and scroll behavior across the app. On top of that, the full-page loading screen checks the preference in code: it swaps its spinning ring for a static one and shows a single tip instead of rotating through several. The result is a consistent calm experience from the very first frame through every page.

## Tips

- **Set it once at the device level.** Every reduced-motion-aware app, including HabitForge, will follow — you do not configure it per app.
- **It pairs well with dark mode and large text.** A calm, high-contrast, larger-text setup is comfortable for long sessions; see the [customizer](./customizer).
- **Toggle live to compare.** Turn the setting on and off while HabitForge is open to feel the difference instantly.

## FAQ

### Is there a reduced-motion switch inside HabitForge?

No, and that is by design. HabitForge reads the standard `prefers-reduced-motion` setting from your device, so you control it in one place and every app respects it.

### Does reduced motion remove any features?

No. Only the movement is removed. All content, controls, and data behave exactly the same — things simply appear instantly instead of animating.

### Will the loading screen still show tips?

Yes, but a single static tip rather than a rotating sequence, and the spinner is shown as a still ring instead of spinning.

### Does this affect the D3 charts?

The app honors reduced motion for its animations broadly. Note that, separately, the habit-strength D3 charts have limited screen-reader support today, which the [accessibility statement](https://habitforge.aoneahsan.com) lists as a known limitation with text alternatives provided.

### Is reduced-motion support a paid feature?

No. It is built in and free, part of HabitForge's accessibility commitment.

## Where to next

- [Theme customizer overview](./customizer) — appearance, color, and sizing.
- [Keyboard & screen-reader navigation](./keyboard-shortcuts) — the rest of HabitForge's accessibility story.
- [Font size and UI scaling](./font-size) — comfortable sizing to pair with calm motion.
- Read the full [accessibility statement](https://habitforge.aoneahsan.com) in the app.
