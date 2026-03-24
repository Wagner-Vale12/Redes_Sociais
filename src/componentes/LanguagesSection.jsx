import { useEffect, useRef, useState } from 'react';

const languagesContent = {
  PT: {
    section: {
      title: 'Idiomas',
      observationLabel: 'Observação',
      seeMoreLabel: 'Ver mais',
      seeLessLabel: 'Ver menos'
    },
    languages: [
      {
        id: 'pt',
        flagCode: 'br',
        name: 'Português',
        level: 'Nativo',
        sections: [
          { title: 'Comunicação', text: 'Comunicação plena em ambientes pessoais, profissionais e técnicos, com clareza tanto em contextos formais quanto informais.' },
          { title: 'Conversação', text: 'Fluência natural para reuniões, apresentações, atendimento e colaboração no dia a dia.' },
          { title: 'Leitura', text: 'Leitura confortável de documentação, artigos, contratos, materiais técnicos e conteúdo acadêmico.' },
          { title: 'Escrita', text: 'Escrita clara de mensagens, textos, especificações, anotações técnicas e comunicações profissionais.' }
        ]
      },
      {
        id: 'en',
        flagCode: 'us',
        name: 'Inglês',
        level: 'Intermediário',
        sections: [
          { title: 'Comunicação', text: 'Compreensão e expressão adequadas para trabalho, estudos e interações técnicas com apoio de contexto.' },
          { title: 'Conversação', text: 'Conversação funcional sobre temas gerais e técnicos, em evolução contínua com prática.' },
          { title: 'Leitura', text: 'Leitura confortável de documentação, artigos técnicos, tutoriais e materiais profissionais em inglês.' },
          { title: 'Escrita', text: 'Escrita de mensagens, comentários em código, resumos e textos técnicos básicos quando necessário.' }
        ],
        note: 'Atualmente, estou em processo contínuo de desenvolvimento do inglês, combinando cursos especializados na Udemy com prática recorrente em plataformas como Duolingo e BeSpeaker. Esse processo é direcionado ao aprimoramento de habilidades de leitura, escuta, vocabulário técnico e conversação, com foco em comunicação no contexto profissional e tecnológico.'
      }
    ]
  },
  EN: {
    section: {
      title: 'Languages',
      observationLabel: 'Note',
      seeMoreLabel: 'See more',
      seeLessLabel: 'See less'
    },
    languages: [
      {
        id: 'pt',
        flagCode: 'br',
        name: 'Portuguese',
        level: 'Native',
        sections: [
          { title: 'Communication', text: 'Full communication in personal, professional, and technical environments, with clarity in both formal and informal contexts.' },
          { title: 'Conversation', text: 'Natural fluency for meetings, presentations, support, and day-to-day collaboration.' },
          { title: 'Reading', text: 'Comfortable reading of documentation, articles, contracts, technical materials, and academic content.' },
          { title: 'Writing', text: 'Clear writing of messages, texts, specifications, technical notes, and professional communication.' }
        ]
      },
      {
        id: 'en',
        flagCode: 'us',
        name: 'English',
        level: 'Intermediate',
        sections: [
          { title: 'Communication', text: 'Adequate comprehension and expression for work, study, and technical interactions with contextual support.' },
          { title: 'Conversation', text: 'Functional conversation about general and technical topics, continuously improving through practice.' },
          { title: 'Reading', text: 'Comfortable reading of documentation, technical articles, tutorials, and professional materials in English.' },
          { title: 'Writing', text: 'Writing messages, code comments, summaries, and basic technical texts when necessary.' }
        ],
       note: 'Currently, I am continuously improving my English by combining specialized courses on Udemy with regular practice on platforms such as Duolingo and BeSpeaker. This process is focused on enhancing reading, listening, technical vocabulary, and conversational skills, with an emphasis on communication in professional and technological contexts.'
      }
    ]
  }
};

export function getLanguagesContent(languageCode) {
  return languagesContent[languageCode] ?? languagesContent.PT;
}

function LanguageCard({ language, labels }) {
  const collapsedBodyHeight = 280;
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    const element = bodyRef.current;

    if (!element) { 
      return undefined;
    }

    function measureOverflow() {
      setHasOverflow(element.scrollHeight > collapsedBodyHeight + 2);
    }

    measureOverflow();

    const observer = new ResizeObserver(() => {
      measureOverflow();
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [language]);

  return (
    <article className="language-card">
      <div className="language-card-header">
        <div className="language-flag" aria-hidden="true">
          <span className={`language-flag-badge fi fi-${language.flagCode}`} />
        </div>

        <div className="language-heading">
          <h3>{language.name}</h3>
        </div>

        <span className="language-level">{language.level}</span>
      </div>

      <div className="language-divider" aria-hidden="true" />

      <div
        ref={bodyRef}
        className={`language-card-body ${isExpanded ? 'is-expanded' : ''}`}
      >
        <div className="language-sections">
          {language.sections.map((section) => (
            <div key={section.title} className="language-copy-block">
              <strong>{section.title}</strong>
              <p>{section.text}</p>
            </div>
          ))}
        </div>

        {language.note ? (
          <div className="language-note">
            <strong>{labels.observationLabel}</strong>
            <p>{language.note}</p>
          </div>
        ) : null}
      </div>

      {hasOverflow ? (
        <button
          type="button"
          className="language-toggle"
          onClick={() => setIsExpanded((current) => !current)}
        >
          {isExpanded ? labels.seeLessLabel : labels.seeMoreLabel}
        </button>
      ) : null}
    </article>
  );
}

export default function LanguagesSection({ content }) {
  return (
    <section id="idiomas" className="languages-section">
      <header className="section-heading">
        <span className="section-heading-icon" aria-hidden="true">
          文
        </span>
        <h2>{content.section.title}</h2>
      </header>

      <div className="languages-grid">
        {content.languages.map((language) => (
          <LanguageCard key={language.id} language={language} labels={content.section} />
        ))}
      </div>
    </section>
  );
}
