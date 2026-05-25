import { FaBrain, FaCode, FaMedal, FaTools } from 'react-icons/fa';

const specialtiesContent = {
  PT: {
    sectionTitle: 'Especialidades',
    specialties: [
      {
        id: 'top',
        title: 'Principais',
        description: [
          'Atuo como Full Stack Developer com foco na construção de aplicações web escaláveis, experiência de usuário consistente e integração eficiente entre front-end e back-end.',
          'Minha base principal envolve React.js, Next.js, Node.js, JavaScript e TypeScript, aplicados em produtos modernos com evolução contínua.'
        ],
        tags: ['Full Stack Development', 'React.js', 'Next.js', 'Node.js', 'JavaScript (ES6+)', 'TypeScript']
      },
      {
        id: 'backend',
        icon: '</>',
        title: 'Backend / Arquitetura',
        description: [
          'Tenho experiência na construção de APIs REST, integração entre serviços e desenho de soluções preparadas para crescimento, manutenção e evolução contínua.',
          'Também atuo em contextos com arquitetura de microservices, processamento orientado a eventos e decisões técnicas voltadas à escalabilidade.'
        ],
        tags: ['REST APIs', 'Microservices Architecture', 'Event-Driven Architecture', 'Scalable Systems Design']
      },
      {
        id: 'ai',
        icon: '*',
        title: 'IA / Diferencial competitivo',
        description: [
          'Inteligência Artificial é um dos meus principais diferenciais, com experiência em aplicações que utilizam LLMs, automação de processos e integração de fluxos inteligentes.',
          'Atuo no desenvolvimento de soluções com IA aplicada a produtos, combinando automação, workflows e uso estratégico de modelos generativos.'
        ],
        tags: ['Artificial Intelligence (AI)', 'Large Language Models (LLMs)', 'AI Automation', 'Workflow Automation']
      },
      {
        id: 'frontend',
        title: 'Frontend / UI',
        description: [
          'No front-end, foco na criação de interfaces modernas, responsivas e escaláveis, com atenção à clareza visual, performance e usabilidade.',
          'Trabalho com componentização, integração com APIs e construção de experiências consistentes para diferentes contextos de produto.'
        ],
        tags: ['Tailwind CSS', 'Responsive Design', 'Front-End Development']
      },
      {
        id: 'tools',
        title: 'Ferramentas e práticas',
        description: [
          'Valorizo organização de código, colaboração em equipe e padronização de ambientes para manter projetos sustentáveis ao longo do tempo.',
          'Utilizo ferramentas e práticas de engenharia para apoiar versionamento, integração de serviços e decisões estruturais de software.'
        ],
        tags: ['Git & GitHub', 'API Integration', 'System Design', 'Software Architecture']
      }
    ]
  },
  EN: {
    sectionTitle: 'Specialties',
    specialties: [
      {
        id: 'top',
        title: 'Top Skills',
        description: [
          'I work as a Full Stack Developer focused on building scalable web applications, delivering consistent user experience, and integrating front-end and back-end efficiently.',
          'My core stack includes React.js, Next.js, Node.js, JavaScript, and TypeScript, applied to modern products with continuous evolution.'
        ],
        tags: ['Full Stack Development', 'React.js', 'Next.js', 'Node.js', 'JavaScript (ES6+)', 'TypeScript']
      },
      {
        id: 'backend',
        icon: '</>',
        title: 'Backend / Architecture',
        description: [
          'I have experience building REST APIs, integrating services, and designing solutions prepared for growth, maintainability, and continuous evolution.',
          'I also work in contexts involving microservices architecture, event-driven processing, and technical decisions oriented toward scalability.'
        ],
        tags: ['REST APIs', 'Microservices Architecture', 'Event-Driven Architecture', 'Scalable Systems Design']
      },
      {
        id: 'ai',
        icon: '*',
        title: 'AI / Competitive Edge',
        description: [
          'Artificial Intelligence is one of my main differentiators, with experience in applications that use LLMs, process automation, and intelligent workflow integrations.',
          'I work on AI solutions applied to products, combining automation, workflows, and strategic use of generative models.'
        ],
        tags: ['Artificial Intelligence (AI)', 'Large Language Models (LLMs)', 'AI Automation', 'Workflow Automation']
      },
      {
        id: 'frontend',
        title: 'Frontend / UI',
        description: [
          'On the front end, I focus on building modern, responsive, and scalable interfaces with attention to visual clarity, performance, and usability.',
          'I work with componentization, API integrations, and the creation of consistent experiences across different product contexts.'
        ],
        tags: ['Tailwind CSS', 'Responsive Design', 'Front-End Development']
      },
      {
        id: 'tools',
        title: 'Tools & Practices',
        description: [
          'I value code organization, team collaboration, and environment standardization to keep projects sustainable over time.',
          'I use engineering tools and practices to support version control, service integration, and structural software decisions.'
        ],
        tags: ['Git & GitHub', 'API Integration', 'System Design', 'Software Architecture']
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
              {specialty.id === 'top' ? (
                <FaMedal />
              ) : specialty.id === 'ai' ? (
                <FaBrain />
              ) : specialty.id === 'frontend' ? (
                <FaCode />
              ) : specialty.id === 'tools' ? (
                <FaTools />
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
