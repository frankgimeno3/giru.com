import React from 'react';
import Image from "next/image";

import { useRouter } from "next/router";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (pageName: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {

  const router = useRouter();

  const handleHomeClick = () => {
    setCurrentPage('Home')
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50  ">
      <div className='flex flex-row  z-10 relative'>
        <button
          className="flex justify-left text-yellow-500     px-5 py-3  m-2 ml-5 text-lg  "
          onClick={handleHomeClick}

        ><span className='font-bold'>giru</span>.es</button>
      <div className="flex flex-row justify-center  align-center  py-2 w-full  text-gray-800 font-bold">
        <button
          className={`mx-5 text-sm ${currentPage === 'Home' ? 'text-white' : 'text-yellow-500'}`}
          onClick={handleHomeClick}
        >
          Home
        </button>
        <button
          className={`mx-5 text-sm ${currentPage === 'QuienesSomos' ? 'text-white' : 'text-yellow-500'}`}
          onClick={handleQuienesClick}
        >
          Nosotros
        </button>
        <button
          className={`mx-5 text-sm ${currentPage === 'Servicios' ? 'text-white' : 'text-yellow-500'}`}
          onClick={handleServiciosClick}
        >
          Servicios
        </button>
        <button
          className={`mx-5 text-sm ${currentPage === 'Contacto' ? 'text-white' : 'text-yellow-500'}`}
          onClick={gotocontacts}
        >
          Contáctanos
        </button>
         <button
          className="bg-yellow-500 text-black rounded-lg  my-1 px-4  mx-5 text-sm font-light "
          onClick={handleIniciarSesionClick}
        >
          Iniciar Sesión
        </button>
         </div>
      </div>

      <div className="absolute inset-0 opacity-80 bg-black"> </div>
    </nav>
  );
};

export default Navbar;