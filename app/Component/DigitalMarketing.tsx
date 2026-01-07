"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Libre_Baskerville } from "next/font/google";
import { CheckCircle, ChevronDown } from "lucide-react";


const libreBaskerville = Libre_Baskerville({
    weight: ["400", "700"],
    subsets: ["latin"],
});

const DigitalMarketing = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const marketingServices = [
        {
            title: "SEO (Search Engine Optimization)",
            desc: "Keyword research, technical optimization, and content strategies that improve your rankings.",
        },
        {
            title: "Social Media Marketing",
            desc: "Paid and organic campaigns that build awareness and drive engagement.",
        },
        {
            title: "Social Media Management",
            desc: "Content planning, posting schedules, and analytics reporting to keep your audience engaged.",
        },
        {
            title: "Analytics & Insights",
            desc: "Using Google Analytics, Search Console, and SEMrush, we track performance and fine-tune strategies.",
        },
        {
            title: "Google Ads",
            desc: "Pay-per-click campaigns tailored for maximum ROI.",
        },
    ];
    return (
        <>
            <section className="relative w-full h-[70vh] flex items-center justify-center">
                {/* Background Image with grayscale */}
                <div className="absolute inset-0">
                    {/* Background video */}
                    <video
                        className="absolute filter grayscale brightness-50 inset-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/fallback.jpg"
                    >
                        <source src="backgroundVideo.mp4" type="video/mp4" />
                    </video>
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Text Content */}
                <motion.div
                    className="relative z-10 max-w-3xl px-6 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg" style={{ fontFamily: "Valty DEMO" }}
                    >

                        Digital Marketing & SEO
                    </h1>
                    <p className={`mt-4 text-md font-bold tracking-wide text-gray-200 ${libreBaskerville.className} `}>

                        A strong product is only valuable if people can find it. Our digital marketing services make sure
                        your brand gets noticed, connects with the right audience, and grows consistently.
                    </p>
                </motion.div>
            </section>

            {/* Slider close */}

            {/* Service start */}

            <section className="relative py-16 text-white">
                <div className="max-w-6xl mx-auto px-6 gap-10 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col pb-10 justify-center items-center ">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "Valty DEMO" }}>
                            Our Expertise
                        </h2>
                        <p className="text-gray-300 text-center ">
                            We dont just run campaigns—we craft sustainable growth systems that ensure long-term
                            visibility and engagement.
                        </p>
                    </div>

                    <ul className="relative space-y-6">
                        {marketingServices.map((marketingServices, index) => (
                            <li
                                key={index}
                                className="border rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black hover:scale-[1.02] transition duration-300 cursor-pointer"
                            >
                                {/* Title Row */}
                                <div
                                    className="flex items-start gap-3 justify-between"
                                    onClick={() => toggleItem(index)}
                                >
                                    <div className="flex gap-3">
                                        <CheckCircle className="text-white w-8 h-8" />
                                        <span
                                            className="font-bold text-xl tracking-wide"
                                            style={{ fontFamily: "Valty DEMO" }}
                                        >
                                            {marketingServices.title}
                                        </span>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    </motion.div>
                                </div>

                                {/* Description Dropdown */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-1 ml-11 text-gray-300"
                                        >
                                            {marketingServices.desc}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="absolute -bottom-2 left-0 w-full mb-3">
                    <div className="relative w-full h-px bg-white/10">
                        <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default DigitalMarketing