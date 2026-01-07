"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { motion, Variants } from "framer-motion";

const landioFeatures: string[] = [
  "Fast setup with ready AI workflows",
  "Built to grow and adapt with you",
  "Real-time, AI-powered analytics",
  "Automates tasks, reducing overhead",
  "Expert support + AI guidance",
];

const othersFeatures: string[] = [
  "Slower execution and manual setup",
  "Requires manual updates as you scale",
  "Limited or delayed reporting",
  "Higher labor costs, less automation",
  "Generic support or none at all",
];


const textVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ComparisionSection: React.FC = () => {
  return (
    <section className="relative text-white py-20">
      {/* Top & Bottom Lines */}
      

      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Comparison Badge */}
        <motion.span
          className="text-xs uppercase tracking-widest px-3 py-1 border-1 border-gray-900 rounded-full text-gray-300 inline-block"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
         <i className="fa-solid fa-star g-2 text-grey-400 me-2"></i> Comparison
        </motion.span>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-4xl font-bold mt-4"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{fontFamily:"Valty DEMO"}}
        >
          Why Choose Us Over Others
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-gray-400 mt-3 text-sm md:text-base"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          See how we compare against others in performance, growth
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {/* Landio Card */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-1 mb-6">
              <img
                width={120}
                src="./incologo.png"
                alt=""
              />
            </div>
            <div className="rounded-2xl border border-t-3 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black shadow-lg p-6 text-left">
              <ul className="space-y-1">
                {landioFeatures.map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <div className="flex items-center gap-3 py-3">
                      <Check className="text-gray-400 w-5 h-5 shrink-0" />
                      <span>{item}</span>
                    </div>
                    {i !== landioFeatures.length - 1 && (
                      <div className="h-[1px] w-[80%] bg-gradient-to-r from-black via-gray-700 to-black mx-auto" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Others Card */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-1 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="w-6 h-6 text-white"
                fill="currentColor"
              >
                <path d="M480-80q-33 0-56.5-23.5T400-160v-320q0-33 23.5-56.5T480-560h320q33 0 56.5 23.5T880-480v320q0 33-23.5 56.5T800-80H480Zm0-80h320v-320H480v320Zm-240-80v-400q0-33 23.5-56.5T320-720h400v80H320v400h-80ZM80-400v-400q0-33 23.5-56.5T160-880h400v80H160v400H80Zm400 240v-320 320Z" />
              </svg>

              <h3 className="text-3xl font-semibold italic">Others</h3>
            </div>

            <div className="rounded-2xl border border-t-3 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black shadow-lg p-6 text-left">
              <ul className="space-y-1">
                {othersFeatures.map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <div className="flex items-center gap-3 py-3">
                      <X className="text-gray-400 w-5 h-5 shrink-0" />
                      <span>{item}</span>
                    </div>
                    {i !== othersFeatures.length - 1 && (
                      <div className="h-[1px] w-[80%] bg-gradient-to-r from-black via-gray-700 to-black mx-auto" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

 <div className="absolute -bottom-3 left-0 w-full mb-3">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>

    </section>
  );
};

export default ComparisionSection;



