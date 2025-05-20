import { useState, useEffect } from "react";
import { Download, Mail, Code, ChevronRight, ExternalLink } from "lucide-react";
import { assets } from "../assets/assets";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverButton, setHoverButton] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  // Futuristic text animation effect
  const title = "Crafting digital realities through code and innovation";
  const [displayedTitle, setDisplayedTitle] = useState("");
  
  useEffect(() => {
    if (isLoaded) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= title.length) {
          setDisplayedTitle(title.substring(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  return (
    <section className="min-h-screen py-24 bg-black text-cyan-400 relative overflow-hidden flex items-center justify-center">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
        {Array.from({ length: 12 }).map((_, rowIndex) => (
          Array.from({ length: 12 }).map((_, colIndex) => (
            <div 
              key={`${rowIndex}-${colIndex}`} 
              className="border border-cyan-500"
            />
          ))
        ))}
      </div>
      
      {/* Animated accent circle */}
      <div 
        className={`absolute rounded-full w-96 h-96 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 blur-3xl transition-all duration-1000 ease-in-out ${isLoaded ? 'scale-100' : 'scale-0'}`}
        style={{
          left: `calc(${mousePosition.x / 20}px - 8rem)`,
          top: `calc(${mousePosition.y / 20}px - 8rem)`,
        }}
      />
      
      {/* Content container */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 relative z-10">
        {/* Profile Illustration with floating elements */}
        <div className="relative order-1 md:order-none mx-auto md:mx-0 w-full max-w-2xl">
          <div className={`aspect-square relative transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 blur-md opacity-70 animate-pulse" />
            
            <div className="absolute inset-1 bg-black rounded-2xl overflow-hidden">
              <img
                src={assets.illustration}
                alt="Profile Illustration"
                className="w-full h-full p-4 object-cover"
              />
              
              {/* Floating tech elements */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md p-2 rounded-lg border border-cyan-500 text-xs flex items-center gap-1 text-cyan-300 transform hover:scale-105 transition-transform">
                <Code size={14} /> Frontend Developer
              </div>
              
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md p-2 rounded-lg border border-purple-500 text-xs flex items-center gap-1 text-purple-300 transform hover:scale-105 transition-transform">
                <ChevronRight size={14} /> Creative Coder
              </div>
            </div>
          </div>
          
          {/* Stat cards */}
          <div className={`grid grid-cols-2 gap-4 mt-4 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-black/70 backdrop-blur-md border border-cyan-900 rounded-xl p-3 group hover:border-cyan-500 transition-colors">
              <div className="text-xs text-cyan-500 mb-1">Experience</div>
              <div className="text-xl font-bold text-white">5+ Years</div>
            </div>
            <div className="bg-black/70 backdrop-blur-md border border-purple-900 rounded-xl p-3 group hover:border-purple-500 transition-colors">
              <div className="text-xs text-purple-500 mb-1">Projects</div>
              <div className="text-xl font-bold text-white">100+</div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center md:text-left order-2 md:order-none">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-sm mb-2 font-medium">
              FULL-STACK DEVELOPER & UI/UX DESIGNER
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {displayedTitle}
              <span className="animate-typing">|</span>
            </h1>
            
            <p className="text-cyan-200 opacity-80 mb-8 max-w-lg">
              Merging cutting-edge technology with visionary design to create immersive digital experiences that push boundaries and redefine possibilities.
            </p>
          </div>
          
          {/* Tech stack */}
          <div className={`flex flex-wrap gap-3 mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {["React", "Next.js", "Three.js", "WebGL", "Tailwind"].map((tech, index) => (
              <span 
                key={tech} 
                className="text-xs px-3 py-1 rounded-full bg-black/50 border border-cyan-900 text-cyan-300"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
         
          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              className="relative bg-gradient-to-r from-cyan-500 to-cyan-600 text-black hover:from-cyan-400 hover:to-cyan-500 px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300 group overflow-hidden"
              aria-label="Download Resume"
              onMouseEnter={() => setHoverButton("resume")}
              onMouseLeave={() => setHoverButton(null)}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={18} /> 
                <span>Resume</span>
              </span>
              <span 
                className={`absolute inset-0 bg-white transition-all duration-300 ${hoverButton === "resume" ? "opacity-20" : "opacity-0"}`}
              />
            </button>
            
            <button
              className="relative bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-950 px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300"
              aria-label="Contact Me"
              onMouseEnter={() => setHoverButton("contact")}
              onMouseLeave={() => setHoverButton(null)}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={18} /> 
                <span>Contact</span>
              </span>
              <span 
                className={`absolute inset-0 bg-cyan-500 transition-all duration-300 ${hoverButton === "contact" ? "opacity-10" : "opacity-0"}`}
              />
            </button>
            
            <button
              className="relative bg-transparent border-0 text-white/70 hover:text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-medium transition-colors duration-300"
              aria-label="View Projects"
            >
              <span className="flex items-center gap-1">
                <span>View Projects</span>
                <ExternalLink size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Particle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400 opacity-50 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 7}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;