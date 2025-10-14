import React from "react";
import LottieAnimation from "./LottieAnimation";

const SayHi = () => {
    return (
        <div>
            <section className="flex flex-wrap items-center md:justify-center  px-2 md:px-5">
                <div className="hidden md:block">
                    <LottieAnimation
                        src="/lottie/contact.json"
                        style={{
                            height: "100px",
                            width: "100px",
                        }}
                    />
                </div>

                <div className="">
                    <div className="">
                        <div className="flex flex-col justify-centerx">
                            <h1 className="text-[clamp(1rem,5vw,2rem)] font-black leading-none tracking-tighter text-[black]">
                                CONTACT
                            </h1>
                            <div
                                className="text-[clamp(1rem,5vw,2rem)]  font-black leading-none tracking-tighter"
                                style={{
                                    WebkitTextStroke: "1px black",
                                    color: "transparent",
                                }}
                            >
                                ME
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SayHi;
