// Run with: npm run seed
// Populates the projects collection so GET /api/projects returns real data.
import "dotenv/config";
import { connectDB } from "./config/db.js";
import Project from "./models/Project.js";
import mongoose from "mongoose";

const projects = [
  {
    slug: "research-agent",
    title: "Research Agent",
    year: "2026",
    tagline:
      "An autonomous research agent that plans, searches, writes, verifies, and revises — every claim checked against its sources before it ships.",
    stack: ["Python", "Anthropic API", "Gradio", "Web Search Integration"],
    bullets: [
      "Built a plan → research → write → verify → revise pipeline that produces cited, fact-checked reports for open-ended questions.",
      "Designed a verifier module that cross-checks every claim against retrieved sources, producing a quantitative faithfulness score with automated revision for flagged claims.",
      "Built a custom evaluation harness and a fully offline mock mode (deterministic LLM/search) backed by a 34-test pytest suite for zero-API-key CI runs.",
    ],
    liveUrl: "https://research-agent-qz2t.onrender.com",
    order: 1,
  },
  {
    slug: "ai-guardian",
    title: "AI Guardian — Women's Safety Platform",
    year: "2026",
    tagline:
      "A multi-modal safety system that listens, watches, and reacts — combining audio, vision, and risk models into one real-time alert pipeline.",
    stack: ["Python", "PyTorch", "scikit-learn", "YOLOv8", "MediaPipe", "FastAPI", "React", "MongoDB", "Docker"],
    bullets: [
      "Engineered a multi-modal safety system combining four independent models: a PyTorch CNN for scream detection, a RandomForest risk classifier, MediaPipe hand-gesture recognition, and YOLOv8 object/weapon detection.",
      "Designed a one-tap SOS alert system with real-time WebSocket broadcasting to trusted contacts and role-gated police/admin dashboards.",
      "Containerized the full stack with Docker Compose and set up GitHub Actions CI with JWT-based auth and rate limiting.",
    ],
    liveUrl: "https://ai-guardian-women-safety.vercel.app",
    order: 2,
  },
  {
    slug: "medicare",
    title: "MediCare — Hospital Management System",
    year: "2026",
    tagline:
      "A full-stack MERN hospital platform — the same stack, patterns, and security hardening this portfolio's own backend uses.",
    stack: ["Render", "Vercel", "React", "MongoDB", "Node.js", "Express", "JWT", "Vite"],
    bullets: [
      "Built a full-stack MERN platform with role-based access for admins and patients covering appointments, records, prescriptions, and billing.",
      "Implemented JWT-based auth with httpOnly cookies, automated appointment slot generation, and itemized invoicing with partial payment tracking.",
      "Hardened the REST API with helmet, rate limiting, input sanitization, and XSS protection; deployed backend on Render and frontend on Vercel.",
    ],
    liveUrl: "https://hospital-management-eight-snowy.vercel.app",
    order: 3,
  },
  {
    slug: "smartserve-ai",
    title: "SmartServe AI — WhatsApp Food Ordering Agent",
    year: "2026",
    tagline:
      "A WhatsApp ordering assistant that turns text, voice, and image messages into menu-aware orders, backed by an AI agent and a live operations dashboard.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI GPT-4o",
      "WhatsApp Cloud API",
      "n8n",
      "Razorpay",
    ],
    bullets: [
      "Built a WhatsApp ordering agent that handles text, voice, and image messages, using speech transcription and image understanding to interpret customer requests.",
      "Connected GPT-4o function calling to live MongoDB menus and FAQs so customers can search items, build carts, check order status, and get server-calculated totals.",
      "Protected order accuracy with database-verified prices, explicit customer confirmation before orders are placed, and deduplication of retried WhatsApp webhooks.",
      "Created a React admin dashboard for managing menu items, orders, customers, FAQs, and AI analytics, with optional n8n workflow orchestration.",
      "Added optional Razorpay payments with server-side signature verification; cash on delivery and pay on pickup are also supported.",
    ],
    liveUrl: "https://smartserve-ai-seven.vercel.app/",
    order: 4,
  },
];

async function run() {
  await connectDB();
  await Project.deleteMany({});
  await Project.insertMany(projects);
  console.log(`Seeded ${projects.length} projects.`);
  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
