"use client";
import { experiences, skillsData } from "@/app/utils/siteData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "@/app/components/ExperienceCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { SkillCard } from "@/app/components/SkillCard";

export default function Home() {
    const roles = ["FULLSTACK", "FRONTEND", "BACKEND", "MOBILE", "AI Agent"];
    const intervalMs = 1800;

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % roles.length);
        }, intervalMs);
        return () => clearInterval(timer);
    }, [roles.length]);

    return (
        <div className="px-3 md:px-5 flex flex-col">
            <div className="flex flex-wrap bg-[#ff8360]  w-full">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row w-full shadow-xs">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex items-center justify-center py-6 md:py-0">
                        <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px]">
                            <Image
                                src="/ox.png"
                                alt="Elnathan avatar"
                                fill
                                className="object-cover rounded-full"
                                priority
                                sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, (max-width: 1024px) 288px, 400px"
                            />
                        </div>
                    </div>
                    {/* Content Section */}
                    <aside className="flex-1 px-4 sm:px-8 py-6 md:py-10 flex flex-col justify-center">
                        <div className="mb-6 md:mb-8">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-2">
                                HI! I&apos;M ELNATHAN,
                            </h1>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
                                A{" "}
                                <span className="inline-block relative">
                                    <motion.span
                                        key={roles[current]}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className=""
                                    >
                                        {roles[current]}
                                    </motion.span>
                                </span>{" "}
                            </h2>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                                Dev
                            </h2>
                        </div>

                        <div className="max-w-lg">
                            <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed">
                                I&apos;m a builder at heart who turns complex
                                problems into intuitive, responsive websites and
                                applications. My days are split between crafting
                                AI-driven agentic workflows, architecting
                                scalable infrastructure, and staying curious
                                about whatever&apos;s next in tech, the lessons
                                I learn, and the experiments that keep me awake
                                at night.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
            <div className="mt-10 container mx-auto flex flex-col lg:flex-row gap-8 py-10 px-0 sm:px-4">
                {/* Career Summary */}
                <div className="lg:sticky lg:top-8 max-w-full lg:max-w-[450px] flex flex-col gap-3 p-4 md:p-6 shadow  mb-6 lg:mb-0 h-fit">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-2">
                        My Career So Far
                    </h2>
                    <h3 className="text-black text-base sm:text-lg md:text-xl leading-relaxed">
                        I started my career in operations, learning to solve
                        real-world problems with data in high-pressure
                        environments in logistics and distribution. <br /> This
                        foundation sparked a move into software, where I&apos;ve
                        since shipped full-stack products with end-users. I now
                        focus on building and maintaining scalable, cloud-native
                        systems—translating complex business needs into robust,
                        user-friendly solutions for SMEs.
                    </h3>
                    <a
                        href="https://flowcv.com/resume/dn4ub6huja"
                        target="_blank"
                        className="hover:border px-3 py-4 rounded bg-black text-[#ff8360] font-bold w-fit hover:text-white transition-transform "
                    >
                        View my CV
                    </a>
                </div>
                {/* Experience Cards */}
                <div className="flex-1 flex flex-col gap-6">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>
            </div>
            <div>
                {" "}
                <section className="w-full py-16 px-1 ">
                    <div className="md:mx-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-2">
                            Technical Skills
                        </h2>
                        <div className="max-w-[500px]">
                            <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed mb-4">
                                This is a curated list of languages,
                                technologies, and frameworks that I&apos;ve
                                worked with across various projects with varying
                                experience with each.
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto max-w-7xl">
                        {/* Desktop Grid View */}
                        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
                            {skillsData.map((skill) => (
                                <SkillCard key={skill.id} skill={skill} />
                            ))}
                        </div>

                        {/* Mobile Carousel View */}
                        <div className="md:hidden">
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {skillsData.map((skill) => (
                                        <CarouselItem key={skill.id}>
                                            <SkillCard skill={skill} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="left-2" />
                                <CarouselNext className="right-2" />
                            </Carousel>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
