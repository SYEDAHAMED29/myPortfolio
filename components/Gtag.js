import React from "react";
import Script from "next/script";

function Gtag() {
   return (
      <>
         <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3XDF9CWFMY"></Script>
         <Script>
            {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){
        dataLayer.push(arguments);
        }
      gtag('js', new Date());
    
      gtag('config', 'G-3XDF9CWFMY');
        
        `}
         </Script>
      </>
   );
}

export default Gtag;
