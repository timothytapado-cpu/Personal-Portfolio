# Timothy Tapado | Personal Portfolio

Final project for **ITST 301 Principles of Web Design** (BSIT 3 WMAD, Laguna State Polytechnic University).

A one-page personal portfolio that introduces me, lists the skills I can explain, shows my project samples, and gives visitors a way to contact me. The intended audience is instructors, classmates, and people looking for a student web developer.

## Links

| What | Link |
| --- | --- |
| Live website | https://YOUR-USERNAME.github.io/portfolio/ |
| GitHub repository | https://github.com/YOUR-USERNAME/portfolio |
| Figma design (desktop and mobile) | https://www.figma.com/YOUR-PORTFOLIO-FILE |

## How to open it

- **Online:** open the live website link above. No sign-in needed.
- **On your computer:** download or clone this repository, then open `index.html` in a browser.

## Files

```
portfolio/
├── index.html          Page content and semantic HTML5 structure
├── css/
│   └── style.css       Color palette, typography, layout, focus styles
├── js/
│   └── script.js       Skill filter and dark mode
├── assets/
│   └── img/            Logo, profile image, project images
└── README.md
```

## Sections

| Section | What visitors can do |
| --- | --- |
| Home | Read my name and introduction, jump to projects or contact |
| About | Read my developer profile, course, and section |
| Skills | Filter my skills by Languages, Frameworks, or Tools |
| Projects | See project samples, my contribution, and the tools used |
| Contact | Email me or open my GitHub and LinkedIn |

## Technology

- **HTML5**: `header`, `nav`, `main`, `section`, `article`, `footer`, logical headings
- **CSS3**: custom properties for the palette, transitions, focus styles
- **Bootstrap 5.3**: grid, responsive navbar, buttons
- **JavaScript**: two interactions, described below

## JavaScript features

| Feature | Event (trigger) | Visible result |
| --- | --- | --- |
| Skill filter | `click` on a filter button in the Skills section | Cards fade out, only the chosen group fades back in, the button turns yellow, and the status text updates (for example "Showing 3 of 7 skills") |
| Dark mode | `click` on the "Dark mode" button in the navigation | Page colors change with a 0.3 second transition, the button label changes to "Light mode", and the choice is saved in `localStorage` |

Both work with the keyboard: press Tab to reach the button, then Enter or Space.

## Color palette

| Color | HEX | Where it is used |
| --- | --- | --- |
| Ink navy | `#14213D` | Headings, body text, logo, phone frame |
| Screen blue | `#2457D6` | Links, primary button, focus outline, language cards |
| Signal amber | `#FFB703` | Wordmark dot, active filter button, phone shadow, framework cards |
| Paper white | `#FFFFFF` | Page background, cards |
| Tint | `#EEF2FB` | Alternate section background |
| Muted slate | `#4A5672` | Secondary text |
| Line | `#D3DAEA` | Borders |

Fonts: Bricolage Grotesque (headings) and Figtree (body), both from Google Fonts.

## Accessibility

- Skip link, semantic landmarks, one `h1`, ordered headings
- Descriptive link text and alt text on informative images
- Visible focus outline on every link and button
- Filter and theme buttons use `aria-pressed`; filter results are announced with `aria-live`
- Animations are reduced when the visitor's device asks for reduced motion

## Credits

- Logo, profile illustration, and project illustrations: original work by Timothy Tapado
- Bootstrap 5.3 (MIT License): https://getbootstrap.com
- Fonts: Bricolage Grotesque and Figtree from Google Fonts (SIL Open Font License)
