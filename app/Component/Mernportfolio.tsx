"use client";

import Link from "next/link";
import Image from "next/image";
import { FaReact } from "react-icons/fa";

const portfolioItems = [
  {
    id: 1,
    url: "https://review-website-eight.vercel.app/",
    img: "/images/mern1.png",
    alt: "MERN Project 1 preview",
  },
  {
    id: 2,
    url: "https://nftkey.btcproxy.io/",
    img: "/images/mern2.png",
    alt: "MERN Project 2 preview",
  },
  {
    id: 3,
    url: "https://plisio.net/",
    img: "/images/mern3.png",
    alt: "MERN Project 3 preview",
  },
];

export default function MernSection() {
  return (
    <section className="relative text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* -------- Heading -------- */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-1 rounded-full bg-[#0D1018] border border-white/10 text-xs tracking-wide text-white mb-4">
            <FaReact className="text-white text-lg" />
            OUR WORK
          </div>

          <h2
            className="text-4xl sm:text-5xl font-semibold text-white mt-2"
            style={{ fontFamily: "Valty DEMO" }}
          >
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-2 text-sm">
            Explore some of the projects we’ve worked on
          </p>
        </div>

        {/* -------- Portfolio Cards -------- */}
        <div className="flex flex-wrap justify-center gap-8">
          {portfolioItems.map((item, idx) => (
            <Link
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group w-full sm:w-[320px] lg:w-[360px]"
              aria-label={`Open ${item.alt}`}
            >
              <div
                className="rounded-2xl overflow-hidden bg-[#0D1018]
                border-t-8 border-x-6 border-[#272a35]
                shadow-inner shadow-[rgba(207,231,255,0.2)]
                transition-transform duration-300 group-hover:-translate-y-1"
              >
                {/* ✅ Image wrapper */}
                <div className="relative h-[520px] w-full overflow-hidden">
                  {/* ✅ Next/Image = optimized, lazy by default */}
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    // high quality but not too heavy:
                    quality={75}
                    // responsive sizes so it downloads the right size
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 320px, 360px"
                    // Make first card eager (above the fold), others lazy
                    priority={idx === 0}
                    className="
                      object-cover object-top
                      transition-transform duration-[6000ms] ease-linear
                      group-hover:-translate-y-[35%]
                    "
                  />

                  {/* ✅ Overlay label */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <span className="text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                      View Website
                    </span>
                  </div>

                  {/* subtle gradient for readability */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* -------- View Portfolio Button -------- */}
        <div className="text-center mt-12">
          <Link
            href="/mernportfolio"
            className="inline-block px-8 py-3 rounded-full bg-[#0D1018] border border-white/10 text-white text-sm font-medium tracking-wide hover:bg-[#1a1d29] transition"
          >
            View Portfolio
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
