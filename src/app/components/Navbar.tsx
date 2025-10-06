"use client";
import React, { useState } from "react";
import { navLinks } from "../utils/siteData";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#07090f] mt-2 px-10 mx-2 md:mx-5 flex items-center justify-between rounded-t-lg"
            >
                <div className="font-bold text-xl italic text-black">
                    <Link
                        href={"/"}
                        className="text-[#ff8360]"
                    >{`elnathan.</>`}</Link>
                </div>
                <div className="hidden  md:flex bg-[#ff8360]x rounded-b-3xl px-2 md:px-6 py-5 items-center justify-center space-x-6">
                    {navLinks.map((navLink) => (
                        <NavItem
                            key={navLink.label}
                            label={navLink.label}
                            path={navLink.path}
                        />
                    ))}
                </div>
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-[#ff8360] focus:outline-none z-100"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </motion.nav>
            {isMenuOpen && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 h-screen w-full bg-[#07090f] z-50 md:hidden flex flex-col"
                >
                    <div className="flex flex-col items-center justify-center flex-grow space-y-4">
                        {navLinks.map((navLink) => (
                            <NavItem
                                key={navLink.label}
                                label={navLink.label}
                                path={navLink.path}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white uppercase text-sm font-medium mb-10"
                    >
                        Close
                    </button>
                </motion.div>
            )}
        </>
    );
};

interface NavItemProps {
    label: string;
    isActive?: boolean;
    path: string;
}
const NavItem = ({ label, path, isActive = false }: NavItemProps) => {
    return (
        <Link
            href={path}
            className={`uppercase text-sm font-medium flex items-center space-x-2 ${
                isActive
                    ? "text-white"
                    : "text-[#ff8360] hover:text-[# hover:font-[600]"
            } transition-colors duration-200`}
        >
            <span>{label}</span>
        </Link>
    );
};

export default Navbar;
