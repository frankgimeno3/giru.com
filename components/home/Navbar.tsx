import React, { useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/router";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (pageName: string) => void;
  isMenuOpen: any
  setIsMenuOpen: any
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, isMenuOpen,
  setIsMenuOpen }) => {
  const router = useRouter();

  const handleHomeClick = () => {
    setCurrentPage('Home')
    setIsMenuOpen(false)
  };

  const handleQuienesClick = () => {
    setCurrentPage('QuienesSomos')
  };

  const handleServiciosClick = () => {
    setCurrentPage('Servicios')
  };

  const handleIniciarSesionClick = () => {
    router.push('/login');
  };

  const gotocontacts = () => {
    setCurrentPage("Contacto")
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="flex flex-row justify-between z-10 relative">
          <button
            className="text-yellow-500 px-5 py-3 m-2 ml-5 text-lg"
            onClick={handleHomeClick}
          >
            <span className='font-bold'>giru</span>.es
          </button>
          <div className="hidden sm:block flex flex-row text-right pr-4 py-2 w-full text-gray-800 font-bold">
            <button
              className={`mx-4 text-sm ${currentPage === 'Home' ? 'text-white' : 'text-yellow-500'}`}
              onClick={handleHomeClick}
            >
              Home
            </button>
            <button
              className={`mx-4 text-sm ${currentPage === 'QuienesSomos' ? 'text-white' : 'text-yellow-500'}`}
              onClick={handleQuienesClick}
            >
              Nosotros
            </button>
            <button
              className={`mx-4 text-sm ${currentPage === 'Servicios' ? 'text-white' : 'text-yellow-500'}`}
              onClick={handleServiciosClick}
            >
              Servicios
            </button>
            <button
              className={`mx-4 text-sm ${currentPage === 'Contacto' ? 'text-white' : 'text-yellow-500'}`}
              onClick={gotocontacts}
            >
              Contáctanos
            </button>
            <button
              className="bg-yellow-500 text-black rounded-lg my-2 px-3 ml-3 md:mx-4 py-2 text-sm font-light"
              onClick={handleIniciarSesionClick}
            >
              Iniciar Sesión
            </button>
          </div>
          <button className=' mr-10 mt-4 sm:hidden '
            onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48">
              <path
                fill="#FFF"
                d="M12 14h24c1.1 0 2-.9 2-2s-.9-2-2-2H12c-1.1 0-2 .9-2 2s.9 2 2 2zm0 8h24c1.1 0 2-.9 2-2s-.9-2-2-2H12c-1.1 0-2 .9-2 2s.9 2 2 2zm0 8h24c1.1 0 2-.9 2-2s-.9-2-2-2H12c-1.1 0-2 .9-2 2s.9 2 2 2z"
              />
            </svg>
          </button>
        </div>
        <div className="absolute inset-0 opacity-80 bg-black"></div>
      </nav>

    </>
  );
};

export default Navbar;