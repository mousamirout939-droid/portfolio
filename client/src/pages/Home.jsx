import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import { profile, experience, fallbackProjects } from "../data.js";

const teasers = [
  {
    to: "/about",
    label: "About",
    text: "Who I am and what I'm looking for next.",
  },
  {
    to: "/education",
    label: "Education",
    text: "School, PUC, and my BCA — with scores.",
  },
  {
    to: "/skills",
    label: "Skills",
    text: "Languages, ML frameworks, and tools I use daily.",
  },
  {
    to: "/experience",
    label: "Experience",
    text: `${experience[0].role} at ${experience[0].org}.`,
  },
  {
    to: "/projects",
    label: "Projects",
    text: `${fallbackProjects.length} shipped apps, plus everything on GitHub.`,
  },
  {
    to: "/contact",
    label: "Contact",
    text: `Reach me at ${profile.email}.`,
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Explore</p>
            <h2>Everything, one click away.</h2>
          </div>

          <div className="teaser-grid">
            {teasers.map((t, i) => (
              <Link to={t.to} className="teaser-card reveal" key={t.to} style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="teaser-label">{t.label}</span>
                <span className="teaser-text">{t.text}</span>
                <span className="teaser-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          .teaser-grid {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
          }
          @media (min-width: 640px) {
            .teaser-grid { grid-template-columns: 1fr 1fr; }
          }
          @media (min-width: 960px) {
            .teaser-grid { grid-template-columns: 1fr 1fr 1fr; }
          }
          .teaser-card {
            display: flex;
            flex-direction: column;
            gap: 8px;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 22px 22px 20px;
            transition: transform 0.18s ease, border-color 0.18s ease;
            position: relative;
          }
          .teaser-card:hover {
            transform: translateY(-2px);
            border-color: var(--teal-500);
          }
          .teaser-label {
            font-family: var(--font-mono);
            font-size: 12px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--teal-700);
          }
          .teaser-text {
            color: var(--muted);
            font-size: 14.5px;
            line-height: 1.5;
          }
          .teaser-arrow {
            position: absolute;
            top: 20px;
            right: 20px;
            color: var(--muted-2);
          }
        `}</style>
      </section>
    </>
  );
}
