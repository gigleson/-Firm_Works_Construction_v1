import React from 'react';

const services = [
  {
    title: 'Residential Construction',
    description: 'Modern, durable, and affordable homes built with care.'
  },
  {
    title: 'Commercial Projects',
    description: 'Professional construction solutions for businesses.'
  },
  {
    title: 'Renovation',
    description: 'Upgrade and remodel your existing spaces efficiently.'
  }
];

const Services = () => {
  return (
    <section className="py-20 px-8 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
