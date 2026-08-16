import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { fallbackProjects } from "../data.js";
import VerifiedTick from "../components/VerifiedTick.jsx";

const API_URL = import.meta.env.VITE_API_URL || "";

const proofBySlug = {
  "research-agent": "34-test pytest suite, zero API key required",
  "ai-guardian": "Dockerized + GitHub Actions CI on every push",
  medicare: "Helmet, rate limiting & XSS protection on every route",
};

function displayUrl(url) {
  return url.replace(/^https?:\/\//, "");
}

export default function ProjectDetail() {
  const { slug } = useParams();
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

  const project = projects.find((p) => p.slug === slug);
  const idx = projects.findIndex((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <section className="section detail">
      <div className="container">
        <Link to="/projects" className="back-link reveal">
          ← All projects
        </Link>

        <div className="detail-head reveal">
          <span className="eyebrow">{project.year}</span>
          <h1>{project.title}</h1>
          <p className="detail-tagline">{project.tagline}</p>

          {project.liveUrl && (
            <a className="btn btn-solid" href={project.liveUrl} target="_blank" rel="noreferrer">
              Open live demo — {displayUrl(project.liveUrl)}
            </a>
          )}
        </div>

        <div className="detail-chips reveal">
          {project.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>

        <div className="detail-body reveal">
          <h2>What it does</h2>
          <ul>
            {project.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          {proofBySlug[project.slug] && (
            <div className="detail-proof">
              <VerifiedTick>{proofBySlug[project.slug]}</VerifiedTick>
            </div>
          )}
        </div>

        <div className="detail-nav reveal">
          <Link to={`/projects/${prev.slug}`} className="detail-nav-link">
            <span>← Previous</span>
            <strong>{prev.title}</strong>
          </Link>
          <Link to={`/projects/${next.slug}`} className="detail-nav-link align-right">
            <span>Next →</span>
            <strong>{next.title}</strong>
          </Link>
        </div>
      </div>

      <style>{`
        .back-link {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 28px;
        }
        .back-link:hover { color: var(--teal-700); }
        .detail-head h1 {
          font-size: clamp(28px, 4vw, 40px);
          margin-top: 8px;
          max-width: 22ch;
        }
        .detail-tagline {
          color: var(--muted);
          font-size: 17px;
          max-width: 60ch;
          line-height: 1.65;
          margin: 16px 0 26px;
        }
        .detail-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 40px;
        }
        .detail-body {
          margin-top: 34px;
          padding-top: 34px;
          border-top: 1px solid var(--border);
          max-width: 72ch;
        }
        .detail-body h2 {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--navy-700);
          margin-bottom: 16px;
        }
        .detail-body ul {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: var(--ink);
        }
        .detail-body li {
          line-height: 1.65;
          font-size: 15.5px;
        }
        .detail-proof {
          margin-top: 22px;
        }
        .detail-nav {
          margin-top: 60px;
          padding-top: 28px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .detail-nav-link {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .detail-nav-link.align-right {
          text-align: right;
          margin-left: auto;
        }
        .detail-nav-link span {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted-2);
        }
        .detail-nav-link strong {
          color: var(--navy-700);
          font-family: var(--font-display);
          font-size: 16px;
        }
        .detail-nav-link:hover strong { color: var(--teal-700); }
      `}</style>
    </section>
  );
}
