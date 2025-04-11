// "use client";
import { ArrowBigDownDash } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import * as motion from "motion/react-client";

const Hero = () => {
    const constraintsRef = useRef(null);
    return (
        <motion.div
            ref={constraintsRef}
            initial={{ opacity: 0, y: 1000, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
                delayChildren: 0.5,
            }}
            className="borderx flex flex-col flex-wrap max-w-screen h-[100vh] items-center p-2 md:px-6 lg:px-10 text-[#303030]  justify-center "
        >
            <div className="flex justify-between items-center w-full borderx">
                <div className=" flex flex-col justify-center ">
                    <h1 className="text-[6rem] font-boldx">
                        {" "}
                        HI, I&apos;m <span className="underline">Elnathan</span>
                    </h1>
                    <h2 className="text-3xl lg:text-4xl font-bold pb-4">
                        Software Developer, Maintainer, & Support Specialist.{" "}
                    </h2>
                    <p className="text-[#303030] w-[650px] text-2xl">
                        I build intuitive, responsive websites and web
                        applications. <br />
                        Let’s collaborate to drive results for your business
                        turning Your Vision into Digital Reality
                    </p>
                </div>
                <div className="bg-[#3030302d]x flex justify-center items-center p-1 rounded-full ">
                    <div className="relative w-100 h-90 rounded-fullx overflow-hidden ">
                        <Image
                            src={"/guy2.svg"}
                            fill
                            objectFit="contain"
                            alt="picture of me"
                            objectPosition="25% 10%"
                        />
                    </div>
                </div>
            </div>
            <motion.div
                ref={constraintsRef}
                className="w-full borderx flex gap-5"
            >
                <motion.div
                    drag
                    dragSnapToOrigin
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                    // dragConstraints={constraintsRef}
                    dragElastic={0.8}
                >
                    <div className="p-3 bg-[#303030] text-[#008383] text-xl font-bold">
                        About me
                    </div>
                </motion.div>
                <button className="p-3 bg-[#008383] text-[#303030] border-2 text-xl font-bold">
                    Contact Me
                </button>
            </motion.div>
            <motion.div
                drag
                className="animate-bounce mt-3 w-full  flex flex-col items-center text-2xl justify-center"
            >
                scroll <ArrowBigDownDash />
            </motion.div>
        </motion.div>
    );
};

export default Hero;
