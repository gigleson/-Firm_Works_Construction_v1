// import React from "react"; 

// import Hero from '../components/Hero';
// import Services from '../components/Services';
// import About from '../components/About';
// import Footer from '../components/Footer';
// import Projects from "../components/Projects";

// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <About />
//       <Services />
//       <Projects/>
//       <Footer />
//     </>
//   );
// };

// export default Home;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Wrench } from "lucide-react";
import { projects } from "../assets/projects";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen overflow-hidden">

        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/page.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-[#0F172A]/80"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            We Create Tomorrow of <br />
            <span className="text-yellow-400">What You Dream Today</span>
          </h1>

          <p className="max-w-2xl text-gray-200 text-lg mb-8">
            Established in 2074 B.S., Firm Works Construction Pvt. Ltd.
            specializes in design, construction, consulting, and supervision
            across Nepal.
          </p>

          <div className="flex gap-4">
            <Link
              to="/contact"
              className="bg-yellow-400 text-[#0F172A] font-semibold px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-300 transition shadow-lg"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>

            <Link
              to="/projects"
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#0F172A] transition"
            >
              Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ================= OUR EXPERTISE ================= */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
              Our Expertise
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition border-t-4 border-yellow-400">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="text-yellow-400" size={30} />
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  Design Works
                </h3>
              </div>

              <ul className="space-y-3 text-gray-600">
                <li>Architectural & Conceptual Design</li>
                <li>Structural Analysis & Drawings</li>
                <li>3D Visualization</li>
                <li>MEP Design</li>
                <li>Cost Estimation & BOQ</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition border-t-4 border-yellow-400">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="text-yellow-400" size={30} />
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  Construction Works
                </h3>
              </div>

              <ul className="space-y-3 text-gray-600">
                <li>Project Planning & Management</li>
                <li>Substructure & Superstructure</li>
                <li>Finishing & Roofing</li>
                <li>Quality Control & Inspection</li>
                <li>Handover & Maintenance</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {projects.slice(0, 3).map((project) => (
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

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-[#0F172A] text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition shadow-lg"
            >
              View All Projects
            </Link>
          </div>

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

export default Home;

