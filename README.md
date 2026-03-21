# Famealy 💪
### Serious fitness tracking for you. Shared nutrition for your household.

Famealy is a free, open source fitness PWA built as a single HTML file. No app store, no account, no subscription needed to use the core app. Install it on your phone like a native app — it works completely offline.

Built for people who train seriously and live with people who don't. Track your macros, hit your lifts, and still have a shopping list that works for everyone at home.

**[Try it live →](https://max-bullman.github.io/Famealy/)**

---

## The problem it solves

You're eating for body composition. Your partner isn't. Your kids definitely aren't. Every week you either plan your own meals and ignore everyone else, or you compromise your nutrition to fit around the household.

Famealy gives every person in the house their own independent profile — their own goals, their own meal plan, their own macros — and merges everything into a single shared shopping list. One app, one shop, no arguments.

---

## Screenshots

| Today | Workout | Shopping |
|-------|---------|----------|
| ![Today tab](screenshots/today.png) | ![Workout tab](screenshots/workout.png) | ![Shopping tab](screenshots/shopping.png) |

| Body | Nutrition | Streaks |
|------|-----------|---------|
| ![Body tab](screenshots/body.png) | ![Nutrition tab](screenshots/nutrition.png) | ![Streaks](screenshots/streaks.png) |

---

## What it does

### 📅 Today
- Animated dual calorie ring — calories and protein tracked live, changes colour as you approach your target
- Carb cycling built in — training days and rest days have different macro targets automatically
- Quick-add protein chips — one tap to log whey, chicken, tuna, Greek yogurt and more
- Hydration tracker personalised to your bodyweight
- Supplement checklist with timing reminders

### 🏋️ Workout
- 14 pre-built plans covering every goal and level — Recomp, Fat Loss, Muscle, Strength, Beginner, Athletic, Home, Female
- 1 Rep Max calculator — Epley formula, prescribes exact weights for every set
- Double progression — tells you exactly when to add weight
- Exercise info, swap, add, remove and reorder within any session
- Rest timer — auto-starts after each logged set
- End session early — injury or time cut short, save your partial session with one tap
- Move today's session — swap a training day to another day this week without touching your permanent schedule
- Ad hoc workouts — log a session on a rest day from the library or build your own

### 😴 Rest Days
- **Free:** Rest day tips — steps, sleep and protein reminders
- **Standard AI:** Smart active recovery — reads what you trained yesterday, serves a targeted mobility routine for the muscles you worked
- **Premium AI:** Deep recovery analysis — AI reads your RPE history, volume and coach flags to build a personalised recovery protocol

### 🛒 Shopping
- Each profile confirms their own weekly meal plan
- A single merged list generates automatically — one shop covers the whole household
- Items grouped by category with estimated quantities and UK costs
- Tick off as you shop, select by week or custom date range

### 📊 Body
- Daily weight with 7-day rolling average to smooth out water fluctuation
- Waist, steps, sleep quality and hours
- Weight history chart and body composition estimate
- Workout volume chart — weekly total or per exercise over time
- Conditioning log for cardio and active recovery
- Adaptive calorie recommendation based on your actual rate of progress

### 🔥 Streaks & Ranks
- Daily activity streak — log weight, hydration, sleep or complete a workout
- 12 army ranks from Recruit to General — earned by consistency, not performance
- Tap the streak bar for your rank card, 28-day calendar and meal streak

### 🥗 Nutrition
- Week Planner — set training days, confirm a 7-day meal plan, shopping list generates automatically
- Nutrient Goals — micronutrient analysis vs UK NRVs with real mg/mcg values from actual food portions
- Supplement Tracker — grouped by timing, rule-based advisor flags nutrient gaps
- Meal Library — save and reuse your own meals and recipes
- AI Meal Plan Generator *(API key required)*
- AI Supplement Advisor *(API key required)*

### 🍳 Prep
- Meal prep queue from your confirmed plan
- Step-by-step batch cooking guide
- AI Prep Guide *(API key required)*

### 🤖 AI Coaching
- AI Exercise Coach — mid-session coaching with full context of your logged sets and RPE history
- AI Workout Coach — weekly review of reps and RPE, auto-adjusts next week's weights
- AI Workout Plan Generator — custom plan built around your equipment, schedule and goal
- Weekly check-in — structured end-of-week input that teaches the coach your patterns over time
- Coach memory — persistent profile of your training history, injuries and preferences

### 👤 Onboarding
- Personality questionnaire — training history, injuries, lifestyle, motivation style, dietary relationship
- 12-week profile check-in — periodic refresh as life changes
- Workout plan recommendation scored by goal and experience level

---

## Household mode

Each person has their own fully independent profile:

- Their own goal — fat loss, muscle, maintenance or no gym
- Their own macro targets and meal plan
- Their own workout plan, supplements and body tracking
- Their own AI coaching context

When both profiles confirm their meal plan, Famealy merges the ingredient lists into one shopping list. One trip, no compromise.

*Cross-device household sync coming soon — currently both profiles run on the same device.*

---

## Pricing

| Tier | Price | What you get |
|------|-------|-------------|
| **Free** | £0 | Full workout library · Manual meal planning · Body tracking · Nutrient analysis · Shopping list · Supplement tracker · Streak ranks |
| **Standard AI** | £4.99/mo | Everything free + AI meal plan · AI workout plan · AI workout coach · Weekly check-in AI · Smart active recovery |
| **Premium AI** | £7.99/mo | Everything Standard + AI exercise coach · Deep recovery analysis · Coach memory · Household linking |
| **Nutrition Only** | £2.99/mo | AI meal plan · Household linking · No workout features |
| **PT Licence** | £29.99/mo | Full Premium AI across all clients · Multi-client management · AI progression per client |

*AI features currently require your own Anthropic API key. Managed subscription coming soon.*

---

## Install on your phone

**iPhone (Safari):** Open the live link → Share button → Add to Home Screen

**Android (Chrome):** Open the live link → three-dot menu → Add to Home Screen or Install App

Opens without a browser bar, works offline, behaves like a native app.

---

## Run it yourself

```bash
git clone https://github.com/Max-Bullman/Famealy.git
cd Famealy
open index.html
```

No build step, no dependencies, no server needed. It's a single HTML file.

---

## AI setup (optional)

1. Get an API key from [console.anthropic.com](https://console.anthropic.com)
2. Open Famealy → Settings → AI Features → paste your key

Stored locally on your device, never transmitted. A full month of heavy use typically costs under £1.

---

## Tech stack

- Vanilla HTML, CSS, JavaScript — zero dependencies, zero frameworks
- localStorage — fully offline, nothing leaves your device
- Supabase — optional cloud sync across devices
- Anthropic Claude API — optional AI features
- Nutritional data: USDA FoodData Central & UK Nutrient Databank
- NRVs: EU/UK EFSA 2017

---

## Licence

MIT — free to use, modify and distribute. See [LICENSE](LICENSE) for details.

Copyright (c) 2025 Max Bullman
