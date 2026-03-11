# ReComp 💪
### Your personal body recomposition coach. Free. Offline. No login needed.

ReComp is a free, open source fitness PWA (Progressive Web App) built as a single HTML file. No app store, no account, no subscription. Install it on your phone like a native app and it works completely offline.

Built for people who are serious about body recomposition — losing fat and building muscle simultaneously — without paying £10/month for a fitness app that shows you ads.

**[Try it live →](https://max-bullman.github.io/recomp-app2/)**

---

## What it does

### 📅 Today
- See your meals, macros and calories for today
- Log each meal as eaten and track progress toward your daily targets
- Carb cycling built in — training days and rest days have different macro targets
- Hydration tracker (based on your bodyweight)
- Supplement checklist with timing reminders
- Step count and sleep logging

### 🏋️ Workout
- Library of 12 pre-built plans: Recomp, Fat Loss, Muscle, Strength, Athletic, Home
- Plans cover 3–5 days/week, beginner through advanced
- 1 Rep Max calculator — enter your best lift, the app calculates your true 1RM and prescribes exact weights for every set using the Epley formula
- Double progression tracking — the app tells you when to add weight
- Build your own custom plan

### 🛒 Shopping
- Select your shopping period (this week, next week, or custom range)
- Once you confirm your meal plan in Nutrition, a full ingredient list generates automatically
- Items grouped by category with estimated quantities and UK costs
- Tick off as you shop — progress bar tracks completion
- Shared shopping list for couples (partner mode)

### 📊 Body
- Log weight daily — 7-day rolling average smooths out water weight fluctuation
- Waist measurements, steps, sleep quality tracking
- Weight history chart
- Adaptive calorie recommendation based on your actual rate of progress vs your target

### 🥗 Nutrition
- **Week Planner** — select your week, set your training days, generate a 7-day meal plan, confirm it. Meals then unlock in Today and your shopping list generates in Shop
- **Nutrient Goals** — evidence-based micronutrient analysis calculated from actual food portions in your confirmed plan. Real mg/mcg values vs UK NRVs (USDA FoodData Central + UK Nutrient Databank)
- **Supplement Tracker** — grouped by timing (morning / pre-workout / pre-bed)
- **AI Supplement Advisor** — get personalised, evidence-based supplement recommendations based on your goal, diet flags and detected nutrient gaps *(requires API key)*
- **AI Meal Plan Generator** — one tap generates a full personalised 7-day plan built around your macros, preferences and budget *(requires API key)*
- **AI Meal Prep Guide** — batch cooking instructions for your week *(requires API key)*

---

## Features

| Feature | Free |
|---|---|
| Full workout plan library | ✅ |
| Manual meal planning & week planner | ✅ |
| Body stats, weight tracking, progress | ✅ |
| Nutrient analysis (evidence-based) | ✅ |
| Shopping list with cost estimates | ✅ |
| Supplement tracker | ✅ |
| Solo and partner/couples mode | ✅ |
| AI meal plan generator | 🔑 API key |
| AI supplement advisor | 🔑 API key |
| AI meal prep guide | 🔑 API key |

---

## Install on your phone

ReComp is a PWA — it installs like a native app with no app store needed.

**iPhone (Safari):**
1. Open the live link in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"

**Android (Chrome):**
1. Open the live link in Chrome
2. Tap the three dots menu
3. Tap "Add to Home Screen" or "Install App"

---

## Run it yourself

No build step, no dependencies, no server needed. It's a single HTML file.

```bash
git clone https://github.com/Max-Bullman/recomp-app2.git
cd recomp-app2
open index.html
```

Or just download `index.html` and open it in any browser.

---

## Solo and partner mode

ReComp supports two modes set during onboarding:

- **Solo** — single profile, straight into your own dashboard
- **Partner** — two independent profiles (separate goals, macros, plans) with a shared shopping list. Both people confirm their meal plan and the combined ingredient list generates automatically

---

## Tech stack

- Vanilla HTML, CSS, JavaScript — zero dependencies, zero frameworks
- localStorage for all data — fully offline, nothing leaves your device
- Anthropic Claude API for AI features (optional)
- Nutritional data: USDA FoodData Central & UK Nutrient Databank
- NRVs: EU/UK EFSA 2017

---

## Licence

MIT — free to use, modify and distribute. See [LICENSE](LICENSE) for details.

Copyright (c) 2025 Max Bullman
