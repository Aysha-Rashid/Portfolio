import React from 'react';
import { Code, Server, Globe, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-600 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image Section */}
          {/* <div className="w-600 h-80 md:w-100 md:h-80 rounded-lg overflow-hidden shadow-xl"> */}
          <div className="w-[400px] h-[500px] md:w-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="../../assets/image/Outside42.jpeg" 
              alt="outside of 42" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold text-brown-600 mb-4">Who I Am</h3>
            <h1 className="text-gray-600 mb-6">
              I'm <span className="text-brown-600 font-bold">Aysha Al Rashid</span>, a passionate data analyst and software developer from the UAE. I study at 42 Abu Dhabi and specialize in developing efficient algorithms and solving complex problems through data-driven insights.
            </h1>
            <p className="text-gray-600 mb-8">
              My journey in software development began with me starting my piscine in 42AbuDhabi. Since then, I've worked on various projects 
              ranging from system administration to graphical project, always striving to learn new technologies and improve my skills.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-brown-600 p-3 rounded-lg mr-4">
                  <Code size={24} className="text-brown-100" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Frontend</h4>
                  <p className="text-gray-100">Creating responsive, intuitive user interfaces</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brown-600 p-3 rounded-lg mr-4">
                  <Server size={24} className="text-brown-100" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Cub3D</h4>
                  <p className="text-gray-100">A game created using raycasting technique</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brown-600 p-3 rounded-lg mr-4">
                  <Database size={24} className="text-brown-100" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">System Administration</h4>
                  <p className="text-gray-100">Used docker to connect Nginx and Wordpress with Mariadb Database</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brown-600 p-3 rounded-lg mr-4">
                  <Globe size={24} className="text-brown-100" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Minishell</h4>
                  <p className="text-gray-100">Implemented my own shell using C language</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;