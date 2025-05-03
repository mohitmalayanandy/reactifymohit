import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-10 text-center">
        My Projects
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {/* Project Card 1 */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 transition hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">React Portfolio</h2>
          <p className="text-gray-700 dark:text-gray-300">
            A fully responsive portfolio website built with React and Tailwind CSS, showcasing my skills and projects.
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 transition hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Task Manager App</h2>
          <p className="text-gray-700 dark:text-gray-300">
            A simple CRUD app with authentication where users can manage their tasks efficiently.
          </p>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 transition hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">E-commerce Store</h2>
          <p className="text-gray-700 dark:text-gray-300">
            A mock e-commerce website with product listings, filters, cart functionality, and responsive design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;