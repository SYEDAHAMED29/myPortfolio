import React from "react";

import Image from "next/image";
function ResumeButton() {
   return (
      <button
         className="md:mt-12 mt-6 shadow-xl md:px-[20px] md:py-[10px] px-2 py-1 md:text-2xl text-base  font-bold text-white bg-custom-blue rounded-md flex md:gap-4 gap-2"
         onClick={downloadFile}
      >
         <Image
            src="/images/file.svg"
            width={24}
            height={24}
            alt="Download File Icon"
            className="md:w-8 md:h-8"
         />
         MY RESUME
      </button>
   );
}

export default ResumeButton;
