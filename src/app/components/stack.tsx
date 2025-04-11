import { useRef } from "react";
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

function ParallaxIcons({ baseVelocity = 500 }: ParallaxIconsProps) {
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

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */

    // Adjust the wrap range based on your content width or number of icons
    const x = useTransform(baseX, (v) => `${wrap(1, -28, v)}%`);

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
        <div className="parallax overflow-hidden whitespace-nowrap ">
            <motion.div
                className="scroller w-screen flex space-x-6"
                style={{ x }}
            >
                {techStack.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                        <div
                            key={`tech-${index}`}
                            className="flex flex-col items-center"
                        >
                            <Icon className="w-12 h-14 text-[#008383]" />
                            {/* <p className="mt-2 text-sm text-center text-gray-100">
                                {tech.name}
                            </p> */}
                        </div>
                    );
                })}
                {/* Duplicate icons for seamless looping */}
                {techStack.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                        <div
                            key={index}
                            className="flex flex-col justify-center align-middle items-center"
                        >
                            <Icon className="w-12 h-14 text-[#008383]" />
                            {/* <p className="mt-2 text-sm text-gray-100">
                                {tech.name}
                            </p> */}
                        </div>
                    );
                })}
                {techStack.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                        <div
                            key={index}
                            className="flex flex-col justify-center align-middle items-center"
                        >
                            <Icon className="w-12 h-14 text-[#008383]" />
                            {/* <p className="mt-2 text-sm text-gray-100">
                                {tech.name}
                            </p> */}
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}

export default function App() {
    return (
        <section className="py-20 bg-[#303030] ">
            <ParallaxIcons baseVelocity={5} />
        </section>
    );
}
