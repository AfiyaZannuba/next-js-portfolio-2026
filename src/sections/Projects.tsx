import shuxiaohuoImage from "@/assets/images/shuxiaohuoimage.webp";
import giftfactoryImage from "@/assets/images/giftfactory.webp"
import hascutImage from "@/assets/images/hascut.webp"
import newgendryImage from "@/assets/images/newgendryclean.webp"
import sirucxImage from "@/assets/images/sirucx.webp"
import sweethomeImage from "@/assets/images/sweethomespa.webp"
import zainImage from "@/assets/images/zainhotel.webp"
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
    {
        company: "The Gift Factory",
        year: "2025",
        title: "Shopify E-commerce Store Development",
        results: [
            { title: "Customized Shopify theme for a better shopping experience" },
            { title: "Implemented responsive product and collection layouts" },
            { title: "Improved user navigation and mobile usability" },
        ],
        link: "https://www.thegiftfactory.ae/",
        image: giftfactoryImage,
    },
    {
        company: "Shu Xiaohuo",
        year: "2025",
        title: "Restaurant Website Development",
        results: [
            { title: "Developed a responsive restaurant website using WordPress" },
            { title: "Customized website layout and improved user experience" },
            { title: "Optimized website performance across desktop and mobile" },
        ],
        link: "https://shuxiaohuo.com/",
        image: shuxiaohuoImage,
    },
    {
        company: "Sweet Homes Dubai",
        year: "2025",
        title: "Real Estate Website Development",
        results: [
            { title: "Built and customized a WordPress real estate website" },
            { title: "Created responsive layouts for property-focused pages" },
            { title: "Improved website structure for better user engagement" },
        ],
        link: "https://sweethomespadubai.com/",
        image: sweethomeImage,
    },
    {
        company: "Hascut",
        year: "2025",
        title: "Modern Business Website Development",
        results: [
            { title: "Developed a custom HTML, CSS, and JavaScript website" },
            { title: "Created responsive UI across multiple screen sizes" },
            { title: "Implemented modern design elements and interactions" },
        ],
        link: "https://hascut.ae/",
        image: hascutImage,
    },
    {
        company: "Zain Hotel",
        year: "2026",
        title: "Hotel Website Maintenance & Enhancement",
        results: [
            { title: "Maintained and improved PHP CodeIgniter website functionality" },
            { title: "Fixed bugs and enhanced existing website features" },
            { title: "Worked on backend and frontend improvements" },
        ],
        link: "https://zainhotel.com/",
        image: zainImage,
    },
    {
        company: "Sirucx",
        year: "2026",
        title: "Corporate Website Development",
        results: [
            { title: "Developed a responsive corporate website using HTML" },
            { title: "Converted designs into functional web pages" },
            { title: "Optimized layout for different devices" },
        ],
        link: "https://sirucx.ae/",
        image: sirucxImage,
    },
    {
        company: "New Gen Dry Cleaning",
        year: "2026",
        title: "Service Business Website Development",
        results: [
            { title: "Built a clean and responsive business website" },
            { title: "Created user-friendly service presentation pages" },
            { title: "Improved mobile browsing experience" },
        ],
        link: "https://newgendrycleaning.com/",
        image: newgendryImage,
    },
];

export const ProjectsSection = () => {
    return <section id="projects" className="pb-16 lg:py-24">
        <div className="container">
            <SectionHeader eyebrow="Real-World Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences." />
            <div className="flex flex-col mt-10 md:mt-20 gap-20">
                {portfolioProjects.map((project, projectIndex) => (
                    <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                        style={{
                            top: `calc(64px + ${projectIndex * 40}px`
                        }}>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                            <div className="lg:pb-16">
                                <div className="inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                                    <span>{project.company}</span>
                                    <span>&bull;</span>
                                    <span>{project.year}</span>
                                </div>

                                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                    {project.results.map((result, resultIndex) => (
                                        <li className="flex gap-2 text-sm text-white/50 md:text-base"
                                            key={resultIndex}>
                                            <CheckCircleIcon className="size-5 md:size-6" />
                                            <span>{result.title}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href={project.link}>
                                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                                        <span>Visit Live Site</span>
                                        <ArrowUpRightIcon className="size-4 shrink-0" />
                                    </button>
                                </a>
                            </div>
                            <div className="relative">
                                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </section>;
};
