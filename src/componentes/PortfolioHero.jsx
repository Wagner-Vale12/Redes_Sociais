import AssistantChatWidget from "./AssistantChatWidget";

const portfolioHeroContent = {
  PT: {
    hero: {
      name: "Wagner",
      role: "Software Engineer | Backend & Full Stack Development | .NET | Node.js | AI Automation | Distributed Systems",
      socialHeading: "Conecte-se comigo",
      assistantTitle: "Fale com meu assistente",
      assistantGreeting: "Olá! Como posso te ajudar?",
      assistantInputPlaceholder: "Escreva sua pergunta aqui",
      assistantBotName: "Assistente",
      assistantExpandLabel: "Expandir",
      assistantEditLabel: "Limpar",
      assistantCloseLabel: "Fechar",
      assistantClearLabel: "Clear Chat",
      assistantClearTitle: "Clear Chat History",
      assistantClearDescription:
        "Are you sure you want to clear all chat history?",
      assistantCancel: "Cancel",
      assistantConfirm: "Clear",
      assistantEmptyState: "Envie uma pergunta para iniciar a conversa.",
      assistantLoadingText: "Wagner está respondendo...",
      assistantErrorText:
        "Nao consegui responder agora. Tente novamente em instantes.",
      intro: [
        "Software Engineer com experiência no desenvolvimento de aplicações web, APIs, microsserviços e soluções escaláveis utilizando .NET, Node.js, React e tecnologias cloud. Ao longo da minha trajetória, atuei em projetos de engenharia de software, sustentação de ambientes produtivos, evolução de plataformas digitais e automação de processos, contribuindo tanto no backend quanto no frontend.",
        "Essa visão full stack me permitiu atuar de forma abrangente na resolução de problemas, reduzindo tempo de resposta, aumentando a eficiência operacional e apoiando diferentes áreas do negócio. Na Future Secure AI, participei do desenvolvimento de soluções voltadas à Inteligência Artificial e automação, incluindo a implementação de mecanismos de versionamento de agentes de IA.",
        "Implementei controles de versionamento de agentes IA permitindo maior controle sobre publicações, rollback seguro e redução de riscos operacionais durante evoluções da plataforma. Também atuei no atendimento de demandas críticas de sustentação, contribuindo para o cumprimento consistente dos SLAs estabelecidos e garantindo a estabilidade dos serviços em produção.",
        "Experiência com:",
        "• APIs REST e Arquitetura de Microsserviços",
        "• Docker, Kubernetes e Tecnologias Cloud",
        "• Bancos de dados relacionais e não relacionais",
        "• Observabilidade, monitoramento e integração entre sistemas",
        "• SOLID, Clean Architecture, testes automatizados e CI/CD",
        "Tenho grande interesse em desafios relacionados a sistemas distribuídos, cloud computing, automação inteligente e desenvolvimento de produtos digitais escaláveis, buscando continuamente evoluir minha atuação técnica e ampliar minha contribuição em ambientes de alta performance.",
        "Aberto a conexões e trocas sobre desenvolvimento de software, arquitetura de sistemas, IA e tecnologias escaláveis.",
        "📩 Contato: wagner6528@gmail.com",
      ],
    },
    profiles: [
      {
        id: "home",
        label: "Início",
        title: "Abertura do portfólio",
        icon: "/imagens/logo-home.jpg",
        preview: "/imagens/tela-home.jpg",
        href: "",
        cta: "",
      },
      {
        id: "github",
        label: "GitHub",
        title: "Projetos e código",
        icon: "/imagens/logo-github.jpg",
        preview: "/imagens/github.jpg",
        href: "https://github.com/Wagner-Vale12",
        cta: "Visitar GitHub",
      },
      {
        id: "instagram",
        label: "Instagram",
        title: "Conteúdo e rotina",
        icon: "/imagens/logo-instagram.jpg",
        preview: "/imagens/instagram.jpg",
        href: "https://www.instagram.com/wagner12jesus/",
        cta: "Abrir Instagram",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        title: "Carreira e conexões",
        icon: "/imagens/logo-linkedin.png",
        preview: "/imagens/tela-linkedin.jpg",
        href: "https://www.linkedin.com/in/wagner12",
        cta: "Abrir LinkedIn",
      },
    ],
  },
  EN: {
    hero: {
      name: "Wagner",
      role: "Software Engineer | Backend & Full Stack Development | .NET | Node.js | AI Automation | Distributed Systems",
      socialHeading: "Connect with me",
      assistantTitle: "Talk to my assistant",
      assistantGreeting: "Hi there! How can I help?",
      assistantInputPlaceholder: "Type your question here",
      assistantBotName: "Assistant",
      assistantExpandLabel: "Expand",
      assistantEditLabel: "To Clean",
      assistantCloseLabel: "Close",
      assistantClearLabel: "Clear Chat",
      assistantClearTitle: "Clear Chat History",
      assistantClearDescription:
        "Are you sure you want to clear all chat history?",
      assistantCancel: "Cancel",
      assistantConfirm: "Clear",
      assistantEmptyState: "Send a question to start the conversation.",
      assistantLoadingText: "Thinking...",
      assistantErrorText:
        "I could not answer right now. Please try again in a moment.",
      intro: [
        "Software Engineer with experience developing web applications, APIs, microservices, and scalable solutions using .NET, Node.js, React, and cloud technologies. Throughout my career, I have worked on software engineering projects, supporting production environments, evolving digital platforms, and automating processes, contributing to both backend and frontend development.",
        "This full-stack perspective enabled me to work comprehensively in problem-solving, reducing response times, increasing operational efficiency, and supporting different business areas. At Future Secure AI, I participated in developing solutions focused on Artificial Intelligence and automation, including implementing AI agent versioning mechanisms.",
        "I implemented version control mechanisms for AI agents enabling greater control over publications, safe rollback, and reducing operational risks during platform evolution. I also worked on critical support demands, contributing to consistent SLA compliance and ensuring production service stability.",
        "Experience with:",
        "• REST APIs and Microservices Architecture",
        "• Docker, Kubernetes, and Cloud Technologies",
        "• Relational and non-relational databases",
        "• Observability, monitoring, and system integration",
        "• SOLID, Clean Architecture, automated testing, and CI/CD",
        "I have a strong interest in challenges related to distributed systems, cloud computing, intelligent automation, and developing scalable digital products, continuously seeking to evolve my technical expertise and expand my contribution in high-performance environments.",
        "Open to connecting and exchanging ideas about software development, systems architecture, AI, and scalable technologies.",
        "📩 Contact: wagner6528@gmail.com",
      ],
    },
    profiles: [
      {
        id: "home",
        label: "Home",
        title: "Portfolio opening",
        icon: "/imagens/logo-home.jpg",
        preview: "/imagens/tela-home.jpg",
        href: "",
        cta: "",
      },
      {
        id: "github",
        label: "GitHub",
        title: "Projects and code",
        icon: "/imagens/logo-github.jpg",
        preview: "/imagens/github.jpg",
        href: "https://github.com/Wagner-Vale12",
        cta: "Visit GitHub",
      },
      {
        id: "instagram",
        label: "Instagram",
        title: "Content and daily routine",
        icon: "/imagens/logo-instagram.jpg",
        preview: "/imagens/instagram.jpg",
        href: "https://www.instagram.com/wagner12jesus/",
        cta: "Open Instagram",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        title: "Career and connections",
        icon: "/imagens/logo-linkedin.png",
        preview: "/imagens/tela-linkedin.jpg",
        href: "https://www.linkedin.com/in/wagner12",
        cta: "Open LinkedIn",
      },
    ],
  },
};

export function getPortfolioHeroContent(languageCode) {
  return portfolioHeroContent[languageCode] ?? portfolioHeroContent.PT;
}

export function SocialShowcase({
  activeProfile,
  content,
  selectedId,
  onSelectProfile,
}) {
  const socialNavLabel =
    content.hero.socialHeading === "Follow my social networks"
      ? "Social links"
      : "Redes sociais";

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
            className={`social-button ${profile.id === selectedId ? "is-active" : ""}`}
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

export default function PortfolioHero({ content, languageCode = "PT" }) {
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
