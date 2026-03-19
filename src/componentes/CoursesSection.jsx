const coursesContent = {
  PT: {
    section: {
      title: 'Cursos',
      subtitle: 'Cursos e treinamentos a distancia'
    },
    courses: [
      {
        id: 'cvc',
        provider: 'Instituicao 01',
        items: ['Curso exemplo 01 - 2020 - 1 hora', 'Curso exemplo 02 - 2020 - 1 hora']
      },
      {
        id: 'bradesco',
        provider: 'Instituicao 02',
        items: [
          'Curso exemplo 03 - 2010 - 23 horas',
          'Curso exemplo 04 - 2010 - 64 horas',
          'Curso exemplo 05 - 2010 - 35 horas',
          'Curso exemplo 06 - 2010 - 22 horas',
          'Curso exemplo 07 - 2018 - 5 horas',
          'Curso exemplo 08 - 2018 - 24 horas',
          'Curso exemplo 09 - 2018 - 20 horas',
          'Curso exemplo 10 - 2019 - 42 horas',
          'Curso exemplo 11 - 2019 - 12 horas',
          'Curso exemplo 12 - 2019 - 10 horas',
          'Curso exemplo 13 - 2018 - 12 horas',
          'Curso exemplo 14 - 2019 - 8 horas'
        ]
      },
      {
        id: 'senai',
        provider: 'Instituicao 03',
        items: [
          'Curso exemplo 15 - 2018 - 14 horas',
          'Curso exemplo 16 - 2018 - 20 horas',
          'Curso exemplo 17 - 2018 - 20 horas',
          'Curso exemplo 18 - 2018 - 14 horas',
          'Curso exemplo 19 - 2018 - 14 horas',
          'Curso exemplo 20 - 2018 - 14 horas',
          'Curso exemplo 21 - 2019 - 14 horas',
          'Curso exemplo 22 - 2019 - 14 horas',
          'Curso exemplo 23 - 2019 - 14 horas',
          'Curso exemplo 24 - 2019 - 14 horas'
        ]
      }
    ]
  },
  EN: {
    section: {
      title: 'Courses',
      subtitle: 'Online courses and training'
    },
    courses: [
      {
        id: 'cvc',
        provider: 'Institution 01',
        items: ['Sample course 01 - 2020 - 1 hour', 'Sample course 02 - 2020 - 1 hour']
      },
      {
        id: 'bradesco',
        provider: 'Institution 02',
        items: [
          'Sample course 03 - 2010 - 23 hours',
          'Sample course 04 - 2010 - 64 hours',
          'Sample course 05 - 2010 - 35 hours',
          'Sample course 06 - 2010 - 22 hours',
          'Sample course 07 - 2018 - 5 hours',
          'Sample course 08 - 2018 - 24 hours',
          'Sample course 09 - 2018 - 20 hours',
          'Sample course 10 - 2019 - 42 hours',
          'Sample course 11 - 2019 - 12 hours',
          'Sample course 12 - 2019 - 10 hours',
          'Sample course 13 - 2018 - 12 hours',
          'Sample course 14 - 2019 - 8 hours'
        ]
      },
      {
        id: 'senai',
        provider: 'Institution 03',
        items: [
          'Sample course 15 - 2018 - 14 hours',
          'Sample course 16 - 2018 - 20 hours',
          'Sample course 17 - 2018 - 20 hours',
          'Sample course 18 - 2018 - 14 hours',
          'Sample course 19 - 2018 - 14 hours',
          'Sample course 20 - 2018 - 14 hours',
          'Sample course 21 - 2019 - 14 hours',
          'Sample course 22 - 2019 - 14 hours',
          'Sample course 23 - 2019 - 14 hours',
          'Sample course 24 - 2019 - 14 hours'
        ]
      }
    ]
  }
};

export function getCoursesContent(languageCode) {
  return coursesContent[languageCode] ?? coursesContent.PT;
}

export default function CoursesSection({ content }) {
  return (
    <section id="cursos" className="courses-section">
      <header className="section-heading">
        <span className="section-heading-icon" aria-hidden="true">
          ⌘
        </span>
        <h2>{content.section.title}</h2>
      </header>

      <div className="courses-copy">
        <h3>{content.section.subtitle}</h3>
      </div>

      <div className="courses-groups">
        {content.courses.map((group) => (
          <section key={group.id} className="course-group">
            <h4>{group.provider}</h4>

            <div className="course-items">
              {group.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
