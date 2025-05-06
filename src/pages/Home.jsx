import React from "react";
import { FiDownload, FiMail } from "react-icons/fi";
import { FaTwitter, FaGithub, FaLinkedin, FaPinterest, FaDribbble } from "react-icons/fa";

const Home = () => {
    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-12">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">

                {/* Left - Profile Illustration */}
                <div className="relative w-full md:w-1/2 mb-10 md:mb-0">
                    <img
                        src="/your-path/illustration.png" 
                        alt="Profile Illustration"
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-8 left-8 text-center">
                        <div className="border border-white rounded-full p-4">
                            <p className="text-sm rotate-[270deg] tracking-wider">UI/UX Designer · Web Developer</p>
                            <button className="mt-2 bg-white text-black hover:bg-gray-200 text-sm">Hire Me</button>
                        </div>
                    </div>
                </div>

                {/* Right - Content */}
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                        Turning Vision <br /> Into Reality With <br /> Code And Design.
                    </h1>
                    <p className="text-gray-300 text-lg mb-8">
                        As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-white text-black hover:bg-gray-200 text-sm flex items-center gap-2">
                            <FiDownload /> Resume
                        </button>
                        <button variant="outline" className="text-white border-white hover:bg-white hover:text-black text-sm flex items-center gap-2">
                            <FiMail /> Contact
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6">
                        <FaTwitter className="text-white hover:text-blue-400 cursor-pointer" />
                        <FaGithub className="text-white hover:text-gray-400 cursor-pointer" />
                        <FaLinkedin className="text-white hover:text-blue-600 cursor-pointer" />
                        <FaPinterest className="text-white hover:text-red-500 cursor-pointer" />
                        <FaDribbble className="text-white hover:text-pink-500 cursor-pointer" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;