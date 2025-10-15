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
    featured,
    link,
}: ProjectCardProps) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs uppercase tracking-wide text-gray-400 bg-zinc-800 px-2 py-1 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                </div>
                {featured && (
                    <span className="bg-yellow-500 text-black text-xs font-medium px-3 py-1 rounded-full ml-4 whitespace-nowrap">
                        Featured
                    </span>
                )}
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">{description}</p>
            {link && (
                <Link
                    href={link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                    <span>Live</span>
                    <ExternalLink className="w-4 h-4" />
                </Link>
            )}
        </div>
    );
}
