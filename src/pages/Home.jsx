import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                Welcome to <span className="text-yellow-300">ReactifyMohit</span> 👋
            </h1>
            <p className="text-lg md:text-2xl mb-6 text-center max-w-xl">
                I'm Mohit, a passionate frontend developer skilled in React, building fast, responsive, and engaging web applications.
            </p>
            <Link to="/projects" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 hover:text-black transition duration-300">
                View My Work
            </Link>
        </div>
    );
};

export default Home;
