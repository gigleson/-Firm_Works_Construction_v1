import React from "react";

const directors = [
  {
    name: "John Smith",
    title: "CEO",
    email: "john.smith@firmworks.com",
    image: "/photos/profile.png",
  },
  {
    name: "Emily Johnson",
    title: "CFO",
    email: "emily.johnson@firmworks.com",
    image: "/photos/profile.png",
  },
  {
    name: "Michael Lee",
    title: "COO",
    email: "michael.lee@firmworks.com",
    image: "/photos/profile.png",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Organization Description */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">About FirmWorks Construction</h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Founded over 25 years ago, FirmWorks Construction has grown to become a
          leading construction company specializing in residential, commercial, and industrial projects.
          Our mission is to deliver innovative, sustainable, and high-quality construction solutions
          while maintaining the highest standards of safety and customer satisfaction.
          We believe in building lasting relationships with our clients through trust, transparency, and excellence.
        </p>
      </section>

      {/* Board of Directors */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Board of Directors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {directors.map((director, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">{director.name}</h3>
                <p className="text-gray-600 mb-2">{director.title}</p>
                <a
                  href={`mailto:${director.email}`}
                  className="text-orange-600 hover:underline text-sm"
                >
                  {director.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
