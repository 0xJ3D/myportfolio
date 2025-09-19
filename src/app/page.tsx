"use client";

import Hero from "./components/Hero";
import Stack from "./components/stack";
import ServicesSection from "./components/ServiceSection";
import BrandShowcase from "./components/BrandShowcase";
import LetsTalk from "./components/LetsTalk";

export default function Home() {
    return (
        < >
            <Hero />
            <Stack baseVelocity={4} />
            <ServicesSection />
            <LetsTalk />
            <BrandShowcase />
        </>
    );
