import Image from "next/image";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-center ">
         <div>
            <Image
               src="/images/underConstruction.gif"
               alt="UnderContruction page"
               width={600}
               height={600}
            />
            <h1 className="xl:text-4xl  lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-bold text-blue-600 mt-4 text-center">
               Website Under Construction!!
            </h1>
         </div>
      </main>
   );
}
