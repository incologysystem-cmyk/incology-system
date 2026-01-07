"use client";
import Link from "next/link";
import { FaWordpress } from "react-icons/fa";

const portfolioItems = [
  {
    id: 1,
    url: "https://www.horizondrivingschool.com/",
    img: "/images/wordpress4.png",
  },
  {
    id: 2,
    url: "https://3mlimonyc.com/",
    img: "/images/wordpress5.png",
  },
  {
    id: 3,
    url: "https://charlesgraydogtraining.com/",
    img: "/images/wordpress6.png",
  },
  {
    id: 4,
    url: "http://www.fjminternational.com/",
    img: "/images/wordpress7.png",
  },
  {
    id: 5,
    url: "https://themeforest.net/",
    img: "/images/wp5.png",
  },
  {
    id: 6,
    url: "https://wordpress.com/",
    img: "/images/wp6.png",
  },
  {
    id: 7,
    url: "https://woocommerce.com/",
    img: "/images/wp7.png",
  },
];

export default function WordpressSection() {
  return (
    <section className="relative bg-[#04070D] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* -------- Heading -------- */}
        <div className="text-center mb-14">
           <button className="inline-flex items-center gap-2 px-5 py-1 rounded-full bg-[#0D1018] border border-white/10 text-xs tracking-wide text-white mb-4">
                      <FaWordpress className="text-white text-lg" />
                      WORDPRESS WORK
                    </button>
          <h2 className="text-3xl font-semibold text-white mt-2">
            Featured <span className="italic text-gray-300">WordPress Projects</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Explore some of the WordPress projects we’ve designed and developed
          </p>
        </div>

        {/* -------- Portfolio Cards -------- */}
        <div className="flex flex-wrap justify-center gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[320px] lg:w-[360px] rounded-2xl overflow-hidden shadow-inner shadow-[rgba(207,231,255,0.2)] 
                         border-t-8 border-x-6 border-[#272a35] group cursor-pointer bg-[#0D1018]"
            >
              <Link href={item.url} target="_blank">
                <div
                  className="h-[520px] bg-cover bg-top transition-all duration-[6000ms] ease-linear group-hover:bg-bottom p-6 flex items-end"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <span className="text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500">
                    View Website
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* -------- View Portfolio Button (optional) -------- */}
        {/* <div className="mt-12 text-center">
          <Link href="/wordpressportfolio">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FDB36F] to-[#FB52B5] text-white font-medium shadow-lg hover:opacity-90 transition">
              View All WordPress Work
            </button>
          </Link>
        </div> */}
      </div>

      {/* Bottom Separator */}
      <div className="absolute -bottom-2 left-0 w-full mb-3">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
