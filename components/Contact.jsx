"use client";

import Image from "next/image";
import React from "react";

const phoneNumber = "+91 6381806645";
const emailAddress = "info@syedahamed.in";
const linkedinLink = "https://www.linkedin.com/in/syed-aashiq-ahamed-6180a9187/";
const instagramLink = "https://www.instagram.com/syed_ahamed16/";
const twitterLink = "https://twitter.com/SyedAhamed29";
const githubLink = "https://github.com/syedahamed29";

function Contact() {
   const handleGithubClick = () => {
      window.location.href = githubLink;
   };
   const handleTwitterClick = () => {
      window.location.href = twitterLink;
   };
   const handleInstagramClick = () => {
      window.location.href = instagramLink;
   };
   const handleLinkedinClick = () => {
      window.location.href = linkedinLink;
   };
   const handlePhoneButtonClick = () => {
      window.location.href = `tel:${phoneNumber}`;
   };

   const handleEmailButtonClick = () => {
      window.location.href = `mailto:${emailAddress}`;
   };
   return (
      <section className="w-full bg-white py-4 m-0 md:mt-8" id="contact">
         <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] sm:w-[600px] w-[320px] m-auto">
            <div className="flex flex-col  items-center justify-center md:mb-10">
               <h1 className="text-2xl font-bold text-black lg:text-5xl md:text-4xl">CONTACT ME</h1>
               <hr className="w-[80px] h-0.5 bg-custom-gold  md:h-1 md:w-[130px] md:my-2 " />
            </div>
            <div className="">
               <div className="my-8 flex flex-col-reverse gap-4 md:flex-row  md:px-20 lg:px-48">
                  <div className="">
                     <p className="text-center md:text-left md:w-[420px]   md:text-xl">
                        Hello, I'm Syed from Coimbatore, India. Feel free to get in touch with me.
                        I'm here to help and eager to connect with you!
                     </p>
                     <div className="flex gap-4 justify-center md:justify-start mt-4 md:my-6">
                        <Image
                           src="images/linkedin.svg"
                           width={38}
                           height={38}
                           alt="LinkedIn Icon"
                           onClick={handleLinkedinClick}
                           className="cursor-pointer"
                        />
                        <Image
                           src="images/twitter.svg"
                           width={38}
                           height={38}
                           alt="twitter Icon"
                           onClick={handleTwitterClick}
                           className="cursor-pointer"
                        />
                        <Image
                           src="images/instagram.svg"
                           width={38}
                           height={38}
                           alt="Instagram Icon"
                           onClick={handleInstagramClick}
                           className="cursor-pointer"
                        />
                        <Image
                           src="images/github.svg"
                           width={38}
                           height={38}
                           alt="Github Icon"
                           onClick={handleGithubClick}
                           className="cursor-pointer"
                        />
                     </div>
                  </div>
                  <div className="mx-auto space-y-2 md:space-y-4 mb-4 ">
                     <div
                        onClick={handlePhoneButtonClick}
                        className="flex gap-6 items-center cursor-pointer"
                     >
                        <Image
                           src="images/phone-blue.svg"
                           alt="Phone Icon"
                           width={30}
                           height={30}
                        />
                        <p className="text-xl md:text-2xl">+91 6381 80 66 45</p>
                     </div>
                     <div
                        onClick={handleEmailButtonClick}
                        className="flex gap-5 items-center cursor-pointer"
                     >
                        <Image
                           src="images/email.svg"
                           alt="Email Icon"
                           width={36}
                           height={36}
                           className="md:w-[42px] md:h-[42px]"
                        />
                        <p className="text-xl md:text-2xl">info@syedahamed.in</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Contact;
