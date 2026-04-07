import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Projects />
      <About />
      <CTA />
    </>
  );
}
