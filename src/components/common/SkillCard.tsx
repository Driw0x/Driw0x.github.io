import { motion } from 'framer-motion'
import type { Skill } from '../../types/skill'
import { useLanguage } from '../../i18n'
import { certifications } from '../../data/skillConnections'

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const { t } = useLanguage()
  const certificateCount = certifications.filter((certificate) => certificate.skillIds.includes(skill.id)).length
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="glass flex flex-col rounded-3xl p-6 transition hover:border-cyan-300/40"
    >
      <p className="text-sm font-medium text-cyan-300">{t(skill.category)}</p>
      <h3 className="mt-3 text-xl font-bold text-white">{t(skill.title)}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{t(skill.description)}</p>
      <a
        href={`#/skills?skill=${skill.id}`}
        className="mt-auto inline-flex flex-wrap items-center gap-2 self-start pt-5 text-sm font-medium text-cyan-200 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      >
        {t("Explorer les liens")}
        {certificateCount > 0 && (
          <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-2 py-0.5 text-xs text-amber-200">
            {certificateCount} {t(certificateCount === 1 ? "certificat associé" : "certificats associés")}
          </span>
        )}
      </a>
    </motion.div>
  )
}

export default SkillCard
