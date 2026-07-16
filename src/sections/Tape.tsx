import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react/jsx-runtime"

const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Responsive",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
]

export const Tape = () => {
    return (
        <div id="tape" className="py-16 lg:py-24 overflow-x-clip">
            <div className="overflow-hidden bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
                <div className="mask-fade w-full overflow-hidden py-6 relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="flex w-max min-w-max flex-nowrap items-center gap-4 pr-4 whitespace-nowrap animate-move-left [animation-duration:30s]">
                            {[...new Array(2)].fill(0).map((_, idx) => (
                                <Fragment key={idx}>
                                    {words.map(word => (
                                        <div key={word} className="inline-flex shrink-0 items-center gap-4">
                                            <span className="whitespace-nowrap text-gray-900 uppercase font-extrabold text-sm tracking-[0.2em]">
                                                {word}
                                            </span>
                                            <StarIcon className="size-6 shrink-0 text-gray-900 -rotate-12" />
                                        </div>
                                    ))}
                                </Fragment>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
