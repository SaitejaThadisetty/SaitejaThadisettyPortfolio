import { HomeSection, AboutSection, SkillsSection, ExperienceSection, ProjectsSection, ContactSection } from '../sections';

export default function Home() {
  return (
    <main className="pt-20">
      <div className="py-12 md:py-16"><HomeSection /></div>
      <div className="py-12 md:py-16"><AboutSection /></div>
      <div className="py-12 md:py-16"><SkillsSection /></div>
      <div className="py-12 md:py-16"><ExperienceSection /></div>
      <div className="py-12 md:py-16"><ProjectsSection /></div>
      <div className="py-12 md:py-16"><ContactSection /></div>
    </main>
  );
}
