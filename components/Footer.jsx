import React from "react";

const date = new Date();
function Footer() {
   return (
      <footer className="my-4 ">
         <p className="md:text-lg md:font-normal text-sm font-light text-center ">
            © Copyright {date.getFullYear()}. Created By
            <a href="/" className="underline underline-offset-4 mx-1 ">
               Syed Aashiq Ahamed
            </a>
         </p>
      </footer>
   );
}

export default Footer;
