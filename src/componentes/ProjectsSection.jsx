const projectsContent = {
  PT: {
    sectionTitle: "Projetos",
    projects: [
      {
        id: "project-1",
        logoImage:
          "https://www.google.com/s2/favicons?domain=futuresecure.ai&sz=128",
        title: "Plataforma de AI",
        period: " Nov 2024 - Março 2026",
        description:
          "Plataforma para orquestrar workflows, integrações e agentes de inteligência artificial/LLMs. Atuei no desenvolvimento e na sustentação do núcleo low-code, permitindo que engenheiros de IA criem agentes, digital coworkers e automações complexas com menos código manual e mais velocidade de entrega.",
      },
      {
        id: "project-3",
        logoImage:
          "https://www.google.com/s2/favicons?domain=arena.com.br&sz=128",
        title: "Plataforma de Monitoramento de Performance",
        period: "mai 2020 - dez 2024",
        description:
          "Desenvolvi soluções para monitoramento de performance de varejistas e indústrias. Participei da construção de integrações, processamento de dados e aplicações voltadas para análise de resultados comerciais. Implementei APIs de terceiros para captura e consolidação de dados de vendas, dashboards personalizados e automação de processos. Tech stack: .NET, Node.js, React.js, PostgreSQL.",
      },
    ],
  },
  EN: {
    sectionTitle: "Projects",
    projects: [
      {
        id: "project-1",
        logoImage:
          "https://www.google.com/s2/favicons?domain=futuresecure.ai&sz=128",
        title: "AI Platform",
        period: "Nov 2024 - March 2026",
        description:
          "Platform for orchestrating workflows, integrations, and artificial intelligence/LLM agents. I worked on the development and ongoing support of the low-code core, enabling AI engineers to build agents, digital coworkers, and complex automations with less manual code and faster delivery.",
      },
      {
        id: "project-3",
        logoImage:
          "https://www.google.com/s2/favicons?domain=arena.com.br&sz=128",
        title: "Performance Monitoring Platform",
        period: "May 2020 - Dec 2024",
        description:
          "I developed solutions for monitoring the performance of retailers and industries. I participated in building integrations, data processing, and applications focused on analyzing commercial results. I implemented third-party APIs for capturing and consolidating sales data, personalized dashboards, and process automation. Tech stack: .NET, Node.js, React.js, PostgreSQL.",
      },
    ],
  },
};

export function getProjectsContent(languageCode) {
  return projectsContent[languageCode] ?? projectsContent.PT;
}

export default function ProjectsSection({ content }) {
  return (
    <section id="projetos" className="projects-section">
      <header className="section-heading">
        <span className="section-heading-icon" aria-hidden="true">
          ▤
        </span>
        <h2>{content.sectionTitle}</h2>
      </header>

      <div className="projects-grid">
        {content.projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card-header">
              <div className="project-logo" aria-hidden="true">
                {project.logoImage ? (
                  <img
                    className="project-logo-image"
                    src={project.logoImage}
                    alt=""
                  />
                ) : (
                  <span>{project.logo}</span>
                )}
              </div>

              <div className="project-heading">
                <h3>{project.title}</h3>
                <span className="project-period">{project.period}</span>
              </div>
            </div>

            <div className="project-divider" aria-hidden="true" />
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
