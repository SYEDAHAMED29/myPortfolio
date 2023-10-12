import React from "react";
import SkillsButton from "./SkillsButton";
import ResumeButton from "./ResumeButton";

const skills = [
   "HTML",
   "CSS",
   "JavaScript",
   "ReactJs",
   "Nodejs",
   "Nextjs",
   "MongoDB",
   "Responsive Design",
   "Git",
   "Github",
   "Firebase",
   "TailwindCSS",
   "Typescript",
   "Figma",
];

function About() {
   return (
      <section
         className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] sm:w-[600px] w-[320px] m-auto md:mb-12 mb-6"
         id="about"
      >
         <div className="flex flex-col  items-center justify-center md:mb-10 mb-5">
            <h1 className="text-2xl font-bold text-black lg:text-5xl md:text-4xl">ABOUT ME</h1>
            <hr className="w-[80px] h-0.5 bg-custom-gold  md:h-1 md:w-[130px] md:my-2 " />
         </div>
         <div className="flex lg:flex-row lg:gap-20 md:gap-12 gap-6 flex-col">
            <div className="lg:w-1/2 md:w-full">
               <h1 className="font-bold md:text-3xl sm:text-xl md:mb-8 mb-4  text-custom-blue">
                  Get To Know Me!!!
               </h1>
               <div className="md:leading-[24px] leading-[18px] space-y-4 md:font-normal md:text-base sm:text-sm text-xs font-normal">
                  <p>
                     My journey into the world of web development began in my first year of College
                     (2018), fueled by a desire to build my own website. In the beginning, I tried
                     using no-code platforms and content management systems (CMS),but I ran into a
                     problem - every time I wanted to add a new feature to my website, I had to buy
                     it. This was frustrating, and I felt limited in what I could do.
                  </p>
                  <p>
                     So, I decided to learn web development from scratch. I began with the basics:
                     HTML, CSS, and JavaScript. I practiced by working on projects from Frontend
                     Mentor. These projects helped me learn how to design web pages and make them
                     look good.
                  </p>
                  <p>
                     Later, I learned ReactJS, a tool for building more advanced web applications.
                     With React, I could make web pages that are interactive and dynamic.
                  </p>
                  <p>
                     I also learned about backend technologies to enhance my skills. This allowed me
                     to create complete web applications that work from start to finish.
                  </p>
               </div>
            </div>
            <div className="lg:w-1/2 md:w-full">
               <h1 className="font-bold md:text-3xl md:mb-8 mb-4  text-custom-blue sm:text-xl">
                  My Skills
               </h1>
               <div className="flex flex-wrap md:gap-3 gap-2">
                  {skills.map((skill) => (
                     <SkillsButton skill={skill} />
                  ))}
               </div>

               {/* <ResumeButton /> */}
            </div>
         </div>
      </section>
   );
}

export default About;
