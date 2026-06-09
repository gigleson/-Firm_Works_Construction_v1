// import React from 'react';

// const services = [
//   {
//     title: 'Residential Construction',
//     description: 'Modern, durable, and affordable homes built with care.'
//   },
//   {
//     title: 'Commercial Projects',
//     description: 'Professional construction solutions for businesses.'
//   },
//   {
//     title: 'Renovation',
//     description: 'Upgrade and remodel your existing spaces efficiently.'
//   }
// ];

// const Services = () => {
//   return (
//     <section className="py-20 px-8 text-center bg-gray-100">
//       <h2 className="text-4xl font-bold mb-12">Our Services</h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <div key={index} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
//             <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
//             <p>{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;
import React from "react";

const services = [
  {
    title: "Residential Construction",
    description:
      "Complete residential construction solutions including custom homes, villas, and housing complexes designed with durability, comfort, and sustainability in mind.",
    image: "/photos/temp.jpg",
  },
  {
    title: "Commercial Construction",
    description:
      "Office buildings, retail complexes, institutional structures, and industrial facilities built with precision, compliance, and efficiency.",
    image: "/photos/temp.jpg",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Modernization and structural upgrades of existing buildings while maintaining architectural integrity and safety standards.",
    image: "/photos/temp.jpg",
  },
  {
    title: "Architectural Design",
    description:
      "Creative and functional architectural planning integrating aesthetics, engineering feasibility, and sustainable practices.",
    image: "/photos/temp.jpg",
  },
  {
    title: "Structural Engineering",
    description:
      "Advanced structural analysis and design ensuring safety, stability, and compliance with national and international standards.",
    image: "/photos/temp.jpg",
  },
  {
    title: "Project Management",
    description:
      "End-to-end project supervision ensuring timely delivery, cost control, quality assurance, and risk management.",
    image: "/photos/temp.jpg",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white">

      {/* ================= HEADER ================= */}
      <section className="bg-[#0F172A] text-white py-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Our <span className="text-yellow-400">Services</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          Delivering innovative construction and engineering solutions with
          precision, quality, and reliability.
        </p>
        
      </section>
      
      {/* ================= SERVICES GRID ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#0F172A] text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="mb-8 text-gray-300">
          Contact us today for consultation and expert guidance.
        </p>
        <button className="bg-yellow-400 text-[#0F172A] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Get a Consultation
        </button>
      </section>

    </div>
  );
};

export default ServicesPage;
