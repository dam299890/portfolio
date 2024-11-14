import { l as createComponent, m as renderTemplate, n as maybeRenderHead, q as renderSlot, k as createAstro, o as addAttribute, s as spreadAttributes, p as renderComponent, t as renderHead } from './astro/server_B1-0Y79h.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                              */

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center "> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "C:/Users/Daniel/Documents/Portfolio/porfolio/src/components/Badge.astro", void 0);

const $$Astro$7 = createAstro("https://porfolio.dev/");
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/Daniel/Documents/Portfolio/porfolio/src/components/SectionContainer.astro", void 0);

const $$Astro$6 = createAstro("https://porfolio.dev/");
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Daniel/Documents/Portfolio/porfolio/src/components/SocialPill.astro", void 0);

const $$Astro$5 = createAstro("https://porfolio.dev/");
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "C:/Users/Daniel/Documents/Portfolio/porfolio/src/components/icons/LinkedIn.astro", void 0);

const $$Astro$4 = createAstro("https://porfolio.dev/");
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path> </svg>`;
}, "C:/Users/Daniel/Documents/Portfolio/porfolio/src/components/icons/Sun.astro", void 0);

const $$Astro$3 = createAstro("https://porfolio.dev/");
const $$Moon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`;
}, "C:/Users/Daniel/Documents/Portfolio/porfolio/src/components/icons/Moon.astro", void 0);

const $$Astro$2 = createAstro("https://porfolio.dev/");
const $$System = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$System;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path> <path d="M7 20h10"></path> <path d="M9 16v4"></path> <path d="M15 16v4"></path> </svg>`;
}, "C:/Users/Daniel/Documents/Portfolio/porfolio/src/components/icons/System.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const THEMES = ["Light", "Dark", "System"];
  return renderTemplate(_a || (_a = __template(["", '<div class="relative ml-1 mr-1" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-x3pjskd3> <span class="sr-only" data-astro-cid-x3pjskd3>Elige el tema</span> ', " ", " ", ' </button> <div id="themes-menu" class="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-x3pjskd3> <ul data-astro-cid-x3pjskd3> ', ' </ul> </div> </div>  <script>\n  let remove = null\n  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")\n  const themesMenu = document.getElementById("themes-menu")\n\n  const getThemePreference = () => {\n    if (typeof localStorage !== "undefined") {\n      return localStorage.getItem("theme") ?? "system"\n    }\n\n    return window.matchMedia("(prefers-color-scheme: dark)").matches\n      ? "dark"\n      : "light"\n  }\n\n  const updateIcon = (themePreference) => {\n    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {\n      element.style.scale = element.id === themePreference ? "1" : "0"\n    })\n  }\n\n  const updateTheme = () => {\n    if (remove != null) {\n      remove()\n    }\n    matchMedia.addEventListener("change", updateTheme)\n    remove = () => {\n      matchMedia.removeEventListener("change", updateTheme)\n    }\n\n    const themePreference = getThemePreference()\n    const isDark =\n      themePreference === "dark" ||\n      (themePreference === "system" && matchMedia.matches)\n\n    updateIcon(themePreference)\n    document.documentElement.classList[isDark ? "add" : "remove"]("dark")\n  }\n\n  updateTheme()\n\n  document.addEventListener("click", () => themesMenu.classList.remove("open"))\n\n  document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {\n    e.stopPropagation()\n    const isClosed = !themesMenu.classList.contains("open")\n    themesMenu.classList[isClosed ? "add" : "remove"]("open")\n  })\n\n  document.querySelectorAll(".themes-menu-option").forEach((element) => {\n    element.addEventListener("click", (e) => {\n      localStorage.setItem("theme", e.target.innerText.toLowerCase().trim())\n      updateTheme()\n    })\n  })\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "SunIcon", $$Sun, { "id": "light", "class": "theme-toggle-icon size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "MoonIcon", $$Moon, { "id": "dark", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "SystemIcon", $$System, { "id": "system", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), THEMES.map((theme) => renderTemplate`<li class="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "C:/Users/Daniel/Documents/Portfolio/porfolio/src/components/ThemeToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      title: "Experiencia",
      label: "experiencia",
      url: "/#experiencia"
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/#proyectos"
    },
    {
      title: "Sobre m\xED",
      label: "sobre-mi",
      url: "/#sobre-mi"
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:dan29ab@gmail.com"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav class="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center" data-astro-cid-3ef6ksr2> ${navItems.map((link) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")} data-astro-cid-3ef6ksr2> ${link.title} </a>`)} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} </nav> </header>  `;
}, "C:/Users/Daniel/Documents/Portfolio/porfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="opacity-80 m-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"> <div class="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">© ${currentYear} <a href="https://www.linkedin.com/in/daniel-amoretti-6937a6224/" class="hover:underline">Daniel</a>. Casi
      todos los derechos reservados. Créditos a <a href="https://www.linkedin.com/in/midudev/" class="hover:underline">Midudev</a> </span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> <li> <a href="/#sobre-mi" class="hover:underline me-4 md:me-6">Sobre mí</a> </li> <li> <a id="contacto" href="mailto:dan29ab@gmail.com" class="hover:underline">Contacto dan29ab@gmail.com</a> </li> </ul> </div> </footer>`;
}, "C:/Users/Daniel/Documents/Portfolio/porfolio/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://porfolio.dev/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Daniel/Documents/Portfolio/porfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro("https://porfolio.dev/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="relative text-black dark:text-white"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/Daniel/Documents/Portfolio/porfolio/src/layouts/Layout.astro", void 0);

export { $$SectionContainer as $, $$Badge as a, $$SocialPill as b, $$LinkedIn as c, $$Layout as d };
