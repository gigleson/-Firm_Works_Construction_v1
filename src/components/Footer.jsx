// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white text-center py-6 mt-10">
//       <p>© 2026 Firm Works Construction. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="text-2xl font-bold text-white tracking-tight">BUILD<span className="text-orange-600">PRO</span></span>
          <p className="mt-4 text-sm text-gray-500">
            123 Construction Ave, Skyline City, NY 10001
          </p>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} BuildPro Construction Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;