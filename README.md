This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## BakiMate marketing site + admin shell

Cloned from **HabiMate** (`habimate-frontend`): **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4**, **next-themes**, **framer-motion**, **lucide-react**, same folder layout under `src/`.

- **Marketing** pages still contain **roommate/household** copy from the HabiMate clone — replace progressively with BakiMate (udhaar / shop ledger) messaging.
- **`/admin`** — layout + **Overview** placeholder (`src/app/admin/`). **HabiMate’s public repo had no admin**; add auth and API calls to `bakimate-backend` when ready.
- Brand **green** (`#00875A`) aligned with the mobile app; OG image and JSON-LD updated for BakiMate.

Copy `.env.example` → `.env.local` and set `NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_API_BASE_URL`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
