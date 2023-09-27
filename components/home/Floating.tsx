import React, { useState, useEffect } from "react";
import Image from "next/image";

interface FloatingProps {
  setCurrentPage: (pageName: string) => void;
}
const Floating: React.FC<FloatingProps> = ({ setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      const scrollPercentage = (scrollY / (pageHeight - windowHeight)) * 100;

      if (scrollPercentage >= 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const irContactanos = () => {
    setCurrentPage("Contacto")
  }


  return (
    <>
      {isVisible && (
        <div>
          <div className="relative  "
            onClick={irContactanos}
          >
            <Image src="/Llamanos.png" alt="Llamanos" width={150} height={150} className="rounded-full brightness-50 shadow-xl" />
          </div>
          <h3 className="absolute top-4 pl-6 pt-14 mt-1  text-lg text-white ">
            Contáctanos
          </h3>
          <div className="absolute top-3 left-3  ">
            <Image src="/Llamanos.png" alt="Llamanos" width={150} height={150} className="rounded-full shadow-xl hover:opacity-0" />
          </div>
        </div>

      )}
    </>
  );
};

export default Floating;