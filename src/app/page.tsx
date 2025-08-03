"use client";

import FeatureCarousel from "./components/features";
import Hero from "./components/Hero";
import WhatIDo from "./components/whatIdo";
// import { WhatIDo } from "./components/whatIdo";
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
