import React from "react";
import Image from "next/image";
import ActionButtons from "./ActionButtons";

import HeroHeading from "./heroHeading";

function Hero() {
   return (
      <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] sm:w-[600px] w-[320px] m-auto">
         <section className="flex  flex-col  xl:items-center lg:items-center md:items-center sm:items-center my-7 ">
            <h1 className="lg:text-5xl xl:text-5xl md:text-4xl sm:text-3xl text-lg font-bold xl:mt-16 lg:mt-14 md:mt-7 ">
               Greetings, I'm <span className="text-custom-blue">SYED AASHIQ AHAMED</span>
            </h1>
            <p className="text-sm my-5 xl:my-10 lg:my-9 md:my-6 sm:my-5 w-[250px] xl:w-[630px] lg:w-[600px] md:w-[500px] sm:w-[400px] xl:text-center lg:text-center md:text-center sm:text-center text-left xl:text-2xl lg:text-2xl md:text-xl sm:text-lg  text-custom-grey">
               A Web Developer at heart, with a knack for creating elegant Web Applications that
               cater to unique requirements.
            </p>
            <ActionButtons />
            <Image
               src="/images/hero-avatar.svg"
               width={255}
               height={255}
               className="hidden lg:block xl:block md:block sm:hidden md:my-8"
            />
            <div className="flex justify-center items-center">
               <hr className="md:hidden w-[150px] h-[2px] bg-[#E6E6E6] mt-8 text-center" />
            </div>
         </section>
      </div>
   );
}

export default Hero;
