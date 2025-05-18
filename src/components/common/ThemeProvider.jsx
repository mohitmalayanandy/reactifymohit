import React, { createContext, useContext, useEffect, useState } from 'react';

// Create context with default values
const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  // Initialize with null to properly handle hydration
  const [isDarkMode, setIsDarkMode] = useState(null);

  // Handle initial theme setup
  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    
    // If theme is explicitly set in localStorage, use that
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // If no saved preference, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      
      if (prefersDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  // Function to toggle theme with debugging
  const toggleTheme = () => {
    console.log('Toggle theme clicked. Current mode:', isDarkMode);
    
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      console.log('New mode will be:', newMode);
      
      // Update DOM and localStorage
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      
      return newMode;
    });
  };

  // Don't render children until we've determined the theme to prevent flickering
  if (isDarkMode === null) {
    return null; // Or a loading indicator
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

// We're not exporting a default to avoid confusion