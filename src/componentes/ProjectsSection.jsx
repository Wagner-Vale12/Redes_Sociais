const projectsContent = {
  PT: {
    sectionTitle: 'Projetos',
    projects: [
      {
        id: 'project-1',
        logo: 'FS',
        title: 'Plataforma de AI',
        period: 'ago 2025 - abr 2026',
        description: 'Descreva aqui um projeto importante do seu portfolio, explicando contexto, tecnologias, responsabilidades e impacto no resultado.'
      },
      {
        id: 'project-2',
        logo: 'CPQ',
        title: 'Projeto destaque 02',
        period: 'out 2024 - jul 2025',
        description: 'Este card pode ser usado para outro projeto relevante, com foco em arquitetura, entrega, manutencao, escalabilidade ou colaboracao com negocio.'
      },
      {
        id: 'project-3',
        logo: 'GW',
        title: 'Projeto destaque 03',
        period: 'jan 2024 - fev 2024',
        description: 'Use o terceiro card para mostrar variedade de experiencia, como integracoes, sistemas internos, produto web ou automacoes complexas.'
      }
    ]
  },
  EN: {
    sectionTitle: 'Projects',
    projects: [
      {
        id: 'project-1',
        logo: 'FS',
        title: 'Featured project 01',
        period: 'Aug 2025 - Apr 2026',
        description: 'Describe an important portfolio project here, explaining context, technologies, responsibilities, and business impact.'
      },
      {
        id: 'project-2',
        logo: 'CPQ',
        title: 'Featured project 02',
        period: 'Oct 2024 - Jul 2025',
        description: 'This card can be used for another relevant project, focused on architecture, delivery, maintenance, scalability, or collaboration with business.'
      },
      {
        id: 'project-3',
        logo: 'GW',
        title: 'Featured project 03',
        period: 'Jan 2024 - Feb 2024',
        description: 'Use the third card to show variety of experience, such as integrations, internal systems, web products, or complex automation.'
      }
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
                <span>{project.logo}</span>
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
