"use client";
import React from "react";
import Image from "next/image";
import Card from "./Card";

const projectInfo = [
   {
      id: 1,
      name: "Password Generator App",
      image: "/images/PasswordGenerator.svg",
      liveLink: () => window.open("https://password-generator-sy.netlify.app/"),
      githubLink: () => window.open("https://github.com/SYEDAHAMED29/password-generator"),
   },
   {
      id: 2,
      name: "Random Advice Generator",
      image: "/images/AdviceGenerator.svg",
      liveLink: () => window.open("https://advice-generator-sy.netlify.app/"),
      githubLink: () => window.open("https://github.com/SYEDAHAMED29/advice-generator-using-api"),
   },

   {
      id: 3,
      name: "Tic Tac Toe Game",
      image: "/images/TicTacToe.svg",
      liveLink: () => window.open("https://tic-tac-toe-sy.netlify.app/"),
      githubLink: () => window.open("https://github.com/SYEDAHAMED29/tic-tac-toe"),
   },
   {
      id: 4,
      name: "Landing Page",
      image: "/images/LandingPage.svg",
      liveLink: () => window.open("https://bookmark-landingpage-sy.netlify.app/"),
      githubLink: () => window.open("https://github.com/SYEDAHAMED29/bookmark-landing-page"),
   },
   {
      id: 5,
      name: "Age Calculator App",
      image: "/images/AgeCalculator.svg",
      liveLink: () => window.open("https://age-calculator-sy.netlify.app/"),
      githubLink: () => window.open("https://github.com/SYEDAHAMED29/age-calculator"),
   },
   {
      id: 6,
      name: "Tip Calculator",
      image: "/images/TipCalculator.svg",
      liveLink: () => window.open("https://tip-calculator-sy.netlify.app/"),
      githubLink: () => window.open("https://github.com/SYEDAHAMED29/tip-calculator"),
   },
];

function OtherProjects() {
   return (
      <section className="md:mb-16">
         <div className="flex flex-col  items-center justify-center lg:mb-4 lg:mt-8 md:mb-4 py-10">
            <h1 className="text-2xl font-bold text-black lg:text-5xl md:text-4xl text-center">
               OTHER NOTEWORTHY PROJECTS
            </h1>
            <hr className="w-[80px] h-0.5 bg-custom-gold  md:h-1 md:w-[200px] md:my-2 " />
         </div>
         <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 md:gap-y-24 xl:gap-x-0  grid grid-col-1 gap-12 xl:justify-center xl:items-center  ">
            {projectInfo.map((project) => (
               <Card project={project} />
            ))}
         </div>
      </section>
   );
}

export default OtherProjects;
