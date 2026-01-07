"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaMobileAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// -------- Card Component --------
function VerticalScrollCard({
  images,
  title,
  description,
  url,
  priority,
}: {
  images: string[];
  title: string;
  description: string;
  url: string;
  priority?: boolean;
}) {
  // NOTE: h-96 = 384px
  const cardHeight = 384;

  // Each screenshot height approx (can be adjusted)
  const imageHeight = 400;

  // Distance we want to move upward on hover
  const scrollDistance = Math.max(0, images.length * imageHeight - cardHeight);

  // Better: memoized sizes for responsive download
  const sizes = useMemo(
    () => "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    []
  );

  return (
    <div className="bg-[#0D1018] rounded-xl overflow-hidden border border-white/10 shadow-md hover:shadow-lg transition">
      {/* Image Scroll Card */}
      <Link href={url} target="_blank" rel="noreferrer">
        <div className="h-96 overflow-hidden rounded-t-xl cursor-pointer relative">
          <motion.div
            className="flex flex-col"
            initial={{ y: 0 }}
            whileHover={{ y: -scrollDistance }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="relative w-full"
                style={{ height: imageHeight }}
              >
                <Image
                  src={img}
                  alt={`${title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes={sizes}
                  quality={75}
                  // ✅ First image of first card loads fast, rest lazy
                  priority={Boolean(priority && i === 0)}
                  // (optional) smoother decoding
                  decoding="async"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* subtle gradient */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

          {/* hover hint */}
          <div className="absolute inset-0 flex items-end p-4">
            <span className="text-white text-xs font-medium bg-black/40 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
              View App
            </span>
          </div>
        </div>
      </Link>

      {/* Title & Description */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm mt-1 line-clamp-3">{description}</p>
      </div>
    </div>
  );
}

// -------- Section Component --------
export default function MobileSection() {
  const cardsData = [
    {
      id: 1,
      images: [
        "/images/mobile1 (1).webp",
        "/images/mobile2 (2).webp",
        "/images/mobile3.webp",
        "/images/mobile4.webp",
        "/images/mobile5.webp",
      ],
      title: "TwistHang",
      description:
        "A unique word game that blends the excitement of Wheel of Fortune with the classic fun of Hangman. Players spin a wheel to guess letters and solve puzzles across various categories. The game offers an ad-free experience with over 47,000 puzzles",
      url: "https://play.google.com/store/apps/details?id=com.twisthang&hl=en",
    },
    {
      id: 2,
      images: [
        "/images/mobile6.webp",
        "/images/mobile7.webp",
        "/images/mobile8.webp",
      ],
      title: "BASS Chat",
      description:
        "A specialized messaging platform designed exclusively for BASS employees and clients. The app facilitates secure, real-time communication and collaboration within the BASS community",
      url: "https://play.google.com/store/apps/details?id=com.basschat.sty&hl=en",
    },
    {
      id: 3,
      images: [
        "/images/mobile9.webp",
        "/images/mobile10.webp",
        "/images/mobile11.webp",
        "/images/mobile12.webp",
        "/images/mobile13.webp",
      ],
      title: "IIMIIN",
      description:
        "A live-streaming shopping platform where users can join sessions hosted by celebrities, influencers, and vendors to discover and purchase unique items in real-time. Each purchase contributes to a charitable cause, ensuring that shopping with IIMIIN makes a positive impact",
      url: "https://play.google.com/store/apps/details?id=com.iimiin&hl=en",
    },
  ];

  return (
    <section className="relative text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-1 rounded-full bg-[#0D1018] border border-white/10 text-xs tracking-wide text-white mb-4">
            <FaMobileAlt className="text-white text-lg" />
            OUR WORK
          </div>

          <h2
            className="text-4xl sm:text-5xl font-semibold text-white mt-2"
            style={{ fontFamily: "Valty DEMO" }}
          >
            Mobile Portfolio
          </h2>

          <p className="text-gray-400 mt-2 text-sm max-w-lg mx-auto">
            A showcase of our mobile application designs and prototypes. Hover
            over the cards to explore interactive scrolling previews.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {cardsData.map((card, idx) => (
            <VerticalScrollCard
              key={card.id}
              images={card.images}
              title={card.title}
              description={card.description}
              url={card.url}
              // ✅ first card first image loads immediately
              priority={idx === 0}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/mobileportfolio"
            className="inline-block px-8 py-3 rounded-full bg-[#0D1018] border border-white/10 text-white text-sm font-medium tracking-wide hover:bg-[#1a1d29] transition"
          >
            View Mobile Portfolio
          </Link>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute -bottom-2 left-0 w-full mb-3">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
