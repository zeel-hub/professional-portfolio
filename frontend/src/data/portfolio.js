// Single source of truth for portfolio content.
// Placeholder copy — edit freely.

export const profile = {
  name: "Zeel Patel",
  roles: [
    "Senior Quality Engineer",
    "Automation Engineer",
    "Software Test Engineer",
    "Python Developer",
  ],
  location: "Hamilton, Ontario, Canada",
  email: "zeel.patel@example.com",
  linkedin: "https://www.linkedin.com/in/zeelpatel",
  github: "https://github.com/zeelpatel",
  resumeUrl: "", // add a URL or /resume.pdf to enable download
  headline: "I build automation that makes engineering teams faster.",
  subhead:
    "I design internal engineering tools, automate the workflows that slow teams down, and sharpen QA so quality stops being a bottleneck. I care most about the difficult technical problems behind a clean, reliable system.",
  summary:
    "I'm a Quality Engineer with 3+ years building automation, improving engineering workflows, and creating internal tools that increase developer productivity. I work across Python, automation frameworks, Linux, APIs, networking, SQL, and AI-assisted engineering. Instead of only writing test cases, I prefer solving the underlying engineering problem so it stops happening.",
};

export const philosophy = [
  {
    title: "Tools over temporary fixes",
    body: "When something breaks twice, I build the thing that keeps it from breaking again — not another manual checklist.",
  },
  {
    title: "Developer productivity is the product",
    body: "The best test work is invisible: faster feedback, fewer flaky failures, more time for engineers to build.",
  },
  {
    title: "Automate the repetitive",
    body: "If a human is doing it the same way every week, it belongs in a pipeline with clear logs and clean failures.",
  },
  {
    title: "Clean architecture lasts",
    body: "I value readable systems with obvious seams — code teammates can extend without asking me first.",
  },
];

export const experience = [
  {
    role: "Senior Quality Engineer",
    company: "Evertz Microsystems",
    period: "2022 — Present",
    location: "Burlington, ON",
    impact: [
      "Built a firmware upgrade automation tool that cut a multi-hour manual procedure to a one-click, repeatable run across device fleets.",
      "Designed an API test-generation framework that produces coverage from live specs, removing days of hand-written boilerplate per release.",
      "Shipped a JIRA AI triage agent that auto-categorizes and routes incoming defects, reducing time-to-owner for new tickets.",
      "Stood up device health monitoring that surfaces failures before QA cycles, turning late-stage surprises into early signals.",
    ],
  },
  {
    role: "Software Test Engineer",
    company: "Earlier Roles",
    period: "2021 — 2022",
    location: "Ontario, Canada",
    impact: [
      "Replaced brittle UI checks with stable API-level suites, dropping flaky failures and speeding up CI feedback.",
      "Introduced reusable Python test utilities adopted across teams to standardize setup and reporting.",
    ],
  },
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "JavaScript", "Bash", "SQL", "TypeScript"] },
  { title: "Automation", items: ["Pytest", "Selenium", "Playwright", "Requests", "CI/CD pipelines"] },
  { title: "Testing", items: ["API testing", "Integration testing", "Test design", "Regression suites", "Test reporting"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"] },
  { title: "Networking", items: ["TCP/IP", "HTTP/REST", "SSH", "Packet analysis"] },
  { title: "Operating Systems", items: ["Linux", "macOS", "Shell scripting"] },
  { title: "DevOps", items: ["Git", "Docker", "GitHub Actions", "Jenkins"] },
  { title: "AI", items: ["LLM agents", "AI-assisted triage", "Prompt engineering", "RAG basics"] },
];

export const education = [
  {
    school: "McMaster University",
    degree: "Bachelor of Technology",
    field: "Software Engineering Technology",
    accent: "accent-blue",
  },
  {
    school: "Mohawk College",
    degree: "Diploma",
    field: "Software Development",
    accent: "accent-mint",
  },
];

export const projects = [
  {
    slug: "tsplay-web-interface",
    name: "TSPLAY Web Interface",
    icon: "Play",
    accent: "accent-blue",
    tagline: "A clean web control surface for transport-stream playback and device orchestration.",
    stack: ["Python", "FastAPI", "React", "WebSockets", "Linux"],
    github: "https://github.com/zeelpatel",
    demo: "",
    overview:
      "TSPLAY replaced a fragile set of command-line steps with a focused web interface engineers actually enjoy using to drive playback hardware.",
    problem:
      "Operating the playback devices meant memorizing CLI flags and SSHing into machines. Onboarding was slow, mistakes were common, and there was no shared view of device state.",
    solution:
      "A single web app exposes every common action as a clear control, streams live device status over WebSockets, and validates inputs before anything touches hardware.",
    architecture: [
      "FastAPI service wraps the device control layer behind a typed REST + WebSocket API.",
      "React front end renders real-time state; optimistic UI keeps interactions instant.",
      "A thin adapter isolates hardware specifics so new device models plug in without UI changes.",
    ],
    challenges: [
      "Keeping the UI truthful when hardware responds slowly — solved with explicit pending and error states.",
      "Designing an API that hides device quirks without leaking complexity to the front end.",
    ],
    decisions: [
      "Chose WebSockets over polling so status feels live without hammering the device.",
      "Pushed all validation server-side so the UI can stay thin and trustworthy.",
    ],
    lessons:
      "A good internal tool wins adoption through clarity, not features. Removing CLI memorization mattered more than any single capability.",
    future: [
      "Role-based access for shared lab environments.",
      "Saved playback presets per engineer.",
    ],
  },
  {
    slug: "firmware-upgrade-automation",
    name: "Firmware Upgrade Automation Tool",
    icon: "CircuitBoard",
    accent: "accent-indigo",
    tagline: "One-click, repeatable firmware upgrades across an entire device fleet.",
    stack: ["Python", "Paramiko", "AsyncIO", "Linux", "SQLite"],
    github: "https://github.com/zeelpatel",
    demo: "",
    overview:
      "A tool that turns a tense, multi-hour manual upgrade into a monitored, repeatable run that anyone on the team can trigger safely.",
    problem:
      "Firmware upgrades were performed by hand, device by device. The process was slow, error-prone, and risky — a missed step could brick hardware.",
    solution:
      "Automate the full upgrade sequence with pre-flight checks, parallel execution across devices, live progress, and automatic rollback on failure.",
    architecture: [
      "AsyncIO orchestrator runs upgrades concurrently with per-device isolation.",
      "Paramiko handles secure transport; each step is idempotent and logged.",
      "SQLite stores run history so every upgrade is auditable after the fact.",
    ],
    challenges: [
      "Safely parallelizing operations on physical hardware without overwhelming the network.",
      "Designing rollback that is trustworthy enough for engineers to rely on it under pressure.",
    ],
    decisions: [
      "Made every step idempotent so a retry never leaves a device half-upgraded.",
      "Treated logs as a first-class feature — a failed run should explain itself.",
    ],
    lessons:
      "Automation earns trust through observability. Engineers adopted it only once failures were as clear as successes.",
    future: [
      "Scheduled maintenance windows.",
      "Slack notifications on run completion.",
    ],
  },
  {
    slug: "jira-ai-triage-agent",
    name: "JIRA AI Triage Agent",
    icon: "Bot",
    accent: "accent-lavender",
    tagline: "An LLM agent that reads, categorizes, and routes incoming defects automatically.",
    stack: ["Python", "LLM APIs", "JIRA API", "FastAPI", "RAG"],
    github: "https://github.com/zeelpatel",
    demo: "",
    overview:
      "An assistant that triages new tickets the moment they arrive — labeling, prioritizing, and routing them to the right owner.",
    problem:
      "New defects sat in a queue until someone manually read, labeled, and assigned them. Time-to-owner was slow and inconsistent.",
    solution:
      "An agent watches the intake queue, uses an LLM grounded in past tickets to classify and prioritize, then applies labels and suggests an owner.",
    architecture: [
      "FastAPI webhook receives new-issue events from JIRA.",
      "Retrieval over historical tickets grounds the model and reduces hallucination.",
      "All actions are suggestions a human can accept — the agent never closes tickets on its own.",
    ],
    challenges: [
      "Keeping classifications consistent as product areas evolve.",
      "Drawing a clear line between automation and human judgment.",
    ],
    decisions: [
      "Kept a human in the loop for assignment to build trust before increasing autonomy.",
      "Grounded the model with retrieval instead of relying on a generic prompt.",
    ],
    lessons:
      "AI features land best as confident suggestions, not silent automation. Transparency made the team comfortable letting it do more.",
    future: [
      "Confidence scores surfaced inline.",
      "Auto-detection of duplicate tickets.",
    ],
  },
  {
    slug: "api-test-generation-framework",
    name: "API Test Generation Framework",
    icon: "FlaskConical",
    accent: "accent-mint",
    tagline: "Generates living API test suites from specifications, killing hand-written boilerplate.",
    stack: ["Python", "Pytest", "OpenAPI", "Requests", "CI/CD"],
    github: "https://github.com/zeelpatel",
    demo: "",
    overview:
      "A framework that reads an API specification and produces a structured, runnable test suite — coverage that stays in sync with the contract.",
    problem:
      "API tests were written by hand for every endpoint. They lagged behind the spec, missed edge cases, and consumed days each release.",
    solution:
      "Parse the OpenAPI spec, generate parameterized Pytest cases for each operation, and wire them into CI so coverage tracks the contract automatically.",
    architecture: [
      "Spec parser maps each operation to typed request/response expectations.",
      "Pytest generators emit readable, parameterized tests engineers can extend.",
      "CI integration fails fast when the implementation drifts from the spec.",
    ],
    challenges: [
      "Generating tests readable enough that engineers trust and edit them.",
      "Handling auth and stateful flows that a pure spec doesn't describe.",
    ],
    decisions: [
      "Generated human-friendly tests, not opaque ones — output is meant to be read.",
      "Made generated and hand-written tests coexist cleanly in one suite.",
    ],
    lessons:
      "Generation is only useful if the output respects the people who maintain it. Readability drove adoption.",
    future: [
      "Contract-diffing to flag breaking changes in PRs.",
      "Schema-aware fuzzing for edge cases.",
    ],
  },
  {
    slug: "device-health-monitoring",
    name: "Device Health Monitoring Tool",
    icon: "Activity",
    accent: "accent-blue",
    tagline: "Surfaces hardware failures before they reach a QA cycle.",
    stack: ["Python", "Prometheus", "Grafana", "Linux", "PostgreSQL"],
    github: "https://github.com/zeelpatel",
    demo: "",
    overview:
      "Continuous monitoring that turns late-stage hardware surprises into early, actionable signals.",
    problem:
      "Device failures were often discovered mid-QA, wasting cycles and forcing reruns. There was no early warning.",
    solution:
      "Collect health metrics continuously, define meaningful thresholds, and alert on degradation trends before a full failure occurs.",
    architecture: [
      "Lightweight Python agents export metrics to Prometheus.",
      "Grafana dashboards give engineers a shared, glanceable view of fleet health.",
      "PostgreSQL retains history for trend analysis and post-incident review.",
    ],
    challenges: [
      "Choosing thresholds that catch real problems without alert fatigue.",
      "Keeping agents lightweight so monitoring never affects test results.",
    ],
    decisions: [
      "Alerted on trends, not just thresholds, to catch slow degradation.",
      "Made dashboards readable at a glance for non-specialists.",
    ],
    lessons:
      "The value of monitoring is in the signals you act on. Tuning out noise was as important as adding coverage.",
    future: [
      "Anomaly detection on metric trends.",
      "Predictive maintenance scheduling.",
    ],
  },
  {
    slug: "portfolio-website",
    name: "Portfolio Website",
    icon: "AppWindow",
    accent: "accent-indigo",
    tagline: "This site — a macOS-inspired portfolio built with care for detail.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "Lucide", "React Router"],
    github: "https://github.com/zeelpatel",
    demo: "",
    overview:
      "A personal portfolio designed to feel like a native macOS application rather than a template — calm, deliberate, and polished.",
    problem:
      "Most engineering portfolios read like resumes. I wanted something that demonstrates taste and craftsmanship as evidence of how I build.",
    solution:
      "A design system first — color, type, spacing, motion — then a restrained interface with glass navigation, floating window cards, and a Cmd+K command palette.",
    architecture: [
      "Token-driven theming for instant, smooth light/dark switching.",
      "Section components fade in on view; motion respects reduced-motion preferences.",
      "A command palette mirrors macOS Spotlight for keyboard-first navigation.",
    ],
    challenges: [
      "Restraint — deciding what to remove so every element keeps its purpose.",
      "Getting glass, depth, and motion to feel native without becoming flashy.",
    ],
    decisions: [
      "Built custom illustrations and mock UIs instead of stock photos for consistency.",
      "Kept animations subtle and purposeful — no bounce, no spin.",
    ],
    lessons:
      "Elegance comes from restraint. Every time I removed an element, the page got better.",
    future: [
      "MDX-powered case studies.",
      "Per-project live demos.",
    ],
  },
];

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug);
