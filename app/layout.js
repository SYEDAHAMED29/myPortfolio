import "./globals.css";
import { Source_Sans_3 } from "next/font/google";
import Gtag from "@/components/Gtag";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Syed Aashiq Ahamed",
  description: "Web Developer & Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Syed Aashiq Ahamed | Web Developer & Designer</title>
        <script src="https://cdn-in.pagesense.io/js/n1nmxvfc/1fe55dbbc34e4e2289db1c975e91b423.js"></script>
        <script
          async
          defer
          src="https://tools.luckyorange.com/core/lo.js?site-id=85d3f351"
        ></script>
      </head>
      <Gtag />

      <body className={`${sourceSans.className}  `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
