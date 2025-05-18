import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import GradientName from "./GradientName";
import { useTheme } from "./ThemeProvider"; // Make sure this path is correct

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Add error handling and debugging for theme context
  let themeContext;
  try {
    themeContext = useTheme();
    console.log("Theme context loaded:", themeContext);
  } catch (error) {
    console.error("Error loading theme context:", error);
    // Provide fallback values
    themeContext = { isDarkMode: false, toggleTheme: () => console.log("Fallback toggle") };
  }
  
  const { isDarkMode, toggleTheme } = themeContext;

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
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" }
  ];

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Add debugging for theme toggle
  const handleThemeToggle = () => {
    console.log("Theme toggle button clicked");
    console.log("Before toggle, isDarkMode:", isDarkMode);
    toggleTheme();
    // We can't log the updated state here as it won't be updated until the next render
  }

  return (
    <header className={`fixed w-full top-0 z-50 ${scrolled ? "backdrop-blur-xs bg-white/80 dark:bg-black/80 shadow-md" : "bg-white dark:bg-black"} transition-all duration-400`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white hover:opacity-90 transition-opacity">
            <GradientName />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 ${isActive(link.to)
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:text-blue-400 dark:hover:bg-gray-800/50"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme Toggle - Desktop */}
            <button
              onClick={handleThemeToggle}
              className="ml-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center md:hidden space-x-2">
            {/* Theme Toggle - Mobile */}
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen
            ? "max-h-96 opacity-100 border-t border-gray-200 dark:border-gray-800"
            : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-2 bg-white dark:bg-black space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${isActive(link.to)
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:text-blue-400 dark:hover:bg-gray-800/50"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;