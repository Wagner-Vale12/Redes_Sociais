export const languagesMenu = [
  { code: 'PT', label: 'PT', flagCode: 'br' },
  { code: 'EN', label: 'EN', flagCode: 'us' }
];

const navbarContent = {
  PT: {
     brand: 'Portfólio - Wagner',
    navItems: [
      { href: '#inicio', label: 'Inicio' },
      { href: '#especialidades', label: 'Especialidades' },
      { href: '#certificacoes', label: 'Certificações' },
      { href: '#experiencia', label: 'Experiência' },
      { href: '#formacao', label: 'Formação' },
      { href: '#idiomas', label: 'Idiomas' },
      { href: '#projetos', label: 'Projetos' },
      { href: '#projetos-pessoais', label: 'Projetos Pessoais' },
      { href: '#cursos', label: 'Cursos' },
      { href: '#hobbies', label: 'Hobbies' },
      { href: '#curriculo', label: 'Curriculo' }
    ]
  },
  EN: {
    brand: 'Portfolio - Wagner',
    navItems: [
      { href: '#inicio', label: 'Home' },
      { href: '#especialidades', label: 'Specialties' },
      { href: '#certificacoes', label: 'Certifications' },
      { href: '#experiencia', label: 'Experience' },
      { href: '#formacao', label: 'Education' },
      { href: '#idiomas', label: 'Languages' },
      { href: '#projetos', label: 'Projects' },
      { href: '#projetos-pessoais', label: 'Personal Projects' },
      { href: '#cursos', label: 'Courses' },
      { href: '#hobbies', label: 'Hobbies' },
      { href: '#curriculo', label: 'Resume' }
    ]
  }
};

export function getNavbarContent(languageCode) {
  return navbarContent[languageCode] ?? navbarContent.PT;
}

export default function Navbar({
  isLightTheme,
  isLanguageMenuOpen,
  isMobileMenuOpen,
  selectedLanguage,
  activeNavHref,
  languageMenuRef,
  content,
  languagesMenu,
  onToggleTheme,
  onToggleLanguageMenu,
  onToggleMobileMenu,
  onCloseMobileMenu,
  onSelectNavItem,
  onSelectLanguage
}) {
  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <div className="top-nav-controls">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={isLightTheme ? 'Ativar tema escuro' : 'Ativar tema claro'}
          >
            <span aria-hidden="true">{isLightTheme ? '☾' : '⚙'}</span>
          </button>

          <div ref={languageMenuRef} className="language-switcher">
            <button
              type="button"
              className={`language-trigger ${isLanguageMenuOpen ? 'is-open' : ''}`}
              onClick={onToggleLanguageMenu}
              aria-haspopup="menu"
              aria-expanded={isLanguageMenuOpen}
            >
              <span
                className={`language-flag-inline fi fi-${selectedLanguage.flagCode}`}
                aria-hidden="true"
              />
              <span>{selectedLanguage.label}</span>
              <span className="language-caret" aria-hidden="true">
                ▼
              </span>
            </button>

            {isLanguageMenuOpen ? (
              <div className="language-dropdown" role="menu" aria-label="Idiomas">
                {languagesMenu.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    className={`language-option ${
                      language.code === selectedLanguage.code ? 'is-active' : ''
                    }`}
                    onClick={() => onSelectLanguage(language)}
                  >
                    <span
                      className={`language-flag-inline fi fi-${language.flagCode}`}
                      aria-hidden="true"
                    />
                    <span>{language.label}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <span className="top-nav-brand">{content.brand}</span>

        <button
          type="button"
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
          onClick={onToggleMobileMenu}
          aria-label="Abrir navegacao"
          aria-expanded={isMobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="top-nav-links" aria-label="Navegacao principal">
          {content.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.href === activeNavHref ? 'is-active' : ''}
              onClick={(event) => {
                event.preventDefault();
                onSelectNavItem(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-menu-links" aria-label="Navegacao mobile">
          {content.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.href === activeNavHref ? 'is-active' : ''}
              onClick={(event) => {
                event.preventDefault();
                onSelectNavItem(item.href);
                onCloseMobileMenu();
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
