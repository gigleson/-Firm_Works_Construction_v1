// // import React from "react";

// const directors = [
//   {
//     name: "Er. Pratap Thapa",
//     title: "Chairman",
//     email: "chairman@firmworksconstruction.com",
//     image: "/photos/profile.png",
//   },
//   {
//     name: "Er. Ramesh Karki",
//     title: "Managing Director",
//     email: "md@firmworksconstruction.com",
//     image: "/photos/profile.png",
//   },
//   {
//     name: "Er. Sushma Shrestha",
//     title: "Executive Director",
//     email: "director@firmworksconstruction.com",
//     image: "/photos/profile.png",
//   },
// ];

// const AboutPage = () => {
//   return (
//     <div className="bg-white text-gray-800">

//       {/* ================= HERO HEADER ================= */}
//       <section className="bg-[#0F172A] text-white py-24 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
//           About <span className="text-yellow-400">Firm Works Construction</span>
//         </h1>
//         <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
//           We Create Tomorrow of What You Dream Today
//         </p>
//       </section>

//       {/* ================= COMPANY OVERVIEW ================= */}
//       <section className="py-24 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-[#0F172A] mb-6 text-center">
//             Our Organization
//           </h2>
//           <div className="w-24 h-1 bg-yellow-400 mx-auto mb-10"></div>

//           <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
//             Established in 2074 B.S. and headquartered in Buddhanagar,
//             Kathmandu, Firm Works Construction Pvt. Ltd. is a multidisciplinary
//             engineering and construction company specializing in architectural
//             design, structural engineering, project management, and full-scale
//             construction works.
//             <br /><br />
//             With a commitment to sustainability, innovation, and technical
//             excellence, we deliver residential, commercial, and institutional
//             projects that meet modern standards of safety, durability, and
//             environmental responsibility. Our approach integrates advanced
//             engineering solutions with strong client collaboration to ensure
//             precision and long-term value in every project.
//           </p>
//         </div>
//       </section>

//       {/* ================= BOARD OF DIRECTORS ================= */}
//       <section className="py-24 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
//               Board of Directors
//             </h2>
//             <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {directors.map((director, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center"
//               >
//                 <img
//                   src={director.image}
//                   alt={director.name}
//                   className="w-40 h-40 mx-auto rounded-full object-cover mb-6 border-4 border-yellow-400"
//                 />
//                 <h3 className="text-xl font-bold text-[#0F172A]">
//                   {director.name}
//                 </h3>
//                 <p className="text-gray-600 mb-3">{director.title}</p>
//                 <a
//                   href={`mailto:${director.email}`}
//                   className="text-yellow-600 font-medium hover:underline"
//                 >
//                   {director.email}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= MISSION & VISION ================= */}
//       <section className="py-24 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

//           <div>
//             <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Our Mission</h3>
//             <p className="text-gray-600 leading-relaxed">
//               To deliver high-quality, innovative, and sustainable engineering
//               solutions while maintaining excellence in safety, efficiency,
//               and client satisfaction.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Our Vision</h3>
//             <p className="text-gray-600 leading-relaxed">
//               To become one of Nepal’s leading construction and engineering
//               firms recognized for technical excellence, ethical practice,
//               and transformative infrastructure development.
//             </p>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default AboutPage;

import React from "react";
import { Mail, Phone } from "lucide-react";

const founders = [
  {
    name: "Er. Sachin Shrestha",
    title: "Managing Director",
    education: [
      "BE Civil",
      "MSc. Construction Management",
      "TU, IOE, Pulchowk Engineering Campus",
    ],
    phone: "+977-9843286344",
    email: "sachinstha052@gmail.com",
    image: "/photos/image.jpg",
  },
  {
    name: "Er. Suman Sangroula",
    title: "Operations Director",
    education: [
      "BE Civil",
      "MSc. Climate Change & Development",
      "TU, IOE, Pulchowk Engineering Campus",
    ],
    phone: "+977-9843881863",
    email: "sumansangroula9@gmail.com",
    image: "/photos/image.jpg",
  },
  {
    name: "Er. Sunav Raj Dahal",
    title: "Executive Director",
    education: [
      "BE Civil (TU, IOE, Pulchowk Engineering Campus)",
      "MBA (Kings College, WestCliff University)",
      "MSc. Material Science - UIUC, Champaign, IL, USA",
    ],
    phone: "+977-9849980597",
    email: "sunavd@gmail.com",
    image: "/photos/image.jpg",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="bg-[#0F172A] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          About <span className="text-yellow-400">Firm Works Construction</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          We Create Tomorrow of What You Dream Today
        </p>
        
      </section>

      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
            Our Organization
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-10"></div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Established in 2074 B.S. and headquartered in Buddhanagar,
            Kathmandu, Firm Works Construction Pvt. Ltd. is a multidisciplinary
            engineering and construction company specializing in architectural
            design, structural engineering, project management, and full-scale
            construction works.
            <br /><br />
            We integrate sustainability, innovation, and advanced engineering
            practices to deliver safe, durable, and high-quality infrastructure.
          </p>
        </div>
      </section>

      {/* ================= FOUNDERS SECTION ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Founding Directors
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden group"
              >
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    {founder.name}
                  </h3>
                  <p className="text-yellow-600 font-semibold mb-4">
                    {founder.title}
                  </p>

                  <ul className="text-gray-600 text-sm mb-4 space-y-1">
                    {founder.education.map((edu, i) => (
                      <li key={i}>• {edu}</li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                    <Phone size={16} />
                    {founder.phone}
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Mail size={16} />
                    <a
                      href={`mailto:${founder.email}`}
                      className="hover:text-yellow-600 transition"
                    >
                      {founder.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver high-quality, innovative, and sustainable engineering
              solutions while maintaining excellence in safety, efficiency,
              and client satisfaction.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become one of Nepal’s leading construction and engineering
              firms recognized for technical excellence, ethical practice,
              and transformative infrastructure development.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;
