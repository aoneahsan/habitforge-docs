---
id: expenses
title: Expenses & income
description: Log income and expense entries with a category, currency, and date. Set a monthly budget overall and per category. The HabitForge expense tracker is intentionally light on accounting features — it captures awareness, not bookkeeping.
sidebar_label: Expenses
sidebar_position: 7
last_update:
  date: 2026-05-11
  author: Ahsan Mahmood
keywords:
  - expense tracker
  - budget tracker
  - personal finance log
  - monthly budget
---

# Expenses & income

**The HabitForge expense tracker logs each income or expense as an entry with an amount, currency, category, and date.** A monthly budget total plus optional per-category budgets show what you're spending against what you planned. The tool is awareness-grade, not bookkeeping-grade — there are no accounts, no double-entry, no reconciliation, and no bank-feed integration.

This page documents the entry form, the category system, the budget interaction, and the multi-currency behaviour. It does not give financial advice — see the [FAQ](#how-do-i-set-a-monthly-budget) for what HabitForge does and does not claim.

## Use cases

### Becoming aware of where money actually goes

The first month of honest logging is the highest-value month. Most users discover one or two categories absorbing more than they expected. The tracker exists for that reality check.

### Setting a budget you actually use

Many users have set budgets in apps they later abandoned. The HabitForge budget integrates with the dashboard, so the running spend is visible alongside habits — same daily check-in, more useful information.

### Tracking a "spending diet"

The expense tracker pairs naturally with a `No discretionary spending today` habit during a budget-tight phase. The habit captures the intent; the tracker captures what actually happened.

### Tracking freelance income or side-hustle revenue

Income entries (`type: income`) capture irregular earnings. Per-month totals separate income from expense for a clean monthly P&L view.

### Multi-currency travel

Each entry stores its own `currency`. The dashboard's monthly total is shown in your default currency, but no automatic conversion is performed — see the [multi-currency behaviour](#multi-currency-behaviour) below for the exact rule.

## How it works

### The entry

Each row writes an `Expense` (the name covers both types) to `hf_expenses`:

| Field | Type | Notes |
|---|---|---|
| `type` | `'income'` or `'expense'` | Determines whether the amount adds or subtracts in totals. |
| `amount` | number | Positive number. The `type` field determines direction. |
| `currency` | string | ISO 4217 code. Inherited from settings; per-entry override allowed. |
| `category` | string | From your category list (set in settings). |
| `description` | string? | Free-text context. "Lunch with X," "Refund from Y." |
| `date` | string | `YYYY-MM-DD` in your device's timezone. |

### Settings

| Field | Notes |
|---|---|
| `currency` | Default currency code. New entries inherit this. |
| `categories` | Your list of categories. Pre-seeded with common ones; fully editable. |
| `monthlyBudget` | Total cap for the month, in your default currency. |
| `categoryBudgets` | Map of `{category: budget}` for finer-grained caps. |

### The category list

Default categories: `Food`, `Transport`, `Rent`, `Utilities`, `Entertainment`, `Shopping`, `Health`, `Education`, `Subscriptions`, `Other`. You can add, rename, or delete categories — the list is your own.

Categories are free-text strings, not enumerated IDs. Renaming a category in settings updates the label on every existing entry that used the old name. Deleting a category does not delete the entries — they stay logged under the old name, which appears in totals as a "ghost" category until you re-categorise.

### Multi-currency behaviour

Each entry has its own currency. The dashboard's monthly total is computed:

1. Group entries by currency.
2. Sum each currency's entries separately.
3. Display per-currency subtotals plus a combined total in the default currency, computed using the entry's stored exchange rate **if** one was provided.

There is **no automatic exchange-rate lookup**. The tracker does not call any FX API. For trips, the cleanest pattern is to enter local-currency expenses (record the local-currency receipt) and the math stays sane within that currency. Conversions to your home currency are done outside the app or via a manual note.

This is a deliberate choice — auto-converting expenses requires a constant FX feed, which means a remote API call, which violates HabitForge's "no third-party data scopes" stance.

### The budget interaction

`monthlyBudget` is a single number in your default currency. The dashboard's expense row shows the month-to-date spend (sum of `type: expense` entries with date in current month) against this budget.

Per-category `categoryBudgets` overlay the same view: spending in Category X vs that category's cap.

There are no warnings, alerts, or penalties when you go over budget. The bar turns amber → red as you approach and cross the cap; that's the entire notification surface. The product opinion: budget-overshoot guilt-tripping rarely changes behaviour.

## Step-by-step: log an expense

1. Sidebar → Trackers → Expenses → **Add entry**.
2. Pick **type**: `expense`.
3. Enter **amount**.
4. Pick **currency** (defaults to your default).
5. Pick **category** from the dropdown.
6. Optionally write a **description**.
7. Save.

The day's running total updates on the dashboard immediately.

## Step-by-step: log income

Same flow, type `income`. The amount is positive; the `type` field is what makes it income rather than expense. Income contributes to your monthly P&L but not to the expense-against-budget bar.

## Step-by-step: set a monthly budget

1. Sidebar → Trackers → Expenses → **Settings**.
2. Enter **monthlyBudget** in your default currency.
3. Optionally enter per-category budgets.
4. Save.

The dashboard's expense bar now compares MTD spend against the cap.

## Step-by-step: edit a transaction

1. Expenses → list view → tap the entry.
2. Edit any field → Save. Or **Delete** to remove.

There's no time limit. Edits to past entries recompute monthly totals.

## Step-by-step: rename or add categories

1. Settings → **Categories** section.
2. **Add** a new category or **tap** an existing one to rename / delete.
3. Save.

Renaming a category propagates the new name to all entries that used the old name. Deleting a category leaves existing entries tagged with the deleted name — re-categorise them manually.

## Tips

- **Log within 24 hours.** Memory of small expenses ($4 here, $7 there) decays fast. The aggregate truth comes from logging in real time.
- **Don't over-categorise.** Six to ten categories beats twenty. More categories = more decision fatigue at log time = less logging.
- **Use the description field for context, not categorisation.** "Lunch with Alex" tells you what the $18 went to; the category is already `Food`. The description is searchable, which makes the history actually useful.
- **Pair with a habit during a budget phase.** A `No takeaway today` habit + the expense tracker is a cleaner accountability loop than the budget bar alone.
- **Re-evaluate categories monthly.** Three months in, you'll discover the `Other` bucket is half your spending, and `Other` needs to be split into real categories.

## Frequently asked questions

### How do I set a monthly budget?

Honest answer: take your last three months of expenses (you can run this from the tracker once you've logged for a quarter), find the average, and set the budget at 90–95% of that. A budget at 50% of average is aspirational and almost guaranteed to fail; a budget at 110% is a permission slip. **HabitForge does not recommend a budget for you.**

### Does the tracker connect to my bank?

No. There is no bank-feed integration. Entries are manual or — in a future iteration — receipt-OCR. The current stance follows the same "no third-party scopes" principle as the rest of the app (see [Privacy basics](../getting-started/privacy-basics)).

### Why no automatic currency conversion?

Because automatic conversion needs a remote FX feed, which means a remote API dependency, which means another data scope to disclose and another point of failure. The trade-off: users handling expenses in two currencies see two subtotals on the dashboard rather than a single converted total. Most users find that fine after a trip.

### Can I export my expense data?

Yes. **Profile → Export my data** includes every `Expense` record. See [Privacy basics → Export your data](../getting-started/privacy-basics#export-your-data) — useful for tax season or for importing into a dedicated accounting tool.

### Will HabitForge ever add accounts and reconciliation?

Probably not. The product opinion: HabitForge is a habit and wellness tool with a light expense layer for awareness. Users with multiple accounts, debt reconciliation, or tax-grade accounting needs are better served by purpose-built tools.

### Can I attach a receipt photo?

Not currently. Notes are text only. The wishlist for photo attachments depends on the same file-storage direction documented for the [workout log](./workout#can-i-attach-a-video-or-photo).

### How does the monthly total interact with my net worth?

HabitForge does not track net worth. The tracker is income and expense only — no asset or liability tracking. A net-worth view is on the wishlist but not committed.

### Can I have multiple budgets for the same month?

No. `monthlyBudget` is a single number plus optional per-category caps. Multiple budget scenarios (e.g., "vacation month vs normal month") would require either multiple budget profiles or manual adjustments before each month. The latter is the supported workflow.

### Does HabitForge give financial advice?

No. The tracker is a record. It does not recommend savings rates, investment categories, or spending limits. **HabitForge does not give financial or investment advice.**

### What about recurring transactions (rent, subscriptions)?

Not auto-created today. Log them manually each month. A recurring-entry feature is on the wishlist; the workaround is to use a habit (e.g., `Log rent` monthly) as the cue to enter it.

### Can I track multiple currencies as primary?

No — there's a single default currency in settings. Entries can use any currency, but the dashboard's combined total assumes the default. Users who genuinely operate in two currencies typically pick the one they live in primarily.

## Where to next

- [Workout log](./workout) — exercise sessions.
- [Reading tracker](./reading) — books and reading sessions.
- [Mood tracker](./mood) — daily mood with factors.
- [Habits → Create](../habits/create) — for budget-related habits like "no takeaway today."
