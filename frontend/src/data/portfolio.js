// Single source of truth for portfolio content.

export const profile = {
  name: "Zeel Patel",
  roles: [
    "Quality Engineer",
    "Automation Engineer",
    "Software Test Engineer",
    "Python Developer",
  ],
  location: "Ontario, Canada",
  email: "0210zeel@gmail.com",
  linkedin: "https://www.linkedin.com/in/zeel-patel-4a19491a7/",
  photo:
    "https://customer-assets.emergentagent.com/job_zeel-craft/artifacts/wpajg5rg_image.png",
  resumeUrl:
    "https://customer-assets.emergentagent.com/job_zeel-craft/artifacts/nt6zmrad_ZeelPatel_Resume_SeniorQE.pdf",
  headline: "I build automation that makes engineering teams faster.",
  subhead:
    "I'm an AI-native Quality Engineer who builds the internal tools that make QA teams faster — not just the test suites. At Evertz I've shipped automation tools now woven into daily QA workflows, from firmware deployment to AI-assisted defect triage.",
  summary:
    "I'm a Quality Engineer who builds the tools that make QA teams faster, not just the test suites. At Evertz Microsystems I developed four internal automation tools — a JIRA AI triage agent, a lab monitoring dashboard, the TSPLAY web UI, and a firmware upgrade tool — that are now part of daily QA workflows. I work deep in Python automation, ETL and database validation, and shift-left testing, with full-stack instincts across Flask, CI/CD pipelines, and REST API frameworks. I care about automation engineering and AI-assisted quality strategy that creates measurable engineering impact.",
};

export const philosophy = [
  {
    title: "Tools over temporary fixes",
    body: "When something breaks twice, I build the thing that keeps it from breaking again — not another manual checklist.",
  },
  {
    title: "Developer productivity is the product",
    body: "The best QA work is invisible: faster feedback, fewer flaky failures, more time for engineers to build.",
  },
  {
    title: "Shift left, automate the repetitive",
    body: "If a human does it the same way every week, it belongs in a script with clear logs and clean failures.",
  },
  {
    title: "AI-assisted, human-judged",
    body: "I lean on AI to remove repetitive analysis, while keeping people in control of the decisions that matter.",
  },
];

export const experience = [
  {
    role: "Quality Engineer",
    company: "Evertz Microsystems Ltd.",
    period: "Jan 2023 — Present",
    location: "Burlington, ON",
    impact: [
      "Built four internal automation tools — a JIRA AI triage agent, a lab monitoring dashboard, the TSPLAY web UI, and a firmware upgrade tool — now embedded in daily QA workflows.",
      "Created and executed comprehensive test cases, scripts, and validation strategies derived from business requirements and user stories.",
      "Performed database validation with SQL alongside end-to-end, system-level testing across firmware and software components.",
      "Conducted deep debugging using Unix/Linux CLI tools, log analysis, and packet-level troubleshooting to verify data integrity and system behavior.",
      "Led regression testing cycles ensuring product stability across releases, integrated with Jenkins and GitHub CI/CD pipelines.",
    ],
  },
  {
    role: "Student Product Verification Specialist (Co-op)",
    company: "Evertz Microsystems Ltd.",
    period: "Jul 2021 — Dec 2021",
    location: "Burlington, ON",
    impact: [
      "Verified product functionality across firmware and software, documenting defects with clear reproduction steps.",
      "Supported QA cycles with hands-on lab testing and log analysis, building the foundation for later automation work.",
    ],
  },
  {
    role: "WordPress Developer (Internship)",
    company: "Payd App",
    period: "Jan 2022 — Apr 2022",
    location: "Remote",
    impact: [
      "Built and maintained WordPress solutions, customizing functionality and layouts to match business requirements.",
      "Applied responsive design across desktop and mobile, and improved performance, navigation, and SEO fundamentals.",
    ],
  },
  {
    role: "Math Peer Tutor",
    company: "Mohawk College",
    period: "Sep 2021 — Dec 2022",
    location: "Hamilton, ON",
    impact: [
      "Delivered one-on-one and group tutoring in mathematics and problem-solving, simplifying complex concepts.",
      "Helped students strengthen analytical thinking and exam preparation, improving academic outcomes through structured mentoring.",
    ],
  },
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "JavaScript", "Node.js", "React", "SQL"] },
  { title: "Automation", items: ["Selenium", "Robot Framework", "Katalon Recorder", "Pandas", "QA Workflow Automation"] },
  { title: "Testing", items: ["Functional", "Regression", "System & Integration", "ETL / Database", "Black-box / White-box", "Agile · SDLC · STLC"] },
  { title: "Databases", items: ["MySQL", "MS SQL Server (SSMS)", "MS Access"] },
  { title: "Networking", items: ["IP / TCP / UDP", "Transport Streams", "Wireshark", "Log Debugging"] },
  { title: "Operating Systems", items: ["Linux CLI", "Windows", "NGINX", "Gunicorn"] },
  { title: "DevOps", items: ["Git", "GitHub", "Bitbucket", "Jenkins", "JIRA", "QTest / TestRail"] },
  { title: "AI", items: ["Microsoft Glean", "GitHub Copilot", "Cursor", "Prompt Engineering"] },
];

export const education = [
  {
    school: "McMaster University",
    degree: "Bachelor of Technology (BTech)",
    field: "Software Engineering Technology",
    period: "May 2025 — Present",
    accent: "accent-blue",
  },
  {
    school: "Mohawk College",
    degree: "Computer System Technician — Software Development",
    field: "GPA 86.7% · Software Development",
    period: "Jan 2020 — Dec 2022",
    accent: "accent-mint",
  },
];

export const projects = [
  {
    slug: "firmware-device-management",
    name: "Advanced Firmware & Device Management Tool",
    icon: "CircuitBoard",
    accent: "accent-indigo",
    tagline:
      "A Python desktop app that automates firmware deployment and hardware inventory across device fleets.",
    stack: ["Python", "Linux", "SSH", "Concurrency", "Tkinter", "JSON"],
    screenshots: [
      "https://customer-assets.emergentagent.com/job_zeel-craft/artifacts/10yhmpnl_image.png",
      "https://customer-assets.emergentagent.com/job_zeel-craft/artifacts/myce5oj2_image.png",
      "https://customer-assets.emergentagent.com/job_zeel-craft/artifacts/iuph7ttg_image.png",
    ],
    overview:
      "A Python-based desktop application that automates firmware deployment and hardware inventory collection across many devices in engineering test environments — cutting manual effort and standardizing a previously fragile process.",
    problem:
      "Firmware updates and inventory checks were performed device by device, by hand. The process was slow, inconsistent, and easy to get wrong across a large lab fleet.",
    solution:
      "A centralized graphical tool deploys firmware to many devices in parallel, validates each device before deployment, and collects a full hardware/software inventory — all with live logging and exportable reports.",
    architecture: [
      "Centralized GUI orchestrates parallel firmware upgrades across multiple devices.",
      "Secure remote management over SSH; pre-deployment checks validate OS and connectivity.",
      "Inventory collection captures firmware version, OS, CPU, memory, storage, BIOS, IPMI, and network interfaces.",
      "Real-time logging with JSON export for reporting, auditing, and analysis.",
    ],
    challenges: [
      "Safely parallelizing operations against physical hardware without overwhelming the network.",
      "Designing validation that catches bad targets before any firmware is written.",
    ],
    decisions: [
      "Validated connectivity and OS state before deployment so failures surface early, not mid-flash.",
      "Treated logs and JSON exports as first-class features for auditability.",
    ],
    lessons:
      "Reliability and visibility earn adoption. Engineers trusted the tool once every run explained itself clearly.",
    future: [
      "Scheduled maintenance windows for unattended upgrades.",
      "Role-based access for shared lab environments.",
    ],
  },
  {
    slug: "device-health-monitor",
    name: "Devices Health Monitor",
    icon: "Activity",
    accent: "accent-blue",
    tagline:
      "Centralized, real-time visibility into the health and performance of engineering test systems.",
    stack: ["Python", "Linux", "System Metrics", "Dashboards", "Log Analysis"],
    screenshots: [
      "https://customer-assets.emergentagent.com/job_zeel-craft/artifacts/h0699v0g_image.png",
    ],
    overview:
      "A centralized monitoring application that gives QA and engineering teams real-time visibility into lab infrastructure through a single, intuitive dashboard.",
    problem:
      "Health checks across test servers were manual and scattered. Problems were often noticed late, slowing troubleshooting and wasting QA cycles.",
    solution:
      "Continuously monitor CPU, memory, and GPU utilization across systems, track uptime and history, and surface system logs — all in one dashboard built for fast diagnosis.",
    architecture: [
      "Automated collection of CPU, memory, and GPU metrics across multiple systems.",
      "Device uptime tracking with historical status monitoring.",
      "Centralized dashboard showing the operational state of many test servers at once.",
      "Integrated system log monitoring to assist fault diagnosis and root-cause analysis.",
    ],
    challenges: [
      "Choosing meaningful thresholds that catch real issues without alert fatigue.",
      "Keeping the monitoring footprint light so it never affects test results.",
    ],
    decisions: [
      "Designed a single-pane dashboard so anyone can read fleet health at a glance.",
      "Combined live metrics with log context to speed up root-cause analysis.",
    ],
    lessons:
      "The value of monitoring is in the signals teams actually act on — clarity beat coverage.",
    future: [
      "Trend-based anomaly detection.",
      "Proactive alerts ahead of failures.",
    ],
  },
  {
    slug: "tsplay-stream-portal",
    name: "TSPLAY Stream Management Portal",
    icon: "Play",
    accent: "accent-mint",
    tagline:
      "An internal web app that turns MPEG transport-stream management into point-and-click instead of SSH.",
    stack: ["Python", "Flask", "Linux", "NGINX", "Gunicorn", "JavaScript"],
    overview:
      "An internal web application that simplifies transport-stream (TS) management and testing for engineering and QA teams — replacing command-line workflows with a clean, centralized interface.",
    problem:
      "Managing MPEG transport streams meant repetitive SSH sessions and command-line steps. It was slow to learn, error-prone, and offered no shared view of active streams.",
    solution:
      "A web interface to launch and stop streams, monitor active streams in real time, discover and filter streams across storage, and import/export configurations via CSV for backup and recovery.",
    architecture: [
      "Flask backend wraps TSPLAY operations behind a clean web API, served via Gunicorn and NGINX.",
      "Real-time monitoring of active streams: multicast addresses, ports, and process info.",
      "Stream discovery and filtering to locate transport streams across directories.",
      "CSV import/export for stream backup, migration, and recovery.",
    ],
    challenges: [
      "Presenting live stream state accurately without leaking command-line complexity.",
      "Designing import/export robust enough for real backup and recovery.",
    ],
    decisions: [
      "Centralized common TSPLAY operations to remove repetitive SSH interactions.",
      "Prioritized a user-friendly interface to make stream testing consistent across the team.",
    ],
    lessons:
      "A good internal tool wins adoption through clarity. Removing CLI memorization mattered most.",
    future: [
      "Saved stream presets per engineer.",
      "Role-based access for shared labs.",
    ],
  },
  {
    slug: "api-test-framework",
    name: "API Test Generation & Execution Framework",
    icon: "FlaskConical",
    accent: "accent-lavender",
    tagline:
      "Scripts that automatically generate and run API test cases to expand coverage and speed up regression.",
    stack: ["Python", "REST APIs", "Automation", "CI/CD", "Pytest"],
    overview:
      "A framework that automatically generates and executes API test cases, expanding coverage and enabling consistent validation across different system configurations.",
    problem:
      "API tests were written by hand for each endpoint and configuration. Coverage lagged, edge cases were missed, and regression cycles were slow.",
    solution:
      "Develop scripts that generate and execute API test cases automatically, integrated into QA workflows to support regression testing and faster defect identification.",
    architecture: [
      "Automated generation of API test cases to broaden coverage.",
      "Consistent validation of system behavior across different configurations.",
      "Integration into QA workflows for regression testing and faster defect identification.",
    ],
    challenges: [
      "Generating tests readable and maintainable enough for the team to trust and extend.",
      "Handling auth and stateful flows beyond a simple endpoint contract.",
    ],
    decisions: [
      "Focused on consistency across configurations to make regression results comparable.",
      "Wired generation into existing QA workflows rather than a separate, ignored step.",
    ],
    lessons:
      "Generation only helps if the output respects the people who maintain it — readability drove adoption.",
    future: [
      "Contract-diffing to flag breaking changes in PRs.",
      "Schema-aware fuzzing for edge cases.",
    ],
  },
  {
    slug: "jira-ai-triage",
    name: "JIRA AI Triage Assistant",
    icon: "Bot",
    accent: "accent-lavender",
    tagline:
      "A Generative-AI assistant that analyzes, summarizes, and triages JIRA defects for QA teams.",
    stack: ["Python", "Generative AI", "Microsoft Glean", "JIRA", "REST APIs", "Prompt Engineering"],
    overview:
      "An AI-powered JIRA triage assistant that reduces the manual effort of analyzing and categorizing defects. It uses Generative AI through Microsoft Glean to interpret issue descriptions and help QA engineers produce consistent, high-quality bug reports.",
    problem:
      "Incoming defects had to be read, summarized, prioritized, and routed by hand. This was repetitive, inconsistent, and pulled engineers away from real investigation.",
    solution:
      "The assistant analyzes new JIRA issues with AI: it summarizes descriptions, suggests severity and priority, recommends components for routing, flags missing information, and drafts standardized acceptance criteria and reproduction steps.",
    architecture: [
      "JIRA integrated with Microsoft Glean AI services through Python modules over REST APIs.",
      "Engineered prompts produce reliable, structured JSON outputs.",
      "End-to-end automation workflow designed to be maintainable and scalable for QA.",
    ],
    challenges: [
      "Engineering prompts that yield reliable, structured output across varied defect reports.",
      "Keeping categorization consistent while leaving final judgment to engineers.",
    ],
    decisions: [
      "Generated suggestions, not silent automation, so engineers stay in control.",
      "Standardized acceptance criteria and reproduction steps to improve report quality.",
    ],
    lessons:
      "AI lands best as confident, transparent assistance — it freed engineers to investigate instead of administer.",
    future: [
      "Confidence scores surfaced inline.",
      "Automatic duplicate-defect detection.",
    ],
  },
];

// Lighter web/coursework projects with live demos.
export const webProjects = [
  {
    name: "Sandy & Leslie Apartment",
    icon: "Building2",
    accent: "accent-blue",
    tagline: "A polished apartment showcase site.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://zeel-hub.github.io/sandyAndLeslieApartment/",
  },
  {
    name: "Employee Registry Form",
    icon: "ClipboardList",
    accent: "accent-indigo",
    tagline: "A validated employee registration form.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://zeel-hub.github.io/employeeRegisteryForm/",
  },
  {
    name: "Mohawk College Website",
    icon: "GraduationCap",
    accent: "accent-mint",
    tagline: "A multi-page college website concept.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://zeel-hub.github.io/demoMohawkCollegeWebsite/",
  },
  {
    name: "Dice Game",
    icon: "Dices",
    accent: "accent-lavender",
    tagline: "A playful browser dice game.",
    stack: ["JavaScript", "HTML", "CSS"],
    demo: "https://zeel-hub.github.io/diceGame/",
  },
  {
    name: "Bing Map Application",
    icon: "Map",
    accent: "accent-blue",
    tagline: "A maps explorer built on the Bing Maps API.",
    stack: ["JavaScript", "Bing Maps API"],
    demo: "https://zeel-hub.github.io/bingMapApplication/",
  },
  {
    name: "Tourist App",
    icon: "Plane",
    accent: "accent-indigo",
    tagline: "A destination explorer for travellers.",
    stack: ["JavaScript", "HTML", "CSS"],
    demo: "https://zeel-hub.github.io/touristApp/",
  },
];

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug);
