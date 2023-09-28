import Image from "next/image";
import QuienesSomos from "../components/home/homebuttons/QuienesSomos";
import Inicio from "../components/home/homebuttons/Inicio";
import Servicios from "../components/home/homebuttons/Servicios";
import Navbar from "../components/home/Navbar";
import Landing from "../components/home/Landing";
import Footer from "../components/home/Footer";
import Floating from "../components/home/Floating";
import React, { useState } from "react";
import Iniciarsesion from "./login";
import Contacto from "../components/home/homebuttons/contactanos";
import { useRouter } from "next/router";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const handlePageChange = (pageName: string) => {
    setCurrentPage(pageName);
  };
  let currentComponent;
  let componentclass

  switch (currentPage) {
    case "Home":
      currentComponent = <Inicio />;
      componentclass = "md:mx-5 md:mx-12 lg:mx-24   md:px-12 lg:px-24"
      break;
    case "QuienesSomos":
      currentComponent = <QuienesSomos />;
      componentclass = "md:mx-5 md:mx-12 lg:mx-24   md:px-12 lg:px-24"

      break;
    case "Servicios":
      currentComponent = <Servicios />;
      componentclass = "md:mx-5 md:mx-12 lg:mx-24   md:px-12 lg:px-24"

      break;
    case "Contacto":
      currentComponent = <Contacto />;
      componentclass = ""
      break;
    default:
      currentComponent = <Inicio />;
      componentclass = "md:mx-5 md:mx-12 lg:mx-24   md:px-12 lg:px-24"

  }


  const shouldRenderLanding =
    currentPage === "Home" || currentPage === "QuienesSomos" || currentPage === "Servicios";


  const handleQuienesClick = () => {
    setCurrentPage('QuienesSomos')
    setIsMenuOpen(false)
  };

  const handleServiciosClick = () => {
    setCurrentPage('Servicios')
    setIsMenuOpen(false)
  };

  const handleIniciarSesionClick = () => {
    router.push('/login');
    setIsMenuOpen(false)
  };

  const gotocontacts = () => {
    setCurrentPage("Contacto")
    setIsMenuOpen(false)
  };
   
  return (
    <>
      <div className="flex flex-col bg-slate-50 absolute  inset-0 " >
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}
          isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {shouldRenderLanding && <Landing />}

        <div className={componentclass}>{currentComponent}</div>
        <Footer onPageChange={handlePageChange} />
        {currentPage !== "Contacto" && (
          <div className="fixed bottom-2 right-0  p-3">
            <Floating setCurrentPage={setCurrentPage} />
          </div>
        )}
        <div className={isMenuOpen ? 
          'fixed top-0 right-0 flex flex-col text-gray-800 z-50 bg-white bg-opacity-90   mt-16 border border-gray-100' : 'hidden'}>
          <ul className='flex flex-col text-lg text-gray-600 w-screen '>
            <button className='p-8 py-14 w-full border border-gray-100 bg-white bg-opacity-80' onClick={handleQuienesClick}>
              Nosotros
            </button>
            <button className='p-8 py-16 w-full border border-gray-100 bg-white bg-opacity-80' onClick={handleServiciosClick}>
              Servicios
            </button>
            <button className='p-8 py-16 w-full border border-gray-100 bg-white bg-opacity-80' onClick={gotocontacts}>
              Contáctanos
            </button>
            <button className='p-8 py-16 w-full border border-gray-100 bg-white bg-opacity-80' onClick={handleIniciarSesionClick}>
              Iniciar Sesión
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}


