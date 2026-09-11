export const profile = {
  name: "Mousami Rout",
  role: "ML / AI Engineer,Full Stack Developer",
  location: "Bengaluru, India",
  email: "routmousami@gmail.com",
  phone: "+91-8050738188",
  linkedin: "https://linkedin.com/in/mousami-rout",
  github: "https://github.com/mousami939-droid",
  summary:
    " Ambitious currently pursuing BCA with hands-on experience in full-stack web development, having built and deployed full-stack applications using HTML, CSS, JavaScript, React, Node.js, and MongoDB, along with a Full Stack Development internship at Infidata Technology. Also exploring Machine Learning and Artificial Intelligence through coursework and certifications. Seeking a Full Stack Developer role to build scalable, real-world applications.",
};

export const stats = [
  { label: "shipped apps", value: "3" },
  { label: "ML models in production", value: "4" },
  { label: "automated tests, one project", value: "34" },
  { label: "SGPA", value: "8.22" },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "JavaScript", "Java", "HTML", "CSS", "Node.js", "React"],
  },
  {
    category: "ML / AI",
    items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Model Evaluation", "LLM Agents"],
  },
  {
    category: "ML Frameworks",
    items: ["PyTorch", "scikit-learn", "YOLOv8", "MediaPipe", "OpenCV"],
  },
  {
    category: "Tools & Platforms",
    items: ["MongoDB", "Power BI", "Git", "GitHub", "REST APIs", "Docker", "GitHub Actions", "Render", "vercel"],
  },
];

export const experience = [
  {
    role: "Full Stack Development Intern",
    org: "Infidata",
    period: "May 2026 – Jul 2026",
    bullets: [
      "Contributed to the design, development, and testing of a full-stack web application as part of the development team.",
      "Built and integrated front-end and back-end components, gaining hands-on experience with real-world software workflows.",
    ],
  },
];

// Used as an instant-render fallback if the API/DB is unreachable, and as
// the exact payload the seed script writes to MongoDB.
export const fallbackProjects = [
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
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Presidency College, Bengaluru",
  period: "2024 – 2027",
  Sgpa: "8.22 / 10",
  coursework: "Data Structures, Database Management Systems, Web Technologies, Python Programming, Statistics for Data Science",
};

// Full academic timeline, most recent first — shown on the Education page.
export const educationTimeline = [
  {
    level: "BCA",
    title: "Bachelor of Computer Applications",
    school: "Presidency College, Bengaluru",
    period: "2024 – 2027",
    score: "SGPA: 8.22 / 10",
    detail: "Data Structures, Database Management Systems, Web Technologies, Python Programming, Statistics for Data Science",
  },
  {
    level: "PUC",
    title: "Pre-University College — PCMC",
    school: "Nagarjuna College, Bengaluru",
    period: "2022 – 2024",
    score: "63%",
    detail: "Physics, Chemistry, Mathematics, Computer Science.",
  },
  {
    level: "10th",
    title: "Secondary School (SSLC)",
    school: "B.G National Public School",
    period: "2022",
    score: "88%",
    detail: "",
  },
];

// Featured, in-depth case studies — each gets its own project detail page.
export const githubRepos = [
  // Add any additional GitHub repositories here, e.g.:
  // { name: "repo-name", description: "One line about it.", url: "https://github.com/mousamirout939-droid/repo-name", tags: ["Python"] },
];

export const certifications = [
  {
    name: "Introduction to Artificial Intelligence",
    url: "/certificates/7944892_Introduction_to_Artificial_Intelligence_10214231-1.pdf",
  },
];

export const additional = {
  languages: "Hindi & Odia (Native), English (Professional), Kannada (Conversational)",
  interests: "Open-source, AI for social good, women-in-tech",
};
