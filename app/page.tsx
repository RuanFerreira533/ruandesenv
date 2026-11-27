import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { MinimalFooter } from "@/components/ui/minimal-footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Process />
      <MinimalFooter />
    </>
  );
}
