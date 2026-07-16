"use client";
import { Card } from "@/components/Card"
import { SectionHeader } from "@/components/SectionHeader"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image"
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CSSIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import GithubIcon from "@/assets/icons/github.svg"

import Googleanalytics from "@/assets/icons/googleanalytics.svg"
import Atlassian from "@/assets/icons/atlassian.svg"
import Bitbucket from "@/assets/icons/bitbucket.svg"
import Magento from "@/assets/icons/magento.svg"
import Mongodb from "@/assets/icons/mongodb.svg"
import Mysql from "@/assets/icons/mysql.svg"
import Nextjs from "@/assets/icons/nextjs.svg"
import Nodejs from "@/assets/icons/nodejs.svg"
import Php from "@/assets/icons/php2.svg"
import Shopify from "@/assets/icons/shopify.svg"
import Tailwind from "@/assets/icons/tailwindcss.svg"
import Typescript from "@/assets/icons/typescript.svg"
import Wordpress from "@/assets/icons/wordpress.svg"

import mapImage from "@/assets/images/mapdubai.png"
import smileEmoji from "@/assets/images/memoji-avatar-4.png"
import { CardHeader } from "@/components/CardHeader"
import { ToolboxItems } from "@/components/ToolboxItems"
import { motion } from 'framer-motion'
import { useRef } from "react";

const toolBoxItems = [
    {
        title: 'JavaScript',
        iconType: JavascriptIcon,
    },
    {
        title: 'HTML5',
        iconType: HTMLIcon,
    },
    {
        title: 'CSS3',
        iconType: CSSIcon,
    },
    {
        title: 'React',
        iconType: ReactIcon,
    },
    {
        title: 'Chrome',
        iconType: ChromeIcon,
    },
    {
        title: 'Github',
        iconType: GithubIcon,
    },
    {
        title: 'Bitbucket',
        iconType: Bitbucket,
    },
    {
        title: 'Google Analytics',
        iconType: Googleanalytics,
    },
    {
        title: 'MongodB',
        iconType: Mongodb,
    },
    {
        title: 'Magento',
        iconType: Magento,
    },
    {
        title: 'MySQL',
        iconType: Mysql,
    },
    {
        title: 'NextJS',
        iconType: Nextjs,
    },
    {
        title: 'NodeJS',
        iconType: Nodejs,
    },
    {
        title: 'PHP',
        iconType: Php,
    },
    {
        title: 'Shopify',
        iconType: Shopify,
    },
    {
        title: 'TailwindCSS',
        iconType: Tailwind,
    },
    {
        title: 'Typescript',
        iconType: Typescript,
    },
    {
        title: 'Wordpress',
        iconType: Wordpress,
    },

]

const hobbies = [
    {
        title: 'Content Creation',
        emoji: '📹',
        left: '5%',
        top: '5%',

    },
    {
        title: 'Travelling',
        emoji: '✈️',
        left: '60%',
        top: '5%',
    },
    {
        title: 'Blogging',
        emoji: '📝',
        left: '5%',
        top: '35%',
    },
    {
        title: 'Music',
        emoji: '🎧',
        left: '40%',
        top: '35%',
    },
    {
        title: 'Walk',
        emoji: '🤸‍♀️',
        left: '70%',
        top: '35%',
    },
    {
        title: 'Hiking',
        emoji: '👟',
        left: '5%',
        top: '65%',
    },
    {
        title: 'Reading',
        emoji: '📖',
        left: '40%',
        top: '65%',
    },
]

export const About = () => {
    const constrainRef = useRef(null);
    return (
        <div id="about" className="py-20 lg:py-28">
            <div className="container">
                <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me." />
                <div className="mt-20 flex flex-col gap-6">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                        <Card className="h-80 md:col-span-2 lg:col-span-1">
                            <CardHeader title="My Reads" description="Explore the technologies amd tools I use to craft exceptional digital experiences. " />
                            <div className="w-40 mx-auto mt-2 md:mt-0">
                                <Image src={bookImage} alt="Book cover" />
                            </div>
                        </Card>
                        <Card className="h-80 md:col-span-3 lg:col-span-2">
                            <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to create exceptional digital experiences." className="" />
                            <ToolboxItems items={toolBoxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />

                            <ToolboxItems items={toolBoxItems} className="mt-6"
                                itemsWrapperClassName="animate-move-right [animation-duration:30s]" />
                        </Card>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
                        <Card className="h-80 p-0 flex flex-col md:col-span-3 lg:col-span-2">
                            <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm."
                                className="px-6 py-6"
                            />
                            <div className="relative flex-1" ref={constrainRef}>
                                {hobbies.map(hobby => (
                                    <motion.div
                                        key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                        }}
                                        drag
                                        dragConstraints={constrainRef}>
                                        <span className="font-medium text-gray-950">
                                            {hobby.title}
                                        </span>
                                        <span>
                                            {hobby.emoji}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                        <Card className="h-80 p-0 relative md:col-span-2 lg:col-span-1">
                            <Image src={mapImage} alt="map" loading="eager"
                                className="w-full h-full object-cover object-left-top" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping"></div>

                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>


                                <Image src={smileEmoji} alt="smiling memoji" className="size-20" />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
