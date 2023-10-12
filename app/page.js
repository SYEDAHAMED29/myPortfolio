import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projectjs from "@/components/Projectjs";

export default function Home() {
   return (
      <main>
         <Hero />
         <Experience />
         <About />
         <Projectjs />
         <Contact />
      </main>
   );
}
