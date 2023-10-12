"use client";

import Image from "next/image";
import React, {useState} from "react";

function Header() {
   const [toggle, setToggle] = useState(false);
   return (
      <header className="w-full ">
         <div className=" xl:w-[1200px] lg:w-[1000px] md:w-[768px] sm:w-[600px] w-[320px] m-auto relative">
            <div className="flex items-center justify-between xl:h-[100px] lg:h-[100px] md:h-[100px] sm:h-[80px] h-[60px]">
               <div className="flex items-center xl:gap-4 lg:gap-4 md:gap-4 sm:gap-2 gap-2 ">
                  <Image
                     src="/images/logo-portfolio.svg"
                     width={48}
                     height={48}
                     className="xl:w-[78px] xl:h-[78px] lg:w-[78px] lg:h-[78px] md:w-[60px] md:h-[60px]   "
                  />
                  <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-lg font-extrabold  gradient-bg">
                     SYED AASHIQ AHAMED
                  </h1>
               </div>
               <nav className="hidden md:flex xl:flex lg:flex xl:gap-8 lg:gap-8 md:gap-4 xl:text-xl lg:text-xl md:text-base font-semibold ">
                  <a
                     href="#about"
                     className="hover:text-custom-blue hover:underline hover:underline-offset-8"
                  >
                     ABOUT ME
                  </a>
                  <a
                     href="#experience"
                     className="hover:text-custom-blue hover:underline hover:underline-offset-8"
                  >
                     EXPERIENCE
                  </a>
                  <a
                     href="#projects"
                     className="hover:text-custom-blue hover:underline hover:underline-offset-8"
                  >
                     PROJECTS
                  </a>
                  <a
                     href="#contact"
                     className="hover:text-custom-blue hover:underline hover:underline-offset-8"
                  >
                     CONTACT
                  </a>
               </nav>
               <Image
                  src={`${toggle ? "/images/cross.svg" : "/images/hamburger.svg"}`}
                  className="xl:hidden lg:hidden md:hidden"
                  width={30}
                  height={16}
                  onClick={() => setToggle(!toggle)}
               />
            </div>
            {toggle ? (
               <div className="w-[200px]  flex flex-col gap-4 absolute right-4 text-center border-2 border-black bg-gray-50 bg-transparent opacity-95 rounded-xl text-custom-blue py-4 font-medium">
                  <a href="#experience" onClick={() => setToggle(!toggle)}>
                     Experience
                  </a>
                  <a href="#about" onClick={() => setToggle(!toggle)}>
                     About Me
                  </a>
                  <a href="#projects" onClick={() => setToggle(!toggle)}>
                     My Projects
                  </a>
                  <a href="#contact" onClick={() => setToggle(!toggle)}>
                     Contact Me
                  </a>
               </div>
            ) : (
               ""
            )}
         </div>
      </header>
   );
}

export default Header;