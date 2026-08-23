import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { profile } from "../../data/profile";
import Button from "../common/Button";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              À la recherche d'un stage de fin d'études
            </div>

            <h1 className="text-6xl font-black leading-[0.95] tracking-tight text-white md:text-8xl">
              {profile.name}
            </h1>

            <div className="mt-6 max-w-3xl">
              <p className="text-2xl font-bold text-white md:text-4xl">
                Étudiant en Master 2 AI2D
              </p>

              <p className="mt-3 text-xl text-cyan-300">
                Sorbonne Université
              </p>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Je recherche un stage de fin d'études en intelligence artificielle et développement logiciel 
              afin de mettre en pratique mes compétences acquises durant mon cursus. Je m'intéresse particulièrement 
              aux modèles de langage (LLM), au RAG et à l'analyse de données.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#projects">
                Voir mes projets
                <FiArrowDown />
              </Button>

              <Button href="#contact" variant="secondary">
                Me contacter
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl" />

            
          </motion.div>
        </div>
      </Container>
    </section>
  );
}