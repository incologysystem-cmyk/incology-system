"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FaGithub, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";

// ✅ Dynamic import (bundle lighter, SSR off)
const TypeAnimation = dynamic(
  () => import("react-type-animation").then((m) => m.TypeAnimation),
  { ssr: false }
);

const Slider: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canPlay, setCanPlay] = useState(false);

  // ✅ Memoized sequence (no re-create)
  const typeSequence = useMemo(
    () => ["From Concept To Launch,\nWe Deliver Software\nThat Works."] as const,
    []
  );

  // ✅ Lazy start video only when section is in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCanPlay(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!canPlay) return;
    const v = videoRef.current;
    if (!v) return;

    // best-effort play (autoplay policies)
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, [canPlay]);

  return (
    <section ref={sectionRef} className="relative h-[130vh] w-full overflow-hidden">
      {/* Background video (optimized) */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover filter grayscale brightness-50"
        autoPlay={false}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/fallback.jpg"
        // @ts-expect-error - React typings may not include fetchPriority on <video> in some versions
        fetchPriority="high"
      >
        {/* ✅ Use /public path like: /backgroundVideo.mp4 */}
        <source src="/backgroundVideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full items-center justify-center px-4"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="text-white text-center flex flex-col items-center gap-6">
          {/* CTA Button */}
          <button
            type="button"
            className="relative border flex gap-2 justify-center items-center px-5 py-3 rounded-xl bg-black border-gray-700 overflow-hidden"
          >
            BOOK A FREE CALL
            <i className="not-italic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 -960 960 960"
                width="20"
                fill="#FFFFFF"
                aria-hidden="true"
              >
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
              </svg>
            </i>

            <span
              className="absolute bottom-0 left-0 w-full h-[3px]
              bg-gradient-to-r from-transparent via-white to-transparent opacity-90"
            />
          </button>

          {/* Badge text */}
          <p className="text-xs tracking-widest text-gray-200">
            NEW GEN AI AUTOMATION PARTNER
          </p>

          {/* Heading (typed) */}
          <h1
            className="text-4xl sm:text-7xl font-bold leading-tight text-center whitespace-pre-line"
            style={{ fontFamily: "Valty DEMO" }}
          >
            <TypeAnimation
              sequence={typeSequence as unknown as any}
              speed={12}
              wrapper="span"
              cursor={false}
              repeat={0}
            />
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-gray-200">
            Your Partner in smart, Reliable Software,
          </p>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4 text-gray-300 text-2xl">
            <FaXTwitter className="hover:text-gray-100 transition" />
            <span className="text-gray-600">|</span>
            <FaInstagram className="hover:text-gray-100 transition" />
            <span className="text-gray-600">|</span>
            <FaFacebookF className="hover:text-gray-100 transition" />
          </div>

          {/* Down arrow + GitHub */}
          <div className="flex flex-col mt-6 items-center gap-4">
            <a href="#next-section" className="animate-bounce" aria-label="Scroll down">
              <FaAngleDown className="text-2xl text-gray-200" />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-5xl text-gray-200 hover:text-gray-400 transition" />
            </a>
          </div>
        </div>
      </motion.div>

      {canPlay && <span className="sr-only">Video activated</span>}
    </section>
  );
};

export default Slider;
