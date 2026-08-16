import { profile, experience, education } from "../data.js";

export default function About() {
  const facts = [
    { label: "Based in", value: profile.location },
    { label: "Currently", value: `${experience[0].role} · ${experience[0].org}` },
    { label: "Studying", value: `${education.degree}, ${education.school}` },
    { label: "Focused on", value: "Applied ML — computer vision, audio, LLM agents" },
  ];

  return (
    <section id="about" className="section">
      <div className="container about-grid reveal">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <p className="eyebrow">About</p>
          <h2>Grounded in shipping, not just training models.</h2>
        </div>
        <div>
          <p className="about-text">{profile.summary}</p>

          <dl className="about-facts">
            {facts.map((f) => (
              <div className="about-fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          gap: 32px;
        }
        @media (min-width: 780px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr;
            align-items: start;
          }
        }
        .about-text {
          color: var(--muted);
          font-size: 17px;
          line-height: 1.7;
        }
        .about-facts {
          margin: 30px 0 0;
          padding-top: 26px;
          border-top: 1px solid var(--border);
          display: grid;
          gap: 16px;
        }
        @media (min-width: 520px) {
          .about-facts { grid-template-columns: 1fr 1fr; }
        }
        .about-fact dt {
          font-family: var(--font-mono);
          font-size: 11.5px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--teal-700);
        }
        .about-fact dd {
          margin: 6px 0 0;
          font-size: 14.5px;
          color: var(--ink);
        }
      `}</style>
    </section>
  );
}
