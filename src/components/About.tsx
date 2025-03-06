import React from 'react';
import { Camera, Bot, Armchair , Swords } from 'lucide-react';

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
              src="/Portfolio/assets/outside42.jpeg" 
              alt="outside of 42" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold text-brown-600 mb-4">Who I Am</h3>
            <h1 className="text-gray-600 mb-6">
              I'm <span className="text-brown-600 font-bold">Aysha Al Rashid</span>, a passionate data analyst and software developer from the UAE. I study at 42 Abu Dhabi and specialize in developing efficient algorithms and solving complex problems through data-driven insights.
            </h1>
            <p className="text-gray-600  mb-8">
              My journey in software development began with me starting my piscine in 42AbuDhabi. Since then, I've worked on various projects 
              ranging from system administration to graphical project, always striving to learn new technologies and improve my skills.
            </p>
            
                <p className="text-xl text-gray-800 font-bold mb-6">
                  What else do i do?
                </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-brown-600 p-3 rounded-lg mr-4">
                  <Camera size={24} className="text-brown-100" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Photography </h4>
                  <p className="text-brown-800">Take random street light photographs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brown-600 p-3 rounded-lg mr-4">
                  <Bot size={24} className="text-brown-100" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">AI tools seeker</h4>
                  <p className="text-brown-800">Actively explore AI tools in the internet</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brown-600 p-3 rounded-lg mr-4">
                  <Armchair size={24} className="text-brown-100" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Crocheter</h4>
                  <p className="text-brown-800">Crochet patterned matterials using fine threads</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brown-600 p-3 rounded-lg mr-4">
                  <Swords size={24} className="text-brown-100" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Action Maze Chase</h4>
                  <p className="text-brown-800">Amazing mind challenges that keeps the mind active</p>
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