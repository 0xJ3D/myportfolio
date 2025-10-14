import { User } from "lucide-react";
import { MonitorSmartphone, BrainCircuit, Cloud } from "lucide-react";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Work", path: "/projects" },
    {
        label: "Gallery",
        path: "/photos",
    },
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

export { navLinks, socialLinks, contactInfo, WhatIDoDetails, quickLinks };
