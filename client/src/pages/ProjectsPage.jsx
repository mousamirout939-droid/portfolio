import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fallbackProjects, githubRepos, profile } from "../data.js";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function ProjectsPage() {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    if (!API_URL) return;
    const controller = new AbortController();
    fetch(`${API_URL}/api/projects`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setProjects(data);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Featured Projects</p>
            <h2>Three systems, three different failure modes solved.</h2>
          </div>

          <div className="proj-grid">
            {projects.map((p, i) => (
              <Link
                to={`/projects/${p.slug}`}
                className="proj-card reveal"
                key={p.slug}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="proj-year">{p.year}</span>
                <h3>{p.title}</h3>
                <p>{p.tagline}</p>
                <div className="proj-chips">
                  {p.stack.slice(0, 4).map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                  {p.stack.length > 4 && <span className="chip">+{p.stack.length - 4}</span>}
                </div>
                <span className="proj-more">View case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">All GitHub Repositories</p>
            <h2>Everything else, straight from GitHub.</h2>
          </div>

          {githubRepos.length > 0 ? (
            <div className="repo-grid">
              {githubRepos.map((repo, i) => (
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="repo-card reveal"
                  key={repo.url}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="repo-top">
                    <span className="repo-icon" aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.49c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.72-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                      </svg>
                    </span>
                    <span className="repo-name">{repo.name}</span>
                  </div>
                  {repo.description && <p className="repo-desc">{repo.description}</p>}
                  {repo.tags && repo.tags.length > 0 && (
                    <div className="repo-tags">
                      {repo.tags.map((t) => (
                        <span className="chip" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              ))}
            </div>
          ) : (
            <div className="repo-empty reveal">
              <p>
                The three case studies above cover the deepest projects — for
                the full repository list, browse the profile directly.
              </p>
              <a className="btn btn-outline on-light" href={profile.github} target="_blank" rel="noreferrer">
                View all repositories on GitHub ↗
              </a>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .proj-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 720px) {
          .proj-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1040px) {
          .proj-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        .proj-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 26px 24px;
          transition: transform 0.18s ease, border-color 0.18s ease;
        }
        .proj-card:hover {
          transform: translateY(-3px);
          border-color: var(--teal-500);
        }
        .proj-year {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--teal-700);
        }
        .proj-card h3 {
          font-size: 18.5px;
          line-height: 1.25;
        }
        .proj-card p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.55;
        }
        .proj-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }
        .proj-more {
          margin-top: auto;
          padding-top: 10px;
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--navy-700);
        }

        .repo-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .repo-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 960px) {
          .repo-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        .repo-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px 22px;
          transition: transform 0.18s ease, border-color 0.18s ease;
        }
        .repo-card:hover {
          transform: translateY(-2px);
          border-color: var(--teal-500);
        }
        .repo-top {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .repo-icon svg {
          width: 16px;
          height: 16px;
          color: var(--navy-700);
        }
        .repo-name {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
        }
        .repo-desc {
          color: var(--muted);
          font-size: 13.5px;
          line-height: 1.5;
        }
        .repo-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .repo-empty {
          background: var(--surface);
          border: 1px dashed var(--border);
          border-radius: 12px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
          max-width: 640px;
        }
        .repo-empty p {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}
