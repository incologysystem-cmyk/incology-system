"use client";
import Link from "next/link";
import { FaReact } from "react-icons/fa"; 

const portfolioItems = [
    {
        id: 1,
        url: "https://www.customizablewear.com/products/shirt-blouse",
        img: "/images/mern10.png",
    },
    {
        id: 2,
        url: "https://emaps-web.vercel.app/",
        img: "/images/mern7.png",
    },
    {
        id: 3,
        url: "https://creedcoin.org/",
        img: "/images/mern5.png",
    },
    {
        id: 4,
        url: "https://kids-pannel.vercel.app/",
        img: "/images/mern4.png",
    },
    {
        id: 5,
        url: "https://www.lnbglondon.com/en",
        img: "/images/mern6.png",
    },
    {
        id: 6,
        url: "https://salon-dahboard-8j7r.vercel.app/",
        img: "/images/mern8.png",
    },
    {
        id: 7,
        url: "https://allinone.codderlab.com/admin/dashboard",
        img: "/images/mern9.png",
    },

];

export default function PortfolioSection() {
    return (
        <section className="relative bg-[#04070D] text-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* -------- Heading -------- */}
                <div className="text-center mb-14">
                   <button className="inline-flex items-center gap-2 px-5 py-1 rounded-full bg-[#0D1018] border border-white/10 text-xs tracking-wide text-white mb-4">
                               <FaReact className="text-white text-lg" /> {/* Icon added */}
                               OUR WORK
                             </button>
                    <h2 className="text-3xl font-semibold text-white mt-2">
                        Featured <span className="italic text-gray-300">Projects</span>
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm">
                        Explore some of the projects we’ve worked on
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

                {/* -------- View Portfolio Button -------- */}
                {/* <div className="mt-12 text-center">
          <Link href="/mernportfolio">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FDB36F] to-[#FB52B5] text-white font-medium shadow-lg hover:opacity-90 transition">
              View Portfolio
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
