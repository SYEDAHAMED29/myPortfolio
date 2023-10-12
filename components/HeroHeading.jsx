"use client";

import React from "react";
import {useState, useEffect} from "react";
const greetings = [
   "வணக்கம்", // Tamil
   "Hello", // English
   "नमस्ते", // Hindi (Namaste)
   "السلام", // Spanish
   "Bonjour", // French
   "Hola", // Spanish
   "Ciao", // Italian
   "こんにちは", // Japanese (Konnichiwa)
   "你好", // Chinese (Nǐ hǎo)
   "Здравствуйте", // Russian (Zdravstvuyte)
];

function HeroHeading() {
   const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
      }, 2000);

      return () => clearInterval(interval);
   }, []);
   return (
      <h1 className="lg:text-5xl xl:text-5xl md:text-4xl sm:text-3xl text-lg font-bold xl:mt-16 lg:mt-14 md:mt-7 ">
         <span className="tracking-widest ">{greetings[currentGreetingIndex]}</span>, I'm{" "}
         <span className="text-custom-blue">SYED AASHIQ AHAMED</span>
      </h1>
   );
}

export default HeroHeading;
