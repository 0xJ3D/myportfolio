"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const LottieAnimation = dynamic(() => import("./components/LottieAnimation"), {
    ssr: false,
});
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80dvh] w-full bg-background px-4 py-8">
            <div className="flex flex-col items-center justify-center max-w-3xl w-full text-center">
                <div className="w-full max-w-[500px] aspect-square">
                    <LottieAnimation
                        src="/lottie/404.json"
                        style={{ width: "100%", height: "100%" }}
                        loop={true}
                    />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-2">
                    Hol up
                </h2>
                <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed mb-4">
                    I&apos;m still cooking here, check back real soon
                </p>
                <Link href="/" passHref>
                    <Button size="lg" className="px-6 py-3 text-lg">
                        Go Back Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
