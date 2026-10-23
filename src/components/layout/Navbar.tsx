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
        { href: "/", label: t("Accueil") },
        {
          href: cvHref,
          label: t("CV"),
          external: true,
        },
        { href: "/#contact", label: t("Contact") },
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

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href={base}
          className="font-bold tracking-tight text-white"
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={"external" in link && link.external ? "_blank" : undefined}
              rel={"external" in link && link.external ? "noreferrer" : undefined}
              className="transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>

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
