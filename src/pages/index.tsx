import { PageSEO } from "@/components/PageSEO";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ShowCaseList from "@/components/ShowCaseList";
import Project from "@/components/ProjectShowcase";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { EXPERIENCE } from "@/data/experience";

export default function Home() {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        // color="hsla(302, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <PageSEO
        title="Apoorva Yadav | Home"
        description="Homepage of Apoorva Yadav's portfolio"
      />
      <Hero />
      <Skills />
      <ShowCaseList title="Experience" details={EXPERIENCE} />
      <Project projects={PROJECT_SHOWCASE} />
      <Certifications />
      <Contact />
    </>
  );
}
