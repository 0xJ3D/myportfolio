"use client";

import Hero from "./components/Hero";
import Stack from "./components/stack";
import ServicesSection from "./components/ServiceSection";

export default function Home() {
    return (
        <main className="flex flex-col">
            <Hero />
            <Stack baseVelocity={4} />
            {/* <WhatIDo /> */}
            {/* <FeatureCarousel /> */}
            <ServicesSection />
        </main>
    );
}
