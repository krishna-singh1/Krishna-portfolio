export const personalInfo = {
  name: "Krishna Singh",
  role: "Senior Backend Engineer",
  tagline: "Building scalable distributed systems that handle millions.",
  email: "krishnasingh.ldh@gmail.com",
  phone: "+91-7888669454",
  linkedin: "https://linkedin.com/in/krishna-singh1",
  github: "https://github.com/krishna-singh1",
  leetcode: "https://leetcode.com/itskrrish",
  resumeLink: "/Krishna_Singh_Backend.pdf",
};

export const about = {
  summary: `I'm a Senior Backend Engineer with 6+ years of experience designing and building distributed systems that operate at serious scale — processing 15M+ records/day, monitoring 7M+ IoT devices, and powering real-time data pipelines across multi-tenant architectures.`,
  details: `My work sits at the intersection of system design, performance engineering, and cloud-native infrastructure. I've architected event-driven platforms with Kafka, optimized high-throughput pipelines for 3x performance gains, and reduced cloud costs by 20% through smarter architecture. I thrive on solving complex backend problems — from multi-tenant isolation to fault-tolerant streaming — and shipping production systems that scale.`,
  highlights: [
    "6+ years building backend systems at scale",
    "15M+ records/day processed in production",
    "7M+ IoT devices monitored in real-time",
    "3x throughput improvements through architecture redesign",
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "SQL"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "REST APIs", "GraphQL", "Microservices", "Event-Driven Architecture"],
  },
  {
    category: "Distributed Systems",
    items: ["Apache Kafka", "Redis", "Debezium", "Domain-Driven Design"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "Cassandra", "DynamoDB"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Lambda", "S3", "EC2"],
  },
  {
    category: "Testing & Tools",
    items: ["JUnit", "Mockito", "Git", "Kibana", "Datadog"],
  },
];

export const experience = [
  {
    company: "Caizin",
    role: "Senior Software Engineer 2",
    location: "Pune, India",
    period: "Aug 2024 – Present",
    bullets: [
      "Architected a multi-tenant, event-driven analytics platform processing 15M+ records/day — powering automated reporting and insights for 10+ enterprise customers.",
      "Designed a DDD-aligned Kafka data pipeline handling 5K+ events/sec with fault-tolerant scalability and strict tenant isolation.",
      "Optimized async processing flows, cutting end-to-end latency by 40% and boosting system throughput 3x through data modeling and caching improvements.",
    ],
    stack: ["Java", "Spring Boot", "Kafka", "MongoDB", "Debezium", "Docker", "Kubernetes", "Redis"],
  },
  {
    company: "Paytm",
    role: "Senior Software Engineer",
    location: "Noida, India",
    period: "Sep 2021 – Aug 2024",
    bullets: [
      "Built a real-time health monitoring system for 7M+ IoT devices — improving issue detection by 85% and cutting device downtime 30% with proactive diagnostics.",
      "Optimized the sound broadcast and ad delivery pipeline handling 1M+ daily requests across a distributed IoT network.",
      "Led end-to-end design and deployment of a Bluetooth IoT device supporting music playback and transaction broadcasts — onboarded 500K+ devices in 6 months.",
      "Reduced AWS infrastructure costs by 20% by redesigning IoT Core and Rule Engine architecture, eliminating redundant data flows.",
    ],
    stack: ["Java", "Spring Boot", "AWS IoT Core", "Lambda", "DynamoDB", "Docker", "JUnit"],
  },
  {
    company: "Tavisca Solutions (JPMorgan Chase)",
    role: "Software Developer",
    location: "Pune, India",
    period: "Jun 2019 – Jun 2021",
    bullets: [
      "Designed a Customer Engagement & Loyalty platform with personalized offer recommendations driving measurable engagement.",
      "Implemented a configurable rule engine with 20+ targeting attributes — enabling dynamic A/B testing and 30% improvement in offer relevance.",
      "Developed microservices for offer redemption and real-time notifications via Kafka, processing 500K+ events/day with guaranteed delivery.",
    ],
    stack: ["Java", "Spring Boot", "GraphQL", "AWS", "PostgreSQL", "Kafka", "Docker", "Kubernetes"],
  },
];

export const projects = [
  {
    title: "Multi-Tenant Analytics Platform",
    description:
      "Enterprise-grade event-driven analytics engine processing 15M+ records daily with DDD-aligned architecture, Kafka pipelines, and tenant-isolated data flows.",
    stack: ["Java", "Spring Boot", "Kafka", "MongoDB", "Redis", "Debezium"],
    achievements: [
      "15M+ records/day processed",
      "5K+ events/sec throughput",
      "40% latency reduction",
      "3x throughput improvement",
    ],
    github: "#",
    demo: null,
  },
  {
    title: "IoT Device Monitoring at Scale",
    description:
      "Real-time metrics and health monitoring system for 7M+ IoT devices with proactive alerting, diagnostics, and performance tracking across a distributed network.",
    stack: ["Java", "Spring Boot", "AWS IoT Core", "Lambda", "DynamoDB"],
    achievements: [
      "7M+ devices monitored",
      "85% faster issue detection",
      "30% less device downtime",
      "20% infrastructure cost reduction",
    ],
    github: "#",
    demo: null,
  },
  {
    title: "Bluetooth IoT Device Platform",
    description:
      "End-to-end Bluetooth-enabled IoT solution supporting real-time music playback and transaction broadcasts — onboarded at massive scale across India.",
    stack: ["Java", "Spring Boot", "AWS", "Docker"],
    achievements: [
      "500K+ devices onboarded in 6 months",
      "Real-time transaction broadcasts",
      "Bluetooth audio integration",
    ],
    github: "#",
    demo: null,
  },
  {
    title: "Customer Engagement & Loyalty Engine",
    description:
      "Personalized offer recommendation platform with a flexible rule engine supporting 20+ configurable attributes for dynamic targeting and A/B testing.",
    stack: ["Java", "Spring Boot", "GraphQL", "PostgreSQL", "Kafka"],
    achievements: [
      "30% improvement in offer relevance",
      "500K+ events/day processed",
      "20+ configurable targeting rules",
    ],
    github: "#",
    demo: null,
  },
];

export const achievements = [
  {
    title: "Rockstar Award",
    org: "Paytm, 2023",
    description: "Recognized for exceptional performance in optimizing IoT infrastructure at scale.",
  },
  {
    title: "Rising Star Award",
    org: "Paytm, 2022",
    description: "Awarded for delivering innovative engineering solutions ahead of schedule.",
  },
  {
    title: "Shoutout Award",
    org: "Tavisca, 2021",
    description: "Acknowledged for shipping high-impact features ahead of timeline.",
  },
  {
    title: "Kudos Award",
    org: "Tavisca, 2020",
    description: "Honored for outstanding code quality and collaborative engineering.",
  },
];

export const education = {
  degree: "Bachelor of Technology (Hons.) in Computer Science and Engineering",
  school: "Lovely Professional University",
  location: "Phagwara, Punjab",
  year: "2019",
};

// Updated for deployment


