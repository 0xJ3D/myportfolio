"use client";

import LottieAnimation from "./components/LottieAnimation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100dvh] w-full bg-background px-4 py-8">
            <div className="flex flex-col items-center justify-center max-w-3xl w-full text-center">
                <div className="w-full max-w-[500px] aspect-square">
                    <LottieAnimation
                        src="/lottie/404.json"
                        style={{ width: "100%", height: "100%" }}
                        loop={true}
                    />
                </div>

                <Link href="/" passHref>
                    <Button size="lg" className="px-6 py-3 text-lg">
                        Go Back Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
