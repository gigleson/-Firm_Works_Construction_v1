import React from 'react';

const Hero = () => {
  return (
    <section className="bg-cover bg-center text-white text-center py-32" style={{backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')"}}>
      <div className="bg-black bg-opacity-50 py-20">
        <h1 className="text-5xl font-bold mb-4">Building Strong Foundations</h1>
        <p className="text-xl mb-6">Trusted construction solutions for residential and commercial projects.</p>
        <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded hover:bg-yellow-600">Get a Quote</button>
      </div>
    </section>
  );
};

export default Hero;
