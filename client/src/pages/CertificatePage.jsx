import { certifications } from "../data.js";

export default function CertificatePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Certificates</p>
          <h2>Courses and achievements</h2>
        </div>

        <div className="certificate-grid">
          {certifications.map((certificate, index) => (
            <article
              className="certificate-card reveal"
              key={certificate.name}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <h3>{certificate.name}</h3>
              {certificate.preview ? (
                <a
                  className="certificate-preview-link"
                  href={certificate.preview}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${certificate.name} certificate image`}
                >
                  <img
                    className="certificate-image"
                    src={certificate.preview}
                    alt={`${certificate.name} certificate`}
                    loading="lazy"
                  />
                </a>
              ) : (
                <iframe
                  title={`${certificate.name} certificate preview`}
                  src={certificate.url}
                  className="certificate-embed"
                  loading="lazy"
                />
              )}
              <div className="certificate-actions">
                <a
                  className="btn btn-solid"
                  href={certificate.preview || certificate.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {certificate.preview ? "View full-size certificate ↗" : "Open certificate ↗"}
                </a>
                <a className="btn btn-outline on-light" href={certificate.url} download>
                  Download original
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .certificate-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
          gap: 20px;
          margin-top: 22px;
        }
        .certificate-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 20px;
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 12px;
        }
        .certificate-card h3 {
          font-size: 17px;
          line-height: 1.4;
        }
        .certificate-preview-link,
        .certificate-image,
        .certificate-embed {
          display: block;
          width: 100%;
          height: 280px;
          border: 0;
          border-radius: 8px;
          background: #fff;
        }
        .certificate-image {
          object-fit: contain;
        }
        .certificate-embed {
          overflow: hidden;
        }
        .certificate-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: auto;
        }
      `}</style>
    </section>
  );
}
