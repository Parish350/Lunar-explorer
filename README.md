# Lunar Explorer — Journey to the Moon

An interactive, educational space exploration web application celebrating the history and future of human exploration of the Moon.

## Live Access
- The application is currently running locally at: **http://localhost:3010** (and **http://localhost:3000**)

## Key Features

1. **Space Theme & Animated Starfield Canvas**:
   - Deep space background with twinkling stars, nebula gradients, and an animated transiting spacecraft with ion thruster glow.
   - Realistic 3D Moon sphere in the hero section complete with interactive surface pins for Tranquility Base (Apollo 11) and the Lunar South Pole (Artemis target).

2. **Human Moon Missions Gallery**:
   - Covers **Apollo 8, Apollo 11, Apollo 12, Apollo 13, Apollo 15, Apollo 17, Artemis I, Artemis II, and Artemis III**.
   - Verified NASA mission dates, crew rosters, spacecraft specifications, key achievements, and surprising trivia.
   - Interactive filtering by *All*, *Crewed*, *Uncrewed*, *Lunar Landing*, and *Lunar Flyby*.
   - In-depth Mission Briefing modal with detailed narratives and NASA imagery.

3. **Interactive Human Lunar Timeline**:
   - Chronological journey spanning from Luna 2 (1959) and Yuri Gagarin (1961) to Apollo 11 (1969), Apollo 17 (1972), 1990s robotic exploration, international missions (2000s–2010s), and the 2020s Artemis era.
   - Decade filters and spotlight card revealing vehicle specs, flight trajectories, and scientific discoveries.

4. **Moon Facts — "The Moon Is Stranger Than You Think"**:
   - Interactive cards covering orbital distance, reflected sunlight (albedo), synchronous rotation (tidal locking), 1/6th gravity, extreme temperatures, moonquakes, ancient craters, and orbital drift.
   - "Did You Know?" random secret generator button.
   - Earth vs. Moon comparisons and collapsible scientific explanations.

5. **Mission Control Quiz**:
   - 12 comprehensive multiple-choice questions across Beginner, Intermediate, and Advanced difficulties.
   - Synthetic Web Audio sound effects (correct chime, incorrect buzz, fanfare) with a mute toggle.
   - Detailed answers explaining why each option is correct, accompanied by bonus trivia.
   - Live score tracking, animated progress bar, confetti celebration upon completion, and achievement badges (e.g., *Commander of Lunar Operations*).
   - "Challenge a Friend" share button that copies score directly to clipboard.

6. **Real-Time Luna AI Assistant**:
   - Floating chat guide available on every page.
   - Server-side route at `/api/chat` with verified NASA knowledge base citations.
   - Full support for live Google Gemini LLM via `GEMINI_API_KEY` in `.env.local`.
   - Suggested question chips, message history, loading states, and telemetry retry triggers.

7. **Astronaut Flight Plan Learning Journey**:
   - Narrative progress tracker guiding users through 6 stages: Mission Briefing → Launch & Ascent → Lunar Orbit → Moonwalk Surface → Mission Control → Final Evaluation.

## Running Locally

```bash
# Start development server
npm run dev

# Or start production server
npm run build
npm run start
```
