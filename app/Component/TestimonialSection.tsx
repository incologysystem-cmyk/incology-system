"use client";
import React from "react";
import { Marquee } from "@/components/ui/marquee";

const TestimonialSection = () => {
  const logos = [
    "logo1.svg",
    "logo2.svg",
    "logo3.svg",
    "logo4.png",
    "logo5.png",
    "logo6.webp",
    "logo7.svg",
    "logo8.png",
    "logo9.png",
    "logo10.png",
  ];

  return (
    <div className="relative pt-10 pb-10 flex w-full flex-col items-center justify-center overflow-hidden">
      {/* Marquee with uniform gap */}
      <Marquee pauseOnHover className="[--duration:20s] flex gap-16">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center p-0 m-0 justify-center w-38 h-20" 
          >
            <img
              src={logo}
              alt={`Logo ${idx + 1}`}
              className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </Marquee>

      {/* Bottom subtle line */}
      <div className="absolute -bottom-2 left-0 w-full mb-3">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
