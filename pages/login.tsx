import Image from "next/image";
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
                  <Navbar currentPage="Iniciarsesion" onPageChange={handlePageChange} />

            iNICIAR SESION
            <Footer/>
        </div>
    );
}
