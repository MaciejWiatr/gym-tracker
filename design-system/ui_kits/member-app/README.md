# PJS Gym — Member app UI kit
Mobile (390×844) click-through of the PJS Gym member app. Dark theme default.

Flow: **Home** → tap "Mobility and core" → **Workout detail** (hero, save/schedule/share/download, plan and body activity tabs) → Start workout → **Active workout** (tick sets → rest sheet; Finish → save) → lands on **Progress** with a success toast. **Train** tab: quick start + routines (Start Routine → active workout).

Files: Phone.jsx (device shell + status bar), HomeScreen.jsx, TrainScreen.jsx, WorkoutDetailScreen.jsx, ActiveWorkoutScreen.jsx, ProgressScreen.jsx. All primitives come from the compiled bundle (`window.PJSGymDesignSystem_ff31cf`).

Note: there is no existing PJS Gym product; these screens are an original composition informed by the reference screenshots in `uploads/` (Hevy, Ladder, Peloton). Photography slots are dark gradient placeholders — swap in real PJS imagery.