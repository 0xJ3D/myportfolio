"use client";
import FlipLink from "@/app/components/FlipLink";
import { socialLinks } from "@/app/utils/siteData";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
    const roles = ["FULLSTACK", "FRONTEND", "BACKEND", "MOBILE"];
    const intervalMs = 1800;

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % roles.length);
        }, intervalMs);
        return () => clearInterval(timer);
    }, [roles.length]);
    return (
        <>
            <div
                className="min-h-screen flex border border-[red]  px-3 md:px-5  bg-[#07090f]"
                // className="flex flex-col w-full justify-center items-center px-3 md:px-5 rounded-b-lg  overflow-x-hidden"
            >
                {/* Left Sidebar */}
                <div className="w-24 bg-white border-r border-gray-200 flex flex-col items-center py-8">
                    {/* Logo */}
                    <div className="mb-8">
                        <div className="text-[black] text-xl font-bold">
                            {"<ED/>"}
                        </div>
                    </div>

                    {/* Vertical Text */}
                    <div className="flex-1 flex items-center">
                        <div className="transform -rotate-90 whitespace-nowrap text-sm font-medium text-gray-600 tracking-wider">
                            SOFTWARE ENGINEER
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="transform -rotate-90 whitespace-nowrap text-sm font-medium text-gray-600 tracking-wider">
                            FULLSTACK DEVELOPER
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-col gap-4">
                        <a
                            href="https://github.com/ejdunia"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://twitter.com/ejdunia"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/ejdunia"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:ejdunia@gmail.com"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex">
                    {/* Content Section */}
                    <div className="flex-1 px-16 py-10 flex flex-col justify-center">
                        {/* Main Heading */}
                        <div className="mb-8">
                            <h1 className="text-5xl font-bold text-white leading-tight mb-2">
                                HI{" "}
                                <span className="inline-block animate-bounce">
                                    👋
                                </span>
                                , I&apos;M ELNATHAN.
                            </h1>

                            <h2 className="text-5xl font-bold text-gray-900 leading-tight h-[60px]">
                                A{" "}
                                <span className="inline-block relative w-[220px]">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={roles[current]}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute left-0"
                                        >
                                            {roles[current]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </h2>
                            {/* <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                                SOFTWARE DEVELOPER
                            </h2> */}
                        </div>

                        {/* Description */}
                        <div className="max-w-lg">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Hello there! It&apos;s a pleasure to meet you.
                                This space is where I share my journey and
                                insights in the world of technology. Here,
                                you&apos;ll find a collection of my projects,
                                thoughts on software development, and
                                explorations into new technologies. I&apos;m
                                excited to have you here! 🚀
                            </p>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-1/2 relative  border flex items-center justify-center">
                        <div className="relative w-[400px] h-[600px]">
                            <Image
                                src="/me.jpg"
                                alt="Elnathan John - Professional headshot"
                                // width={400}
                                // height={600}
                                fill
                                className="object-cover rounded-lg shadow-2xl border"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>{" "}
            <section className="h-screen grid place-content-center gap-3S flezx flex-colx justify-centerx items-center ">
                {socialLinks.map((socialLink, key) => (
                    <FlipLink key={key} href={socialLink.url}>
                        {socialLink.name}
                        {/* {socialLink.icon} */}
                    </FlipLink>
                ))}
            </section>
        </>
    );
}
