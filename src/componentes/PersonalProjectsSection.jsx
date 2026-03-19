const personalProjectsContent = {
  PT: {
    section: {
      title: 'Projetos Pessoais',
      githubLabel: 'GitHub',
      siteLabel: 'Ver site'
    },
    personalProjects: [
      {
        id: 'personal-1',
        title: 'Projeto pessoal 01',
        description: 'Use este card para um projeto autoral seu, com descricao curta e foco no objetivo principal dele.',
        github: '#',
        site: '#',
        stars: '2 estrelas',
        updated: 'Atualizado recentemente'
      },
      {
        id: 'personal-2',
        title: 'Projeto pessoal 02',
        description: 'Aqui voce pode destacar um projeto experimental, estudo pratico ou algum app criado para aprender uma tecnologia.',
        github: '#',
        site: '#',
        stars: '1 estrela',
        tech: 'JavaScript',
        updated: 'Atualizado recentemente'
      },
      {
        id: 'personal-3',
        title: 'Projeto pessoal 03',
        description: 'Este bloco funciona bem para projeto offline, prototipo, exercicio de curso ou qualquer entrega independente que voce queira mostrar.',
        github: '#',
        site: '#',
        stars: '1 estrela',
        tech: 'TypeScript',
        updated: 'Atualizado recentemente',
        status: 'Projeto Offline'
      }
    ]
  },
  EN: {
    section: {
      title: 'Personal Projects',
      githubLabel: 'GitHub',
      siteLabel: 'View site'
    },
    personalProjects: [
      {
        id: 'personal-1',
        title: 'Personal project 01',
        description: 'Use this card for an authorial project, with a short description focused on its main goal.',
        github: '#',
        site: '#',
        stars: '2 stars',
        updated: 'Updated recently'
      },
      {
        id: 'personal-2',
        title: 'Personal project 02',
        description: 'Here you can highlight an experimental project, practical study, or an app created to learn a technology.',
        github: '#',
        site: '#',
        stars: '1 star',
        tech: 'JavaScript',
        updated: 'Updated recently'
      },
      {
        id: 'personal-3',
        title: 'Personal project 03',
        description: 'This block works well for an offline project, prototype, course exercise, or any independent delivery you want to show.',
        github: '#',
        site: '#',
        stars: '1 star',
        tech: 'TypeScript',
        updated: 'Updated recently',
        status: 'Offline Project'
      }
    ]
  }
};

export function getPersonalProjectsContent(languageCode) {
  return personalProjectsContent[languageCode] ?? personalProjectsContent.PT;
}

export default function PersonalProjectsSection({ content }) {
  return (
    <section id="projetos-pessoais" className="personal-projects-section">
      <header className="section-heading">
        <span className="section-heading-icon" aria-hidden="true">
          &lt;/&gt;
        </span>
        <h2>{content.section.title}</h2>
      </header>

      <div className="personal-projects-grid">
        {content.personalProjects.map((project) => (
          <article key={project.id} className="personal-project-card">
            <div className="personal-project-top">
              <h3>{project.title}</h3>
              {project.status ? <span className="personal-status">{project.status}</span> : null}
            </div>

            <div className="project-divider" aria-hidden="true" />
            <p>{project.description}</p>

            <div className="personal-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                {content.section.githubLabel}
              </a>
              <a href={project.site} target="_blank" rel="noreferrer">
                {content.section.siteLabel}
              </a>
            </div>

            <div className="personal-meta">
              <span className="personal-badge personal-stars">{project.stars}</span>
              {project.tech ? <span className="personal-badge">{project.tech}</span> : null}
              <span className="personal-updated">{project.updated}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
