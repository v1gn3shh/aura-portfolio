# Aura Studio

Aura Studio is a modern, sleek, and responsive portfolio web application crafted for creative professionals, filmmakers, and visual storytellers. It features smooth interactive galleries, seamless page transitions, a built-in ambient audio player, and a unified dark/light mode experience—providing an immersive digital environment that places work front and center.

## Features
- **Immersive Boot sequence:** A sophisticated preloader.
- **Interactive Gallery:** Horizontal carousel designed with Framer Motion, enabling swipe/drag and keyboard interactions.
- **Ambient Audio:** Built-in generative web-audio synthesizer for a continuous atmospheric drone.
- **Dark/Light Themes:** Fully integrated Tailwind dark mode toggling.
- **Responsive Design:** Optimized for seamless performance across desktop and mobile viewing.

## Technology Stack
- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (with arbitrary value support and custom utilities)
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Prerequisites
- Node.js 18+ (or Node 20 as used in the environment)
- npm or yarn

## Installation

1. Clone or navigate to the repository directory.
2. Install dependencies:
```bash
npm install
```

## Development
To start the local development server with hot-module replacement (HMR), run:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## Production Build
To create a minimized production build:
```bash
npm run build
```
This generates the optimized static assets into the `dist/` folder.

## Deployment
The `dist` directory can be deployed to any static host:
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3

## Known Limitations
- The generative ambient audio requires the user to interact with the DOM before it will playback (Standard browser autoplay policy). The "Music" toggle allows the user to explicitly start the ambient drone.
- External links to works are placeholders. They should be hooked up to a real CMS or dedicated project pages.
