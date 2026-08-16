import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Technical Skills</p>
          <h2>The stack behind every project below.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <div className="skills-card reveal" key={group.category} style={{ transitionDelay: `${i * 60}ms` }}>
              <h3>{group.category}</h3>
              <div className="skills-chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 700px) {
          .skills-grid { grid-template-columns: 1fr 1fr; }
        }
        .skills-card {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 22px 22px 20px;
        }
        .skills-card h3 {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--navy-700);
          margin-bottom: 14px;
        }
        .skills-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
      `}</style>
    </section>
  );
}
