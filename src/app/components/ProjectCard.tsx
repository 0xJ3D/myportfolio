import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    featured?: boolean;
    link?: string;
}

export function ProjectCard({
    title,
    description,
    tags,
    link,
}: ProjectCardProps) {
    return (
        <div className="bg-white rounded-lg p-6 sticky top-8">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs uppercase tracking-wide  bg-[#ff8360] px-2 py-1 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">{description}</p>
            {link && (
                <Link
                    href={link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-[#ff8360] transition-colors"
                >
                    <span>Link</span>
                    <ExternalLink className="w-4 h-4" />
                </Link>
            )}
        </div>
    );
}
