import Link from "next/link"
const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black py-3 flex flex-row text-yellow-500 justify-center z-50 align-center font-sans">
        <h2 className="font-bold text-5xl mx-5">GIRU.com</h2>
        <button className="mx-5 mt-2 text-md">
            HOME
        </button >
        <button className="mx-5 mt-2 text-md">
            NOSOTROS
        </button>
        <button className="mx-5 mt-2 text-md">
            SERVICIOS
        </button>
        
        <button className="mx-5 mt-2 text-md">
            CONTÁCTANOS
        </button>
        <button className="bg-yellow-500 text-black rounded-lg shadow-lg px-2 py-1 font-bold mx-5 mt-2 text-sm">
            INICIAR SESIÓN
        </button>
      </nav>
    );
  };
  
  export default Navbar;