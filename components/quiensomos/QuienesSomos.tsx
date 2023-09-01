import Image from "next/image";

const QuienesSomos = () => {
  return (
    <section className="  py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Quiénes somos
        </h2>
        <div className="flex flex-row">
          <div>
            <Image src="/aboutus.png" alt="aboutuse" width={800} height={800} />
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Somos una agencia de programadores con sede en Barcelona,
            comprometidos en ofrecer soluciones de desarrollo de software de
            alta calidad. Nuestro equipo está formado por expertos en diferentes
            tecnologías y estamos dedicados a ayudar a nuestros clientes a
            alcanzar sus objetivos tecnológicos.
          </p>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Nuestra pasión por la programación y la innovación nos impulsa a
            ofrecer resultados excepcionales. Si estás buscando un equipo
            confiable y experimentado en Barcelona para tus proyectos de
            desarrollo, ¡no dudes en ponerte en contacto con nosotros!
          </p>
      </div>
    </section>
  );
};

export default QuienesSomos;
