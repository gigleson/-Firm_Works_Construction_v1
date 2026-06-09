// // import React from "react";
// // import { MapPin, Mail, Phone } from "lucide-react";

// // const ContactPage = () => {
// //   return (
// //     <div className="bg-gray-50 min-h-screen px-6 py-24">

// //       {/* Info Cards */}
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
// //         {/* Visit Us Card */}
// //         <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
// //           <MapPin className="w-12 h-12 text-orange-600 mb-4" />
// //           <h3 className="text-xl font-bold mb-2">Visit Us</h3>
// //           <p className="text-gray-600">
// //             123 Main Street,<br />
// //             Cityname, State, 12345
// //           </p>
// //         </div>

// //         {/* Contact Us Card */}
// //         <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
// //           <Mail className="w-12 h-12 text-orange-600 mb-4" />
// //           <h3 className="text-xl font-bold mb-2">Contact Us</h3>
// //           <p className="text-gray-600 mb-2">Email: info@firmworks.com</p>
// //           <p className="text-gray-600">Phone: +1 234 567 890</p>
// //         </div>
// //       </div>
// //       {/* <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1801190647184!2d85.32535207505374!3d27.680827376197836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19595513157d%3A0x7008a626d567540f!2sFirm%20Works%20Construction%20Pvt.%20Ltd.!5e0!3m2!1sne!2snp!4v1770744187703!5m2!1sne!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div> */}

// //       {/* Get In Touch Form */}
// //       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10">
// //         <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get in Touch</h2>
// //         <p className="text-gray-600 mb-8 text-center">
// //           Send us your details and requests. We will get back to you as soon as possible.
// //         </p>

// //         <form className="space-y-6">
// //           {/* Name */}
// //           <div>
// //             <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
// //               Name
// //             </label>
// //             <input
// //               type="text"
// //               id="name"
// //               placeholder="Your Name"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
// //             />
// //           </div>

// //           {/* Email */}
// //           <div>
// //             <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               placeholder="Your Email"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
// //             />
// //           </div>

// //           {/* Message */}
// //           <div>
// //             <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
// //               Message / Request
// //             </label>
// //             <textarea
// //               id="message"
// //               rows="5"
// //               placeholder="Write your message here..."
// //               className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
// //             ></textarea>
// //           </div>

// //           {/* Submit */}
// //           <div className="text-center">
// //             <button
// //               type="submit"
// //               className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition font-semibold"
// //             >
// //               Send Message
// //             </button>
// //           </div>
// //         </form>
// //       </div>

// //     </div>
// //   );
// // };

// // export default ContactPage;

// import React from "react";
// import { MapPin, Mail, Phone } from "lucide-react";

// const ContactPage = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen px-6 py-24 space-y-24">

//       {/* Info Cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
//         {/* Visit Us Card */}
//         <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
//           <MapPin className="w-12 h-12 text-orange-600 mb-4" />
//           <h3 className="text-xl font-bold mb-2">Visit Us</h3>
//           <p className="text-gray-600">
//             123 Main Street,<br />
//             Cityname, State, 12345
//           </p>
//         </div>

//         {/* Contact Us Card */}
//         <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
//           <Mail className="w-12 h-12 text-orange-600 mb-4" />
//           <h3 className="text-xl font-bold mb-2">Contact Us</h3>
//           <p className="text-gray-600 mb-2">Email: info@firmworks.com</p>
//           <p className="text-gray-600">Phone: +1 234 567 890</p>
//         </div>
//       </div>

//       {/* Google Map */}
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>
//         <div className="rounded-xl overflow-hidden shadow-lg">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1801190647184!2d85.32535207505374!3d27.680827376197836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19595513157d%3A0x7008a626d567540f!2sFirm%20Works%20Construction%20Pvt.%20Ltd.!5e0!3m2!1sne!2snp!4v1770744187703!5m2!1sne!2snp"
//             className="w-full h-96 border-0"
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>

//       {/* Get In Touch Form */}
//       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get in Touch</h2>
//         <p className="text-gray-600 mb-8 text-center">
//           Send us your details and requests. We will get back to you as soon as possible.
//         </p>

//         <form className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Your Name"
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Your Email"
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message / Request</label>
//             <textarea
//               id="message"
//               rows="5"
//               placeholder="Write your message here..."
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
//             ></textarea>
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition font-semibold"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>

//     </div>
//   );
// };

// export default ContactPage;
import React from "react";
import { MapPin, Mail, Phone, FileText, Users } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#0F172A] text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact <span className="text-yellow-400">FirmWorks Construction</span>
        </h1>
       
        <p className="mt-4 text-yellow-400 italic text-lg">
          “We Create Tomorrow of What You Dream Today”
        </p>
      </section>

      {/* ================= COMPANY INFO ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <MapPin className="mx-auto text-yellow-500 mb-4" size={40} />
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              Office Location
            </h3>
            <p className="text-gray-600">
              Buddhanagar, K.M.C.<br />
              Kathmandu, Nepal
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Mail className="mx-auto text-yellow-500 mb-4" size={40} />
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              Email Address
            </h3>
            <p className="text-gray-600">
              mail@firmworksconstruction.com <br />
              firmworksconstruction@gmail.com
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Phone className="mx-auto text-yellow-500 mb-4" size={40} />
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              Phone Numbers
            </h3>
            <p className="text-gray-600">
              +977-9843286344 <br />
              +977-9843881863
            </p>
          </div>

        </div>
      </section>

      {/* ================= GOOGLE MAP ================= */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1801190647184!2d85.32535207505374!3d27.680827376197836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19595513157d%3A0x7008a626d567540f!2sFirm%20Works%20Construction%20Pvt.%20Ltd.!5e0!3m2!1sne!2snp!4v1770744187703!5m2!1sne!2snp"
            className="w-full h-96 border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      
    </div>
  );
};

export default ContactPage;

