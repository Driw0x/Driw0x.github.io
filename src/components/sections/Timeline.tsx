import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { timeline } from "../../data/timeline";

export default function Timeline() {
  return (
    <section id="timeline" className="py-28">
      <Container>
        <SectionTitle
          eyebrow="Parcours"
          title="Mon évolution"
          description="Les principales étapes de mon parcours académique et de mes projets."
        />

        <div className="relative mt-16">
          {/* Ligne verticale */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10" />

          <div className="space-y-14">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="relative pl-14"
              >
                {/* Point */}
                <div className="absolute left-0 top-2 h-8 w-8 rounded-full border-4 border-slate-950 bg-cyan-300 shadow-lg shadow-cyan-400/40" />

                {/* Carte */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.05]">
                  {/* Année */}
                  <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-300">
                    {item.period}
                  </span>

                  {/* Titre */}
                  <h3 className="mt-5 text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* Sous-titre */}
                  <p className="mt-2 text-lg text-cyan-300">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-6 leading-8 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}