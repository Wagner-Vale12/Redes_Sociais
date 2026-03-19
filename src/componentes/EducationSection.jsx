const educationContent = {
  PT: {
    sectionTitle: 'Formacao',
    educationItems: [
      {
        id: 'edu-1',
        institution: 'Sua faculdade ou instituicao',
        degree: 'Seu curso ou formacao principal',
        period: '2020 - 2024',
        description: 'Use este espaco para descrever sua formacao, materias de destaque, projetos academicos e o foco principal do curso.'
      }
    ]
  },
  EN: {
    sectionTitle: 'Education',
    educationItems: [
      {
        id: 'edu-1',
        institution: 'Your college or institution',
        degree: 'Your main degree or program',
        period: '2020 - 2024',
        description: 'Use this space to describe your education, key subjects, academic projects, and the main focus of the program.'
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
}) {
  return (
    <section id="formacao" ref={educationRef} className="education-section">
      <header className="section-heading">
        <span className="section-heading-icon" aria-hidden="true">
          ◇
        </span>
        <h2>{content.sectionTitle}</h2>
      </header>

      <div className={`education-timeline ${isVisible ? 'is-visible' : ''}`}>
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
