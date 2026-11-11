# Deploying to Cloudflare Pages

This site deploys to **Cloudflare Pages** (global CDN + free SSL + security
headers). Deploys are **Git-connected**: every push to the production branch
triggers an automatic build and release.

- **Source repo:** `lines-designs` → https://github.com/prajwalrvnaruto-arch/lines-designs
- **Account email:** prajwalrvnaruto@gmail.com
- **Framework:** Vite + React SPA

---

## One-time setup (Cloudflare dashboard)

Do this once. It needs your logged-in Cloudflare account, so it can't be
automated from here.

1. Push this branch to the `lines-designs` GitHub repo (see "Pushing changes"
   below) so Cloudflare can see the latest code, including `_headers`,
   `_redirects` and `wrangler.toml`.

2. Go to **https://dash.cloudflare.com** → log in as `prajwalrvnaruto@gmail.com`.

3. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.

4. Authorize GitHub and pick the **`lines-designs`** repository.

5. Set the build configuration:

   | Setting                | Value           |
   | ---------------------- | --------------- |
   | Production branch      | `main`          |
   | Framework preset       | `Vite`          |
   | Build command          | `npm run build` |
   | Build output directory | `dist`          |
   | Node version           | `20` (or newer) |

   > If you want `develop` deployed instead of `main`, set that as the
   > production branch. Every other branch gets a preview URL automatically.

6. Click **Save and Deploy**. First build takes ~1–2 minutes. You'll get a
   `https://lines-and-designs.pages.dev` URL.

---

## Security — already configured in code

`public/_headers` ships these on every response (verify after first deploy with
`curl -I https://<your-domain>`):

- **HSTS** — `max-age=63072000; includeSubDomains; preload` (forces HTTPS)
- **Content-Security-Policy** — allowlists only self + Google Fonts + the
  Web3Forms contact API; blocks all other script/connect/frame sources
- **X-Frame-Options: DENY** + `frame-ancestors 'none'` (anti-clickjacking)
- **X-Content-Type-Options: nosniff**
- **Referrer-Policy: strict-origin-when-cross-origin**
- **Permissions-Policy** — disables geolocation, mic, camera, payment, USB

### Recommended dashboard toggles (not controllable from code)

In the Cloudflare dashboard for this zone/project:

- **SSL/TLS → Overview:** set encryption mode to **Full (strict)**.
- **SSL/TLS → Edge Certificates:** enable **Always Use HTTPS** and
  **Automatic HTTPS Rewrites**.
- **Security → Settings:** enable **Bot Fight Mode** (free tier) to block
  basic automated abuse.
- **Speed → Optimization:** enable **Brotli** compression and **Early Hints**.

> If you add a custom domain later, re-run the CSP check — any new third-party
> embed (analytics, maps, chat widget) must be added to the relevant
> `*-src` directive in `public/_headers` or it will be blocked.

---

## CDN / performance — already handled

- Static assets are served from Cloudflare's global edge network automatically.
- `public/_headers` sets caching:
  - Fingerprinted JS/CSS (`/assets/*`): cached 1 year, `immutable`.
  - Images (stable names): cached 1 day + `stale-while-revalidate` so updated
    photos appear quickly without a full cache purge.
  - HTML: `must-revalidate` so new deploys are picked up immediately.
- Images are already WebP-optimized.

---

## Pushing changes

The production branch is what Cloudflare builds. To ship:

```sh
# from develop, open a PR into main, or if deploying develop directly:
git push lines-designs <branch>
```

Cloudflare auto-builds on push. Watch progress in
**Workers & Pages → lines-and-designs → Deployments**.

---

## Optional: deploy from the CLI instead of Git

If you ever need a manual one-off deploy without pushing to Git:

```sh
npm run build
npx wrangler login          # opens browser; log in as prajwalrvnaruto@gmail.com
npx wrangler pages deploy dist --project-name lines-and-designs
```
