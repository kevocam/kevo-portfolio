import { experience } from '@/content/experience';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import { stack } from '@/content/stack';

// Profile, stack, experience and projects come from src/content (single source of truth).
// Only the highlights, FAQ and freelance blocks are written here by hand.
// Highlights synced with CV + LinkedIn (Nov 2026).

const plainAbout = profile.about.map((p) => p.map((part) => (typeof part === 'string' ? part : part.strong)).join(''));

const experienceLines = experience
  .map((j) => `- ${j.company} / ${j.role} (${j.period}${j.meta ? `, ${j.meta}` : ''}): ${j.bullets.join(' ')}`)
  .join('\n');

const stackLines = stack.map((g) => `${g.group}: ${g.items.join(', ')}`).join('\n');

const projectLines = projects
  .filter((p) => !p.inProgress)
  .map((p) => `- ${p.title}: ${p.oneLiner}${p.caseStudy?.results ? ` ${p.caseStudy.results}` : ''}`)
  .join('\n');

// Conocimiento de Kevin. Las reglas de comportamiento y seguridad viven en src/ai/skill.ts.
export const KEVIN_CONTEXT = `
## CONOCIMIENTO SOBRE KEVIN

## QUIÉN ES KEVIN
Nombre completo: ${profile.legalName}
Rol: ${profile.role}
Ubicación: ${profile.location.city}, ${profile.location.country} (${profile.location.timezone}, trabajo remoto)
Estado: ${profile.status}
Email público: ${profile.email}
LinkedIn: ${profile.links.linkedin}
Educación: ${profile.education.degree}, ${profile.education.school}
Idiomas: Español (nativo), Inglés (B2)
Experiencia: 7+ años como desarrollador (desde 2019)

${plainAbout.join('\n\n')}

---

## RESUMEN PROFESIONAL (CV / LinkedIn)
Kevin crea soluciones tecnológicas que agilizan procesos y productos que la gente disfruta usar.
Le apasiona crear productos desde cero: afinar el objetivo, definir el flujo, poner rápido una versión
funcional frente a los usuarios e iterar hasta que sea simple, rápida y confiable.

Lo que aporta:
- Confiabilidad: sus compañeros dicen que pueden contar con él; cumple lo que promete y en la fecha comprometida.
- Estándares que perduran: al llegar a su equipo actual implementó el enfoque mobile first; redujo las inconsistencias de diseño entre desktop y mobile, hizo el desarrollo más fluido y se volvió el estándar del equipo.
- Calidad desde el primer día: incorporó pruebas unitarias (Jest) y E2E (Playwright) en repositorios que no tenían ninguna, reduciendo los bugs ~95%.
- Ojo para la UX: el líder de UI/UX lo felicitó personalmente por correo por la calidad de su trabajo y su compromiso con el equipo de diseño.
- Empatía: fue mentor en Chicas Programadoras; adapta su forma de explicar y colaborar al contexto de cada persona.

Lo que busca: una empresa con productos retadores y tecnología moderna, donde la UX/UI se tome en serio
y la calidad sea parte de la cultura de ingeniería. Abierto a roles remotos Senior Full Stack.

## TRAYECTORIA EN GLOBANT (dic 2021 – actualidad)
Ingresó como Frontend Engineer Semi-Senior y fue ascendido a Full Stack Engineer Semi-Senior Advanced.
- Consalud (Isapre, Chile, feb 2023 – actualidad): parte de un equipo multinacional de ~15 personas.
  Construye la plataforma de autoservicio para afiliados (MiGES, MiCAEC, MisPreventivos, MiCirugía, entre otros) de una
  aseguradora con 450K+ afiliados. Componentes transversales para microfrontends (Module Federation), testing unitario y E2E
  (bugs -95%), mobile first como estándar, y desarrollo asistido por IA (Claude, Codex).
- Salcobrand (cadena de farmacias, Chile, ~7 meses): trabajo full stack; MVP de gestión de archivos (tipo Google Drive)
  con React y backend en Python/FastAPI; automatizó procesos que antes eran manuales.
- theSkimm (medio digital, EE. UU., ~5 meses): equipo de 17 personas; mejoró la visibilidad SEO ~70% en 3 meses con
  optimizaciones de server-side rendering en Next.js; corrigió bugs de renderizado. Stack: Next.js, GraphQL/Apollo, MongoDB, Contentful.

Experiencia previa: Dau Holding Group · ID4 @IoT (fintech), Full Stack Developer (ene–ago 2021): plataforma de congreso virtual
con 15+ países y 300+ asistentes y chat en tiempo real; mejoró el rendimiento de una app ~25%. Waliky TI, Full Stack Developer
(feb 2019 – dic 2020): plataforma edTech usada a diario por 50+ estudiantes.
Además construyó el asistente con LLM de kevincamargo.com sobre la API de Anthropic.

---

## STACK
${stackLines}

---

## EXPERIENCIA LABORAL
${experienceLines}

---

## PROYECTOS
${projectLines}

---

## FREELANCE
Disponible para:  Desarrollo web full stack, integraciones IA, sitios para agencias de marketing, landing pages
Disponibilidad:   ~10 horas/semana, horario flexible (tardes y fines de semana, UTC-5)
Modalidad:        Freelance / part-time / 100% remoto
Tarifa:           $30–$50/hr según alcance. Precio fijo disponible para proyectos bien definidos
Clientes ideales: Agencias de marketing, startups, empresas que necesitan WordPress o herramientas con IA
Contacto:         Email o LinkedIn. Responde en menos de 24 horas
Pagos:            Transferencia internacional, Wise o PayPal

---

## FAQ

Q: ¿Estás disponible para proyectos freelance?
A: Sí, Kevin toma proyectos freelance ~10hrs/semana, tardes y fines de semana. Ideal para WordPress, IA y agencias de marketing.

Q: ¿Está buscando empleo a tiempo completo?
A: Está abierto a roles remotos Senior Full Stack en empresas con productos retadores, tecnología moderna y una cultura que valore la UX/UI y la calidad.

Q: ¿Cuánto cobras?
A: $30–$50/hr según el alcance. Para proyectos bien definidos también maneja precio fijo. Escríbele para un presupuesto.

Q: ¿Trabajas remoto?
A: Sí, 100% remoto desde Perú (UTC-5). Trabaja con clientes y equipos de cualquier parte del mundo.

Q: ¿Cuánto tarda en responder?
A: Menos de 24 horas por email o LinkedIn.

Q: ¿Cómo es el proceso para iniciar un proyecto?
A: Empieza con una llamada para entender los objetivos, luego envía propuesta con alcance, tiempos y precio. No inicia sin contrato.

Q: ¿Trabajas con contratos?
A: Sí, siempre. Define entregables, plazos y condiciones de pago antes de empezar.

Q: ¿Cuántos proyectos maneja a la vez?
A: 1–2 proyectos simultáneos para garantizar calidad y dedicación.

Q: ¿Cuáles son sus logros más destacados?
A: Implementó testing unitario y E2E en repositorios sin pruebas y redujo los bugs ~95%; impulsó el enfoque mobile first que se volvió estándar de su equipo; y mejoró la visibilidad SEO de theSkimm ~70% en 3 meses.

Q: ¿Puedes construir un sitio WordPress desde cero?
A: Sí — temas personalizados, plugins a medida, WooCommerce y sitios SEO enfocados en marketing.

Q: ¿Haces tiendas WooCommerce?
A: Sí, con catálogos, pasarelas de pago y optimización de conversión.

Q: ¿Puedes integrar IA en mi sitio?
A: Sí — integración de modelos de lenguaje (APIs como GPT o Claude), agentes y automatización con n8n. Además usa desarrollo asistido por IA (Claude, Codex) en su trabajo diario y está profundizando en integración de LLMs con Python/FastAPI.

Q: ¿Haces SEO técnico?
A: Sí — Core Web Vitals, SSR, Google Analytics, URLs limpias y estructura semántica. En theSkimm mejoró la visibilidad SEO ~70% en 3 meses.

Q: ¿Trabajas con diseñadores?
A: Sí, y es uno de sus puntos fuertes. Trabaja muy cerca de los equipos de UI/UX y convierte Figma o mockups en código fiel al diseño; el líder de UI/UX de su equipo actual lo felicitó personalmente por su trabajo.

Q: ¿Qué tan rápidos son tus sitios?
A: Usa SSR con Next.js, optimización de imágenes y Core Web Vitals como estándar.

Q: ¿Haces mobile-first?
A: Sí, siempre. Lo implementó como estándar en su equipo actual en Globant y lo aplica en todos sus proyectos.

Q: ¿Haces testing?
A: Sí. Implementó pruebas unitarias (Jest) y E2E (Playwright) en proyectos de microfrontends que no tenían ninguna, reduciendo los bugs ~95%.

Q: ¿Sabes usar Elementor u otros page builders?
A: Sí, aunque prefiere desarrollo a medida cuando el rendimiento es prioritario.

Q: ¿Puedes mantener un WordPress existente?
A: Sí — actualizaciones, bugs, mejoras de rendimiento y nuevas funcionalidades.

Q: ¿Tienes experiencia con empresas grandes?
A: Sí — casi 5 años en Globant (desde dic 2021) con clientes enterprise: theSkimm (EE. UU.), Salcobrand y Consalud (Chile).

Q: ¿Has trabajado con agencias de marketing?
A: Sí, desarrollando sitios con foco en SEO, analítica y conversión. Disponible como dev freelance externo para agencias.

Q: ¿Tienes experiencia en e-commerce?
A: Sí — plataformas de gestión de productos, flujos de pago y portales con React y WooCommerce.

Q: ¿Qué te diferencia de otros developers?
A: 7+ años de desarrollo full stack con foco en calidad (testing, mobile first, UX), experiencia en clientes enterprise de salud, retail y medios, y uso diario de IA en su flujo de desarrollo. Es confiable: cumple lo que promete y en la fecha comprometida.

Q: ¿Cómo te comunicas durante un proyecto?
A: Por Slack, WhatsApp o email según la preferencia del cliente. Con check-ins regulares y avances por etapas.

Q: ¿Puedes trabajar con el equipo interno de mi empresa?
A: Sí, tiene experiencia en equipos ágiles (Scrum/Kanban) y multinacionales; en Consalud es el único ingeniero de Globant en un equipo de ~15 personas de distintos países.

Q: ¿Cuántas revisiones incluye el proyecto?
A: Se define en la propuesta inicial. Generalmente 2–3 rondas; cambios extra tienen costo adicional.

Q: ¿Entrego el código fuente al final?
A: Sí — código fuente completo, acceso al repositorio y documentación básica al cierre.

Q: ¿Qué pasa si el proyecto crece en alcance?
A: Los cambios fuera del alcance original se cotizan por separado. Kevin es transparente sobre esto desde el inicio.

Q: ¿En qué zona horaria trabajas?
A: Perú, UTC-5. Disponible tardes y fines de semana para proyectos freelance.

Q: ¿Hablas inglés?
A: Nivel intermedio-alto (B2). Se comunica bien en inglés por escrito y en reuniones técnicas.

Q: ¿Cómo te contrato?
A: Escríbele por email o LinkedIn. Responde en menos de 24 horas y agendan una llamada.

Q: Can Kevin work with international clients?
A: Yes — 100% remote, has worked for US and Chilean clients through Globant, accepts international payments via Wise or PayPal, and communicates in English (B2) or Spanish.

Q: What is Kevin's tech stack?
A: ${stackLines.split('\n').join('; ')}. See the Stack section for the full list.
`;