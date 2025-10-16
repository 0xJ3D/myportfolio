import { Code2, Monitor, Server, User, Workflow } from "lucide-react";
import { MonitorSmartphone, BrainCircuit, Cloud } from "lucide-react";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Work", path: "/projects" },
    {
        label: "Gallery",
        path: "/photos",
    },
    { label: "Blog", path: "/blog" },
];

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: <User size={16} />,
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ejdunia",
        icon: <User size={16} />,
    },
    {
        name: "Twitter",
        url: "https://twitter.com/yourusername",
        icon: <User size={16} />,
    },
    {
        name: "Discord",
        url: "https://twitter.com/yourusername",
        icon: <User size={16} />,
    },
];

const quickLinks = [
    { label: "Home", url: "/" },
    { label: "Contact", url: "/contact" },
    { label: "Blog", url: "/contact" },
    { label: "Projects", url: "#" },
];

const contactInfo = {
    email: "hello@elnathan.dev",
};

const WhatIDoDetails = [
    {
        title: "Bespoke Digital Experiences",
        description:
            "I craft responsive, accessibility-first websites and applications that feel native on every screen. Starting with design files or a rough brief, I translate ideas into pixel-perfect interfaces using modern component libraries and CSS frameworks",
        icon: MonitorSmartphone,
        bg: "/icons/monitor.svg",
    },
    {
        title: "AI Agents and Autonomous Workflows",
        description:
            "I build AI agent that turn prompts, documents and APIs into reliable business processes. Using orchestration engines like n8n, I stitch together human-in-the-loop approvals and intelligent fall-back models, while enforcing cost-and-latency guardrails in code.",
        icon: BrainCircuit,
        bg: "/icons/brain.svg",
    },

    {
        title: "Cloud & 0 Downtime Hosting",
        description:
            "Optimized Infrastructure, troubleshooting, cloud integration rolled out with zero downtime. I spin up secure VPCs, container clusters or serverless stacks on the cloud, with CI/CD pipelines and monitoring to keep things running smoothly.",
        icon: Cloud,
        bg: "/icons/cloud.svg",
    },
];

const projects = [
    {
        title: "Gracetech Properties",
        description:
            "Gracetech Properties is the real estate investment arm of Gracetech Group, offering asset management and property development advisory services with innovative designs and modern living solutions.",
        tags: ["NEXTJS", "SHADCN UI", "TYPESCRIPT"],
        link: "https://gracetechproperties.com",
    },
    {
        title: "Partner Mobile",
        description:
            "Partner Mobile is a tech company that provides high-speed fiber optic internet connectivity and offers a wide range of mobile phones and accessories. The platform ensures seamless user experience and reliable services through a scalable and secure backend system.",
        tags: ["NESTJS", "DOCKER", "KAFKA", "SENTRY", "POSTGRESQL"],
        featured: true,
    },
    {
        title: "Booking Corps",
        description:
            "BookingCorps simplifies your travel plans with easy-to-use services for booking hotels, shortlets, and car rentals all in one place.",
        tags: ["NGINX", "DOCKER", "CPANEL", "CI/CD", "STRIPE"],
    },
    {
        title: "Tiqbuy",
        description:
            "TiqBuy is an innovative eCommerce website that offers a seamless shopping experience with a wide range of products and intuitive features.",
        tags: [
            "WORDPRESS",
            "WOOCOMMERCE",
            "NEXTJS",
            "MEDUSAJS",
            "POSTGRESQL",
            "REDIS",
        ],
        link: "https://tiqbuy.com",
    },
    {
        title: "Tiqpay",
        description:
            "TiqPay is a cutting-edge fintech application designed to streamline transactions and elevate your financial management experience.",
        tags: [
            "TYPESCRIPT",
            "NEXTJS",
            "POSTGRESQL",
            "NESTJS",
            "REACT NATIVE(EXPO)",
        ],
        featured: true,
    },
];
const skillsData = [
    {
        id: "frontend",
        title: "Frontend",
        icon: Monitor,
        categories: [
            {
                name: "Languages",
                items: ["JavaScript", "TypeScript", "HTML", "CSS"],
            },
            {
                name: "Frameworks & Libraries",
                items: ["React", "Next.js", "Vue.js", "Angular"],
            },
            {
                name: "Design Systems",
                items: ["Tailwind CSS", "Material UI", "shadcn/ui"],
            },
            {
                name: "State Management",
                items: ["Redux", "Zustand", "React Query"],
            },
            { name: "UI/UX Design", items: ["Figma", "Adobe XD", "Sketch"] },
        ],
    },
    {
        id: "backend",
        title: "Backend",
        icon: Server,
        categories: [
            { name: "Languages", items: ["Node.js", "Python", "Java", "Go"] },
            {
                name: "Frameworks",
                items: ["Express", "NestJS", "Django", "FastAPI"],
            },
            {
                name: "APIs & Databases",
                items: ["PostgreSQL", "MongoDB", "Redis", "GraphQL"],
            },
            {
                name: "Mapping & Visualization APIs",
                items: ["Mapbox", "Google Maps", "D3.js"],
            },
            {
                name: "Authentication",
                items: ["JWT", "OAuth", "Auth0", "NextAuth"],
            },
        ],
    },
    {
        id: "tooling",
        title: "Tooling",
        icon: Code2,
        categories: [
            {
                name: "Build Tools",
                items: ["Webpack", "Vite", "Turbopack", "esbuild"],
            },
            {
                name: "Testing & Debugging",
                items: ["Jest", "Vitest", "Playwright", "Cypress"],
            },
            {
                name: "Environment & Deployment Tools",
                items: ["Docker", "Vercel", "AWS", "Kubernetes"],
            },
        ],
    },
    {
        id: "workflows",
        title: "Workflows",
        icon: Workflow,
        categories: [
            {
                name: "Version Control & DevOps",
                items: ["Git", "GitHub Actions", "GitLab CI", "Jenkins"],
            },
            {
                name: "Agile Methodologies",
                items: ["Scrum", "Kanban", "Sprint Planning"],
            },
            {
                name: "Project Management & Collaboration Tools",
                items: ["Jira", "Linear", "Notion", "Slack"],
            },
        ],
    },
];
const experiences = [
    {
        company: "Partner Mobile",
        role: "Software Engineer",
        period: "Mar 2025 -",
        achievements: [
            "Designed and developed RESTful APIs using NestJS, enabling seamless communication between the mobile frontend and backend services.",
            "Built a scalable backend architecture with NestJS and Docker, improving deployment and service uptime by 40%.",
            "Integrated Kafka to manage background tasks and queues, enhancing system throughput by over 50%.",
            "Implemented Paystack for secure payment processing and Sentry for real-time monitoring, reducing transaction failures by 30% and cutting bug resolution time by 35%.",
        ],
    },
    {
        company: "Booking Corps",
        role: "Software Engineer",
        period: "Jul 2024 - Feb 2025",
        achievements: [
            "Collaborated with UI/UX designers and external teams to develop a hotel and shortlet booking platform, increasing user engagement by 25%.",
            "Integrated Stripe and Paystack for secure payments, reducing failed transactions by 40% and improving checkout reliability.",
            "Conducted internal deployments and testing that enhanced system uptime to 99.9%.",
        ],
    },
    {
        company: "Tiqbuy",
        role: "Software Engineer",
        period: "Sep 2023 - Jan 2025",
        achievements: [
            "Led migration of the e-commerce platform to a Next.js MedusaJS-powered stack, improving page load speed by 45%.",
            "Built real-time dashboards tracking user behavior and product performance, enabling a 35% increase in marketing ROI through better targeting.",
            "Supported a cross-functional team of 6 developers and marketers in implementing analytics tools that reduced decision-making time by 20%.",
        ],
    },
    {
        company: "Gracetech Group",
        role: "Lead Software Engineer",
        period: "Jun 2023 -",
        achievements: [
            "Spearheaded development of a biometric-based ERP attendance system used by 100+ employees, improving attendance accuracy by 85%.",
            "Designed and launched a ticketing help desk system that reduced average support resolution time from 5 days to 1.5 days (70% improvement).",
            "Increased user satisfaction scores by 40% through streamlined support workflows.",
        ],
    },
    {
        company: "Tiqpay",
        role: "Software Engineer",
        period: "May 2024 -",
        achievements: [
            "Managed core banking IT operations, reducing system downtime by 30%.",
            "Created and assigned staff profiles on internal systems, improving onboarding efficiency by 50%.",
            "Developed a secure desktop plugin for transaction validation, increasing fraud detection accuracy by 60%.",
            "Coordinated frontend integration with the Tiqpay gateway, ensuring 100% compatibility.",
        ],
    },
];
export {
    navLinks,
    socialLinks,
    contactInfo,
    WhatIDoDetails,
    quickLinks,
    projects,
    experiences,
    skillsData,
};
