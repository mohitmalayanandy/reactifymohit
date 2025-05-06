import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left */}
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">Mohit</span>. Built with ❤️ using React & Tailwind.
        </p>

        {/* Right - Socials */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/mohitmalayanandy" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/mohitmalayanandy" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/mohitmalaynandy" // Replace with your Twitter
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
