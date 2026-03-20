import { FaBrain, FaUsers } from 'react-icons/fa';

const specialtiesContent = {
  PT: {
    sectionTitle: 'Especialidades',
    specialties: [
      {
        id: 'leadership',
        icon: '⌘',
        title: 'Lideranca Técnica',
        description: [
          'Tenho experiência em apoiar o crescimento de outros desenvolvedores por meio de mentoria, code reviews construtivos e feedback contínuo. Acredito que revisões de código vão além da qualidade técnica, sendo também uma oportunidade de aprendizado e padronização.',
          'Também atuo na organização e priorização de demandas, ajudando a manter o foco nas entregas mais relevantes e garantindo eficiência no fluxo de trabalho. Em cenários desafiadores, mantenho uma postura resiliente, buscando soluções práticas e mantendo a estabilidade do time mesmo sob pressão.'
        ],
        tags: ['Comunicacao', 'Lideranca', 'Mentoria', 'Feedback continuo', 'Code review', 'Organizacao', 'Priorizacao', 'Resiliencia']
      },
      {
        id: 'software',
        icon: '</>',
        title: 'Desenvolvimento de Software',
        description: [
          'Atuo no desenvolvimento de aplicações web modernas, com experiência tanto em front-end quanto em back-end. Tenho domínio de tecnologias amplamente utilizadas no mercado, participando desde a construção de interfaces até a implementação de APIs e integração com bancos de dados.',
          'No front-end, trabalho com React, JavaScript e TypeScript, focando na criação de interfaces responsivas, performáticas e com boa experiência do usuário. Busco sempre aplicar boas práticas de componentização, reutilização de código e organização de estados.',
          'No back-end, utilizo Node.js para desenvolvimento de APIs REST, garantindo uma comunicação eficiente entre sistemas e aplicações. Tenho experiência na estruturação de rotas, regras de negócio e integração com bancos de dados SQL.',
          'Também valorizo a qualidade do código e a organização dos projetos, utilizando Git para versionamento e Docker para padronização de ambientes e deploy. Procuro sempre seguir boas práticas de desenvolvimento, como código limpo, separação de responsabilidades e escalabilidade.'
        ],
        tags: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML', 'CSS', 'SQL', 'APIs REST', 'Git', 'Docker']
      },
      {
        id: 'ai',
        icon: '*',
        title: 'Inteligencia Artificial & Automações',
        description: [
          'Concepção e implementação de soluções com LLMs, orquestração com LangChain e LangGraph, fluxos com memória e ferramentas, e padrões RAG para grounding em dados próprios. Experiência prática com observabilidade (Langfuse), automação de workflows (n8n, Flowise) e boas práticas de engenharia de prompt.',
          'Desenvolvimento de agentes personalizados, chatbots e integrações entre serviços utilizando APIs de IA generativa. Visão de produto em IA generativa: prototipagem rápida, avaliação de modelos, custos e riscos, e colaboração com negócio para casos de uso reais — de assistentes internos a pipelines de dados e agentes especializados.',
          'Desenvolvimento de agentes personalizados, chatbots e integrações entre serviços utilizando APIs de IA generativa.',
          'Visão de produto em IA generativa: prototipagem rápida, avaliação de modelos, custos e riscos, e colaboração com negócio para casos de uso reais — de assistentes internos a pipelines de dados e agentes especializados.'
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
        <span className="section-heading-icon section-heading-icon-layers" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="presentation" focusable="false">
            <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
            <path d="M5.2 11.2 12 14.7l6.8-3.5" />
            <path d="M5.2 16 12 19.5l6.8-3.5" />
          </svg>
        </span>
        <h2>{content.sectionTitle}</h2>
      </header>

      <div className="specialties-grid">
        {content.specialties.map((specialty) => (
          <article key={specialty.id} className="specialty-card">
            <span className="specialty-icon" aria-hidden="true">
              {specialty.id === 'leadership' ? (
                <FaUsers />
              ) : specialty.id === 'ai' ? (
                <FaBrain />
              ) : (
                specialty.icon
              )}
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
