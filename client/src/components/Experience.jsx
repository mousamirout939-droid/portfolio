import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Experience</p>
          <h2>Where the hands-on part started.</h2>
        </div>

        <div className="exp-list">
          {experience.map((job) => (
            <div className="exp-item reveal" key={job.org}>
              <div className="exp-top">
                <h3>
                  {job.role} <span className="exp-org">— {job.org}</span>
                </h3>
                <span className="exp-period">{job.period}</span>
              </div>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-item {
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 26px 28px;
          background: var(--surface);
        }
        .exp-top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 14px;
        }
        .exp-top h3 {
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 700;
          color: var(--ink);
        }
        .exp-org {
          font-weight: 500;
          color: var(--muted);
        }
        .exp-period {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--muted-2);
        }
        .exp-item ul {
          margin: 0;
          padding-left: 20px;
          color: var(--muted);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .exp-item li {
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
