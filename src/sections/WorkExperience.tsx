import hdLogo from "@/assets/images/hd_logo.png";
import tmLogo from "@/assets/images/tm_logo.png";
import dcLogo from "@/assets/images/dckap_logo.png"

import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react/jsx-runtime";

const experiences = [
    {
        company: "HD Digital Media",
        position: "Full Stack Developer • Dubai, UAE",
        text: "Developed WordPress, Shopify and MERN websites for hospitality, eCommerce and wellness brands. Improved SEO, optimized performance, implemented bilingual support, managed analytics, and collaborated directly with clients from planning to deployment.",
        technologies: [
            "WordPress",
            "Shopify",
            "React",
            "MERN",
            "SEO",
            "GA4",
        ],
        avatar: hdLogo,
    },
    {
        company: "Terrific Minds",
        position: "Software Engineer • Kochi, India",
        text: "Built Magento and Shopify storefronts with responsive UI, API integrations and performance optimization. Contributed to the award-winning AI Product Recommender during MACHathon 2024 and explored headless commerce using Shopify Hydrogen.",
        technologies: [
            "Magento",
            "Shopify",
            "React",
            "Hydrogen",
            "GraphQL",
            "Docker",
        ],
        avatar: tmLogo,
    },
    {
        company: "DCKAP",
        position: "Software Engineer • Chennai, India",
        text: "Developed React and Next.js interfaces from Figma designs, migrated projects to Tailwind CSS, built B2B commerce features, integrated REST and GraphQL APIs, and delivered responsive user experiences.",
        technologies: [
            "React",
            "Next.js",
            "Tailwind",
            "Fastify",
            "MongoDB",
            "JWT",
        ],
        avatar: dcLogo,
    },
];

export const WorkExperience = () => {
    return (
        <section id="workexperience" className="py-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="My Journey"
                    title="Where I've Worked"
                    description="Companies I've contributed to and the impact I've made through frontend and full stack development."
                />

                <div className="mask-fade mt-12 flex overflow-x-clip lg:mt-20 py-4 -my-4">
                    <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <Fragment key={index}>
                                {experiences.map((experience) => (
                                    <Card
                                        key={experience.company}
                                        className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                                    >
                                        {/* Company */}
                                        <div className="flex items-center gap-4">
                                            <div className="size-14 rounded-full bg-gray-700 inline-flex items-center justify-center flex-shrink-0 overflow-hidden">
                                                <Image
                                                    src={experience.avatar}
                                                    alt={experience.company}
                                                    className="max-h-full"
                                                />
                                            </div>

                                            <div>
                                                <div className="font-semibold text-lg">
                                                    {experience.company}
                                                </div>
                                                <div className="text-sm text-white/40">
                                                    {experience.position}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="mt-6 text-sm md:text-base leading-relaxed text-white/80">
                                            {experience.text}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {experience.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </Card>
                                ))}
                            </Fragment>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};