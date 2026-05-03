# PRD: Data-Driven Individual Service Pages

## Problem Statement

Service information is currently hardcoded across multiple component files, making it difficult for the clinic owner to update service details, add new services, or ensure consistency across the site. There are no individual service detail pages — users who click a service name from the listing page land on a 404. The homepage services section and the services listing page are also out of sync, each maintaining their own hardcoded data independently.

## Solution

Introduce a single JSON data file as the source of truth for all service data. This file drives three surfaces: the homepage featured services section, the services category listing page, and new individual service detail pages. Adding or editing a service in the future requires only a JSON change — no component code changes needed.

## User Stories

1. As a clinic visitor, I want to click on a service name and land on a dedicated page, so that I can learn more about the treatment before booking.
2. As a clinic visitor, I want to read a clear description of the service, so that I understand what the treatment involves.
3. As a clinic visitor, I want to see before and after images for a service, so that I can gauge the effectiveness of the treatment.
4. As a clinic visitor, I want to read FAQs about a service, so that my common concerns are addressed without needing to call.
5. As a clinic visitor, I want a clear call-to-action on each service page, so that I can easily call or WhatsApp the clinic to book.
6. As a clinic visitor, I want the homepage to show highlighted services, so that I get a quick overview of what the clinic offers.
7. As a clinic visitor, I want the services listing page to show services grouped by category, so that I can browse by treatment type.
8. As a clinic visitor, I want service page URLs to be readable and shareable (e.g. `/services/pimple-treatment`), so that I can share a specific service with someone.
9. As a clinic visitor on mobile, I want the service detail page to be fully responsive, so that I can browse comfortably on my phone.
10. As a clinic visitor, I want service pages without before/after images to still look complete, so that the absence of images doesn't create a broken-looking layout.
11. As the clinic owner, I want to add a new service by editing a single JSON file, so that I don't need a developer for routine content updates.
12. As the clinic owner, I want to add FAQs to any service without touching component code, so that I can keep content fresh independently.
13. As the clinic owner, I want to mark specific services as featured, so that they appear highlighted on the homepage.
14. As the clinic owner, I want to control how many services are featured without code changes, so that the homepage adapts to my current priorities.
15. As the clinic owner, I want category names to be maintained in the JSON, so that renaming a category propagates everywhere automatically.
16. As the clinic owner, I want before/after images to be optional per service, so that I can publish a service page before professional photos are ready.

## Implementation Decisions

### Data Layer

- A single JSON file (`data/services.json`) is the source of truth for all service content.
- The JSON contains two top-level arrays: `categories` and `services`.
- Each **category** has: `id` (slug), `displayName`.
- Each **service** has: `name`, `slug`, `categoryId` (references a category), `description`, `featured` (boolean, optional), `beforeImage` (optional), `afterImage` (optional), `faqs` (array of `{ question, answer }`, optional).
- The JSON is imported directly by Next.js server components at build time — no client-side fetch, no public URL exposure.

### Routing

- Individual service pages are served at `/services/[slug]`.
- The dynamic route uses `generateStaticParams` to pre-render all service pages at build time (static export compatible).
- The services listing page and homepage already exist at `/services` and `/` respectively.

### Modules Modified

1. **Service data file** (`data/services.json`) — new, the single source of truth.
2. **Individual service page** (`app/services/[slug]/page.js`) — new dynamic route; renders hero, description, before/after slider (conditional), FAQs (conditional), and CTA block.
3. **Services listing page** (`app/services/`) — refactored to read category and service data from JSON instead of hardcoded arrays.
4. **Homepage services section** (`components/sections/services-overview.jsx`) — refactored to filter `featured: true` services from JSON and render dynamically.

### Key Behaviours

- Before/after image section is hidden entirely when `beforeImage` or `afterImage` is absent — no placeholder shown.
- FAQs section is hidden when the `faqs` array is empty or absent.
- Featured services on the homepage are all services with `featured: true` — count is flexible, not capped.
- The existing before/after slider component (`react-before-after-slider-component`) is reused on individual service pages.
- CTA block uses the existing environment variables for phone/WhatsApp contact.

## Testing Decisions

Tests are not in scope for this implementation. The data transformation logic (filtering featured services, grouping by category, resolving slugs) is simple enough to verify visually. If tests are added later, they should:

- Test only external behaviour (given this JSON input, does the page render the correct service name, FAQs, and hide the image section when images are absent).
- Not test internal component structure or CSS classes.
- Use the existing Next.js testing setup if one is introduced.

## Out of Scope

- Pricing information — excluded entirely as it changes too frequently.
- A CMS or admin UI for editing service data — JSON editing is sufficient for now.
- Authentication or protected routes.
- Animations or page transitions beyond what already exists in the design system.
- SEO metadata per service page (can be layered on later using Next.js `generateMetadata`).
- The `gopi-clinic/` directory — it is unused and not touched by this work.

## Further Notes

- The existing services in the listing page (Skin Health, Glow & Rejuvenation, Hair & Laser categories with ~20 services) are the starting dataset for the JSON. No services are being added or renamed at this stage.
- The `featured` flag should be set on 4 services initially to match the current homepage layout, but the count is not hardcoded.
- The `slug` field in the JSON should match the slugs already used in the listing page links (kebab-case of the service name) to avoid broken links.
