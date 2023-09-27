import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Floating from "../components/home/Floating";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
    const [currentPage, setCurrentPage] = useState<string>("Home");
    const router = useRouter();

    const handlePageChange = (pageName: string) => {
        setCurrentPage(pageName);
        router.push("/");
    };

    return (
        <div className="bg-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className="w-full h-screen flex flex-col justify-center items-center   relative ">
                <div className="mt-24 w-full py-16 z-10 text-gray-800">
                    <h1 className="w-full text-center font-bold text-4xl text-white ">
                        INICIAR SESIÓN
                    </h1>
                    <p className="w-full text-center   text-xl text-white ">
                        Acceda a su contenido personalizado como cliente de Giru
                    </p>
                    <div className="mx-24 px-24 mt-5">
                        <form className=" mx-24 text-center px-24 py-5">
                            <div className="mb-4 mx-16">

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 py-2 border-2 rounded-lg bg-gray-100 bg-opacity-90 text-black placeholder-black"
                                    placeholder="Ingrese su correo electrónico"
                                />
                            </div>
                            <div className="mb-4 mx-16">

                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full px-3 py-2 border-2 rounded-lg bg-gray-100 bg-opacity-90 text-black placeholder-black"
                                    placeholder="Ingrese su contraseña"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow-500 text-black rounded-lg shadow-lg px-5 py-3 font-bold mx-5 text-sm "                            >
                                INICIAR SESIÓN
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
            <Footer onPageChange={handlePageChange} />
        </div>
    );
}