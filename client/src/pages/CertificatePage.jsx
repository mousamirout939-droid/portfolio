import { useEffect, useRef, useState } from "react";
import { certifications } from "../data.js";

export default function CertificatePage() {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!activeCertificate || !viewer) return;

    viewer.showModal();
    return () => {
      if (viewer.open) viewer.close();
    };
  }, [activeCertificate]);

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
              <button
                className="certificate-preview-button"
                type="button"
                onClick={() => setActiveCertificate(certificate)}
                aria-label={`Open ${certificate.name} certificate`}
              >
                {certificate.preview ? (
                  <img
                    className="certificate-image"
                    src={certificate.preview}
                    alt={`${certificate.name} certificate`}
                    loading="lazy"
                  />
                ) : (
                  <iframe
                    title={`${certificate.name} certificate preview`}
                    src={certificate.url}
                    className="certificate-embed"
                    loading="lazy"
                    tabIndex={-1}
                  />
                )}
              </button>
              <div className="certificate-actions">
                <button
                  className="btn btn-solid"
                  type="button"
                  onClick={() => setActiveCertificate(certificate)}
                >
                  Open certificate
                </button>
                <a className="btn btn-outline on-light" href={certificate.url} download>
                  Download original
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <dialog
        className="certificate-viewer"
        ref={viewerRef}
        aria-label={activeCertificate?.name || "Certificate viewer"}
        onClose={() => setActiveCertificate(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        {activeCertificate && (
          <>
            <div className="certificate-viewer-header">
              <h2>{activeCertificate.name}</h2>
              <button
                className="certificate-viewer-close"
                type="button"
                onClick={() => viewerRef.current.close()}
                aria-label="Close certificate viewer"
              >
                Close
              </button>
            </div>
            {activeCertificate.preview ? (
              <img
                className="certificate-viewer-image"
                src={activeCertificate.preview}
                alt={`${activeCertificate.name} certificate`}
              />
            ) : (
              <iframe
                className="certificate-viewer-embed"
                src={activeCertificate.url}
                title={`${activeCertificate.name} certificate`}
              />
            )}
          </>
        )}
      </dialog>

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
        .certificate-preview-button {
          display: block;
          width: 100%;
          height: 280px;
          padding: 0;
          border: 0;
          border-radius: 8px;
          background: #fff;
          cursor: zoom-in;
        }
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
          pointer-events: none;
        }
        .certificate-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: auto;
        }
        .certificate-actions .btn {
          font: inherit;
          cursor: pointer;
        }
        .certificate-viewer {
          width: min(1100px, calc(100vw - 32px));
          max-width: none;
          max-height: calc(100dvh - 32px);
          padding: 20px;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--surface);
          color: var(--ink);
        }
        .certificate-viewer::backdrop {
          background: rgba(8, 16, 28, 0.82);
        }
        .certificate-viewer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 14px;
        }
        .certificate-viewer-header h2 {
          font-size: 18px;
        }
        .certificate-viewer-close {
          flex: 0 0 auto;
          padding: 8px 14px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: var(--surface);
          color: var(--ink);
          cursor: pointer;
        }
        .certificate-viewer-image,
        .certificate-viewer-embed {
          display: block;
          width: 100%;
          height: min(75vh, 820px);
          border: 0;
          border-radius: 8px;
          background: #fff;
          object-fit: contain;
        }
      `}</style>
    </section>
  );
}
