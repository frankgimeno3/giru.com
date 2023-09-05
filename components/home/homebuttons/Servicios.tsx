import Image from "next/image";

const Contacto = () => {
  return (
    <div className="bg-white py-12 relative px-24 text-sm">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Nuestros servicios
        </h2>
        <p>
          Disponemos de diferentes servicios que se adaptan perfil de negocio de
          nuestros clientes. Paralelamente, ofrecemos la posibilidad de
          personalizar las soluciones a cada caso particular.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4 mt-10">
          Servicios disponibles
        </h2>

        <div className="flex flex-row align-center my-8">
          <div>
            <Image
              src="/tienda.png"
              alt="tienda"
              width={700}  
              height={700}  
              className="border border-gray-50 shadow"
            />
          </div>
          <div className="   text-lg text-gray-600 p-10  bg-gray-50 shadow-lg">
            <p className="font-bold">Soluciones para comercios retail</p>
            <p className="   text-lg text-gray-600 ">
              Implementámos páginas web para su negocio, en las que puede
              mostrar su ubicación, productos, contacto... Creamos catálogos
              digitales, con carrito de la compra y funcionalidades para tienda
              online
            </p>
          </div>
        </div>
        <div className="flex flex-row my-8">
           <div className="   text-lg text-gray-600 p-10  bg-gray-50 shadow-lg">
            <p className="font-bold">Soluciones para empresas</p>
            <p className="   text-lg text-gray-600 ">
            Brindamos soluciones web para lo que su web necesite.
            Desde aplicaciones para automatizar tareas, hasta sitios webs corporativos. 
            </p>
          </div>       
          <div className="h-full">
            <Image src="/oficina.png" alt="oficina" width={500} height={500} />
          </div>
        </div>
        <div className="flex flex-row align-center my-8">
          <div>
            <Image
              src="/revision1.png"
              alt="revision1"
              width={700}  
              height={700}  
              className="border border-gray-50 shadow"
            />
          </div>
          <p className="   text-lg text-gray-600 p-10  bg-gray-50 shadow-lg">
            Te guiamos paso a paso. Dispondrás de comunicación directa con un
            comercial técnico que te asesorará desde la fase de diseño hasta la
            entrega final. Se te realizará un seguimiento en tiempo real del
            estado de tu página web, para que puedas ver de cerca que se está
            desarrollando correctamente.
          </p>
        </div>
        <div className="flex flex-row my-8">
          <p className="text-lg text-gray-600 leading-relaxed p-10 pt-16 bg-gray-50 shadow-lg">
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
