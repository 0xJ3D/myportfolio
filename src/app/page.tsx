import Hero from "./components/Hero";
import Stack from "./components/stack";
import ServicesSection from "./components/ServiceSection";
import BrandShowcase from "./components/BrandShowcase";
import LetsTalk from "./components/LetsTalk";
import ClientLenis from "./components/ClientLenis";

export default function Home() {
    return (
        <ClientLenis>
            <Hero />
            <Stack baseVelocity={4} />
            <ServicesSection />
            <LetsTalk />
            <BrandShowcase />
        </ClientLenis>
    );
}
