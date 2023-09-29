import Image from "next/image";
const Landing = () => {
  const scrollDown = () => {
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
    const scrollAmount = 0.8 * windowHeight; //esto es el desplazamiento hasta el que scrolleamos
    scrollToSmoothly(scrollAmount, 1000);
  }
  return (
    <div className="relative bg-black  pt-16">
      <div className="pt-1 lg:max-w-screen bg-black lg:overflow-crop relative">

          <Image
            src="/bananobanner.png"
            alt="Giruking Image"
            width={1900}
            height={2000}

            objectPosition="top"
            className="h-64 object-none "
          />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30 ">
        <div className=" lg:mt-16 pt-24 w-full py-10">
          <h1 className=" lg:mt-16 lg:pt-24 w-full text-center font-bold text-xl lg:text-4xl  text-white ">
            BIENVENIDO AL DESARROLLO{" "}
          </h1>
          <h1 className=" w-full text-center font-bold text-4xl lg:text-7xl   text-white ">
            ORIGINAL
          </h1>
        </div>
      </div>
      <div className="hidden md:block absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-25">
        <div className="lg:mt-24 lg:pt-24 ">
          <button className="mt-24   bg-white hover:bg-yellow-500 bg-opacity-20 hover:bg-opacity-40 p-2 rounded-full shadow-md hover:shadow-lg"
            onClick={scrollDown}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="15" y1="5" x2="15" y2="22"></line>
              <polyline points="24 15 15 24 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
