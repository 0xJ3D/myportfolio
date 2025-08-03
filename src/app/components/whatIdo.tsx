"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link2, Bug, Cloud, Lock, Plus } from "lucide-react";

const threats = [
    {
        id: 1,
        title: "Software supply chain cyber attacks",
        icon: Link2,
    },
    {
        id: 2,
        title: "Malware and ransomware",
        icon: Bug,
    },
    {
        id: 3,
        title: "Cloud-based threats",
        icon: Cloud,
    },
    {
        id: 4,
        title: "Unencrypted data",
        icon: Lock,
    },
];

const threatDetails = {
    1: "Supply chain attacks target software dependencies and third-party components, compromising entire ecosystems through a single vulnerable link.",
    2: "Malicious software designed to damage, disrupt, or gain unauthorized access to computer systems, often demanding ransom payments.",
    3: "Security threats targeting cloud infrastructure, including misconfigured services, compromised credentials, and data breaches.",
    4: "Sensitive information transmitted or stored without proper encryption, making it vulnerable to interception and unauthorized access.",
};

export default function WhatIDo() {
    const [selectedThreat, setSelectedThreat] = useState(2);
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

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

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -50,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.6,
            },
        },
    };

    const iconVariants = {
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: { type: "spring", stiffness: 300, damping: 10 },
        },
        tap: { scale: 0.95 },
    };

    const plusVariants = {
        hover: {
            scale: 1.2,
            rotate: 90,
            transition: { type: "spring", stiffness: 300, damping: 10 },
        },
        tap: { scale: 0.9 },
    };

    const textVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.9,
            transition: {
                duration: 0.3,
            },
        },
    };

    const iconExitVariants = {
        exit: {
            opacity: 0,
            y: -30,
            scale: 0.8,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
    };

    const toggleExpanded = (threatId: number) => {
        setExpandedItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(threatId)) {
                newSet.delete(threatId);
            } else {
                newSet.add(threatId);
            }
            return newSet;
        });
    };

    return (
        <div className="border w-full max-w-6xl mx-auto p-8 bg-gray-50x  flex items-center justify-center">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {threats.map((threat, index) => {
                    const IconComponent = threat.icon;
                    const isSelected = selectedThreat === threat.id;
                    const isExpanded = expandedItems.has(threat.id);

                    return (
                        <motion.div
                            key={threat.id}
                            className="flex flex-col items-center space-y-6"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            {/* Title */}
                            <motion.h3
                                className="text-lg font-medium text-gray-800 text-center leading-tight min-h-[3rem] flex items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 + 0.3 }}
                            >
                                {threat.title}
                            </motion.h3>

                            {/* Content Area - Icon or Text */}
                            <div className="relative w-20 h-20 flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    {!isExpanded ? (
                                        <motion.div
                                            key="icon"
                                            className="w-20 h-20 bg-black rounded-full flex items-center justify-center cursor-pointer"
                                            variants={iconVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            onClick={() =>
                                                setSelectedThreat(threat.id)
                                            }
                                            exit={iconExitVariants.exit}
                                        >
                                            <IconComponent
                                                className="w-8 h-8 text-white"
                                                strokeWidth={1.5}
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="text"
                                            className="w-64 min-h-[5rem] flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                                            variants={textVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                        >
                                            <p className="text-sm text-gray-700 text-center leading-relaxed">
                                                {
                                                    threatDetails[
                                                        threat.id as keyof typeof threatDetails
                                                    ]
                                                }
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Plus Button */}
                            <motion.button
                                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors duration-200 ${
                                    isSelected
                                        ? "border-orange-400 bg-orange-50"
                                        : "border-gray-300 bg-white hover:border-gray-400"
                                }`}
                                variants={plusVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => toggleExpanded(threat.id)}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: index * 0.2 + 0.5,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15,
                                }}
                            >
                                <Plus
                                    className={`w-5 h-5 transition-all duration-200 ${
                                        isExpanded ? "rotate-45" : "rotate-0"
                                    } ${
                                        isSelected
                                            ? "text-orange-500"
                                            : "text-gray-400"
                                    }`}
                                    strokeWidth={2}
                                />
                            </motion.button>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
