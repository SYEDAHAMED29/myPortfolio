"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const liveUrl = "https://countries-syed.vercel.app/";
const githubUrl = "https://github.com/SYEDAHAMED29/countries-FrontEnd_Mentor";

function CountriesProject() {
   function handleClicklive() {
      window.open(liveUrl, "_blank");
   }
   function handleClickCode() {
      window.open(githubUrl, "_blank");
   }
   return (
      <div className="flex flex-col sm:flex-row md:gap-8 sm:gap-2 w-[320px] h-[410px] sm:w-full  sm:justify-center lg:items-center sm:items-start md:items-start sm:bg-inherit sm:shadow-none bg-white rounded-[10px] shadow-lg">
         <Image
            src="/images/countries.svg"
            alt="Eternaa Project Hero"
            width={320}
            height={180}
            className="lg:w-[600px] lg:h-[330px] md:w-[400px] md:h-[300px] sm:w-[300px] sm:h-[300px] "
         />

         <div className="flex flex-col md:items-start  ">
            <Link
               href="https://countries-syed.vercel.app/"
               className="text-xl md:text-4xl  font-bold text-center lg:text-left my-4 lg:mt-2 md:mt-3 md:mb-6"
               target="_blank"
            >
               Countries Web App
            </Link>
            <p className="text-center text-sm font-light sm:text-left sm:w-[300px] px-8 mb-4 lg:mb-12 md:mb-6 lg:text-xl md:text-base md:px-0 md:text-left lg:w-[500px] md:w-[350px]">
               Crafted a responsive web app in React.js, utilizing the REST Countries API to
               showcase comprehensive country data, offering users an informative and engaging
               experience
            </p>
            <div className="flex gap-6 justify-center items-center md:justify-start">
               <Image
                  src="/images/goto.svg"
                  width={32}
                  height={42}
                  alt="Link Icon"
                  className="cursor-pointer "
                  onClick={handleClicklive}
               />
               <Image
                  src="/images/GithubProject.svg"
                  width={40}
                  height={40}
                  alt="Github Icon"
                  className="cursor-pointer"
                  onClick={handleClickCode}
               />
            </div>
         </div>
      </div>
   );
}

export default CountriesProject;
