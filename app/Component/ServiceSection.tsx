"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import {SiReact,SiNodedotjs,SiFlutter,SiTypescript,SiMongodb,SiExpress,SiJavascript,SiNextdotjs} from "react-icons/si";
import {User,Repeat,Sparkles,CheckCircle} from "lucide-react";

const codeLines = [
  "class AutomationAgent:",
  "  def __init__(self, activation_limit):",
  "    self.activation_limit = activation_limit",
  "    self.current_mode = 'idle'",
  "    def evaluate_task(self): pass",
  "",
  "# More sample code...",
  "for i in range(5):",
  "    print('Processing task', i)",
  "    # Simulate task execution",
  "    time.sleep(1)",
  "",
  "agent = AutomationAgent(activation_limit=10)",
  "agent.evaluate_task()",
];

const services = [
  {
    id: 1,
    title: "Real-Time Intelligence",
    description:
      "Make smarter decisions with live data insights. Tap into real-time data.",
    content: [
      "Software & App Industry",
      "UX & UI Design Industry",
      "High Converting Customer",
    ],
    type: "search",
  },
  {
    id: 2,
    title: "Custom AI Agent development",
    description:
      "We develop custom AI agents that integrate seamlessly with your tools.",
    type: "code",
  },
  {
    id: 3,
    title: "AI Strategy Consulting",
    description:
      "Get expert guidance to implement AI solutions that drive business growth.",
    type: "chart",
  },
];

// Framer Motion variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const tasks = [
  { text: "Social media post", status: "done" },
  { text: "Employee Tracking", status: "progress" },
  { text: "Payment reminder", status: "done" },
  { text: "Cost Management", status: "progress" },
  { text: "Daily Report", status: "done" },
];

const features = [
  {
    id: 1,
    title: "Automate repetitive tasks",
    desc: "We help you streamline internal operations by automating manual workflows",
    icons: [],
  },
  {
    id: 2,
    title: "Automated Workflows",
    desc: "Boost efficiency across teams with smart automation. Build intelligent workflows that automate multi-step processes across tools and platforms.",
    icons: [
      { icon: <SiReact />, top: "15%", left: "24%" },
      { icon: <SiTypescript />, top: "10%", left: "63%" },
      { icon: <SiNextdotjs />, top: "20%", left: "83%" },
      { icon: <SiMongodb />, top: "50%", left: "70%" },
      { icon: <SiNodedotjs />, top: "50%", left: "30%" },
      { icon: <SiExpress />, top: "45%", left: "8%" },
      { icon: <SiJavascript />, top: "15%", left: "8%" },
    ],
  },
];

const ServiceSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 2) % tasks.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // scroll refs
  const leftCardRef = useRef<HTMLDivElement | null>(null);
  const rightCardRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const textControls = useAnimation();

  const leftInView = useInView(leftCardRef, { once: true });
  const rightInView = useInView(rightCardRef, { once: true });
  const textInView = useInView(textRef, { once: true });

  useEffect(() => {
    if (leftInView) leftControls.start("visible");
    if (rightInView) rightControls.start("visible");
    if (textInView) textControls.start("visible");
  }, [leftInView, rightInView, textInView, leftControls, rightControls, textControls]);

  // Variants
  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const textContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="relative pt-8 pb-15 px-4 text-white text-center">
        {/* TEXT SECTION */}
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={textContainer}
          className="flex flex-col items-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-widest border-1 border-gray-900 px-3 py-1 rounded-full text-gray-300"
          >
            <i className="fa-solid fa-star g-2 text-grey-400 me-2"></i> SERVICES
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl  font-bold mt-4" style={{fontFamily: "Valty DEMO"}}
          >
         Future Ready Software Agency Driving <br /> Your Business Forward  {" "}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-400 mt-3 text-sm md:text-base">
            Everything you need to automate operations, boost productivity
          </motion.p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid lg:grid-cols-[0.7fr_1.5fr] gap-6 p-6 lg:p-10  min-h-[80vh] text-white">
          {/* LEFT CARD */}
          <motion.div
            ref={leftCardRef}
            variants={cardVariant}
            initial="hidden"
            animate={leftControls}
            className="rounded-2xl border border-t-3 bg-[#04070D] border-gray-800 p-6 shadow-xl h-[400px] flex flex-col justify-between overflow-hidden">
            <div className="relative mt-5 h-[220px] overflow-hidden">
              <motion.div
                className="absolute w-full"
                animate={{ y: -active * 55 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}>
                {tasks.concat(tasks).map((task, i) => {
                  const isActive = i % tasks.length === active;
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{
                        scale: isActive ? 1.01 : 0.9,
                        opacity: isActive ? 0.9 : 0.3,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-[95%] flex items-center justify-between border-t-2 border-gray-800 rounded-lg px-4 py-4 mx-2 my-3"
                    >
                      <div className="flex gap-2 items-center">
                        <User className="w-5 h-5" />
                        {task.text}
                      </div>
                      {task.status === "done" ? <CheckCircle /> : <Repeat />}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">Automate repetitive tasks</h3>
              <p className="mt-1 text-sm text-zinc-400">
                We help you streamline internal operations by automating manual workflows
              </p>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            ref={rightCardRef}
            variants={cardVariant}
            initial="hidden"
            animate={rightControls}
            className="relative bg-[#04070D] border-t-3 border border-[#2C333D] rounded-2xl p-6 shadow-lg overflow-hidden flex flex-col lg:flex-row items-start lg:items-end justify-center h-[500px] lg:h-[400px]"
          >
            {features[1].icons.length > 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  transition={{ duration: 2, repeat: Infinity }}
                  className="z-20 mb-25 flex h-30 w-30 items-center justify-center border-t-2 border-gray-800 rounded-full bg-black shadow-[0px_7px_15px_rgba(265,265,265,0.25)]"
                >
                  <SiFlutter size={40} className="text-white" />
                </motion.div>

                {features[1].icons.map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-xl bg-[#10131C] p-3 shadow-lg border-2 border-gray-900"
                    animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                    style={{ top: item.top, left: item.left }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            )}

            <div className="relative z-20 text-start mt-76 lg:mt-0 lg:ml-6">
              <h2 className="text-xl font-bold">{features[1].title}</h2>
              <p className="text-gray-400 mt-2">{features[1].desc}</p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl  mx-auto px-6">
          <div className="flex flex-wrap gap-8 justify-center">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex-1 min-w-[300px] max-w-[350px] relative group bg-gradient-to-b from-gray-900/60 to-black border border-t-3  border-gray-800 rounded-3xl p-6 shadow-lg  transition-all duration-500 animate-[float_6s_ease-in-out_infinite]"
              >
                {/* Card background blur */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gray-800/30 to-gray-700/10 blur-xl opacity-40 group-hover:opacity-60 transition"></div>

                {/* SEARCH Card */}
                {service.type === "search" && (
                  <div className="border-t-2 rounded-xl pt-2 border-gray-800">
                    <div className="border-t-2 rounded-xl pt-2 border-gray-800">
                      <div className="border border-t-2 w-full border-b-0 border-gray-800 pb-4 pt-8 px-2 rounded-xl">
                        <div className="w-full text-sm flex items-center justify-between border-t-2 border-gray-800 px-3 py-2 mb-3 rounded-full bg-black/50 text-gray-300 border border-gray-700 focus:outline-none">
                          Research anything....
                          <button className="bg-white text-black px-5 py-1 rounded-full hover:bg-gray-200 transition">
                            Research
                          </button>
                        </div>

                        {service.content && (
                          <ul className="mt-3 space-y-2 text-gray-300 text-sm">
                            {service.content.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-center justify-between bg-black/30 p-2 rounded-lg border border-t-2 border-gray-700"
                              >
                                <i>
                                  {/* icon */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#FFFFFF"
                                  >
                                    <path d="M702-480 560-622l57-56 85 85 170-170 56 57-226 226Zm-342 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 260Zm0-340Z" />
                                  </svg>
                                </i>
                                {item}
                                <i className="ps-10">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#FFFFFF"
                                  >
                                    <path d="m136-240-56-56 212-212q35-35 85-35t85 35l46 46q12 12 28.5 12t28.5-12l178-178H640v-80h240v240h-80v-103L621-405q-35 35-85 35t-85-35l-47-47q-11-11-28-11t-28 11L136-240Z" />
                                  </svg>
                                </i>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Code Card */}
                {service.type === "code" && (
                  <div className="border-t-2 rounded-xl pt-2 border-gray-800">
                    <div className="relative  bg-black/40 rounded-xl border-t-2 border border-b-0 border-gray-800 mb-4 text-sm font-mono text-gray-400 h-60 overflow-hidden">
                      <div className="flex items-center justify-between px-3 py-2 border-b-0 border-gray-700 bg-black/60">
                        <div className="flex space-x-1">
                          <span className="w-3 h-3 rounded-full bg-gray-600"></span>
                          <span className="w-3 h-3 rounded-full bg-gray-600"></span>
                          <span className="w-3 h-3 rounded-full bg-gray-600"></span>
                        </div>
                        <button className="flex items-center justify-between px-5 py-1 bg-gray-800 rounded-full text-xs text-gray-300 gap-2">
                          <span>Search</span>
                        </button>
                      </div>
                      <div className="relative w-80 px-4 h-40 bg-gradient-to-bl from-gray-800/50 to-black overflow-hidden">
                        <div className="absolute right-5 animate-scrollCode">
                          {codeLines.map((line, idx) => (
                            <div key={idx} className="whitespace-pre text-gray-300">
                              <span className="text-gray-500 mr-3">
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              {line}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Chart Card */}
                {service.type === "chart" && (
                  <div className="relative flex bg-gradient-to-bl from-gray-800/50 to-black flex-col items-center rounded-xl border-gray-700 ps-15 pt-20">
                    <div className="relative flex justify-center mb-20 items-center h-30 w-30 rounded-full border-t-3 bg-black border border-gray-800 bg-black/30 translate-x-6 translate-y-6">
                      <Sparkles className="w-10 h-10 text-gray-300" />
                    </div>
                    <div className="absolute top-26 right-35  w-20 h-2 bg-black border-t-1 border-b-1 border-gray-800 rotate-[33deg]"></div>
                    <div className="absolute top-30 right-34 w-5 border-t-2 border-gray-800 border h-5 rounded-full bg-black animate-ball"></div>
                    <div className="absolute top-18 right-53 w-5 border-t-2 border-gray-800 border h-5 rounded-full bg-black animate-ball2"></div>
                    <div className="absolute top-5 right-50 w-20 h-20 rounded-full border-t-3 bg-black border border-gray-600 opacity-40">
                      <Sparkles className="w-6 h-6 absolute top-6 left-7 text-white" />
                    </div>
                    <div className="absolute top-38 right-55 w-9 h-9 rounded-full border-t-3 bg-black border border-gray-600 opacity-30"></div>
                  </div>
                )}

                <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{service.description}</p>
              </motion.div>
            ))}

          </div>

        </div>

        <div className="absolute -bottom-2 left-0 w-full mb-3">
          <div className="relative w-full h-px bg-gray-900">
            <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ServiceSection;
