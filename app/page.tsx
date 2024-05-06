import Image from "next/image";

export default function Home() {
  return (
    <main className="hero-background flex flex-col justify-center items-center py-24">
      <div className="flex flex-col items-center">
        <h1 className="hero-bold font-ubuntu pb-10">FIND YOUR HOME</h1>
        <div style={{ position: "relative" }}>
          <Image
            src="/hero.png"
            alt="hero image"
            width={1410}
            height={915}
            className="rounded-3xl"
          />

          <div
            className="bg-accent-yellow w-[400px] h-[100px] rounded-3xl absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{ marginTop: "-50px" }} 
          >
            
          </div>
        </div>
      </div>

      <div className="flex gap-[90px] items-center pt-20">
        <h3 className="h1-bold">WebdevbyLuka</h3>
        <h3 className="h1-bold">TodorovicPartner</h3>
        <h3 className="h1-bold">ArztPraxis Dr. Ilic</h3>
        <h3 className="h1-bold">Fahrschule Gordana</h3>
        <h3 className="h1-bold">Daetzis</h3>
      </div>
    </main>
  );
}
