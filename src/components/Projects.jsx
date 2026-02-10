import React from 'react';

const projects = [
  {
    title: 'Luxury Residential Villa',
    description: 'A modern luxury villa with sustainable design features and high-end finishes.',
    image: "/photos/temp.jpg"
  },
  {
    title: 'Commercial Office Complex',
    description: 'A state-of-the-art commercial building with flexible office spaces.',
    image: "/photos/temp.jpg",
  },
  {
    title: 'Urban Renovation',
    description: 'Revitalizing older buildings to modern standards while preserving character.',
    image: "/photos/temp.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />

              {/* Project Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>

            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition">
            See More Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
