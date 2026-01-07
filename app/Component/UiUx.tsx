"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const UiUx = () => {
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const uiuxServices = [
    { title: "Wireframing & Prototyping", desc: "Visualize your app before development begins." },
    { title: "Accessibility First", desc: "We ensure inclusivity and usability across devices and audiences." },
    { title: "User-Centric Design", desc: "Crafting flows and interfaces that minimize friction and maximize engagement." },
  ];

  const graphicServices = [
    { title: "Brand Identity", desc: "Logo design, typography, and brand guidelines." },
    { title: "Marketing Collateral", desc: "Posters, brochures, and banners that elevate your campaigns." },
    { title: "Social Media Assets", desc: "Eye-catching post designs for Instagram, LinkedIn, Facebook, and more." },
    { title: "Tools We Use", desc: "Figma, Adobe Illustrator, Photoshop, Adobe XD." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 h-full w-full object-cover filter grayscale brightness-50"
            autoPlay muted loop playsInline poster="/fallback.jpg"
          >
            <source src="backgroundVideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          className="relative z-10 max-w-3xl px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg"
            style={{ fontFamily: "Valty DEMO" }}
          >
            UI/UX & Graphic Design
          </h1>
          <p className={`mt-4 text-md font-bold tracking-wide text-gray-200 ${libreBaskerville.className}`}>
            Design is more than how something looks—it’s how it feels to use. Our design team blends
            creativity with research-driven strategy to create digital experiences that resonate with users.
          </p>
        </motion.div>
      </section>

      {/* UI/UX Section */}
      <section className="relative py-16 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4" style={{ fontFamily: "Valty DEMO" }}>
            UI /UX Services
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Exceptional UI/UX design creates seamless, meaningful interactions that make technology feel human.
          </p>

          <ul className="relative space-y-6">
            {uiuxServices.map((item, index) => (
              <li
                key={index}
                className="border rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black hover:scale-[1.02] transition duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-3 justify-between" onClick={() => toggleItem(index)}>
                  <div className="flex gap-3">
                    <CheckCircle className="text-white w-8 h-8" />
                    <span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>
                      {item.title}
                    </span>
                  </div>
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1 ml-11 text-gray-300"
                    >
                      {item.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Graphic Design Section */}
      <section className="relative pb-16 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5" style={{ fontFamily: "Valty DEMO" }}>
            Graphic Design Services
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            With Incology Systems, you get designs that are beautiful, functional, and true to your brand identity.
          </p>

          <ul className="relative space-y-6">
            {graphicServices.map((item, index) => (
              <li
                key={index}
                className="border rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black hover:scale-[1.02] transition duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-3 justify-between" onClick={() => toggleItem(index + 10)}>
                  <div className="flex gap-3">
                    <CheckCircle className="text-white w-8 h-8" />
                    <span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>
                      {item.title}
                    </span>
                  </div>
                  <motion.div animate={{ rotate: openIndex === index + 10 ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index + 10 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1 ml-11 text-gray-300"
                    >
                      {item.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default UiUx;
