# Eagerz — Minecraft commissions portfolio

A five-view, responsive portfolio for Minecraft development commissions, built with React 19, TypeScript and Vite 7. The public site uses hash navigation (#/home, #/projects, #/services, #/about, #/contact) so it can work on static hosting without server-side route rewrites.

## Pages

- **Home:** developer introduction, selected projects and commission call-to-action
- **Projects:** six documented Minecraft/Discord projects with category filters and source links where public
- **Services:** Java/Paper plugins, Skript, Discord bots and supporting server/web systems
- **About:** skills, documented project experience and *clearly labeled fictional* testimonial design examples
- **Contact:** generates a commission brief to copy into Discord (no data is submitted or stored)

## Local development

Use Node.js 22 or a compatible supported Node.js version.

~~~bash
npm ci
npm run dev
~~~

The dev server will print a local URL. The production build and strict TypeScript check are:

~~~bash
npx tsc --noEmit
npm run build
~~~

The build outputs a static dist/ directory. The Vite config includes vite-plugin-singlefile, so deployment behavior should be checked for the chosen host before launch.

## Automated verification

The **Portfolio verification** GitHub Actions workflow runs on pull requests and does **not** publish or deploy the site. It checks:

1. Dependency installation with npm ci
2. TypeScript compilation with npx tsc --noEmit
3. Static production build with npm run build
4. Chromium browser smoke tests for all five routes at 1440px and 390px
5. Project filters, mobile navigation, contact clipboard behavior and horizontal overflow

The workflow attaches responsive screenshots as an Actions artifact.

To run browser checks locally:

~~~bash
npm install --no-save playwright@1.56.1
npx playwright install chromium
node scripts/smoke.mjs
~~~

## Pre-publication checklist

- [ ] Review every project description and confirm screenshot use is authorized.
- [ ] Check that the Discord invitation, BuiltByBit profile and GitHub project links work.
- [ ] Replace fictional sample quotes with **real, permission-approved testimonials** before presenting any as client feedback. The existing examples are clearly labeled fictional and hidden behind a disclosure.
- [ ] Confirm availability, pricing terms and what support is included in commissions.
- [ ] Review responsive screenshots and manually test on at least one phone.
- [ ] Confirm hosting, domain, HTTPS, and the deployment workflow; **no deployment is configured by this pull request**.
- [ ] Obtain approval before merging the draft PR or publishing.

## Publishing policy

**Do not publish automatically.** The work is isolated to the portfolio-five-page-2026 branch until explicitly approved. The verification workflow is for testing only and has no deployment step.
