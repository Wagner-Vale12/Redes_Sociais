import { useState } from 'react';

const experienceContent = {
  PT: {
    sectionTitle: 'Experiência',
    experiences: [
      {
        id: 'exp-1',
        company: 'Future Secure AI',
        location: 'São Paulo/SP',
        role: 'Desenvolvedor de Software Pleno',
        period: 'Novembro 2024 - até o momento',
        description: 'Atuo no desenvolvimento de uma plataforma de Inteligência Artificial, contribuindo para a construção e evolução da interface e para a integração de múltiplos projetos dentro de um ecossistema escalável.',
        cta: 'Ver mais',
        collapseLabel: 'Ver menos',
        details: [
          'Contribuí para o desenvolvimento e evolução da interface principal da plataforma, com foco em performance, escalabilidade e experiência do usuário.',
          'Participei da construção e integração da interface de projetos estratégicos dentro da plataforma (Flowise e Aiflow), garantindo consistência visual e funcional entre os módulos.',
          'Utilizo tecnologias modernas como React, TypeScript, Next.js, Node.js e Tailwind CSS para o desenvolvimento de aplicações robustas e performáticas.',
          'Atuo com banco de dados Supabase (PostgreSQL) e utilizo Docker para padronização de ambientes e suporte à escalabilidade da aplicação.',
          'Participo da sustentação contínua da plataforma e dos projetos, realizando debugging, correção de bugs e melhorias constantes no código.',
          'Colaboro com o time na adoção de boas práticas de engenharia, organização de código e evolução contínua do produto.'
        ],
        technicalSkillsLabel: 'Competências técnicas',
        technicalSkills: [
          'React',
          'TypeScript',
          'Next.js',
          'Node.js',
          'Tailwind CSS',
          'JavaScript (ES6+)',
          'Supabase',
          'PostgreSQL',
          'Docker',
          'APIs REST',
          'Integração de sistemas',
          'Arquitetura de aplicações web',
          'Escalabilidade',
        ],

        behaviorSkillsLabel: 'Competências comportamentais',
        behaviorSkills: [
          'Colaboração em times cross-funcionais',
          'Análise técnica e resolução de problemas',
          'Pensamento crítico',
          'Melhoria contínua',
          'Proatividade',
          'Comunicação técnica',
          'Ownership e responsabilidade compartilhada'
        ]
      }
    ]
  },
  EN: {
    sectionTitle: 'Experience',
    experiences: [
      {
        id: 'exp-1',
        company: 'Future Secure AI',
        location: 'Sao Paulo/SP',
        role: 'Mid-Level Software Developer',
        period: 'November 2024 - Present',
        description: 'I work on the development of an Artificial Intelligence platform, contributing to the creation and evolution of the interface and to the integration of multiple projects within a scalable ecosystem.',
        cta: 'See more',
        collapseLabel: 'See less',
        details: [
          'I contributed to the development and evolution of the platform main interface, with a focus on performance, scalability, and user experience.',
          'I took part in the construction and integration of strategic project interfaces within the platform, such as Flowise and Aiflow, ensuring visual and functional consistency across modules.',
          'I use modern technologies such as React, TypeScript, Next.js, Node.js, and Tailwind CSS to build robust and high-performance applications.',
          'I work with Supabase databases (PostgreSQL) and use Docker to standardize environments and support application scalability.',
          'I contribute to the ongoing support of the platform and its projects by debugging, fixing bugs, and continuously improving the codebase.',
          'I collaborate with the team on adopting engineering best practices, code organization, and continuous product evolution.'
        ],
        technicalSkillsLabel: 'Technical skills',
        technicalSkills: [
          'React',
          'TypeScript',
          'Next.js',
          'Node.js',
          'Tailwind CSS',
          'JavaScript (ES6+)',
          'Supabase',
          'PostgreSQL',
          'Docker',
          'REST APIs',
          'Systems integration',
          'Web application architecture',
          'Scalability'
        ],
        behaviorSkillsLabel: 'Behavioral skills',
        behaviorSkills: [
          'Cross-functional collaboration',
          'Technical analysis and problem solving',
          'Critical thinking',
          'Continuous improvement',
          'Proactivity',
          'Technical communication',
          'Ownership and shared responsibility'
        ]
      }
    ]
  }
};

export function getExperienceContent(languageCode) {
  return experienceContent[languageCode] ?? experienceContent.PT;
}

function ExperienceCard({ experience }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="experience-item">
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
      className={`experience-section ${isVisible ? 'is-visible' : ''} ${
        isActive ? 'is-active-section' : ''
      }`}
    >
      <header key={`experience-heading-${replayToken}`} className="section-heading section-heading-animated">
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
        className={`experience-timeline ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="experience-track" aria-hidden="true" />

        {content.experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
