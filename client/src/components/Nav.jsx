import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/education", label: "Education" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="nav-mark" aria-label="Home">
          MR
        </NavLink>
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <a className="btn btn-solid nav-cta" href="/resume.pdf" download>
          Résumé
        </a>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(15, 30, 48, 0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .nav-mark {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 19px;
          color: #fff;
          letter-spacing: 0.02em;
        }
        .nav-links {
          display: none;
          gap: 24px;
        }
        .nav-links a {
          font-size: 14px;
          color: rgba(255,255,255,0.72);
          transition: color 0.15s ease;
          padding-bottom: 4px;
          border-bottom: 1px solid transparent;
        }
        .nav-links a:hover {
          color: var(--teal-300);
        }
        .nav-links a.active {
          color: #fff;
          border-color: var(--teal-500);
        }
        .nav-cta {
          padding: 8px 16px;
          font-size: 13.5px;
        }
        @media (min-width: 860px) {
          .nav-links { display: flex; }
        }
      `}</style>
    </header>
  );
}
