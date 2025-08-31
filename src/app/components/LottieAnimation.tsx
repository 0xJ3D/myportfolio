"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useRef } from "react";

const LottieAnimation = ({
    src,
    style,

    loop = true,
}: {
    src: string;
    style?: React.CSSProperties;
    loop?: boolean;
}) => {
    const playerRef = useRef(null);

    return <Player autoplay loop={loop} src={src} style={style} ref={playerRef} />;
};

export default LottieAnimation;
