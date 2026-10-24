# PJS Gym Design System

PJS Gym is a gym brand. This system defines the look of its member-facing mobile app: browsing sessions and classes, starting a workout, logging sets live, and tracking progress. Light and restrained: white backgrounds, a pastel pink palette for accents and soft fills, deep rose only where something must be read or tapped, hierarchy built from typography and spacing.

## Sources
No codebase, Figma file, logo or existing PJS product was provided. The system is an original synthesis from six reference images in `uploads/`:
- `Hevy iOS 20.png`: workout/routine list (quick start tiles, routine cards, dashed "add" slots, folder sections). Used for structure and density.
- `Ladder iOS 95.png`: full-bleed photo hero, expanded-caps title, save/schedule/share/download row, neon pill CTA. Used for the hero composition.
- `Peloton Strength+ iOS 82.png`: dark exercise carousel, pager dots, exercise rows with thumbnails, white floating pill CTA.
- `Peloton iOS 127.png`: Body Activity tab with muscle percentage rows and blue meters.
- `images (3).jpeg`, `images (4).jpeg`: Material 3 Expressive concept art. Used for shape language (stadium crops, big circular play, lavender secondary).

The color palette comes from a pastel pink swatch sheet (`uploads/pasted-1792852742150-0.png`): blush, ballet pink, pink frosting, cotton candy, strawberry milk, rosewater, cherry blossom, petal pink and dusty rose.

None of those brands' marks, photos or names are used in the system itself.

**Design principles** are adapted from Vercel's published design guidance (https://vercel.com/design.md). Only the principles are used. No Vercel logos, Geist fonts or Vercel CSS are part of this system.

## Principles
1. **Start with the member's job.** Each screen answers one question (what do I train today, what do I lift next, did I improve). Put that answer first.
2. **Quiet palette, loud contrast.** Pastels set the mood but never carry meaning. Deep rose and ink carry action, state and data, always at 4.5:1 or higher for text. Never color a number because it is good.
3. **Typography before surfaces.** Build hierarchy with size, weight and spacing. Add a card or border only for a real group or a tap target.
4. **One focal object per screen.** Supporting content is quieter. Peers share identical type, size and alignment.
5. **Honest data.** Zero baselines, one shared scale per set of bars, direct labels instead of legends, a caption that says what to notice.
6. **Still by default.** Motion only confirms a change. No bounce, parallax, scroll reveals or pulsing.
7. **No decoration.** No decorative gradients, glows, blobs, glass, textures, icon tiles or all-caps eyebrows. Scrims over photos are allowed for legibility.
8. **Accessible.** 44px targets, visible focus, color never the only cue, reduced-motion respected.

## Index
- `styles.css`: entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `assets/fonts/`: Archivo variable woff2 (roman + italic, wdth 62–125, wght 100–900)
- `guidelines/`: foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/`: React primitives, one card per folder
- `ui_kits/member-app/`: interactive mobile app recreation (`index.html`)
- `thumbnail.html`, `SKILL.md`

## Components
- **core/**: Icon, Button, IconButton, Badge, Chip
- **forms/**: TextField, Switch, Checkbox, Stepper, SegmentedControl
- **navigation/**: TabBar, TopBar, Tabs
- **content/**: WorkoutHero, RoutineCard, ExerciseRow, SetRow, StatTile, MuscleRow, ActionTile, SectionHeader, ActionRow
- **feedback/**: ProgressDots, ProgressBar, ProgressRing, Sheet, Toast

No source inventory existed, so this is a standard set sized to a training app. The dialog pattern is `Sheet` (bottom sheet); there is no centered modal. **Intentional additions:** `Icon` wraps Lucide so every component draws glyphs the same way. `SetRow`, `Stepper`, `MuscleRow` and `ProgressRing` are gym-specific needs (set logging, weight entry, body activity, rest timer).

## UI kits
- `ui_kits/member-app/`: Home, Train (routines), Workout detail, Active workout (set logger + rest timer + finish sheet), Progress.

---

## CONTENT FUNDAMENTALS
- **Voice:** a coach on the floor. Short, direct, encouraging without hype. Speak to the member as "you". The gym speaks as "we" rarely, and only for the club ("Classes at PJS").
- **Casing:** Sentence case everywhere: titles, buttons, labels, headlines ("Start workout", "Quick start", "Mobility and core"). No all-caps eyebrows or tracked labels. The only uppercase is the "PJS GYM" wordmark.
- **Headings state the point,** not the genre: "Glutes did the most work", "Volume peaked on Saturday", not "Body activity" or "Stats".
- **No em dashes.** Use a period, a colon or "·".
- **Numbers do the talking.** "5×5 Barbell Back Squat", "3 × 10 · 60s rest", "82.5 kg", "28:00". Use × for sets×reps and · as a separator. Units are lowercase with a space (kg, min, s), and short in lists ("1m", "30s").
- **Exercise names:** Name (Equipment), e.g. "Bench Press (Barbell)", "Shoulder Press (Dumbbell)".
- **Greetings and nudges** are one sentence with a reason: "Morning, Jordan. You trained legs yesterday, so today is mobility."
- **Celebrate PRs plainly:** "New PR: bench 82.5 kg". No exclamation marks, no celebration effects.
- **Say only what the data supports.** "Up 8% on last week", not "Crushing it".
- **No emoji.** Icons carry the meaning.

## VISUAL FOUNDATIONS
- **Color:** Backgrounds are white (`surface-app` and `surface-card` #FFFFFF; raised #F5F4F5, field #F1F0F1, both neutral). The pastel palette (`--pjs-blush` … `--pjs-dusty`) is used sparingly: selected/completed states (`accent-soft` strawberry), chart tracks and context bars, chips and the wordmark tile. Never use it as a page background. None of the pastels reach 3:1 against each other or white, so **never put text, icons or essential lines in a pastel.** Anything that must be read uses ink or deep rose. Text is warm plum ink (`text-1 #2B1B21` 16:1, `text-2 #5E434C` 9:1, `text-3 #7D5F69` 5.6:1 on white). **Pink `#FF4FA0`** (`--accent`) is the primary action color: the primary button, active tab, checked boxes, focus ring and chart highlight. It is a fill only, with **ink labels (5.6:1)** and never white text (3:1 fails). Pink text on white is also 3:1, so text accents (links, active row names, completed set numbers) use **deep rose `#9C3A57`** (`--text-accent`, 7.7:1). `rose-500` is for non-text graphics only (3:1); `rose-600` is for large text only. **Charts:** `--data-1` pink for the decisive mark (3:1 as a graphic, labelled in ink), `--data-4` dusty rose for context bars, `--data-track` ballet for tracks, and `rose-500`/plum for extra series. Flare `#C62F4B` is for live/danger only. `data-theme="dark"` (plum-black, petal accent with ink labels) is reserved for screens over photography or video.
- **Type:** One family, Archivo, used at two widths. Display is Archivo Expanded (wdth 125) at 800–900, sentence case, line-height ~0.9. Use it for at most one statement per screen (hero title) and the wordmark. UI and body use normal width at 400–700. Metrics (timers, weights) use tabular figures, weight 800.
- **Spacing:** 4px base. 20px screen gutter. 12px gap between tiles, 16–20px card padding, 44px minimum tap target.
- **Radii:** 10 (thumbnails, checkboxes), 14 (fields, quick-action tiles), 20 (cards), 28 (sheets, media tiles), 36 (featured hero tile), pill (all buttons, chips, tab indicator, toasts).
- **Backgrounds:** Flat near-black. Imagery is full-bleed photography, never patterns, textures or gradients as decoration. The only gradients are protection scrims over photos (`--scrim-bottom`, `--scrim-top`).
- **Imagery:** Real members and coaches in the PJS gym, one key light, neutral grade. Use a photo only when it shows the session. No stock, no AI illustration, no brand-color tints, no decorative shape crops.
- **Cards:** Use one only for a real tap target or group (RoutineCard, Sheet). Metrics, charts and lists sit on the canvas unboxed. Never nest cards and never use a colored left border. In dark mode a card is one surface step up with a 1px `rgba(255,255,255,.08)` border; in light mode it is white with `--shadow-card-light`.
- **Elevation:** Depth comes from surface steps. Shadows only on floating things (sheets, toasts, floating CTA).
- **Transparency & blur:** No glass or blur. Icon buttons over photos use a solid `--surface-overlay` chip. Scrim `rgba(0,0,0,.6)` behind sheets.
- **Borders:** 1px subtle hairlines for list dividers and tab bar. 1.5px dashed for empty "add" slots. 1.5px inner ring for outline buttons and focused fields (pink on focus).
- **Motion:** Still by default. State changes use `--ease-standard` at 200ms; sheets enter with `--ease-emphasized` at 320ms. No overshoot, bounce, parallax, scroll reveals or pulsing. `prefers-reduced-motion` turns all transitions off.
- **Charts:** Zero baseline. One scale per set of bars, with label, bar and value columns aligned across rows (see `MuscleRow`). Label the decisive value directly, and add a caption saying what to notice. Values are right-aligned and use tabular figures.
- **Hover/press:** Mobile-first, so press is the main state: scale to .98 (icon buttons .96) plus `brightness(.92)` on filled buttons. On pointer devices, hover may use the same darken at 50% strength.
- **Layout:** Fixed bottom tab bar (84px incl. home indicator). Fixed floating CTA above content on logger screens. Top bars are 52px with centered titles, transparent over media.

## ICONOGRAPHY
- **Set:** [Lucide](https://lucide.dev) outline icons, 2px stroke, rounded caps, loaded from CDN (`lucide-static@0.469.0`) through the `Icon` component (CSS mask, so it takes `currentColor`). This is a substitution, since no brand icon set was supplied. The references use similar thin-outline iOS-style glyphs.
- **Use sparingly:** only when an established glyph makes an action faster to recognize (play, back, close, more, add). Every icon in an action row has a text label. No icons on metrics, no icon tiles.
- **Sizes:** 20 in buttons, 22–24 in nav and rows, 26 in hero action rows.
- **Color:** Inherit text color. Pink fill or deep-rose glyph only when the icon marks an active or selected state. Filled icons are avoided except where Lucide's outline reads too weak at hero size.
- **No emoji, no unicode glyph icons.** Use `×` and `·` only as typographic separators.
- **Logo:** None provided. Wherever a mark would go, set "PJS GYM" in Archivo Expanded Black (see Brand › Wordmark). Do not invent a logo.

## Fonts
Archivo is from Google Fonts, chosen as the stand-in brand face, and is self-hosted in `assets/fonts/`. Replace it if PJS Gym has its own typeface.
