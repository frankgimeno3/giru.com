import Image from "next/image";
const Landing = () => {
  return (
    <div className="relative">
      <div className="max-w-screen bg-black overflow-crop relative">
        <Image
          src="/giruking.png"
          alt="Giruking Image"
          width={2000}
          height={2000}
          layout="responsive"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30">
        <div className="mt-24 pt-24 w-full py-10">
          <h1 className=" mt-24 pt-24 w-full text-center font-bold text-4xl  text-white ">
            BIENVENIDO AL DESARROLLO{" "}
          </h1>
          <h1 className=" w-full text-center font-bold text-7xl   text-white ">
            ORIGINAL
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
