import { useState, useEffect } from 'react';
import {
  FaTwitter, FaGithub, FaLinkedin, FaPinterest, FaInstagram, 
  FaFacebook, FaYoutube, FaTiktok, FaReddit, FaSnapchatGhost, 
  FaTwitch, FaDiscord, FaMedium, FaDribbble, FaBehance, 
  FaWhatsapp, FaTelegramPlane, FaEnvelope, FaArrowUp, FaMapMarkerAlt, FaPhone
} from "react-icons/fa";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [theme, setTheme] = useState('light');
  const currentYear = new Date().getFullYear();
  
  // Social media platforms grouped by category
  const socialPlatforms = {
    professional: [
      { Icon: FaLinkedin, label: "LinkedIn", href: "#", hoverColor: "hover:text-blue-600" },
      { Icon: FaGithub, label: "GitHub", href: "#", hoverColor: "hover:text-gray-400" },
      { Icon: FaMedium, label: "Medium", href: "#", hoverColor: "hover:text-green-600" },
      { Icon: FaBehance, label: "Behance", href: "#", hoverColor: "hover:text-blue-500" },
      { Icon: FaDribbble, label: "Dribbble", href: "#", hoverColor: "hover:text-pink-400" },
    ],
    social: [
      { Icon: FaTwitter, label: "Twitter", href: "#", hoverColor: "hover:text-blue-400" },
      { Icon: FaInstagram, label: "Instagram", href: "#", hoverColor: "hover:text-pink-500" },
      { Icon: FaFacebook, label: "Facebook", href: "#", hoverColor: "hover:text-blue-700" },
      { Icon: FaPinterest, label: "Pinterest", href: "#", hoverColor: "hover:text-red-500" },
      { Icon: FaSnapchatGhost, label: "Snapchat", href: "#", hoverColor: "hover:text-yellow-400" },
    ],
    content: [
      { Icon: FaYoutube, label: "YouTube", href: "#", hoverColor: "hover:text-red-600" },
      { Icon: FaTiktok, label: "TikTok", href: "#", hoverColor: "hover:text-gray-800" },
      { Icon: FaTwitch, label: "Twitch", href: "#", hoverColor: "hover:text-purple-500" },
      { Icon: FaReddit, label: "Reddit", href: "#", hoverColor: "hover:text-orange-500" },
    ],
    messaging: [
      { Icon: FaDiscord, label: "Discord", href: "#", hoverColor: "hover:text-indigo-400" },
      { Icon: FaWhatsapp, label: "WhatsApp", href: "#", hoverColor: "hover:text-green-500" },
      { Icon: FaTelegramPlane, label: "Telegram", href: "#", hoverColor: "hover:text-blue-400" },
      { Icon: FaEnvelope, label: "Email", href: "mailto:contact@mohit.com", hoverColor: "hover:text-yellow-500" },
    ]
  };

  // Footer navigation links
  const footerLinks = {
    company: [
      { label: "About", href: "#" },
      { label: "Services", href: "#" },
      { label: "Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    resources: [
      { label: "Blog", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Downloads", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
    ]
  };

  // Back to top button visibility logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand/Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Mohit's Portfolio</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Creating innovative digital solutions with a focus on user experience and performance.
            </p>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-gray-500 dark:text-gray-400">
                <FaMapMarkerAlt />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                123 Tech Street, San Francisco, CA 94107
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-gray-500 dark:text-gray-400">
                <FaPhone />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                +1 (555) 123-4567
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-gray-500 dark:text-gray-400">
                <FaEnvelope />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                contact@mohit.com
              </p>
            </div>
          </div>
          
          {/* Footer Links - Three Columns */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-300 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Social Media Section */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4 text-center">Connect With Me</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(socialPlatforms).map(([category, platforms]) => (
              <div key={category} className="space-y-3">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {platforms.map(({ Icon, label, href, hoverColor }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`text-gray-600 dark:text-gray-400 ${hoverColor} text-lg transition-colors duration-300`}
                      title={label}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
            © {currentYear} <span className="font-semibold">Mohit</span>. Built with ❤️ using React & Tailwind CSS.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-4 items-center">
            <button
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-800 dark:bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 z-50"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;














// import { useState, useEffect } from 'react';
// import {
//   FaTwitter, FaGithub, FaLinkedin, FaPinterest, FaInstagram, 
//   FaFacebook, FaYoutube, FaTiktok, FaReddit, FaSnapchatGhost, 
//   FaTwitch, FaDiscord, FaMedium, FaDribbble, FaBehance, 
//   FaWhatsapp, FaTelegramPlane, FaEnvelope, FaArrowUp, FaMapMarkerAlt, FaPhone
// } from "react-icons/fa";

// const Footer = () => {
//   const [showBackToTop, setShowBackToTop] = useState(false);
//   const [theme, setTheme] = useState('dark'); // Default to dark for futuristic look
//   const currentYear = new Date().getFullYear();
  
//   // Social media platforms grouped by category
//   const socialPlatforms = {
//     professional: [
//       { Icon: FaLinkedin, label: "LinkedIn", href: "#", hoverColor: "hover:text-blue-400" },
//       { Icon: FaGithub, label: "GitHub", href: "#", hoverColor: "hover:text-purple-400" },
//       { Icon: FaMedium, label: "Medium", href: "#", hoverColor: "hover:text-green-400" },
//       { Icon: FaBehance, label: "Behance", href: "#", hoverColor: "hover:text-blue-300" },
//       { Icon: FaDribbble, label: "Dribbble", href: "#", hoverColor: "hover:text-pink-400" },
//     ],
//     social: [
//       { Icon: FaTwitter, label: "Twitter", href: "#", hoverColor: "hover:text-blue-400" },
//       { Icon: FaInstagram, label: "Instagram", href: "#", hoverColor: "hover:text-pink-400" },
//       { Icon: FaFacebook, label: "Facebook", href: "#", hoverColor: "hover:text-blue-500" },
//       { Icon: FaPinterest, label: "Pinterest", href: "#", hoverColor: "hover:text-red-400" },
//       { Icon: FaSnapchatGhost, label: "Snapchat", href: "#", hoverColor: "hover:text-yellow-400" },
//     ],
//     content: [
//       { Icon: FaYoutube, label: "YouTube", href: "#", hoverColor: "hover:text-red-500" },
//       { Icon: FaTiktok, label: "TikTok", href: "#", hoverColor: "hover:text-purple-300" },
//       { Icon: FaTwitch, label: "Twitch", href: "#", hoverColor: "hover:text-purple-400" },
//       { Icon: FaReddit, label: "Reddit", href: "#", hoverColor: "hover:text-orange-400" },
//     ],
//     messaging: [
//       { Icon: FaDiscord, label: "Discord", href: "#", hoverColor: "hover:text-indigo-300" },
//       { Icon: FaWhatsapp, label: "WhatsApp", href: "#", hoverColor: "hover:text-green-400" },
//       { Icon: FaTelegramPlane, label: "Telegram", href: "#", hoverColor: "hover:text-blue-300" },
//       { Icon: FaEnvelope, label: "Email", href: "mailto:contact@mohit.com", hoverColor: "hover:text-cyan-300" },
//     ]
//   };

//   // Footer navigation links
//   const footerLinks = {
//     company: [
//       { label: "About", href: "#" },
//       { label: "Services", href: "#" },
//       { label: "Team", href: "#" },
//       { label: "Careers", href: "#" },
//       { label: "Contact", href: "#" },
//     ],
//     resources: [
//       { label: "Blog", href: "#" },
//       { label: "Documentation", href: "#" },
//       { label: "Resources", href: "#" },
//       { label: "Downloads", href: "#" },
//     ],
//     legal: [
//       { label: "Privacy Policy", href: "#" },
//       { label: "Terms of Service", href: "#" },
//       { label: "Cookie Policy", href: "#" },
//       { label: "GDPR", href: "#" },
//     ]
//   };

//   // Back to top button visibility logic
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowBackToTop(true);
//       } else {
//         setShowBackToTop(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
    
//     // Check system preference for dark mode
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       setTheme('dark');
//     }

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   // Neon border animation class for links
//   const neonLinkClass = "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out";

//   return (
//     <footer className={`relative overflow-hidden ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10 z-0"></div>
      
//       {/* Glowing Orbs (For futuristic effect) */}
//       <div className="absolute top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-5 z-0"></div>
//       <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-5 z-0"></div>
      
//       {/* Digital Grid Pattern */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')] opacity-40 z-0"></div>
      
//       {/* Main Footer Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Upper Footer with Futuristic Border */}
//         <div className="py-12 relative border-b border-opacity-20" style={{
//           borderImage: 'linear-gradient(to right, transparent, rgba(138, 75, 255, 0.5), rgba(56, 182, 255, 0.5), transparent) 1',
//           borderImageSlice: '1'
//         }}>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Brand/Company Info with Futuristic Style */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
//                 Mohit's Portfolio
//               </h3>
//               <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//                 Creating innovative digital solutions with a focus on user experience and cutting-edge technology.
//               </p>
              
//               {/* Contact Info with Hover Effects */}
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-4 group">
//                   <div className={`flex-shrink-0 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} group-hover:scale-110 transition-transform duration-300`}>
//                     <FaMapMarkerAlt />
//                   </div>
//                   <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//                     123 Tech Street, San Francisco, CA 94107
//                   </p>
//                 </div>
                
//                 <div className="flex items-start space-x-4 group">
//                   <div className={`flex-shrink-0 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} group-hover:scale-110 transition-transform duration-300`}>
//                     <FaPhone />
//                   </div>
//                   <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//                     +1 (555) 123-4567
//                   </p>
//                 </div>
                
//                 <div className="flex items-start space-x-4 group">
//                   <div className={`flex-shrink-0 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} group-hover:scale-110 transition-transform duration-300`}>
//                     <FaEnvelope />
//                   </div>
//                   <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//                     contact@mohit.com
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Footer Links with Futuristic Hover Effects */}
//             <div>
//               <h3 className={`text-base font-medium mb-6 ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`}>
//                 Company
//               </h3>
//               <ul className="space-y-3">
//                 {footerLinks.company.map(link => (
//                   <li key={link.label}>
//                     <a 
//                       href={link.href} 
//                       className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} ${neonLinkClass}`}
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div>
//               <h3 className={`text-base font-medium mb-6 ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`}>
//                 Resources
//               </h3>
//               <ul className="space-y-3">
//                 {footerLinks.resources.map(link => (
//                   <li key={link.label}>
//                     <a 
//                       href={link.href} 
//                       className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} ${neonLinkClass}`}
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div>
//               <h3 className={`text-base font-medium mb-6 ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`}>
//                 Legal
//               </h3>
//               <ul className="space-y-3">
//                 {footerLinks.legal.map(link => (
//                   <li key={link.label}>
//                     <a 
//                       href={link.href} 
//                       className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} ${neonLinkClass}`}
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
        
//         {/* Social Media Section with Futuristic Design */}
//         <div className="py-8">
//           <h3 className={`text-base font-medium mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500`}>
//             Connect With Me
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {Object.entries(socialPlatforms).map(([category, platforms]) => (
//               <div key={category} className="space-y-4">
//                 <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} uppercase tracking-wider`}>
//                   {category}
//                 </h4>
//                 <div className="flex flex-wrap gap-4">
//                   {platforms.map(({ Icon, label, href, hoverColor }) => (
//                     <a
//                       key={label}
//                       href={href}
//                       aria-label={label}
//                       className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} ${hoverColor} text-lg transition-all duration-300 hover:scale-125 hover:rotate-6`}
//                       title={label}
//                     >
//                       <Icon />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       {/* Copyright Bar with Glassmorphism Effect */}
//       <div className={`relative z-10 ${theme === 'dark' ? 'bg-gray-900 bg-opacity-50' : 'bg-white bg-opacity-10'} backdrop-filter backdrop-blur-sm`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between">
//           <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-center sm:text-left`}>
//             © {currentYear} <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Mohit</span>. Built with 
//             <span className="inline-block mx-1 animate-pulse">❤️</span> using React & Tailwind CSS.
//           </p>
//           <div className="mt-4 sm:mt-0 flex space-x-6 items-center">
//             <button
//               className={`text-sm ${theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300`}
//               onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//             >
//               {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//             </button>
//             <a href="#" className={`text-sm ${theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300`}>
//               Sitemap
//             </a>
//           </div>
//         </div>
//       </div>
      
//       {/* Back to top button with futuristic style */}
//       {showBackToTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 z-50 animate-bounce"
//           aria-label="Back to top"
//           style={{
//             boxShadow: `0 0 15px rgba(59, 130, 246, 0.5)`,
//           }}
//         >
//           <FaArrowUp />
//         </button>
//       )}
//     </footer>
//   );
// };

// export default Footer;