# NBA Dev-Page Copilot Instructions

## Project Overview
This is a static HTML webpage showcasing NBA teams organized by Eastern and Western Conferences. The page features team logos as clickable buttons with a background video.

## Architecture
- **Main File**: `index.html` - Single-page application with conference sections
- **Styling**: `style.css` - CSS for layout and visual design
- **Assets**: `assets/` folder containing:
  - `east/` and `west/` subfolders with team logo PNGs
  - Background video file

## HTML Structure Patterns
- Use `<div class="container">` as the main wrapper with flex layout
- Conference sections: `<div id="container-west">` and `<div id="container-east">`
- Headings: `<h2>` for West, `<h3>` for East conferences
- Team buttons: `<button type="button"><img src="./assets/{conference}/{team}.png" alt="logo-{team}"></button>`
- Wrap teams in `<div class="conf-west">` or `<div class="conf-east">` with flex-wrap

Example team addition:
```html
<button type="button"><img src="./assets/west/denver-nuggets.png" alt="logo-nuggets"></button>
```

## CSS Conventions
- Font: Raleway from Google Fonts
- Layout: Flexbox with `justify-content: center` and `gap: 50px`
- Images: Fixed width `120px`, height auto
- Buttons: No background/border, cursor pointer, 5px padding
- Conference containers: `flex: 1`, `flex-wrap`, `max-width: 400px`
- Background video: Fixed position, full screen, muted autoplay loop

## Asset Organization
- Team logos: PNG format, placed in `assets/east/` or `assets/west/`
- Naming: Lowercase, team-specific (e.g., `clippers.png`, `76ers.png`, `atlanta-hawks.png`)
- Video: MP4 format in `assets/` root

## Development Workflow
- No build process required - edit HTML/CSS directly
- Test in browser by opening `index.html`
- Add new teams by following existing button/img pattern in appropriate conference div</content>
<parameter name="filePath">d:\DevClub\Projetos Pessoais\Projeto - NBA\.github\copilot-instructions.md