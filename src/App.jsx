import { useEffect, useRef, useState } from 'react';
import Navbar from './componentes/Navbar';
import PortfolioHero, {
  getPortfolioHeroContent
} from './componentes/PortfolioHero';
import SpecialtiesSection, { getSpecialtiesContent } from './componentes/SpecialtiesSection';
import CertificationsSection, { getCertificationsContent } from './componentes/CertificationsSection';
import ExperienceSection, { getExperienceContent } from './componentes/ExperienceSection';
import EducationSection, { getEducationContent } from './componentes/EducationSection';
import LanguagesSection, { getLanguagesContent } from './componentes/LanguagesSection';
import ProjectsSection, { getProjectsContent } from './componentes/ProjectsSection';
import PersonalProjectsSection, { getPersonalProjectsContent } from './componentes/PersonalProjectsSection';
import CoursesSection, { getCoursesContent } from './componentes/CoursesSection';
import FooterSection, { getFooterContent } from './componentes/FooterSection';
import ResumePreviewPage from './componentes/ResumePreviewPage';
import ScrollTopButton from './componentes/ScrollTopButton';
import { getNavbarContent, languagesMenu } from './componentes/Navbar';

function normalizeHash(hash) {
  if (!hash) {
    return '';
  }

  const decodedHash = decodeURIComponent(hash);
  const normalizedValue = decodedHash
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');

  return normalizedValue.startsWith('#') ? normalizedValue : `#${normalizedValue}`;
}

function ResumePreviewApp() {
  const searchParams = new URLSearchParams(window.location.search);
  const languageCode = searchParams.get('lang') === 'EN' ? 'EN' : 'PT';
  const mode = searchParams.get('mode') === 'custom' ? 'custom' : 'complete';
  const sections = (searchParams.get('sections') ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  const options = (searchParams.get('options') ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <ResumePreviewPage
      languageCode={languageCode}
      mode={mode}
      sections={sections}
      options={options}
      heroContent={getPortfolioHeroContent(languageCode)}
      specialtiesContent={getSpecialtiesContent(languageCode)}
      certificationsContent={getCertificationsContent(languageCode)}
      experienceContent={getExperienceContent(languageCode)}
      educationContent={getEducationContent(languageCode)}
      languagesContent={getLanguagesContent(languageCode)}
      projectsContent={getProjectsContent(languageCode)}
      personalProjectsContent={getPersonalProjectsContent(languageCode)}
      coursesContent={getCoursesContent(languageCode)}
      footerContent={getFooterContent(languageCode)}
    />
  );
}

function PortfolioApp() {
  const [selectedId, setSelectedId] = useState('home');
  const [activeNavHref, setActiveNavHref] = useState('#inicio');
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isEducationVisible, setIsEducationVisible] = useState(false);
  const [experienceReplayToken, setExperienceReplayToken] = useState(0);
  const [educationReplayToken, setEducationReplayToken] = useState(0);
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
  const activeProfile =
    heroContent.profiles.find((profile) => profile.id === selectedId) ?? heroContent.profiles[0];
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const languageMenuRef = useRef(null);
  const navReplayTimeoutRef = useRef(null);

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

  useEffect(() => {
    const sectionIds = [
      '#inicio',
      '#especialidades',
      '#certificacoes',
      '#experiencia',
      '#formacao',
      '#idiomas',
      '#projetos',
      '#projetos-pessoais',
      '#cursos',
      '#hobbies',
      '#curriculo'
    ];

    const sections = sectionIds
      .map((href) => {
        const section = document.querySelector(href);
        return section ? { href, section } : null;
      })
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const initialHash = normalizeHash(window.location.hash);

    if (initialHash && initialHash !== window.location.hash) {
      window.history.replaceState(null, '', initialHash);
    }

    if (initialHash) {
      const initialSection = document.querySelector(initialHash);

      if (initialSection) {
        requestAnimationFrame(() => {
          initialSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }

    function updateActiveNav() {
      const normalizedHash = normalizeHash(window.location.hash);
      const scrollPosition = window.scrollY + 140;
      let currentSectionHref = sections[0].href;

      sections.forEach(({ href, section }) => {
        if (section.offsetTop <= scrollPosition) {
          currentSectionHref = href;
        }
      });

      if (normalizedHash && normalizedHash !== window.location.hash) {
        window.history.replaceState(null, '', normalizedHash);
      }

      const reachedPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (reachedPageBottom) {
        currentSectionHref = sections[sections.length - 1].href;
      }

      if (normalizedHash && sections.some(({ href }) => href === normalizedHash)) {
        currentSectionHref = normalizedHash;
      }

      setActiveNavHref(currentSectionHref);
    }

    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav, { passive: true });
    window.addEventListener('resize', updateActiveNav);
    window.addEventListener('hashchange', updateActiveNav);

    return () => {
      window.removeEventListener('scroll', updateActiveNav);
      window.removeEventListener('resize', updateActiveNav);
      window.removeEventListener('hashchange', updateActiveNav);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (navReplayTimeoutRef.current) {
        window.clearTimeout(navReplayTimeoutRef.current);
      }
    };
  }, []);

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleSelectNavItem(href) {
    const normalizedHref = normalizeHash(href);
    const targetSection = document.querySelector(normalizedHref);

    if (!targetSection) {
      return;
    }

    if (navReplayTimeoutRef.current) {
      window.clearTimeout(navReplayTimeoutRef.current);
    }

    window.history.pushState(null, '', normalizedHref);
    setActiveNavHref(normalizedHref);

    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    navReplayTimeoutRef.current = window.setTimeout(() => {
      if (normalizedHref === '#experiencia') {
        setExperienceReplayToken((current) => current + 1);
      }

      if (normalizedHref === '#formacao') {
        setEducationReplayToken((current) => current + 1);
      }
    }, 420);
  }

  return (
    <main className="app-shell">
      <Navbar
        content={navbarContent}
        isLightTheme={isLightTheme}
        isLanguageMenuOpen={isLanguageMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        selectedLanguage={selectedLanguage}
        activeNavHref={activeNavHref}
        languageMenuRef={languageMenuRef}
        languagesMenu={languagesMenu}
        onToggleTheme={() => setIsLightTheme((current) => !current)}
        onToggleLanguageMenu={() => setIsLanguageMenuOpen((current) => !current)}
        onToggleMobileMenu={() => setIsMobileMenuOpen((current) => !current)}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
        onSelectNavItem={handleSelectNavItem}
        onSelectLanguage={(language) => {
          setSelectedLanguage(language);
          setIsLanguageMenuOpen(false);
        }}
      />

      <PortfolioHero
        languageCode={selectedLanguage.code}
        content={heroContent}
      />

      <SpecialtiesSection content={specialtiesContent} />
      <CertificationsSection content={certificationsContent} />
      <ExperienceSection
        content={experienceContent}
        experienceRef={experienceRef}
        isVisible={isExperienceVisible}
        isActive={activeNavHref === '#experiencia'}
        replayToken={experienceReplayToken}
      />
      <EducationSection
        content={educationContent}
        educationRef={educationRef}
        isVisible={isEducationVisible}
        isActive={activeNavHref === '#formacao'}
        replayToken={educationReplayToken}
      />
      <LanguagesSection content={languagesContent} />
      <ProjectsSection content={projectsContent} />
      <PersonalProjectsSection content={personalProjectsContent} />
      <CoursesSection content={coursesContent} />
      <FooterSection
        footer={footerContent.footer}
        hobbies={footerContent.hobbies}
        socialContent={heroContent}
        activeProfile={activeProfile}
        selectedId={selectedId}
        onSelectProfile={setSelectedId}
      />
      <ScrollTopButton onClick={handleScrollToTop} />
    </main>
  );
}

export default function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const isResumePreview = searchParams.get('resumePreview') === '1';

  return isResumePreview ? <ResumePreviewApp /> : <PortfolioApp />;
}
