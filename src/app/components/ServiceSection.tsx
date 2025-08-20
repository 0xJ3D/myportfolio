"use client";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import HireMeButton from "./HireMeButton";
import { WhatIDoDetails } from "../utils/siteData";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.7,
        },
    },
};

const headerVariants = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.8,
        },
    },
};

const scrollIndicatorVariants = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.3,
        },
    },
};

export default function ServicesSection() {
    return (
        <div className="min-h-screen bg-[#fcfffc]x py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-16">
                    <div className="flex items-start gap-8">
                        {/* Scroll Indicator */}
                        <motion.div
                            className="flex flex-col items-center gap-4 mt-8"
                            variants={scrollIndicatorVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="w-px h-16 bg-gray-300"></div>
                            <motion.div
                                className="w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronDown className="w-4 h-4 text-white" />
                            </motion.div>
                        </motion.div>

                        {/* Title Section */}
                        <motion.div
                            variants={headerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.p
                                className="text-sm text-[#07090f] mb-2 tracking-wider"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                — MY SERVICES ?
                            </motion.p>
                            <motion.h1
                                className="text-5xl md:text-6xl font-bold text-[#07090f] leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                viewport={{ once: true }}
                            >
                                WHAT I
                                <br />
                                DO?
                            </motion.h1>
                            <motion.p
                                className="text-[#07090f] mt-6 max-w-md text-xl md:text-2xl "
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                I solve problems with clean scalable solutions.
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* All Service Button */}

                    <HireMeButton />
                </div>

                {/* Services Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {WhatIDoDetails.map((wid, index) => {
                        const Icon = wid.icon;
                        return (
                            <motion.div
                                key={wid.title}
                                className="
                  relative h-80 rounded-lg  cursor-pointer bg-[#07090f] text-[#ff8360] border-[#ff8360]
                "
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    },
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="p-8 h-full flex flex-col justify-between">
                                    {/* Icon */}
                                    <motion.div
                                        className="mb-8"
                                        initial={{
                                            scale: 0,
                                            x: -20,
                                            rotate: 10,
                                        }}
                                        whileInView={{
                                            scale: 1,
                                            rotate: 0,
                                            x: 0,
                                        }}
                                        transition={{
                                            delay: 0.1 + index * 0.1,
                                            duration: 0.6,
                                            type: "zoom",
                                            stiffness: 200,
                                        }}
                                        // viewport={{ once: true }}
                                    >
                                        <Icon
                                            className={`w-12 h-12 ${"text-[#ff8360]"}`}
                                        />
                                    </motion.div>

                                    {/* Title */}
                                    <motion.div
                                        className="flex-1"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.4 + index * 0.1,
                                            duration: 0.6,
                                        }}
                                        // viewport={{ once: true }}
                                    >
                                        <h3 className="text-xl font-bold leading-tight mb-4">
                                            {wid.title}
                                        </h3>
                                    </motion.div>

                                    {/* Read More Button */}
                                    <motion.button
                                        className={`
                      flex items-center gap-2 text-sm font-medium group
                      ${"text-[#ff8360]"}
                    `}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.5 + index * 0.1,
                                            duration: 0.6,
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                    >
                                        READ MORE
                                        <motion.div
                                            whileHover={{ x: 3 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 10,
                                            }}
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.div>
                                    </motion.button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
