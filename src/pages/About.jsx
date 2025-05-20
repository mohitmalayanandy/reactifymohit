
import React, { useState, useEffect } from 'react';
import { MessageCircle, Send } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentParticleCount, setCurrentParticleCount] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hey there! Want to know more about my work?", sender: "bot" }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const fullText = "Hello! I'm Mohit, a React developer with a strong passion for crafting clean and dynamic user interfaces. I love turning complex problems into simple, beautiful solutions. I have experience working on full-stack projects, optimizing frontend performance, and integrating with RESTful APIs. I'm always eager to learn and grow in the ever-evolving tech space.";
  
  useEffect(() => {
    // Trigger fade-in animation
    setIsVisible(true);
    
    // Typing effect
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20);

    // Particles generation
    const particleInterval = setInterval(() => {
      if (currentParticleCount < 50) {
        setCurrentParticleCount(prev => prev + 1);
      } else {
        clearInterval(particleInterval);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
      clearInterval(particleInterval);
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage('');
    
    // Simulate response
    setTimeout(() => {
      const responses = [
        "I specialize in building responsive and performant React applications.",
        "My recent work focuses on integrating AI capabilities into web applications.",
        "I'd be happy to discuss potential collaborations! You can reach me at mohit@example.com",
        "I'm currently exploring WebGL and Three.js for immersive web experiences."
      ];
      setMessages(prev => [...prev, { 
        text: responses[Math.floor(Math.random() * responses.length)], 
        sender: "bot" 
      }]);
    }, 1000);
  };

  // Generate array of particle elements
  const particles = [...Array(currentParticleCount)].map((_, i) => {
    const size = Math.random() * 4 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const animDuration = Math.random() * 20 + 10;
    
    return (
      <div 
        key={i}
        className="absolute rounded-full bg-blue-500 opacity-30"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animation: `float ${animDuration}s infinite linear`
        }}
      />
    );
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        {particles}
      </div>
      
      {/* Glowing grid lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full grid grid-cols-12 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full border-r border-blue-500" />
          ))}
        </div>
        <div className="h-full w-full grid grid-rows-12 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-full border-b border-blue-500" />
          ))}
        </div>
      </div>
      
      {/* Main content container with 3D perspective */}
      <div 
        className={`relative z-10 bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-xl p-8 max-w-4xl w-full transform transition-all duration-1000 shadow-2xl border border-blue-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{
          boxShadow: '0 0 40px rgba(59, 130, 246, 0.5)',
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          About Me
        </h1>
        
        <div className="text-lg md:text-xl max-w-2xl mx-auto text-center leading-relaxed">
          {typedText}
          <span className="inline-block w-2 h-6 bg-blue-400 ml-1 animate-pulse"></span>
        </div>
        
        <div className="mt-10 flex justify-center">
          <button 
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg hover:from-blue-500 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            onClick={() => setShowChat(!showChat)}
          >
            <MessageCircle size={18} />
            {showChat ? 'Hide Chat' : 'Connect with Me'}
          </button>
        </div>
      </div>
      
      {/* Chat interface */}
      {showChat && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-gray-900 rounded-lg border border-blue-500 shadow-lg shadow-blue-500/30 flex flex-col z-20">
          <div className="p-3 border-b border-blue-800 bg-gradient-to-r from-blue-900 to-gray-900">
            <h3 className="font-medium">Chat with Mohit</h3>
          </div>
          
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-800 text-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t border-blue-800 flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 bg-gray-800 border border-blue-800 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button 
              className="bg-blue-600 hover:bg-blue-700 rounded-r-lg px-3 py-2"
              onClick={sendMessage}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
          25% { transform: translate(10px, 10px) rotate(90deg); opacity: 0.6; }
          50% { transform: translate(0, 20px) rotate(180deg); opacity: 0.3; }
          75% { transform: translate(-10px, 10px) rotate(270deg); opacity: 0.6; }
          100% { transform: translate(0, 0) rotate(360deg); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default About;