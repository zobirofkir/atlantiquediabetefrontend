import React from 'react';
import FooterComponent from '../components/FooterComponent';
import { Outlet } from 'react-router-dom';
import SideBareComponent from '../components/SideBareComponent';

const Layout = () => {
  return (
    <>
      <div className="flex">
        <div>
          <SideBareComponent />
        </div>
        <div className="flex-grow">
          <div className="container mx-auto">
            <main className="min-h-screen">
              <Outlet />
            </main>
          </div>
          <footer className="bg-white text-black">
            <FooterComponent />
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
