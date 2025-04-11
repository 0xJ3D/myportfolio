import { serviceData } from "../utils/siteData";
import ServiceCard from "./serviceCard";

export const WhatIDo = () => {
    return (
        <section className="bg-[#303030]x bg-[#fafafa]x py-10 bg-gradient-to-b from-[#008383] from-30% to-[#303030]">
            <div className="container mx-auto p-4">
                <h2 className="text-center text-[#303030] text-2xl md:text-4xl lg:text-5xl font-bold mb-10">
                    What I Do
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                    {serviceData.map((service, i) => (
                        <ServiceCard
                            key={i}
                            icon={service.imageUrl}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
