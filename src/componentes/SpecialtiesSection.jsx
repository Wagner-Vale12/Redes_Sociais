const specialtiesContent = {
  PT: {
    sectionTitle: 'Especialidades',
    specialties: [
      {
        id: 'leadership',
        icon: '⌘',
        title: 'Lideranca Tecnica',
        description: [
          'Adicione aqui sua experiencia liderando projetos, organizando entregas e apoiando o crescimento do time.',
          'Voce pode escrever sobre comunicacao, tomada de decisao, colaboracao e como conduz times em ambientes reais.'
        ],
        tags: ['Comunicacao', 'Lideranca', 'Mentoria', 'Feedback continuo', 'Code review', 'Organizacao', 'Priorizacao', 'Resiliencia']
      },
      {
        id: 'software',
        icon: '</>',
        title: 'Engenharia / Desenvolvimento de Software',
        description: [
          'Use este bloco para listar sua stack, projetos, experiencia com front-end, back-end e arquitetura.',
          'Tambem fica bom para destacar boas praticas, APIs, bancos de dados, testes e tecnologias que voce domina.'
        ],
        tags: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML', 'CSS', 'SQL', 'APIs REST', 'Git', 'Docker']
      },
      {
        id: 'ai',
        icon: '*',
        title: 'Inteligencia Artificial & Automacoes',
        description: [
          'Se quiser, esta coluna pode ser usada para IA, automacoes, integrações ou qualquer especialidade que faca sentido no seu portfolio.',
          'Tambem pode virar um bloco de servicos, ferramentas favoritas ou areas que voce quer destacar para recrutadores.'
        ],
        tags: ['OpenAI API', 'Prompts', 'Automacao', 'Agentes', 'Chatbots', 'Workflows', 'Integracoes', 'IA generativa']
      }
    ]
  },
  EN: {
    sectionTitle: 'Specialties',
    specialties: [
      {
        id: 'leadership',
        icon: '⌘',
        title: 'Technical Leadership',
        description: [
          'Add your experience leading projects, organizing deliveries, and supporting team growth here.',
          'You can talk about communication, decision-making, collaboration, and how you lead teams in real environments.'
        ],
        tags: ['Communication', 'Leadership', 'Mentoring', 'Continuous feedback', 'Code review', 'Organization', 'Prioritization', 'Resilience']
      },
      {
        id: 'software',
        icon: '</>',
        title: 'Software Engineering / Development',
        description: [
          'Use this block to list your stack, projects, front-end and back-end experience, and architecture background.',
          'It also works well to highlight best practices, APIs, databases, testing, and technologies you master.'
        ],
        tags: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML', 'CSS', 'SQL', 'REST APIs', 'Git', 'Docker']
      },
      {
        id: 'ai',
        icon: '*',
        title: 'Artificial Intelligence & Automation',
        description: [
          'If you want, this column can be used for AI, automation, integrations, or any specialty that makes sense in your portfolio.',
          'It can also become a services block, favorite tools section, or areas you want to highlight for recruiters.'
        ],
        tags: ['OpenAI API', 'Prompts', 'Automation', 'Agents', 'Chatbots', 'Workflows', 'Integrations', 'Generative AI']
      }
    ]
  }
};

export function getSpecialtiesContent(languageCode) {
  return specialtiesContent[languageCode] ?? specialtiesContent.PT;
}

export default function SpecialtiesSection({ content }) {
  return (
    <section id="especialidades" className="specialties-section">
      <header className="section-heading">
        <span className="section-heading-icon" aria-hidden="true">
          ≡
        </span>
        <h2>{content.sectionTitle}</h2>
      </header>

      <div className="specialties-grid">
        {content.specialties.map((specialty) => (
          <article key={specialty.id} className="specialty-card">
            <span className="specialty-icon" aria-hidden="true">
              {specialty.icon}
            </span>
            <h3>{specialty.title}</h3>

            {specialty.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="specialty-tags">
              {specialty.tags.map((tag) => (
                <span key={tag} className="specialty-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
