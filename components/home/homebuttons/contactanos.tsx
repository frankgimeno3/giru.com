import Navbar from "../Navbar";
import Footer from "../Footer";
import Floating from "../Floating";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from 'react';

const Contactanos = () => {
    useEffect(() => {
        const scrollToSmoothly = (to: number, duration: number) => {
            const start = window.scrollY;
            const change = to - start;
            const increment = 20;
            let currentTime = 0;

            const animateScroll = () => {
                currentTime += increment;
                const newPosition = easeInOutQuad(currentTime, start, change, duration);
                window.scrollTo(0, newPosition);

                if (currentTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
            };

            const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t + b;
                t--;
                return (-c / 2) * (t * (t - 2) - 1) + b;
            };

            requestAnimationFrame(animateScroll);
        };

        const windowHeight = window.innerHeight;
        scrollToSmoothly(0 * windowHeight, 800);
    }, []);

    const [currentPage, setCurrentPage] = useState<string>("Contacto");
    const router = useRouter();

    const handlePageChange = (pageName: string) => {
        setCurrentPage(pageName);
        router.push("/");
    };


    return (

        <div className="  h-screen flex flex-col justify-center items-center relative">
            <div className="mt-24 px-5  py-16 z-10 text-gray-800">
                <h1 className="  text-center font-bold text-3xl lg:text-4xl text-white">
                    CONTÁCTANOS
                </h1>
                <p className=" text-center text-md lg:text-xl text-white">
                    Envíanos un mail, pregúntanos cualquier cosa, háblanos del proyecto que deseas realizar.
                </p>
                <div className="lg:mx-24 lg:px-24 mt-2 lg:mt-5">
                    <form className="lg:mx-24 text-center lg:px-24 py-5">
                        <div className="mb-4 mx-2 lg:mx-16">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border-2 rounded-lg bg-gray-100 bg-opacity-90 text-black placeholder-black"
                                placeholder="Introduce tu correo electrónico"
                            />
                        </div>
                        <div className="mb-4 mx-2 lg:mx-16">
                            <input
                                type="string"
                                id="telefono"
                                name="telefono"
                                className="w-full px-3 py-2 border-2 rounded-lg bg-gray-100 bg-opacity-90 text-black placeholder-black"
                                placeholder="Introduce un teléfono de contacto"
                            />
                        </div>
                        <div className="mb-4 mx-2 lg:mx-16">
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
                            className="bg-yellow-500 text-black rounded-lg shadow-lg px-5 py-3 lg:font-bold mx-5 text-sm"
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