"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt } from "react-icons/fa";
import Link from "next/link";

// -------- Card Component --------
function VerticalScrollCard({
    images,
    title,
    description,
    url,
}: {
    images: string[];
    title: string;
    description: string;
    url: string;
}) {
    const cardHeight = 384; // h-96
    const imageHeight = 400;
    const totalHeight = images.length * imageHeight;
    const scrollDistance = Math.max(0, totalHeight - cardHeight);

    return (
        <div className="bg-[#0D1018] rounded-xl overflow-hidden border border-white/10 shadow-md hover:shadow-lg transition">
            <Link href={url} target="_blank">
                <div className="h-96 overflow-hidden rounded-t-xl cursor-pointer">
                    <motion.div
                        className="flex flex-col"
                        initial={{ y: 0 }}
                        whileHover={{ y: -scrollDistance }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                    >
                        {images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`mobile-${i}`}
                                className="w-full h-auto object-cover"
                            />
                        ))}
                    </motion.div>
                </div>
            </Link>

            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-gray-400 text-sm mt-1">{description}</p>
            </div>
        </div>
    );
}

// -------- Page Component --------
export default function MobilePortfolioPage() {
    const cardsData = [
        {
            id: 1,
            images: ["/images/mobile14.webp", "/images/mobile15.webp", "/images/mobile16.webp", "/images/mobile17.webp", "/images/mobile18.webp", "/images/mobile19.webp"],
            title: "SVIPS ",
            description:
                " A service marketplace application that enables users to earn money by offering various services, similar to Buy Me a Parcel apps. Users can list their services, connect with potential clients, and manage transactions seamlessly through the platform.",
            url: "https://play.google.com/store/apps/details?id=svips.se&hl=en ",
        },
        {
            id: 2,
            images: ["/images/mobile20.webp", "/images/mobile21.webp", "/images/mobile22.webp"],
            title: "NEXA Chat ",
            description:
                "A real-time encrypted messaging application designed for secure communication. It supports one-to-one and group chats, efficient file transfers, and includes features like message replies to maintain context within conversations. NEXA Chat ensures privacy with robust encryption protocols",
            url: "https://play.google.com/store/apps/details?id=com.nexachat&hl=en ",
        },
        {
            id: 3,
            images: ["/images/mobile23.webp", "/images/mobile24.webp", "/images/mobile25.webp", "/images/mobile26.webp", "/images/mobile27.webp"],
            title: "Futafut Prime ",
            description:
                "An app that offers a swift shopping experience by digitalizing the process from ordering to payment. Users can order from their favorite stores and receive deliveries through verified riders. The app supports cashless transactions via digital wallets or cards",
            url: "https://play.google.com/store/apps/details?id=com.futafut.customerappbeta&hl=en ",
        },
        {
            id: 6,
            images: ["/images/mobile28.jpg", "/images/mobile29.jpg" , "/images/mobile30.jpg"], 
            title: "Pidj Mobile",
            description:
                "An app that offers a swift shopping experience by digitalizing the process from ordering to payment. Users can order from their favorite stores and receive deliveries through verified riders. The app supports cashless transactions via digital wallets or cards.",
            url: "https://play.google.com/store/apps/details?id=com.pidjmobile",
        }
    ];

    return (
        <section className="relative bg-[#04070D] text-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* -------- Heading -------- */}
                <div className="text-center mb-14">
                    <button className="inline-flex items-center gap-2 px-5 py-1 rounded-full bg-[#0D1018] border border-white/10 text-xs tracking-wide text-white mb-4">
                        <FaMobileAlt className="text-white text-lg" />
                        MOBILE PROJECTS
                    </button>
                    <h2 className="text-3xl font-semibold text-white mt-2">
                        All <span className="italic text-gray-300">Mobile Portfolio</span>
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm max-w-lg mx-auto">
                        Explore more of our mobile app projects showcasing unique
                        functionality and modern UI/UX designs.
                    </p>
                </div>

                {/* -------- Cards -------- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {cardsData.map((card) => (
                        <VerticalScrollCard
                            key={card.id}
                            images={card.images}
                            title={card.title}
                            description={card.description}
                            url={card.url}
                        />
                    ))}
                </div>
            </div>

            {/* -------- Bottom Separator -------- */}
            <div className="absolute -bottom-2 left-0 w-full mb-3">
                <div className="relative w-full h-px bg-white/10">
                    <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}
