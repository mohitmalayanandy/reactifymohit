import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Globe, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home", icon: <Globe className="w-4 h-4" /> },
    { to: "/about", label: "About", icon: <Sparkles className="w-4 h-4" /> },
    { to: "/projects", label: "Projects", icon: <ChevronRight className="w-4 h-4" /> },
    { to: "/resume", label: "Resume", icon: <ChevronRight className="w-4 h-4" /> },
    { to: "/contact", label: "Contact", icon: <ChevronRight className="w-4 h-4" /> }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Animated logo component
  const AnimatedLogo = () => (
    <div className="relative flex items-center">
      <div className="absolute -left-2 -top-2 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 blur-md opacity-70 animate-pulse"></div>
      <div className="relative z-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-2xl">
        Mohit Malaya Nandy
      </div>
    </div>
  );

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-500 ${
        scrolled 
          ? "backdrop-blur-md bg-black/10 dark:bg-slate-900/50" 
          : "bg-transparent"
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 ${scrolled ? 'opacity-90' : 'opacity-0'} transition-opacity duration-500`}></div>
      
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold hover:opacity-90 transition-opacity">
            <AnimatedLogo />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative h-10 flex items-center">
              <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent bottom-0"></div>
              <div className="flex items-center space-x-2 px-2">
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="relative group"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div 
                      className={`
                        absolute inset-0 rounded-lg transition-all duration-300 -z-10 
                        ${isActive(link.to) 
                          ? "bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 shadow-lg shadow-indigo-500/10" 
                          : "opacity-0 group-hover:opacity-100 bg-white/5"}
                      `}
                    ></div>
                    
                    <div 
                      className={`
                        px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300
                        ${isActive(link.to) 
                          ? "text-indigo-400" 
                          : "text-gray-300 hover:text-white"}
                      `}
                    >
                      <span className={`transition-transform duration-300 ${hoveredIndex === idx ? 'scale-110' : 'scale-100'}`}>
                        {link.icon}
                      </span>
                      <span className="font-medium">{link.label}</span>
                      
                      {isActive(link.to) && (
                        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                p-2 rounded-full transition-all duration-300
                ${isMenuOpen 
                  ? "bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20" 
                  : "hover:bg-white/10"}
              `}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X size={24} className="text-white" />
                ) : (
                  <Menu size={24} className="text-gray-300" />
                )}
                <div className={`absolute inset-0 rounded-full bg-indigo-500/30 blur-md transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out relative z-10
          ${isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"}
        `}
      >
        <div className="backdrop-blur-lg bg-black/30 space-y-1 border-t border-white/10 px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`
                 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-3
                ${isActive(link.to)
                  ? "bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/5"}
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-indigo-400">{link.icon}</span>
              <span>{link.label}</span>
              {isActive(link.to) && (
                <div className="ml-auto">
                  <div className="h-2 w-2 rounded-full bg-indigo-500 animate-ping"></div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;