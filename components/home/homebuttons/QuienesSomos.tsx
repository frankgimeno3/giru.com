import Image from "next/image";
import { useEffect } from 'react';

const QuienesSomos = () => {
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
    const scrollAmount = 0.82 * windowHeight; //esto es el desplazamiento hasta el que scrolleamos
    scrollToSmoothly(scrollAmount, 1000);
  }, []);
 

  return (
    <section className="bg-white pb-12 pt-8 relative px-24 text-sm">
      <div>
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">
          Quiénes somos
        </h2>
        <div className="flex flex-row align-center mt-6  shadow-lg">
          <div>
            <Image src="/aboutus.png" alt="aboutuse" width={790} height={790} />
          </div>
          <p className="   text-base text-gray-600 p-10  bg-transparent leading-relaxed  pt-12">
            Somos una agencia de desarrolladores web con sede en Barcelona,
            comprometidos en ofrecer soluciones de desarrollo de software de
            alta calidad. Nuestro equipo está formado por expertos en diferentes
            tecnologías y estamos dedicados a ayudar a nuestros clientes a
            alcanzar sus objetivos tecnológicos.
          </p>
        </div>
        <div className="flex flex-row align-center mt-6  shadow-lg">
        <p className="   text-base text-gray-600 p-10  bg-transparent leading-relaxed  pt-10">
            En Giru, destacamos por la creación de <span className="font-bold">contenido único,</span> original y
            de alta calidad. Nuestra versatilidad nos permite trabajar en
            diversos sectores profesionales, asegurando siempre una experiencia
            de usuario excepcional y interfaces intuitivas, adaptándonos las
            necesidades únicas de cada cliente. <span className="font-bold">Trabajamos tanto con agencias como con empresas que quieran su propia web!</span>
          </p>
          <div className="h-full">
            <Image src="/logo.png" alt="logo" width={940} height={940} />
          </div>
        </div>
        <div className="flex flex-row align-center mt-6  shadow-lg">
          <div>
            <Image
              src="/ia.png"
              alt="ia"
              width={925} // Establece un valor máximo para el ancho
              height={925} // Establece un valor máximo para el alto
             />
          </div>
          <p className="   text-base text-gray-600 p-10  bg-transparent leading-relaxed  pt-14">
            Utilizamos inteligencia artificial para crear imágenes y textos
            originales y únicos. Ofrecemos un servicio único:
            dar vida a cualquier imagen que puedas imaginar mediante
            inteligencia artificial, para que puedas llenar tu web de imágenes
            sin necesidad de un fotógrafo.
            <span className="font-bold"> Todas las imágenes de esta web han sido creadas con inteligencia artificial!</span>
          </p>
        </div>
        <div className="flex flex-row align-center mt-6  shadow-lg">
        <p className="   text-base text-gray-600 p-10  bg-transparent leading-relaxed  pt-20">
            Tu tiempo es valioso, y en Giru, estamos aquí para maximizar su
            aprovechamiento y garantizar el éxito de tu proyecto. Trabajamos en
            un rango de <span className="font-bold  "> tiempo aproximado de 2 meses </span> desde la conceptualización del
            proyecto hasta su entrega
          </p>
          <div className="h-full">
            <Image
              src="/tutiempo.png"
              alt="tutiempo"
              width={645}
              height={645}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
