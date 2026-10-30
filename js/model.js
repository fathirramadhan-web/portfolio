/* =====================================================================
   MODEL — the data and state of the app. Never touches the DOM.
   Edit your content here: featured projects, skills, image overrides.
   ===================================================================== */

const Model = {

  githubUser: "fathirramadhan-web",

  // Where the contact form delivers (via formsubmit.co relay)
  contactEmail: "fathirhidayahramadhan@gmail.com",

  // App state (read/written by the Controller, displayed by the View)
  state: {
    screen: "home",        // which screen is showing
    menuIndex: 0,          // selected item on the home menu
    reposLoaded: false,
    skillsBuilt: false,
    certsBuilt: false,
  },

  // ---- Featured projects (hand-written, shown above the GitHub feed) ----
  featured: [
    {
      title: "Clipperin — AI Video Clipping",
      tag: "AI Platform", color: "#3178c6",
      url: "https://github.com/fathirramadhan-web/clipperin", cta: "View on GitHub →",
      img: "assets/projects/clipperin.png",
      desc: "AI-powered platform (Next.js 14, TypeScript) that converts long-form videos into short-form clips for TikTok/Reels/Shorts with auto-captioning and 9:16 cropping. Pipeline uses Inngest, FFmpeg, Whisper, and GPT-4 prompt engineering.",
    },
    {
      title: "Latview — AI Career Platform",
      tag: "Full-Stack", color: "#3178c6", live: true,
      url: "https://gaskarir.my.id/", cta: "Visit gaskarir.my.id →",
      img: "assets/projects/latview.png",
      desc: "AI-based career platform (Next.js 16, React 19, TypeScript) for mock interviews and skill assessments. Supabase backend with RLS policies, Google Gemini AI as primary LLM with OpenAI fallback, Zod-validated API routes.",
    },
    {
      title: "Coursera Automation Agent",
      tag: "Autonomous Agent", color: "#3572A5",
      url: "https://github.com/fathirramadhan-web/coursera-agent", cta: "View Project →",
      img: "assets/projects/coursera-agent.png",
      desc: "Autonomous agent (Python, Playwright) navigating Coursera modules, tracking course progress, and solving complex single & multi-select graded quizzes via LLM reasoning with automated retry handling.",
    },
    {
      title: "Autonomous GitHub Engineer",
      tag: "AI Engineering", color: "#e60012",
      url: "https://github.com/fathirramadhan-web/github-engineer", cta: "View Project →",
      img: "assets/projects/github-engineer.png",
      desc: "Autonomous software engineer agent resolving complex GitHub issues across multi-language codebases. Features automated test harness execution (pytest/playwright), iterative debugging, and safe worktree patch resolution.",
    },
    {
      title: "TanyaNusa — Indonesian Legal RAG",
      tag: "RAG & LLM", color: "#e60012",
      url: "https://github.com/fathirramadhan-web/TanyaNusa", cta: "View on GitHub →",
      img: "assets/projects/tanyanusa.png",
      desc: "AI legal assistant (FastAPI, React, Vite) answering Indonesian law queries using Retrieval-Augmented Generation over 340+ legal statutes. Powered by multilingual embeddings (FastEmbed), Hugging Face datasets, and Docker deployment on Railway.",
    },
    {
      title: "MetaPrediction: Dota 2 Hero Meta",
      tag: "Machine Learning", color: "#e60012",
      url: "https://github.com/fathirramadhan-web/MetaPrediction", cta: "View on GitHub →",
      img: "assets/projects/metaprediction.png",
      desc: "ML system predicting Dota 2 meta heroes using expanding-window supervised learning across patches 7.33-7.40. Full pipeline: preprocessing, SMOTE/ADASYN, feature selection, Logistic Regression/Random Forest/XGBoost with GridSearchCV, SHAP explainability.",
    },
    {
      title: "Aksaraku — Poetry & Writing Platform",
      tag: "Full-Stack", color: "#3178c6",
      url: "https://github.com/fathirramadhan-web/Aksaraku", cta: "View on GitHub →",
      img: "assets/projects/aksaraku.png",
      desc: "Medium-style poetry and writing platform (Next.js 15, React 19, TypeScript) with Google OAuth, Supabase storage and database, admin dashboard, comments, likes, and views tracking.",
    },
    {
      title: "SIMASET — Asset Management System",
      tag: "Web App", color: "#4F5D95",
      url: "https://github.com/fathirramadhan-web/SIMASET", cta: "View on GitHub →",
      img: "assets/projects/simaset.png",
      desc: "Government asset management system (Laravel 10, MySQL) for Diskominfo Kabupaten Cirebon. Multi-role access (Admin, Officer, Employee), end-to-end borrowing workflow, Excel import/export, and statistics dashboard.",
    },
  ],

  // Repos already shown in "featured" get hidden from the GitHub feed
  featuredRepoNames: [
    "clipperin",
    "Gaskarir",
    "coursera-agent",
    "github-engineer",
    "TanyaNusa",
    "Aksaraku",
    "MetaPrediction",
    "SIMASET",
    "Troopers",
    "Riana",
    "monitor-lco",
    "Monitoring-LCO",
    "lco-monitor",
  ],

  // Shown if the GitHub API can't be reached
  fallbackRepos: [
    {
      name: "portfolio", language: "JavaScript", stargazers_count: 0,
      html_url: "https://github.com/fathirramadhan-web/portfolio",
      description: "Personal portfolio website — Persona 5 style.",
    },
    {
      name: "browser-qa-agent", language: "Python", stargazers_count: 0,
      html_url: "https://github.com/fathirramadhan-web/browser-qa-agent",
      description: "Browser-based QA automation agent.",
    },
  ],

  // Optional thumbnail overrides: repo name → image path.
  // Anything not listed is looked up at assets/projects/<RepoName>.png
  projectImages: {
    // "DownloadGuard": "assets/projects/downloadguard.png",
  },

  langColors: {
    JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5",
    PHP: "#4F5D95", CSS: "#663399", HTML: "#e34c26",
    "Jupyter Notebook": "#DA5B0B", MATLAB: "#e16737", Java: "#b07219", C: "#555", "C++": "#f34b7d",
  },

  // ---- Skills screen ----
  skills: [
    { group: "Autonomous Agents · AI · ML", items: [
      ["Autonomous Agent Development", 88], ["Browser Automation · Playwright", 85],
      ["LLM Tool Use · Agent Orchestration", 86], ["Python · Scikit-learn · XGBoost", 85],
      ["Feature Engineering · SMOTE/ADASYN", 80], ["SHAP · Model Explainability", 78],
      ["Hermes Agent · AI Orchestration", 85], ["RAG & Vector Embeddings", 85],
      ["Machine Learning Pipelines", 84],
    ]},
    { group: "Web & Full-Stack", items: [
      ["JavaScript / TypeScript", 88], ["Next.js · React 19", 86],
      ["Laravel · PHP", 80], ["HTML · CSS · Tailwind CSS", 88],
      ["Supabase · PostgreSQL · MySQL", 82], ["REST APIs · Zod Validation", 80],
    ]},
    { group: "Tools & Engineering", items: [
      ["Git & GitHub · Worktrees", 86], ["Pytest · Test Automation", 82],
      ["Postman · API Testing", 82], ["Manual Testing · Test Case Design", 90],
      ["FFmpeg · Inngest", 74], ["Vercel · Deployment", 80],
    ]},
    { group: "Soft Skills", items: [
      ["Problem Solving & Root-Cause Debugging", 90],
      ["Communication & Teamwork", 88],
      ["Time Management", 82],
      ["Eagerness to Learn", 92],
    ]},
  ],

  // ---- Certificates screen ----
  certificates: [
    {
      title: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding Indonesia",
      date: "Apr 2024",
      color: "#3178c6",
      url: "https://dicoding.com/certificates/RVZKR4YE4PD5",
      img: "assets/certificates/python.png",
    },
    {
      title: "Belajar Dasar Visualisasi Data",
      issuer: "Dicoding Indonesia",
      date: "Apr 2024",
      color: "#f1e05a",
      url: "https://dicoding.com/certificates/QLZ97800DP5D",
      img: "assets/certificates/visualisasi.png",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      date: "Apr 2024",
      color: "#f1e05a",
      url: "https://dicoding.com/certificates/JMZV323NOPN9",
      img: "assets/certificates/javascript.png",
    },
    {
      title: "Belajar Dasar Data Science",
      issuer: "Dicoding Indonesia",
      date: "Apr 2025",
      color: "#3572A5",
      url: "https://dicoding.com/certificates/53XED967RPRN",
      img: "assets/certificates/datascience.png",
    },
    {
      title: "Belajar Dasar AI",
      issuer: "Dicoding Indonesia",
      date: "Apr 2025",
      color: "#e60012",
      url: "https://dicoding.com/certificates/RVZKW5N0MZD5",
      img: "assets/certificates/ai.png",
    },
    {
      title: "TOEFL Prediction Test — Score 580",
      issuer: "Central Course (Kampung Inggris Pare)",
      date: "Oct 2026",
      color: "#1a5276",
      url: "assets/certificates/toefl.pdf",
    },
  ],

  // ---- Data fetching ----
  async fetchRepos() {
    const skip = new Set(this.featuredRepoNames.map(n => n.toLowerCase()));
    try {
      const res = await fetch(
        `https://api.github.com/users/${this.githubUser}/repos?per_page=100&sort=updated`
      );
      if (!res.ok) throw new Error(res.status);
      const repos = (await res.json()).filter(r => !r.fork && !skip.has(r.name.toLowerCase()));
      return { repos, live: true };
    } catch {
      return { repos: this.fallbackRepos.filter(r => !skip.has(r.name.toLowerCase())), live: false };
    }
  },
};
