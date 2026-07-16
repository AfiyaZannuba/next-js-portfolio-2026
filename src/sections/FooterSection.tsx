import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"

const footerLinks = [
    {
        title: 'Gmail',
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=afiya.zannubaa@gmail.com',
    },
    {
        title: 'Linkedin',
        href: 'https://www.linkedin.com/in/afiya-zannuba-jaleel/',
    },
    {
        title: 'Github',
        href: 'https://github.com/AfiyaZannuba',
    },
]
export const FooterSection = () => {
    return (
        <footer id="footer" className="relative overflow-x-clip z-0">
            <div className="pointer-events-none absolute h-100 w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [-webkit-mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
            <div className="container">
                <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
                    <div className="text-white/40">
                        &copy; 2026 All rights reserved.</div>

                    <nav className="flex flex-col md:flex-row items-center gap-8">
                        {footerLinks.map(link => (
                            <a
                                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white cursor-pointer"
                                key={link.title}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="font-semibold">{link.title}</span>
                                <ArrowUpRightIcon className="size-4 shrink-0" />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    )
}
