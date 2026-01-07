"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Libre_Baskerville } from "next/font/google";
import { CheckCircle, ChevronDown } from "lucide-react";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function WebDevelopment() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      title: "Custom Web Applications:",
      desc: "Internal dashboards, e-commerce solutions, or SaaS platforms aligned with your goals.",
    },
    {
      title: "API Development:",
      desc: "Powerful REST APIs & GraphQL endpoints to connect services, apps, and devices seamlessly.",
    },
    {
      title: "Database Design & Management:",
      desc: "Expertise in MongoDB, MySQL & PostgreSQL for secure and structured growth.",
    },
    {
      title: "Modern Frameworks & Tools:",
      desc: "Node.js, Express, NestJS, Prisma ORM for scalable backends.",
    },
    {
      title: "Scalability & Security:",
      desc: "Authentication systems, payment gateways, and high-performance apps.",
    },
  ];

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="relative w-full h-[70vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <video
              className="absolute filter grayscale brightness-50 inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/fallback.jpg"
            >
              <source src="backgroundVideo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <motion.div
            className="relative z-10 max-w-3xl px-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg"
              style={{ fontFamily: "Valty DEMO" }}
            >
              Full-Stack Web Application Development
            </h1>
            <p
              className={`mt-4 text-md font-bold tracking-wide text-gray-200 ${libreBaskerville.className}`}
            >
              Your website or web application is often the first interaction customers have with your business.
              At Incology Systems, we ensure that experience is smooth, responsive, and reliable.
            </p>
          </motion.div>
        </section>

        {/* Services */}
        <section className="relative py-16 text-white">
          <div className="max-w-6xl mx-auto px-6 gap-10 items-center">
            <div className="flex flex-col pb-10 justify-center items-center">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ fontFamily: "Valty DEMO" }}
              >
                What We Do
              </h2>
              <p className="text-gray-300 text-center">
                Our full-stack approach means you don’t need multiple vendors—we handle <br />
                frontend, backend, database, and deployment all under one roof.
              </p>
            </div>

            <ul className="relative space-y-6">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="border rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black hover:scale-[1.02] transition duration-300 cursor-pointer"
                >
                  {/* Title Row */}
                  <div
                    className="flex items-start gap-3 justify-between"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex gap-3">
                      <CheckCircle className="text-white w-8 h-8" />
                      <span
                        className="font-bold text-xl tracking-wide"
                        style={{ fontFamily: "Valty DEMO" }}
                      >
                        {service.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </div>

                  {/* Description Dropdown */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-1 ml-11 text-gray-300"
                      >
                        {service.desc}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
            
          </div>
        </section>
      </div>
    </>
  );
}
