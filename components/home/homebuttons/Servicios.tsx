import Image from "next/image";

const Contacto = () => {
  return (
    <div className="bg-white pb-12 pt-8 relative px-24 text-sm">
      <div>
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">
          Nuestros servicios
        </h2>
        <p className="   text-base text-gray-600 p-5   bg-transparent leading-relaxed ">
          Disponemos de diferentes servicios que se adaptan perfil de negocio de
          nuestros clientes. Paralelamente, ofrecemos la posibilidad de
          personalizar las soluciones a cada caso particular.
        </p>

        <h2 className="text-2xl font-semibold text-gray-600 mb-2 mt-7">
          Servicios disponibles
        </h2>

        <div className="flex flex-row align-center mt-6  shadow-lg">
          <div>
            <Image
              src="/tienda.png"
              alt="tienda"
              width={650}
              height={650}
             />
          </div>
          <div className="   text-lg text-gray-600 p-10  bg-gray-50 shadow-lg">
            <p className="font-bold">Soluciones para comercios retail</p>
            <p className="   text-base text-gray-600  bg-transparent leading-relaxed ">
              Implementámos páginas web para su negocio, en las que puede
              mostrar su ubicación, productos, contacto... Creamos catálogos
              digitales, con carrito de la compra y funcionalidades para tienda
              online
            </p>
          </div>
        </div>
        <div className="flex flex-row align-center mt-6  shadow-lg">
          <div className="   text-lg text-gray-600  p-10 pr-16 pt-24 bg-gray-50 shadow-lg">
            <p className="font-bold">Soluciones para empresas</p>
            <p className="   text-base text-gray-600    bg-transparent leading-relaxed ">
              Brindamos soluciones web para lo que su web necesite.
              Desde aplicaciones para automatizar tareas, hasta sitios webs corporativos.
            </p>
          </div>
          <div className="h-full">
            <Image src="/oficina.png" alt="oficina" width={420} height={420} />
          </div>
        </div>
        <div className="flex flex-row align-center mt-6  shadow-lg">
          <div>
            <Image
              src="/revision1.png"
              alt="revision1"
              width={870}
              height={870}
             />
          </div>
          <p className="   text-base text-gray-600 p-10 pt-16  bg-transparent leading-relaxed ">
            Te guiamos paso a paso. Dispondrás de comunicación directa con un
            comercial técnico que te asesorará desde la fase de diseño hasta la
            entrega final. Se te realizará un seguimiento en tiempo real del
            estado de tu página web, para que puedas ver de cerca que se está
            desarrollando correctamente.
          </p>
        </div>
        <div className="flex flex-row align-center mt-6  shadow-lg">
        <p className="   text-base text-gray-600 p-10  pt-20  bg-transparent leading-relaxed ">
            Una vez dispongas de la página web, estamos a tu disposición para la
            resolución de problemas técnicos y reparaciones. Contáctanos a
            nuestro whatsap para recibir una respuesta rápida, solucionando tus
            problemas en un tiempo récord.
          </p>
          <div className="h-full">
            <Image src="/reparar.png" alt="reparar" width={725} height={725} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
