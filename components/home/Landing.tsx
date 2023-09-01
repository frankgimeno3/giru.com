import Image from "next/image"
const Landing = () => {
    return (
        <div className="flex flex-col">
           <div className="max-w-screen bg-black  overflow-crop">
           <Image
          src="/giruking.png"
          alt="Giruking Image"
          width={2000}
          height={2000}
          layout="responsive"  
          objectFit="cover"    
          objectPosition="top"  
        />          </div>
       </div>
    );
  };
  
  export default Landing;