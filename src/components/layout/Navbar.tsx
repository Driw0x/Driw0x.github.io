import { profile } from "../../data/profile";
import { useLanguage } from "../../i18n";

type NavbarProps = {
  projectsPage?: boolean;
};

function Navbar({ projectsPage = false }: NavbarProps) {
  const { language, setLanguage, t, cvHref } = useLanguage();
  const base = import.meta.env.BASE_URL;

  const links = projectsPage
    ? [
        { href: base, label: t("Accueil") },
        { href: `${base}#skills`, label: t("Compétences") },
        {
          href: cvHref,
          label: t("CV"),
          external: true,
        },
        { href: `${base}#contact`, label: t("Contact") },
      ]
    : [
        { href: "#about", label: t("À propos") },
        { href: "#skills", label: t("Compétences") },
        { href: "#projects", label: t("Projets") },
        { href: "#timeline", label: t("Parcours") },
        {
          href: cvHref,
          label: t("CV"),
          external: true,
        },
        { href: "#contact", label: t("Contact") },
      ];

  const navigationLinks = links.map((link) => (
    <a
      key={link.href}
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
      onClick={(event) => {
        const menu = event.currentTarget.closest("details");
        if (menu) {
          menu.open = false;
          menu.querySelector("summary")?.focus({ preventScroll: true });
        }
      }}
      className="rounded px-3 py-2 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-cyan-300 md:px-0 md:py-0"
    >
      {link.label}
    </a>
  ));

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-4 sm:gap-4 sm:px-6">
        <a
          href={base}
          className="font-bold tracking-tight text-white"
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-4 text-sm text-slate-300 md:flex lg:gap-7">
          {navigationLinks}
        </div>

        <details
          className="md:hidden"
          onKeyDown={(event) => {
            if (event.key === "Escape" && event.currentTarget.open) {
              event.currentTarget.open = false;
              event.currentTarget.querySelector("summary")?.focus();
            }
          }}
        >
          <summary className="cursor-pointer rounded-lg border border-white/15 px-2 py-1.5 text-sm text-slate-200 focus-visible:outline-2 focus-visible:outline-cyan-300">
            {t("Menu")}
          </summary>
          <div className="absolute inset-x-4 top-full flex flex-col rounded-xl border border-white/15 bg-slate-950 p-2 text-sm text-slate-200 shadow-xl">
            {navigationLinks}
          </div>
        </details>

        <div role="group" aria-label={t("Langue du site")} className="flex shrink-0 items-center rounded-lg border border-white/15 p-1 text-sm">
          {(["fr", "zh-CN"] as const).map((locale) => (
            <button
              key={locale}
              type="button"
              lang={locale}
              aria-pressed={language === locale}
              onClick={() => setLanguage(locale)}
              className={`rounded-md px-3 py-1.5 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${language === locale ? "bg-cyan-300/15 text-cyan-200" : "text-slate-300 hover:text-white"}`}
            >
              {locale === "fr" ? "FR" : "中文"}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
