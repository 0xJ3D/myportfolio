import { FileText, User, Mail, CodeXml, Camera } from "lucide-react";
import { Monitor, Lightbulb, Palette } from "lucide-react";

const navLinks = [
    { label: "Work", path: "/work", icon: <CodeXml size={16} /> },
    { label: "About", path: "/about", icon: <User size={16} /> },
    { label: "Projects", path: "/projects", icon: <FileText size={16} /> },
    { label: "Contact", path: "/contact", icon: <Mail size={16} /> },
    { label: "Photos", path: "/contact", icon: <Camera size={16} /> },
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
    email: "ejdunia@gmail.com",
    // phone: "+",
};

const WhatIDoDetails = [
    {
        title: "Bespoke Digital Experiences",
        description:
            "Stunning websites that reflect your brand and captivate your audience.",
        icon: Palette,
    },
    {
        title: "AI Automation and Integration",
        description:
            "Bring your site to the top of search results and keep users engaged with fast load times.",
        icon: Monitor,
    },

    {
        title: "Hosting and Cloud support",
        description:
            "System optimization, troubleshooting, cloud integration. ensuring your digital infrastructure runs smoothly.",
        icon: Lightbulb,
    },
];

export { navLinks, socialLinks, contactInfo, WhatIDoDetails, quickLinks };
