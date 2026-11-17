# Mubarak Ibrahim | AI/ML Engineering Portfolio

Personal portfolio website for **Mubarak Ibrahim**, Senior AI/ML Engineer based in Lagos, Nigeria.

**Live site:** https://hellomuba.github.io/

This website presents selected production engineering work, public open-source experiments, and technical writing. It is not a mirror of proprietary employer or client repositories.

## Selected engineering work

- **Spidify:** Identity and compliance workflows, document intelligence, face verification, signed webhooks, and tenant-aware integrations. [Case study](https://hellomuba.github.io/projects/spidify.html)
- **AIRA:** AI-assisted recruitment, candidate search, structured evaluation, and hiring integrations. [Case study](https://hellomuba.github.io/projects/aira.html)
- **Diogenes the Dog:** Lead discovery, qualification, outreach, and CRM automation. [Case study](https://hellomuba.github.io/projects/diogenes.html)
- **Find Your Fit:** Production Shopify sizing guidance and configurable recommendation rules. [Case study](https://hellomuba.github.io/projects/find-your-fit.html)

## Open source

**[OpenTrust AI](https://github.com/hellomuba/opentrust-ai)** is a separate, early-stage project exploring reproducible security tests for autonomous agents. **Status: pre-prototype.** Design documents are public, but the runnable testing toolkit is not yet implemented.

## Engineering notes

The [writing section](https://hellomuba.github.io/blog/) covers AI agent security, reliable webhooks, and RAG evaluation. Articles focus on design patterns and public, synthetic examples.

## Technology and deployment

This site uses semantic HTML, CSS, and a small amount of vanilla JavaScript, deployed through GitHub Pages. There is no production backend or secret-bearing API integration in the portfolio.

### Local preview

```bash
python3 -m http.server 8000
# Open http://localhost:8000/
```

The home page includes accessible project filters, reduced-motion support, responsive layout, and lazy-loaded video demos that open in dialogs when requested.

## Editing

- `index.html`: home page and selected projects
- `style.css`: global styles, responsive layout, visual components
- `script.js`: project filters, modal demo playback, motion and navigation
- `projects/`: standalone engineering case studies and interactive architecture walkthroughs
- `blog/`: engineering notes and client-side search
- `assets/*-architecture.svg`: illustrative workflow diagrams, clearly labeled as conceptual
- `assets/architecture.js`: case-study walkthrough interaction
- `labs/agent-security.html`: scripted, fully synthetic browser-only access-control design lab (not an executable agent or security test)
- `assets/portfolio-guide.js`: curated recruiter Q&A with fixed, public-only answers

## Content boundaries

Do not publish employer or client code, API keys, production logs, personal data, private diagrams, or unverified outcomes. Product case studies describe my contribution without exposing source code. Any reproductions should use synthetic datasets and independently owned code.

## Contact

- [LinkedIn](https://linkedin.com/in/mubarak-ibrahim1)
- [GitHub](https://github.com/hellomuba)
- [Email](mailto:mubastudio@gmail.com)
