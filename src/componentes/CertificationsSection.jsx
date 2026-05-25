import { FaCertificate } from 'react-icons/fa';

const certificationsContent = {
  PT: {
    section: {
      title: 'Certificações',
     },
    certifications: [
      {
        id: 'cert-3',
        badge: 'SF',
        badgeImage: '/imagens/badge-certiprof.svg',
        title: 'Scrum Foundation Professional Certificate (SFPC)',
        issuer: 'CertiProf',
        description: 'Certificação que valida conhecimentos fundamentais em metodologias ágeis e no framework Scrum, incluindo seus princípios, papéis, eventos e artefatos. Emitida pela CertiProf, organização internacional focada em certificações profissionais.'
      },
    ]
  },
  EN: {
    section: {
      title: 'Certifications'
    },
    certifications: [
      {
        id: 'cert-3',
        badge: 'SF',
        badgeImage: '/imagens/badge-certiprof.svg',
        title: 'Scrum Foundation Professional Certificate (SFPC)',
        issuer: 'CertiProf',
        description: 'Certification that validates fundamental knowledge in agile methodologies and the Scrum framework, including its principles, roles, events, and artifacts. Issued by CertiProf, an international organization focused on professional certifications.'
      },
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
