import React from "react";
import LottieAnimation from "./LottieAnimation";

const SayHi = () => {
    return (
        <div>
            <section className="flex flex-wrap items-center justify-center p-8x">
                <div className="hidden md:block">
                    <LottieAnimation
                        src="/lottie/contact.json"
                        style={{
                            height: "400px",
                            width: "400px",
                        }}
                    />
                </div>

                <div className="">
                    <div className="">
                        {/* Left side - Large text */}
                        <div className="flex flex-col justify-center ">
                            <h1 className="text-[clamp(4rem,15vw,12rem)] font-black leading-none tracking-tighter text-[black]">
                                CONTACT
                            </h1>
                            <div
                                className="text-[clamp(4rem,15vw,12rem)] font-black leading-none tracking-tighter"
                                style={{
                                    WebkitTextStroke: "2px black",
                                    color: "transparent",
                                }}
                            >
                                ME
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div></div>
        </div>
    );
};

export default SayHi;
