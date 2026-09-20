# SRU Cyberspace Website

Public site for Cyberspace Club at Slippery Rock University.

Modeled on the information architecture and visual rhythm of
[pittcsc.org](https://pittcsc.org/), with SRU forest green and gold.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Motion
- Phosphor Icons
- Outfit typeface

## Content

Club copy, nav, socials, officers, and events live in
`src/content/club.ts`. Edit that file for roster and link updates.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Routes: `/`, `/about`, `/events`, `/join`.

## Brand tokens

Defined in `src/app/globals.css`.

- Primary green: `#007055` (SRU PMS 342)
- Accent gold: `#F7D117` (SRU PMS 116)

## Deploy notes

Discord, Instagram, LinkedIn, and officer names are placeholders in
`club.ts` until officers fill them in. Track those in GitHub Issues.
