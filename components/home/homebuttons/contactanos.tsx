import Navbar from "../Navbar";
import Footer from "../Footer";
import Floating from "../Floating";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Contactanos = () => {
    const [currentPage, setCurrentPage] = useState<string>("Contacto");
    const router = useRouter();

    const handlePageChange = (pageName: string) => {
        setCurrentPage(pageName);
        router.push("/");
    };
 

    return (
  
            <div className="w-full h-screen flex flex-col justify-center items-center relative">
                <div className="mt-24 w-full py-16 z-10 text-gray-800">
                    <h1 className="w-full text-center font-bold text-4xl text-white">
                        CONTÁCTANOS
                    </h1>
                    <p className="w-full text-center text-xl text-white">
                        Envíanos un mail, pregúntanos cualquier cosa, háblanos del proyecto que deseas realizar.
                    </p>
                    <div className="mx-24 px-24 mt-5">
                        <form className="mx-24 text-center px-24 py-5">
                        <div className="mb-4 mx-16">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 py-2 border-2 rounded-lg bg-gray-100 bg-opacity-90 text-black placeholder-black"
                                    placeholder="Introduce tu correo electrónico"
                                />
                            </div>
                            <div className="mb-4 mx-16">
                                <input
                                    type="string"
                                    id="telefono"
                                    name="telefono"
                                    className="w-full px-3 py-2 border-2 rounded-lg bg-gray-100 bg-opacity-90 text-black placeholder-black"
                                    placeholder="Introduce un teléfono de contacto"
                                />
                            </div>
                            <div className="mb-4 mx-16">
                                 <textarea
                                    id="message"
                                    name="message"
                                    rows={10}  
                                    className="w-full px-3 py-2 border-2 rounded-lg bg-gray-100 bg-opacity-90 text-black placeholder-black"
                                    placeholder="Ingresa tu mensaje aquí"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow-500 text-black rounded-lg shadow-lg px-5 py-3 font-bold mx-5 text-sm"
                            >
                                ENVIAR FORMULARIO
                            </button>
                        </form>
                    </div>
                </div>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-purple-900 opacity-60"></div>
                    <img
                        src="/bananobanner.png"
                        alt="Giruking Image"
                        className="w-full h-full object-cover"
                    />
                </div>

        </div>
    );
}

export default Contactanos;