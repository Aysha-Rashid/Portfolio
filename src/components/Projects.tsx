import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Minishell',
      description: 'Developed a lightweight shell in C, replicating key functionalities of Bash. This project focused on process management, file I/O, and system calls, enhancing my understanding of the Unix operating system.',
      image: '../../assets/image/minishell.gif',
      technologies: ['bash scripting', 'C', 'DSA: Hash mapping', 'Systems Programming', 'UNIX'],
      category: 'System',
      // liveUrl: 'https://example.com/project1',
      githubUrl: 'https://github.com/Aysha-Rashid/minishell_org/tree/master',
    },
    {
      id: 2,
      title: 'Cub3d',
      description: 'Built a Wolfenstein 3D-style game engine using C and MiniLibX, implementing a raycasting algorithm to create a pseudo-3D environment from a 2D map. This project deepened my understanding of computer graphics, mathematics, and game engines.',
      image: '../../assets/image/Cub3d.gif',
      technologies: ['C', 'Raycasting algorithm', 'DFS algorithm', 'Minilibx lib', 'low-level graphics programming'],
      category: 'Graphic',
      // liveUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/Aysha-Rashid/cub3D',
    },
    {
      id: 3,
      title: 'Philosopher',
      description: 'Created a simulation of the Dining Philosophers problem in C, implementing multi-threading and synchronization to manage the interactions between philosophers (who alternately think and eat) while avoiding deadlock and ensuring resource safety.',
      image: '../../assets/image/Philo.gif',
      technologies: ['C', 'Multi-threading', 'Concurrent Programming', 'Real-time System Design'],
      category: 'System',
      // liveUrl: 'https://example.com/project3',
      githubUrl: 'https://github.com/Aysha-Rashid/Philosopher',
    },
    {
      id: 4,
      title: 'FDF',
      description: 'Developed a 3D wireframe visualizer using C and MiniLibX, which converts a 2D map of points into a 3D wireframe model. The project focused on applying mathematics and algorithms to visualize elevation data and render it in a 3D environment.',
      image: '../../assets/image/FDF.gif',
      technologies: ['C', 'Minilibx', 'BFS algorithm', 'Real-time interactive graphics'],
      category: 'Graphic',
      // liveUrl: 'https://example.com/project4',
      githubUrl: 'https://github.com/Aysha-Rashid/FDF_42',
    },
    {
      id: 5,
      title: 'PushSwap',
      description: 'Developed a program in C that efficiently sorts a list of integers using a minimal number of operations. This project is based on implementing sorting algorithms with a stack-based data structure and is an exercise in optimizing algorithmic performance.',
      image: '../../assets/image/Push_swap.gif',
      technologies: ['C', 'Optimization', 'Turk Algorithm'],
      category: 'Algorithm',
      // liveUrl: 'https://example.com/project5',
      githubUrl: 'https://github.com/Aysha-Rashid/Push_swap',
    },
    // {
    //   id: 6,
    //   title: 'Data Processing Pipeline',
    //   description: 'An ETL pipeline for processing large datasets with visualization and reporting capabilities.',
    //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //   technologies: ['Python', 'Node.js', 'MongoDB', 'D3.js'],
    //   category: 'System related',
    //   liveUrl: 'https://example.com/project6',
    //   githubUrl: 'https://github.com/yourusername/project6',
    // },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-600 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-brown-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and technologies.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full ${
                activeFilter === 'all' 
                  ? 'bg-brown-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter('Graphic')}
              className={`px-6 py-2 rounded-full ${
                activeFilter === 'Graphic' 
                  ? 'bg-brown-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              Graphic
            </button>
            <button 
              onClick={() => setActiveFilter('System')}
              className={`px-6 py-2 rounded-full ${
                activeFilter === 'System' 
                  ? 'bg-brown-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              System
            </button>
            <button 
              onClick={() => setActiveFilter('Algorithm')}
              className={`px-6 py-2 rounded-full ${
                activeFilter === 'Algorithm' 
                  ? 'bg-brown-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              Algorithm
            </button>
            {/* <button 
              onClick={() => setActiveFilter('fullstack')}
              className={`px-6 py-2 rounded-full ${
                activeFilter === 'fullstack' 
                  ? 'bg-brown-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              Full Stack
            </button> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brown-600 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-brown-600 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {/* <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-brown-600 hover:text-indigo-800 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a> */}
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;