---
id: keyboard-shortcuts
title: Keyboard and screen-reader navigation in HabitForge
description: HabitForge has no custom hotkey scheme. It relies on standard keyboard navigation, visible focus rings, and accessible Radix dialogs (Esc to close, Enter to submit).
sidebar_label: Keyboard & screen reader
sidebar_position: 5
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge keyboard navigation
  - screen reader support
  - tab navigation
  - focus visible
  - accessible dialogs
  - keyboard accessibility
  - voiceover talkback nvda
---

# Keyboard and screen-reader navigation

**HabitForge does not ship a custom global hotkey scheme; instead it is built to be fully operable with standard keyboard navigation and screen readers, so you can reach and use every interactive element with the keys your browser and assistive tech already provide.** That means Tab and Shift+Tab to move between controls, Enter or Space to activate them, Esc to close dialogs, and arrow keys inside the menus, selects, and tab groups that Radix provides. There are no app-specific key combinations to memorize. This page documents the real, honest accessibility behavior — what genuinely exists — rather than inventing a shortcut list. Everything here is part of the free app and aligns with HabitForge's WCAG 2.1 AA commitment.

## Use cases

### Working without a mouse

Keyboard-only users can navigate the entire app — open the menu, move through habit cards, mark completions, fill forms, and submit them — using Tab to move and Enter or Space to act. Every interactive element is focusable and operable from the keyboard.

### Using a screen reader

HabitForge is tested with VoiceOver (iOS and macOS), TalkBack (Android), and NVDA (Windows). Icon-only buttons carry text labels so they are announced meaningfully, and each page has a single top-level heading so the document outline is clear.

### Quickly dismissing dialogs

Because the app's dialogs are built on accessible Radix primitives, pressing Esc closes them and focus returns sensibly to where you were — no mouse hunt for a close button.

## What actually exists

### Standard browser and Tab navigation

There is no proprietary navigation layer. You move through HabitForge with the keys the platform already defines:

- **Tab** / **Shift+Tab** — move focus forward / backward through links, buttons, fields, and cards.
- **Enter** / **Space** — activate the focused button, link, or card-style control.
- **Esc** — close an open dialog, popover, or menu.

### Visible focus rings

Every focusable element shows a clear focus outline when you reach it with the keyboard (a `:focus-visible` ring). You always know where you are, which is the foundation of keyboard usability.

### Accessible Radix dialogs and menus

HabitForge's modals, menus, selects, and tab groups use Radix UI primitives, which bring proper keyboard semantics for free:

- **Dialogs:** open with focus moved inside, **Esc** to close, focus trapped while open, and returned on close. In a form dialog, **Enter** submits from a text field.
- **Menus and selects:** **Arrow keys** move between items, **Enter**/**Space** chooses, **Esc** closes.
- **Tabs:** **Arrow keys** switch tabs where a tablist is used.

### In-component keys that genuinely exist

Beyond the platform defaults, the only "keys" are the ones any standard control gives you — for example, typing a value into a number or text field, using arrow keys within a native select, or pressing Enter to submit a form. There is intentionally no hidden hotkey map.

## How to navigate a typical task by keyboard

1. Press **Tab** from the top of the page to move into the header and main content.
2. Continue **Tab**bing until the focus ring lands on the control you want — for example a habit card or the **palette** (theme) button.
3. Press **Enter** or **Space** to activate it.
4. If a dialog opens, **Tab** through its fields, then press **Enter** to submit or **Esc** to cancel.
5. Use **Shift+Tab** at any point to step backward.

## Tips

- **Watch the focus ring.** It is your cursor in keyboard mode — it always shows the active element.
- **Esc is your universal "back out."** It closes any dialog, menu, or popover.
- **Pair with reduced motion.** If animation is distracting while you tab around, enable [reduced motion](./reduced-motion).
- **Screen-reader users:** prefer the web app for the richest experience; exported PDFs may not be fully accessible (a documented limitation).

## FAQ

### Does HabitForge have keyboard shortcuts like Ctrl+K or single-key commands?

No. There is no custom or global hotkey scheme. HabitForge relies on standard keyboard navigation (Tab, Enter, Space, Esc, arrow keys) provided by the browser and by accessible Radix components.

### Can I really use the whole app with just a keyboard?

Yes. All functionality is reachable and operable from the keyboard — every interactive element is focusable, and dialogs and menus follow standard keyboard semantics.

### Which screen readers are supported?

HabitForge is tested with VoiceOver (iOS/macOS), TalkBack (Android), and NVDA (Windows), plus keyboard-only navigation and high-contrast mode.

### How do I close a dialog from the keyboard?

Press **Esc**. Focus returns to where you were before the dialog opened.

### Are there any accessibility limitations I should know about?

Two are documented honestly: the D3 habit-strength charts have limited screen-reader support (text alternatives are provided), and exported PDF reports may not be fully accessible — use the web version with a screen reader. See the in-app [accessibility statement](https://habitforge.aoneahsan.com).

## Where to next

- [Reduced motion](./reduced-motion) — quieter animations for keyboard and screen-reader users.
- [Theme customizer overview](./customizer) — appearance, color, and sizing for visual comfort.
- [Font size and UI scaling](./font-size) — larger, more readable interfaces.
- Read the full [accessibility statement](https://habitforge.aoneahsan.com) in the app.
