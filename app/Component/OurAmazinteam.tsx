"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users } from "lucide-react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  img: string;
  highlight?: boolean;
  desc: string;
};

const team: TeamMember[] = [
  {
    name: "Hussain Ali",
    role: "CEO & Founder • Full Stack Developer (DevOps)",
    img: "/images/hussain.jpg",
    highlight: true,
    desc:
      "Leads product direction and delivery. Builds scalable web systems end-to-end, handles deployments, CI/CD, and production reliability.",
  },
  {
    name: "Abdul Ahad",
    role: "Founder • MERN Developer (Mobile Apps)",
    img: "/images/ahad.jpg",
    highlight: true,
    desc:
      "Develops MERN applications and mobile app solutions. Focused on clean architecture, performance, and smooth user experiences.",
  },
  {
    name: "Yaqoob Ali",
    role: "Co-Founder • Video & Animation Editor",
    img: "/yaqoob.png",
    highlight: true,
    desc:
      "Creates high-impact video edits and motion visuals for brand storytelling, ads, and social content with crisp, modern animation.",
  },
  {
    name: "Ayesha Shahid",
    role: "Co-Founder • LinkedIn Outreach Strategist & Social Media Marketing Expert",
    img: "/ayesha-shahid-khoja.png",
    highlight: true,
    desc:
      "Builds outreach systems, messaging, and lead pipelines on LinkedIn. Plans growth strategy and manages social campaigns for consistent results.",
  },
  {
    name: "Haseeb",
    role: "Frontend Developer",
    img: "/images/haseeb.jpg",
    desc:
      "Builds pixel-perfect UI with responsive layouts and smooth interactions. Focused on accessibility, speed, and modern frontend best practices.",
  },
  {
    name: "Muhammad Arsalan",
    role: "Microsoft Power Apps Developer",
    img: "/images/arsalan.jpg",
    desc:
      "Develops internal tools and workflow apps using Power Platform. Automates processes, connects data sources, and improves operational efficiency.",
  },
  {
    name: "Syed Baasir",
    role: "Full Stack Developer",
    img: "/images/baasir.jpg",
    desc:
      "Builds secure APIs and robust backend systems while supporting frontend delivery. Focused on maintainable code and scalable features.",
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <section
      ref={sectionRef}
      className="relative text-white py-24 px-6 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[700px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block"
        >
          <span className="px-5 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#0B0F17]/70 backdrop-blur border border-white/10 text-gray-200 inline-flex items-center gap-2">
            <Users size={16} className="text-white" />
            OUR AMAZING TEAM
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          style={{ fontFamily: "Valty DEMO" }}
        >
          Meet the People Behind the Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
        >
          A focused team building high-quality digital products, automation, and
          scalable systems.
        </motion.p>

        {/* Team Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
              className={`
                group relative rounded-2xl p-6 text-left
                bg-[#0B0F17]/70 backdrop-blur
                border border-white/10
                hover:border-white/20
                transition-all duration-300
                ${member.highlight ? "ring-1 ring-white/20" : ""}
              `}
            >
              {/* Glow border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-transparent" />
              </div>

              <div className="relative z-10 flex items-center gap-5">
                {/* Image */}
                <div className="relative shrink-0">
                  <div
                    className={`
                      relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-2xl
                      border border-white/10
                      ${member.highlight ? "ring-2 ring-white/20" : ""}
                    `}
                  >
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 96px"
                      className="object-cover"
                      quality={75}
                    />
                  </div>

                  {/* Leadership dot */}
                  {member.highlight && (
                    <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-white/80 ring-4 ring-[#0B0F17]" />
                  )}
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h5 className="text-lg font-semibold leading-snug truncate">
                      {member.name}
                    </h5>

                    {/* {member.highlight && (
                      <span className="shrink-0 text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200">
                        Leadership
                      </span>
                    )} */}
                  </div>

                  <p className="text-gray-300/80 text-sm mt-1">{member.role}</p>

                  {/* Small divider */}
                  <div className="mt-4 h-px w-full bg-white/10" />

                  {/* Role-based description */}
                  <p className="mt-3 text-xs text-gray-400 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute -bottom-3 left-0 w-full">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
