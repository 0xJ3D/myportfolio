"use client";

import React, { JSX } from "react";
// import Link from "next/link";
import { motion } from "framer-motion";

const FlipLink = ({
    children,
    href,
}: {
    children: string;
    href: string;
    dispIcon?: JSX.Element;
}) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className=" relative block text-[#303030] overflow-hidden whitespace-nowrap text-4xl uppercase sm:text-3xl md:text-7xl lg:text-9xl font bg-[white]x"
        >
            <motion.div
                variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
            >
                {children}
            </motion.div>
            <motion.div
                className="absolute inset-0"
                variants={{ initial: { x: "100%" }, hovered: { x: 0 } }}
            >
                <div className="flex flex-1 gap-2  items-center bg-[#303030] text-[#008383]">
                    {children}
                </div>
            </motion.div>
        </motion.a>
    );
};

export default FlipLink;
