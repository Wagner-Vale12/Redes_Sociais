import { useMemo, useState } from 'react';
import { SocialShowcase } from './PortfolioHero';

const resumeDocumentPaths = {
  complete: {
    PT: '/curriculos/Curriculo_Wagner.pdf',
    EN: '/curriculos/Curriculo_Wagner_EN.pdf'
  },
  custom: {
    PT: '',
    EN: ''
  }
};

const footerContent = {
  PT: {
    footer: {
      hobbiesTitle: 'Hobbies',
      resumeTitle: 'Download do Currículo',
      resumeButtonLabel: 'Opções do currículo',
      pdfLabel: 'PDF',
      resumeLanguagesLabel: 'Idioma do documento',
      resumeModeLabel: 'Modo',
      resumePreviewLabel: 'Abrir currículo / pré-visualização',
      resumePreviewNote:
        'No modo Completo, o PDF abre direto em uma nova aba. No modo Personalizado, a pré-visualização é aberta para visualizar, baixar ou imprimir.',
      customSectionsLabel: 'Seções do currículo personalizado',
      customSectionsHint:
        'Nome, cargo, resumo, localização, LinkedIn e GitHub entram sempre no currículo personalizado.',
      customSectionsOptionsLabel: 'Opções extras das seções marcadas',
      customSectionsOptionsEmpty: 'Nenhuma opção extra disponível para as seções selecionadas.',
      customSectionsEmpty: 'Selecione pelo menos uma seção para abrir o currículo personalizado.',
      resumeModes: {
        complete: {
          title: 'Completo',
          description: 'Abre o PDF final completo que você deixou pronto.'
        },
        custom: {
          title: 'Personalizado',
          description: 'Monta uma versão ajustada para uma vaga ou objetivo específico.'
        }
      },
      customSections: {
        specialties: { title: 'Especialidades' },
        certifications: { title: 'Certificações' },
        experience: { title: 'Experiência' },
        education: { title: 'Formação' },
        languages: { title: 'Idiomas' },
        projects: { title: 'Projetos' },
        personalProjects: { title: 'Projetos Pessoais' },
        courses: { title: 'Cursos' },
        hobbies: { title: 'Hobbies' }
      },
      customOptions: {
        certificationsDescription: 'Mostrar descrição nas certificações',
        educationDescription: 'Mostrar texto descritivo na formação'
      }
    },
    hobbies: [
      'Futebol',
      'Basquete NBA',
      'Futebol americano',
      'Games retro',
      'Séries',
      'Filmes',
      'Música e shows',
      'Tecnologia',
      'Prática de esportes',
      'Café',
      'Família e amigos',
      'Gastronomia'
    ]
  },
  EN: {
    footer: {
      hobbiesTitle: 'Hobbies',
      resumeTitle: 'Resume Download',
      resumeButtonLabel: 'Resume options',
      pdfLabel: 'PDF',
      resumeLanguagesLabel: 'Document language',
      resumeModeLabel: 'Mode',
      resumePreviewLabel: 'Open resume / preview',
      resumePreviewNote:
        'In Complete mode, the final PDF opens directly in a new tab. In Custom mode, a preview opens so you can review, download, or print it.',
      customSectionsLabel: 'Sections in the custom resume',
      customSectionsHint:
        'Name, role, summary, location, LinkedIn, and GitHub are always included in the custom resume.',
      customSectionsOptionsLabel: 'Extra options for selected sections',
      customSectionsOptionsEmpty: 'There are no extra options available for the selected sections.',
      customSectionsEmpty: 'Select at least one section to open the custom resume.',
      resumeModes: {
        complete: {
          title: 'Complete',
          description: 'Opens the final complete PDF you already prepared.'
        },
        custom: {
          title: 'Custom',
          description: 'Builds a version tailored to a specific role or objective.'
        }
      },
      customSections: {
        specialties: { title: 'Specialties' },
        certifications: { title: 'Certifications' },
        experience: { title: 'Experience' },
        education: { title: 'Education' },
        languages: { title: 'Languages' },
        projects: { title: 'Projects' },
        personalProjects: { title: 'Personal Projects' },
        courses: { title: 'Courses' },
        hobbies: { title: 'Hobbies' }
      },
      customOptions: {
        certificationsDescription: 'Show descriptions in certifications',
        educationDescription: 'Show descriptive text in education'
      }
    },
    hobbies: [
      'Soccer',
      'NBA basketball',
      'American football',
      'Retro games',
      'TV series',
      'Movies',
      'Music and concerts',
      'Technology',
      'Sports practice',
      'Coffee',
      'Family and friends',
      'Gastronomy'
    ]
  }
};

const resumeLanguages = [
  { code: 'PT', label: 'PT', flagCode: 'br' },
  { code: 'EN', label: 'EN', flagCode: 'us' }
];
const defaultCustomSections = [
  'specialties',
  'certifications',
  'experience',
  'education',
  'languages',
  'projects',
  'personalProjects',
  'courses',
  'hobbies'
];
const defaultCustomOptions = {
  certificationsDescription: true,
  educationDescription: true
};

export function getFooterContent(languageCode) {
  return footerContent[languageCode] ?? footerContent.PT;
}

export default function FooterSection({
  footer,
  hobbies,
  socialContent,
  activeProfile,
  selectedId,
  onSelectProfile
}) {
  const [isResumeCardOpen, setIsResumeCardOpen] = useState(false);
  const [selectedResumeLanguage, setSelectedResumeLanguage] = useState('PT');
  const [selectedResumeMode, setSelectedResumeMode] = useState('complete');
  const [selectedCustomSections, setSelectedCustomSections] = useState(defaultCustomSections);
  const [selectedCustomOptions, setSelectedCustomOptions] = useState(defaultCustomOptions);

  const visibleCustomOptions = useMemo(() => {
    return Object.entries(footer.customOptions).filter(([optionKey]) => {
      if (optionKey === 'certificationsDescription') {
        return selectedCustomSections.includes('certifications');
      }

      if (optionKey === 'educationDescription') {
        return selectedCustomSections.includes('education');
      }

      return false;
    });
  }, [footer.customOptions, selectedCustomSections]);

  const selectedResumeUrl = useMemo(() => {
    return resumeDocumentPaths[selectedResumeMode]?.[selectedResumeLanguage] ?? '#';
  }, [selectedResumeLanguage, selectedResumeMode]);

  const hasCustomSectionsSelected = selectedCustomSections.length > 0;

  function handleToggleCustomSection(sectionKey) {
    setSelectedCustomSections((current) =>
      current.includes(sectionKey)
        ? current.filter((item) => item !== sectionKey)
        : [...current, sectionKey]
    );
  }

  function handleToggleCustomOption(optionKey) {
    setSelectedCustomOptions((current) => ({
      ...current,
      [optionKey]: !current[optionKey]
    }));
  }

  function handleOpenResume() {
    if (selectedResumeMode === 'custom' && !hasCustomSectionsSelected) {
      return;
    }

    if (selectedResumeMode === 'complete' && selectedResumeUrl && selectedResumeUrl !== '#') {
      window.open(selectedResumeUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    const previewUrl = new URL(window.location.href);
    previewUrl.searchParams.set('resumePreview', '1');
    previewUrl.searchParams.set('lang', selectedResumeLanguage);
    previewUrl.searchParams.set('mode', selectedResumeMode);
    previewUrl.searchParams.set('sections', selectedCustomSections.join(','));

    const enabledOptions = Object.entries(selectedCustomOptions)
      .filter(([, isEnabled]) => Boolean(isEnabled))
      .map(([optionKey]) => optionKey);

    previewUrl.searchParams.set('options', enabledOptions.join(','));
    window.open(previewUrl.toString(), '_blank', 'noopener,noreferrer');
  }

  return (
    <footer className="site-footer">
      <section id="hobbies" className="hobbies-section">
        <header className="section-heading">
          <span className="section-heading-icon" aria-hidden="true">
            ♡
          </span>
          <h2>{footer.hobbiesTitle}</h2>
        </header>

        <div className="hobbies-list">
          {hobbies.map((hobby) => (
            <span key={hobby} className="hobby-pill">
              {hobby}
            </span>
          ))}
        </div>
      </section>

      <section id="curriculo" className="resume-section">
        <header className="section-heading footer-heading">
          <span className="section-heading-icon" aria-hidden="true">
            ⎘
          </span>
          <h2>{footer.resumeTitle}</h2>
        </header>

        <button
          type="button"
          className={`resume-button ${isResumeCardOpen ? 'is-open' : ''}`}
          onClick={() => setIsResumeCardOpen((current) => !current)}
          aria-expanded={isResumeCardOpen}
          aria-controls="resume-options-panel"
        >
          <span className="resume-button-icon" aria-hidden="true">
            {footer.pdfLabel}
          </span>
          <span>{footer.resumeButtonLabel}</span>
          <span className="resume-button-arrow" aria-hidden="true">
            {isResumeCardOpen ? '⌃' : '⌄'}
          </span>
        </button>

        {isResumeCardOpen ? (
          <div id="resume-options-panel" className="resume-options-card">
            <div className="resume-options-group">
              <p className="resume-options-label">{footer.resumeLanguagesLabel}</p>
              <div className="resume-language-switch">
                {resumeLanguages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    className={`resume-chip ${
                      selectedResumeLanguage === language.code ? 'is-active' : ''
                    }`}
                    onClick={() => setSelectedResumeLanguage(language.code)}
                  >
                    <span
                      className={`language-flag-inline fi fi-${language.flagCode}`}
                      aria-hidden="true"
                    />
                    <span>{language.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="resume-options-group">
              <p className="resume-options-label">{footer.resumeModeLabel}</p>
              <div className="resume-mode-grid">
                {Object.entries(footer.resumeModes).map(([modeKey, mode]) => (
                  <button
                    key={modeKey}
                    type="button"
                    className={`resume-mode-card ${
                      selectedResumeMode === modeKey ? 'is-active' : ''
                    }`}
                    onClick={() => setSelectedResumeMode(modeKey)}
                  >
                    <strong>{mode.title}</strong>
                    <span>{mode.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedResumeMode === 'custom' ? (
              <div className="resume-options-group resume-custom-builder">
                <p className="resume-custom-fixed">{footer.customSectionsHint}</p>

                <p className="resume-options-label">{footer.customSectionsLabel}</p>
                <div className="resume-custom-checklist">
                  {Object.entries(footer.customSections).map(([sectionKey, section]) => {
                    const isSelected = selectedCustomSections.includes(sectionKey);

                    return (
                      <label key={sectionKey} className="resume-check-row">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleToggleCustomSection(sectionKey)}
                        />
                        <span>{section.title}</span>
                      </label>
                    );
                  })}
                </div>

                <div className="resume-custom-summary">
                  <p className="resume-options-label">{footer.customSectionsOptionsLabel}</p>

                  {visibleCustomOptions.length ? (
                    <div className="resume-custom-options-list">
                      {visibleCustomOptions.map(([optionKey, optionLabel]) => (
                        <label key={optionKey} className="resume-check-row">
                          <input
                            type="checkbox"
                            checked={Boolean(selectedCustomOptions[optionKey])}
                            onChange={() => handleToggleCustomOption(optionKey)}
                          />
                          <span>{optionLabel}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <p className="resume-custom-empty">{footer.customSectionsOptionsEmpty}</p>
                  )}
                </div>
              </div>
            ) : null}

            <p className="resume-preview-note">{footer.resumePreviewNote}</p>

            <button
              type="button"
              className="resume-preview-button"
              onClick={handleOpenResume}
              disabled={selectedResumeMode === 'custom' && !hasCustomSectionsSelected}
            >
              {footer.resumePreviewLabel}
            </button>
          </div>
        ) : null}

      </section>

      <section id="redes-sociais" className="footer-social-section">
        <SocialShowcase
          activeProfile={activeProfile}
          content={socialContent}
          selectedId={selectedId}
          onSelectProfile={onSelectProfile}
        />
      </section>
    </footer>
  );
}
