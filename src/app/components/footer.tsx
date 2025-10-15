"use client";

import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";

const Footer = () => {
    const socialLinks = [
        { name: "X (TWITTER)", url: "https://twitter.com" },
        { name: "LINKEDIN", url: "https://linkedin.com" },
    ];

    return (
        <motion.footer
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
            className="bg-[white] px-2 md:px-5 pt-5 md:pt-10"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Section */}
                <div>
                    <div className="border border-foreground p-1 inline-block border-b-0">
                        <h3 className="font-mono text-sm font-medium px-2 py-1">
                            CONTACT
                        </h3>
                    </div>

                    <div className="border border-foreground">
                        <div className="flex items-center justify-between p-4 border-foreground">
                            <span className="font-mono text-sm">
                                hello@elnathan.dev
                            </span>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0 hover:bg-muted"
                            >
                                <Mail className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Social Links Section */}
                <div>
                    <div className="border border-foreground p-1 inline-block border-b-0">
                        <h3 className="font-mono text-sm font-medium px-2 py-1  ">
                            FOLLOW ME
                        </h3>
                    </div>

                    <div className="border border-foreground">
                        {socialLinks.map((link, index) => (
                            <div
                                key={link.name}
                                className={`flex items-center justify-between p-4 ${
                                    index < socialLinks.length - 1
                                        ? "border-b border-foreground"
                                        : ""
                                }`}
                            >
                                <span className="font-mono text-sm">
                                    {link.name}
                                </span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    asChild
                                    className="h-6 w-6 p-0 hover:bg-muted"
                                >
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="h-3 w-3" />
                                    </a>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                {/*  Location Section */}
                <div>
                    <div className="border border-foreground p-1 inline-block">
                        <h3 className="font-mono text-sm font-medium px-2 py-1">
                            I&apos;M
                        </h3>
                    </div>
                    <h2
                        className="font-bold text-[5.6rem] md:text-8xl  mt-4"
                        style={{
                            fontFamily: "Ojuju",
                        }}
                    >
                        Elnathan
                    </h2>
                </div>
            </div>
            <div className="flex flex-col items-center ">
                <p className="text-lg py-6 my-4">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;
