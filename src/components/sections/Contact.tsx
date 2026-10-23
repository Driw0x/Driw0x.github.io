import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../../data/profile'
import Button from '../common/Button'
import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import { useLanguage } from '../../i18n'
export default function Contact() {
  const { t } = useLanguage()
  return <section id="contact" className="py-24"><Container><div className="glass rounded-[2rem] p-8 md:p-12"><SectionTitle eyebrow={t("Contact")} title={t("Échangeons autour d'un stage ou d'un projet.")} description={t("Je suis actuellement à la recherche d'un stage de fin d'études en intelligence artificielle et développement logiciel. Si mon profil vous intéresse ou si vous souhaitez discuter d'un projet, n'hésitez pas à me contacter.")} />
    <div className="flex flex-wrap gap-4"><Button href={`mailto:${profile.email}`}>{t("M’envoyer un mail")}</Button></div>
    <p className="mt-8 flex items-center gap-2 text-slate-400"><FiMail/> {profile.email}</p>
  </div></Container></section>
}
