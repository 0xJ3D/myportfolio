"use client";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import React from "react";

// Animation variants

const cardVariants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 10,
        transition: {
            type: "spring",
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
    const Icon = wid.icon;

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
        >
            <motion.div
                key={wid.title}
                className="
                  relative h-120 rounded-lg  cursor-pointer bg-[#07090f] hover:border-2  text-[#ff8360] border-[#ff8360]
                  hover:
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
                        <Icon className={`w-12 h-12 ${"text-[#ff8360]"}`} />
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
            </motion.div>{" "}
        </motion.div>
    );
};
