# kevincamargo.com — Contenido + SEO (v2, oct 2026)

## Instrucciones para Claude Code

Actualiza el contenido del sitio con este documento. Reglas:

1. **Solo cambia texto y metadata.** No toques el diseño, los componentes ni las animaciones.
2. Cada sección indica el archivo donde vive. Si un archivo no existe con ese nombre, búscalo por el contenido actual.
3. **Elimina todas las menciones a Vocabularia** (hero, about, projects, case study, ⌘K, sitemap). Si existe la ruta `/projects/vocabularia`, bórrala y agrega un redirect 301 a `/projects`.
4. **Quita "RAG"** del marquee, del stack y del About. Todavía no hay un proyecto que lo respalde.
5. Usa **7+ years** en todo el sitio, nunca "6+".
6. Implementa todo lo de la sección **SEO técnico** (metadata, JSON-LD, sitemap, robots, OG por página).
7. Los textos marcados con `[TODO]` son datos que faltan. No inventes nada: deja el bloque oculto si está vacío.
8. Al terminar, corre `npm run build` y lista las rutas generadas.

---

## 0. SEO global — `lib/seo.tsx` / `app/layout.tsx`

**Keywords objetivo** (no uses meta keywords, solo para guiar el copy):
- Primaria: `full stack developer python fastapi react`
- Secundarias: `full stack engineer next.js`, `remote full stack developer peru`, `freelance full stack developer latam`, `ai engineer llm integration`, `react next.js developer remote`

**Metadata del home:**
- `title`: `Kevin Camargo — Full Stack Engineer | Python, FastAPI, React, Next.js`
- `description` (155 car. máx.): `Full Stack Engineer with 7+ years building web products end to end. Python, FastAPI, React, Next.js and LLM integration. Based in Peru, working remotely.`
- `metadataBase`: `https://kevincamargo.com`
- `alternates.canonical`: `/`
- `authors`: `[{ name: "Kevin Camargo", url: "https://kevincamargo.com" }]`
- `creator`: `Kevin Camargo`
- `robots`: index, follow
- `openGraph`: type `profile`, locale `en_US`, siteName `Kevin Camargo`, firstName `Kevin`, lastName `Camargo`, image `/og.png` (1200×630)
- `twitter`: card `summary_large_image`

**Template de título para subpáginas:** `%s — Kevin Camargo`

**OG image (texto):**
```
FULL STACK ENGINEER
Kevin Camargo
> python · fastapi · react · next.js · llms
Remote · Lima, Peru (UTC-5) · kevincamargo.com
```

---

## 1. Header — `components/layout/Header.tsx`, `content/profile.ts`

- Logo: `kevin.camargo`
- Links: About · Experience · Projects · Stack · Contact
- Botón: Resume
- Atajo: ⌘K

---

## 2. Hero — `content/profile.ts`

- Etiqueta: `Full Stack Engineer`
- **H1** (es el único H1 de la página): `Kevin Camargo`
- Subtítulo visible bajo el H1 (debe ser texto real en el HTML, no solo la animación): `Full Stack Engineer · Python, FastAPI, React & Next.js`
- Línea typing: `> building products with python, fastapi, react & llms_`
- Intro:
  > I build web products end to end, from the API to the interface. 7+ years shipping software, 4+ of them at Globant for enterprise clients in media, retail and healthcare. Today I focus on Python backends, React frontends and bringing LLMs into real products.
- Botones: `View projects` · `Get in touch`
- Estado: `Open to conversations · Remote · Lima, Peru (UTC-5)`
- Links: LinkedIn ↗ · Email ↗ — **oculta el link de GitHub** hasta que haya URL.

---

## 3. Marquee — `content/profile.ts` (marqueeItems)

`Python ✶ FastAPI ✶ React ✶ Next.js ✶ TypeScript ✶ Node.js ✶ LLMs ✶ AI agents ✶ Supabase ✶ Playwright`

---

## 4. About — `content/profile.ts` (aboutTitle, about, stats)

- **H2**: `Code the next developer is glad to inherit.`

**Párrafo 1:**
> For the last 4+ years at Globant, I've built large-scale platforms for enterprise clients in media, retail and healthcare: designing REST APIs with Node.js and SQL, building scalable frontends with React and Next.js, and shipping features with distributed teams across time zones.

**Párrafo 2:**
> I care about clean architecture, clear specs and code the next developer will be glad to inherit. The work I'm proudest of: introducing automated testing into a microfrontend architecture, with unit tests in Jest and end-to-end tests in Playwright. Production bugs dropped by 95% and releases became predictable.

**Párrafo 3:**
> My workflow is AI-native: I work with Claude Code and Codex on top of Spec-Driven Development, writing the spec first and letting the tools accelerate the build. Lately I've been running local LLMs and self-hosting AI agents, learning how to turn them into features people actually use.

**Párrafo 4:**
> Outside my day job I co-founded Waliky TI, a software studio, and I build products for local businesses in Peru, like a patient records app for dental clinics. I've also mentored women starting in software through Chicas Programadoras.

**Stats:**

| Número | Texto |
|---|---|
| 7+ | years building for the web |
| 95% | fewer production bugs after adding Jest + Playwright |
| 15+ | countries reached by products I've built |

---

## 5. Experience — `content/experience.ts`

- **H2**: `Where I've worked`

### Full Stack Engineer · Globant
`Dec 2021 — Present · Remote, Peru`
- Build large-scale platforms for enterprise clients in media, retail and healthcare.
- Introduced automated testing into a microfrontend architecture (Module Federation): Jest unit tests and Playwright E2E tests, reducing production bugs by 95%.
- **The Skimm (media):** built features on a Next.js platform backed by relational databases.
- **Salcobrand (retail):** delivered full stack features with React, backend services and SQL.
- Built Node.js REST APIs and set up repositories and tooling for new microfrontends.
- Applied Spec-Driven Development and AI-assisted coding (Claude Code, Codex) in agile, distributed teams.

Tags: `React · Next.js · TypeScript · Node.js · SQL · Module Federation · Jest · Playwright · Azure`

### Frontend Developer · ID4 @IoT
`Jun 2021 — Aug 2021 · Fintech`
- Improved application performance by 25% through coding best practices and migrating assets to Firebase.
- Built client query features used daily by 100+ customers through the company API.
- Cut development time by 30% with reusable components and templates.

Tags: `Vue.js · Nuxt.js · Vuex · React · Firebase`

### Full Stack Developer · Dau Holding Group
`Jan 2021 — May 2021 · Events`
- Built a virtual congress platform for an international event: 300+ attendees, 50+ speakers, 3 rooms, 15+ countries.
- Developed real-time chat between attendees and speakers, plus an admin dashboard that made attendee management 70% more efficient.
- Built a mobile-first frontend and landing pages for each sponsor.

Tags: `Laravel · PHP · Vue.js · MySQL · WebSockets · Tailwind CSS · Nginx`

### Co-founder & Full Stack Developer · Waliky TI
`Feb 2019 — Dec 2020`
- Co-founded a software studio building digital products for public and private organizations.
- Built a custom edTech platform used daily by 50+ students (courses, exams, certificates).
- Reduced website load times by 70% through performance optimization.

Tags: `Laravel · React · Vue.js · MySQL · WordPress · Google Maps API`

**Education:** Systems Engineering — Universidad Nacional del Altiplano, Peru

---

## 6. Projects — `content/projects.ts`

- **H2**: `Selected work`
- Cada card debe enlazar a su case study con `<Link>` y un texto descriptivo. Por ejemplo: `Read the Goldent case study →`, nunca solo "Read more".

### 01 · Featured — Goldent
- slug: `goldent`
- One-liner: `A patient records app that takes a dental clinic from paper files to a searchable, tablet-first system.`
- Tags: `Next.js · TypeScript · Supabase · PostgreSQL · PWA`
- Links: `Case study →` · `[TODO] Live demo ↗` (solo si existe un demo público)
- Imagen: `[TODO] screenshot 1600×1000`
- alt: `Goldent patient search screen on a tablet`

### 02 — Candelaria Central
- slug: `candelaria-central`
- One-liner: `An SEO-first website for a traditional dance group from Puno, Peru.`
- Tags: `Next.js · React · Tailwind CSS · SEO`
- Links: `Live ↗` (https://candelariacentral.com) · `Case study →`
- alt: `Candelaria Central homepage`

### 03 — Virtual Congress Platform
- slug: `virtual-congress`
- One-liner: `A live event platform with real-time chat for an international congress across 15+ countries.`
- Tags: `Laravel · Vue.js · MySQL · WebSockets`
- Links: `Case study →`

### 04 · Lab — Self-hosted AI agents
- slug: `self-hosted-ai-agents`
- One-liner: `Running local LLMs with Ollama and self-hosting autonomous AI agents on a VPS.`
- Tags: `Ollama · LLMs · AI agents · VPS · Supabase`
- Links: `Case study →`

---

## 7. Case studies — `content/projects.ts` (campo `caseStudy`) + `app/projects/[slug]/page.tsx`

**Requisitos SEO por página:**
- `generateMetadata` con el title y la description de cada caso (abajo), canonical `/projects/[slug]` y OG propio.
- Un solo H1 (el título). Los bloques usan H2: Context, Problem, What I built, Stack, Results.
- JSON-LD `CreativeWork` con `author` apuntando a `#person` (ver la sección SEO técnico).
- Breadcrumb visible (`Home / Projects / [title]`) + JSON-LD `BreadcrumbList`.
- Al final: `← All projects` y un CTA a `/#contact`: `Building something similar? Let's talk →`

### Goldent
- **title**: `Goldent — Patient Records App for Dental Clinics`
- **description**: `How I built a tablet-first patient records app with Next.js and Supabase to move a dental clinic in Puno, Peru from paper files to a searchable system.`
- **Context:** A dental clinic in Puno, Peru, run by a single dentist with around 100 patients. Every record lived on paper: finding a patient's history meant digging through folders during the appointment.
- **Problem:** The dentist needed to find any patient in seconds, see past visits and treatments, and contact patients quickly. The system had to work on a tablet in the chair and let her digitize old paper records without slowing down her day.
- **What I built:**
  - Patient search by name, national ID or phone, as the app's home screen.
  - Patient file with visits and treatments, plus one-tap WhatsApp or phone contact.
  - A quick-capture flow to digitize old paper records on a tablet.
  - Installable PWA, auth and a 12-table PostgreSQL schema on Supabase, deployed on Vercel.
  - Built with Spec-Driven Development: specs first, then implementation with AI-assisted coding.
- **Stack:** Next.js, TypeScript, Supabase (Auth, Postgres, Storage), PWA, Vercel
- **Results:** The MVP is live and in use. Several other dental clinics are now testing it, and it is evolving into a multi-clinic product. `[TODO: add numbers when you have them — records digitized, time to find a patient, clinics onboarded]`

### Candelaria Central
- **title**: `Candelaria Central — SEO Website for a Puno Dance Group`
- **description**: `A fast, SEO-first Next.js website for a traditional dance group from Puno, Peru, built to be found by festival audiences.`
- **Context:** A traditional dance group from Puno, Peru, that takes part in the Candelaria festival, one of the largest cultural celebrations in South America.
- **Problem:** The group had no website of its own. People searching for it found scattered social posts and nothing that told its story or showed its work.
- **What I built:** A fast, mobile-first website with the group's history, a photo gallery and contact options, structured for search engines from day one.
- **Stack:** Next.js, React, Tailwind CSS, SEO
- **Results:** `[TODO: Lighthouse scores, search positions or traffic]` — si no hay datos, oculta este bloque.

### Virtual Congress Platform
- **title**: `Virtual Congress Platform — Real-Time Event App`
- **description**: `A live virtual congress platform with real-time chat for 300+ attendees and 50+ speakers across 15+ countries, built with Laravel and Vue.js.`
- **Context:** An international academic congress in 2021 that had to move fully online.
- **Problem:** Hundreds of attendees across many countries needed to follow three parallel rooms, interact with speakers live, and register without friction. The organizers needed to manage all of it themselves.
- **What I built:**
  - A congress platform with three live rooms and a mobile-first frontend.
  - Real-time chat between attendees and speakers over WebSockets.
  - An admin dashboard for attendee management.
  - A landing page for each sponsor.
- **Stack:** Laravel, PHP, Vue.js, MySQL, WebSockets, Tailwind CSS, Nginx
- **Results:** 300+ attendees, 50+ speakers and 15+ countries over 3 days. Attendee management became 70% more efficient.

### Self-hosted AI agents
- **title**: `Self-Hosted AI Agents with Ollama on a VPS`
- **description**: `Notes from running local LLMs with Ollama and self-hosting autonomous AI agents on a VPS with Supabase as storage.`
- **Context:** A personal lab to understand how LLMs and agents behave outside of a hosted API.
- **What I built:** Local LLMs running with Ollama, plus autonomous AI agents (OpenClaw, Hermes) deployed on a VPS, using Supabase for persistent storage.
- **Stack:** Ollama, LLMs, AI agents, Linux VPS, Supabase
- **Next:** `[TODO]` Oculta este bloque hasta tener el próximo paso definido.

---

## 8. Stack — `content/stack.ts`

- **H2**: `Tools I work with`
- **Backend:** Python, FastAPI, Node.js, REST APIs, PostgreSQL, SQL, Supabase
- **Frontend:** React, Next.js, TypeScript, JavaScript, Tailwind CSS, Microfrontends (Module Federation)
- **AI:** LLM integration, Ollama, AI agents, Prompt engineering, Claude Code, Codex, Spec-Driven Development
- **Testing:** Jest, Playwright, Unit testing, E2E testing
- **Cloud & DevOps:** Azure, Docker, Vercel, Linux VPS, Git, CI/CD

---

## 9. Contact — `components/sections/Contact.tsx`

- **H2**: `Let's build something.`
- Texto:
  > I'm happy where I am, but always open to a good conversation, especially about AI-driven products, remote international teams or freelance projects.
- Email: `hola@kevincamargo.com` · botón `Copy email` → `Copied ✓`
- Links: LinkedIn ↗ · Download CV ↓ — **oculta GitHub** hasta que haya URL.

---

## 10. Footer — `components/layout/Footer.tsx`

`© 2026 Kevin Camargo · Full Stack Engineer in Peru · // designed & built with Next.js · Tailwind · Vercel · Back to top ↑`

---

## 11. Menú ⌘K — `components/command/CommandMenu.tsx`

- Placeholder: `Type a command or search…`
- Sin resultados: `No results.`
- Grupo "Go to": About · Experience · Projects · Stack · Contact · Resume
- Grupo "Projects": Goldent · Candelaria Central · Virtual Congress · Self-hosted AI agents
- Grupo "Actions": Copy email · Open LinkedIn · Download CV

---

## 12. Resume — `app/resume/page.tsx`

- **title**: `Resume`
- **description**: `Resume of Kevin Camargo, Full Stack Engineer: 7+ years building web products, 4+ at Globant. Python, FastAPI, React, Next.js, TypeScript, testing and LLMs.`
- Encabezado: `Kevin Camargo · Full Stack Engineer · Python · FastAPI · React · Next.js · Lima, Peru (UTC-5) · Remote · hola@kevincamargo.com · linkedin.com/in/kevocam`
- Botón: `Download PDF` → `/kevin-camargo-cv.pdf`. Usa ese nombre de archivo, porque el nombre del PDF también cuenta para SEO.
- Secciones: ABOUT · EXPERIENCE · PROJECTS · STACK · EDUCATION

---

## 13. 404 — `app/not-found.tsx`

- Etiqueta: `ERROR 404`
- H1: `This page fell apart.`
- Texto: `The link is broken or the page moved. The rest of the site is still in one piece.`
- Botones: `Back home` · `Contact`
- Link: `or read the resume →`
- Metadata: `robots: { index: false }`

---

## 14. Accesibilidad

- `Skip to content`
- Retrato: `Cubist-style portrait of Kevin Camargo that assembles as you scroll`
- Botón ⌘K: `Open command menu`
- Toda imagen de proyecto debe tener un `alt` descriptivo (están en la sección 6).

---

## SEO técnico (implementar)

### JSON-LD en `app/layout.tsx`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://kevincamargo.com/#person",
      "name": "Kevin Camargo",
      "alternateName": "Albert Kevin Camargo Barreda",
      "jobTitle": "Full Stack Engineer",
      "url": "https://kevincamargo.com",
      "email": "mailto:hola@kevincamargo.com",
      "image": "https://kevincamargo.com/og.png",
      "address": { "@type": "PostalAddress", "addressLocality": "Lima", "addressCountry": "PE" },
      "worksFor": { "@type": "Organization", "name": "Globant", "url": "https://www.globant.com" },
      "alumniOf": { "@type": "CollegeOrUniversity", "name": "Universidad Nacional del Altiplano" },
      "knowsAbout": ["Python", "FastAPI", "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "LLM integration", "AI agents", "Playwright", "Jest", "Microfrontends"],
      "knowsLanguage": ["es", "en"],
      "sameAs": ["https://www.linkedin.com/in/kevocam"]
    },
    {
      "@type": "WebSite",
      "@id": "https://kevincamargo.com/#website",
      "url": "https://kevincamargo.com",
      "name": "Kevin Camargo",
      "inLanguage": "en",
      "publisher": { "@id": "https://kevincamargo.com/#person" }
    }
  ]
}
```

En `/resume` agrega `ProfilePage` con `mainEntity: { "@id": "https://kevincamargo.com/#person" }`.

### `app/sitemap.ts`

Rutas: `/`, `/resume`, `/projects/goldent`, `/projects/candelaria-central`, `/projects/virtual-congress`, `/projects/self-hosted-ai-agents`. Genera las de proyectos desde `content/projects.ts`.

### `app/robots.ts`

Allow all + `sitemap: https://kevincamargo.com/sitemap.xml`

### OG por página

Usa `app/projects/[slug]/opengraph-image.tsx` con el título del proyecto y sus tags, siguiendo el mismo estilo que la OG del home.

### Checklist final

- [ ] Un solo H1 por página y jerarquía H2/H3 correcta
- [ ] Ninguna mención a Vocabularia ni a "RAG"; "7+ years" en todo el sitio
- [ ] Canonical en cada página
- [ ] `lang="en"` en `<html>`
- [ ] Imágenes con `next/image`, `alt` y tamaños definidos
- [ ] El texto del hero existe en el HTML aunque haya animación
- [ ] Lighthouse SEO = 100 y Performance ≥ 90 en mobile
- [ ] Validar el JSON-LD en https://validator.schema.org
