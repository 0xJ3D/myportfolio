import React from "react";
import { BiBulb } from "react-icons/bi";
import LottieAnimation from "./LottieAnimation";

const LetsTalk = () => {
    return (
        <div>
            <h2>Got an Idea?</h2>
            <div className="flex align-center ">
                LetsTalk <BiBulb />
            </div>
            <LottieAnimation
                src="/lottie/web.json"
                style={{
                    height: "400px",
                    width: "500px",
                    border: "1px solid red",
                }}
            />
        </div>
    );
};

export default LetsTalk;
