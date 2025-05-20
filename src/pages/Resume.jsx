import { Download, Star, BarChart, Award, Clock, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [isHolographicMode, setIsHolographicMode] = useState(false);
  const [skillLevels, setSkillLevels] = useState({
    javascript: 92,
    react: 88,
    design: 75,
    communication: 95,
    problemSolving: 90
  });
  
  const samplePdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  
  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 15);
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);
    
    setTimeout(() => {
      clearInterval(interval);
      window.open(samplePdfUrl, '_blank');
      setIsDownloading(false);
      setDownloadProgress(0);
    }, 2500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillLevels(prev => ({
        ...prev,
        javascript: prev.javascript + (Math.random() * 2 - 1),
        react: prev.react + (Math.random() * 2 - 1),
        design: prev.design + (Math.random() * 2 - 1),
        communication: prev.communication + (Math.random() * 2 - 1),
        problemSolving: prev.problemSolving + (Math.random() * 2 - 1),
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const sections = {
    overview: (
      <div className="space-y-6 animate-fadeIn">
        <div className="p-4 bg-blue-900/20 backdrop-blur-lg rounded-lg border border-blue-500/30 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-400 mb-3">Professional Summary</h2>
          <p className="text-gray-300">
            Full-stack developer with 5+ years of experience building high-performance web applications.
            Specialized in React, Next.js, and modern JavaScript frameworks with a focus on creating
            responsive, accessible, and innovative user interfaces.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="p-4 bg-blue-900/20 backdrop-blur-lg rounded-lg border border-blue-500/30 shadow-lg flex-1">
            <div className="flex items-center mb-3">
              <Star className="h-5 w-5 text-yellow-400 mr-2" />
              <h3 className="text-xl font-bold text-blue-400">Core Competencies</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                Frontend Architecture
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                UI/UX Development
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                API Integration
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                Performance Optimization
              </li>
            </ul>
          </div>
          
          <div className="p-4 bg-blue-900/20 backdrop-blur-lg rounded-lg border border-blue-500/30 shadow-lg flex-1">
            <div className="flex items-center mb-3">
              <Award className="h-5 w-5 text-yellow-400 mr-2" />
              <h3 className="text-xl font-bold text-blue-400">Achievements</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                Reduced page load time by 40%
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                AWS Certified Solutions Architect
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                Speaker at React Conference 2024
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    skills: (
      <div className="space-y-6 animate-fadeIn">
        <div className="p-4 bg-blue-900/20 backdrop-blur-lg rounded-lg border border-blue-500/30 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Live Skill Analytics</h2>
          
          <div className="space-y-5">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">JavaScript</span>
                <span className="text-blue-400 font-mono">{Math.round(skillLevels.javascript)}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-700 ease-in-out" 
                  style={{ width: `${skillLevels.javascript}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">React</span>
                <span className="text-blue-400 font-mono">{Math.round(skillLevels.react)}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-700 ease-in-out" 
                  style={{ width: `${skillLevels.react}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">UI/UX Design</span>
                <span className="text-blue-400 font-mono">{Math.round(skillLevels.design)}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-700 ease-in-out" 
                  style={{ width: `${skillLevels.design}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Communication</span>
                <span className="text-blue-400 font-mono">{Math.round(skillLevels.communication)}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-700 ease-in-out" 
                  style={{ width: `${skillLevels.communication}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Problem Solving</span>
                <span className="text-blue-400 font-mono">{Math.round(skillLevels.problemSolving)}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-700 ease-in-out" 
                  style={{ width: `${skillLevels.problemSolving}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    experience: (
      <div className="space-y-6 animate-fadeIn">
        <div className="p-4 bg-blue-900/20 backdrop-blur-lg rounded-lg border border-blue-500/30 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Career Timeline</h2>
          
          <div className="relative pl-8 border-l border-blue-500/50 space-y-8">
            <div className="relative">
              <div className="absolute -left-10 w-6 h-6 bg-blue-900 border-2 border-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-bold text-blue-400">Senior Frontend Developer</h3>
                <div className="ml-4 text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">Current</div>
              </div>
              <div className="text-sm text-gray-400 mb-2 flex items-center">
                <Clock className="h-3 w-3 mr-1" /> 2023 - Present | TechFusion Inc.
              </div>
              <p className="text-gray-300">
                Lead development of next-generation web applications using React and WebGL.
                Implemented AI-assisted user interfaces and real-time data visualizations.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 w-6 h-6 bg-blue-900 border-2 border-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-1">Frontend Developer</h3>
              <div className="text-sm text-gray-400 mb-2 flex items-center">
                <Clock className="h-3 w-3 mr-1" /> 2021 - 2023 | InnovateSoft
              </div>
              <p className="text-gray-300">
                Developed responsive web applications using React and Next.js.
                Created component libraries and implemented state management solutions.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 w-6 h-6 bg-blue-900 border-2 border-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-1">Junior Web Developer</h3>
              <div className="text-sm text-gray-400 mb-2 flex items-center">
                <Clock className="h-3 w-3 mr-1" /> 2019 - 2021 | WebSphere Solutions
              </div>
              <p className="text-gray-300">
                Built and maintained client websites using HTML, CSS, and JavaScript.
                Collaborated with designers to implement pixel-perfect UIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    contact: (
      <div className="space-y-6 animate-fadeIn">
        <div className="p-4 bg-blue-900/20 backdrop-blur-lg rounded-lg border border-blue-500/30 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Connect With Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-900/30 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-800 mr-3">
                <Mail className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Email</div>
                <div className="text-blue-300">contact@myportfolio.dev</div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-900/30 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-800 mr-3">
                <svg className="h-5 w-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400">LinkedIn</div>
                <div className="text-blue-300">linkedin.com/in/myprofile</div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-900/30 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-800 mr-3">
                <svg className="h-5 w-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400">GitHub</div>
                <div className="text-blue-300">github.com/myusername</div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-900/30 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-800 mr-3">
                <svg className="h-5 w-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400">Twitter</div>
                <div className="text-blue-300">twitter.com/myhandle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className={`min-h-screen pt-20 flex flex-col justify-center items-center px-6 py-12 ${isHolographicMode ? 'bg-gradient-to-br from-blue-900/90 to-black/95' : 'bg-gradient-to-br from-gray-900 to-black'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          {isHolographicMode && (
            <>
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
              <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </>
          )}
        </div>
      </div>
      
      <div className={`relative max-w-4xl w-full ${isHolographicMode ? 'bg-blue-900/10 backdrop-blur-lg border border-blue-500/20' : 'bg-gray-800/90'} shadow-2xl rounded-xl p-6 transition-all duration-500`}>
        {/* Header with futuristic design */}
        <div className="mb-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className={`text-4xl md:text-5xl font-bold ${isHolographicMode ? 'bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent' : 'text-white'} mb-2 transition-colors duration-500`}>
                Interactive Resume
              </h1>
              <p className="text-lg text-blue-200/80">Full-Stack Developer & UI Engineer</p>
            </div>
            
            <div className="flex items-center mt-4 md:mt-0">
              <div className="mr-4">
                <label className="inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={isHolographicMode} 
                    onChange={() => setIsHolographicMode(!isHolographicMode)}
                  />
                  <div className="relative w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-300">Holographic Mode</span>
                </label>
              </div>
              
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className={`inline-flex items-center justify-center ${
                  isDownloading ? 'bg-blue-500/50' : 'bg-blue-600 hover:bg-blue-700'
                } text-white font-semibold py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isHolographicMode ? 'border border-blue-400/30 shadow-lg shadow-blue-500/20' : ''}`}
              >
                {isDownloading ? (
                  <>
                    <div className="w-20">
                      <div className="h-1 w-full bg-blue-900 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-400 transition-all duration-300" 
                          style={{ width: `${downloadProgress}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="ml-2 text-xs">{downloadProgress}%</span>
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </>
                )}
              </button>
            </div>
          </div>
          
          {/* Futuristic decorative elements */}
          <div className="hidden md:block absolute -left-3 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-blue-500/70"></div>
          <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-blue-500/70"></div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto space-x-1 mb-6 pb-2 scrollbar-hide">
          {['overview', 'skills', 'experience', 'contact'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeTab === tab 
                  ? `${isHolographicMode ? 'bg-blue-600/30 border border-blue-400/50 text-blue-300' : 'bg-blue-700 text-white'}`
                  : `${isHolographicMode ? 'bg-blue-900/20 hover:bg-blue-800/30 text-gray-400' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Content Area */}
        <div className="relative">
          {sections[activeTab]}
        </div>
        
        {/* Futuristic footer */}
        <div className="mt-8 pt-4 border-t border-blue-900/30 text-center text-xs text-blue-300/50">
          <div className="flex justify-center space-x-2 mb-2">
            <div className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
          <p>Interactive Resume System • Last Updated: May 18, 2025</p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Resume;