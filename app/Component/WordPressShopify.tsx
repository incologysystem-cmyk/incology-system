
"use client";
import React from 'react'
import { motion } from "framer-motion";
import { Libre_Baskerville } from "next/font/google";
import { CheckCircle } from "lucide-react";

const libreBaskerville = Libre_Baskerville({
    weight: ["400", "700"],
    subsets: ["latin"],
});

const WordPressShopify = () => {
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
                        WordPress & Shopify Development
                    </h1>
                    <p className={`mt-4 text-md font-bold tracking-wide text-gray-200 ${libreBaskerville.className} `}>

                        For businesses seeking fast, scalable, and easy-to-manage websites, we specialize in WordPress
                        and Shopify development.
                    </p>
                </motion.div>
            </section>

            {/* Slider close */}

            {/* Service start */}

            <section className="relative py-16 text-white">

                <div className="max-w-6xl mx-auto  px-6 gap-10 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col pb-10 justify-center items-center ">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "Valty DEMO" }}>
                            WordPress Development
                        </h2>
                    </div>

                    {/* Right List */}
                    <ul className=" relative space-y-6">
                        <li className="border border-t-3 rounded-xl px-4 py-6 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
                            <CheckCircle className="text-white w-8 h-8 " />
                            <span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>
                                Custom themes & plugins.</span>
                        </li>
                        <li className="border border-t-3 rounded-xl px-4 py-6 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
                            <CheckCircle className="text-white w-8 h-8 " />
                            <span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> Membership portals, blogs, and corporate websites. </span>
                        </li>
                        <li className="border border-t-3 rounded-xl px-4 py-6 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
                            <CheckCircle className="text-white w-8 h-8 " />
                            <span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> Search-engine-friendly structures for better rankings. </span>
                        </li>
                        <li className="border border-t-3 rounded-xl px-4 py-6 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
                            <CheckCircle className="text-white w-8 h-8 " />
                            <span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> Seamless third-party integrations. </span>
                        </li>
                    </ul>
                </div>

                <div className="max-w-6xl mx-auto  px-6 gap-10 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col pb-10 justify-center items-center ">
                        <h2 className="text-3xl mt-10 md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "Valty DEMO" }}>
                            Shopify Development
                        </h2>
                    </div>

                    {/* Right List */}
                    <ul className=" relative  space-y-6 ">
                        <li className="border border-t-3 rounded-xl px-4 py-6 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
                            <CheckCircle className="text-white w-8 h-8 " />
                            <span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> Conversion-focused online stores. </span>
                        </li>
                        <li className="border border-t-3 rounded-xl px-4 py-6 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
                            <CheckCircle className="text-white w-8 h-8 " />
                            <span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> Payment gateways & shipping integration. </span>
                        </li>
                        <li className="border border-t-3 rounded-xl px-4 py-6 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
                            <CheckCircle className="text-white w-8 h-8 " />
                            <span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> Shopify apps for added functionality.  </span>
                        </li>
                        <li className="border border-t-3 rounded-xl px-4 py-6 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
                            <CheckCircle className="text-white w-8 h-8 " />
                            <span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> Migration and performance optimization. </span>
                        </li>
                    </ul>
                </div>

                <p className='text-center flex justify-center items-center my-15'>
                    Whether you need a CMS-driven website or an e-commerce powerhouse, we’ll tailor a
                    solution that grows with your business.
                </p>

                <div className="absolute -bottom-2 left-0 w-full mb-3">
                    <div className="relative w-full h-px bg-white/10">
                        <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default WordPressShopify