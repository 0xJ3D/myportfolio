import Image from "next/image";
import React from "react";

interface ServiceProps {
    title: string;
    imageUrl: string;
    description: string;
}

const Service = ({ title, imageUrl, description }: ServiceProps) => {
    return (
        <div className=" text-white flex flex-col flex-wrap items-center justify-center p-4">
            <Image src={imageUrl} alt={title} width={100} height={100} />
            <div className="font-bold text-[#008383] text-2xl text-center py-4">
                {title}
            </div>
            <div className="text-[#303030]x text-center">{description}</div>
        </div>
    );
};

export default Service;
