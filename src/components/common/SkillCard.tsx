import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { FiArrowLeft, FiAward, FiBox, FiChevronDown } from 'react-icons/fi'
import type { Skill } from '../../types/skill'
import { useLanguage } from '../../i18n'
import { certifications, projectSkillIds } from '../../data/skillConnections'
import { projects } from '../../data/projects'

function SkillCard({ skill, expanded = false, onSelect, onClose, children }: {
  skill: Skill
  expanded?: boolean
  onSelect?: () => void
  onClose?: () => void
  children?: ReactNode
}) {
  const { t } = useLanguage()
  const certificateCount = certifications.filter((certificate) => certificate.skillIds.includes(skill.id)).length
  const projectCount = projects.filter((project) => projectSkillIds[project.title]?.includes(skill.id)).length
  return (
    <div
      id={expanded ? 'skill-details' : undefined}
      role={expanded ? 'region' : undefined}
      aria-labelledby={expanded ? 'skill-details-title' : undefined}
      className={`group relative flex flex-col p-6 ${expanded ? 'max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain sm:p-8' : 'h-full'}`}
    >
      {!expanded && <button id={`skill-card-${skill.id}`} type="button" onClick={onSelect} aria-label={t(skill.title)} aria-haspopup="dialog" className="absolute inset-0 z-10 cursor-pointer rounded-3xl focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-300" />}
      {expanded && <motion.button layout="position" type="button" className="mb-6 inline-flex cursor-pointer items-center gap-2 self-start rounded-lg text-sm font-medium text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" onClick={onClose}><FiArrowLeft aria-hidden="true" />{t("Toutes les compétences")}</motion.button>}
      <motion.p layout="position" layoutId={`skill-category-${skill.id}`} className="text-sm font-medium text-cyan-300">{t(skill.category)}</motion.p>
      <motion.h3 layout="position" layoutId={`skill-title-${skill.id}`} id={expanded ? 'skill-details-title' : undefined} tabIndex={expanded ? -1 : undefined} className="mt-3 text-xl font-bold text-white outline-none">{t(skill.title)}</motion.h3>
      <motion.p layout="position" layoutId={`skill-description-${skill.id}`} className="mt-3 text-sm leading-6 text-slate-400">{t(skill.description)}</motion.p>
      {expanded ? (
        <motion.div layout="position">{children}</motion.div>
      ) : (
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 pt-5 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-emerald-200"><FiBox aria-hidden="true" />{projectCount} {t(projectCount === 1 ? "projet associé" : "projets associés")}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-1 text-amber-200"><FiAward aria-hidden="true" />{certificateCount} {t(certificateCount === 1 ? "certificat associé" : "certificats associés")}</span>
          </div>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-cyan-200">{t("Développer")}<FiChevronDown className="transition group-hover:translate-y-0.5" aria-hidden="true" /></span>
        </div>
      )}
    </div>
  )
}

export default SkillCard
