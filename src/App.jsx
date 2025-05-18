import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AppRoutes from './routes/AppRoutes';
import Modal from './components/Modal';
import { ThemeProvider } from './components/common/ThemeProvider'; // Make sure this path is correct

function App() {
  // State to control modal visibility
  const [isModalVisible, setIsModalVisible] = useState(true);
  
  // Add this to debug theme initialization
  useEffect(() => {
    console.log("App mounted, checking current theme:");
    console.log("- HTML classList:", document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    console.log("- localStorage theme:", localStorage.getItem('theme'));
  }, []);

  // Effect to hide modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(false);
    }, 5000); // Hide modal after 5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ThemeProvider>
      <Router>
        {isModalVisible && <Modal onClose={handleCloseModal} />}
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;