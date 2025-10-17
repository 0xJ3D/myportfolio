import React from "react";

type Experience = {
    company: string;
    role: string;
    period: string;
    achievements: string[];
};

type ExperienceCardProps = {
    experience: Experience;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <div className="sticky bg-black p-4 md:p-6 rounded-lg shadow-md mb-6 md:mb-8 w-full">
            <h3 className="text-xl md:text-2xl font-bold text-[#ff8360]">
                {experience.company}
            </h3>
            <p className="text-base md:text-lg text-gray-100">
                {experience.role}
            </p>
            <p className="text-xs md:text-sm text-gray-100 mb-3 md:mb-4">
                {experience.period}
            </p>
            <ul className="list-disc list-inside space-y-1 md:space-y-2">
                {experience.achievements.map((achievement, index) => (
                    <li
                        key={index}
                        className="text-gray-200 text-sm md:text-base"
                    >
                        {achievement}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;
