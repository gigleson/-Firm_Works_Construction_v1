import React, { useState } from "react";
import { projects } from "../assets/projects";

const ProjectPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white min-h-screen">

      {/* ================= HEADER ================= */}
      <section className="bg-[#0F172A] text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-yellow-400">Projects</span>
        </h1>
        <p className="mt-4 text-gray-300">
          Explore our completed and ongoing construction projects.
        </p>
      </section>

      {/* ================= PROJECT LIST ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedImage(project.image1)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.location}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= FULLSCREEN IMAGE MODAL ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Project Preview"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

    </div>
  );
};

export default ProjectPage;
