---
id: calories
title: Calorie counter
description: Log meals (breakfast / lunch / dinner / snack) with calories, optional macros (protein, carbs, fat), and a daily goal. The HabitForge calorie counter is manual-entry by design — no proprietary food database, no server-side classifier.
sidebar_label: Calories
sidebar_position: 4
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - calorie counter
  - food log
  - macro tracker
  - meal log
  - daily calorie goal
---

# Calorie counter

**The HabitForge calorie counter logs each meal you eat with a name, calories, and optional macros (protein, carbs, fat).** Each entry is tagged with a meal type — breakfast, lunch, dinner, or snack — and assigned to a date. Daily totals are computed against a calorie goal and optional protein / carb / fat goals you set. The tracker is manual-entry by design: no proprietary food database, no server-side classifier, no scanned-receipt magic.

This page documents the food-log entry form, the macro fields, the meal-type breakdown, the favorites list, and the daily-goal interaction. It does not give nutritional or medical advice — see the [FAQ](#how-do-i-pick-a-calorie-goal) for what the tool does and does not claim.

## Use cases

### Awareness, not prescription

The most common use: log honestly for two weeks to see what you're actually eating. No diet plan, no goal beyond "see the data." Most users discover their actual intake is 30–40% off their estimate.

### Calorie deficit phase

For users in a deliberate cut, the calorie counter tracks intake against a deficit goal. Pair with the [weight tracker](./weight)'s trend line — those two together show whether the deficit is producing the expected weight movement.

### Macro-targeting

Users training for a specific physique or sport often have macro goals (e.g., 150g protein, 200g carbs, 70g fat). The optional macro fields per food entry produce daily macro totals on the dashboard. The goal fields are independent of calories — you can set macro goals without a calorie goal, or vice versa.

### Meal-type breakdown

The dashboard shows today's intake split by meal: breakfast / lunch / dinner / snacks. Useful for users who want to see whether snacks dominate the day's calories or whether dinner is the meal that needs work.

### Favorites for repeated meals

Most users eat the same 10–15 things. The favorites list pins those entries one tap away — `Greek yogurt + honey: 220 cal` doesn't need to be entered fresh every time you eat it.

## How it works

### The food log entry

Each entry writes a `FoodLog` to `hf_food_logs`:

| Field | Type | Notes |
|---|---|---|
| `meal` | `'breakfast'`, `'lunch'`, `'dinner'`, or `'snack'` | The meal slot. |
| `foodName` | string | Free text — "Greek yogurt + honey," "Chicken curry, ½ portion," etc. |
| `servingSize` | number | The quantity eaten (in whatever unit the foodName implies). |
| `calories` | number | Calories for the serving. |
| `protein` | number? | Optional grams. |
| `carbs` | number? | Optional grams. |
| `fat` | number? | Optional grams. |
| `barcode` | string? | Optional. Reserved for future scan-to-log feature. |
| `isFavorite` | boolean | Pinned to favorites? |
| `date` | string | `YYYY-MM-DD` in your device's timezone. |

### Calorie settings

| Field | Notes |
|---|---|
| `dailyCalorieGoal` | A target intake (or limit) in calories. |
| `proteinGoal` | Optional grams target. |
| `carbsGoal` | Optional grams target. |
| `fatGoal` | Optional grams target. |

The goal can be read either as a target (you're eating to hit it) or as a cap (you're staying under it). The UI does not enforce one reading — the bar simply shows progress, and you decide what you're aiming for.

### Daily totals

Today's total = sum of `calories` across all `FoodLog` entries dated today. The same logic applies for macros if the entries have them. Entries without macros simply contribute to the calorie total without affecting macro totals — partial macro data is fine.

### The favorites list

Tap the heart icon on any food entry to mark it favorite. Favorites appear at the top of the food picker as one-tap re-add buttons. Favorites are scoped to your account.

### Manual entry by design

There is no built-in food database. The tradeoff:

- **Pro**: no remote API to break or rate-limit; no server-side processing of your food log; no questionable nutrition data from a low-quality database; no advertising-supported food sponsor.
- **Con**: you have to type calories yourself the first time, looking them up on the package or via a web search.

After a week the favorites list typically covers 80% of your meals one-tap. The first week is the friction; after that it's fast.

## Step-by-step: log a meal

1. Sidebar → Trackers → Calories (or pin to dashboard).
2. Tap **Add entry**.
3. Pick **meal type** (defaults to whatever's closest to current time).
4. Enter **food name**.
5. Enter **calories** for the serving you ate.
6. Optionally fill in protein / carbs / fat.
7. Optionally check **Favorite** to pin for next time.
8. Save.

The day's running total updates immediately. The colour of the calorie bar reflects how close you are to your goal: under, at, or over.

## Step-by-step: re-log a favorite

1. **Add entry** → tap a favorite from the row at the top.
2. Adjust serving size if different from default.
3. Save.

That's it — usually 2–3 taps total.

## Step-by-step: edit a logged meal

1. Open Calories → today's date (or scroll to the date you want).
2. Tap the entry.
3. Change any field → Save. Or **Delete** to remove.

The day's total recomputes immediately.

## Step-by-step: change goals

Settings → Calorie settings → enter `dailyCalorieGoal` and any macro goals → Save.

You can change goals at any time. Changing the goal does not retroactively rewrite any past entry — it only affects the visual progress bar going forward.

## Tips

- **Don't log "estimates" of restaurant meals as exact numbers.** Restaurant calories are notoriously imprecise. If you must log them, round generously upward and treat the day as an over-estimate intentionally.
- **Build favorites in the first week.** The first week of logging is friction-heavy. By logging your usual breakfast, lunch, snacks, and dinner once each — and marking them favorite — you'll cover most subsequent days in 4 taps.
- **Don't worry about macros if you're not training.** Macro targeting is for specific goals (gaining muscle, cutting). For most users, calories alone are signal enough.
- **Pair with weight, not in isolation.** A calorie log without the [weight tracker](./weight)'s trend is just intake data. The two together tell you whether your deficit / surplus is producing the expected outcome.
- **Stop logging when you reach the awareness threshold.** Two weeks of honest logging is usually enough for most users to recalibrate. If continued logging starts to feel obsessive, that's information — set the tracker aside for a few weeks.

## Frequently asked questions

### How do I pick a calorie goal?

The honest answer: there is no single number that's right for everyone. Common heuristics include `body weight (kg) × 22` (sedentary maintenance) up to `× 35` (very active). Apps that calculate "your" number from height, weight, age, sex, and activity are guessing at population averages — they have no information about your real metabolism. **HabitForge does not calculate or recommend a calorie goal.** Pick a number you can sustain; iterate based on the [weight tracker](./weight)'s trend.

### Why no built-in food database?

Three reasons. First, the major food databases are commercial and have licensing terms incompatible with a free app. Second, user-contributed databases tend to be inconsistent (the same item appears with calorie counts varying 2x). Third, manual entry teaches you what's in your food in a way auto-pick never does — and the favorites list reduces friction to about the same as a food picker after the first week.

### Will barcode scanning be added?

The `barcode` field is reserved in the schema for a future scan-to-log feature. It would only work for products with on-package nutrition labels (i.e., not restaurant food, not produce). No firm timeline.

### Does the tracker count alcohol?

Alcohol calories are real calories — log them as a snack entry with the calorie count. The tracker doesn't classify or warn you about anything; it records what you tell it.

### Can I log a half-portion?

Yes. `servingSize` is a free number — log half a portion as 0.5 with appropriately reduced calories, or just edit the calorie value. The food name should reflect what you actually ate ("½ portion of stew") to keep history honest.

### Can I copy yesterday's day to today?

Not as a single action. The favorites list is the closest workflow — tap each favorite for today's intake. A "duplicate yesterday" feature is on the wishlist.

### Does the tracker do anything with the macros?

The dashboard shows today's macro totals against any macro goals you set. There is no warning if you go over fat, no traffic-light system, no compulsory-rebalancing. The numbers are informational.

### Can I track water through this tracker?

Use the [Water tracker](./water) for water — it's purpose-built and shares the same underlying log model. The calorie counter is for food.

### Does HabitForge give nutritional advice?

No. The tracker is a record. It does not tell you to eat more protein, less sugar, or anything else. **HabitForge does not give medical or nutritional advice.**

### How does the calorie tracker handle timezones?

Each entry is dated in your device's current timezone. Travel handles correctly. See [Streak engine → Timezones](../habits/streak-engine#timezones).

### Can I see calories vs sleep / mood?

The wellness dashboard cross-plots tracker totals across the same dates. Whether high-calorie days correlate with poor sleep is your own pattern to read; the dashboard does not run statistics.

## Where to next

- [Water tracker](./water) — hydration with one-tap quick-amounts.
- [Weight tracker](./weight) — body weight with smoothed trend.
- [Sleep tracker](./sleep) — bedtime, wake time, quality.
- [Habits → Schedule and reminders](../habits/schedule-reminders) — for meal-time reminders.
