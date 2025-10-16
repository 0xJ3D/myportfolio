"use client";
import React, { useRef } from "react";
import * as motion from "motion/react-client";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
    const constraintsRef = useRef(null);

    return (
        <motion.main
            ref={constraintsRef}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.8,
                scale: { type: "spring", bounce: 0.4 },
                delayChildren: 0.3,
            }}
            className="flex flex-col w-full justify-center items-center pl-1 md:px-5 md:rounded-b-lg "
        >
            <div className="md:rounded-b-lg p-5 px-10 bg-[#07090f] w-full  ">
                {/* Content Container */}
                <div className=" flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-12 mb-16">
                    {/* Text Content */}
                    <div className="flex flex-col text-center lg:text-left">
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#fcfcfc]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Hello{" "}
                            <span className="-m-3 inline text-[#ff8360]">
                                .
                            </span>{" "}
                            <br />
                            <div className="flex  items-end relative">
                                <span className=" border-b-5 border-[#ff8360] w-10 absolute -left-10"></span>
                                <span className="text-[#ff8360] ">
                                    I&apos;m Elnathan
                                </span>
                            </div>
                        </motion.h1>

                        <motion.h2
                            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 text-[#fcfcfc]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Software Developer
                        </motion.h2>
                        <motion.div className="border w-full"></motion.div>
                        <motion.h3 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-3 text-[#fcfcfc]">
                            Support Specialist
                        </motion.h3>

                        <motion.p
                            className="text-lg text-[#fcfcfc] max-w-2xl mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            I specalise in building intuitive, responsive
                            websites and applications, AI Agentic workflows and
                            setting up scalable infrastructure solutions.
                        </motion.p>
                    </div>

                    {/* Image Container */}
                    <div className="hidden md:block">
                        <LottieAnimation
                            src="/lottie/web.json"
                            style={{
                                height: "500px",
                                width: "500px",
                            }}
                        />
                    </div>
                </div>

                {/* Buttons */}
                <motion.div
                    className="flex flex-wrap justify-centerx gap-6 mb-16 bg-red-50x"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-[#ff8360] text-[white]x text-lg font-bold rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        About Me
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-[white]x text-[#ff8360] text-lg font-bold rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-[#ff8360]"
                    >
                        Let&apos;s talk
                    </motion.button>
                </motion.div>
            </div>
            {/* Stack Component */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
            >
                {/* <Stack baseVelocity={4} /> */}
            </motion.div>
        </motion.main>
    );
};

export default Hero;
