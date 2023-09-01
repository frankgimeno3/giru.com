import Image from "next/image";

const QuienesSomos = () => {
  return (
    <section className="  py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Quiénes somos
        </h2>
        <div className="flex flex-row align-center my-8">
          <div>
            <Image src="/aboutus.png" alt="aboutuse" width={800} height={800} />
          </div>
          <p className="   text-lg text-gray-600 p-10  bg-gray-50 shadow-lg">
            Somos una agencia de desarrolladores web con sede en Barcelona,
            comprometidos en ofrecer soluciones de desarrollo de software de
            alta calidad. Nuestro equipo está formado por expertos en diferentes
            tecnologías y estamos dedicados a ayudar a nuestros clientes a
            alcanzar sus objetivos tecnológicos.
          </p>
        </div>
        <div className="flex flex-row my-8">
          <p className="text-lg text-gray-600 leading-relaxed p-10 bg-gray-50 shadow-lg">
            En Giru, destacamos por la creación de
            contenido único, original y de alta calidad. Nuestra versatilidad nos
            permite trabajar en diversos sectores profesionales, asegurando
            siempre una experiencia de usuario excepcional y interfaces
            intuitivas, adaptándonos las necesidades únicas de cada cliente.
          </p>
          <div className="h-full">
            <Image src="/logo.png" alt="logo" width={800} height={800} />
          </div>
        </div>
        <div className="flex flex-row align-center my-8">
          <div>
            <Image
              src="/ia.png"
              alt="ia"
              width={1000} // Establece un valor máximo para el ancho
              height={1000} // Establece un valor máximo para el alto
              className="border border-gray-50 shadow"
            />
          </div>
          <p className="   text-lg text-gray-600 p-10  bg-gray-50 shadow-lg">
            Utilizamos inteligencia artificial para crear
            imágenes y textos originales y únicos. Todas las imágenes en nuestra web son
            generadas por IA, y no poseen derechos de autor. Ofrecemos un servicio único:
            dar vida a cualquier imagen que puedas imaginar mediante inteligencia artificial,
            para que puedas llenar tu web de imágenes sin necesidad de un fotógrafo.
            .
          </p>
        </div>
        <div className="flex flex-row my-8">
          <p className="text-lg text-gray-600 leading-relaxed p-10 bg-gray-50 shadow-lg">
            En Giru, destacamos por la creación de
            contenido único, original y de alta calidad. Nuestra versatilidad nos
            permite trabajar en diversos sectores profesionales, asegurando
            siempre una experiencia de usuario excepcional y interfaces
            intuitivas, adaptándonos las necesidades únicas de cada cliente.
          </p>
          <div className="h-full">
            <Image src="/logo.png" alt="logo" width={800} height={800} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
