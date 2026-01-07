"use client";
import React from "react";
interface SkillBarProps {
    title: string;
    percent: number;
}

function SkillBar({ title, percent }: SkillBarProps) {
    return (
        <div>
            <div className="flex justify-between mb-2">
                <span>{title}</span>
                <span>{percent}%</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full">
                <div
                    className="bg-white h-2 rounded-full"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
        </div>
    );
}

interface StatBoxProps {
    number: string;
    label: string;
}

function StatBox({ number, label }: StatBoxProps) {
    return (
        <div>
            <h3 className="text-3xl font-bold">{number}</h3>
            <p className="text-gray-400">{label}</p>
        </div>
    );
}

const AboutPage: React.FC = () => {
    return (
        <div className="relative text-white px-10">

            <section className="relative mb-5  w-full h-[80vh] flex flex-col justify-center items-center text-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://c4.wallpaperflare.com/wallpaper/834/602/559/computer-keyboards-wallpaper-preview.jpg"
                        alt="About Banner"
                        className="object-cover h-[80vh] w-[100%] brightness-50"
                    />
                </div>

                {/* Text Content */}
                <div className="relative  z-10">
                    <h5 className="text-xl text-white">Hire us now</h5>
                    <h1 className="text-5xl  text-white">We Are Always Ready To <br /> Take A Perfect Shot</h1>
                    <button className="border-1 bg-white text-black mt-5 px-5 py-2 rounded-full">Get Started</button>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="https://c4.wallpaperflare.com/wallpaper/834/602/559/computer-keyboards-wallpaper-preview.jpg"
                        alt="Editor"
                        width={600}
                        height={100}
                        className="rounded-2xl object-cover"
                    />
                </div>

                {/* Text */}
                <div>
                    <p className="uppercase text-gray-400  tracking-wide">About Us</p>
                    <h2 className="text-4xl font-bold leading-tight">
                        We Always Make The Best
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        At Incology Systems, we believe technology should do more than just function—it should
                        empower businesses, simplify operations, and unlock growth. We are a full-service software
                        agency specializing in custom web applications, mobile apps, digital design, and IT
                        solutions.
                        Our mission is to help companies—from startups to enterprises—leverage modern technology to
                        stay competitive in a fast-changing digital world. We take pride in our ability to design and
                        develop end-to-end systems that are secure, scalable, and user-friendly, while ensuring your
                        brand leaves a lasting impression.
                        With a team of passionate developers, designers, and digital strategists, we deliver solutions
                        tailored to your unique business needs.
                    </p>
                    <button className="mt-6 px-6 py-3 rounded-full bg-white text-black font-semibold w-fit hover:bg-gray-200 transition">
                        Contact Us
                    </button>
                </div>
            </section>

            {/* Skills Section */}
            <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10 items-center">
                {/* Left Side: Skills */}
                <div>
                    <h3 className="text-3xl font-bold mb-4">Our Skills</h3>
                    <p className="text-gray-400 mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>

                    <div className="space-y-6">
                        <SkillBar title="Web Development" percent={90} />
                        <SkillBar title="Mobile App Development" percent={85} />
                        <SkillBar title="Graphic designing" percent={77} />
                    </div>
                </div>

                {/* Right Side: Stats */}
                <div className="grid mt-15 grid-cols-2 gap-6 text-center">
                    <div className="p-6 border-t-3 border border-gray-900 rounded-2xl shadow-md">
                        <StatBox number="20+" label="Year Of Experience" />
                    </div>
                    <div className="p-6 border-t-3 border border-gray-900 rounded-2xl">
                        <StatBox number="1,000+" label="Project Done" />
                    </div>
                    <div className="p-6 border-t-3 border border-gray-900 rounded-2xl shadow-md">
                        <StatBox number="300+" label="Satisfied Client" />
                    </div>
                    <div className="p-6 border-t-3 border border-gray-900 rounded-2xl shadow-md">
                        <StatBox number="64" label="Certified Award" />
                    </div>
                </div>
            </section>

            <div className="absolute -bottom-2 left-0 w-full mb-3">
                <div className="relative w-full h-px bg-gray-800">
                    <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;
