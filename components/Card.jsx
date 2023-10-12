"use client";
import React from "react";
import Image from "next/image";

function Card({project}) {
   return (
      <div className="xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] md:w-[350px] md:h-[300px] sm:w-[280px] w-[320px]   md:drop-shadow-2xl md:shadow-none  shadow-xl shadow-blue-300 md:hover:shadow-xl md:hover:shadow-blue-600 rounded-xl">
         <Image
            src={project.image}
            width={350}
            height={200}
            alt="Password Generator Project Image"
            className="rounded-t-xl "
         />
         <div className="bg-white  py-4 space-y-4 rounded-b-xl">
            <h3
               className="text-center text-custom-blue font-semibold md:text-2xl sm:text-xl text-2xl cursor-pointer"
               onClick={project.liveLink}
            >
               {project.name}
            </h3>
            <div className="space-x-2 text-center">
               <button className="bg-custom-gold px-[10px] py-[2.5px] rounded-sm">HTML</button>
               <button className="bg-custom-gold px-[10px] py-[2.5px] rounded-sm ">CSS</button>
               <button className="bg-custom-gold px-[10px] py-[2.5px] rounded-sm">
                  Javascript
               </button>
               {project.id == "2" && (
                  <button className="bg-custom-gold px-[10px] py-[2.5px] rounded-sm">API</button>
               )}
            </div>
            <div className="flex gap-4 justify-center items-center">
               <Image
                  src="/images/goto.svg"
                  width={26}
                  height={34}
                  alt="Link Icon"
                  onClick={project.liveLink}
                  className="cursor-pointer"
               />
               <Image
                  src="/images/GithubProject.svg"
                  width={27}
                  height={27}
                  alt="Github Icon"
                  onClick={project.githubLink}
                  className="cursor-pointer"
               />
            </div>
         </div>
      </div>
   );
}

export default Card;
