import { useState } from 'react';

const personalProjectsContent = {
  PT: {
    section: {
      title: 'Projetos Pessoais',
      githubLabel: 'GitHub',
      siteLabel: 'Ver site',
      seeMoreLabel: 'Ver mais',
      seeLessLabel: 'Ver menos'
    },
    personalProjects: [
      {
        id: 'personal-1',
        title: 'Carrinho de Compras',
        description: 'Desenvolvi uma aplicação de carrinho de compras utilizando HTML, CSS e JavaScript puro, com foco em manipulação eficiente do DOM e construção de uma interface interativa. A aplicação permite gerenciamento dinâmico de produtos, incluindo adição, remoção, atualização de quantidades e cálculo automático do total em tempo real. Foram aplicados conceitos de responsividade, organização de código e boas práticas de desenvolvimento front-end, visando performance e experiência do usuário.',
        github: 'https://github.com/Wagner-Vale12/Carrinho-de-Compras',
        site: 'https://carrinho-de-compras-snowy.vercel.app/',
        stars: '2 estrelas',
        updated: 'Atualizado recentemente'
      },
      {
        id: 'personal-2',
        title: 'Jogo de Cartas',
        description: 'Projeto desenvolvido durante os estudos utilizando JavaScript, com foco em prática e aprendizado de conceitos fundamentais da linguagem. O jogo de cartas é uma aplicação interativa que simula um jogo simples, permitindo aos usuários jogar contra o computador. O projeto foi criado para explorar manipulação de arrays, lógica de jogo, eventos e interatividade, proporcionando uma experiência divertida e educativa para aprimorar as habilidades e a lógica.',
        github: 'https://github.com/Wagner-Vale12/jogoDeCartas',
        site: 'https://jogo-de-cartas-lilac.vercel.app/',
        stars: '5 estrelas',
        updated: 'Atualizado recentemente'
      },
      {
        id: 'personal-3',
        title: 'Projeto Fokus',
        description: 'Estudando manipulação do DOM, consegui desenvolver esse contador de tempo. O projeto é uma aplicação de foco e produtividade, onde os usuários podem configurar um timer para se concentrar em suas tarefas. Ele inclui funcionalidades como iniciar, pausar e resetar o timer, além de permitir a personalização do tempo de foco. O objetivo é ajudar os usuários a manterem a concentração e aumentarem sua eficiência durante períodos de trabalho ou estudo.',
        github: 'https://github.com/Wagner-Vale12/projeto-fokus',
        site: 'https://projeto-fokus-mauve.vercel.app/',
        stars: '1 estrela',
        tech: 'TypeScript',
        updated: 'Atualizado recentemente',
        status: 'Projeto Offline'
      },
       {
        id: 'personal-4',
        title: 'Play-Requisições',
        description: 'Página inicial e formulário de cadastro de vídeos, uma plataforma de compartilhamento de vídeos. O projeto é uma aplicação web que permite aos usuários visualizar uma página inicial com uma lista de vídeos disponíveis e um formulário para cadastrar novos vídeos. A página inicial exibe os vídeos cadastrados, enquanto o formulário de cadastro coleta informações como título, URL e descrição do vídeo. O objetivo é criar uma interface simples e funcional para facilitar o compartilhamento de vídeos na plataforma.',
        github: 'https://github.com/Wagner-Vale12/Play-requisicoes',
        site: 'https://play-requisicoes.vercel.app/',
        stars: '1 estrela',
        updated: 'Atualizado recentemente',
        status: 'Projeto em desenvolvimento'
      },
       {
        id: 'personal-5',
        title: 'Formulário Monibank',
        description: 'Formulário de criação de contas para o banco virtual MoniBank. O projeto é uma aplicação web que simula um formulário de cadastro para o banco virtual MoniBank. Ele permite aos usuários preencher informações pessoais, como nome, email, senha e outros dados necessários para criar uma conta no banco. O formulário inclui validação de campos, feedback visual e uma interface amigável para garantir uma experiência de cadastro eficiente e segura para os usuários interessados em se tornar clientes do MoniBank.',
        github: 'https://github.com/Wagner-Vale12/Formulario-Monibank',
        site: 'https://formulario-monibank.vercel.app/',
        stars: '1 estrela',
        status: 'Projeto Offline'
      },
       {
        id: 'personal-6',
        title: 'Amigo-Secreto',
        description: 'Sorteador de amigo secreto. O projeto é uma aplicação web que facilita a organização de sorteios de amigo secreto. Ele permite aos usuários criar um grupo, adicionar participantes e realizar o sorteio de forma automática, garantindo que cada participante receba um amigo secreto de maneira justa e aleatória. A aplicação inclui funcionalidades para gerenciar os participantes, visualizar os resultados do sorteio e enviar notificações aos participantes sobre seus amigos secretos. O objetivo é simplificar o processo de organização de sorteios e tornar a experiência mais divertida e eficiente para todos os envolvidos.',
        github: 'https://github.com/Wagner-Vale12/Amigo-Secreto',
        site: 'https://amigo-secreto-cyan-theta.vercel.app/',
        stars: '3 estrelas',
        updated: 'Atualizado recentemente',
      }
    ]
  },
  EN: {
    section: {
      title: 'Personal Projects',
      githubLabel: 'GitHub',
      siteLabel: 'View site',
      seeMoreLabel: 'See more',
      seeLessLabel: 'See less'
    },
    personalProjects: [
      {
        id: 'personal-1',
        title: 'Shopping Cart',
        description: 'I built a shopping cart application using pure HTML, CSS, and JavaScript, with a focus on efficient DOM manipulation and an interactive interface. The application supports dynamic product management, including adding, removing, updating quantities, and automatically calculating the total in real time. I applied responsive design concepts, code organization, and front-end best practices to improve performance and user experience.',
        github: 'https://github.com/Wagner-Vale12/Carrinho-de-Compras',
        site: 'https://carrinho-de-compras-snowy.vercel.app/',
        stars: '2 stars',
        updated: 'Updated recently'
      },
      {
        id: 'personal-2',
        title: 'Card Game',
        description: 'Project developed during my studies using JavaScript, focused on practicing and strengthening core language concepts. The card game is an interactive application where users can play against the computer. It was created to explore array manipulation, game logic, events, and interactivity, delivering a fun and educational experience while improving programming logic and problem solving.',
        github: 'https://github.com/Wagner-Vale12/jogoDeCartas',
        site: 'https://jogo-de-cartas-lilac.vercel.app/',
        stars: '5 stars',
        tech: 'JavaScript',
        updated: 'Updated recently'
      },
      {
        id: 'personal-3',
        title: 'Fokus Project',
        description: 'While studying DOM manipulation, I built this time tracker application. The project is focused on productivity and concentration, allowing users to configure a timer to stay focused on their tasks. It includes features such as start, pause, and reset, as well as custom focus duration settings. The goal is to help users stay concentrated and improve efficiency during work or study sessions.',
        github: 'https://github.com/Wagner-Vale12/projeto-fokus',
        site: 'https://projeto-fokus-mauve.vercel.app/',
        stars: '1 star',
        tech: 'TypeScript',
        updated: 'Updated recently',
        status: 'Offline Project'
      },
      {
        id: 'personal-4',
        title: 'Play Requests',
        description: 'Home page and video registration form for a video-sharing platform. This web application lets users browse a home page with available videos and register new videos through a form. The form collects data such as title, URL, and description, while the home page displays the submitted videos. The goal was to create a simple and functional interface to support video sharing on the platform.',
        github: 'https://github.com/Wagner-Vale12/Play-requisicoes',
        site: 'https://play-requisicoes.vercel.app/',
        tech: 'JavaScript',
        updated: 'Updated recently'
      },
      {
        id: 'personal-5',
        title: 'Monibank Form',
        description: 'Account creation form for the virtual bank MoniBank. This web application simulates a sign-up form for a digital bank, allowing users to fill in personal information such as name, email, password, and other required data to create an account. The form includes field validation, visual feedback, and a user-friendly interface to provide an efficient and secure onboarding experience.',
        github: 'https://github.com/Wagner-Vale12/Formulario-Monibank',
        site: 'https://formulario-monibank.vercel.app/',
        stars: '1 star',
        updated: 'Updated recently',
        status: 'Offline Project'
      },
      {
        id: 'personal-6',
        title: 'Secret Santa',
        description: 'Secret Santa drawing application. This web app helps organize Secret Santa events by allowing users to create a group, add participants, and run the draw automatically, ensuring each participant gets a Secret Santa in a fair and random way. It includes participant management, result viewing, and notification support. The goal is to simplify the organization process and make the experience more fun and efficient for everyone involved.',
        github: 'https://github.com/Wagner-Vale12/Amigo-Secreto',
        site: 'https://amigo-secreto-cyan-theta.vercel.app/',
        stars: '3 stars',
        updated: 'Updated recently'
      }
    ]
  }
};

export function getPersonalProjectsContent(languageCode) {
  return personalProjectsContent[languageCode] ?? personalProjectsContent.PT;
}

function PersonalProjectCard({ project, labels }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="personal-project-card">
      <div className="personal-project-top">
        <h3>{project.title}</h3>
        {project.status ? <span className="personal-status">{project.status}</span> : null}
      </div>

      <div className="project-divider" aria-hidden="true" />
      <p className={isExpanded ? 'is-expanded' : ''}>{project.description}</p>

      <button
        type="button"
        className="personal-project-toggle"
        onClick={() => setIsExpanded((current) => !current)}
      >
        {isExpanded ? labels.seeLessLabel : labels.seeMoreLabel}
      </button>

      <div className="personal-links">
        <a href={project.github} target="_blank" rel="noreferrer">
          <span className="personal-link-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.83c.85 0 1.7.12 2.49.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.58 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
            </svg>
          </span>
          {labels.githubLabel}
        </a>
        <a href={project.site} target="_blank" rel="noreferrer">
          <span className="personal-link-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M14 5h5v5" />
              <path d="M10 14 19 5" />
              <path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
            </svg>
          </span>
          {labels.siteLabel}
        </a>
      </div>

      <div className="personal-meta">
        <span className="personal-badge personal-stars">{project.stars}</span>
        {project.tech ? <span className="personal-badge">{project.tech}</span> : null}
        <span className="personal-updated">{project.updated}</span>
      </div>
    </article>
  );
}

export default function PersonalProjectsSection({ content }) {
  return (
    <section id="projetos-pessoais" className="personal-projects-section">
      <header className="section-heading">
        <span className="section-heading-icon" aria-hidden="true">
          &lt;/&gt;
        </span>
        <h2>{content.section.title}</h2>
      </header>

      <div className="personal-projects-grid">
        {content.personalProjects.map((project) => (
          <PersonalProjectCard key={project.id} project={project} labels={content.section} />
        ))}
      </div>
    </section>
  );
}
