import Hero from "./components/Hero";
import Stack from "./components/stack";
import ServicesSection from "./components/ServiceSection";
import LetsTalk from "./components/LetsTalk";
import DynamicClientLenis from "./components/DynamicClientLenis";
import ContactForm from "./components/ContactForm";

export default function Home() {
    return (
        <DynamicClientLenis>
            <Hero />
            <Stack baseVelocity={4} />
            <ServicesSection />
            <LetsTalk />
            <ContactForm />
        </DynamicClientLenis>
    );
}
