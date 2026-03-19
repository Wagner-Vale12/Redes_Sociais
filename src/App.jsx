import { useEffect, useRef, useState } from 'react';
import Navbar from './componentes/Navbar';
import PortfolioHero, { getPortfolioHeroContent } from './componentes/PortfolioHero';
import SpecialtiesSection, { getSpecialtiesContent } from './componentes/SpecialtiesSection';
import CertificationsSection, { getCertificationsContent } from './componentes/CertificationsSection';
import ExperienceSection, { getExperienceContent } from './componentes/ExperienceSection';
import EducationSection, { getEducationContent } from './componentes/EducationSection';
import LanguagesSection, { getLanguagesContent } from './componentes/LanguagesSection';
import ProjectsSection, { getProjectsContent } from './componentes/ProjectsSection';
import PersonalProjectsSection, { getPersonalProjectsContent } from './componentes/PersonalProjectsSection';
import CoursesSection, { getCoursesContent } from './componentes/CoursesSection';
import FooterSection, { getFooterContent } from './componentes/FooterSection';
import ScrollTopButton from './componentes/ScrollTopButton';
import { getNavbarContent, languagesMenu } from './componentes/Navbar';

export default function App() {
  const [selectedId, setSelectedId] = useState('home');
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isEducationVisible, setIsEducationVisible] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languagesMenu[0]);
  const navbarContent = getNavbarContent(selectedLanguage.code);
  const heroContent = getPortfolioHeroContent(selectedLanguage.code);
  const specialtiesContent = getSpecialtiesContent(selectedLanguage.code);
  const certificationsContent = getCertificationsContent(selectedLanguage.code);
  const experienceContent = getExperienceContent(selectedLanguage.code);
  const educationContent = getEducationContent(selectedLanguage.code);
  const languagesContent = getLanguagesContent(selectedLanguage.code);
  const projectsContent = getProjectsContent(selectedLanguage.code);
  const personalProjectsContent = getPersonalProjectsContent(selectedLanguage.code);
  const coursesContent = getCoursesContent(selectedLanguage.code);
  const footerContent = getFooterContent(selectedLanguage.code);
  const introLinks = heroContent.profiles.filter((profile) => profile.href);
  const activeProfile =
    heroContent.profiles.find((profile) => profile.id === selectedId) ?? heroContent.profiles[0];
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const languageMenuRef = useRef(null);

  useEffect(() => {
    const section = experienceRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExperienceVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = educationRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsEducationVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = isLightTheme ? 'light' : 'dark';
  }, [isLightTheme]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setIsLanguageMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main className="app-shell">
      <Navbar
        content={navbarContent}
        isLightTheme={isLightTheme}
        isLanguageMenuOpen={isLanguageMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        selectedLanguage={selectedLanguage}
        languageMenuRef={languageMenuRef}
        languagesMenu={languagesMenu}
        onToggleTheme={() => setIsLightTheme((current) => !current)}
        onToggleLanguageMenu={() => setIsLanguageMenuOpen((current) => !current)}
        onToggleMobileMenu={() => setIsMobileMenuOpen((current) => !current)}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
        onSelectLanguage={(language) => {
          setSelectedLanguage(language);
          setIsLanguageMenuOpen(false);
        }}
      />

      <PortfolioHero
        activeProfile={activeProfile}
        content={heroContent}
        selectedId={selectedId}
        onSelectProfile={setSelectedId}
      />

      <SpecialtiesSection content={specialtiesContent} />
      <CertificationsSection content={certificationsContent} />
      <ExperienceSection
        content={experienceContent}
        experienceRef={experienceRef}
        isVisible={isExperienceVisible}
      />
      <EducationSection
        content={educationContent}
        educationRef={educationRef}
        isVisible={isEducationVisible}
      />
      <LanguagesSection content={languagesContent} />
      <ProjectsSection content={projectsContent} />
      <PersonalProjectsSection content={personalProjectsContent} />
      <CoursesSection content={coursesContent} />
      <FooterSection
        footer={footerContent.footer}
        hobbies={footerContent.hobbies}
        introLinks={introLinks}
        onSelectProfile={setSelectedId}
      />
      <ScrollTopButton onClick={handleScrollToTop} />
    </main>
  );
}
