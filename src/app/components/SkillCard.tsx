import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { skillsData } from "../utils/siteData";

export function SkillCard({
    skill,
}: {
    skill: (typeof skillsData)[0];
    className?: string;
}) {
    const Icon = skill.icon;

    return (
        <Card className="bg-[#000] border-[#2a2a2a] p-6 h-full">
            <div className="flex items-center gap-3 mb-6">
                <Icon className="w-6 h-6 text-[#ff9360]" />
                <h3 className="text-xl font-semibold text-[#ff9360]">
                    {skill.title}
                </h3>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-2">
                {skill.categories.map((category, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-[#ff9360]"
                    >
                        <AccordionTrigger className="text-xl text-white hover:text-white/80 py-3 ">
                            {category.name}
                        </AccordionTrigger>
                        <AccordionContent className="text-[white] text-lg">
                            <ul className="space-y-1 pl-4">
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Card>
    );
}
