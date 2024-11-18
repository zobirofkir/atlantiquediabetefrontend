import React from 'react';
import FooterComponent from '../components/FooterComponent';
import { Outlet, useLocation } from 'react-router-dom';
import SideBareComponent from '../components/SideBareComponent';

const Layout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className="flex">

        {!isHomePage && (
          <div>
            <SideBareComponent />
          </div>
        )}

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
