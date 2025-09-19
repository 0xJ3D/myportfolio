import React from "react";
import FooterContent from "./footerContent";

export default function Footer() {
    return (
        <div
            className="relative h-[800px] text-white"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
                <div className="h-[800px] sticky top-[calc(100vh-800px)]">
                    <FooterContent />
                </div>
            </div>
        </div>
    );
}
