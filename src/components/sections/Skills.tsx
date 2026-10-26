import { skills } from '../../data/skills'
import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import SkillCard from '../common/SkillCard'
import { useLanguage } from '../../i18n'
import Button from '../common/Button'

function Skills() {
  const { t } = useLanguage()
  return (
    <section id="skills" className="py-28">
      <Container>
        <SectionTitle
          eyebrow={t("Compétences")}
          title={t("Compétences et intérêts techniques.")}
          description={t("Des pratiques en recherche opérationnelle, IA agentique et systèmes multi-agents soutenues par mes projets, complétées par le machine learning et l'ingénierie des données.")}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#/skills" variant="secondary">
            {t("Explorer compétences, projets et certificats")}
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Skills
