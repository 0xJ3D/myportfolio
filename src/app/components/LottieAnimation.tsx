"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useRef } from "react";

const LottieAnimation = ({
    src,
    style,
}: {
    src: string;
    style?: React.CSSProperties;
}) => {
    const playerRef = useRef(null);

    return <Player autoplay loop src={src} style={style} ref={playerRef} />;
};

export default LottieAnimation;
