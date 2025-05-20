import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Sparkles } from 'lucide-react';

const Modal = ({ onClose, title = "ReactifyMohit", children }) => {
  const [animationState, setAnimationState] = useState('entering');
  
  useEffect(() => {
    // Apply entering animation
    setAnimationState('visible');
    
    // Handle escape key to close modal
    const handleEscape = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);
  
  const handleClose = () => {
    setAnimationState('exiting');
    setTimeout(() => {
      onClose();
    }, 300); // Match this with animation duration
  };
  
  return createPortal(
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
        animationState === 'entering' ? 'opacity-0' : 
        animationState === 'exiting' ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 shadow-2xl shadow-blue-500/20 w-full max-w-md transform transition-all duration-300 ${
          animationState === 'entering' ? 'scale-95 opacity-0' : 
          animationState === 'exiting' ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-20 blur-xl"></div>
        
        {/* Animated border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-600 rounded-xl animate-pulse opacity-30"></div>
        
        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                {title}
              </h2>
            </div>
            <button 
              onClick={handleClose}
              className="rounded-full p-1 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Content */}
          <div className="space-y-4">
            {children || (
              <div className="text-center py-4">
                <h3 className="text-lg font-medium text-slate-200 mb-2">
                  Welcome to the Future
                </h3>
                <p className="text-slate-400">
                  This is a professional portfolio built with React and Tailwind CSS,
                  featuring modern design elements and smooth animations.
                </p>
              </div>
            )}
          </div>
          
          {/* Footer with action button */}
          <div className="mt-6 text-center">
            <button 
              onClick={handleClose}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default Modal;