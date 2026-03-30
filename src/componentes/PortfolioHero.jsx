import AssistantChatWidget from './AssistantChatWidget';

const portfolioHeroContent = {
  PT: {
    hero: {
      name: 'Wagner',
      role: 'Full Stack Developer | React | Next.js | Node.js | AI & LLMs | Scalable Systems',
      socialHeading: 'Conecte-se comigo',
      assistantTitle: 'Fale com meu assistente',
      assistantGreeting: 'Olá! Como posso te ajudar?',
      assistantInputPlaceholder: 'Escreva sua pergunta aqui',
      assistantBotName: 'Assistente',
      assistantExpandLabel: 'Expandir',
      assistantEditLabel: 'Limpar',
      assistantCloseLabel: 'Fechar',
      assistantClearLabel: 'Clear Chat',
      assistantClearTitle: 'Clear Chat History',
      assistantClearDescription: 'Are you sure you want to clear all chat history?',
      assistantCancel: 'Cancel',
      assistantConfirm: 'Clear',
      assistantEmptyState: 'Envie uma pergunta para iniciar a conversa.',
      assistantLoadingText: 'Wagner está respondendo...',
      assistantErrorText: 'Nao consegui responder agora. Tente novamente em instantes.',
      intro: [
        'Desenvolvedor Full Stack, com experiência na construção de aplicações web escaláveis e desenvolvimento de plataformas baseadas em Inteligência Artificial. Atuação com foco em front-end moderno utilizando React, Next.js e Vue.js, aliada à integração de APIs e serviços backend em Node.js.',

'Experiência no desenvolvimento de sistemas que utilizam Large Language Models (LLMs), automação de workflows e integração entre serviços, contribuindo para a criação de soluções inteligentes e orientadas a dados.',

'Atuação em ambientes com arquiteturas de microservices, sistemas distribuídos e processamento orientado a eventos, participando da construção de aplicações preparadas para alta escalabilidade, performance e evolução contínua.',

'Vivência em:',
'• Desenvolvimento de interfaces escaláveis e responsivas',
'• Integração de APIs e serviços backend',
'• Automação de processos com IA',
'• Arquitetura de sistemas distribuídos',
'• Observabilidade e monitoramento de aplicações',
'Interesse em oportunidades como Full Stack Developer, com foco em desenvolvimento de sistemas escaláveis, aplicações com IA e soluções que envolvam automação e alta performance.',

'Aberto a conexões e trocas sobre desenvolvimento, arquitetura de sistemas e Inteligência Artificial.',
'📩 Contato: wagner6528@gmail.com'
      ]
    },
    profiles: [
      {
        id: 'home',
        label: 'Início',
        title: 'Abertura do portfólio',
        icon: '/imagens/logo-home.jpg',
        preview: '/imagens/tela-home.jpg',
        href: '',
        cta: ''
      },
      {
        id: 'github',
        label: 'GitHub',
        title: 'Projetos e código',
        icon: '/imagens/logo-github.jpg',
        preview: '/imagens/github.jpg',
        href: 'https://github.com/Wagner-Vale12',
        cta: 'Visitar GitHub'
      },
      {
        id: 'instagram',
        label: 'Instagram',
        title: 'Conteúdo e rotina',
        icon: '/imagens/logo-instagram.jpg',
        preview: '/imagens/instagram.jpg',
        href: 'https://www.instagram.com/wagner12jesus/',
        cta: 'Abrir Instagram'
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        title: 'Carreira e conexões',
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
      role: 'Full Stack Developer | React | Next.js | Node.js | AI & LLMs | Scalable Systems',
      socialHeading: 'Connect with me',
      assistantTitle: 'Talk to my assistant',
      assistantGreeting: 'Hi there! How can I help?',
      assistantInputPlaceholder: 'Type your question here',
      assistantBotName: 'Assistant',
      assistantExpandLabel: 'Expand',
      assistantEditLabel: 'To Clean',
      assistantCloseLabel: 'Close',
      assistantClearLabel: 'Clear Chat',
      assistantClearTitle: 'Clear Chat History',
      assistantClearDescription: 'Are you sure you want to clear all chat history?',
      assistantCancel: 'Cancel',
      assistantConfirm: 'Clear',
      assistantEmptyState: 'Send a question to start the conversation.',
      assistantLoadingText: 'Thinking...',
      assistantErrorText: 'I could not answer right now. Please try again in a moment.',
      intro: [
        'Full Stack Developer with experience building scalable web applications and developing Artificial Intelligence-based platforms. Focused on modern front-end development using React, Next.js, and Vue.js, combined with API integration and backend services in Node.js.',
        'Experience developing systems that use Large Language Models (LLMs), workflow automation, and service integrations, contributing to the creation of intelligent, data-driven solutions.',
        'Background working in environments with microservices architectures, distributed systems, and event-driven processing, contributing to applications designed for high scalability, performance, and continuous evolution.',
        'Experience in:',
        '• Scalable and responsive interface development',
        '• API and backend service integration',
        '• AI process automation',
        '• Distributed systems architecture',
        '• Application observability and monitoring',
        'Interested in opportunities as a Full Stack Developer, focused on scalable systems, AI applications, and solutions involving automation and high performance.',
        'Open to connecting and exchanging ideas about development, systems architecture, and Artificial Intelligence.',
        '📩 Contact: wagner6528@gmail.com'
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
        title: 'Content and daily routine',
        icon: '/imagens/logo-instagram.jpg',
        preview: '/imagens/instagram.jpg',
        href: 'https://www.instagram.com/wagner12jesus/',
        cta: 'Open Instagram'
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

export function SocialShowcase({ activeProfile, content, selectedId, onSelectProfile }) {
  const socialNavLabel =
    content.hero.socialHeading === 'Follow my social networks'
      ? 'Social links'
      : 'Redes sociais';

  return (
    <section className="portfolio-layout social-showcase">
      <div className="phone-preview-block">
        <p className="phone-preview-heading">{content.hero.socialHeading}</p>

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
      </div>

      <nav className="social-nav" aria-label={socialNavLabel}>
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
  );
}

export default function PortfolioHero({ content, languageCode = 'PT' }) {
  return (
    <>
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
      </section>
      <AssistantChatWidget content={content.hero} languageCode={languageCode} />
    </>
  );
}
