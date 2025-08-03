"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function HireMeButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            className="relative overflow-hidden bg-[#07090f] text-[#ff8360] px-8 py-3 rounded-full font-semibold text-lg flex items-center gap-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Enhanced background fill animation */}
            <motion.div
                className="absolute inset-0  rounded-full"
                initial={{ scale: 0, x: "100%", y: 0 }}
                animate={{
                    scale: isHovered ? 1 : 0,
                    x: isHovered ? 0 : "100%",
                }}
                transition={{
                    type: "tween",
                    ease: "circOut",
                    duration: 0.4,
                }}
            />

            {/* Text with smoother color transition */}
            <motion.span
                className="relative z-10"
                initial={{ color: "#111827" }}
                animate={{
                    color: isHovered ? "#fff" : "#ff8360",
                }}
                transition={{
                    delay: isHovered ? 0.15 : 0,
                    duration: 0.3,
                }}
            >
                Hire Me!
            </motion.span>

            {/* Enhanced arrow animation */}
            <motion.div
                className="relative z-10  rounded-full p-2"
                animate={{
                    backgroundColor: isHovered ? "#fff" : "#ff8360",
                }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    animate={{
                        x: isHovered ? 4 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                    }}
                >
                    <ArrowRight
                        size={20}
                        className="transition-colors duration-300"
                        style={{
                            color: isHovered ? "red" : "000",
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Shimmer effect on hover */}
            {isHovered && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#ff8360] via-[#ff8360]/80 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 0.8, repeat: 0 }}
                />
            )}
        </motion.button>
    );
}
