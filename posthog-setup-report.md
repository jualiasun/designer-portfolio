# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Yuliia Olomska portfolio site. The integration uses the PostHog web snippet via a reusable `posthog.astro` component included in the shared `Layout.astro`, ensuring every page is covered automatically. Six meaningful client-side events were instrumented across four components and pages, targeting key engagement and conversion moments — from project discovery on the home page through to social and Behance outreach.

## Environment variables

| Variable | File |
|---|---|
| `PUBLIC_POSTHOG_PROJECT_TOKEN` | `.env` |
| `PUBLIC_POSTHOG_HOST` | `.env` |

## Files created or modified

| File | Change |
|---|---|
| `src/components/posthog.astro` | Created — PostHog web snippet component with `is:inline` |
| `src/layouts/Layout.astro` | Modified — imports and renders `<PostHog />` in `<head>` |
| `src/components/ProjectCard.astro` | Modified — added `project_card_clicked` event |
| `src/pages/[slug].astro` | Modified — added `project_viewed`, `protected_project_access_attempted`, `protected_project_access_granted` events |
| `src/components/BehanceBanner.astro` | Modified — added `behance_banner_clicked` event |
| `src/components/footer/FooterLink.astro` | Modified — added `social_link_clicked` event |

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `project_card_clicked` | Fired when a visitor clicks a project card on the home page | `src/components/ProjectCard.astro` |
| `project_viewed` | Fired when a visitor lands on a project detail page — top of the project engagement funnel | `src/pages/[slug].astro` |
| `protected_project_access_attempted` | Fired when a visitor attempts to access a password-protected project | `src/pages/[slug].astro` |
| `protected_project_access_granted` | Fired when a visitor successfully enters the correct password for a protected project | `src/pages/[slug].astro` |
| `behance_banner_clicked` | Fired when a visitor clicks the 'View Work' CTA on the Behance banner | `src/components/BehanceBanner.astro` |
| `social_link_clicked` | Fired when a visitor clicks a social/contact link in the footer (LinkedIn, Email, Instagram) | `src/components/footer/FooterLink.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/170447/dashboard/655406
- **Project views over time**: https://eu.posthog.com/project/170447/insights/DJkORMx6
- **Most clicked projects**: https://eu.posthog.com/project/170447/insights/dZny7Cem
- **Social link clicks by channel**: https://eu.posthog.com/project/170447/insights/L2FUXmBE
- **Behance banner clicks over time**: https://eu.posthog.com/project/170447/insights/yzCisiTy
- **Project engagement funnel**: https://eu.posthog.com/project/170447/insights/KiSOHHaW

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
