import React, { JSX } from "react";
import { navLinks } from "../utils/siteData";
import Link from "next/link";
import * as motion from "motion/react-client";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#008383] pt-2 px-6 flex items-center justify-between"
        >
            <div className="font-bold text-xl italic text-black">
                <Link
                    href={"/"}
                    className="text-[#303030]"
                >{`elnathan.</>`}</Link>
            </div>
            <div className="bg-[#303030] rounded-full px-6 py-5 flex items-center justify-center space-x-6">
                {navLinks.map((navLink) => (
                    <NavItem
                        key={navLink.label}
                        label={navLink.label}
                        path={navLink.path}
                        icon={navLink.icon}
                    />
                ))}
            </div>
            <div className="flex items-center space-x-4 bg-amber-500 rounded-full px-6 py-3"></div>
        </motion.nav>
    );
};

interface NavItemProps {
    label: string;
    icon: JSX.Element;
    isActive?: boolean;
    path: string;
}
const NavItem = ({ label, icon, path, isActive = false }: NavItemProps) => {
    return (
        <Link
            href={path}
            className={`uppercase text-sm font-medium flex items-center space-x-2 ${
                isActive
                    ? "text-white"
                    : "text-gray-300 hover:text-[#008383] hover:font-bold"
            } transition-colors duration-200`}
        >
            <span>{label}</span>
            <span className="flex items-center">{icon}</span>
        </Link>
    );
};

export default Navbar;
