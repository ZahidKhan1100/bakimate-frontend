# BakiMate marketing site — SEO checklist

## Built into the app

- Per-page `<title>`, description, keywords, and **canonical** URLs (`src/lib/seo.ts`)
- Default **Open Graph** and **Twitter** images (`/opengraph-image`, 1200×630)
- **JSON-LD**: Organization, WebSite, MobileApplication (App Store), FAQ (home), BreadcrumbList (inner pages)
- **`/sitemap.xml`** and **`/robots.txt`** (`src/app/sitemap.ts`, `src/app/robots.ts`)
- **`/admin/*`** disallowed in robots and `noindex` in layout metadata
- Homepage **FAQ** section (`#faq`) aligned with FAQ structured data

## Environment (production)

| Variable | SEO use |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical host (must be `https://bakimate.com`) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console HTML tag |

Rebuild after changing any `NEXT_PUBLIC_*` value.

## Google Search Console verification

### Option A — HTML file (Search Console → Verify → HTML file)

1. Download the file Google gives you (e.g. `googleabc123….html`).
2. Put it in **`public/`** at the repo root (same folder as `icon.jpg`), unchanged.
3. Deploy. Test: `https://www.bakimate.com/google….html` must return **200** (middleware skips www→apex redirect for these files).
4. Click **Verify** in Search Console. **Keep the file** after verification.

See `public/google-site-verification.README.txt`.

### Option B — HTML meta tag (no file upload)

1. In Search Console, choose **HTML tag** and copy the `content="…"` value only.
2. Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=that-value` on Railway/Vercel.
3. Redeploy (public env vars are baked at build time).
4. Verify in Search Console.

## After deploy — manual steps

1. **Google Search Console** — submit sitemap: `https://bakimate.com/sitemap.xml` (use apex URL even if you verified www)
2. **Bing Webmaster Tools** — same sitemap URL (optional)
3. **App Store** — marketing URL should point to `https://bakimate.com` (already live listing)
4. Test sharing: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/), [Twitter Card Validator](https://cards-dev.twitter.com/validator) (or X equivalent)
5. Run Lighthouse **SEO** audit on `/`, `/privacy`, `/terms`

## Content tips (ongoing)

- Keep **What's New** updated when you ship features (fresh `lastModified` in sitemap on redeploy)
- Use real headings: one `<h1>` per page (already in place)
- Avoid duplicate copy from the old HabiMate clone on unused routes
