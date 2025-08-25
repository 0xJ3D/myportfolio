import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-white flex">
            {/* Left Sidebar */}
            <div className="w-24 bg-white border-r border-gray-200 flex flex-col items-center py-8">
                {/* Logo */}
                <div className="mb-8">
                    <div className="text-red-500 text-xl font-bold">
                        {"<JM/>"}
                    </div>
                </div>

                {/* Vertical Text */}
                <div className="flex-1 flex items-center">
                    <div className="transform -rotate-90 whitespace-nowrap text-sm font-medium text-gray-600 tracking-wider">
                        SOFTWARE ENGINEER
                    </div>
                </div>

                <div className="mb-8">
                    <div className="transform -rotate-90 whitespace-nowrap text-sm font-medium text-gray-600 tracking-wider">
                        WRITER & DEVELOPER ENTHUSIAST
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex flex-col gap-4">
                    <a
                        href="https://github.com"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://twitter.com"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <Twitter size={20} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:hello@josemukorivo.com"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex">
                {/* Content Section */}
                <div className="flex-1 px-16 py-12 flex flex-col justify-center">
                    {/* Header */}
                    <div className="mb-12">
                        <p className="text-sm text-gray-600 tracking-wider">
                            MAIL ME:{" "}
                            <span className="underline">
                                HELLO@JOSEMUKORIVO.COM
                            </span>
                        </p>
                    </div>

                    {/* Main Heading */}
                    <div className="mb-8">
                        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-2">
                            HI{" "}
                            <span className="inline-block animate-bounce">
                                👋
                            </span>
                            ,JOSEPH.
                        </h1>
                        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                            WRITER, SOFTWARE
                        </h2>
                        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                            ENGINEER, DEVOPS
                        </h2>
                        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                            ENTHUSIAST.
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="max-w-lg">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Hello there! a pleasure to meet you. This space is
                            where I immerse myself in the latest advancements in
                            technology. find a mix of enlightening pieces on
                            Software Development and thorough examinations of
                            Cloud Native Technologies. genuinely excited to have
                            you join me on this adventure. 🚀
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-1/2 relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="relative">
                        <Image
                            src=""
                            alt="Joseph Mukorivo - Professional headshot"
                            width={400}
                            height={600}
                            className="object-cover rounded-lg shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
