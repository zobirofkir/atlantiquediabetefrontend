import React from 'react';
import FooterComponent from '../components/FooterComponent';
import { Outlet } from 'react-router-dom';



const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white text-black">
        <FooterComponent />
      </footer>
    </div>
  );
};

export default Layout;
