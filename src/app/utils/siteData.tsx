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
            "Stunning websites that reflect your brand and captivate your audience.",
        icon: MonitorSmartphone,
        bg: "/icons/monitor.svg",
    },
    {
        title: "AI Agents and Integration",
        description:
            "Bring your site to the top of search results and keep users engaged with fast load times.",
        icon: BrainCircuit,
        bg: "/icons/brain.svg",
    },

    {
        title: "Hosting and Cloud support",
        description:
            "System optimization, troubleshooting, cloud integration. ensuring your digital infrastructure runs smoothly.",
        icon: Cloud,
        bg: "/icons/cloud.svg",
    },
];

export { navLinks, socialLinks, contactInfo, WhatIDoDetails, quickLinks };
