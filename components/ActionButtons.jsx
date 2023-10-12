"use client";

import React from "react";
import Image from "next/image";

const phoneNumber = "+1234567890";
const emailAddress = "example@email.com";
function ActionButtons() {
   const handlePhoneButtonClick = () => {
      window.location.href = `tel:${phoneNumber}`;
   };

   const handleEmailButtonClick = () => {
      window.location.href = `mailto:${emailAddress}`;
   };
   return (
      <div className="flex gap-4 lg:mb-8">
         <button
            className="px-[14px] py-[6px] sm:px-5 sm:py-2 md:px-[21px] md:py-[8px] xl:px-[27px] xl:py-[10px] lg:px-[27px] lg:py-[10px] bg-custom-blue text-white font-bold flex items-center justify-center gap-2  xl:gap-4 lg:gap-4 md:gap-3 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl xl:rounded-lg
             rounded-md  hover:bg-blue-500"
            onClick={handlePhoneButtonClick}
         >
            <Image
               width={18}
               height={18}
               src="/images/Phone.svg"
               className="xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-[25px] md:h-[25px]"
            />{" "}
            CALL ME
         </button>
         <button
            className="px-[14px] py-[6px] sm:px-5 sm:py-2 md:px-[21px] md:py-[8px] xl:px-[27px] xl:py-[10px] lg:px-[27px] lg:py-[10px] bg-white text-custom-blue font-bold flex items-center justify-center gap-2 xl:gap-4 lg:gap-4 md:gap-3  text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl rounded-md lg:rounded-lg md:border-4  border-2 border-custom-blue hover:bg-blue-100  "
            onClick={handleEmailButtonClick}
         >
            <Image
               width={20}
               height={20}
               src="/images/email.svg"
               className="xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-[29px] md:h-[29px]"
            />{" "}
            EMAIL ME
         </button>
      </div>
   );
}

export default ActionButtons;
