import React from "react";

export default function FooterContent() {
    return (
        <div className="bg-[black] py-8 px-12 h-full w-full flex flex-col justify-between border">
            <Section />
        </div>
    );
}

const Section = () => {
    return (
        <div className="relative flex justify-between items-end border">
            <h1 className="absolute -bottom-1 text-[14vw] mt-10">Elnathan</h1>
        </div>
    );
};
