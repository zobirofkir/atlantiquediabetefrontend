import React, { useState } from 'react';

const SideBareComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/';
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="p-4 bg-blue-600 text-white rounded-full fixed top-4 left-4 z-50 shadow-lg"
      >
        <div className="flex flex-col items-center justify-between w-6 h-6">
          <div
            className={`w-6 h-1 bg-white transition-transform duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-white transition-opacity duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-white transition-transform duration-300 ease-in-out ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></div>
        </div>
      </button>

      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-0 z-40 transition-transform duration-300 ease-in-out`}
      >
        <div className="w-full h-full bg-blue-500 bg-opacity-50 shadow-xl flex flex-col items-center justify-center">
          <div className="flex justify-center items-center h-full">
            {/* Menu Links */}
            <ul className="flex flex-col items-center space-y-6 justify-center mr-8 rounded-lg shadow-md">
              <li>
                <a
                  href="/"
                  className="flex items-center text-white font-bold hover:text-blue-600 md:text-4xl text-xl transition-all duration-200 transform hover:scale-105"
                >
                  <svg
                    className="w-8 h-8 mr-4 text-white transition-all duration-200 transform hover:scale-105"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L2 12h3v6h6v-6h3L12 2z" />
                  </svg>
                  Inscriptions
                </a>
              </li>
              <li>
                <a
                  href="/attestations"
                  className="flex items-center text-white font-bold hover:text-blue-600 md:text-4xl text-xl transition-all duration-200 transform hover:scale-105"
                >
                  <svg
                    className="w-8 h-8 mr-4 text-white transition-all duration-200 transform hover:scale-105"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 2h-3l-3 3-3-3H6c-1.1 0-1.99.89-1.99 2L4 20c0 1.1.89 2 1.99 2h12c1.1 0 2-.89 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h3l3 3 3-3h3v16z" />
                  </svg>
                  Attestations
                </a>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white py-3 px-10 md:text-2xl rounded-full flex items-center justify-center w-full md:w-auto transition-all duration-200 transform hover:scale-105"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 17l5-5-5-5v3H3v4h7v3z" />
                  </svg>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default SideBareComponent;
