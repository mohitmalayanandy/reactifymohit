import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { Send, User, Mail, MessageSquare, Loader, Sparkles, Zap } from "lucide-react";

const Contact = () => {
  // State management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [scanlinePos, setScanlinePos] = useState(0);

  // Particle system for the background
  const [particles, setParticles] = useState([]);

  // Initialize particle effect
  useEffect(() => {
    // Create initial particles
    const newParticles = Array.from({ length: 25 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.25
    }));

    setParticles(newParticles);

    // Animation loop for particles
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + 100) % 100,
        y: (particle.y + particle.speedY + 100) % 100,
        opacity: Math.sin(Date.now() / 2000 + particle.x / 10) * 0.3 + 0.5
      })));

      // Animate scanline
      setScanlinePos(prev => (prev + 1) % 100);

      // Cycle animation phase
      setAnimationPhase(prev => (prev + 1) % 120);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Handle input changes
  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Identity verification required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Communication protocol missing";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid communication protocol format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Transmission content required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Insufficient data for transmission";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Define constants for EmailJS credentials
  const SERVICE_ID = "service_3t2csm9";
  const TEMPLATE_ID = "template_c8ntk2q"; // This might be incorrect if this is actually a template ID; you should double-check it.
  const PUBLIC_KEY = "qf6VY5_Q6qEofK7DV";

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(true);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };


  // Get dynamic glow color based on field and animation phase
  const getGlowColor = (field) => {
    const baseColors = {
      name: '#41c7ff',
      email: '#7341ff',
      message: '#41ffe1',
      button: '#41b0ff'
    };

    if (field !== activeField) return baseColors[field];

    // Pulse effect for active field
    const intensity = Math.sin(animationPhase / 10) * 50;
    const color = baseColors[field];
    return color;
  };

  return (
    <div className="relative min-h-screen pt-20 flex flex-col justify-center items-center bg-black px-6 py-12 overflow-hidden">
      {/* Animated background with grid and particles */}
      <div className="absolute inset-0 bg-black z-0">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(65, 184, 255, 0.3) 2px, transparent 0), linear-gradient(to right, rgba(65, 184, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(65, 184, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px, 50px 50px, 50px 50px'
          }}>
        </div>

        {/* Particles */}
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-blue-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px rgba(65, 184, 255, ${particle.opacity})`
            }}
          ></div>
        ))}

        {/* Scanline effect */}
        <div
          className="absolute w-full h-px bg-blue-400 opacity-30"
          style={{
            top: `${scanlinePos}%`,
            boxShadow: '0 0 10px #41b8ff'
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-lg">
        {/* Glowing borders */}
        <div className="absolute inset-0 bg-transparent rounded-2xl"
          style={{
            boxShadow: `0 0 20px rgba(65, 184, 255, 0.3), 
                         inset 0 0 15px rgba(65, 184, 255, 0.2)`,
            padding: '2px'
          }}>
        </div>

        {/* Holographic header */}
        <div
          className="relative overflow-hidden rounded-t-2xl bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-md p-8 border-b border-blue-500/30"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(16, 24, 39, 0.9) 0%, rgba(17, 24, 39, 0.8) 100%)'
          }}
        >
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-center"
              style={{ textShadow: '0 0 15px rgba(65, 199, 255, 0.5)' }}>
              NEURAL LINK
            </h1>

            <div className="mt-2 flex justify-center items-center">
              <Sparkles size={16} className="text-cyan-300 mr-2" />
              <p className="text-blue-100 text-center text-sm uppercase tracking-widest">
                Quantum Communication Interface
              </p>
              <Sparkles size={16} className="text-cyan-300 ml-2" />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
          <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-transparent to-blue-400"></div>
          <div className="absolute bottom-0 left-8 w-8 h-8 border-l-2 border-b-2 border-blue-400/30 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-8 w-8 h-8 border-r-2 border-b-2 border-blue-400/30 rounded-br-lg"></div>
        </div>

        {/* Content area with glassmorphism */}
        <div className="backdrop-blur-md bg-gradient-to-b from-gray-900/90 to-black/90 rounded-b-2xl p-8 pb-6">
          {submitted ? (
            <div className="text-center py-8">
              {/* Success animation */}
              <div className="mb-6 relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto flex items-center justify-center">
                  <Zap size={32} className="text-white" />
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: '0 0 30px rgba(65, 184, 255, 0.6)'
                  }}></div>
              </div>

              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                TRANSMISSION COMPLETE
              </h2>

              <p className="text-blue-100 mb-6">
                Your neural signal has been successfully transmitted. Expect response within 24 hours.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="relative overflow-hidden group px-6 py-3 rounded-lg bg-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, rgba(65, 184, 255, 0.15), rgba(65, 239, 255, 0.15))',
                  boxShadow: '0 0 15px rgba(65, 184, 255, 0.3), inset 0 0 5px rgba(65, 184, 255, 0.2)'
                }}
              >
                <span className="relative z-10 text-white font-semibold flex items-center">
                  <Sparkles size={16} className="mr-2" />
                  <span>New Transmission</span>
                </span>
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-blue-600/40 to-cyan-600/40"></div>
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Name input */}
              <div
                className="relative"
                style={{
                  boxShadow: activeField === 'name' ? `0 0 15px ${getGlowColor('name')}` : 'none',
                  transition: 'box-shadow 0.3s'
                }}
              >
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User size={18} style={{ color: getGlowColor('name') }} />
                </div>

                <input
                  type="text"
                  placeholder="YOUR IDENTITY"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField(null)}
                  className={`w-full pl-10 pr-4 py-4 bg-transparent border rounded-lg text-blue-50 placeholder-blue-300/50 focus:outline-none transition-all duration-300 uppercase tracking-wider ${errors.name
                    ? 'border-red-500/70 focus:border-red-400'
                    : activeField === 'name'
                      ? 'border-blue-400/70 border-2'
                      : 'border-blue-500/30 hover:border-blue-400/50'
                    }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(25, 34, 49, 0.7), rgba(17, 24, 39, 0.4))'
                  }}
                />

                {/* Decorative corner bracket */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-400/70"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-400/70"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-400/70"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-400/70"></div>

                {errors.name && (
                  <div className="mt-1 flex items-center text-red-400 text-xs">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></div>
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Email input */}
              <div
                className="relative"
                style={{
                  boxShadow: activeField === 'email' ? `0 0 15px ${getGlowColor('email')}` : 'none',
                  transition: 'box-shadow 0.3s'
                }}
              >
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail size={18} style={{ color: getGlowColor('email') }} />
                </div>

                <input
                  type="email"
                  placeholder="COMMUNICATION PROTOCOL"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                  className={`w-full pl-10 pr-4 py-4 bg-transparent border rounded-lg text-blue-50 placeholder-blue-300/50 focus:outline-none transition-all duration-300 uppercase tracking-wider ${errors.email
                    ? 'border-red-500/70 focus:border-red-400'
                    : activeField === 'email'
                      ? 'border-blue-400/70 border-2'
                      : 'border-blue-500/30 hover:border-blue-400/50'
                    }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(25, 34, 49, 0.7), rgba(17, 24, 39, 0.4))'
                  }}
                />

                {/* Decorative corner bracket */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-400/70"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-400/70"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-400/70"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-400/70"></div>

                {errors.email && (
                  <div className="mt-1 flex items-center text-red-400 text-xs">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></div>
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Message input */}
              <div
                className="relative"
                style={{
                  boxShadow: activeField === 'message' ? `0 0 15px ${getGlowColor('message')}` : 'none',
                  transition: 'box-shadow 0.3s'
                }}
              >
                <div className="absolute top-3 left-0 flex items-start pl-3 pointer-events-none">
                  <MessageSquare size={18} style={{ color: getGlowColor('message') }} />
                </div>

                <textarea
                  rows="2"
                  placeholder="TRANSMISSION DATA"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  className={`w-full pl-10 pr-4 py-3 bg-transparent border rounded-lg text-blue-50 placeholder-blue-300/50 focus:outline-none transition-all duration-300 ${errors.message
                    ? 'border-red-500/70 focus:border-red-400'
                    : activeField === 'message'
                      ? 'border-blue-400/70 border-2'
                      : 'border-blue-500/30 hover:border-blue-400/50'
                    }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(25, 34, 49, 0.7), rgba(17, 24, 39, 0.4))'
                  }}
                />

                {/* Decorative corner bracket */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-400/70"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-400/70"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-400/70"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-400/70"></div>

                {errors.message && (
                  <div className="mt-1 flex items-center text-red-400 text-xs">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></div>
                    {errors.message}
                  </div>
                )}

                {/* Character count */}
                <div className="absolute bottom-3 right-3 text-xs text-blue-400/70">
                  {formData.message.length} / 500
                </div>
              </div>

              {/* Submit button with futuristic design */}
              <div className="relative" style={{
                boxShadow: isSubmitting ? '0 0 20px rgba(65, 184, 255, 0.6)' : 'none',
                transition: 'box-shadow 0.3s'
              }}>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden group"
                >
                  <div className="relative z-10 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-6 rounded-lg uppercase tracking-wider">
                    {isSubmitting ? (
                      <>
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="relative z-10 flex items-center">
                          <Loader className="animate-spin mr-2" size={18} />
                          <span>ENCRYPTING...</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>TRANSMIT</span>
                      </>
                    )}
                  </div>

                  {/* Animated border for button */}
                  <div className="absolute -inset-px rounded-lg overflow-hidden">
                    <div className="absolute inset-0" style={{
                      background: 'conic-gradient(from 180deg at 50% 50%, #41b0ff 0deg, #41fff3 72deg, #4189ff 144deg, #41d7ff 216deg, #41f7ff 288deg, #41b0ff 360deg)',
                      animation: 'spin 4s linear infinite',
                      opacity: isSubmitting ? 0.9 : 0.7
                    }}></div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: 'inset 0 0 20px rgba(65, 215, 255, 0.5)'
                    }}>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Alternative contact display */}
          <div className="mt-8 pt-6 relative">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

            <div className="text-center space-y-3">
              <div className="inline-flex items-center">
                <div className="h-px w-6 bg-blue-500/30"></div>
                <p className="text-blue-300 text-xs tracking-widest uppercase mx-2">Quantum Entanglement Channel</p>
                <div className="h-px w-6 bg-blue-500/30"></div>
              </div>

              <a
                href="#"
                className="inline-block text-blue-400 hover:text-cyan-300 transition-colors duration-300 group"
                onClick={(e) => e.preventDefault()}
              >
                <span className="flex items-center bg-gradient-to-r from-blue-900/60 to-cyan-900/60 px-4 py-2 rounded-lg border border-blue-500/20">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse group-hover:animate-ping"></span>
                  moitoxin@gmail.com
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">[encrypted]</span>
                </span>
              </a>
            </div>
          </div>

          {/* Decorative circuit lines */}
          <div className="absolute bottom-0 left-1/4 w-1/2 h-8">
            <div className="absolute left-0 bottom-0 w-2 h-8 border-l border-b border-blue-500/30"></div>
            <div className="absolute left-1/4 bottom-0 w-2 h-4 border-l border-b border-blue-500/30"></div>
            <div className="absolute left-2/4 bottom-0 w-2 h-6 border-l border-b border-blue-500/30"></div>
            <div className="absolute left-3/4 bottom-0 w-2 h-3 border-l border-b border-blue-500/30"></div>
            <div className="absolute right-0 bottom-0 w-2 h-8 border-l border-b border-blue-500/30"></div>
          </div>
        </div>
      </div>

      {/* Status indicators */}
      <div className="mt-8 flex space-x-2 items-center">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
        <span className="text-blue-300 text-xs tracking-wider uppercase">System Online</span>
        <span className="px-2 text-blue-500/70">|</span>
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <span className="text-blue-300 text-xs tracking-wider uppercase">Quantum Encryption Enabled</span>
      </div>
    </div>
  );
};

export default Contact;








// import { useState } from "react";
// import emailjs from "emailjs-com";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, message } = formData;

//     if (!name || !email || !message) {
//       toast.error("Please fill out all fields.");
//       return;
//     }

//     // Define constants for EmailJS credentials
//     const SERVICE_ID = "service_3t2csm9";
//     const TEMPLATE_ID = "template_c8ntk2q"; // This might be incorrect if this is actually a template ID; you should double-check it.
//     const PUBLIC_KEY = "qf6VY5_Q6qEofK7DV";

//     // Inside handleSubmit function
//     emailjs
//       .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
//       .then(() => {
//         toast.success("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error("Something went wrong. Please try again.");
//       });
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-black px-6 py-12">
//       <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 text-center">
//         Contact Me
//       </h1>
//       <p className="text-lg text-gray-700 text-center mb-8 max-w-xl">
//         Have a project in mind or just want to connect? Feel free to reach out!
//       </p>
//       <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <textarea
//           name="message"
//           rows="2"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//         ></textarea>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
//         >
//           Send Message
//         </button>
//       </form>

//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default Contact;