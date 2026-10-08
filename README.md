# WeRV

A research-stage deep-tech website built with Next.js App Router, React, TypeScript and a shared CSS design system. The website follows the supplied `javascript-code.docx` and the explicit user brief. The DOCX is an internal reference, not a public downloadable asset.

## Run locally

Use Node.js 22.14+ (tested with Node 24.19) and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. For the production server:

```sh
npm run build
npm start
```

## Deploy to Vercel and connect your domain

1. Put this project in a private Git repository. Do not include `node_modules`, `.next`, private documents or `.env.local`. The supplied DOCX is deliberately excluded in `.gitignore`.
2. Import the repository into Vercel, choose the Next.js framework preset, and use `npm run build` as the build command. Use a supported Node.js LTS version.
3. Copy `.env.example` to `.env.local` for local settings. In Vercel project settings, set `NEXT_PUBLIC_SITE_URL` to your actual HTTPS production origin (no route, query or fragment). The website domain is intentionally not inferred from team email addresses.
4. Leave `NEXT_PUBLIC_CONTACT_ENDPOINT` empty to retain the email-draft contact flow. If using a service, see the contact contract below.
5. Deploy. Preview builds without a production URL intentionally emit noindex, block robots and provide an empty sitemap. Once the production origin is configured, rebuild to generate canonicals, Open Graph/X image URLs and the complete sitemap.
6. In Vercel **Settings → Domains**, add the purchased domain and any desired `www` alias. At your registrar, apply the exact DNS records Vercel displays. Do not replace unrelated MX/TXT records used by your email service. Select the primary domain and redirect the alias to it.
7. Wait for Vercel to confirm DNS and issue HTTPS. Verify `/robots.txt`, `/sitemap.xml`, canonical links and share images on the final domain. Submit the sitemap to your search-console account if desired.

Official instructions: https://vercel.com/docs/domains/working-with-domains/add-a-domain

This deliverable is prepared for deployment; no hosting account, domain records or public deployment have been modified. Netlify can also host the Next.js application using its supported Next.js runtime. Cloudflare Pages would require a static export configuration; this project is configured for the normal Next.js runtime.

## Pages and architecture

- `/`: exact supplied hero image with requestAnimationFrame scroll fade; problem narrative; conceptual dashboard; methodology; geographic focus; use cases.
- `/technology`: keyboard-accessible data-layer explorer, source links and research constraints.
- `/solutions`: lender, agency, infrastructure and future insurance applications.
- `/about`, `/team`, `/research`, `/contact`, `/privacy`, `/terms`.
- Framework-generated `/sitemap.xml`, `/robots.txt`, custom favicon and 404 page.

`app/` contains server-rendered pages and styles. `components/` holds reusable UI. `data/` holds team, technology, use-case and methodology content. `lib/contact.ts` isolates validation, email encoding and the optional provider adapter. `lib/metadata.ts` centralizes SEO.

Team photographs and the institution logo path are configured in `data/team.ts`. Put future photos in `public/assets/`, then set each `photo` field to its `/assets/...` path. Null photos render deliberate initials placeholders. Names, degrees and profile URLs are the user-provided details; no additional biographies have been invented.

The three team portraits are user-supplied PNGs stored in `public/assets/team/` and mapped by name in `data/team.ts`. Their original colors and composition are preserved. No generated or stock portraits are used.

## Interaction layer

`app/interactions.css` and `components/MotionEnhancements.tsx` provide progressive section reveals, tactile controls, card states and keyboard-visible profile links. IntersectionObserver reveals content once; content stays visible without JavaScript. Team cards use 100/200/300 ms staggered entrances. Conceptual map scans and technology-layer data signals play once on reveal or interaction, without continuous loops.

The supplied hero image has damped cursor depth of at most 3 px horizontally and 2 px vertically, plus a small scroll transform and gradual dimming. Headline and supporting copy stay still. Magnetic button movement has been removed. Pointer effects require a fine pointer and a viewport wider than 800 px; touch layouts use lighter reveals and larger profile controls. Reduced-motion changes are handled live, disabling parallax, cursor effects and movement while preserving content. Animation frames run only for pending input or settling movement and are cleaned up on route changes.

## Contact behavior and provider contract

Default: fields are validated locally, then a mailto draft is offered for review in the visitor's email client. **Nothing is submitted or stored by the form.** A configured email application is needed to open the draft; the direct email links remain available. Long messages may exceed some email clients' URL limits; use direct email or connect a provider for reliable long-form delivery.

Optional provider: set `NEXT_PUBLIC_CONTACT_ENDPOINT` to an HTTPS endpoint that accepts a JSON POST containing `name`, `organization`, `email`, `interest`, `message`. Return a non-2xx status for rejection; return 2xx only after the submission is accepted. The adapter times out after 15 seconds, retains the visitor's text on failure, and only displays an accepted state after a successful response.

This endpoint URL is public configuration, **not a secret**. Put service credentials in the provider's server-side environment. The provider must implement independent validation, length limits, abuse protection/rate limiting, appropriate CORS, safe encoding and any necessary consent/retention controls. Client validation is not a security boundary. Review the privacy notice for the actual provider and retention practices before enabling production submissions. No backend, persistent store, email delivery or tracking service is currently configured.

## Scientific and content boundaries

All dashboard statuses and charts are explicitly illustrative. Regional maps are labelled schematic, not to scale, and do not claim administrative boundaries or measured risks. Forecasts are research objectives. Lenders are the initial beachhead; agencies are second; insurance is a future opportunity.

The document's provisional satellite-release dates, future regulatory claims, funding comparisons and press-reported extraction statistics were not carried into public marketing claims. Specific current statistics should be independently checked against primary sources before addition. The document's financial projections, customer targets and placeholder mentor names remain private.

Primary reference: user-supplied `javascript-code.docx` (8 October 2026 draft). Team/contact details and the approximate 2.5-year research history come from the explicit brief.

Supporting public source links are included in the technology-layer explorer, including NASA/JPL NISAR, ESA Sentinel-1, NASA SWOT/GRACE-FO, Google Earth Engine satellite embeddings, and CGWB. These sources explain the inputs, not prove WeRV's proposed outputs.

## Assets and attribution

- `public/assets/hero.jpg`: exact supplied 736 × 414 JPEG (44,864 bytes). Never substituted or AI-regenerated. The original is already small; the responsive full-bleed treatment preserves its content with cover cropping. Do not upscale the source asset expecting additional detail.
- `public/assets/hero.webp`: optimized derivative of the same asset. `picture` provides JPEG fallback. Dimensions are reserved, the hero is high-priority, and there is no animation library.
- IIT Kharagpur logo: authentic asset from https://www.iitkgp.ac.in/assets/pages/images/logo.png, obtained from the institute's official homepage. Used only to identify the supplied educational affiliations. No endorsement or license ownership is asserted.
- LinkedIn icon: Font Awesome brand icon through `react-icons` (see package licensing).
- DM Sans and Manrope: bundled, self-hosted via Fontsource, with font-display swap. Font licenses ship with their packages.
- Favicon: simple custom WeRV monogram. Diagrams and explicitly illustrative charts are code-native SVG.

## Quality checks

```sh
npm run typecheck
npm test
npm run build
npm run check:routes
npm audit
npm run format:check
```

`check:routes` expects a running server at `http://127.0.0.1:3000`; override with `CHECK_BASE_URL` if necessary. It checks all pages, status codes, headings, unique titles and descriptions, social metadata, local links, images, robots, sitemap and 404 behavior. The contact tests exercise validation, URI encoding, provider rejection and timeout/error propagation using mocks; no external message is sent.

Manual browser QA covers 390px mobile and 1440px desktop, layer selection, navigation, mobile menu/Escape behavior, form error and draft states, logo loading, external-link attributes, scroll opacity and console errors. Reduced-motion CSS disables reveal/orbit animation and the scroll handler disables parallax while retaining scroll-dependent dimming.

No Lighthouse score is claimed. Run Lighthouse against the deployed production URL after domain configuration; results depend on the host, network and device. Review policy text and any future service claims against actual operations before public launch.

The visual refinement in `app/refinements.css` adds softly rounded surfaces, restrained shadows, static contour motifs and gentler reveals. Hover feedback relies mainly on color and depth rather than moving cards.

The homepage now includes custom code-native orbital, subsurface, data-layer and horizon illustrations. Roadmap was removed from navigation, sitemap and public routes; `/roadmap` returns 404. MVP labels were removed from public copy. Conceptual product previews remain clearly labeled.
