// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AppRoutes from './routes/AppRoutes';
import Modal from './components/Modal';
import { ThemeProvider } from './components/common/ThemeProvider';

function App() {
  // State to control modal visibility
  const [isModalVisible, setIsModalVisible] = useState(true);

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
