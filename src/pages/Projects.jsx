import React, { useState, useEffect, useRef, useContext } from 'react';
import { ExternalLink, Github, Star, Code, Award, Coffee, Clock, Users, Plus, Edit, Trash } from 'lucide-react';
import { ProjectContext } from '../context/ProjectContext';
import ProjectEditor from './ProjectEditor';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(null);
  const sectionRef = useRef(null);
  
  // Use the ProjectContext to access project data and methods
  const { 
    projects, 
    categories, 
    stats, 
    isLoading, 
    refreshProjectData,
    updateProject,
    addProject,
    deleteProject
  } = useContext(ProjectContext);

  // Handle project save (add or update)
  const handleProjectSave = (projectData) => {
    if (editingProject) {
      updateProject(editingProject.id, projectData);
      setEditingProject(null);
    } else {
      addProject(projectData);
      setIsAddingProject(false);
    }
  };

  // Handle project deletion with confirmation
  const handleDeleteConfirm = (id) => {
    deleteProject(id);
    setShowConfirmDelete(null);
  };

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : activeTab === 'featured' 
      ? projects.filter(project => project.featured) 
      : projects.filter(project => project.category === activeTab);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-black via-blue-950 to-black text-white pt-20 pb-32 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-purple-500 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-cyan-500 blur-3xl animate-pulse"></div>
      </div>
      
      {/* Section heading with typing effect */}
      <div className="relative z-10 mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-3">
          Innovation Portfolio
        </h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
          Exploring the intersection of creativity and technology through advanced web experiences
        </p>
      </div>
      
      {/* Admin controls */}
      <div className="w-full max-w-7xl flex justify-end mb-6 relative z-10">
        <button
          onClick={() => setIsAddingProject(true)}
          className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-lg text-white flex items-center"
        >
          <Plus size={16} className="mr-2" />
          Add New Project
        </button>
      </div>
      
      {/* Category filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 relative z-10">
        <button
          key="all"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 border ${
            activeTab === 'all'
              ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/30'
              : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:bg-gray-800/70'
          }`}
        >
          All Projects
        </button>
        <button
          key="featured"
          onClick={() => setActiveTab('featured')}
          className={`px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 border ${
            activeTab === 'featured'
              ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/30'
              : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:bg-gray-800/70'
          }`}
        >
          Featured
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 border ${
              activeTab === category.id
                ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:bg-gray-800/70'
            }`}
            title={category.description}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Projects grid with animations */}
      <div 
        ref={sectionRef}
        className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {isLoading ? (
          // Loading state with skeleton cards
          Array(6).fill(0).map((_, index) => (
            <div key={`skeleton-${index}`} className="relative rounded-2xl h-64 animate-pulse">
              <div className="absolute inset-0 bg-gray-800 opacity-70 rounded-2xl"></div>
              <div className="absolute top-6 left-6 h-6 w-32 bg-gray-700 rounded"></div>
              <div className="absolute top-16 left-6 h-4 w-48 bg-gray-700 rounded"></div>
              <div className="absolute top-22 left-6 h-4 w-40 bg-gray-700 rounded"></div>
              <div className="absolute bottom-6 left-6 h-8 w-28 bg-gray-700 rounded"></div>
            </div>
          ))
        ) : filteredProjects.length > 0 ? (
          // Actual project cards
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`relative group overflow-hidden rounded-2xl transition-all duration-500 ${
                hoveredProject === project.id ? 'scale-105 z-20' : 'hover:scale-102'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background and card styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 opacity-95"></div>
              <div className="absolute inset-0 border border-blue-500/30 rounded-2xl"></div>
              
              {/* Project content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Admin actions */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.featured && (
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-xs font-bold px-2 py-1 rounded-full flex items-center">
                      <Award size={12} className="mr-1" />
                      FEATURED
                    </div>
                  )}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditingProject(project);
                    }}
                    className="p-1 bg-blue-600 text-white rounded-full hover:bg-blue-500"
                  >
                    <Edit size={14} />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowConfirmDelete(project.id);
                    }}
                    className="p-1 bg-red-600 text-white rounded-full hover:bg-red-500"
                  >
                    <Trash size={14} />
                  </button>
                </div>
                
                {/* Project title */}
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
                  {project.title}
                </h2>
                
                {/* Project description */}
                <p className="text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="text-xs font-medium bg-blue-900/50 text-blue-200 px-2 py-1 rounded-md border border-blue-800/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project metrics */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star size={14} className="text-amber-400 mr-1" />
                    <span>{project.metrics.stars}</span>
                  </div>
                  <div className="flex items-center">
                    <Code size={14} className="text-blue-400 mr-1" />
                    <span>{project.metrics.forks}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="text-purple-400 mr-1" />
                    <span>{project.metrics.views}</span>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-2">
                  <a href={project.liveUrl} className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium px-3 py-2 rounded-lg transition-all">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-medium px-3 py-2 rounded-lg transition-all">
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Abstract decorative elements */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-600/20 rounded-full blur-xl"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-600/20 rounded-full blur-xl"></div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <div className="text-gray-400">No projects found in this category</div>
            <button 
              onClick={() => setActiveTab('all')}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              View all projects
            </button>
          </div>
        )}
      </div>
      
      {/* Refresh button */}
      <button
        onClick={refreshProjectData}
        disabled={isLoading}
        className={`mt-8 px-4 py-2 rounded-lg flex items-center ${
          isLoading 
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-500 text-white'
        }`}
      >
        <svg 
          className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        {isLoading ? 'Refreshing...' : 'Refresh Projects'}
      </button>
      
      {/* Statistics section */}
      <div className="mt-24 relative z-10 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Portfolio Insights
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center">
            <Coffee size={32} className="text-amber-400 mb-2" />
            <span className="text-3xl font-bold text-white">{stats.hoursCoded}</span>
            <span className="text-gray-400">Hours Coded</span>
          </div>
          
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center">
            <Code size={32} className="text-blue-400 mb-2" />
            <span className="text-3xl font-bold text-white">{stats.projectsCompleted}</span>
            <span className="text-gray-400">Projects Completed</span>
          </div>
          
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center">
            <Star size={32} className="text-amber-400 mb-2" />
            <span className="text-3xl font-bold text-white">{stats.githubStars}</span>
            <span className="text-gray-400">Github Stars</span>
          </div>
          
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center">
            <Clock size={32} className="text-green-400 mb-2" />
            <span className="text-3xl font-bold text-white">{stats.uptime}</span>
            <span className="text-gray-400">Uptime</span>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="mt-24 relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to collaborate on your next project?</h2>
        <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all">
          Get in Touch
        </a>
      </div>
      
      {/* Add Project Editor Modal */}
      {isAddingProject && (
        <ProjectEditor
          onSave={handleProjectSave}
          onCancel={() => setIsAddingProject(false)}
        />
      )}
      
      {/* Edit Project Modal */}
      {editingProject && (
        <ProjectEditor
          project={editingProject}
          onSave={handleProjectSave}
          onCancel={() => setEditingProject(null)}
        />
      )}
      
      {/* Delete Confirmation Modal */}
      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-red-900/30 rounded-xl w-full max-w-md p-6">
            <h3 className="text-xl font-bold text-white mb-4">Confirm Delete</h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to delete this project? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowConfirmDelete(null)}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteConfirm(showConfirmDelete)}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;