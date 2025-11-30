import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WorkExperience } from "@/components/sections/WorkExperience"; // 추가
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  );
}
