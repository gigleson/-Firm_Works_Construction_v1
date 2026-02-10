import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../assets/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p className="text-center mt-20">Project not found</p>;

  return (
    <div className="py-24 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">{project.title}</h1>
        <p className="text-gray-700 text-lg mb-12 text-center">{project.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-center">3D Model</h3>
            <img
              src={project.model3D}
              alt={`${project.title} 3D Model`}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-center">Real Image</h3>
            <img
              src={project.realImage}
              alt={`${project.title} Real`}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
