"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import Link from "next/link";

const AllFeatureSection: React.FC = () => {
  type Service = {
    title: string;
    desc: string;
    icon?: string;
    link: string; // ✅ zaroori hai
  };

  const services: Service[] = [

    {
      title: "Web Application Development",
      icon: "./icons/code3.png",
      // icon: "",
      desc: "Scalable, secure, and high-performance web apps from front-end to back-end, we deliver seamless experiences to your business goals.",
      link: "/ServicesProvide/WebDev",

    },
    {
      title: "Mobile Application Development",
      icon: "./icons/coding.png",
      desc: "Sleek, reliable, and high-performance mobile apps for iOS and Android, we deliver engaging experiences tailored to your business goals.",
      link: "/ServicesProvide/MobileDev"
    },
    {
      title: "UI/UX & Graphic Design",
      // icon: "fa-pen",
      icon: "./icons/graphic-design.png",
      desc: "Creative, user-focused, and visually striking designs for web and mobile, we craft seamless experiences aligned with your brand identity.",
      link: "/ServicesProvide/UI-UX"
    },
    {
      title: "Digital Marketing & SEO",
      // icon: "fa-ranking-star",
      icon: "./icons/advertising.png",
      desc: "Targeted, data-driven, and growth-focused marketing strategies, we boost your online presence and drive measurable business results.",
      link: "/ServicesProvide/Digital-Marketing"
    },
    {
      title: "WordPress & Shopify",
      // icon: "fa-brands fa-shopify",
      icon: "./icons/social.png",
      desc: "Custom, flexible, and conversion-focused online stores and websites, we build high-performance platforms tailored to your brands.",
      link: "/ServicesProvide/WordPress-Shopify"
    },
    {
      title: "Blockchain Solutions",
      // icon: "fa-cubes",
      icon: "./icons/blockchain.png",
      desc: "Smart, resilient, and fully decentralized blockchain solutions, we craft seamless experiences that enhance performance.",
      link: "/ServicesProvide/Blockchain-Solutions "
    },
  ];

  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.25 }); // amount adjust kar sakti ho

  const child: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section className="relative w-full text-white py-20">
      <div ref={ref} className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={child}
          className="inline-block px-4 py-1 rounded-full border border-gray-700 text-xs uppercase tracking-wide text-gray-300 mb-6"
        >
          <i className="fa-solid fa-star g-2 text-grey-400 me-2"></i> FEATURES
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={child}
          className="text-3xl sm:text-5xl font-bold mb-4" style={{fontFamily:"Valty DEMO"}}
        >
          All features in one place
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial="hidden"
          animate={controls}
          variants={child}
          className="text-gray-400 max-w-2xl mx-auto mb-14"
        >
          Everything you need to automate operations, boost productivity
        </motion.p>

        {/* Cards */}
        
        <div className="flex flex-wrap justify-center mt-6 gap-8 mb-7">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col w-full sm:w-[48%] md:w-[31%] py-4 px-4 rounded-2xl border border-t-3 border-gray-800 border-b-gray-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex pt-8 pb-15 rounded-2xl border border-t-2 bg-gradient-to-bl from-gray-700/30 to-black border-gray-900 justify-center mb-6">
                <div className="flex items-center bg-[#12151E] gap-5 p-4 mt-4 rounded-xl border border-t-2 border-gray-800">
                  {/* <i className="fa-solid fa-diagram-project text-3xl text-gray-400"></i> */}
                  {/* <i className="fa-solid fa-diagram-project text-3xl text-gray-400"></i> */}
                  {/* <i className={`fas ${service.icon} px-2 text-white text-2xl`}></i>
                  <i className={`fas ${service.icon} px-2 text-white text-2xl`}></i> */}
                  <img width={30} height={30} src={service.icon} alt="" />
                  <img width={30} height={30} src={service.icon} alt="" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "Valty DEMO" }}>{service.title}</h3>
              <p className="text-gray-400 text-sm">
                {service.desc}
              </p>
              <Link href={service.link}>
                <button className="mt-4 px-3 py-2  border-b-2 border-gray-800 text-white rounded-sm hover:bg-gray-900 hover:cursor-pointer transition">
                  Read More
                </button>
              </Link>
            </motion.div>

          ))}
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

export default AllFeatureSection;
