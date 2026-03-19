const languagesContent = {
  PT: {
    section: {
      title: 'Idiomas',
      observationLabel: 'Observacao'
    },
    languages: [
      {
        id: 'pt',
        flag: '🇧🇷',
        name: 'Portugues',
        level: 'Nativo',
        sections: [
          { title: 'Comunicacao', text: 'Comunicacao plena em ambientes pessoais, profissionais e tecnicos, com clareza tanto em contextos formais quanto informais.' },
          { title: 'Conversacao', text: 'Fluencia natural para reunioes, apresentacoes, atendimento e colaboracao no dia a dia.' },
          { title: 'Leitura', text: 'Leitura confortavel de documentacao, artigos, contratos, materiais tecnicos e conteudo academico.' },
          { title: 'Escrita', text: 'Escrita clara de mensagens, textos, especificacoes, anotacoes tecnicas e comunicacoes profissionais.' }
        ]
      },
      {
        id: 'en',
        flag: '🇺🇸',
        name: 'Ingles',
        level: 'Intermediario',
        sections: [
          { title: 'Comunicacao', text: 'Compreensao e expressao adequadas para trabalho, estudos e interacoes tecnicas com apoio de contexto.' },
          { title: 'Conversacao', text: 'Conversacao funcional sobre temas gerais e tecnicos, em evolucao continua com pratica.' },
          { title: 'Leitura', text: 'Leitura confortavel de documentacao, artigos tecnicos, tutoriais e materiais profissionais em ingles.' },
          { title: 'Escrita', text: 'Escrita de mensagens, comentarios em codigo, resumos e textos tecnicos basicos quando necessario.' }
        ],
        note: 'Voce pode usar este bloco para contar se esta estudando atualmente, fazendo curso ou praticando conversacao.'
      }
    ]
  },
  EN: {
    section: {
      title: 'Languages',
      observationLabel: 'Note'
    },
    languages: [
      {
        id: 'pt',
        flag: '🇧🇷',
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
        flag: '🇺🇸',
        name: 'English',
        level: 'Intermediate',
        sections: [
          { title: 'Communication', text: 'Adequate comprehension and expression for work, study, and technical interactions with contextual support.' },
          { title: 'Conversation', text: 'Functional conversation about general and technical topics, continuously improving through practice.' },
          { title: 'Reading', text: 'Comfortable reading of documentation, technical articles, tutorials, and professional materials in English.' },
          { title: 'Writing', text: 'Writing messages, code comments, summaries, and basic technical texts when necessary.' }
        ],
        note: 'You can use this block to mention whether you are currently studying, taking classes, or practicing conversation.'
      }
    ]
  }
};

export function getLanguagesContent(languageCode) {
  return languagesContent[languageCode] ?? languagesContent.PT;
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
          <article key={language.id} className="language-card">
            <div className="language-card-header">
              <div className="language-flag" aria-hidden="true">
                {language.flag}
              </div>

              <div className="language-heading">
                <h3>{language.name}</h3>
              </div>

              <span className="language-level">{language.level}</span>
            </div>

            <div className="language-divider" aria-hidden="true" />

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
                <strong>{content.section.observationLabel}</strong>
                <p>{language.note}</p>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
