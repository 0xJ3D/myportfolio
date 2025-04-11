import { FileText, User, Mail, CodeXml, Camera } from "lucide-react";

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

const features = [
    {
        title: "Minimal Design",
        description: "Clean aesthetics that put your content in the spotlight.",
        icon: "✨",
    },
    {
        title: "Responsive",
        description:
            "Flawless experiences across all devices and screen sizes.",
        icon: "📱",
    },
    {
        title: "Fast Performance",
        description: "Lightning-quick load times for smooth user interactions.",
        icon: "⚡",
    },
    {
        title: "Accessibility",
        description: "Inclusive design practices for all users.",
        icon: "🌈",
    },
    {
        title: "SEO Optimized",
        description: "Built to help your site rank higher in search results.",
        icon: "🔍",
    },
];

const contactInfo = {
    email: "ejdunia@gmail.com",
    // phone: "+",
};

const serviceData = [
    {
        title: "Custom Digital Experiences",
        description:
            "Stunning websites that reflect your brand and captivate your audience.",
        imageUrl: "/Guy.svg",
    },
    {
        title: "SEO & Performance Optimization",
        description:
            "Bring your site to the top of search results and keep users engaged with fast load times.",
        imageUrl: "/guy.svg",
    },

    {
        title: "WordPress Development",
        description:
            "Custom theme development, plugin integration, I bring WordPress to life with solutions that are secure, fast, and easy to manage.",
        imageUrl: "/guy.svg",
    },
    {
        title: "Tech Support & Cloud Integration",
        description:
            "System optimization, troubleshooting, cloud integration. ensuring your digital infrastructure runs smoothly.",
        imageUrl: "/guy.svg",
    },
];

export {
    navLinks,
    socialLinks,
    contactInfo,
    serviceData,
    quickLinks,
    features,
};
