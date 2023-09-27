import Image from "next/image";
import QuienesSomos from "../components/home/homebuttons/QuienesSomos";
import Inicio from "../components/home/homebuttons/Inicio";
import Contacto from "../components/home/homebuttons/Contacto";
import Servicios from "../components/home/homebuttons/Servicios";
import Navbar from "../components/home/Navbar";
import Landing from "../components/home/Landing";
import Footer from "../components/home/Footer";
import Floating from "../components/home/Floating";
import React, { useState } from "react";
import Iniciarsesion from "./login"
export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>("Home");

  const handlePageChange = (pageName: string) => {
    setCurrentPage(pageName);
  };
  let currentComponent;

  switch (currentPage) {
    case "Home":
      currentComponent = <Inicio />;
      break;
    case "QuienesSomos":
      currentComponent = <QuienesSomos />;
      break;
    case "Servicios":
      currentComponent = <Servicios />;
      break;
    case "Contacto":
      currentComponent = <Contacto />;
      break;
      case "Iniciarsesion":
        currentComponent = <Iniciarsesion />;
        break;
    default:
      currentComponent = <div>No se encontró la página</div>;
  }
  return (
    <div className="bg-white">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      <Landing />
      <div className="mx-24 px-24">{currentComponent}</div>
      <Footer onPageChange={handlePageChange}/>
      <div className="fixed bottom-0 right-0 p-4">
        <Floating />
      </div>
    </div>
  );
}
