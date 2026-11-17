# Helvian landing page

Static React + Vite + TypeScript + Tailwind marketing page for Helvian (helvian.net), an AI clinical operations and patient workflow platform. All data is fictional demonstration content. The page makes no claims about clinical diagnosis, EHR integration, patient monitoring, compliance certifications, uptime or live NVIDIA/MONAI features; those technologies are shown only as proposed architectural options. The real application is a separate Laravel project.

## Run

```bash
npm ci
npm run dev        # local dev server
npm run typecheck  # tsc, no emit
npm run build      # production build to dist/
npm run preview    # serve the build
```

## Structure

- `src/App.tsx`: router + layout only. Terms, Privacy and 404 are lazy-loaded routes.
- `src/pages`: HomePage, TermsPage, PrivacyPage, NotFoundPage.
- `src/components/ui`: primitives (Button, ChamferCard, Modal, Drawer, Toast, FormField, Tooltip, ...).
- `src/components/layout`: Navbar, MobileMenu, Footer, Marquee, ScrollToTop, LegalLayout.
- `src/components/sections/*`: one folder per page section (hero, about, platform, workflow, app-preview, technology, governance, pricing, testimonials, faq, contact).
- `src/components/dashboard`: the dashboard mock used in the Application Preview.
- `src/components/forms`: DemoRequestModal, ContactForm, NewsletterForm.
- `src/hooks`: theme, reveal, scroll-spy, focus trap, body-scroll lock, toast, etc.
- `src/styles`: `tokens.css` (design tokens), `globals.css`, one stylesheet per slice.

## Editing content (`src/data`)

All copy lives in `src/data`, one file per area (`hero`, `modules`, `workflow`, `pricing`, `faqs`, `testimonials`, `technology`, `governance`, `contact`, `footer`, `forms`, `site`...). Edit text there, not in JSX. Contact details in `site.ts` are placeholders (see the TODO at the top). Legal page text is in `forms.ts` (`termsDoc`, `privacyDoc`) and is template text that needs legal review.

## Swapping images

Image URLs, sizes and alt text are in `src/data/images.ts`. The About photo and testimonial portraits are currently hotlinked stock photos: download licensed copies into `public/images/`, then point `src` at `/images/<file>`. Keep `width`/`height` so space stays reserved.

## Connecting the Laravel API

Forms call `src/services/api.ts` (`submitDemoRequest`, `submitContact`, `subscribeNewsletter`). Today they wait briefly and store the submission in `localStorage`. Replace each body with a `fetch` to your endpoints and keep the signatures. The honeypot field (`website`) is already dropped silently there; enforce the same server-side. Validation schemas are in `src/utils/validators.ts`.

## Design tokens

Defined in `src/styles/tokens.css`; components use tokens, never hard-coded hex. Dark is the default theme and is applied before first paint by a small script in `index.html`; the choice is saved only when the user toggles it.

| Token | Dark | Light |
| --- | --- | --- |
| bg | #12161C | #FAFAF7 |
| surface | #1E2430 | #FFFFFF |
| border | #3D474E | #E4E4DE |
| text | #FFFFFF | #12161C |
| accent | #FFD000 | #FFD000 |

Also: `bg-deep` #192230, `surface-2` #2C2F38, `accent-ink` #12161C. Fonts: Syne 800 (headings), Inter (body).

## Notes

- Not yet verified in a browser: run `npm run typecheck`, `npm run build`, then check 360/390/768/1024/1280/1440/1920px in both themes.
