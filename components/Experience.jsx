"use client";

import Image from "next/image";
import React, {useState} from "react";

const movateExperience = [
   "Developed user interfaces for web applications using ReactJs, TypeScript, Node.js, and TailwindCSS.",
   "Modified an existing chatbot using AWS Lex, enhancing user interaction and integrating it with ReactJs.",
   "Conducted unit test cases and performed impact analysis for the integrated solution",
];

const csscorpExperience = [
   "Completed a comprehensive full stack development internship, gaining hands-on experience in front-end and back-end technologies.",
   "Acquired knowledge of SDLC, Agile, and Scrum methodologies, which enhanced project coordination.",
   "Engaged in web application development using Java, HTML, CSS, and JavaScript, while also showcasing effective code collaboration through Git version control.",
];

function Experience() {
   const [toggle, setToggle] = useState(true);
   return (
      <div
         className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] sm:w-[600px] w-[320px] m-auto"
         id="experience"
      >
         <section className="flex flex-col justify-center items-center">
            <div className="flex flex-col  items-center justify-center md:mb-10">
               <h1 className="text-2xl font-bold text-black lg:text-5xl md:text-4xl">
                  MY EXPERIENCE
               </h1>
               <hr className="w-[80px] h-0.5 bg-custom-gold  md:h-1 md:w-[130px] md:my-2 " />
            </div>
            <div className=" md:flex md:justify-center md:items-start md:gap-6 lg:gap-10  ">
               <div className=" mt-4 mb-5 md:mt-0 md:mb-0 rounded-lg border-2 border-custom-gold md:border-none w-[300px]  flex items-center justify-center md:flex-col md:gap-2 ">
                  <button
                     className={`text-base md:text-2xl font-semibold  w-3/5 md:w-full px-1 py-1 md:p-3   ${
                        toggle && "bg-custom-gold-bg  md:border-l-4 md:border-custom-gold"
                     }`}
                     onClick={() => {
                        setToggle(!toggle);
                        console.log(toggle);
                     }}
                  >
                     MOVATE TECHNOLOGIES
                  </button>
                  <button
                     className={`text-base md:text-2xl font-semibold  w-2/5 md:w-full px-1 py-1 md:p-3 ${
                        !toggle && "bg-custom-gold-bg  md:border-l-4 md:border-custom-gold "
                     }`}
                     onClick={() => {
                        setToggle(!toggle);
                        console.log(toggle);
                     }}
                  >
                     CSSCORP
                  </button>
               </div>
               <div className="md:w-[450px]">
                  <div>
                     <h3 className="text-xl lg:text-2xl font-semibold">
                        {toggle ? "Engineer" : "Internship Trainee"}{" "}
                        <span className="text-custom-blue">{toggle ? "@Movate" : "@CssCorp"}</span>
                     </h3>
                     <p className="text-sm md:text-sm lg:text-base font-light">
                        {toggle ? "July 2022 - August 2023" : "January 2022 - June 2022"}
                     </p>
                  </div>
                  <div className="my-3 space-y-2 md:space-y-4">
                     {toggle ? (
                        <>
                           {movateExperience.map((exp) => (
                              <div className="flex items-center md:items-start gap-2 md:gap-4 ">
                                 <Image
                                    src="images/arrow.svg"
                                    width={18}
                                    height={18}
                                    className="md:w-7 md:h-7"
                                 />
                                 <p className="text-sm md:text-sm lg:text-lg font-light">{exp}</p>
                              </div>
                           ))}
                        </>
                     ) : (
                        <>
                           {csscorpExperience.map((exp) => (
                              <div className="flex items-center md:items-start gap-2 md:gap-4">
                                 <Image
                                    src="images/arrow.svg"
                                    width={18}
                                    height={18}
                                    className="md:w-7 md:h-7"
                                 />
                                 <p className="text-sm lg:text-lg font-light">{exp}</p>
                              </div>
                           ))}
                        </>
                     )}
                  </div>
               </div>
            </div>

            <hr className="w-[185px] h-0.5  my-6 md:my-12  bg-[#E6E6E6] lg:w-[800px] xl:w-[1000px] md:w-[550px] " />
         </section>
      </div>
   );
}

export default Experience;
