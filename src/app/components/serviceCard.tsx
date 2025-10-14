"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React, { useState } from "react";

// Animation variants
const cardVariants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 12,
            duration: 0.7,
        },
    },
};

type WhatIDoDetailsType = {
    title: string;
    description: string;
    icon: LucideIcon;
    bg: string;
};

export const ServiceCard: React.FC<{
    wid: WhatIDoDetailsType;
    index: number;
}> = ({ wid, index }) => {
    const [isClicked, setIsClicked] = useState(false);
    const Icon = wid.icon;

    const handleMouseLeave = () => {
        setIsClicked(false);
    };

    return (
        <motion.div
            className="relative bg-repeat"
            variants={cardVariants}
            style={{
                backgroundImage: `url(${wid.bg})`,
                backgroundSize: "3.26em ",
                backgroundRepeat: " repeat",
                backgroundPosition: "0px 0px, 0px 0px",
            }}
            whileHover={{
                backgroundSize: "3.01em",
                transition: { duration: 0.4, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                key={wid.title}
                className="
                  relative h-120 rounded-lg cursor-pointer bg-[#07090f] hover:border-2 text-[#ff8360] border-[#ff8360]
                "
                variants={cardVariants}
                whileHover={{
                    y: -68,
                    x: -18,
                    scale: 1.02,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsClicked(!isClicked)}
            >
                <div className="p-8 h-full flex flex-col justify-between">
                    {/* Icon */}
                    <motion.div
                        className="mb-8 "
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
                            type: "spring",
                            stiffness: 200,
                        }}
                    >
                        <Icon className={`w-12 h-12 ${"text-[#ff8360]"}`} />
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        className=" mb-5 "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.4 + index * 0.1,
                            duration: 0.6,
                        }}
                    >
                        <h3 className="text-xl font-bold leading-tight mb-4">
                            {wid.title}
                        </h3>
                    </motion.div>

                    {/* Description - Only visible when clicked */}
                    <motion.div
                        className="flex-1 overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: isClicked ? 1 : 0,
                            height: isClicked ? "auto" : 0,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                    >
                        <p className="text-xl font-bold">{wid.description}</p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};
