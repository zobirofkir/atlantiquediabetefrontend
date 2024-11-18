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
    <div className="relative my-20">
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
        } fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-transform duration-300 ease-in-out`}
      >
        <div className="w-64 h-full bg-white shadow-xl transform flex flex-col justify-between">
          <div className="p-4 mt-20 flex justify-center">
            <img src='https://www.shutterstock.com/image-vector/medical-sign-symbol-snake-caduceus-600nw-2416071067.jpg' alt="Logo" className='w-[100px] h-[100px] animate-pulse'/>
          </div>
          <ul className="flex flex-col justify-center items-center space-y-4 flex-grow">
            <li><a href="/inscriptions" className="text-gray-700 hover:text-blue-600 font-bold md:text-xl text-md">Inscriptions</a></li>
            <li><a href="/atessations" className="text-gray-700 hover:text-blue-600 font-bold md:text-xl text-md">Demandes d'attestation</a></li>
          </ul>

          <ul className="flex flex-col justify-end items-center ">
            <li className='my-[100px]'>
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                Logout
              </button>
            </li>
          </ul>
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
