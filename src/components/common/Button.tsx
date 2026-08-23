import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5";

  const styles =
    variant === "primary"
      ? "bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-200"
      : "border border-white/15 bg-white/5 text-white hover:border-cyan-300/60 hover:text-cyan-200";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}