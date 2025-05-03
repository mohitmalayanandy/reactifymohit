import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        About Me
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-center leading-relaxed">
        Hello! I'm Mohit, a React developer with a strong passion for crafting clean and dynamic user interfaces. I love turning complex problems into simple, beautiful solutions. I have experience working on full-stack projects, optimizing frontend performance, and integrating with RESTful APIs. I'm always eager to learn and grow in the ever-evolving tech space.
      </p>
    </div>
  );
};

export default About;
