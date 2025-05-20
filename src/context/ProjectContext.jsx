import React, { useState, useEffect } from 'react';
import Projects from '../pages/Projects';
import projectData from '../projectData.json';

// ProjectContext.js - Create a context to manage project data globally
export const ProjectContext = React.createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectData.projects);
  const [categories, setCategories] = useState(projectData.categories);
  const [stats, setStats] = useState(projectData.stats);
  const [isLoading, setIsLoading] = useState(false);

  // Function to update project data (could be connected to a backend API)
  const updateProject = (id, updatedData) => {
    setProjects(prevProjects => 
      prevProjects.map(project => 
        project.id === id ? { ...project, ...updatedData } : project
      )
    );
  };

  // Function to add a new project
  const addProject = (newProject) => {
    // Generate a new ID based on the highest existing ID
    const newId = Math.max(...projects.map(project => project.id)) + 1;
    setProjects(prevProjects => [...prevProjects, { ...newProject, id: newId }]);
  };

  // Function to delete a project
  const deleteProject = (id) => {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
  };

  // Function to fetch updated project data (simulation)
  const refreshProjectData = async () => {
    setIsLoading(true);
    // Simulate API call with timeout
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real app, you would fetch from an API here
      // For now, we'll just use our existing data
      setIsLoading(false);
    } catch (error) {
      console.error("Error refreshing project data:", error);
      setIsLoading(false);
    }
  };

  return (
    <ProjectContext.Provider value={{
      projects,
      categories,
      stats,
      isLoading,
      updateProject,
      addProject,
      deleteProject,
      refreshProjectData
    }}>
      {children}
    </ProjectContext.Provider>
  );
};