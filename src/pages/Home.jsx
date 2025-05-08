import React from "react";
import { Download, Mail } from "lucide-react";
import { FaTwitter, FaGithub, FaLinkedin, FaPinterest, FaDribbble } from "react-icons/fa";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
        {/* Profile Illustration */}
        <div className="relative order-1 md:order-none mx-auto md:mx-0 w-full max-w-2xl">
          <div className="aspect-square relative">
            <img
              src={assets.illustration} // Update path based on your project structure
              alt="Profile Illustration"
              className="w-full p-6 sm:p-10 lg:p-14 rounded-3xl object-cover"
            />
            
            {/* Circular Text Button */}
            <div className="absolute bottom-4 sm:bottom-2 left-4 sm:left-2">
              <div className="relative w-24 sm:w-32 h-24 sm:h-32 flex items-center justify-center">
                {/* Rotating Text */}
                <div className="absolute w-full h-full animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      />
                    </defs>
                    <text fontSize="12" textLength="250">
                      <textPath href="#circlePath" startOffset="0">
                        UI/UX Designer · Web Developer · &nbsp;
                      </textPath>
                    </text>
                  </svg>
                </div>
                <button 
                  className="absolute z-10 bg-white text-black font-bold text-base py-3 px-2 sm:py-7 sm:px-3 rounded-full border border-white hover:bg-black hover:text-white transition-colors duration-100">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left order-2 md:order-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
            Crafting ideas into <br className="hidden sm:block" /> digital masterpieces <br className="hidden sm:block" /> through code and design
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
            Explore my latest projects and articles, showcasing my expertise in React.js and web development.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button 
              className="bg-white text-black hover:bg-gray-200 text-sm px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors duration-300"
              aria-label="Download Resume"
            >
              <Download size={16} /> Resume
            </button>
            <button 
              className="text-white border border-white hover:bg-white hover:text-black text-sm px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors duration-300"
              aria-label="Contact Me"
            >
              <Mail size={16} /> Contact
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {[
              { Icon: FaTwitter, label: "Twitter", hoverColor: "hover:text-blue-400" },
              { Icon: FaGithub, label: "GitHub", hoverColor: "hover:text-gray-400" },
              { Icon: FaLinkedin, label: "LinkedIn", hoverColor: "hover:text-blue-600" },
              { Icon: FaPinterest, label: "Pinterest", hoverColor: "hover:text-red-500" },
              { Icon: FaDribbble, label: "Dribbble", hoverColor: "hover:text-pink-500" }
            ].map(({ Icon, label, hoverColor }) => (
              <a 
                key={label}
                href="#" 
                aria-label={label}
                className={`text-white ${hoverColor} text-lg sm:text-xl transition-colors duration-300`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;