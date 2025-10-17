import BrandShowcase from "@/app/components/BrandShowcase";
import { ProjectCard } from "@/app/components/ProjectCard";
import { projects } from "@/app/utils/siteData";

export default function Projects() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="mt-10 container mx-auto flex flex-col lg:flex-row gap-8 py-10 px-0 sm:px-4">
                    {/* Career Summary */}
                    <div className="lg:sticky lg:top-8 max-w-full lg:max-w-[450px] flex flex-col gap-3 p-4 md:p-6 shadow  mb-6 lg:mb-0 h-fit">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-2">
                            Recent projects
                        </h2>
                        <h3 className="text-black text-base sm:text-lg md:text-xl leading-relaxed">
                            Find a selection of my recent projects showcasing my
                            skills and expertise in web development, including
                            full-stack applications and responsive designs.
                        </h3>
                    </div>
                    {/* Experience Cards */}
                    <div className="flex-1 flex flex-col gap-6 sticky">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
            <BrandShowcase />
        </>
    );
}
