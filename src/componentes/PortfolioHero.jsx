const portfolioHeroContent = {
  PT: {
    hero: {
      name: 'Wagner',
      role: 'Desenvolvedor | Portfolio pessoal',
      intro: [
        'Adicione aqui sua apresentacao principal. Esse bloco foi montado para ficar no mesmo estilo da imagem que voce enviou, com foco total na abertura do portfolio.',
        'Depois voce pode trocar este texto manualmente com sua historia, experiencia, tecnologias e os destaques que quiser mostrar logo na primeira tela.'
      ]
    },
    profiles: [
      {
        id: 'home',
        label: 'Inicio',
        title: 'Abertura do portfolio',
        icon: '/imagens/logo-home.jpg',
        preview: '/imagens/tela-home.jpg',
        href: '',
        cta: ''
      },
      {
        id: 'github',
        label: 'GitHub',
        title: 'Projetos e codigo',
        icon: '/imagens/logo-github.jpg',
        preview: '/imagens/github.jpg',
        href: 'https://github.com/Wagner-Vale12',
        cta: 'Visitar GitHub'
      },
      {
        id: 'instagram',
        label: 'Instagram',
        title: 'Conteudo e rotina',
        icon: '/imagens/logo-instagram.jpg',
        preview: '/imagens/instagram.jpg',
        href: 'https://www.instagram.com/wagner12jesus/',
        cta: 'Abrir Instagram'
      },
      {
        id: 'twitter',
        label: 'Twitter',
        title: 'Atualizacoes e ideias',
        icon: '/imagens/logo-twitter.jpg',
        preview: '/imagens/twitter.jpg',
        href: 'https://twitter.com/Wagner5422/',
        cta: 'Abrir Twitter'
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        title: 'Carreira e conexoes',
        icon: '/imagens/logo-linkedin.png',
        preview: '/imagens/tela-linkedin.jpg',
        href: 'https://www.linkedin.com/in/wagner12',
        cta: 'Abrir LinkedIn'
      }
    ]
  },
  EN: {
    hero: {
      name: 'Wagner',
      role: 'Developer | Personal portfolio',
      intro: [
        'Add your main introduction here. This block was designed to match the style of the reference image, with full focus on the portfolio opening.',
        'Later you can replace this text manually with your story, experience, technologies, and the highlights you want to show on the first screen.'
      ]
    },
    profiles: [
      {
        id: 'home',
        label: 'Home',
        title: 'Portfolio opening',
        icon: '/imagens/logo-home.jpg',
        preview: '/imagens/tela-home.jpg',
        href: '',
        cta: ''
      },
      {
        id: 'github',
        label: 'GitHub',
        title: 'Projects and code',
        icon: '/imagens/logo-github.jpg',
        preview: '/imagens/github.jpg',
        href: 'https://github.com/Wagner-Vale12',
        cta: 'Visit GitHub'
      },
      {
        id: 'instagram',
        label: 'Instagram',
        title: 'Content and routine',
        icon: '/imagens/logo-instagram.jpg',
        preview: '/imagens/instagram.jpg',
        href: 'https://www.instagram.com/wagner12jesus/',
        cta: 'Open Instagram'
      },
      {
        id: 'twitter',
        label: 'Twitter',
        title: 'Updates and ideas',
        icon: '/imagens/logo-twitter.jpg',
        preview: '/imagens/twitter.jpg',
        href: 'https://twitter.com/Wagner5422/',
        cta: 'Open Twitter'
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        title: 'Career and connections',
        icon: '/imagens/logo-linkedin.png',
        preview: '/imagens/tela-linkedin.jpg',
        href: 'https://www.linkedin.com/in/wagner12',
        cta: 'Open LinkedIn'
      }
    ]
  }
};

export function getPortfolioHeroContent(languageCode) {
  return portfolioHeroContent[languageCode] ?? portfolioHeroContent.PT;
}

export default function PortfolioHero({
  activeProfile,
  content,
  selectedId,
  onSelectProfile
}) {
  return (
    <section id="inicio" className="hero-section">
      <section className="intro-panel">
        <img
          className="profile-avatar"
          src="https://github.com/Wagner-Vale12.png"
          alt="Foto de perfil de Wagner"
        />

        <h1>{content.hero.name}</h1>
        <p className="hero-role">{content.hero.role}</p>

        <div className="intro-description">
          {content.hero.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="portfolio-layout">
        <div className="phone-frame" aria-live="polite">
          <div className="phone-screen">
            <div key={activeProfile.id} className="screen-content">
              <img
                className="screen-image"
                src={activeProfile.preview}
                alt={`Preview da tela ${activeProfile.label}`}
              />

              {activeProfile.href ? (
                <a
                  className="screen-link"
                  href={activeProfile.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{activeProfile.cta}</span>
                  <span className="screen-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <nav className="social-nav" aria-label="Secoes do portfolio">
          {content.profiles.map((profile) => (
            <button
              key={profile.id}
              type="button"
              className={`social-button ${profile.id === selectedId ? 'is-active' : ''}`}
              onClick={() => onSelectProfile(profile.id)}
              aria-pressed={profile.id === selectedId}
            >
              <img src={profile.icon} alt="" />
              <span>{profile.label}</span>
            </button>
          ))}
        </nav>
      </section>
    </section>
  );
}
