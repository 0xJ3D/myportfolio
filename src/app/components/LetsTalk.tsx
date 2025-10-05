"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import LottieAnimation from "./LottieAnimation";

// Custom hook to detect when element is in viewport
const useInView = (options = {}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting);
        }, options);

        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return { ref, inView };
};

const LetsTalk = () => {
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <div
            ref={ref}
            className="flex flex-col md:flex-row items-center justify-between py-4 px-2 md:px-8 lg:px-16"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/2 mb-10 md:mb-0"
            >
                <div className="flex flex-wrap items-center mb-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#07090f]">
                        Let&apos;s create together!
                    </h1>

                    <motion.div
                        className="flex mt-1"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    delayChildren: 0.3,
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                    >
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { scale: 0, opacity: 0 },
                                    visible: { scale: 1, opacity: 1 },
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={`h-6 w-6 md:h-8 md:w-8 rounded-full mx-1 ${
                                    i % 2 === 0
                                        ? "bg-[#07090f]"
                                        : "border-2 border-[#07090f]"
                                }`}
                            ></motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="hidden w-full md:w-1/2 md:flex justify-center"
            >
                <LottieAnimation
                    src="/lottie/web.json"
                    style={{
                        height: "450px",
                        width: "500px",
                    }}
                />
            </motion.div>
        </div>
    );
};

export default LetsTalk;
