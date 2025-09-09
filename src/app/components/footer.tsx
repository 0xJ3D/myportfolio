import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { quickLinks } from "../utils/siteData";

const Footer = () => {
    return (
        <footer className=" py-12 mt-20 p-2 md:px-6 lg:px-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <Link
                            href="/"
                            className="font-playfair text-3xl font-bold tracking-tight"
                        >
                            Elnathan
                        </Link>
                        <p className="mt-4 text-muted-foreground">
                            Full Stack Developer specializing in creating
                            beautiful, functional websites and applications.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.url}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Mail className="h-6 w-6" />
                                <span className="sr-only">Email</span>
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Linkedin className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Github className="h-6 w-6" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Twitter className="h-6 w-6" />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Elnathan Dunia. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
