import { educationTimeline, certifications, additional } from "../data.js";

export default function EducationPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Education</p>
          <h2>Ten years of school, then three of building things.</h2>
        </div>

        <div className="timeline">
          {educationTimeline.map((item, i) => (
            <div className="timeline-item reveal" key={item.title} style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="timeline-marker">
                <span className="timeline-level">{item.level}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-top">
                  <h3>{item.title}</h3>
                  <span className="timeline-score">{item.score}</span>
                </div>
                <p className="timeline-school">{item.school}</p>
                <p className="timeline-period">{item.period}</p>
                {item.detail && <p className="timeline-detail">{item.detail}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="edu-secondary">
          <div className="reveal">
            <p className="eyebrow">Certifications</p>
            <ul className="cert-list">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <p className="eyebrow">Additional</p>
            <p className="additional-line"><strong>Languages:</strong> {additional.languages}</p>
            <p className="additional-line"><strong>Interests:</strong> {additional.interests}</p>
          </div>
        </div>
      </div>

      <style>{`
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-left: 2px solid var(--border);
          margin-left: 6px;
        }
        .timeline-item {
          display: flex;
          gap: 26px;
          padding: 0 0 36px 28px;
          position: relative;
        }
        .timeline-marker {
          position: absolute;
          left: -9px;
          top: 2px;
        }
        .timeline-level {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--teal-500);
          border: 3px solid var(--bg);
          font-size: 0;
        }
        .timeline-content {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 22px 24px;
          flex: 1;
        }
        .timeline-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
        }
        .timeline-top h3 {
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 700;
          color: var(--ink);
        }
        .timeline-score {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--teal-700);
          background: rgba(18,114,107,0.08);
          border: 1px solid rgba(18,114,107,0.22);
          border-radius: 999px;
          padding: 3px 10px;
          white-space: nowrap;
        }
        .timeline-school {
          color: var(--muted);
          margin-top: 6px;
          font-size: 15px;
        }
        .timeline-period {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted-2);
          margin-top: 6px;
        }
        .timeline-detail {
          margin-top: 12px;
          color: var(--muted);
          font-size: 14.5px;
          line-height: 1.6;
        }
        .edu-secondary {
          margin-top: 20px;
          padding-top: 44px;
          border-top: 1px solid var(--border);
          display: grid;
          gap: 40px;
        }
        @media (min-width: 780px) {
          .edu-secondary { grid-template-columns: 1fr 1fr; }
        }
        .cert-list {
          list-style: none;
          margin: 12px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .cert-list li {
          font-size: 14.5px;
          color: var(--muted);
          line-height: 1.55;
          padding-left: 18px;
          position: relative;
        }
        .cert-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--teal-500);
        }
        .additional-line {
          margin-top: 12px;
          color: var(--muted);
          font-size: 14.5px;
        }
        .additional-line strong {
          color: var(--ink);
        }
      `}</style>
    </section>
  );
}
