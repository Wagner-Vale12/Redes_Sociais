import { useState } from "react";

const experienceContent = {
  PT: {
    sectionTitle: "Experiência",
    experiences: [
      {
        id: "exp-1",
        company: "Future Secure AI",
        location: "São Paulo/SP",
        role: "Full Stack Developer | React | Next.js | AI Applications | LLMs | Scalable Systems",
        period: "Novembro 2024 - Março 2026",
        description:
          "Atuei como Full Stack Developer no desenvolvimento e evolução da interface principal de uma plataforma de Inteligência Artificial, com foco em performance, escalabilidade e experiência do usuário.",
        cta: "Ver mais",
        collapseLabel: "Ver menos",
        details: [
          "Atuei no desenvolvimento de uma plataforma de automação baseada em Inteligência Artificial, responsável pela execução de workflows inteligentes, integração de sistemas e orquestração de agentes de IA.",
          "Participei da construção de APIs, motores de execução e arquiteturas distribuídas voltadas para escalabilidade, alta disponibilidade e confiabilidade operacional.",
          "Integração de Large Language Models (LLMs) em processos automatizados, potencializando capacidades de automação inteligente.",
          "Implementação de mecanismos de versionamento e rollback de agentes de IA, permitindo que os próprios usuários restaurassem versões anteriores de forma segura e imediata, sem dependência do suporte técnico.",
          "Essa funcionalidade de versionamento reduziu o tempo de recuperação de incidentes de minutos ou horas para segundos, aumentando significativamente a confiabilidade das publicações em produção.",
          "Atuação na sustentação de ambientes produtivos, contribuindo para o cumprimento consistente de SLAs e resolução de incidentes críticos.",
          "Atuação full stack tanto no backend quanto no frontend, apoiando diferentes frentes de atendimento e desenvolvimento.",
          "Aceleração da entrega de soluções através da redução de dependências entre equipes e maior eficiência operacional.",
          "Evolução contínua da plataforma com foco em escalabilidade, performance e confiabilidade operacional.",
        ],
        technicalSkillsLabel: "Competências técnicas",
        technicalSkills: [
          "APIs REST e Microsserviços",
          "Arquitetura de Sistemas Distribuídos",
          "Large Language Models (LLMs)",
          "Automação e Orquestração",
          "Versionamento e Rollback",
          "React",
          "Node.js",
          "TypeScript",
          "Docker",
          "Kubernetes",
          "PostgreSQL",
          "Escalabilidade",
          "Alta Disponibilidade",
        ],

        behaviorSkillsLabel: "Competências comportamentais",
        behaviorSkills: [
          "Resolução de problemas críticos",
          "Pensamento sistêmico",
          "Ownership e responsabilidade",
          "Colaboração cross-funcional",
          "Análise técnica profunda",
          "Melhoria contínua",
          "Comunicação técnica clara",
          "Proatividade na sustentação",
        ],
      },
      {
        id: "exp-2",
        company: "ARENA CONSULTORIA",
        location: "São Paulo/SP",
        role: "Desenvolvedor Full Stack",
        period: "Maio 2020 - Dezembro 2024",
        description:
          "Atuei no desenvolvimento front-end de uma solução para uma empresa do segmento de climatização, contribuindo para a construção de uma interface moderna, responsiva e escalável.",
        cta: "Ver mais",
        collapseLabel: "Ver menos",
        details: [
          "Atuei no desenvolvimento de soluções para monitoramento de performance de varejistas e indústrias, participando da construção de integrações, processamento de dados e aplicações voltadas para análise de resultados comerciais.",
          "Fui responsável pela integração de APIs de terceiros para captura e consolidação de dados de vendas, disponibilizando informações para dashboards utilizados na tomada de decisão de clientes.",
          "Participei do desenvolvimento de aplicações backend utilizando .NET e Node.js, além da construção de interfaces em React.js para visualização e gestão dos dados processados.",
          "Atuação full stack, participando desde a especificação técnica até a entrega de APIs, integrações e dashboards personalizados para diferentes clientes.",
          "Automação da captura e consolidação diária de dados de vendas de múltiplos varejistas e indústrias.",
          "Implementação de processos de limpeza e reprocessamento de dados, aumentando a confiabilidade dos indicadores apresentados aos clientes.",
          "Desenvolvimento de APIs e integrações personalizadas para consumo de dados em plataformas próprias dos clientes.",
          "Construção de dashboards voltados ao acompanhamento de vendas, performance comercial e indicadores de negócio.",
        ],
        technicalSkillsLabel: "Competências técnicas",
        technicalSkills: [
          "APIs REST",
          "Integração de Sistemas",
          ".NET",
          "Node.js",
          "React.js",
          "Processamento de Dados",
          "Dashboards",
          "PostgreSQL",
          "Consolidação de Dados",
          "Automação",
          "Limpeza de Dados",
          "JavaScript",
        ],
        behaviorSkillsLabel: "Competências comportamentais",
        behaviorSkills: [
          "Análise de requisitos",
          "Integração de sistemas",
          "Foco em entrega",
          "Proatividade",
          "Atenção a detalhe",
          "Resolução de problemas",
          "Comunicação clara",
          "Ownership",
        ],
      },
      {
        id: "exp-3",
        company: "Profissional de Operações e Gestão",
        location: "São Paulo/SP",
        role: "Operações e Gestão | Logística | Controle de Estoque | Transporte",
        period: "Agosto 2006 - Outubro 2019",
        description:
          "Profissional com mais de uma década de experiência em funções ligadas à logística, gestão operacional e transporte, desenvolvendo competências fundamentais que contribuem para minha carreira em tecnologia.",
        cta: "Ver mais",
        collapseLabel: "Ver menos",
        details: [
          "Atuação em funções ligadas à logística, gestão operacional e transporte, exercendo atividades como controle de estoque, gestão de equipes operacionais e transporte de passageiros e cargas.",
          "Desenvolvimento de competências fundamentais como responsabilidade operacional, organização e resolução de problemas que levo para minha carreira em tecnologia até hoje.",
          "Experiência em tomada de decisão sob pressão, foco na entrega de resultados e gestão eficiente de recursos.",
          "Transição para a área de Tecnologia da Informação iniciada em 2020, ingressando profissionalmente no desenvolvimento de software.",
          "Trajetória de evolução contínua, passando de Desenvolvedor Júnior a Desenvolvedor Pleno através de dedicação e aprendizado contínuo.",
          "Aplicação de princípios operacionais aprendidos em logística para otimização de processos técnicos e eficiência de projetos de software.",
        ],
        technicalSkillsLabel: "Competências técnicas",
        technicalSkills: [
          "Controle de Estoque",
          "Logística",
          "Gestão de Recursos",
          "Operações",
          "Transporte",
          "Organização de Processos",
        ],
        behaviorSkillsLabel: "Competências comportamentais",
        behaviorSkills: [
          "Responsabilidade operacional",
          "Organização e planejamento",
          "Resolução de problemas",
          "Tomada de decisão sob pressão",
          "Foco em resultados",
          "Gestão de equipes",
          "Liderança operacional",
          "Adaptabilidade",
        ],
      },
    ],
  },
  EN: {
    sectionTitle: "Experience",
    experiences: [
      {
        id: "exp-1",
        company: "Future Secure AI",
        location: "Sao Paulo/SP",
        role: "Full Stack Developer | React | Next.js | AI Applications | LLMs | Scalable Systems",
        period: "November 2024 - March 2026",
        description:
          "I work as a Full Stack Developer on the development and evolution of the main interface of an Artificial Intelligence platform, focusing on performance, scalability, and user experience.",
        cta: "See more",
        collapseLabel: "See less",
        details: [
          "I worked on developing an AI-based automation platform responsible for executing intelligent workflows, integrating systems, and orchestrating AI agents.",
          "I participated in building APIs, execution engines, and distributed architectures focused on scalability, high availability, and operational reliability.",
          "Integration of Large Language Models (LLMs) in automated processes, enhancing intelligent automation capabilities.",
          "Implementation of versioning and rollback mechanisms for AI agents, enabling users to safely and immediately restore previous versions without technical support dependency.",
          "This versioning functionality reduced incident recovery time from minutes or hours to seconds, significantly increasing the reliability of production deployments.",
          "Work in supporting production environments, contributing to consistent SLA compliance and resolution of critical incidents.",
          "Full-stack work in both backend and frontend, supporting different support and development fronts.",
          "Acceleration of solution delivery through reduced team dependencies and greater operational efficiency.",
          "Continuous platform evolution with focus on scalability, performance, and operational reliability.",
        ],
        technicalSkillsLabel: "Technical skills",
        technicalSkills: [
          "REST APIs and Microservices",
          "Distributed Systems Architecture",
          "Large Language Models (LLMs)",
          "Automation and Orchestration",
          "Versioning and Rollback",
          "React",
          "Node.js",
          "TypeScript",
          "Docker",
          "Kubernetes",
          "PostgreSQL",
          "Scalability",
          "High Availability",
        ],
        behaviorSkillsLabel: "Behavioral skills",
        behaviorSkills: [
          "Critical problem solving",
          "Systems thinking",
          "Ownership and accountability",
          "Cross-functional collaboration",
          "In-depth technical analysis",
          "Continuous improvement",
          "Clear technical communication",
          "Proactive support mindset",
        ],
      },
      {
        id: "exp-2",
        company: "ARENA CONSULTORIA",
        location: "Sao Paulo/SP",
        role: "Full Stack Developer",
        period: "May 2020 - December 2024",
        description:
          "I worked on developing solutions for monitoring the performance of retailers and industries, participating in building integrations, data processing, and applications focused on analyzing commercial results.",
        cta: "See more",
        collapseLabel: "See less",
        details: [
          "I worked on developing solutions for monitoring the performance of retailers and industries, participating in building integrations, data processing, and applications focused on analyzing commercial results.",
          "I was responsible for integrating third-party APIs to capture and consolidate sales data, providing information for dashboards used in customer decision-making.",
          "I participated in developing backend applications using .NET and Node.js, as well as building interfaces in React.js for visualizing and managing processed data.",
          "Full-stack work, participating from technical specification to delivery of APIs, integrations, and personalized dashboards for different clients.",
          "Automation of daily capture and consolidation of sales data from multiple retailers and industries.",
          "Implementation of data cleaning and reprocessing processes, increasing the reliability of indicators presented to clients.",
          "Development of custom APIs and integrations for data consumption on client platforms.",
          "Building dashboards focused on sales monitoring, commercial performance, and business indicators.",
        ],
        technicalSkillsLabel: "Technical skills",
        technicalSkills: [
          "REST APIs",
          "Systems Integration",
          ".NET",
          "Node.js",
          "React.js",
          "Data Processing",
          "Dashboards",
          "PostgreSQL",
          "Data Consolidation",
          "Automation",
          "Data Cleaning",
          "JavaScript",
        ],
        behaviorSkillsLabel: "Behavioral skills",
        behaviorSkills: [
          "Requirements analysis",
          "Systems integration",
          "Focus on delivery",
          "Proactivity",
          "Attention to detail",
          "Problem-solving",
          "Clear communication",
          "Ownership",
        ],
      },
      {
        id: "exp-3",
        company: "Operations and Management Professional",
        location: "Sao Paulo/SP",
        role: "Operations and Management | Logistics | Inventory Control | Transportation",
        period: "August 2006 - October 2019",
        description:
          "Professional with over a decade of experience in logistics, operational management, and transportation roles, developing fundamental competencies that contribute to my technology career.",
        cta: "See more",
        collapseLabel: "See less",
        details: [
          "Experience in roles linked to logistics, operational management, and transportation, exercising activities such as inventory control, operational team management, and passenger and cargo transportation.",
          "Development of fundamental competencies such as operational responsibility, organization, and problem-solving that I carry forward in my technology career today.",
          "Experience in decision-making under pressure, focus on delivering results, and efficient resource management.",
          "Transition to Information Technology initiated in 2020, professionally entering software development.",
          "Continuous evolution trajectory, progressing from Junior Developer to Senior Developer through dedication and continuous learning.",
          "Application of operational principles learned in logistics to optimize technical processes and improve software project efficiency.",
        ],
        technicalSkillsLabel: "Technical skills",
        technicalSkills: [
          "Inventory Control",
          "Logistics",
          "Resource Management",
          "Operations",
          "Transportation",
          "Process Organization",
        ],
        behaviorSkillsLabel: "Behavioral skills",
        behaviorSkills: [
          "Operational responsibility",
          "Organization and planning",
          "Problem-solving",
          "Decision-making under pressure",
          "Results-focused mindset",
          "Team management",
          "Operational leadership",
          "Adaptability",
        ],
      },
    ],
  },
};

export function getExperienceContent(languageCode) {
  return experienceContent[languageCode] ?? experienceContent.PT;
}

function ExperienceCard({ experience, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className="experience-item"
      style={{ "--experience-delay": `${0.16 + index * 0.28}s` }}
    >
      <div className="experience-card">
        <h3>{experience.company}</h3>
        <span className="experience-location">{experience.location}</span>
        <strong>{experience.role}</strong>
        <p>{experience.description}</p>

        <button
          type="button"
          className="experience-toggle"
          onClick={() => setIsExpanded((current) => !current)}
        >
          {isExpanded ? experience.collapseLabel : experience.cta}
        </button>

        {isExpanded ? (
          <div className="experience-expanded">
            <div className="experience-expanded-divider" aria-hidden="true" />

            {experience.details.map((paragraph) => (
              <p key={paragraph} className="experience-detail">
                {paragraph}
              </p>
            ))}

            <div className="experience-expanded-divider" aria-hidden="true" />

            <div className="experience-skill-group">
              <span>{experience.technicalSkillsLabel}</span>
              <div className="experience-skill-tags is-technical">
                {experience.technicalSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="experience-skill-group">
              <span>{experience.behaviorSkillsLabel}</span>
              <div className="experience-skill-tags is-behavior">
                {experience.behaviorSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="experience-marker" aria-hidden="true">
        <span>◔</span>
      </div>

      <div className="experience-period">{experience.period}</div>
    </article>
  );
}

export default function ExperienceSection({
  content,
  experienceRef,
  isVisible,
  isActive,
  replayToken,
}) {
  return (
    <section
      id="experiencia"
      ref={experienceRef}
      className={`experience-section ${isVisible ? "is-visible" : ""} ${
        isActive ? "is-active-section" : ""
      }`}
    >
      <header
        key={`experience-heading-${replayToken}`}
        className="section-heading section-heading-animated"
      >
        <span className="section-heading-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M9 7V5.75C9 4.78 9.78 4 10.75 4h2.5C14.22 4 15 4.78 15 5.75V7" />
            <path d="M4.75 8h14.5C20.22 8 21 8.78 21 9.75v7.5c0 .97-.78 1.75-1.75 1.75H4.75A1.75 1.75 0 0 1 3 17.25v-7.5C3 8.78 3.78 8 4.75 8Z" />
            <path d="M3 12h18" />
          </svg>
        </span>
        <h2>{content.sectionTitle}</h2>
      </header>

      <div
        key={`experience-timeline-${replayToken}`}
        className={`experience-timeline ${isVisible ? "is-visible" : ""}`}
      >
        <div className="experience-track" aria-hidden="true" />

        {content.experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
