"use client";
import { useRef, useMemo } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import techStack from "../utils/techStack";

interface ParallaxIconsProps {
    baseVelocity: number;
}

function ParallaxIcons({ baseVelocity = 5 }: ParallaxIconsProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    // Create duplicated icons array for seamless looping
    const duplicatedIcons = useMemo(() => {
        return Array(3).fill(techStack).flat();
    }, []);

    // Calculate wrap range based on duplicated items count
    const x = useTransform(baseX, (v) => {
        const wrapRange = -100 / 3; // -33.33% per set
        return `${wrap(0, wrapRange * 2, v)}%`;
    });

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax w-full overflow-hidden">
            <motion.div className="scroller flex gap-6" style={{ x }}>
                {duplicatedIcons.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                        <div
                            key={`tech-${index}`}
                            className="flex-shrink-0 flex flex-col items-center py-10"
                        >
                            <Icon className="w-12 h-14 text-[#07090f]" />
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}

export default ParallaxIcons;
