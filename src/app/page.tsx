"use client";

import FeatureCarousel from "./components/features";
import Hero from "./components/Hero";
import Stack from "./components/stack";
import { WhatIDo } from "./components/whatIdo";

export default function Home() {
    return (
        <main className="flex flex-col">
            <Hero />
            <WhatIDo />
            <Stack />
            <FeatureCarousel />
        </main>
    );
}
