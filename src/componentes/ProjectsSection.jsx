const projectsContent = {
  PT: {
    sectionTitle: 'Projetos',
    projects: [
      {
        id: 'project-1',
        logoImage: 'https://www.google.com/s2/favicons?domain=futuresecure.ai&sz=128',
        title: 'Plataforma de AI',
        period: ' Nov 2024 - Março 2026',
        description: 'Plataforma para orquestrar workflows, integrações e agentes de inteligência artificial/LLMs. Atuei no desenvolvimento e na sustentação do núcleo low-code, permitindo que engenheiros de IA criem agentes, digital coworkers e automações complexas com menos código manual e mais velocidade de entrega.'
      },
      {
        id: 'project-2',
        logoImage: '/imagens/logo_air.png',
        title: 'Projeto freelance • empresa do setor de climatização',
        period: 'mai 2023 - dez 2023',
        description: 'Atuei no desenvolvimento front-end de uma solução para uma empresa do segmento de climatização, contribuindo para a construção de uma interface moderna, responsiva e escalável. O projeto foi desenvolvido com React, Next.js, Node.js e Tailwind CSS, com integração a banco de dados PostgreSQL, priorizando organização do código, usabilidade e performance da aplicação.'
      },
    ]
  },
  EN: {
    sectionTitle: 'Projects',
    projects: [
      {
        id: 'project-1',
        logoImage: 'https://www.google.com/s2/favicons?domain=futuresecure.ai&sz=128',
        title: 'AI Platform',
        period: 'Nov 2024 - March 2026',
        description: 'Platform for orchestrating workflows, integrations, and artificial intelligence/LLM agents. I worked on the development and ongoing support of the low-code core, enabling AI engineers to build agents, digital coworkers, and complex automations with less manual code and faster delivery.'
      },
      {
        id: 'project-2',
        logoImage: '/imagens/logo_air.png',
        title: 'Freelance project • air conditioning company',
        period: 'May 2023 - Aug 2023',
        description: 'I worked on the front-end development of a solution for a company in the air conditioning sector, contributing to a modern, responsive, and scalable interface. The project was built with React, Next.js, Node.js, and Tailwind CSS, integrated with a PostgreSQL database, with strong attention to code organization, usability, and application performance.'
      },
    ]
  }
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
                  <img className="project-logo-image" src={project.logoImage} alt="" />
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
