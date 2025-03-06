import React from 'react';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiGit, SiFastapi, SiDocker, SiCplusplus } from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-700" size={70} /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-800" size={70} /> },
    { name: 'React', icon: <SiReact className="text-blue-800" size={70} /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-800" size={70} /> },
    { name: 'HTML', icon: <SiHtml5 className="text-orange-800" size={70} /> },
    { name: 'CSS', icon: <SiCss3 className="text-blue-800" size={70} /> },
    { name: 'Git', icon: <SiGit className="text-red-800" size={70} /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-green-800" size={70} /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-800" size={70} /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-800" size={70} /> },
  ];

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
    'Attention to Detail',
    'Project Management',
    'Leadership',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-600 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-10 text-gray-600 max-w-2xl mx-auto">
            Here are some of the technologies and skills I've learned throughout my journey in 42AbuDhabi.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Technical Skills */}
          <div className="md:w-2/3 mb-12 md:mb-0 md:pr-20">
            <h3 className="text-2xl font-bold text-brown-700 mb-6">Technical Skills</h3>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-8">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  {skill.icon}
                  <span className="mt-2 text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="md:w-2/3">
          <h3 className="text-2xl font-bold text-brown-700 mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {softSkills.map((skill) => (
              <div 
                key={skill} 
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-center shadow-sm text-brown-800 font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
