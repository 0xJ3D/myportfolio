"use client";
import { experiences } from "@/app/utils/siteData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "@/app/components/ExperienceCard";

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
        <div className="min-h-screen px-3 md:px-5 flex flex-col">
            <div className="min-h-screen flex  bg-[#ff8360]">
                {/* Main Content */}
                <div className="flex-1 flex ">
                    {/* Image Section */}
                    <div className="w-1/2    flex items-center justify-center">
                        <div className="relative w-[500px] h-[500px]">
                            <Image
                                src="/ox.png"
                                alt="Elnathan  headshot"
                                fill
                                className="object-cover rounded-full object-top"
                                priority
                            />
                        </div>
                    </div>{" "}
                    {/* Content Section */}
                    <aside className="flex-1 px-8 py-10 flex flex-col justify-center ">
                        <div className="mb-8">
                            <h1 className="text-5xl font-bold text-black leading-tight mb-2">
                                HI! I&apos;M ELNATHAN,
                            </h1>
                            <h2 className="text-5xl font-bold text-[black] leading-tight">
                                A{" "}
                                <span className="inline-block relativex ">
                                    <motion.span
                                        key={roles[current]}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolutez "
                                    >
                                        {roles[current]}
                                    </motion.span>
                                </span>{" "}
                            </h2>
                            <h2 className="text-5xl  font-bold text-[black]">
                                Dev
                            </h2>
                        </div>

                        <div className="max-w-lg">
                            <p className="text-[black] text-lg md:text-xl leading-relaxed">
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
            <div className="mt-10 container mx-auto justify-between h-full py-[200px]">
                <div className="flex  gap-4  justify-around ">
                    <div className="sticky h-[500px] top-[20px] max-w-[550px] flex flex-col gap-3">
                        <h2 className="text-4xl font-bold text-center mb-10">
                            My Career So Far
                        </h2>
                        <h3 className="text-3xl">
                            I started my career in operations, learning to solve
                            real-world problems with data in high-pressure
                            environments in logistics and distribution. <br />{" "}
                            This foundation sparked a move into software, where
                            I&apos;ve since shipped full-stack products with
                            end-users. I now focus on building and maintaining
                            scalable, cloud-native systems—translating complex
                            business needs into robust, user-friendly solutions
                            for SMEs.
                        </h3>
                        <a
                            href="https://flowcv.com/resume/dn4ub6huja"
                            target="_blank"
                            className="hover:border px-3 py-4 rounded bg-black text-[#ff8360] font-bold w-fit hover:text-white transition-transform "
                        >
                            View my CV
                        </a>
                    </div>
                    <div className="">
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
