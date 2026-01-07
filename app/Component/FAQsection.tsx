"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const faqs = useMemo(
    () => [
      {
        question: "What services do you offer as a software & digital marketing agency?",
        answer:
          "We build conversion-focused websites and web apps, handle UI/UX, SEO, performance optimisation, and run growth campaigns (Google Ads, Meta Ads, content strategy, and analytics) — all aligned to revenue goals.",
      },
      {
        question: "How do you improve website conversions (leads/sales)?",
        answer:
          "We start with a quick audit (speed, UX, messaging, funnel drop-offs), then optimise landing pages, CTAs, forms, trust sections, and tracking. We A/B test key sections and iterate based on real user behaviour data.",
      },
      {
        question: "Do you provide SEO — and how long does it take to see results?",
        answer:
          "Yes. We cover technical SEO, on-page optimisation, content planning, internal linking, and authority building. Early improvements can appear within 4–8 weeks, while competitive keywords typically take 3–6 months depending on your niche and budget.",
      },
      {
        question: "Can you manage paid ads (Google / Meta) and tracking properly?",
        answer:
          "Absolutely. We set up conversion tracking (GA4, GTM, pixels), create ad funnels, build landing pages, and optimise campaigns weekly. You’ll get clear reporting on spend, CPL/CPA, ROAS, and pipeline impact.",
      },
      {
        question: "Can you integrate my website with CRM and automation tools?",
        answer:
          "Yes. We integrate forms and lead sources with CRMs like HubSpot, Zoho, Salesforce, and email tools. We also build automations for lead routing, follow-ups, pipeline updates, and reporting dashboards.",
      },
      {
        question: "What’s your typical project timeline for a website or web app?",
        answer:
          "Websites usually take 2–4 weeks for design + development (depending on pages). Web apps vary, but an MVP typically takes 4–8 weeks. We work in milestones with weekly updates and clear deliverables.",
      },
      {
        question: "Do you offer ongoing maintenance and growth support?",
        answer:
          "Yes. We provide maintenance (security, updates, backups), performance monitoring, SEO/content support, and monthly growth sprints for conversion optimisation and campaign scaling.",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  // ✅ Smooth + lightweight animation (no height:auto jank)
  const contentVariants: Variants = {
    open: { opacity: 1, scaleY: 1 },
    collapsed: { opacity: 0, scaleY: 0 },
  };

  return (
    <section ref={sectionRef} className="relative text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-white bg-black px-4 py-1.5 rounded-full border border-neutral-700 shadow-md shadow-black/40 mb-6">
            <HelpCircle size={14} className="text-white" /> FAQS
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "Valty DEMO" }}>
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-2">
            Quick answers about our software development and digital marketing services.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-12 grid md:grid-cols-[1fr_2fr] gap-8">
          {/* Left Box (No button) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="bg-[#04070D] border border-gray-800 rounded-2xl shadow-lg
                       flex flex-col items-center justify-center text-center
                       p-7 h-[290px]"
          >
            <div className="w-12 h-12 flex items-center border border-gray-800 justify-center rounded-md bg-[#04070D] mb-4">
              <span className="text-2xl">?</span>
            </div>
            <h3 className="text-lg font-semibold">Need help choosing a package?</h3>
            <p className="text-gray-400 mt-2 px-3 text-sm">
              We’ll recommend a plan based on your goals — leads, sales, or product build.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 w-full max-w-xs">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs text-gray-400">Typical start</p>
                <p className="text-sm font-semibold">1–2 weeks</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs text-gray-400">Reporting</p>
                <p className="text-sm font-semibold">Weekly</p>
              </div>
            </div>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border border-gray-800 rounded-xl bg-[#04070D] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full px-5 py-4 text-left cursor-pointer hover:bg-white/5 transition"
                  >
                    <span className="font-medium pr-4">{faq.question}</span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={contentVariants}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        style={{ transformOrigin: "top" }}
                        className="px-5 pb-4 text-gray-400"
                      >
                        <div className="pt-1 text-sm leading-relaxed">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute -bottom-3 left-0 w-full">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
