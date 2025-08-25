export interface ProjectDetail {
  topic: string
  description: string
  technicalPoints: string[]
  codeExample?: string
}

export interface Project {
  title: string
  company: string
  description: string
  techStack: string[]
  category: string
  savings: string
  icon: any
  details: ProjectDetail[]
}

export const projectsData: Project[] = [
  {
    title: "ParagonProfessionals.ca",
    company: "Boushehri Financial Consulting",
    description:
      "A robust platform supporting over 1,000 users at Boushehri Financial Consulting, designed to streamline operations, enhance content management, and track team progress.",
    techStack: ["C#", ".NET Core", "SQL Server", "Javascript", "JQuery", "HTML"],
    category: "Front/Back Office Platforms",
    savings: "15 hours/day",
    icon: "Workflow",
    details: [
      {
        topic: "Collaboration & Communication",
        description: "Successfully communicated workflows and ideas with non-technical stakeholders and administration teams, translating their needs into practical technical solutions.",
        technicalPoints: [
          "Led discovery sessions with administrative teams to translate daily workflows into structured technical requirements.",
          "Designed low-friction interfaces and dashboards that reflect non-technical user feedback and usage habits.",
          "Created internal documentation and visual flowcharts to communicate system behavior to stakeholders without technical jargon.",
          "Built configurable tools that allow non-developers to manage roles, content, and settings without engineering involvement.",
          "Used prototypes and wireframes during early-stage planning to align expectations between developers and business leaders.",
          "Maintained consistent feedback loops with end-users, ensuring rapid iteration and adoption of new features."
        ],
      },
      {
        topic: "Content Security & Accessibility",
        description:
          "Built a secure HLS-like video streaming system and a video library to prevent unauthorized downloads, ensuring content privacy and controlled access.",
        technicalPoints: [
          "Developed a token-secured video delivery system simulating HLS streaming to prevent direct download and unauthorized sharing.",
          "Integrated user role-based access to control who can view, manage, or contribute video content across different teams.",
          "Added watermark overlays tied to each user’s identity to deter screen recording and unauthorized redistribution.",
        ],
      },
      {
        topic: "Automation & Tracking",
        description: "Automated governmental licensing processes with detailed progress trackers, document generators, and reports, saving advisors hours on repetitive tasks.",
        technicalPoints: [
          "Developed dynamic editors to create government licensing documents based on advisor and client data.",
          "Integrated workflow automation with task triggers and due-date tracking for each licensing stage.",
          "Built custom PDF generators using data-driven templates to eliminate manual document preparation.",
          "Implemented status tracking for every application, ensuring accountability and real-time visibility.",
          "Designed role-based dashboards showing licensing progress, pending actions, and document readiness.",
          "Created exportable reports with filters by advisor, region, and status to support data-driven decisions."
        ],
      },
      {
        topic: "Optimization & Performance",
        description: "Utilized IMemoryCache to reduce repetitive SQL calls and calculations, improving system performance and scalability. Developed custom C# attributes to streamline SQL operations and enhance database efficiency.",
        technicalPoints: [
          "Implemented async/await patterns throughout the application to support high-concurrency scenarios.",
          "Used IMemoryCache and custom cache invalidation strategies to reduce redundant SQL calls and improve response times.",
          "Integrated JWT-based authentication with built-in rate limiting to secure endpoints and prevent abuse.",
          "Developed custom C# attributes for mapping SQL queries and models, significantly reducing boilerplate and improving maintainability."
        ],
      },
      {
        topic: "Team Management",
        description: "Developed role-based access systems for career progression, interactive admin panels for real-time team insights, and tools for event ticketing, RSVP, and payment handling.",
        technicalPoints: [
          "Implemented real-time team updates and admin alerts for immediate feedback and coordination.",
          "Built a drag-and-drop interface and document handling for non-technical users.",
          "Designed responsive, paginated data tables with virtual scrolling to support thousands of records without performance loss.",
          "Developed dynamic role-based access control (RBAC) to enable career-based permission tiers and internal progression visibility.",
          "Added self-serve tools for team leaders to manage event RSVPs, ticketing, and payment tracking with exportable reports."
        ],
      },
      {
        topic: "Technical Innovations",
        description: "Created JSON-to-property JavaScript libraries for dynamic UI updates and implemented SMTP email systems for seamless communication with team members.",
        technicalPoints: [
          "Developed a custom JavaScript library that maps JSON data directly to UI components, enabling highly dynamic and reusable front-end experiences.",
          "Created a modular SMTP email service in .NET with templated messaging for system alerts, onboarding flows, and user engagement.",
          "Engineered low-code UI definitions driven by backend data models to allow for scalable page rendering without rewriting front-end logic.",
          "Designed internal debugging tools that expose structured logs, event states, and user actions to reduce troubleshooting time.",
          "Introduced dev-time productivity boosters like code generation scripts and reusable C# annotations to cut down boilerplate."
        ],
      },
      {
        topic: "Background Services",
        description: "Eliminated manual data-feeding of the administration team, by implementing required background services to retrieve and process all reports automatically on a daily basis.",
        technicalPoints: [
          "Created scheduled background services using `IHostedService` to automate daily report generation and delivery.",
          "Integrated with third-party APIs and internal databases to pull, normalize, and consolidate data without manual intervention.",
          "Implemented retry policies and failover handling to ensure background tasks complete even in unstable network conditions.",
          "Generated and cached daily reports in various formats with minimal processing delay.",
          "Built an admin interface for viewing background task status, last run timestamps, and triggering manual reruns if needed."
        ],
      }
    ],
  },
  {
    title: "Admin Assistance Master App",
    company: "Boushehri Financial Consulting",
    description:
      "Developed a suite of five apps that automated 60% of the administrative workload for Boushehri Financial Consulting, allowing the team to focus on strategic priorities.",
    techStack: ["C#", "WinForms"],
    category: "Daily Task Automations",
    savings: "8 hours/day",
    icon: "Cpu",
    details: [
      {
        topic: "Process Automation",
        description: "Streamlined repetitive daily tasks like licensing checks, contest leaderboard generation, and milestone tracking, reducing manual effort significantly (An Approximately 60-70% workload reduction).",
        technicalPoints: [
          "Automated daily licensing workflows, contest leaderboard updates, and milestone tracking.",
          "Used WinForms with modular task runners to consolidate multiple admin tasks into a single streamlined interface.",
          "Added notification and logging systems to track automation results and alert users to missing or incorrect data.",
          "Created form-driven rule engines that allow changes to automation logic without needing to modify code.",
          "Reduced human errors by introducing validation layers and confirmation steps for key operations."
        ],
      },
      {
        topic: "Technical Adaptability",
        description: "Designed workarounds for websites lacking APIs, using HTTPClient and multi-threading to optimize data processing and report generation.",
        technicalPoints: [
          "Used `HttpClient` to simulate browser requests for websites without public APIs, enabling data scraping and integration.",
          "Implemented DOM parsing with HtmlAgilityPack to extract structured data from HTML content programmatically.",
          "Designed retry logic, dynamic delays, and user-agent rotation to ensure stable and polite scraping behavior.",
          "Utilized multi-threading to parallelize requests across sources, drastically improving data retrieval time.",
          "Adapted to site changes quickly through centralized selectors and config-driven parsing logic."
        ],
      },
      {
        topic: "Improved Efficiency",
        description: "Enhanced data processing speed and accuracy with parallel processing for large datasets, ensuring timely and reliable output.",
        technicalPoints: [
          "Applied parallel processing (`Parallel.ForEach`, `Task.WhenAll`) to boost performance on high-volume data tasks.",
          "Benchmarked and profiled core routines to eliminate bottlenecks and reduce CPU load during peak operations.",
          "Optimized file I/O operations for bulk report generation and data archiving.",
        ],
      },
      {
        topic: "Collaboration & Communication",
        description: "Worked closely with non-technical administrative staff to understand their challenges and implement user-friendly solutions that addressed their pain points effectively.",
        technicalPoints: [
          "Ran live demos with administrative staff to gather early feedback and ensure the software matched real workflows.",
          "Designed intuitive WinForms UIs with labeled tooltips, warnings, and visual states for clarity.",
          "Converted complex logic into user-friendly dropdowns, checkboxes, and auto-filled fields.",
          "Provided onboarding support with written guides and in-app walkthroughs to ensure adoption.",
          "Iterated based on weekly feedback loops to align technical improvements with admin priorities."
        ],
      },
      {
        topic: "Reusability",
        description: "Built all processors as class libraries, that can be reused and compiled on all platforms when needed (Migration from WinForms to ASP.NET).",
        technicalPoints: [
          "Abstracted task logic into reusable .NET class libraries to separate UI from business logic.",
          "Built standardized interfaces across libraries for easy integration from WinForms to ASP.NET projects.",
        ],
      },
    ],
  },
  {
    title: "Management, Reporting & Administration Automation",
    company: "Nima Attar Inc.",
    description: "Developed a suite of three apps and automated 100% of the administrative workload in Nima Attar Inc., that was tied to team management, generating reports and admin-related tasks.",
    techStack: ["C#", "Telegram MTProto", "WinForms"],
    category: "Automation",
    savings: "8 hours/day",
    icon: "LayoutDashboard",
    details: [
      {
        topic: "Telegram-Based Team Management & Performance Tracking",
        description:
          "Leveraged the power of the MTProto protocol to create advanced Telegram group automation — enabling management to track, measure, and manage team performance inside and outside the Telegram ecosystem.",
        technicalPoints: [
          "Built a custom Telegram client using MTProto to bypass standard Bot API limitations and access advanced group control features.",
          "Automated member role assignment and activity tracking across multiple Telegram groups and external data sources.",
          "Developed performance-based automation to evaluate team members’ engagement, activity, and eligibility for contests.",
          "Consolidated team behavior data across chat logs, actions, and external performance metrics into a unified model."
        ],
      },
      {
        topic: "Custom Reporting",
        description: "Eliminated manual reporting by converting raw team data into insightful, manager-friendly dashboards and PDF reports — supporting better decision-making and freeing up hours of administrative time daily.",
        technicalPoints: [
          "Automated data collection and normalization from diverse sources (Telegram logs, external tools, performance sheets).",
          "Created readable reports with ranking, and charts using custom WinForms dashboards and exportable PDF summaries.",
          "Developed visualization tools to show performance trends, contest standings, and engagement insights in real-time.",
          "Built a templating system to allow managers to define new rules and metrics without modifying the codebase.",
          "Integrated report generation into daily/weekly scheduling, ensuring consistency and accuracy in updates."
        ],
      },
      {
        topic: "Team Monitoring & Performance Analytics",
        description: "Developed real-time tracking and performance analytics systems that provided management with a comprehensive view of team activity, allowing for quick decision-making and insight-driven interventions.",
        technicalPoints: [
          "Built a team monitoring system that tracked member activity, engagement, and contributions both inside and outside Telegram.",
          "Developed performance analytics dashboards that visualized team progress, rankings, and contest results with actionable metrics.",
          "Leveraged real-time data aggregation to deliver up-to-the-minute statistics on team performance, available at any moment.",
          "Provided exportable data reports to management for quick review and decision-making without waiting for scheduled report runs."
        ],
      },
      {
        topic: "Process Automation & Workflow Optimization",
        description: "Automated tedious, repetitive tasks that were previously manually handled, reducing administrative overhead, improving operational efficiency, and allowing team members to focus on higher-priority work.",
        technicalPoints: [
          "Automated the conversion of raw data into structured, actionable reports that were previously manually compiled.",
          "Developed a custom workflow engine to manage team tasks, assignments, and performance tracking in a fully automated manner.",
          "Scheduled and triggered automated processes for calculating performance metrics and generating contest results based on predefined criteria.",
          "Eliminated manual data entry errors by introducing seamless integration with external systems and Telegram for real-time updates.",
          "Created a robust error-handling mechanism to flag inconsistencies and automatically alert management without interrupting operations."
        ],
      },
    ],
  },
  {
    title: "Automated Multi-Thread Exam Processor & PDF Report Generator",
    company: "Salam School Chain",
    description: "Written in C# for salamsch.com, this application reads multiple large Excel file (Data base), containing thousands of student responses to a multi-choice questionnaire, job titles and descriptions, education paths, etc. Using a specific formula to identify the student’s personality, all the responses are processed and based on their personality, they’re matched with multiple jobs. At last, a PDF file is generated with their information, personality graph, extra information and multiple pages, providing them with the jobs that match their personality and helping them choose the correct education path, learn relevant softwares, etc.",
    techStack: ["C#", "WinForms", "Excel"],
    category: "Data Processing Automations",
    savings: "12 hours/day",
    icon: "Settings",
    details: [
      {
        topic: "High-Volume Exam Processing & Personality Mapping",
        description: "Engineered a multi-threaded exam processor capable of reading and analyzing thousands of student records from Excel files, applying personality assessment formulas, and matching results with personalized job paths.",
        technicalPoints: [
          "Implemented parallel processing to handle thousands of student entries simultaneously, significantly reducing processing time.",
          "Used ExcelDataReader to parse large multi-sheet Excel files without memory overhead.",
          "Built a custom logic engine to apply psychometric formulas that classify students into personality types.",
          "Mapped each personality type to relevant career paths, job titles, and learning resources based on a configurable ruleset.",
          "Integrated data validation and conflict resolution to handle incomplete or malformed student records."
        ]
      },
      {
        topic: "Automated Multi-Page PDF Report Generation",
        description: "Automatically generated visually rich PDF reports tailored to each student, including personality breakdowns, career suggestions, and software learning paths — designed for both digital delivery and print.",
        technicalPoints: [
          "Generated dynamic multi-page PDFs, including text, charts, and layout controls.",
          "Visualized personality types with color-coded graphs and career suitability scores for better readability.",
          "Dynamically inserted pages based on available data (e.g., job matches, software suggestions, learning paths).",
          "Localized report content using template variables to adapt language and tone for different school branches.",
          "Enabled batch PDF generation and export, with automated file naming and saving by student ID."
        ]
      }
    ],
  },
  {
    title: "Interactive PDF Website for Students",
    company: "Salam School Chain",
    description: "This website was built to help students to see their books online but with a difference. Through this platform, it was possible for editors and teachers to create questions, tests, videos, images and audios related to each part of the book and using that, they upload all the data above in different parts of the book and when the students click on those specific boxes in their books, they see teachers teaching those parts and see the related information like questions, tests, images, etc... Teachers and editors specify the parts they would like the students to click on in the application and attach the needed data.",
    techStack: ["C#", ".NET Core", "SQL Server"],
    category: "Platforms",
    savings: "6 hours/student",
    icon: "Book",
    details: [
      {
        topic: "Interactive PDF Engine & Smart Content Anchoring",
        description: "Developed a custom PDF interaction engine allowing editors and teachers to place interactive hotspots on specific parts of textbooks — linking them to multimedia content, questions, and tests for an enriched student experience.",
        technicalPoints: [
          "Created a mapping system to anchor interactive elements (videos, tests, questions) to specific coordinates in PDF pages.",
          "Built a click-detection layer over rendered textbook pages to trigger content dynamically when students interact with a region.",
          "Stored anchors and linked resources in a normalized SQL schema to allow fast querying and filtering by book, chapter, or page.",
          "Developed a visual editor interface for teachers and editors to assign media content to exact textbook positions without coding.",
          "Ensured support for various media types (MP4, MP3, images, YouTube, text) with secure upload and content preview features."
        ]
      },
      {
        topic: "Content Management & Student Engagement",
        description: "Enabled non-technical educators to manage and enrich textbook content with custom quizzes, videos, and audio — making learning more engaging and accessible for students across the Salam School Chain.",
        technicalPoints: [
          "Designed a role-based content management system (CMS) for teachers and editors to upload and organize educational resources.",
          "Implemented tagging and categorization of content to allow dynamic filtering and personalized student views.",
          "Added progress tracking for student interactions, enabling teachers to monitor which areas of the book were explored.",
          "Integrated user-upload validation and content moderation workflows to ensure educational quality and appropriateness.",
          "Optimized the platform for high concurrent usage by students, using lazy loading and server-side pagination for performance."
        ]
      }
    ],
  },
  {
    title: "Administration Telegram Bot",
    company: "EG Wealth Inc.",
    description: "Developing an entire administration Telegram bot to manage team members, aid clients with accessing required information at any time, and guide new members with their progress in a new industry.",
    techStack: ["C#", "Telegram API", "LiteDB"],
    category: "Tracking/Content Automation",
    savings: "20 hours/agent",
    icon: "Bot",
    details: [
      {
        topic: "Team & Client Automation via Telegram Bot",
        description: "Built a fully featured Telegram bot to automate administrative interactions — from guiding new members through onboarding to helping existing agents and clients access documents, track milestones, and get instant support.",
        technicalPoints: [
          "Integrated with Telegram Bot API using `HttpClient` and long polling to handle commands, callbacks, and file uploads.",
          "Designed custom command routing with modular handlers to separate logic for team members, admins, and clients.",
          "Stored structured user data and progress checkpoints in LiteDB for fast and lightweight embedded storage.",
          "Implemented inline keyboards, menus, and multi-step flows for an intuitive messaging-based interface.",
        ],
      },
      {
        topic: "Progress Tracking & Self-Service Content Delivery",
        description:
          "Empowered team members and clients to access resources and track onboarding milestones directly through Telegram — reducing admin load and improving user experience through on-demand automation.",
        technicalPoints: [
          "Created step-by-step onboarding flows with progress memory, allowing users to resume where they left off.",
          "Delivered educational material, documents, and media through structured Telegram messages with embedded buttons.",
          "Logged user interactions to provide analytics on which resources were accessed and where drop-offs occurred.",
          "Enabled admin users to broadcast updates, assign tasks, and get reports directly within Telegram without external tools.",
          "Built a feedback system where users could submit questions or report issues, routed automatically to admin groups."
        ],
      },
    ],
  },
]
