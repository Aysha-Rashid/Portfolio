import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Part-Time mentorship',
      company: '42AbuDhabi',
      location: 'Abudhabi, UAE',
      period: 'Jan 2025 - Jan 2025',
      description: [
        'Taught High School students Python fundamental, shell scripting, and project development.',
        'Guided students through hands-on coding exercises and debugging techniques',
      ],
      technologies: ['python', 'shell scipting']
    },
    {
      id: 2,
      role: 'Market Researcher and Developer',
      company: 'Start-up (ideation stage)',
      location: 'Abudhabi, UAE',
      period: 'Oct 2024 - Dec 2024',
      description: [
        'Conducted market research for an AI-powered media translation platform.',
        'Explored NLP models and AI-driven text formatting tools for customization translation.',
        'Attended Entrprenuership week conducted by 42AbuDhabito present the project infront of potential investors.',
        'Attended Business week in adnoc to present the project infront of the all the potential investors.'
      ],
      technologies: ['Docker', 'Python', 'Azure', 'Eleven Labs', 'OCR technology']
    },
    {
      id: 3,
      role: 'AI Developer',
      company: 'Sambanova (Hackathon)',
      location: 'AbuDhabi, UAE',
      period: 'Jan 2025 - Jan 2025',
      description: [
        'Developed AI-driven market analysis tool using CrewAI and sentiment analysis tool.',
        'Utilized sentiment analysis on digital public responses to assess consumer interest to predict product success rate.',
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'React', 'FastAPI', 'CrewAI', 'Hugging face', 'Sambanova Cloud']
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Software Developer Diploma',
      institution: '42 AbuDhabi',
      location: 'Abudhabi, UAE',
      period: '2023 - 2025',
      description: 'Specialized in Developing system and websites'
    },
    {
      id: 2,
      degree: 'Master program in Data Analysis',
      institution: 'Simplilearn',
      location: 'Remote',
      period: '2023 -2024',
      description: 'Aspiring Data Analyst with foundational skills in data wrangling, visualization, and statistical analysis. Familiar with Python and Tableau.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-600 mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-vanilla-100 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-brown-900 mb-8">Work Experience</h3>
            <div className="space-y-12">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-brown-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-brown-800 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-bold text-gray-800">{exp.role}</h4>
                    <h5 className="text-lg font-medium text-brown-800 mb-2">{exp.company}</h5>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                      <div className="flex items-center text-gray-600 mb-2 sm:mb-0">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-brown-600 text-white text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-8 border-l-2 border-brown-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-brown-800 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                    <h5 className="text-lg font-medium text-brown-800 mb-2">{edu.institution}</h5>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                      <div className="flex items-center text-gray-600 mb-2 sm:mb-0">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;