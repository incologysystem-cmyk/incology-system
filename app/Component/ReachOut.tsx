"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

const ReachOut: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);


  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };


  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="h-[110vh] w-full">
      {/* Centered content */}
      <div
        ref={ref}
        className="relative z-10 flex h-full items-center justify-center px-4"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className="text-white text-center flex flex-col items-center gap-6"
        >
          {/* Top text */}
          <motion.em variants={fadeUp} className="text-md">
            ____Reach out anytime____
          </motion.em>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold leading-tight" style={{fontFamily:"Valty DEMO"}}
          >
            Ready to Automate Smarter? <br /> Let&apos;s Build Together
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-md">
            Schedule a Call and Begin Automating
          </motion.p>

          {/* Button */}
          <motion.button
            variants={fadeUp}
            className="relative border flex gap-2 justify-center px-5 py-3 rounded-xl bg-black border-gray-700 overflow-hidden"
          >
            BOOK A FREE CALL
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#FFFFFF"
              >
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
              </svg>
            </i>
            <span
              className="absolute bottom-0 left-0 w-full h-[3px] 
              bg-gradient-to-r from-transparent via-white to-transparent 
              opacity-90"
            ></span>
          </motion.button>

          {/* Icons */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center items-center py-2 gap-4 text-gray-400 text-2xl"
          >
            <i className="fa-brands fa-x-twitter"></i>
            <span className="text-gray-500">|</span>
            <i className="fa-brands fa-instagram"></i>
            <span className="text-gray-500">|</span>
            <i className="fa-brands fa-facebook-f"></i>
          </motion.div>

          {/* Email */}
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-sm sm:text-base text-gray-200"
          >
            incologysystem@gmail.com
          </motion.p>
        </motion.div>
      <div className="absolute -bottom-2 left-0 w-full mb-3">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
      </div>


    </section>
  );
};

export default ReachOut;
