import { useState } from 'react';

const experienceContent = {
  PT: {
    sectionTitle: 'Experiencia',
    experiences: [
      {
        id: 'exp-1',
        company: 'Sua empresa atual',
        location: 'Sua cidade/UF',
        role: 'Seu cargo principal',
        period: 'ago 2025 - o momento',
        description: 'Use este bloco para escrever um resumo da sua experiencia, principais entregas, tecnologias usadas e impacto gerado.',
        cta: 'Ver mais',
        collapseLabel: 'Ver menos',
        details: [
          'Atuo diretamente no desenvolvimento e evolucao de solucoes com foco em qualidade, escalabilidade e boas praticas de engenharia.',
          'Minha atuacao envolve analise tecnica, definicao de solucoes, implementacao e sustentacao dos sistemas em colaboracao com diferentes areas.',
          'Tambem contribuo com adocao de praticas modernas, melhoria continua do codigo e uso estrategico de tecnologia para acelerar entregas.'
        ],
        technicalSkillsLabel: 'Competencias tecnicas',
        technicalSkills: ['Node.js', 'React', 'TypeScript', 'Engenharia de software', 'Escalabilidade', 'Boas praticas'],
        behaviorSkillsLabel: 'Competencias comportamentais',
        behaviorSkills: ['Colaboracao cross-funcional', 'Analise tecnica', 'Melhoria continua']
      }
    ]
  },
  EN: {
    sectionTitle: 'Experience',
    experiences: [
      {
        id: 'exp-1',
        company: 'Your current company',
        location: 'Your city/state',
        role: 'Your main role',
        period: 'Aug 2025 - present',
        description: 'Use this block to write a summary of your experience, main deliveries, technologies used, and impact generated.',
        cta: 'See more',
        collapseLabel: 'See less',
        details: [
          'I work directly on the development and evolution of solutions focused on quality, scalability, and engineering best practices.',
          'My work includes technical analysis, solution design, implementation, and maintenance of systems in collaboration with different areas.',
          'I also contribute to the adoption of modern practices, continuous code improvement, and strategic use of technology to speed up delivery.'
        ],
        technicalSkillsLabel: 'Technical skills',
        technicalSkills: ['Node.js', 'React', 'TypeScript', 'Software engineering', 'Scalability', 'Best practices'],
        behaviorSkillsLabel: 'Behavioral skills',
        behaviorSkills: ['Cross-functional collaboration', 'Technical analysis', 'Continuous improvement']
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

export default function ExperienceSection({ content, experienceRef, isVisible }) {
  return (
    <section id="experiencia" ref={experienceRef} className="experience-section">
      <header className="section-heading">
        <span className="section-heading-icon" aria-hidden="true">
          ▣
        </span>
        <h2>{content.sectionTitle}</h2>
      </header>

      <div className={`experience-timeline ${isVisible ? 'is-visible' : ''}`}>
        <div className="experience-track" aria-hidden="true" />

        {content.experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
