function ResumeSection({ title, children }) {
  return (
    <section className="resume-preview-section">
      <h2>{title}</h2>
      <div className="resume-preview-section-body">{children}</div>
    </section>
  );
}

function ContactItem({ label, value, href }) {
  return (
    <div className="resume-preview-contact-item">
      <strong>{label}</strong>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}

export default function ResumePreviewPage({
  languageCode,
  mode,
  sections,
  options,
  heroContent,
  specialtiesContent,
  certificationsContent,
  experienceContent,
  educationContent,
  languagesContent,
  projectsContent,
  personalProjectsContent,
  coursesContent,
  footerContent
}) {
  const isPortuguese = languageCode === 'PT';
  const labels = isPortuguese
    ? {
        preview: 'Prévia do currículo',
        print: 'Imprimir / salvar PDF',
        contacts: 'Contato',
        behavior: 'Competências comportamentais',
        languages: 'Idiomas',
        summary: 'Resumo profissional',
        experience: 'Experiência profissional',
        stack: 'Stack técnica',
        education: 'Formação acadêmica',
        certifications: 'Certificações',
        projects: 'Projetos',
        personalProjects: 'Projetos pessoais',
        courses: 'Cursos',
        hobbies: 'Hobbies'
      }
    : {
        preview: 'Resume preview',
        print: 'Print / save PDF',
        contacts: 'Contact',
        behavior: 'Behavioral skills',
        languages: 'Languages',
        summary: 'Professional summary',
        experience: 'Professional experience',
        stack: 'Technical stack',
        education: 'Academic background',
        certifications: 'Certifications',
        projects: 'Projects',
        personalProjects: 'Personal projects',
        courses: 'Courses',
        hobbies: 'Hobbies'
      };

  const activeSections = new Set(
    mode === 'complete'
      ? [
          'specialties',
          'experience',
          'certifications',
          'education',
          'languages',
          'projects',
          'personalProjects',
          'courses',
          'hobbies'
        ]
      : sections
  );
  const activeOptions = new Set(options);

  const linkedinProfile = heroContent.profiles.find((profile) => profile.id === 'linkedin');
  const githubProfile = heroContent.profiles.find((profile) => profile.id === 'github');
  const mainLocation = experienceContent.experiences[0]?.location ?? '';
  const behaviorSkills = specialtiesContent.specialties[0]?.tags ?? [];
  const technicalSkills = specialtiesContent.specialties
    .flatMap((item) => item.tags)
    .filter((tag, index, array) => array.indexOf(tag) === index)
    .slice(0, 10);

  return (
    <main className="resume-preview-page">
      <div className="resume-preview-toolbar">
        <span>{labels.preview}</span>
        <button type="button" onClick={() => window.print()}>
          {labels.print}
        </button>
      </div>

      <article className="resume-preview-sheet">
        <aside className="resume-preview-sidebar">
          <section className="resume-preview-sidebar-block">
            <h3>{labels.contacts}</h3>
            {mainLocation ? (
              <ContactItem
                label={isPortuguese ? 'Localização' : 'Location'}
                value={mainLocation}
              />
            ) : null}
            {linkedinProfile ? (
              <ContactItem
                label="LinkedIn"
                value={linkedinProfile.href.replace('https://', '')}
                href={linkedinProfile.href}
              />
            ) : null}
            {githubProfile ? (
              <ContactItem
                label="GitHub"
                value={githubProfile.href.replace('https://', '')}
                href={githubProfile.href}
              />
            ) : null}
          </section>

          {behaviorSkills.length ? (
            <section className="resume-preview-sidebar-block">
              <h3>{labels.behavior}</h3>
              <ul className="resume-preview-bullet-list">
                {behaviorSkills.slice(0, 6).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {activeSections.has('languages') ? (
            <section className="resume-preview-sidebar-block">
              <h3>{labels.languages}</h3>
              <ul className="resume-preview-bullet-list">
                {languagesContent.languages.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.level}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </aside>

        <div className="resume-preview-main">
          <header className="resume-preview-main-header">
            <h1>{heroContent.hero.name}</h1>
            <p className="resume-preview-headline">{heroContent.hero.role}</p>
            {mainLocation ? <p className="resume-preview-location">{mainLocation}</p> : null}
          </header>

          <ResumeSection title={labels.summary}>
            <p>{heroContent.hero.intro[0]}</p>
          </ResumeSection>

          {activeSections.has('experience') ? (
            <ResumeSection title={labels.experience}>
              {experienceContent.experiences.map((item) => (
                <article key={item.id} className="resume-preview-entry">
                  <h4>{item.role} - {item.company}</h4>
                  <span>{item.period}</span>
                  <ul className="resume-preview-bullet-list is-main">
                    {item.details.slice(0, 4).map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </ResumeSection>
          ) : null}

          {activeSections.has('specialties') ? (
            <ResumeSection title={labels.stack}>
              <ul className="resume-preview-bullet-list is-main">
                {technicalSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </ResumeSection>
          ) : null}

          {activeSections.has('education') ? (
            <ResumeSection title={labels.education}>
              {educationContent.educationItems.map((item) => (
                <article key={item.id} className="resume-preview-entry">
                  <h4>{item.degree}</h4>
                  <span>{item.institution}</span>
                  <span>{item.period}</span>
                  {activeOptions.has('educationDescription') ? <p>{item.description}</p> : null}
                </article>
              ))}
            </ResumeSection>
          ) : null}

          {activeSections.has('certifications') ? (
            <ResumeSection title={labels.certifications}>
              {certificationsContent.certifications.slice(0, 6).map((item) => (
                <article key={item.id} className="resume-preview-entry">
                  <h4>{item.title}</h4>
                  <span>{item.issuer}</span>
                  {activeOptions.has('certificationsDescription') ? <p>{item.description}</p> : null}
                </article>
              ))}
            </ResumeSection>
          ) : null}

          {activeSections.has('projects') ? (
            <ResumeSection title={labels.projects}>
              {projectsContent.projects.map((item) => (
                <article key={item.id} className="resume-preview-entry">
                  <h4>{item.title}</h4>
                  <span>{item.period}</span>
                  <p>{item.description}</p>
                </article>
              ))}
            </ResumeSection>
          ) : null}

          {activeSections.has('personalProjects') ? (
            <ResumeSection title={labels.personalProjects}>
              {personalProjectsContent.personalProjects.slice(0, 3).map((item) => (
                <article key={item.id} className="resume-preview-entry">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </ResumeSection>
          ) : null}

          {activeSections.has('courses') ? (
            <ResumeSection title={labels.courses}>
              {coursesContent.courses.map((group) => (
                <article key={group.id} className="resume-preview-entry">
                  <h4>{group.provider}</h4>
                  <span>{group.period}</span>
                  <ul className="resume-preview-bullet-list is-main">
                    {group.items.slice(0, 6).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </ResumeSection>
          ) : null}

          {activeSections.has('hobbies') ? (
            <ResumeSection title={labels.hobbies}>
              <ul className="resume-preview-bullet-list is-main">
                {footerContent.hobbies.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ResumeSection>
          ) : null}
        </div>
      </article>
    </main>
  );
}
