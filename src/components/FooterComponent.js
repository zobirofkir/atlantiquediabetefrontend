import React from 'react';

const FooterComponent = () => {
  const name = localStorage.getItem('name');
  
  return (
    <div className="text-center bg-gradient-to-r from-blue-500 to-blue-600 w-full md:px-0 px-4">
      <p className="text-xl text-center py-4 text-white font-bold tracking-wide">
        &copy; 2024 { name ?? 'Société Marocaine de Diabétologie' }. Tous droits reserves.
      </p>
    </div>
  );
};

export default FooterComponent;
