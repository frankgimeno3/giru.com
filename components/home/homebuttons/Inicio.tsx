import Image from "next/image";

const Inicio = () => {
  return (
    <div className="bg-white py-12 relative px-24 text-sm">
      <div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Qué es Giru.es? 
        </h2> 
        <p className="text-black">
          Giru es una empresa dedicada al desarrollo de páginas web.
          Puedes consultar quién somos, los servicios que realizamos y entrar en contacto con nosotros utilizando los botones más arriba.
          A continuación te detallamos por qué trabajar con nosotros si necesitas una página web para tu negocio, y qué nos diferencia de las otras opciones disponibles en el mercado.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4 mt-4">
          Por qué trabajar con nosotros?
        </h2>
         
        <div className="flex flex-row align-center my-8">
          <div>
            <Image
              src="/ia.png"
              alt="ia"
              width={1080} // Establece un valor máximo para el ancho
              height={1080} // Establece un valor máximo para el alto
              className="border border-gray-50 shadow"
            />
          </div>
          <p className="   text-lg text-gray-600 p-10  bg-gray-50 shadow-lg">
            Utilizamos inteligencia artificial para crear imágenes y textos
            originales y únicos. Ofrecemos un servicio único:
            dar vida a cualquier imagen que puedas imaginar mediante
            inteligencia artificial, para que puedas llenar tu web de imágenes
            sin necesidad de un fotógrafo. 
            <span className="font-bold">Todas las imágenes de esta web han sido creadas con inteligencia artificial!</span>
          </p>
        </div>
        <div className="flex flex-row my-8">
          <p className="text-lg text-gray-600 leading-relaxed p-10 pt-16 bg-gray-50 shadow-lg">
            Tu tiempo es valioso, y en Giru, estamos aquí para maximizar su
            aprovechamiento y garantizar el éxito de tu proyecto. Trabajamos en
            un rango de <span className="font-bold text-xl"> tiempo récord de 2 meses </span> desde la conceptualización del
            proyecto hasta su entrega
          </p>
          <div className="h-full">
            <Image
              src="/tutiempo.png"
              alt="tutiempo"
              width={725}
              height={725}
            />
          </div>
        </div>
        <div className="flex flex-row align-center my-8">
          <div>
            <Image
              src="/revision1.png"
              alt="revision1"
              width={900} // Establece un valor máximo para el ancho
              height={900} // Establece un valor máximo para el alto
              className="border border-gray-50 shadow"
            />
          </div>
          <p className="   text-lg text-gray-600 p-10  bg-gray-50 shadow-lg">
            Te guiamos paso a paso. Dispondrás de comunicación directa con un comercial técnico que te asesorará desde la fase de diseño hasta la entrega final.
            Se te realizará un seguimiento en tiempo real del estado de tu página web, para que puedas ver de cerca que se está desarrollando correctamente.
          </p>
        </div>
        <div className="flex flex-row my-8">
          <p className="text-lg text-gray-600 leading-relaxed p-10 pt-16 bg-gray-50 shadow-lg">
            Una vez dispongas de la página web, estamos a tu disposición para la resolución de problemas técnicos y reparaciones.
            Contáctanos a nuestro whatsap para recibir una respuesta rápida, solucionando tus problemas en un tiempo récord.
          </p>
          <div className="h-full">
            <Image
              src="/reparar.png"
              alt="reparar"
              width={725}
              height={725}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Inicio;
