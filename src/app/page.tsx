"use client";

import Hero from "./components/Hero";
import Stack from "./components/stack";
import ServicesSection from "./components/ServiceSection";
import BrandShowcase from "./components/BrandShowcase";
import LetsTalk from "./components/LetsTalk";
import { ReactLenis } from "@/app/utils/lenis";

export default function Home() {
    return (
        <ReactLenis root>
            <Hero />
            <Stack baseVelocity={4} />
            <ServicesSection />
            <LetsTalk />
            <BrandShowcase />
        </ReactLenis>
    );
}
