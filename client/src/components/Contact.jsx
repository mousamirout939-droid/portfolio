import { useState } from "react";
import { profile } from "../data.js";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", error: "" });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", error: "" });

    if (!API_URL) {
      // No backend configured for this deployment — fall back to opening
      // the visitor's email client with the message pre-filled.
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=Portfolio contact from ${encodeURIComponent(form.name)}&body=${body}`;
      setStatus({ state: "idle", error: "" });
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({ state: "sent", error: "" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ state: "error", error: err.message });
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="reveal">
          <p className="eyebrow" style={{ color: "var(--teal-300)" }}>
            Contact
          </p>
          <h2 className="contact-heading">Let's build something that ships.</h2>
          <p className="contact-sub">
            Open to ML/AI engineer roles and interesting collaborations. The
            fastest way to reach me is email — the form below sends straight
            there.
          </p>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/mousami-rout
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/mousamirout939-droid
            </a>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit} style={{ transitionDelay: "100ms" }}>
          <label>
            <span>Name</span>
            <input type="text" required value={form.name} onChange={update("name")} placeholder="Your name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" required value={form.email} onChange={update("email")} placeholder="you@company.com" />
          </label>
          <label>
            <span>Message</span>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={update("message")}
              placeholder="What are you working on?"
            />
          </label>

          <button className="btn btn-solid" type="submit" disabled={status.state === "sending"}>
            {status.state === "sending" ? "Sending…" : "Send message"}
          </button>

          {status.state === "sent" && <p className="form-note ok">Sent — thank you, I'll reply by email.</p>}
          {status.state === "error" && <p className="form-note err">{status.error}</p>}
        </form>
      </div>

      <style>{`
        .contact-section {
          background: var(--navy-900);
        }
        .contact-grid {
          display: grid;
          gap: 48px;
        }
        @media (min-width: 820px) {
          .contact-grid { grid-template-columns: 1fr 1fr; }
        }
        .contact-heading {
          color: #fff;
          font-size: clamp(26px, 3.4vw, 34px);
          margin-top: 10px;
        }
        .contact-sub {
          color: rgba(255,255,255,0.68);
          margin-top: 16px;
          max-width: 46ch;
          line-height: 1.65;
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 28px;
          font-family: var(--font-mono);
          font-size: 14px;
        }
        .contact-links a {
          color: var(--teal-300);
          width: fit-content;
        }
        .contact-links a:hover {
          text-decoration: underline;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          padding: 26px;
        }
        .contact-form label {
          display: flex;
          flex-direction: column;
          gap: 7px;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
        }
        .contact-form input,
        .contact-form textarea {
          font-family: var(--font-body);
          font-size: 14.5px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 8px;
          padding: 10px 12px;
          color: #fff;
          resize: vertical;
        }
        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: rgba(255,255,255,0.35);
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--teal-500);
        }
        .contact-form button {
          margin-top: 4px;
          justify-content: center;
        }
        .contact-form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .form-note {
          font-size: 13.5px;
          margin-top: -4px;
        }
        .form-note.ok { color: var(--teal-300); }
        .form-note.err { color: #ff9d8a; }
      `}</style>
    </section>
  );
}
