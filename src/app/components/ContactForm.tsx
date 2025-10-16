"use client";

import { useState, type FormEvent } from "react";

const options = ["Mobile App", "Web Apps", "Branding", "Wordpress", "Hosting"];

export default function ContactForm() {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
    });

    const toggleOption = (option: string) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert(
            `Form submitted!\nName: ${formData.name}\nEmail: ${
                formData.email
            }\nCompany: ${formData.company}\nSelected: ${selectedOptions.join(
                ", "
            )}`
        );
    };

    return (
        <div className="flex items-center justify-center p-6 bg-gray-100 ">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-4xl space-y-8"
            >
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-lg font-medium text-foreground">
                            Name<span className="text-foreground">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Elnathan"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-lg font-medium text-foreground">
                            Email<span className="text-foreground">*</span>
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="hello@elnathan.dev"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                        />
                    </div>
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                    <label className="text-lg font-medium text-foreground">
                        Company name
                    </label>
                    <input
                        type="text"
                        placeholder="Your company or website?"
                        value={formData.company}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                company: e.target.value,
                            })
                        }
                        className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    />
                </div>

                {/* What's in your mind */}
                <div className="space-y-4">
                    <label className="text-lg font-medium text-foreground">
                        What&apos;s on your mind?
                        <span className="text-foreground">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                        {options.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => toggleOption(option)}
                                className={`px-6 py-3 rounded-full border transition-all duration-200 ${
                                    selectedOptions.includes(option)
                                        ? "bg-orange-500 text-white border-orange-500"
                                        : "bg-transparent border-border text-foreground hover:border-foreground"
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={selectedOptions.length === 0}
                        className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
