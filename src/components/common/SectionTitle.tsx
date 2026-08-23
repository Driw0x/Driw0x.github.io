import { motion } from 'framer-motion'
export default function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }} className="mb-12 max-w-3xl">
    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
    <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
    {description && <p className="mt-4 text-slate-300 md:text-lg">{description}</p>}
  </motion.div>
}
