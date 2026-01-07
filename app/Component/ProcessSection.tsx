"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

interface CardContent {
  number: string;
  title: string;
  desc: string;
  img: string;
}

const ProcessSection: React.FC = () => {
  const [step, setStep] = useState(0);
  const content: CardContent[] = [
    {
      number: "01",
      title: "Discover & Analyze",
      desc: "We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
      img: "https://framerusercontent.com/images/LMV9IYKI2TkgMh5KmQhbeIV2A.png?width=1602&height=1049",
    },
    {
      number: "02",
      title: "Design & Implement",
      desc: "We create tailored AI workflows that align with your goals. Our team builds, tests, and deploys smart systems that integrate into your operations seamlessly.",
      img: "https://framerusercontent.com/images/NlShinj3SRLiU2GpzFKbH8loPs.png?width=1808&height=1124",
    },
    {
      number: "03",
      title: "Optimize & Scale",
      desc: "We track key metrics and continuously refine performance using real-time insights. As your business evolves, your automation grows with it.",
      img: "https://framerusercontent.com/images/66vg6GiqexKxWsR2ms684XFtAQ.png?width=1536&height=1012",
    },
  ];

  //  animation
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const childText: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const childImage: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section ref={ref} className="relative w-full text-white pb-20 pt-10">
      <motion.div variants={container} initial="hidden" animate={controls} className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          variants={childText}
          className="inline-block px-4 py-1 my-6 rounded-full border border-gray-900 text-xs uppercase tracking-wide text-gray-300"
        >
          <i className="fa-solid fa-star g-2 text-grey-400 me-2"></i>PROCESS
        </motion.div>

        {/* Heading */}
        <motion.h2 variants={childText} className="text-3xl sm:text-5xl font-bold mb-4" style={{fontFamily:"Valty DEMO"}}>
          Our Simple & Smart Process
        </motion.h2>

        {/* Subheading */}
        <motion.p variants={childText} className="text-gray-400 max-w-2xl mx-auto mb-10">
          Everything you need to collaborate, create, and scale, all in one place.
        </motion.p>

        {/*  buttons */}
        <motion.div variants={container} className="flex gap-4 mb-8 justify-center">
          {content.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setStep(idx)}
              variants={childText}
              className={`flex-1 py-3 rounded-xl border border-gray-700 transition ${
                step === idx ? "bg-gray-800 text-white" : "bg-[#111] text-gray-400 hover:bg-gray-800"
              }`}
            >
              STEP {idx + 1}
            </motion.button>
          ))}
        </motion.div>

        {/* Big Card */}
        <motion.div
          key={step} 
          initial="hidden"
          animate="visible"
          variants={container}
          className="border border-t-2 border-gray-800 border-b-gray-900 rounded-xl p-4 pb-4"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Image */}
            <motion.div variants={childImage} className="flex justify-center">
              <img
                width={600}
                height={600}
                src={content[step].img}
                alt={content[step].title}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Right Text */}
            <motion.div variants={container} className="text-start">
              <motion.p variants={childText} className="text-gray-400 mb-3 text-lg"  style={{fontFamily:"Valty DEMO"}}>
                {content[step].number}
              </motion.p>
              <motion.h5 variants={childText} className="text-4xl mb-4" style={{fontFamily:"Valty DEMO"}}>
                {content[step].title}
              </motion.h5>
              {content[step].desc.split(". ").map((line, idx) => (
                <motion.p key={idx} variants={childText} className="text-gray-400 text-md mb-2">
                  {line}.
                </motion.p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
       <div className="absolute -bottom-2 left-0 w-full mb-3">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
