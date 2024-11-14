/* empty css                              */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_B1-0Y79h.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$SectionContainer, a as $$Badge, b as $$SocialPill, c as $$LinkedIn, d as $$Layout } from './Layout_CnZrZp3A.mjs';

const $$Components = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Design System porfolio.dev", "description": "El cat\xE1logo de componentes de nuestro porfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32 flex flex-col gap-y-10" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt;Badge /&gt;</h1> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Disponible para trabajar` })} </article> <article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt SocialPill /&gt;</h1> <div class="flex"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://linkedin.com/in/midudev" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedInIcon", $$LinkedIn, { "class": "size-4 md:size-6" })}
LinkedIn
` })} </div> </article> ` })} ` })}`;
}, "C:/Users/Daniel/Documents/Portfolio/porfolio/src/pages/components.astro", void 0);

const $$file = "C:/Users/Daniel/Documents/Portfolio/porfolio/src/pages/components.astro";
const $$url = "/components";

export { $$Components as default, $$file as file, $$url as url };
