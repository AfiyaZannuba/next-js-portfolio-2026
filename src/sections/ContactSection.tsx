
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"

export const ContactSection = () => {
    return (
        <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
            <div className="container">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
                    <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: `url(${grainImage.src})` }}></div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s create something amazing together</h2>
                            <p className="text-sm mt-2 md:text-base">Ready to bring your next project to life? Let&apos; connect and discuss how I can help you achieve your goals</p>
                        </div>
                        <div>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=afiya.zannubaa@gmail.com&su=Project%20Inquiry&body=Hi%20Afiya%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you.%0A%0AThanks%2C%0A[Your%20Name]"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950"
                            >
                                <span className="font-semibold">Contact Me</span>
                                <ArrowUpRightIcon className="size-4 shrink-0" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
