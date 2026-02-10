import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
     
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Welcome to <span className="text-yellow-600">FirmWorks Construction</span>
        </h1>

        {/* Sub heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
          Why Choose Us?
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          With years of experience, FirmWorks Construction delivers high-quality
          residential and commercial projects on time and within budget.
          Our commitment to safety, craftsmanship, and customer satisfaction
          sets us apart in the construction industry.
        </p>

      </div>
    </section>
  );
};

export default About;
