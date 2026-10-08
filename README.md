# WeRV

**Satellite Intelligence for Groundwater & Subsidence Risk**

WeRV converts satellite and geospatial data into forward-looking intelligence about groundwater stress, land subsidence, and aquifer risk. We help financial institutions, regulators, and infrastructure stakeholders make better long-term decisions regarding land and water resources.

## Deployment

This website is built with Next.js App Router, React, and TypeScript. It is designed to be deployed on **Cloudflare Pages** using the custom domain WeRV has purchased.

### Local Development

To run the WeRV website locally:

Use Node.js 22.14+ and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000 to view the site. 

### Cloudflare Pages Deployment

To deploy this Next.js application on Cloudflare Pages:

1. Ensure your Cloudflare account is set up and your domain's DNS is managed by Cloudflare.
2. Connect your GitHub repository to Cloudflare Pages.
3. Set the framework preset to Next.js.
4. Set the build command to `npx @cloudflare/next-on-pages` (or standard `npm run build` if using Static Export, but WeRV is configured for SSR/hybrid using Next.js).
5. Set the build output directory to `.vercel/output/static`.
6. Set the `NODE_VERSION` environment variable to `20` or `22`.
7. Deploy the project.
8. Go to the project's **Custom Domains** settings in Cloudflare Pages and attach your purchased domain. Cloudflare will automatically configure the DNS records and provision an SSL certificate.

*Note: You may need to install `@cloudflare/next-on-pages` as a dev dependency if it isn't already.*

### Environment Variables

Copy `.env.example` to `.env.local` for local development.

For production, configure your environment variables in the Cloudflare Pages dashboard:
- `NEXT_PUBLIC_SITE_URL`: Set to your production HTTPS origin (e.g., `https://werv.cloud`).
- `NEXT_PUBLIC_CONTACT_ENDPOINT`: (Optional) Set to your contact form submission handler endpoint. If left empty, the contact form defaults to a `mailto:` draft.

## Architecture

- **`app/`**: Server-rendered pages, routes, and global styles.
- **`components/`**: Reusable UI components (Hero, Maps, Forms, etc.).
- **`data/`**: Configuration and content data for team members, technology layers, and use cases.
- **`lib/`**: Utilities for metadata, SEO, and contact form handling.
- **`public/`**: Static assets, including official imagery, icons, and fonts.

## Quality & Checks

Ensure code quality before committing:

```sh
npm run typecheck
npm run format:check
npm run check:routes
```

## Scientific & Content Boundaries

All dashboard statuses, alerts, and charts visualized on the website are currently **illustrative**. They represent the conceptual product interface and the intelligence pipeline WeRV is building, rather than real-time API measurements.

## License & Copyright

© 2026 WeRV. All rights reserved.
