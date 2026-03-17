import { useState } from 'react';

const profiles = [
  {
    id: 'home',
    name: 'Home',
    icon: '/imagens/logo-home.jpg',
    preview: '/imagens/tela-home.jpg',
    href: '',
    cta: ''
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: '/imagens/logo-github.jpg',
    preview: '/imagens/github.jpg',
    href: 'https://github.com/Wagner-Vale12',
    cta: 'Acesse meu GitHub'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: '/imagens/logo-instagram.jpg',
    preview: '/imagens/instagram.jpg',
    href: 'https://www.instagram.com/wagner12jesus/',
    cta: 'Veja meu Instagram'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: '/imagens/logo-twitter.jpg',
    preview: '/imagens/twitter.jpg',
    href: 'https://twitter.com/Wagner5422/',
    cta: 'Abrir perfil no Twitter'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: '/imagens/logo-linkedin.png',
    preview: '/imagens/tela-linkedin.jpg',
    href: 'https://www.linkedin.com/in/wagner12',
    cta: 'Abrir perfil no LinkedIn'
  }
];

export default function App() {
  const [selectedId, setSelectedId] = useState('home');
  const activeProfile = profiles.find((profile) => profile.id === selectedId) ?? profiles[0];

  return (
    <main className="app-shell">
      <header className="hero-copy">
        <h1>Conecte-se comigo</h1>
        <span>Desenvolvedor de Software Pleno | Criando aplicações modernas e soluções com IA</span>
      </header>

      <section className="portfolio-layout">
        <div className="phone-frame" aria-live="polite">
          <div className="phone-screen">
            <div key={activeProfile.id} className="screen-content">
              <img
                className="screen-image"
                src={activeProfile.preview}
                alt={`Preview da tela ${activeProfile.name}`}
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

        <nav className="social-nav" aria-label="Redes sociais">
          {profiles.map((profile) => (
            <button
              key={profile.id}
              type="button"
              className={`social-button ${profile.id === selectedId ? 'is-active' : ''}`}
              onClick={() => setSelectedId(profile.id)}
              aria-pressed={profile.id === selectedId}
            >
              <img src={profile.icon} alt="" />
              <span>{profile.name}</span>
            </button>
          ))}
        </nav>
      </section>
    </main>
  );
}
