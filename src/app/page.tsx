import Hero from "./components/Hero";
import Stack from "./components/stack";
import ServicesSection from "./components/ServiceSection";
import BrandShowcase from "./components/BrandShowcase";
import LetsTalk from "./components/LetsTalk";
import DynamicClientLenis from "./components/DynamicClientLenis";

export default function Home() {
    return (
        <DynamicClientLenis>
            <Hero />
            <Stack baseVelocity={4} />
            <ServicesSection />
            <LetsTalk />
            <BrandShowcase />
        </DynamicClientLenis>
    );
}
