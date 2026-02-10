// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {
// //   return (
// //     <header className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
// //       <div className="text-2xl font-bold text-yellow-500">Firm Works</div>
// //       <nav className="space-x-6">
// //         <Link to="/" className="hover:text-yellow-500">Home</Link>
// //         <Link to="/about" className="hover:text-yellow-500">About</Link>
// //         <Link to="/services" className="hover:text-yellow-500">Services</Link>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from 'react';
// import { Menu, X, HardHat } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '#' },
//     { name: 'About', href: '#about' },
//     { name: 'Services', href: '#services' },
//     { name: 'Projects', href: '#' },
//     { name: 'Contact', href: '#' },
//   ];

//   return (
//     <nav className="fixed w-full z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
//           <div className="flex items-center gap-2">
//             <HardHat className="text-orange-600 w-8 h-8" />
//             <span className="text-2xl font-bold text-gray-900 tracking-tight">BUILD<span className="text-orange-600">PRO</span></span>
//           </div>
          
//           {/* Desktop Nav */}
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <a key={link.name} href={link.href} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav Overlay */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4">
//           {navLinks.map((link) => (
//             <a key={link.name} href={link.href} className="block text-gray-700 hover:text-orange-600 text-lg font-medium">
//               {link.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Menu, X, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo FIRMWORKS CONSTRUCTION*/}
          <div className='bg yellow'>

          <div className="flex items-center gap-0">
            <div>
            <span className="text-orange-600">FIRMWORKS</span>
            <div></div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
              CONSTRUCTION
            </span>
            </div>
          </div>
            
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)} // close mobile menu if open
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-gray-700 hover:text-orange-600 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
