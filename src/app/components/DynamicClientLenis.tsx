"use client";

import dynamic from "next/dynamic";

const ClientLenis = dynamic(() => import("./ClientLenis"), { ssr: false });

export default ClientLenis;
