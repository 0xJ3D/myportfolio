import type { Metadata } from "next";
import { Geist, Geist_Mono, Ojuju } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { ReactLenis } from "@/app/utils/lenis";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const ojuju = Ojuju({
    variable: "--font-ojuju",
    subsets: ["latin"],
    weight: ["800"],
});
export const metadata: Metadata = {
    title: "Elnathan Dunia",
    description: "Web Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en">
                <ReactLenis root>
                    <body
                        className={`${ojuju.variable} ${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden flex flex-col relative  bg-[#ff8360] `}
                    >
                        <Navbar />
                        {children}
                        <Footer />
                    </body>
                </ReactLenis>
            </html>
        </>
    );
}
