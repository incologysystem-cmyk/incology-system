
// "use client";
// import { motion } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import { Libre_Baskerville } from "next/font/google";

// const libreBaskerville = Libre_Baskerville({
//     weight: ["400", "700"],
//     subsets: ["latin"],
// });

// export default function MobileDevelopment() {
//     return (
//         <>
//             {/* Hero Section */}
//             <section className="relative w-full h-[70vh] flex items-center justify-center">
//                 <div className="absolute inset-0">
//                      {/* Background video */}
//       <video
//         className="absolute filter grayscale brightness-50 inset-0 h-full w-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//         poster="/fallback.jpg"
//       >
//         <source src="backgroundVideo.mp4" type="video/mp4" />
//       </video>
//                     <div className="absolute inset-0 bg-black/50"></div>
//                 </div>

//                 <motion.div
//                     className="relative z-10 max-w-3xl px-6 text-center"
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <h1
//                         className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg"
//                         style={{ fontFamily: "Valty DEMO" }}
//                     >
//                         Mobile Application Development
//                     </h1>
//                     <p
//                         className={`mt-4 text-md font-bold tracking-wide text-gray-200 ${libreBaskerville.className}`}
//                     >
//                         Mobile is where your customers spend most of their time. We design and
//                         build apps that bring your business into their hands—literally.
//                     </p>
//                 </motion.div>
//             </section>

//             {/* Technologies Section */}
//             <section className="relbg-gradient-to-bl from-gray-700/40 to-black text-white">    

//             <div className="max-w-6xl mx-auto px-6">
//                     <h2
//                         className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-15 mb-4"
//                         style={{ fontFamily: "Valty DEMO" }}
//                     >
//                         Technologies We Use
//                     </h2>

//                     {/* Extra text below heading */}
//                     <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
//                         We leverage cutting-edge frameworks to deliver mobile apps that are
//                         high-performing, scalable, and user-friendly. Our technology choices
//                         ensure faster development, seamless integrations, and future-ready solutions.
//                     </p>

//                     <div className="grid md:grid-cols-2 gap-8">
//                         <div className="p-6 hover:scale-[1.02] transition duration-300 bg-gradient-to-bl from-gray-700/40 to-black rounded-xl border border-t-3 border-gray-800 transition">
//                             {/* <Smartphone className="text-green-400 w-10 h-10 mb-4" /> */}
//                             <h3 className="text-xl flex gap-2 font-semibold mb-2"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M236-345 100-480l440-440h271L236-345ZM540-40 303-277l237-237h271L574-277 811-40H540Z" /></svg> Flutter</h3>
//                             <p className="text-gray-400">
//                                 Build cross-platform apps with a single codebase, cutting costs while
//                                 ensuring high performance.
//                             </p>
//                         </div>
//                         <div className="p-6 hover:scale-[1.02] transition duration-300 bg-gradient-to-bl from-gray-700/40 to-black rounded-xl border border-t-3 border-gray-800 transition">
//                             {/* <Smartphone className="text-blue-400 w-10 h-10 mb-4" /> */}
//                             <h3 className="text-xl font-semibold mb-2"><i className="fa-brands fa-react"></i> React Native</h3>
//                             <p className="text-gray-400">
//                                 Create near-native experiences for iOS and Android, with flexible
//                                 integration into your ecosystem.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//             </section>


//             {/* What You Get Section */}
//             <section className="relative pb-16  text-white">
//                 <div className="max-w-6xl mx-auto px-6">
//                     <h2
//                         className="text-3xl md:text-4xl lg:text-5xl font-bold text-center  mt-15"
//                         style={{ fontFamily: "Valty DEMO" }}>
//                         What You Get
//                     </h2>b
//                     <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
//                         Whether you need a business app, an e-commerce platform, or a large-scale enterprise solution,
//                         we deliver mobile applications built to scale.
//                     </p>

//                     <ul className="space-y-6 list-none">

//                         <li className="border border-t-3 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
//                             <CheckCircle className="text-green-500 w-8 h-8 " />
//                             <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>Engaging UI:</span> <br /> Interactive, visually polished designs that improve retention. </p>
//                         </li>

//                         <li className="border border-t-3 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
//                             <CheckCircle className="text-green-500 w-8 h-8 " />
//                             <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>performance-Optimized Apps:</span> <br /> Fast load times, smooth animations, and reliable offline functionality. </p>
//                         </li>

//                         <li className="border border-t-3 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
//                             <CheckCircle className="text-green-500 w-8 h-8 " />
//                             <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>Integration Ready:  </span> <br /> From APIs to payment systems, we connect your app with everything it needs.</p>
//                         </li>

//                         <li className="border border-t-3 rounded-xl px-4 mb-15 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
//                             <CheckCircle className="text-green-500 w-8 h-8 " />
//                             <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>User-Centric Features::</span> <br />  Push notifications, chat systems, geolocation, in-app purchases, and more.</p>
//                         </li>
//                     </ul>

//                 </div>
//                 <div className="absolute -bottom-2 left-0 w-full mb-3">
//           <div className="relative w-full h-px bg-white/10">
//             <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
//           </div>
//         </div>
//             </section>


//         </>
//     );
// }



"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function MobileDevelopment() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: "Engaging UI",
      desc: "Interactive, visually polished designs that improve retention.",
    },
    {
      title: "Performance-Optimized Apps",
      desc: "Fast load times, smooth animations, and reliable offline functionality.",
    },
    {
      title: "Integration Ready",
      desc: "From APIs to payment systems, we connect your app with everything it needs.",
    },
    {
      title: "User-Centric Features",
      desc: "Push notifications, chat systems, geolocation, in-app purchases, and more.",
    },
  ];

  return (
    <>
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
          <div className="absolute inset-0 bg-black/50"></div>
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
            Mobile Application Development
          </h1>
          <p
            className={`mt-4 text-md font-bold tracking-wide text-gray-200 ${libreBaskerville.className}`}
          >
            Mobile is where your customers spend most of their time. We design and
            build apps that bring your business into their hands—literally.
          </p>
        </motion.div>
      </section>

      {/* Technologies Section - UNCHANGED */}
      <section className="relbg-gradient-to-bl from-gray-700/40 to-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-15 mb-4"
            style={{ fontFamily: "Valty DEMO" }}
          >
            Technologies We Use
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            We leverage cutting-edge frameworks to deliver mobile apps that are
            high-performing, scalable, and user-friendly. Our technology choices
            ensure faster development, seamless integrations, and future-ready solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Flutter */}
            <div className="p-6 hover:scale-[1.02] transition duration-300 bg-gradient-to-bl from-gray-700/40 to-black rounded-xl border border-t-3 border-gray-800 transition">
              <h3 className="text-xl flex gap-2 font-semibold mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M236-345 100-480l440-440h271L236-345ZM540-40 303-277l237-237h271L574-277 811-40H540Z" />
                </svg>{" "}
                Flutter
              </h3>
              <p className="text-gray-400">
                Build cross-platform apps with a single codebase, cutting costs while
                ensuring high performance.
              </p>
            </div>

            {/* React Native */}
            <div className="p-6 hover:scale-[1.02] transition duration-300 bg-gradient-to-bl from-gray-700/40 to-black rounded-xl border border-t-3 border-gray-800 transition">
              <h3 className="text-xl font-semibold mb-2">
                <i className="fa-brands fa-react"></i> React Native
              </h3>
              <p className="text-gray-400">
                Create near-native experiences for iOS and Android, with flexible
                integration into your ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section - DROPDOWN */}
      <section className="relative pb-16 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-15"
            style={{ fontFamily: "Valty DEMO" }}
          >
            What You Get
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Whether you need a business app, an e-commerce platform, or a large-scale enterprise solution,
            we deliver mobile applications built to scale.
          </p>

          <ul className="space-y-6 list-none">
            {features.map((feature, index) => (
              <li
                key={index}
                className="border rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black hover:scale-[1.02] transition duration-300 cursor-pointer"
              >
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
                      {feature.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
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
                      className="mt-3 ml-11 text-gray-300"
                    >
                      {feature.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute -bottom-2 left-0 w-full mb-3">
          <div className="relative w-full h-px bg-white/10">
            <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>
    </>
  );
}
