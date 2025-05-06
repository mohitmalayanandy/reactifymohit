// src/components/Modal.jsx
import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center">Welcome to ReactifyMohit!</h2>
        <p className="mt-4 text-center">This is a professional portfolio built with React and Tailwind CSS.</p>
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;