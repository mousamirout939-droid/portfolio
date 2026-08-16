import { profile } from "../data.js";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>{profile.name} · built with the MERN stack</span>
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
          Back to top ↑
        </Link>
      </div>

      <style>{`
        .footer {
          background: var(--navy-900);
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 22px 0 34px;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: rgba(255,255,255,0.45);
        }
        .footer-inner a {
          color: rgba(255,255,255,0.45);
        }
        .footer-inner a:hover {
          color: var(--teal-300);
        }
      `}</style>
    </footer>
  );
}
