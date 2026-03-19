const certificationsContent = {
  PT: {
    section: {
      title: 'Certificacoes',
      subtitle: 'Credenciais verificaveis da sua carreira.',
      linkLabel: 'Ver carteira na Credly.',
      verifyLabel: 'Verificar na Credly ↗'
    },
    certifications: [
      {
        id: 'cert-1',
        badge: 'DS',
        title: 'Nome da certificacao 01',
        issuer: 'Instituicao ou plataforma emissora.',
        description: 'Use este card para colocar o nome da certificacao, um pequeno resumo e o que ela comprova no seu perfil.',
        href: 'https://www.credly.com/'
      },
      {
        id: 'cert-2',
        badge: 'AI',
        title: 'Nome da certificacao 02',
        issuer: 'Emissor da certificacao.',
        description: 'Esse espaco funciona bem para certificados de IA, desenvolvimento, cloud, metodologias ou qualquer trilha relevante.',
        href: 'https://www.credly.com/'
      },
      {
        id: 'cert-3',
        badge: 'RW',
        title: 'Nome da certificacao 03',
        issuer: 'Empresa, curso ou academia.',
        description: 'Se quiser, voce pode manter o mesmo estilo da imagem e depois ir trocando cada card com seus dados reais.',
        href: 'https://www.credly.com/'
      },
      {
        id: 'cert-4',
        badge: 'SC',
        title: 'Nome da certificacao 04',
        issuer: 'Organizacao certificadora.',
        description: 'Aqui cabe uma descricao curta com foco em fundamentos, resultado obtido ou nivel da credencial conquistada.',
        href: 'https://www.credly.com/'
      },
      {
        id: 'cert-5',
        badge: 'LL',
        title: 'Nome da certificacao 05',
        issuer: 'Plataforma de estudos.',
        description: 'Tambem pode usar este bloco para cursos importantes, trilhas profissionais ou badges verificaveis da sua carreira.',
        href: 'https://www.credly.com/'
      },
      {
        id: 'cert-6',
        badge: 'WD',
        title: 'Nome da certificacao 06',
        issuer: 'Microsoft, Oracle, AWS, etc.',
        description: 'Se voce quiser, eu depois posso preencher cada card com o nome real das suas certificacoes e links oficiais.',
        href: 'https://www.credly.com/'
      }
    ]
  },
  EN: {
    section: {
      title: 'Certifications',
      subtitle: 'Verifiable credentials in your career.',
      linkLabel: 'View Credly profile.',
      verifyLabel: 'Verify on Credly ↗'
    },
    certifications: [
      {
        id: 'cert-1',
        badge: 'DS',
        title: 'Certification name 01',
        issuer: 'Issuing institution or platform.',
        description: 'Use this card to place the certification name, a short summary, and what it proves in your profile.',
        href: 'https://www.credly.com/'
      },
      {
        id: 'cert-2',
        badge: 'AI',
        title: 'Certification name 02',
        issuer: 'Certification issuer.',
        description: 'This space works well for AI, development, cloud, methodologies, or any relevant learning path certificates.',
        href: 'https://www.credly.com/'
      },
      {
        id: 'cert-3',
        badge: 'RW',
        title: 'Certification name 03',
        issuer: 'Company, course, or academy.',
        description: 'If you want, you can keep the same style as the reference image and later replace each card with your real data.',
        href: 'https://www.credly.com/'
      },
      {
        id: 'cert-4',
        badge: 'SC',
        title: 'Certification name 04',
        issuer: 'Certifying organization.',
        description: 'This is a good place for a short description focused on fundamentals, achievement, or credential level.',
        href: 'https://www.credly.com/'
      },
      {
        id: 'cert-5',
        badge: 'LL',
        title: 'Certification name 05',
        issuer: 'Learning platform.',
        description: 'You can also use this block for important courses, professional learning paths, or verifiable badges in your career.',
        href: 'https://www.credly.com/'
      },
      {
        id: 'cert-6',
        badge: 'WD',
        title: 'Certification name 06',
        issuer: 'Microsoft, Oracle, AWS, etc.',
        description: 'If you want, I can later fill each card with the real names of your certifications and official links.',
        href: 'https://www.credly.com/'
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
        <span className="section-heading-icon" aria-hidden="true">
          ◉
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
              <span>{certification.badge}</span>
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
