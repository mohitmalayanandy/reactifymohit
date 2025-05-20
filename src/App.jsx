import React, { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import AppRoutes from './routes/AppRoutes';
import Modal from './components/ui/Modal';
import { ProjectProvider } from './context/ProjectContext';

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
    <>
      {isModalVisible && <Modal onClose={handleCloseModal} />}
      <Layout>
        <ProjectProvider>
        <AppRoutes />
        </ProjectProvider>
      </Layout>
    </>
  );
}

export default App;