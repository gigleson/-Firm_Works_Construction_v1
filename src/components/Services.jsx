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

import React from 'react';
import { Building2, Home, Construction } from 'lucide-react';

const services = [
  {
    title: 'Commercial Construction',
    description: 'Specializing in office buildings, retail centers, and industrial facilities with a focus on timely delivery.',
    icon: <Building2 className="w-12 h-12 text-orange-600" />,
  },
  {
    title: 'Residential Building',
    description: 'Custom homes and luxury renovations tailored to your lifestyle. We turn your vision into reality.',
    icon: <Home className="w-12 h-12 text-orange-600" />,
  },
  {
    title: 'Renovation & Repair',
    description: 'Expert structural repairs and modern aesthetic upgrades for aging infrastructures and heritage sites.',
    icon: <Construction className="w-12 h-12 text-orange-600" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-b-4 border-transparent hover:border-orange-600 group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;