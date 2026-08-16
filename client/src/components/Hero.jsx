import { profile, stats } from "../data.js";
import VerifiedTick from "./VerifiedTick.jsx";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow anim" style={{ "--d": "0ms" }}>
            {profile.role.toUpperCase()} · {profile.location.toUpperCase()}
          </p>
          <h1 className="hero-name anim" style={{ "--d": "80ms" }}>
            {profile.name}
          </h1>
          <p className="hero-sub anim" style={{ "--d": "160ms" }}>
            I build ML systems that ship — from a citation-verifying research
            agent to a multi-modal safety platform — and test them like
            production code, not notebooks.
          </p>

          <div className="hero-cta anim" style={{ "--d": "240ms" }}>
            <Link className="btn btn-solid" to="/projects">
              View projects
            </Link>
            <a className="btn btn-outline" href="/resume.pdf" download>
              Download résumé
            </a>
          </div>

          <div className="hero-stats anim" style={{ "--d": "320ms" }}>
            {stats.map((s) => (
              <VerifiedTick key={s.label}>
                {s.value} {s.label}
              </VerifiedTick>
            ))}
          </div>
        </div>

        <div className="hero-photo anim" style={{ "--d": "120ms" }}>
          <div className="hero-photo-frame">
            <img src="/photo.jpg" alt={`Portrait of ${profile.name}`} />
          </div>
          <div className="hero-photo-tag">
            <span className="chip hero-chip">Presidency College · Bengaluru</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          background: radial-gradient(120% 140% at 14% -10%, #16314f 0%, var(--navy-900) 55%);
          padding: 68px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (min-width: 860px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 40px;
          }
        }
        .anim {
          opacity: 0;
          transform: translateY(14px);
          animation: heroIn 0.7s cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: var(--d, 0ms);
        }
        @keyframes heroIn {
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim { animation: none; opacity: 1; transform: none; }
        }
        .hero-eyebrow { color: var(--teal-300); }
        .hero-name {
          color: #fff;
          font-size: clamp(40px, 6.4vw, 64px);
          line-height: 1.02;
          margin-top: 14px;
        }
        .hero-sub {
          color: rgba(255,255,255,0.72);
          font-size: 17px;
          max-width: 46ch;
          margin-top: 18px;
          line-height: 1.6;
        }
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }
        .hero-cta .btn-outline {
          color: #fff;
          border-color: rgba(255,255,255,0.28);
        }
        .hero-cta .btn-outline:hover {
          border-color: var(--teal-300);
          color: var(--teal-300);
        }
        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 34px;
        }
        .hero-photo {
          justify-self: center;
          text-align: center;
        }
        .hero-photo-frame {
          width: min(78vw, 300px);
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          padding: 6px;
          background: linear-gradient(155deg, var(--teal-500), rgba(255,255,255,0.06) 60%);
          margin: 0 auto;
        }
        .hero-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
          border: 3px solid var(--navy-900);
        }
        .hero-photo-tag {
          margin-top: 16px;
        }
        .hero-chip {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.16);
          color: rgba(255,255,255,0.75);
        }
      `}</style>
    </section>
  );
}
