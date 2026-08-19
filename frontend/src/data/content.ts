// All content below is derived directly from Ayush Singh's resume.
// Update links here once final repo/live URLs are confirmed.

export const profile = {
  name: "Ayush Singh",
  role: "Backend-Focused Software Engineer",
  roleSub: "Node.js · Express.js · PostgreSQL",
  location: "Bhilai, India",
  email: "singhayush484848@gmail.com",
  phone: "+91 93004 53884",
  github: "https://github.com/singhayush48",
  linkedin: "https://www.linkedin.com/in/ayushsingh5266/",
  resumeUrl: "/Ayush_Singh_Resume.pdf",
  summary:
    "B.Tech Computer Science student (7th semester, graduating 2027) focused on backend development with Node.js, Express.js and PostgreSQL. I design REST APIs, relational database schemas, and authentication systems (JWT, bcrypt) — most recently across a subscription billing platform with Razorpay payments and a real-time chat application built on Socket.IO. I work comfortably across the stack with React.js, but backend architecture and database design are where I focus.",
};

export const skillGroups = [
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST API Design", "Middleware"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "SQL", "Schema Design", "Transactions", "Joins", "Supabase", "Neon"],
  },
  {
    label: "Auth & Security",
    items: ["JWT", "bcrypt", "Role-Based Access Control", "Rate Limiting", "Input Validation"],
  },
  {
    label: "Real-Time",
    items: ["Socket.IO", "Events", "Rooms", "Presence Tracking"],
  },
  {
    label: "Payments & Files",
    items: ["Razorpay API", "Multer", "Cloudinary"],
  },
  {
    label: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Tools & Deployment",
    items: ["Git", "GitHub", "Postman", "VS Code", "Render", "Vercel", "Neon"],
  },
] as const;

export const coreCS = [
  "Data Structures & Algorithms",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "OOP",
];

export const pipeline = [
  { id: "client", label: "Client", detail: "React app or API consumer sends an HTTP request." },
  { id: "router", label: "Express Router", detail: "Route matched to a controller by method + path." },
  { id: "middleware", label: "Middleware", detail: "Auth (JWT), rate limiting and input validation run first." },
  { id: "controller", label: "Controller", detail: "Parses the request and delegates to service logic." },
  { id: "service", label: "Service Layer", detail: "Business logic — the part that doesn't know about HTTP." },
  { id: "db", label: "PostgreSQL", detail: "Queries and transactions (BEGIN / COMMIT / ROLLBACK)." },
  { id: "response", label: "HTTP Response", detail: "Structured JSON response, errors handled centrally." },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: "Live" | "In Development";
  period: string;
  stack: string[];
  github: string;
  live: string;
  problem: string;
  solution: string;
  features: string[];
  decisions: string[];
  architecture: string[];
  schema: string[];
};

export const projects: Project[] = [
  {
    slug: "newspayx",
    name: "NewspayX",
    tagline: "Online newspaper subscription billing platform",
    status: "Live",
    period: "Jan 2025 — Present",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Supabase", "PostgreSQL", "Razorpay API", "JWT"],
    github: "https://github.com/singhayush48/news-payment-app",
    live: "https://news-payment-app-w6e8.vercel.app/login",
    problem:
      "A newspaper agency needs to manage recurring subscriber billing — tracking who's subscribed, collecting payments, and giving admins visibility into revenue — without relying on spreadsheets or manual reconciliation.",
    solution:
      "A full-stack subscription billing platform with role-based access for admins and subscribers, JWT-based session authentication, and Razorpay integration for handling live payments end to end, from checkout to invoice.",
    features: [
      "Multi-role access control for admin and subscriber accounts",
      "JWT-based session authentication",
      "Razorpay payment gateway integration",
      "Invoice generation and payment status callback handling",
      "Admin analytics dashboard — subscriber activity, revenue trends, billing summaries",
      "Normalized PostgreSQL schema on Supabase for subscribers, billing and payments",
      "API rate limiting, input validation and structured error handling",
    ],
    decisions: [
      "Chose Supabase-hosted PostgreSQL to get a managed relational database with minimal ops overhead while keeping full SQL control over the billing schema.",
      "Handled Razorpay payment status via callback endpoints rather than trusting client-side confirmation, so payment state is only ever updated from a verified server-side event.",
      "Applied rate limiting and input validation at the middleware layer so every route inherits protection instead of re-implementing checks per controller.",
    ],
    architecture: ["React", "Express API", "JWT Authentication", "Business Logic", "PostgreSQL", "Razorpay"],
    schema: ["Subscribers", "Subscriptions", "Billing", "Payments"],
  },
  {
    slug: "vaani",
    name: "Vaani",
    tagline: "Real-time chat application",
    status: "In Development",
    period: "Jul 2026 — Present",
    stack: ["Node.js", "Express.js", "PostgreSQL (Neon)", "Socket.IO", "JWT", "bcrypt", "Multer", "Cloudinary", "React.js"],
    github: "https://github.com/singhayush48/Chat-app",
    live: "https://vaani-chat-app-delta.vercel.app/login",
    problem:
      "Real-time messaging asks a lot of the backend at once: it needs a relational schema that models conversations and membership cleanly, auth that works identically over REST and WebSockets, and delivery that stays consistent when messages are edited or deleted.",
    solution:
      "A Node.js and Express backend with a normalized PostgreSQL schema for users, conversations, memberships and messages, JWT authentication shared across REST endpoints and Socket.IO connections, and a React frontend currently being built out on top of it.",
    features: [
      "Normalized PostgreSQL schema — users, conversations, memberships, messages",
      "JWT authentication with httpOnly cookies, shared across REST and Socket.IO",
      "bcrypt password hashing",
      "Real-time messaging: live delivery, typing indicators, online/offline presence, read receipts",
      "REST APIs for auth, conversations and messages — send, edit, soft-delete",
      "PostgreSQL transactions (BEGIN / COMMIT / ROLLBACK) for consistency",
      "Profile picture uploads via Multer + Cloudinary, with MIME-type and file-size validation",
      "Backend on Render, frontend on Vercel, database on Neon",
    ],
    decisions: [
      "Issued a short-lived, socket-specific JWT so real-time auth doesn't depend on cross-site cookies being delivered — this was necessary after cookie-based auth failed on Safari/iOS and Firefox/Android in cross-site contexts.",
      "Used soft-deletes for messages instead of hard deletes, so conversation history and read-receipt state stay consistent for every participant.",
      "Wrapped multi-step writes (e.g. message creation touching multiple tables) in PostgreSQL transactions to avoid partial writes if a step fails mid-request.",
    ],
    architecture: ["User A", "Socket.IO", "Express / Node.js", "PostgreSQL", "Socket.IO", "User B"],
    schema: ["Users", "Conversations", "Memberships", "Messages"],
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
