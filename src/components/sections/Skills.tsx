import { useRef, useState } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { FiArrowUpRight, FiAward, FiBox, FiChevronDown } from 'react-icons/fi'
import { skills } from '../../data/skills'
import { projects } from '../../data/projects'
import { certifications, projectSkillIds } from '../../data/skillConnections'
import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import SkillCard from '../common/SkillCard'
import { useLanguage } from '../../i18n'
import Button from '../common/Button'

const domains = skills.map((skill) => ({
  ...skill,
  projects: projects.filter((project) => projectSkillIds[project.title]?.includes(skill.id)),
  certificates: certifications.filter((certificate) => certificate.skillIds.includes(skill.id)),
}))

function Skills() {
  const { t, language } = useLanguage()
  const [skillId, setSkillId] = useState('')
  const dialog = useRef<HTMLDialogElement>(null)
  const selected = domains.find((domain) => domain.id === skillId)

  function selectSkill(id: string) {
    setSkillId(id)
    dialog.current?.showModal()
    requestAnimationFrame(() => document.getElementById('skill-details-title')?.focus({ preventScroll: true }))
  }

  function closeDetails() {
    setSkillId('')
  }

  function formatDate(date: string) {
    return new Intl.DateTimeFormat(language, {
      month: 'long', year: 'numeric', ...(date.length === 10 ? { day: 'numeric' } as const : {}),
    }).format(new Date(`${date.length === 7 ? `${date}-01` : date}T12:00:00Z`))
  }

  return (
    <section id="skills" className="py-28">
      <Container>
        <SectionTitle
          eyebrow={t("Compétences")}
          title={t("Compétences et intérêts techniques.")}
          description={t("Des pratiques en recherche opérationnelle, IA agentique et systèmes multi-agents soutenues par mes projets, complétées par le machine learning et l'ingénierie des données.")}
        />

        <MotionConfig reducedMotion="user" transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>
          <div id="skills-content" className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                layoutId={`skill-card-${skill.id}`}
                animate={{ opacity: selected ? 0 : 1 }}
                transition={{ opacity: { duration: 0.12 } }}
                style={{ borderRadius: 24 }}
                className="glass min-w-0 hover:border-cyan-300/40"
              >
                <SkillCard skill={skill} onSelect={() => selectSkill(skill.id)} />
              </motion.div>
            ))}
          </div>
          <motion.dialog
            ref={dialog}
            layoutRoot
            aria-labelledby="skill-details-title"
            onCancel={(event) => { event.preventDefault(); closeDetails() }}
            onClick={(event) => { if (event.target === event.currentTarget) closeDetails() }}
            className="fixed inset-0 m-auto w-[calc(100%-3rem)] max-w-6xl max-h-none overflow-visible border-0 bg-transparent p-0 text-inherit outline-none backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm"
          >
            <AnimatePresence onExitComplete={() => dialog.current?.close()}>
              {selected && (
                <motion.div
                  key={selected.id}
                  layoutId={`skill-card-${selected.id}`}
                  style={{ borderRadius: 24 }}
                  className="glass overflow-hidden bg-slate-950"
                >
                  <SkillCard skill={selected} expanded onClose={closeDetails}>
                        <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
                          <section aria-labelledby="skill-projects-title">
                            <h4 id="skill-projects-title" className="flex items-center gap-2 text-sm font-semibold text-emerald-200"><FiBox aria-hidden="true" />{t("Projets — mise en pratique")}<span className="ml-auto text-slate-400">{selected.projects.length}</span></h4>
                            <div className="mt-4 space-y-3">
                              {selected.projects.map((project) => (
                                <details key={project.title} className="group rounded-2xl border border-emerald-300/15 bg-slate-950/40">
                                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-4 text-sm font-medium text-slate-100 focus-visible:outline-2 focus-visible:outline-cyan-300 [&::-webkit-details-marker]:hidden"><span>{project.title}</span><FiChevronDown className="shrink-0 text-emerald-200 transition group-open:rotate-180" aria-hidden="true" /></summary>
                                  <div className="space-y-4 px-4 pb-4">
                                    <p className="text-xs text-emerald-200">{t(project.status)}</p>
                                    <p className="text-sm leading-6 text-slate-300">{t(project.description)}</p>
                                    <div className="flex flex-wrap gap-2">
                                      <Button href={project.github} external variant="secondary" className="gap-2">{t("Voir le dépôt")}<FiArrowUpRight /></Button>
                                      <Button href={`${project.github}/blob/${project.documentation[language]}`} external variant="secondary">{t("Documentation")}</Button>
                                    </div>
                                  </div>
                                </details>
                              ))}
                            </div>
                          </section>

                          <section aria-labelledby="skill-certificates-title">
                            <h4 id="skill-certificates-title" className="flex items-center gap-2 text-sm font-semibold text-amber-200"><FiAward aria-hidden="true" />{t("Certificats — formations et évaluations")}<span className="ml-auto text-slate-400">{selected.certificates.length}</span></h4>
                            <div className="mt-4 space-y-3">
                              {selected.certificates.map((certificate) => (
                                <details key={certificate.id} className="group rounded-2xl border border-amber-300/15 bg-slate-950/40">
                                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-4 focus-visible:outline-2 focus-visible:outline-cyan-300 [&::-webkit-details-marker]:hidden">
                                    <span><span className="block text-sm font-medium text-slate-100">{t(certificate.label)}</span><span className="mt-1 block text-xs leading-5 text-slate-400">{certificate.issuer} · {t(certificate.kind)}</span></span>
                                    <FiChevronDown className="shrink-0 text-amber-200 transition group-open:rotate-180" aria-hidden="true" />
                                  </summary>
                                  <div className="space-y-4 px-4 pb-4">
                                    <p className="text-sm font-medium leading-6 text-white">{t(certificate.title)}</p>
                                    <p className="text-sm leading-6 text-slate-300">{t(certificate.description)}</p>
                                    {certificate.issuedOn && <p className="text-xs text-slate-400">{t("Obtention")} : <span className="capitalize">{formatDate(certificate.issuedOn)}</span></p>}
                                    {certificate.expiresOn && <p className="text-xs text-slate-400">{t("Expiration")} : {formatDate(certificate.expiresOn)}</p>}
                                    <Button href={certificate.url} external variant="secondary" className="gap-2">{t("Voir le justificatif")}<FiArrowUpRight /></Button>
                                  </div>
                                </details>
                              ))}
                              {!selected.certificates.length && <p className="rounded-2xl border border-dashed border-white/10 p-5 text-sm leading-6 text-slate-400">{t("Aucun certificat associé à ce domaine.")}</p>}
                            </div>
                          </section>
                        </div>
                    <p className="mt-6 max-w-3xl text-xs leading-6 text-slate-400">{t("Chaque lien concerne un périmètre précis. Les projets illustrent une mise en pratique ; les certificats et attestations documentent une formation ou une évaluation ciblée.")}</p>
                  </SkillCard>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.dialog>
        </MotionConfig>
      </Container>
    </section>
  )
}

export default Skills
