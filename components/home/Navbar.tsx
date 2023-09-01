 const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black py-3 flex flex-row text-yellow-500 justify-center z-50 align-center font-sans">
 
        <h2 className="font-bold text-2xl mx-5 mb-1">Giru.es</h2>
        <button className="mx-5  text-sm">
            Home
        </button >
        <button className="mx-5  text-sm">
            Nosotros
        </button>
        <button className="mx-5  text-sm">
            Servicios
        </button>
        
        <button className="mx-5  text-sm">
            Contáctanos
        </button>
        <button className="bg-yellow-500 text-black rounded-lg shadow-lg px-2 py-1 font-bold mx-5  text-sm">
            INICIAR SESIÓN
        </button>
      </nav>
    );
  };
  
  export default Navbar;