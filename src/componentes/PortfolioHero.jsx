import AssistantChatWidget from './AssistantChatWidget';

const portfolioHeroContent = {
  PT: {
    hero: {
      name: 'Wagner',
      role: 'Software Engineer Pleno | React • Next.js • Node.js | AI & Automation',
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
        'Sou Desenvolvedor de Software com foco em desenvolvimento front-end e construção de interfaces escaláveis para plataformas de Inteligência Artificial. Atualmente atuo na Future Secure AI, onde trabalho no desenvolvimento e evolução de aplicações utilizando React, Next.js e Vue.js, implementando novas funcionalidades, melhorando a experiência do usuário e garantindo a qualidade e performance das aplicações.',
        'Minha atuação envolve também a integração com APIs e serviços em Node.js, além da participação no desenvolvimento de plataformas baseadas em Inteligência Artificial. Tenho experiência trabalhando com sistemas que utilizam Large Language Models (LLMs), automação de workflows e integrações entre serviços, contribuindo para a construção de soluções modernas e escaláveis.',
        'Ao longo da minha experiência, venho trabalhando em ambientes com arquiteturas baseadas em microservices, sistemas distribuídos e arquiteturas orientadas a eventos, participando do desenvolvimento de sistemas preparados para alta escalabilidade e evolução contínua.',
        'Sou graduado em Análise e Desenvolvimento de Sistemas pela UNINOVE (2021) e estou constantemente buscando evoluir minhas habilidades em desenvolvimento front-end, plataformas de IA, arquitetura de sistemas e construção de aplicações escaláveis. Tenho grande interesse em participar de projetos inovadores e colaborar com equipes que buscam resolver problemas complexos através da tecnologia.'
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
      role: 'Mid-Level Software Engineer | React • Next.js • Node.js | AI & Automation',
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
        'I am a Software Developer focused on front-end development and building scalable interfaces for Artificial Intelligence platforms. I currently work at Future Secure AI, where I contribute to the development and evolution of applications using React, Next.js, and Vue.js, implementing new features, improving user experience, and ensuring application quality and performance.',
        'My role also involves integrating APIs and services using Node.js, as well as participating in the development of AI-based platforms. I have experience working with systems that leverage Large Language Models (LLMs), workflow automation, and service integrations, contributing to the creation of modern and scalable solutions.',
        'Throughout my experience, I have worked in environments with microservices architectures, distributed systems, and event-driven architectures, contributing to the development of systems designed for high scalability and continuous evolution.',
        'I hold a degree in Systems Analysis and Development from UNINOVE (2021) and I am constantly seeking to improve my skills in front-end development, AI platforms, system architecture, and scalable application development. I am highly interested in participating in innovative projects and collaborating with teams that aim to solve complex problems through technology.'
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

export default function PortfolioHero({ content }) {
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
      <AssistantChatWidget content={content.hero} />
    </>
  );
}
