import About from "@/components/About";
import BoxBetweenHero from "@/components/BoxBetweenHero";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <BoxBetweenHero />
      <About />
    </>
  );
}
