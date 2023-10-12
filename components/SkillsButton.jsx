import React from "react";

function SkillsButton({skill}) {
   return (
      <div className="md:px-[25px] md:py-[10px] px-[15px] py-[2.5px] md:text-xl md:font-normal text-sm  bg-custom-grey-bg md:rounded rounded-[2.5px]">
         {skill}
      </div>
   );
}

export default SkillsButton;
