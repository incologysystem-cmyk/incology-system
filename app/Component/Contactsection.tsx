"use client";
import { MdEmail, MdHeadsetMic } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi"; // Example top icon

export default function ContactSection() {
  return (
    <section className="text-white flex flex-col items-center py-16 px-6 relative">
      {/* 🔹 Top Heading Section */}
      <div className="text-center max-w-2xl mb-12">
        {/* Icon with square box */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-black px-4 py-2 rounded-full border border-neutral-700 shadow-md shadow-black/40">
            <BiPhoneCall className="text-lg text-white" />
            Contact
          </div>
        </div>
        <h2 className="text-4xl font-bold">
          Reach Us <span className="italic text-gray-300">Anytime</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Have questions or need help? We’re here for you
        </p>
      </div>

      {/* 🔹 Main Grid Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Left Side */}
        <div className="space-y-6 w-[80%] mx-auto">
          {/* Email Us Card */}
          <div className="bg-[#0A0E14] border border-gray-800 rounded-2xl p-8  transition group shadow-inner shadow-[rgba(207,231,255,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 flex items-center justify-center rounded-md bg-[#10131C] border border-gray-800 shadow-inner shadow-[rgba(207,231,255,0.2)]">
                <MdEmail className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-semibold">Email Us</h3>
            </div>
            <p className="text-gray-400 mt-2">
              Facing technical challenges or product concerns? <br />
              We're here to assist
            </p>
            <a
              href="mailto:incologysystem@gmail.com"
              className="text-white mt-3 inline-block underline"
            >
              incologysystem@gmail.com
            </a>
          </div>

          {/* Contact Sales Card */}
          <div className="bg-[#04070D] border border-gray-800 rounded-2xl p-8 transition group shadow-inner shadow-[rgba(207,231,255,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 flex items-center justify-center rounded-md bg-[#10131C] border border-gray-800 shadow-inner shadow-[rgba(207,231,255,0.2)]">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-semibold">Contact Sales</h3>
            </div>
            <p className="text-gray-400 mt-2">
              Let’s collaborate on custom solutions or discuss product insights
            </p>
            <a href="#" className="text-white mt-3 inline-block underline">
              Book a call
            </a>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-[#0A0E14] border border-gray-800 rounded-2xl p-6 text-center group shadow-inner shadow-[rgba(207,231,255,0.2)]">
          {/* Icon on top */}
          {/* <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-md border border-gray-800 bg-[#10131C] shadow-inner shadow-[rgba(207,231,255,0.2)]">
              <MdHeadsetMic className="text-4xl text-white" />
            </div>
          </div> */}

          {/* Heading */}
          <h2 className="text-2xl font-semibold mb-6">
            We’d love to help! Let us know how
          </h2>

          <form className="space-y-4 text-left">
            {/* Full Name */}
            <div>
              <label className="block mb-1 text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="Ikta Sollork"
                className="w-full bg-transparent border border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-300">Email Address</label>
              <input
                type="email"
                placeholder="incologysystem@gmail.com"
                className="w-full bg-transparent border border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-white"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-1 text-gray-300">
                Subject Of Interest
              </label>
              <input
                type="text"
                placeholder="Regarding Product"
                className="w-full bg-transparent border border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-white"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-gray-300">
                How may we assist you?
              </label>
              <textarea
                rows={4}
                placeholder="Give us more info.."
                className="w-full bg-transparent border border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-white"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#0A0E14] border border-neutral-800 text-white py-2 rounded-lg flex justify-center items-center gap-2 relative group overflow-hidden transition-all duration-300"
            >
              Send Your Message
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-30 h-[3px] 
               bg-gradient-to-r from-transparent via-white to-transparent 
               opacity-90 transition-all duration-700 
               group-hover:w-full group-hover:left-0 group-hover:translate-x-0"
              ></span>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute -bottom-2 left-0 w-full">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}