# Wesley Santos — Portfolio

A bilingual personal portfolio. I'm Wesley, a full stack developer with a strong frontend foundation. This portfolio navigation experience combines an editorial interface with detailed case studies covering product context, technical decisions, and outcomes.

## Highlights

- Portuguese and English content with a persistent language preference
- Light and dark themes based on the visitor's system preference
- Responsive, keyboard-accessible interactions and reduced-motion support
- Dedicated case study routes with project walkthrough videos
- Static content separated from presentation for straightforward maintenance
- Automated component, routing, accessibility, and architecture tests

## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | React 18, JavaScript, HTML5, CSS Modules |
| Tooling | Vite |
| Testing | Vitest, Testing Library, JSDOM |
| Deployment | Vercel |

## Project Structure

```text
src/
├── app/          # Application composition and route resolution
├── assets/       # Images, videos, documents, and icons
├── components/   # Layout, page sections, and reusable UI
├── content/      # Localized portfolio content and project data
├── hooks/        # Theme and locale behavior
├── pages/        # Home, case study, and not-found pages
├── styles/       # Shared animation styles
└── tests/        # Behavioral and architecture tests
```

## Getting Started

### Prerequisites

- Node.js 20.19 or newer
- npm

### Installation

```bash
git clone git@github.com:wesleysantosdev/ws-portfolio.git
cd ws-portfolio
npm ci
npm run dev
```

Vite will print the local development URL in the terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run test` | Run the test suite once |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |

## Routing and Deployment

Project case studies are rendered through client-side routes such as `/projetos/shrten`. The Vercel rewrite configuration sends direct requests back to `index.html`, preserving SPA navigation when a route is opened or refreshed directly.

## Contact

- [LinkedIn](https://www.linkedin.com/in/wesleysantosdev/)
- [GitHub](https://github.com/wesleysantosdev)
- [Email](mailto:wesleysantosdev@outlook.com)
