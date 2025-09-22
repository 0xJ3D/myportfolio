"use client";

import { ReactLenis } from "@/app/utils/lenis";
import { ReactNode } from "react";

export default function ClientLenis({ children }: { children: ReactNode }) {
    return <ReactLenis root>{children}</ReactLenis>;
}