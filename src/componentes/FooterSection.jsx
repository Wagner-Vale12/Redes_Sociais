const footerContent = {
  PT: {
    footer: {
      hobbiesTitle: 'Hobbies',
      resumeTitle: 'Download do Curriculo',
      resumeButtonLabel: 'Opcoes e geracao do PDF',
      pdfLabel: 'PDF'
    },
    hobbies: [
      'Musica e shows',
      'Series',
      'Filmes',
      'Futebol',
      'Futebol americano',
      'Formula 1',
      'Games retro',
      'Tecnologia',
      'Pratica de esportes',
      'Cafe',
      'Colecoes',
      'Familia e amigos'
    ]
  },
  EN: {
    footer: {
      hobbiesTitle: 'Hobbies',
      resumeTitle: 'Resume Download',
      resumeButtonLabel: 'PDF options and generation',
      pdfLabel: 'PDF'
    },
    hobbies: [
      'Music and concerts',
      'Series',
      'Movies',
      'Soccer',
      'American football',
      'Formula 1',
      'Retro games',
      'Technology',
      'Sports practice',
      'Coffee',
      'Collections',
      'Family and friends'
    ]
  }
};

export function getFooterContent(languageCode) {
  return footerContent[languageCode] ?? footerContent.PT;
}

export default function FooterSection({ footer, hobbies, introLinks, onSelectProfile }) {
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

        <button type="button" className="resume-button">
          <span className="resume-button-icon" aria-hidden="true">
            {footer.pdfLabel}
          </span>
          <span>{footer.resumeButtonLabel}</span>
          <span className="resume-button-arrow" aria-hidden="true">
            ˅
          </span>
        </button>

        <div className="footer-socials" aria-label="Redes sociais">
          {introLinks.map((profile) => (
            <a
              key={profile.id}
              className="footer-social-link"
              href={profile.href}
              target="_blank"
              rel="noreferrer"
              aria-label={profile.label}
              title={profile.label}
              onMouseEnter={() => onSelectProfile(profile.id)}
              onFocus={() => onSelectProfile(profile.id)}
            >
              <img src={profile.icon} alt="" />
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
}
