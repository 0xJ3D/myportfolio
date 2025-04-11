import React from "react";
import { socialLinks } from "@/app/utils/siteData";
import FlipLink from "@/app/components/FlipLink";

const Contact = () => {
    return (
        <section className="h-screen grid place-content-center gap-3S flex flex-colx justify-centerx items-center ">
            {socialLinks.map((socialLink, key) => (
                <FlipLink key={key} href={socialLink.url}>
                    {socialLink.name}
                    {/* {socialLink.icon} */}
                </FlipLink>
            ))}
        </section>
    );
};

export default Contact;
