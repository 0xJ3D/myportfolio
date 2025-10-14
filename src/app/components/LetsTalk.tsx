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
            <div>
                <section className="flex flex-wrap">
                    <div className="">
                        <div className="">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-[clamp(4rem,15vw,12rem)] font-black leading-nonen tracking-tightern text-[black]">
                                    CONTACT
                                </h1>
                                <div className=" flex flex-wrap md:justify-around md:items-center max-w-[800px]">
                                    <div
                                        className="text-[clamp(4rem,15vw,12rem)] font-black leading-none  "
                                        style={{
                                            WebkitTextStroke: "2px black",
                                            color: "transparent",
                                        }}
                                    >
                                        ME
                                    </div>{" "}
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={
                                            inView ? { opacity: 1, y: 0 } : {}
                                        }
                                        transition={{ duration: 0.5 }}
                                        className="w-full md:w-1/2 "
                                    >
                                        <div className="flex flex-wrap items-center">
                                            <h1 className="text-4xl md:text-5xl pb-2 lg:text-6xl font-bold text-[#07090f]">
                                                Let&apos;s create together!
                                            </h1>

                                            <motion.div
                                                className="flex mt-1"
                                                initial="hidden"
                                                animate={
                                                    inView
                                                        ? "visible"
                                                        : "hidden"
                                                }
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
                                                            hidden: {
                                                                scale: 0,
                                                                opacity: 0,
                                                            },
                                                            visible: {
                                                                scale: 1,
                                                                opacity: 1,
                                                            },
                                                        }}
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 300,
                                                        }}
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hiddenx justify-center  flex  w-full md:w-fit md:block ">
                        <LottieAnimation
                            src="/lottie/contact.json"
                            style={{
                                height: "400px",
                                width: "350px",
                                marginTop: "-30px",
                            }}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LetsTalk;
