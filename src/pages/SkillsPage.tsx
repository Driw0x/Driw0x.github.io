import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowUpRight, FiAward, FiBox, FiMaximize, FiMinus, FiPlus, FiShare2 } from "react-icons/fi";
import Background from "../components/layout/Background";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { certifications, projectSkillIds } from "../data/skillConnections";
import type { Certification } from "../data/skillConnections";
import type { Project } from "../types/project";
import { useLanguage } from "../i18n";

type NodeKind = "project" | "skill" | "certification";
type ExplorerNode = {
  id: string;
  kind: NodeKind;
  title: string;
  label: string;
  description: string;
  skillIds: string[];
  project?: Project;
  certificate?: Certification;
};

const kinds = {
  project: { label: "Projets", icon: FiBox, color: "#6ee7b7", classes: "border-emerald-300/30 bg-emerald-950 text-emerald-100" },
  skill: { label: "Compétences", icon: FiShare2, color: "#67e8f9", classes: "border-cyan-300/40 bg-cyan-950 text-cyan-100" },
  certification: { label: "Certificats", icon: FiAward, color: "#fcd34d", classes: "border-amber-300/30 bg-slate-900 text-amber-100" },
} as const;

const nodes: ExplorerNode[] = [
  ...projects.filter((project) => projectSkillIds[project.title]).map((project): ExplorerNode => ({
    id: `project:${project.title}`, kind: "project", title: project.title, label: project.title,
    description: project.description, skillIds: projectSkillIds[project.title], project,
  })),
  ...skills.map((skill): ExplorerNode => ({
    id: `skill:${skill.id}`, kind: "skill", title: skill.title, label: skill.title,
    description: skill.description, skillIds: [skill.id],
  })),
  ...certifications.map((certificate): ExplorerNode => ({
    id: `certification:${certificate.id}`, kind: "certification", title: certificate.title,
    label: certificate.label, description: certificate.description, skillIds: certificate.skillIds, certificate,
  })),
];

const edges = nodes.filter((node) => node.kind !== "skill").flatMap((node) =>
  node.skillIds.map((skillId) => ({ source: node.id, target: `skill:${skillId}`, kind: node.kind })),
);

function SkillGraph({ selectedId, onSelect }: {
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const { t } = useLanguage();
  const [zoom, setZoom] = useState(1);
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
  const columns = (Object.keys(kinds) as NodeKind[]).map((kind) => ({
    kind, nodes: nodes.filter((node) => node.kind === kind),
  }));
  const height = Math.max(470, Math.max(...columns.map((column) => column.nodes.length)) * 76 + 100);
  const positions = new Map(columns.flatMap((column, columnIndex) => column.nodes.map((node, index) => [
    node.id, { x: 20 + columnIndex * 350, y: 65 + (height - 100) * (index + 0.5) / column.nodes.length - 30 },
  ] as const)));
  const connected = new Set([selectedId, ...edges.flatMap((edge) =>
    edge.source === selectedId ? [edge.target] : edge.target === selectedId ? [edge.source] : [],
  )]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
        <p className="text-xs text-slate-400">{t("Cliquez sur un élément pour explorer ses liens.")}</p>
        <div className="flex items-center gap-1" role="group" aria-label={t("Zoom du graphe")}>
          <button className="explorer-tool" type="button" aria-label={t("Réduire")} disabled={zoom <= 0.6} onClick={() => setZoom((value) => Math.max(0.6, +(value - 0.2).toFixed(1)))}><FiMinus /></button>
          <span className="w-12 text-center text-xs tabular-nums text-slate-300">{Math.round(zoom * 100)}%</span>
          <button className="explorer-tool" type="button" aria-label={t("Agrandir")} disabled={zoom >= 1.8} onClick={() => setZoom((value) => Math.min(1.8, +(value + 0.2).toFixed(1)))}><FiPlus /></button>
          <button className="explorer-tool" type="button" aria-label={t("Réinitialiser le zoom")} onClick={() => setZoom(1)}><FiMaximize /></button>
        </div>
      </div>
      <div
        className="explorer-canvas relative overflow-auto overscroll-contain rounded-b-3xl"
        style={{ height: Math.min(height, 680) }}
        role="group"
        aria-label={t("Graphe des compétences, projets et certificats")}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse" || event.button !== 0 || (event.target as Element).closest("button")) return;
          drag.current = { x: event.clientX, y: event.clientY, left: event.currentTarget.scrollLeft, top: event.currentTarget.scrollTop };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!drag.current) return;
          event.currentTarget.scrollLeft = drag.current.left + drag.current.x - event.clientX;
          event.currentTarget.scrollTop = drag.current.top + drag.current.y - event.clientY;
        }}
        onPointerUp={() => { drag.current = null; }}
        onPointerCancel={() => { drag.current = null; }}
      >
        <div className="relative" style={{ width: `${zoom * 100}%`, minWidth: 720 * zoom, height: height * zoom }}>
          <div className="absolute left-0 top-0" style={{ width: `${100 / zoom}%`, height, transform: `scale(${zoom})`, transformOrigin: "top left" }}>
            {columns.map((column, index) => (
              <p key={column.kind} className="absolute top-6 w-[26%] text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400" style={{ left: `${2 + index * 35}%` }}>
                {t(kinds[column.kind].label)} <span className="ml-1 text-slate-500">{column.nodes.length}</span>
              </p>
            ))}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox={`0 0 1000 ${height}`} preserveAspectRatio="none" aria-hidden="true">
              {edges.map((edge) => {
                const from = positions.get(edge.source)!;
                const to = positions.get(edge.target)!;
                const isProject = edge.kind === "project";
                const x1 = from.x + (isProject ? 260 : 0);
                const x2 = to.x + (isProject ? 0 : 260);
                const active = edge.source === selectedId || edge.target === selectedId;
                return <path key={`${edge.source}-${edge.target}`} d={`M ${x1} ${from.y + 30} C ${(x1 + x2) / 2} ${from.y + 30}, ${(x1 + x2) / 2} ${to.y + 30}, ${x2} ${to.y + 30}`} fill="none" stroke={isProject ? kinds.project.color : kinds.certification.color} strokeWidth={active ? 2 : 1.2} strokeDasharray={isProject ? undefined : "5 5"} opacity={selectedId ? active ? 0.85 : 0.1 : 0.35} />;
              })}
            </svg>
            {nodes.map((node) => {
              const position = positions.get(node.id)!;
              const Icon = kinds[node.kind].icon;
              return (
                <button
                  key={node.id}
                  type="button"
                  data-node-id={node.id}
                  aria-label={t(node.title)}
                  aria-pressed={selectedId === node.id}
                  title={t(node.title)}
                  onClick={() => onSelect(node.id)}
                  className={`explorer-node absolute flex h-[60px] w-[26%] items-center gap-2 rounded-xl border px-3 text-left transition ${kinds[node.kind].classes} ${selectedId === node.id ? "ring-2 ring-white/70 ring-offset-2 ring-offset-slate-950" : "hover:brightness-125"} ${selectedId && !connected.has(node.id) ? "opacity-40 hover:opacity-100 focus-visible:opacity-100" : "opacity-100"}`}
                  style={{ left: `${position.x / 10}%`, top: position.y }}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="line-clamp-2 block text-xs font-medium leading-4">{t(node.label)}</span>
                    {node.certificate && <span className="mt-0.5 block text-[10px] text-slate-400">{node.certificate.issuer}</span>}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default function SkillsPage({ initialSkillId = "" }: { initialSkillId?: string }) {
  const { t, language } = useLanguage();
  const validSkillId = skills.some((skill) => skill.id === initialSkillId) ? initialSkillId : "";
  const [selectedId, setSelectedId] = useState<string | null>(validSkillId ? `skill:${validSkillId}` : null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const selected = nodes.find((node) => node.id === selectedId);
  const relatedIds = new Set(edges.flatMap((edge) => edge.source === selectedId ? [edge.target] : edge.target === selectedId ? [edge.source] : []));
  const relatedNodes = nodes.filter((node) => relatedIds.has(node.id));

  function selectNode(id: string) {
    setSelectedId(id);
    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => document.getElementById("explorer-panel")?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }

  function formatDate(date: string) {
    return new Intl.DateTimeFormat(language, {
      month: "long", year: "numeric", ...(date.length === 10 ? { day: "numeric" } as const : {}),
    }).format(new Date(`${date.length === 7 ? `${date}-01` : date}T12:00:00Z`));
  }

  return (
    <>
      <Background />
      <Navbar projectsPage />
      <main className="pb-24 pt-28">
        <Container>
          <a href={import.meta.env.BASE_URL} className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-200"><FiArrowLeft />{t("Accueil")}</a>
          <div className="mb-9 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">{t("Explorer")}</p>
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{t("Compétences, projets & certifications.")}</h1>
            <p className="mt-5 leading-7 text-slate-300">{t("Explorez les liens entre mes domaines techniques, leurs applications dans mes projets et les formations qui les complètent.")}</p>
          </div>

          <div className="mb-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {(Object.keys(kinds) as NodeKind[]).map((kind) => {
              const Icon = kinds[kind].icon;
              return <span key={kind} className="inline-flex items-center gap-2 text-slate-300"><Icon style={{ color: kinds[kind].color }} aria-hidden="true" /><strong className="font-semibold text-white">{nodes.filter((node) => node.kind === kind).length}</strong>{t(kinds[kind].label)}</span>;
            })}
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <section className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70" aria-label={t("Éléments et liens")}>
              <SkillGraph selectedId={selectedId} onSelect={selectNode} />
              <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 px-5 py-3 text-xs text-slate-400">
                <span className="inline-flex items-center gap-2"><span className="w-6 border-t border-emerald-300" />{t("Mis en pratique dans un projet")}</span>
                <span className="inline-flex items-center gap-2"><span className="w-6 border-t border-dashed border-amber-300" />{t("Formation ou évaluation associée")}</span>
              </div>
            </section>

            <aside id="explorer-panel" className="glass min-w-0 scroll-mt-24 rounded-3xl p-6 lg:sticky lg:top-24" aria-labelledby="explorer-details">
              {selected ? (
                <>
                  <div aria-live="polite">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-300">{t(selected.certificate?.kind ?? kinds[selected.kind].label)}</p>
                    <h2 id="explorer-details" className="break-words text-xl font-bold leading-7 text-white">{t(selected.title)}</h2>
                    {selected.certificate && <p className="mt-2 text-sm text-amber-200">{selected.certificate.issuer}</p>}
                    <p className="mt-4 text-sm leading-6 text-slate-300">{t(selected.description)}</p>
                  </div>
                  {selected.certificate?.issuedOn && <p className="mt-4 text-xs text-slate-400">{t("Obtention")} : <span className="capitalize">{formatDate(selected.certificate.issuedOn)}</span></p>}
                  {selected.certificate?.expiresOn && <p className="mt-2 text-xs text-slate-400">{t("Expiration")} : {formatDate(selected.certificate.expiresOn)}</p>}
                  {selected.project && <p className="mt-4 text-xs text-slate-400">{t(selected.project.status)}</p>}
                  {(selected.certificate || selected.project) && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      <Button href={selected.certificate?.url ?? selected.project!.github} external variant="secondary" className="gap-2">
                        {t(selected.certificate ? "Voir le justificatif" : "Voir le dépôt")}<FiArrowUpRight />
                      </Button>
                      {selected.project && (
                        <Button href={`${selected.project.github}/blob/${selected.project.documentation[language]}`} external variant="secondary">
                          {t("Documentation")}
                        </Button>
                      )}
                    </div>
                  )}
                  {(Object.keys(kinds) as NodeKind[]).map((kind) => {
                    const group = relatedNodes.filter((node) => node.kind === kind);
                    if (!group.length) return null;
                    return (
                      <section key={kind} className="mt-6 border-t border-white/10 pt-5">
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">{t(kinds[kind].label)}</h3>
                        <ul className="space-y-2">
                          {group.map((node) => (
                            <li key={node.id}>
                              <button
                                type="button"
                                className="explorer-related flex w-full items-start justify-between gap-3 text-left text-sm leading-5 text-slate-200 hover:text-cyan-200"
                                onClick={() => selectNode(node.id)}
                              >
                                <span>
                                  {t(node.label)}
                                  {node.certificate && <span className="mt-0.5 block text-xs text-slate-500">{node.certificate.issuer}</span>}
                                </span>
                                <FiArrowUpRight className="mt-0.5 shrink-0" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </section>
                    );
                  })}
                </>
              ) : (
                <>
                  <FiShare2 className="mb-5 h-8 w-8 text-cyan-300" aria-hidden="true" />
                  <h2 id="explorer-details" className="text-xl font-bold text-white">{t("Suivez les liens.")}</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{t("Sélectionnez une compétence, un projet ou un certificat pour découvrir son périmètre et les éléments associés.")}</p>
                  <button className="explorer-related mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200" type="button" onClick={() => selectNode("skill:agents")}>{t("Explorer l'IA agentique")}<FiArrowUpRight /></button>
                </>
              )}
            </aside>
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-6 text-slate-400">{t("Chaque lien concerne un périmètre précis. Les projets illustrent une mise en pratique ; les certificats et attestations documentent une formation ou une évaluation ciblée.")}</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
