const coursesContent = {
  PT: {
    section: {
      title: 'Cursos',
      subtitle: 'Formações e cursos recentes'
    },
    courses: [
      {
        id: 'alura-2024',
        provider: 'Alura',
        period: '2024',
        items: [
          'Lógica de programação: praticando com desafios - 2024 - 8 horas',
          'HTML5 e CSS3 parte 1: crie uma página da Web - 2024 - 8 horas',
          'HTML e CSS: cabeçalho, footer e variáveis CSS - 2024 - 6 horas',
          'Angular: aprimore suas técnicas de animação e crie interfaces ainda mais atraentes - 2024 - 8 horas',
          'Next.js Full stack: arquitetura de componentes Front-end - 2024 - 10 horas',
          'JavaScript para Web: Crie páginas dinâmicas - 2024 - 10 horas',
          'JavaScript: explorando a manipulação de elementos e da localStorage - 2024 - 8 horas',
          'JavaScript: criando requisições assíncronas com Fetch API - 2024 - 8 horas',
          'JavaScript: validando formulários com expressões regulares - 2024 - 8 horas',
          'JavaScript: manipulando objetos e arrays - 2024 - 8 horas',
          'JavaScript: classes e heranças no desenvolvimento de aplicações com orientação a objetos - 2024 - 8 horas',
        ]
      },
      {
        id: 'alura-2025',
        provider: 'Alura',
        period: '2025-2026',
        items: [
          'JavaScript: programando a Orientação a Objetos - 2025 - 8 horas',
          'Bootstrap 5: novos recursos e práticas recomendadas de HTML, CSS e JavaScript - 2025 - 8 horas',
          'HTML e CSS: responsividade com mobile-first - 2025 - 8 horas',
          'Java: criando a sua primeira aplicação - 2025 - 8 horas',
          'HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags - 2025 - 8 horas',
          'React: escrevendo com TypeScript - 2025 - 8 horas',
          'Lógica de programação: explore funções e listas - 2025 - 8 horas',
          'React: construindo componentes com JSX - 2025 - 8 horas',
          'Next.js: conheça o framework React para desenvolvimento full stack - 2025 - 8 horas',
          'React: criando um Design System com Tailwind CSS - 2025 - 8 horas',
          'Lógica de programação: praticando com desafios - 2026 - 8 horas',
        ]
      },
       {
        id: 'Udemy-2023',
        provider: 'Udemy',
        period: '2023',
        items: [
          'Bootstrap 4 - Curso COMPLETO com Projetos Reais - 2021 - 10 horas',
          'Curso rápido para aprender sobre jQuery - 2022 - 1 hora',
          'JavaScript Funcional e Reativo - PENSE como um Dev JS - 2022 - 17 horas',
          'Curso de React JS 19 e Next.js 15 - 2023 - 2 horas',
          'Aprenda a Gerenciar e Planejar seus projetos utilizando o Azure DevOps (antigo TFS / VSTS) - 2023 - 12 horas',
          'Curso completo para aprender a construir sites usando as linguagens web mais conceituadas do mercado - 2022 - 13 horas',
          'Aplicação Desktop com JavaScript, Electron JS e Vue JS - 2023 - 1,5 horas',
          'Azure Boards : Gerenciamento de Projetos com Azure DevOps - 2023 - 12 horas',
          'Construa aplicações web completas com React e Redux! - 2023 - 11,5 horas',
          'React Native: Desenvolva APPs Nativas para Android e iOS - 2024 - 45 horas',
          'Java primeiros passos: Lógica de Programação e Algoritmos - 2024 - 8 horas',
          'JavaScript - Curso COMPLETO com 6 Projetos REAIS - 2024 - 20 horas',
          'Programação Web Front-end Fundamentos: HTML, CSS, Lógica de programação e Javascript. - 2024 - 132,5 horas',
          'Curso de React JS 19 e Next.js 15 - 2026 - 83,5 horas',

        ]
      },
    ]
  },
  EN: {
    section: {
      title: 'Courses',
      subtitle: 'Recent courses and learning paths'
    },
    courses: [
      {
        id: 'alura-2024',
        provider: 'Alura',
        period: '2024',
        items: [
          'Programming Logic: practicing with challenges - 2024 - 8 hours',
          'HTML5 and CSS3 Part 1: create a web page - 2024 - 8 hours',
          'HTML and CSS: header, footer, and CSS variables - 2024 - 6 hours',
          'Angular: improve your animation techniques and build more engaging interfaces - 2024 - 8 hours',
          'Next.js Full Stack: front-end component architecture - 2024 - 10 hours',
          'JavaScript for the Web: build dynamic pages - 2024 - 10 hours',
          'JavaScript: exploring DOM manipulation and localStorage - 2024 - 8 hours',
          'JavaScript: building asynchronous requests with Fetch API - 2024 - 8 hours',
          'JavaScript: validating forms with regular expressions - 2024 - 8 hours',
          'JavaScript: working with objects and arrays - 2024 - 8 hours',
          'JavaScript: classes and inheritance in object-oriented application development - 2024 - 8 hours',
        ]
      },
      {
        id: 'alura-2025',
        provider: 'Alura',
        period: '2025-2026',
        items: [
          'JavaScript: programming with object-oriented concepts - 2025 - 8 hours',
          'Bootstrap 5: new features and recommended HTML, CSS, and JavaScript practices - 2025 - 8 hours',
          'HTML and CSS: responsive layouts with mobile-first - 2025 - 8 hours',
          'Java: creating your first application - 2025 - 8 hours',
          'HTML and CSS: development environments, file structure, and tags - 2025 - 8 hours',
          'React: writing applications with TypeScript - 2025 - 8 hours',
          'Programming Logic: exploring functions and lists - 2025 - 8 hours',
          'React: building components with JSX - 2025 - 8 hours',
          'Next.js: getting to know the React framework for full stack development - 2025 - 8 hours',
          'React: creating a design system with Tailwind CSS - 2025 - 8 hours',
          'Programming Logic: practicing with challenges - 2026 - 8 hours',
        ]
      },
      {
        id: 'udemy-2021-2026',
        provider: 'Udemy',
        period: '2021-2026',
        items: [
          'Bootstrap 4 - complete course with real-world projects - 2021 - 10 hours',
          'Quick course to learn jQuery - 2022 - 1 hour',
          'Functional and Reactive JavaScript - think like a JS developer - 2022 - 17 hours',
          'React JS 19 and Next.js 15 course - 2023 - 2 hours',
          'Learn to manage and plan your projects using Azure DevOps (formerly TFS / VSTS) - 2023 - 12 hours',
          'Complete course to learn how to build websites using the most established web technologies on the market - 2022 - 13 hours',
          'Desktop application with JavaScript, Electron JS, and Vue JS - 2023 - 1.5 hours',
          'Azure Boards: project management with Azure DevOps - 2023 - 12 hours',
          'Build complete web applications with React and Redux! - 2023 - 11.5 hours',
          'React Native: build native apps for Android and iOS - 2024 - 45 hours',
          'Java first steps: programming logic and algorithms - 2024 - 8 hours',
          'JavaScript - complete course with 6 real projects - 2024 - 20 hours',
          'Front-end web foundations: HTML, CSS, programming logic, and JavaScript - 2024 - 132.5 hours',
          'React JS 19 and Next.js 15 course - 2026 - 83.5 hours',
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
            <header className="course-group-header">
              <h4>{group.provider}</h4>
              <span className="course-group-period">{group.period}</span>
            </header>

            <ul className="course-items">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
