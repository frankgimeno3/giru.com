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

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>("Home");
 
  const handlePageChange = (pageName: string) => {
    setCurrentPage(pageName);
  };
  let currentComponent;
  let componentclass

  switch (currentPage) {
    case "Home":
      currentComponent = <Inicio />;
      componentclass = "mx-24 px-24"
      break;
    case "QuienesSomos":
      currentComponent = <QuienesSomos />;
      componentclass = "mx-24 px-24"

      break;
    case "Servicios":
      currentComponent = <Servicios />;
      componentclass = "mx-24 px-24"

      break;
      case "Contacto":
        currentComponent = <Contacto />;
        componentclass = ""
        break;
    default:
      currentComponent = <Inicio />;
      componentclass = "mx-24 px-24"

  }

 
  // Renderizado condicional de Landing
  const shouldRenderLanding =
    currentPage === "Home" || currentPage === "QuienesSomos" || currentPage === "Servicios";

  return (
    <div className="bg-white">
      <div className="bg-slate-300 bg-opacity-10">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        {shouldRenderLanding && <Landing />}
        
        <div className={componentclass}>{currentComponent}</div>
        <Footer onPageChange={handlePageChange} />
        <div className="fixed bottom-0 right-0 p-4">
          <Floating />
        </div>
      </div>
    </div>
  );
}


