import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 relative px-24 text-sm">
      <Image
        src="/bananobanner.png"
        alt="Bananobanner"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        width={3000} height={450}
      />
      <div className="mx-24 text-white ">
        <div className="flex flex-row  items-top justify-between align-top">
          <div className="mb-4 flex-1">
            <h3 className="text-md font-semibold">Sobre Nosotros</h3>
            <p className="text-md mt-5">
            Giru.es es una agencia de desarrolladores web con sede en Barcelona, comprometidos en ofrecer soluciones de desarrollo de software de alta calidad. Nuestro equipo está formado por expertos en diferentes tecnologías y estamos dedicados a ayudar a nuestros clientes a alcanzar sus objetivos tecnológicos.
            </p>
            <p className="text-md">
            Actualmente, formamos parte del grupo PROPORCION3,S.A. medios de comunicación .</p>
          </div>
          <div className="mb-4  flex-1 text-center" >
            <h3 className="text-md font-semibold">Enlaces Rápidos</h3>
            <ul className="  flex flex-col">
              <li className="mt-5">
                <a href="#" >Inicio</a>
              </li>
              <li className="mt-5">
                <a href="#" >Nosotros</a>
              </li>
              <li className="mt-5">
                <a href="#" >Servicios</a>
              </li>
              <li className="mt-5">
                <a href="#" >Contacto</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-md font-semibold">Contáctanos</h3>
            <address className="flex flex-col text-sm mt-5">
              <p>Dirección: Bruc 48, Barcelona</p>
              <p>Teléfono: (+34) *** *** ***</p>
              <p>Email: info@miempresa.com</p>
            </address>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-400 text-sm">
          &copy; 2023 Mi Empresa | Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
