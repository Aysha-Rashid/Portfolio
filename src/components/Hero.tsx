import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white-100 to-white">
      <div className="container mx-auto px-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-brown-600">Aysha Al Rashid</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
            Software Developer and Passionate Analytic Thinker
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Passionate developer with curiousity to explore different AI algorithms and create solutions to problems.
          </p>
          
          <div className="flex space-x-4 mb-8">
            <a 
              href="https://github.com/Aysha-Rashid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={30} />
            </a>
            <a 
              href="https://linkedin.com/in/aysha-al-rashid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={30} />
            </a>
            <a 
              href="aysharashid2019@gmail.com" 
              className="p-2 bg-brown-500 text-white rounded-full hover:bg-brown-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={30} />
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-brown-600 text-white text-xl font-medium rounded-lg hover:bg-brown-700 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-brown-600 text-brown-600 text-xl font-medium rounded-lg hover:bg-brown-50 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="../../assets/image/Animated_pic.jpeg" 
              alt="Aysha Al Rashid" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-2">
        <a 
          href="#about" 
          className="animate-bounce p-2 bg-brown-700 rounded-full shadow-md"
          aria-label="Scroll down"
        >
          <ArrowDown size={60} className="text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;