import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const stats = [
  {
    value: "M2",
    label: "Master AI2D",
    description: "Sorbonne Université",
  },
  {
    value: "2",
    label: "Projets réalisés",
    description: "CodeAgent & Projet AI2D",
  },
  {
    value: "5",
    label: "Domaines techniques",
    description: "Python, ML, RAG, FAISS, Git",
  },
  {
    value: "2027",
    label: "Recherche de stage",
    description: "Fin d'études",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28">
      <Container>
        <SectionTitle
          eyebrow="Profil"
          title="Quelques informations clés."
          description="Un aperçu rapide de mon parcours académique, de mes projets et de mes domaines d'intérêt."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
            >
              <h3 className="text-5xl font-black text-cyan-300">
                {stat.value}
              </h3>

              <p className="mt-5 text-xl font-semibold text-white">
                {stat.label}
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}