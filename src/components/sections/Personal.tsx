import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import { interests, languages } from "../../data/personal";

export default function Personal() {
  return (
    <section id="personal" className="py-28">
      <Container>
        <SectionTitle
          eyebrow="Personnel"
          title="Langues & centres d'intérêt"
          description="Quelques informations complémentaires sur mon profil."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Langues */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <h3 className="mb-8 text-lg font-bold uppercase tracking-[0.3em] text-cyan-300">
              🌍 Langues
            </h3>

            <div className="space-y-5">
              {languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{language.code}</span>

                    <span className="font-semibold text-white">
                      {language.name}
                    </span>
                  </div>

                  <span className="text-slate-400">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Centres d'intérêt */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <h3 className="mb-8 text-lg font-bold uppercase tracking-[0.3em] text-cyan-300">
              🎯 Centres d'intérêt
            </h3>

            <div className="space-y-6">
              {interests.map((interest) => (
                <div
                  key={interest.title}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl">
                    {interest.icon}
                  </span>

                  <div>
                    <h4 className="font-semibold text-white">
                      {interest.title}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {interest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}