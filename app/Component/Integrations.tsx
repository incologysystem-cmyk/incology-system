"use client";
import { useEffect, useRef } from "react";
import {FaXTwitter,FaPinterest,FaInstagram} from "react-icons/fa6";
import {SiReact,SiNodedotjs,SiFlutter,SiMongodb,SiExpress,SiJavascript,SiNextdotjs,SiTypescript} from "react-icons/si";
import { Plug } from "lucide-react";
import gsap from "gsap";
import { motion, Variants } from "framer-motion";

// Icons ka data
const row1 = [SiJavascript, SiNextdotjs, SiTypescript, SiExpress, FaInstagram];
const row2 = [SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiFlutter,FaPinterest ];
const row3 = [SiFlutter, SiMongodb, SiReact, SiJavascript, SiNextdotjs, FaXTwitter];

// Text animation variants (with TS typing)
const textVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  })};

export default function IntegrationsSection() {
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);
  const row3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animateRow = (
      ref: HTMLDivElement | null,
      direction: "left" | "right"
    ) => {
      if (!ref) return;
      const distance = ref.scrollWidth / 2;

      gsap.to(ref, {
        x: direction === "left" ? -distance : distance,
        duration: 20,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x: string) => {
            const mod = parseFloat(x) % distance;
            return `${mod}px`;
          },
        },
      });
    };

    animateRow(row1Ref.current, "right");
    animateRow(row2Ref.current, "left");
    animateRow(row3Ref.current, "right");
  }, []);

  return (
    <section className="relative text-white min-h-screen flex justify-center items-center px-6">
      <div className="max-w-[1100px] w-full text-center">
        {/* Heading */}
        <motion.div
          custom={0}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="inline-flex items-center mt-15 gap-2 text-xs font-medium text-white bg-black/40 px-4 py-1.5 rounded-full border border-neutral-700 shadow-md mb-6"
        >
          <Plug size={14} className="text-white" /> INTEGRATIONS
        </motion.div>

        <motion.h2
          custom={1}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl font-bold mt-2" style={{ fontFamily: "Valty DEMO" }}
        >
          Seamless Integrations
        </motion.h2>

        <motion.p
          custom={2}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-400 mt-3"
        >
          Interact with all your favorite software without unnecessary fuss
        </motion.p>

        {/* Rows Container */}
        <div
          className="relative mt-12 bg-[#04070D] border-t-4 border-[#4b4b4d] border-x 
         rounded-t-3xl shadow-xl overflow-hidden mx-auto max-w-[600px] w-full pb-10 mb-16"
        >
          <div className="space-y-10 py-10">
            {/* Row 1 */}
            <div className="overflow-hidden flex justify-center">
              <div ref={row1Ref} className="flex gap-10 w-max">
                {[...row1, ...row1].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-900/60 border border-gray-800"
                  >
                    <Icon className="w-8 h-8 text-gray-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="overflow-hidden flex justify-center">
              <div ref={row2Ref} className="flex gap-10 w-max">
                {[...row2, ...row2].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-900/60 border border-gray-800"
                  >
                    <Icon className="w-8 h-8 text-gray-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3 */}
            <div className="overflow-hidden flex justify-center">
              <div ref={row3Ref} className="flex gap-10 w-max">
                {[...row3, ...row3].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-900/60 border border-gray-800"
                  >
                    <Icon className="w-8 h-8 text-gray-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <motion.p
          custom={3}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-400 mb-15 text-1xl text-center -bottom-2"
        >
          "Our AI automation plugs into your stack to create a unified, intelligent workflow"
        </motion.p>
      </div>

      {/* White Shadow Separation */}
      <div className="absolute -bottom-3 left-0 w-full">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
