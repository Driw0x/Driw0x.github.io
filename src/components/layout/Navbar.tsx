import { profile } from "../../data/profile";

type NavbarProps = {
  projectsPage?: boolean;
};

function Navbar({ projectsPage = false }: NavbarProps) {
  const base = import.meta.env.BASE_URL;

  const links = projectsPage
    ? [
        { href: base, label: "Accueil" },
        { href: `${base}projects`, label: "Projets" },
        { href: `${base}#contact`, label: "Contact" },
      ]
    : [
        { href: "#about", label: "À propos" },
        { href: "#skills", label: "Compétences" },
        { href: "#projects", label: "Projets" },
        { href: "#timeline", label: "Parcours" },
        { href: "#contact", label: "Contact" },
      ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
              className="transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;