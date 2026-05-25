const educationContent = {
  PT: {
    sectionTitle: 'Formação',
    educationItems: [
      {
        id: 'edu-1',
        institution: 'Universidade Nove de Julho (UNINOVE)',
        degree: 'Analise e Desenvolvimento de Sistemas',
        period: 'inicio - 2019 término - 2021',
        description: 'Formação voltada ao desenvolvimento de sistemas e engenharia de software, com ênfase em construção de aplicações web, modelagem de dados e arquitetura de sistemas. Ao longo do curso, desenvolvi projetos acadêmicos aplicando conceitos de front-end, back-end e integração de sistemas, utilizando boas práticas de programação, versionamento de código e organização de software. A formação proporcionou uma base sólida em resolução de problemas, análise técnica e desenvolvimento de soluções escaláveis.'
      }
    ]
  },
  EN: {
    sectionTitle: 'Education',
    educationItems: [
      {
        id: 'edu-1',
        institution: 'Nove de Julho University (UNINOVE)',
        degree: 'Systems Analysis and Development',
        period: 'Start - 2019 / Graduation - 2021',
        description: 'Education focused on systems development and software engineering, with emphasis on building web applications, data modeling, and systems architecture. Throughout the program, I developed academic projects applying front-end, back-end, and systems integration concepts, using good programming practices, code versioning, and software organization. This education provided a solid foundation in problem solving, technical analysis, and the development of scalable solutions.'
      }
    ]
  }
};

export function getEducationContent(languageCode) {
  return educationContent[languageCode] ?? educationContent.PT;
}

export default function EducationSection({
  content,
  educationRef,
  isVisible,
  isActive,
  replayToken,
}) {
  return (
    <section
      id="formacao"
      ref={educationRef}
      className={`education-section ${isVisible ? 'is-visible' : ''} ${
        isActive ? 'is-active-section' : ''
      }`}
    >
      <header key={`education-heading-${replayToken}`} className="section-heading section-heading-animated">
        <span className="section-heading-icon" aria-hidden="true">
          ◇
        </span>
        <h2>{content.sectionTitle}</h2>
      </header>

      <div
        key={`education-timeline-${replayToken}`}
        className={`education-timeline ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="experience-track" aria-hidden="true" />

        {content.educationItems.map((education) => (
          <article key={education.id} className="experience-item">
            <div className="experience-card education-card">
              <h3>{education.institution}</h3>
              <strong>{education.degree}</strong>
              <p>{education.description}</p>
            </div>

            <div className="experience-marker education-marker" aria-hidden="true">
              <span>◔</span>
            </div>

            <div className="experience-period">{education.period}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
