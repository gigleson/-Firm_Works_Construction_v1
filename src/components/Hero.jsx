
// import React from 'react';

// const Hero = () => {
//   return (
//     <div className="relative h-screen w-full flex items-center justify-center">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center" 
//         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 text-center px-4 max-w-4xl">
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
//           Building the Future, <br />
//           <span className="text-orange-500 text-3xl md:text-5xl lg:text-6xl">Restoring the Past.</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
//           Over 25 years of excellence in residential, commercial, and industrial construction. We deliver quality you can trust.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-all transform hover:scale-105">
//             Get a Quote
//           </button>
//           <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-md font-bold text-lg transition-all">
//             View Our Work
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React from 'react';

// const Hero = () => {
//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100vw",
//         height: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       {/* Video */}
//       <video
//         src="/videos/page.mp4"
//         autoPlay
//         muted
//         loop
//         playsInline
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           objectPosition: "center top",
//         }}
//       />

//       {/* Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundColor: "rgba(0,0,0,0.4)",
//         }}
//       />

//       {/* Content */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 10,
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "white",
//           textAlign: "center",
//           padding: "1rem",
//         }}
//       >
//         <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
//           Building Strong Foundations
//         </h1>
//         <p style={{ maxWidth: "600px", marginTop: "1rem" }}>
//           Trusted construction solutions for residential and commercial projects.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;
const Hero = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
        src="/videos/page.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Building Strong Foundations
        </h1>
        <p className="text-xl text-white mb-6 max-w-2xl">
          Trusted construction solutions for residential and commercial projects.
        </p>
        <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded hover:bg-yellow-600">
          Get a Quote
        </button>
      </div>

    </section>
  );
};

export default Hero;
