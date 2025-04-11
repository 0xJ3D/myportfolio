import type React from "react";

interface CardWrapperProps {
    children: React.ReactNode;
    className?: string;
}

interface ServiceProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const CardWrapper = ({ children, className = "" }: CardWrapperProps) => {
    return (
        <div
            className={`bg-card rounded-lg p-6 border border-primary/20 ${className}`}
        >
            {children}
        </div>
    );
};

const ServiceCard = ({ title, description, icon }: ServiceProps) => {
    return (
        <CardWrapper className="text-[#303030] transition-colors transition-all bg-[#008383] hover:border-[#008383] border-4 hover:scale-[1.04] hover:text-[#008383]x hover:-translate-y-2">
            <div className=" mb-4">{icon}</div>
            <h3 className="text-lg font-bold mb-2 ">{title}</h3>
            <p className="font-semibold">{description}</p>
        </CardWrapper>
    );
};

export default ServiceCard;
