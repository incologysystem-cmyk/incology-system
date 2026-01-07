"use client";
import { motion, Variants } from "framer-motion";

const reviews = [
  {
    name: "HUSSAIN ALI",
    role: "Full Stack Developer",
    text: "Truly impressive. The AI assistant is fast, accurate, and blends into our daily ops without friction.",
    img: "images/hussain.jpg",
  },
  {
    name: "ABDUL AHAD",
    role: "Mern Satck Developer",
    text: "Game-changer. Automation flows run flawlessly. Our team now focuses only on what really matters.",
    img: "images/ahad.jpg",
  },
  {
    name: "HASEEB",
    role: "Frontend Developer",
    text: "Smooth setup. Their system replaced three tools. We saw improvements in just the first week.",
    img: "images/haseeb.jpg",
  },
  {
    name: "MUHAMMAD ARSALAN",
    role: "Microsoft power Apps Developer",
    text: "Surprisingly simple. The AI adapts quickly. Our campaigns are now running 2x more efficiently.",
    img: "images/arsalan.jpg",
  },
  {
    name: "NAVEED",
    role: "Social Media Manager",
    text: "Huge time-saver. Data is better organized. The insights we get now are actionable and fast.",
    img: "images/naveed.jpg",
  },
  {
    name: "SYED BAASIR",
    role: "Full Stack Developer",
    text: "Very intuitive. No fluff, just performance. Our internal processes finally feel under control.",
    img: "images/baasir.jpg",
  },
];

// Text animation
const textVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.8, ease: "easeOut" },
  }),
};

// Card animation
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.9, ease: "easeOut" },
  }),
};

const Testimonials = () => {

  return (
    <section className="text-white py-16 px-4 relative">
      <div className="max-w-6xl mx-auto text-center mb-14">
        {/* Reviews Button */}
        <motion.button
          custom={0}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-gray-300"
        >
          ♥ REVIEWS
        </motion.button>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold" style={{fontFamily:"Valty DEMO"}}
        >
          Trusted by Visionaries
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-3 text-gray-400 max-w-2xl mx-auto"
        >
          Hear from real users who achieved success with our automation
        </motion.p>
      </div>

      {/* Testimonial Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {reviews.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#070B11] rounded-2xl shadow-md border border-gray-800 overflow-hidden flex flex-col"
          >
            {/* Profile Section */}
            <div className="flex items-center gap-3 p-6 bg-[#070B11] rounded-2xl border border-[#292F3A]">
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <div className="text-left">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            </div>

            {/* Message Section */}
            <div className="p-6">
              <p className="text-gray-300 text-[15px] leading-relaxed">
                “{item.text}”
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* White Shadow Separation */}
      <div className="absolute -bottom-2 left-0 w-full">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
