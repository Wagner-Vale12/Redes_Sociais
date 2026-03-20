import { FaCertificate } from 'react-icons/fa';

const certificationsContent = {
  PT: {
    section: {
      title: 'Certificações',
     },
    certifications: [
      {
        id: 'cert-1',
        badge: 'UD',
        badgeImage: '/imagens/badge-udemy.svg',
        title: 'React 19 e Next.js 15 com App Router, Server Actions, Server Components, Tailwind CSS, TypeScript e Rest API com NestJS',
        issuer: 'Udemy',
        description: 'Curso de React 19 e Next.js 15 com Tailwind, TypeScript e muito mais, do zero ao deploy',
      },
      {
        id: 'cert-2',
        badge: 'TS',
        badgeImage: '/imagens/badge-udemy.svg',
        title: 'Express Js + Typescript multipart/form-data Formulário com Imagem e front-end usando Next Js',
        issuer: 'Udemy',
        description: 'Curso de node js para formulários multipart/form-data',
      },
      {
        id: 'cert-3',
        badge: 'SF',
        badgeImage: '/imagens/badge-certiprof.svg',
        title: 'Scrum Foundation Professional Certificate (SFPC)',
        issuer: 'CertiProf',
        description: 'Certificação que valida conhecimentos fundamentais em metodologias ágeis e no framework Scrum, incluindo seus princípios, papéis, eventos e artefatos. Emitida pela CertiProf, organização internacional focada em certificações profissionais.'
      },
      {
        id: 'cert-4',
        badge: 'AL',
        badgeImage: '/imagens/badge-alura.svg',
        title: 'Desenvolvimento de aplicações Web em JavaScript com tarefas concorrentes e orientadas a objetos.',
        issuer: 'Alura',
        description: 'Certificação voltada ao desenvolvimento de aplicações web com JavaScript, abordando execução assíncrona, tarefas concorrentes e conceitos de orientação a objetos. Emitida pela Alura.',
      },
      {
        id: 'cert-5',
        badge: 'AL',
        badgeImage: '/imagens/badge-alura.svg',
        title: 'Node.js: continue seu projeto full stack criando uma API com Express',
        issuer: 'Alura',
        description: 'Curso para aprender a criar uma API Node.js usando Express Entenda como funcionam requisições HTTP Compreenda como testar e validar uma API manualmente Aprenda a manipular arquivos JSON para armazenar dados Saiba como lidar com erros na sua aplicação Conheça os mais utilizados métodos HTTP.'
      },
      {
        id: 'cert-6',
        badge: 'AL',
        badgeImage: '/imagens/badge-alura.svg',
        title: 'Next.js Full stack: arquitetura de componentes Front-end',
        issuer: 'Alura',
        description: 'Certificação voltada ao desenvolvimento de aplicações web com Next.js, abordando arquitetura de componentes e práticas de desenvolvimento full stack. Emitida pela Alura.'
      }
    ]
  },
  EN: {
    section: {
      title: 'Certifications'
    },
    certifications: [
      {
        id: 'cert-1',
        badge: 'UD',
        badgeImage: '/imagens/badge-udemy.svg',
        title: 'React 19 and Next.js 15 with App Router, Server Actions, Server Components, Tailwind CSS, TypeScript, and REST API with NestJS',
        issuer: 'Udemy',
        description: 'React 19 and Next.js 15 course with Tailwind, TypeScript, and much more, from scratch to deployment.'
      },
      {
        id: 'cert-2',
        badge: 'TS',
        badgeImage: '/imagens/badge-udemy.svg',
        title: 'Express.js + TypeScript multipart/form-data form with image and front-end using Next.js',
        issuer: 'Udemy',
        description: 'Node.js course focused on multipart/form-data forms.'
      },
      {
        id: 'cert-3',
        badge: 'SF',
        badgeImage: '/imagens/badge-certiprof.svg',
        title: 'Scrum Foundation Professional Certificate (SFPC)',
        issuer: 'CertiProf',
        description: 'Certification that validates fundamental knowledge in agile methodologies and the Scrum framework, including its principles, roles, events, and artifacts. Issued by CertiProf, an international organization focused on professional certifications.'
      },
      {
        id: 'cert-4',
        badge: 'AL',
        badgeImage: '/imagens/badge-alura.svg',
        title: 'Development of web applications in JavaScript with concurrent and object-oriented tasks.',
        issuer: 'Alura',
        description: 'Certification focused on JavaScript web application development, covering asynchronous execution, concurrent tasks, and object-oriented concepts. Issued by Alura.'
      },
      {
        id: 'cert-5',
        badge: 'AL',
        badgeImage: '/imagens/badge-alura.svg',
        title: 'Node.js: continue your full stack project by creating an API with Express',
        issuer: 'Alura',
        description: 'Course to learn how to build a Node.js API using Express. Understand how HTTP requests work, how to manually test and validate an API, how to manipulate JSON files to store data, handle errors in your application, and use the most common HTTP methods.'
      },
      {
        id: 'cert-6',
        badge: 'AL',
        badgeImage: '/imagens/badge-alura.svg',
        title: 'Next.js Full stack: front-end component architecture',
        issuer: 'Alura',
        description: 'Certification focused on Next.js web application development, covering component architecture and full stack development practices. Issued by Alura.'
      }
    ]
  }
};

export function getCertificationsContent(languageCode) {
  return certificationsContent[languageCode] ?? certificationsContent.PT;
}

export default function CertificationsSection({ content }) {
  return (
    <section id="certificacoes" className="certifications-section">
      <header className="section-heading">
        <span className="section-heading-icon section-heading-icon-certificate" aria-hidden="true">
          <FaCertificate />
        </span>
        <div className="section-heading-copy">
          <h2>{content.section.title}</h2>
          <p>
            {content.section.subtitle}{' '}
            <a href="https://www.credly.com/" target="_blank" rel="noreferrer">
              {content.section.linkLabel}
            </a>
          </p>
        </div>
      </header>

      <div className="certifications-grid">
        {content.certifications.map((certification) => (
          <article key={certification.id} className="certification-card">
            <div className="certification-badge" aria-hidden="true">
              {certification.badgeImage ? (
                <span className="certification-badge-image-wrap">
                  <img
                    className="certification-badge-image"
                    src={certification.badgeImage}
                    alt=""
                  />
                </span>
              ) : (
                <span>{certification.badge}</span>
              )}
            </div>

            <div className="certification-content">
              <h3>{certification.title}</h3>
              <p className="certification-issuer">{certification.issuer}</p>
              <p>{certification.description}</p>
              <a href={certification.href} target="_blank" rel="noreferrer">
                {content.section.verifyLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
