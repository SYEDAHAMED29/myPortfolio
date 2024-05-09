import Image from "next/image";
import React from "react";
import Link from "next/link";
import OtherProjects from "./OtherProjects";
import CountriesProject from "./CountriesProject";

function Projectjs() {
  return (
    <section className="w-full bg-custom-grey-bg m-0" id="projects">
      <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] sm:w-[600px] w-[320px] m-auto py-5">
        <div className="flex flex-col  items-center justify-center lg:mb-4 lg:mt-8 md:mb-4 pb-5">
          <h1 className="text-2xl font-bold text-black lg:text-5xl md:text-4xl">
            MY PROJECTS
          </h1>
          <hr className="w-[80px] h-0.5 bg-custom-gold  md:h-1 md:w-[130px] md:my-2 " />
        </div>
        <div className="space-y-4 md:space-y-0  ">
          <div className="flex flex-col sm:flex-row md:gap-8 sm:gap-2 w-[320px] h-[410px] sm:w-full  sm:justify-center sm:items-center  sm:bg-inherit sm:shadow-none bg-white rounded-[10px] shadow-lg">
            <Image
              src="/images/Eternaa.svg"
              alt="Eternaa Project Hero"
              width={320}
              height={180}
              className="lg:w-[600px] lg:h-[330px] md:w-[400px] md:h-[300px] sm:w-[300px] sm:h-[300px] "
            />

            <div className="flex flex-col md:items-start  ">
              <h1 className="text-xl md:text-4xl  font-bold text-center lg:text-left my-4 lg:mt-2 md:mt-3 md:mb-6">
                THE ETERNAA
              </h1>
              <p className="text-center text-sm font-light sm:text-left sm:w-[300px] px-8 mb-4 lg:mb-12 md:mb-6 lg:text-xl md:text-base md:px-0 md:text-left lg:w-[500px] md:w-[350px]">
                Crafted a high-performance, responsive Skin and Hair Clinic
                website using Next.js and Tailwind CSS. Integrated Google
                Analytics for data-driven insights.
              </p>
              <div className="flex gap-6 justify-center items-center md:justify-start">
                <a
                  href="https://the-eternaa.vercel.app/
                        "
                >
                  <Image
                    src="/images/goto.svg"
                    width={32}
                    height={42}
                    alt="Link Icon"
                  />
                </a>
                <Link
                  className="bg-custom-blue text-white font-bold px-[50px] py-[10px] md:py-[15px] rounded-lg shadow-lg hover:bg-blue-500 "
                  href="/casestudy"
                >
                  CASE STUDY
                </Link>
              </div>
            </div>
          </div>
          <CountriesProject />
        </div>
        <OtherProjects />
      </div>
    </section>
  );
}

export default Projectjs;
