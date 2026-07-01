"use client";

import Link from "next/link";
import { FaReact } from "react-icons/fa";

const portfolioItems = [
  {
    id: 1,
    url: "https://res.cloudinary.com/ap8f0053/video/upload/v1782915904/new_world_2_hzedih.mp4",
    video: "https://res.cloudinary.com/ap8f0053/video/upload/v1782915904/new_world_2_hzedih.mp4",
    type: "landscape",
    alt: "Project 1",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/ap8f0053/video/upload/v1782915834/linkdin_upload_ihutei.mp4",
    video: "https://res.cloudinary.com/ap8f0053/video/upload/v1782915834/linkdin_upload_ihutei.mp4",
    type: "portrait",
    alt: "Project 2",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/ap8f0053/video/upload/v1782915777/0615_1_hsgocm.mp4",
    video: "https://res.cloudinary.com/ap8f0053/video/upload/v1782915777/0615_1_hsgocm.mp4",
    type: "portrait",
    alt: "Project 3",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/ap8f0053/video/upload/v1782915424/fiver_e6iohk.mp4",
    video: "https://res.cloudinary.com/ap8f0053/video/upload/v1782915424/fiver_e6iohk.mp4",
    type: "landscape",
    alt: "Project 4",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/ap8f0053/video/upload/v1782915766/0330_1_4_1_acjkyy.mp4",
    video: "https://res.cloudinary.com/ap8f0053/video/upload/v1782915766/0330_1_4_1_acjkyy.mp4",
    type: "portrait",
    alt: "Project 5",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/ap8f0053/video/upload/v1782915391/0119_k4az32.mp4",
    video: "https://res.cloudinary.com/ap8f0053/video/upload/v1782915391/0119_k4az32.mp4",
    type: "portrait",
    alt: "Project 6",
  }
];

export default function AIVideoCards() {
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
            Explore some of the projects we have worked on
          </p>
        </div>

        {/* -------- Portfolio Cards -------- */}
        <div className="flex flex-wrap justify-center gap-8">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href={item.url ?? "#"}
              target="_blank"
              rel="noreferrer"
              className={`group ${
              item.type === "portrait"
              ? "w-full sm:w-[260px]"
              : "w-full sm:w-[420px]"
}`}
              aria-label={`Open ${item.alt}`}
            >
              <div
                className="rounded-2xl overflow-hidden bg-[#0D1018]
                border-t-8 border-x-6 border-[#272a35]
                shadow-inner shadow-[rgba(207,231,255,0.2)]
                transition-transform duration-300 group-hover:-translate-y-1"
              >
                {/* Video / preview wrapper */}
                <div className="relative h-[520px] w-full overflow-hidden">
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#161a24] flex items-center justify-center text-gray-500 text-sm">
                      No preview available
                    </div>
                  )}

                  {/* Overlay label */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <span className="text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                      View video
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
