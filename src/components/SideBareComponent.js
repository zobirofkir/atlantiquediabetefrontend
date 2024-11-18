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
        className="px-4 py-2 bg-gray-800 text-white rounded-full fixed top-4 left-4 z-50 shadow-md hover:bg-gray-700 transition duration-300"
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
        } fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-start p-6 space-y-6 mt-16">
          <h2 className="text-2xl font-semibold mb-4">SMD</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="/dashboard"
                className="flex items-center text-lg hover:text-blue-500 transition duration-300"
              >
                <svg
                  className="w-6 h-6 mr-3"
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
                className="flex items-center text-lg hover:text-blue-500 transition duration-300"
              >
                <svg
                  className="w-6 h-6 mr-3"
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
                className="flex items-center bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
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

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default SideBareComponent;
