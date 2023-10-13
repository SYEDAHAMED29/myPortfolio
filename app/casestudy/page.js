import Contact from "@/components/Contact";
import CaseStudyHero from "@/components/casestudyHero";
import Image from "next/image";
import React from "react";

const technologies = [
   "Nextjs",
   "TailwindCSS",
   "Figma",
   "Vercel",
   "Git",
   "Google Analytics",
   "Github",
];

const featuresOne = [
   {
      name: "Multi-Page Design: ",
      description:
         "The website featuresmultiple pages to provide comprehensive information about the clinic's services, team, and contact details.",
   },
   {
      name: "Responsive Design: ",
      description:
         "Using Tailwind CSS, I ensured that the website looks great and functions flawlessly on various devices and screen sizes, including tablets.",
   },
   {
      name: "Exceptional Performance: ",
      description:
         "The website consistently achieves outstanding performance scores, with all fields in Lighthouse scoring above 90.",
   },
];

const featuresTwo = [
   {
      name: "Engaging Content:  ",
      description:
         " The website includes engaging content and images to showcase the clinic's services and build trust with potential clients.",
   },
   {
      name: "Google Analytics Integration: ",
      description:
         " I implemented Google Analytics to track user behavior and gather valuable insights for improving the website's performance and user experience.",
   },
];

function page() {
   return (
      <main>
         <div className="w-full bg-custom-grey-bg">
            <section className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] sm:w-[600px] w-[320px] m-auto">
               <div className="flex flex-col items-center justify-center  gap-y-8 md:py-16 py-8">
                  <h1 className="font-bold md:text-[54px] text-3xl text-center">THE ETERNAA</h1>
                  <p className="lg:w-[700px] md:w-[500px] md:text-2xl text-lg text-center ">
                     This Page contains the case study of The Eternaa mutli page website which
                     includes features, technologies used and links to the official webiste.
                  </p>
                  <a
                     href="https://theeternaa.com/"
                     className="flex items-center rounded-lg drop-shadow-lg hover:bg-blue-800 active:ring active:ring-blue-300 gap-4 md:px-[40px] md:py-[10px] px-[20px] py-[5px] font-bold md:text-2xl text-lg  bg-custom-blue text-white"
                  >
                     <img
                        src="/images/link.svg"
                        className="md:w-[32px] md:h-[42px]"
                        width={16}
                        height={21}
                     />
                     LIVE LINK
                  </a>
               </div>
            </section>
         </div>
         <div className="flex justify-center items-start mt-8">
            <Image
               src="/images/Eternaa.svg"
               height={320}
               width={185}
               className="xl:w-[1000px] xl:h-[500px] lg:w-[800px] lg:h-[400px] md:w-[600px] md:h-[350px] sm:w-[500px] sm:h-[250px] w-[320px] h-[190px]"
            />
         </div>
         <section className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] sm:w-[600px] w-[320px] m-auto">
            <div className="xl:w-[900px] lg:w-[800px]  md:w-[680px] sm:w-[580px] w-[320px]  mx-auto my-12">
               <div className="space-y-4 mb-16">
                  <h3 className="md:text-4xl text-2xl font-bold flex md:gap-4 gap-2 items-center my-8">
                     <Image src="/images/points.svg" width={32} height={32} />
                     Project Description :
                  </h3>
                  <p className="font-normal md:text-xl text-base xl:w-[800px]  lg:w-[700px] md:w-[600px] sm:w-[500px] w-[280px] mx-auto text-justify">
                     I had the privilege of creating a multi-page website for a skin and hair
                     clinic, delivering an online presence that truly reflects their expertise and
                     commitment to client care. This project demonstrates my ability to create
                     high-performance, responsive websites. I designed the website using Figma for a
                     seamless design-to-development process.
                  </p>
               </div>

               <div className="space-y-4 mb-16 ">
                  <h3 className="md:text-4xl text-2xl font-bold flex md:gap-4 gap-2 items-center my-8">
                     <Image src="/images/points.svg" width={32} height={32} />
                     Key Features :
                  </h3>
                  <div className="xl:w-[800px] lg:w-[700px] md:w-[600px] sm:w-[500px] w-[280px] mx-auto">
                     <ul className="space-y-6 list-disc">
                        {featuresOne.map((feature) => (
                           <li className="md:text-xl  text-base font-normal text-justify">
                              <span className="font-bold"> {feature.name}</span>
                              {feature.description}
                           </li>
                        ))}
                     </ul>
                     <div className="mx-auto xl:w-[500px] md:w-[500px] sm:w-[400px] w-[280px] my-12">
                        <Image
                           src="/images/lighthouse.svg"
                           width={500}
                           height={235}
                           alt="Performance Image"
                        />
                     </div>
                     <ul className="space-y-4 list-disc">
                        {featuresTwo.map((feature) => (
                           <li className="md:text-xl text-base font-normal text-justify">
                              <span className="font-bold"> {feature.name}</span>
                              {feature.description}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="space-y-4 mb-16">
                  <h3 className="md:text-4xl text-2xl font-bold flex md:gap-4 gap-2 items-center my-8">
                     <Image src="/images/points.svg" width={32} height={32} />
                     Technologies Used :
                  </h3>
                  <div className="xl:w-[650px] md:w-[600px] sm:w-[500px] w-[300px] mx-auto">
                     <div className="flex  sm:gap-4 gap-2 flex-wrap items-center ">
                        {technologies.map((tech) => (
                           <div className="sm:px-[25px] sm:py-[10px] px-[20px] py-[5px] md:text-xl sm:text-base sm:font-normal md:font-medium text-sm  bg-gray-200 active:ring-1 active:ring-gray-800 md:rounded rounded-[2.5px]">
                              {tech}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div className="flex items-center justify-center">
            <hr className="w-[185px] h-0.5  my-3 md:my-12  bg-[#E6E6E6] lg:w-[800px] xl:w-[1000px] md:w-[550px] " />
         </div>

         <Contact />
      </main>
   );
}

export default page;
