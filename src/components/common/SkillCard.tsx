import { motion } from 'framer-motion'
import type { Skill } from '../../types/skill'

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="glass rounded-3xl p-6 transition hover:border-cyan-300/40"
    >
      <p className="text-sm font-medium text-cyan-300">{skill.category}</p>
      <h3 className="mt-3 text-xl font-bold text-white">{skill.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{skill.description}</p>
    </motion.div>
  )
}

export default SkillCard
