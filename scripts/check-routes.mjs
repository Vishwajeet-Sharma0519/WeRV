import assert from 'node:assert/strict';
const base = process.env.CHECK_BASE_URL || 'http://127.0.0.1:3000';
const routes = [
  '/',
  '/technology',
  '/solutions',
  '/about',
  '/team',
  '/contact',
  '/research',
  '/privacy',
  '/terms',
];
const titles = new Set();
const descriptions = new Set();
const localLinks = new Set();
for (const route of routes) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200, route);
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(title && description, `${route}: title/description`);
  assert.ok(!titles.has(title), `${route}: duplicate title`);
  titles.add(title);
  assert.ok(!descriptions.has(description), `${route}: duplicate description`);
  descriptions.add(description);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: one H1`);
  assert.ok(
    html.includes('property="og:title"') && html.includes('name="twitter:card"'),
    `${route}: social metadata`,
  );
  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g))
    if (href.startsWith('/')) localLinks.add(href.split(/[?#]/)[0]);
  console.log(`PASS ${route}: ${title}`);
}
for (const path of localLinks)
  assert.equal((await fetch(new URL(path, base))).status, 200, `Link ${path}`);
for (const path of [
  '/assets/hero.jpg',
  '/assets/hero.webp',
  '/assets/iit-kharagpur.png',
  '/favicon.svg',
  '/robots.txt',
  '/sitemap.xml',
])
  assert.equal((await fetch(new URL(path, base))).status, 200, path);
assert.equal((await fetch(new URL('/not-a-werv-page', base))).status, 404, 'Unknown route');
console.log(
  `All ${routes.length} pages, ${localLinks.size} unique internal links, assets, metadata routes and 404 passed.`,
);
