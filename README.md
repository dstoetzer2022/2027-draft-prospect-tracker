# 2027 MLB Draft Prospect Tracker

A live, self-contained scouting board for the 2027 MLB Draft class — 24 active prospects (18 college, 6 HS — pitcher-majority board) tracked, with an archived bench of additional profiles across Cards, Big Board, Map, and Compare views, with 20–80 grades, pitch-level evaluations, and sourced scouting notes. Updated weekly.

**Live board:** *(add your GitHub Pages link here)*

*(add a screenshot here — `![Board](screenshot.png)`)*

Built and maintained by **Derek Stoetzer** ([BumpDay Analytics](#)) — pitching analytics / run prevention. Trackman operator, Arroyo Seco Saints (California Collegiate League).

## What's in it

- **Cards** — trading-card layout with grade shelf, school logos, watchlist, and expandable full scouting reports (grades, sources, injury history, MLB comps)
- **Big Board** — sortable hitter/pitcher tables with tier dividers and personal rankings
- **Map** — geographic view of the class (US + Canada) with click-to-filter
- **Compare** — side-by-side tool grades for up to four same-role prospects
- Two-way players (e.g., Chase Fuller) appear in both hitter and pitcher contexts

## Methodology

- All tool grades use the standard **20–80 scouting scale**
- Pitcher fastball grades are **auto-derived from present velocity** using standard amateur bands (92 = 55, 94 = 60, 96 = 65, ...)
- **OFP** is a straight average of present tool grades (hitters: hit/power/run/arm/field; pitchers: FB/secondaries/command)
- Where a prospect hasn't been fully evaluated yet, the board says so — a **⚑ Needs Report** flag is more honest than an invented grade

## Sources & attribution

Evaluations are my own synthesis of publicly available reporting (Baseball America, Perfect Game, Prep Baseball Report, MLB.com, local outlets). All notes are paraphrased into original wording — never copied — and every claim is logged per-player in the Sources panel with outlet and date. Numeric grades are mine unless a source's own published grade is explicitly cited.

## How the weekly update works

All scouting edits happen in the browser (localStorage). To publish:

1. Do the week's scouting in the live board
2. Click **Publish data.js** — downloads a full snapshot
3. Replace `data.js` in the repo and commit

Commit history on `data.js` = the scouting log.

## Running locally

No build step. Clone and open `index.html` in a browser (`data.js` must sit next to it). Your edits persist in localStorage; **Backup JSON / Restore JSON** moves work between browsers or machines, and **Reset to Published** returns to the committed board state.

## Stack

Single-file vanilla JS/HTML/CSS (~no dependencies), localStorage persistence with schema versioning, CSV/JSON export, static-host friendly (GitHub Pages).
