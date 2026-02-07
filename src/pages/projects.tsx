import { PageSEO } from "@/components/PageSEO";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import { PROJECTS_CARD } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <PageSEO
        title="Apoorva Yadav | Projects"
        description="Project showcase of Apoorva Yadav's portfolio"
      />
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        // color="hsla(302, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <div className="mx-auto mb-40 mt-6 max-w-7xl gap-20 px-6 sm:mt-12 sm:px-14 md:px-20 relative z-10">
        <h1 className="text-2xl font-semibold md:text-4xl">Projects</h1>
        <div className="my-2">
          <span className="text-sm">
            Here are some of the projects I&apos;d like to share
          </span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
          {PROJECTS_CARD.map((card, index) => (
            <ProjectCard key={index} {...card} />
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-5xl text-center md:mt-28">
          <span className="text-xl font-bold md:text-2xl">
            I am passionate about exploring diverse domains within computer science and am continuously expanding my expertise across different fields of software engineering.
          </span>
          <p className="mt-10 text-base md:text-xl">
            Visit my{" "}
            <a
              href="https://github.com/apooorva-aa?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-500 underline underline-offset-2 hover:text-teal-600 dark:text-teal-400"
            >
              GitHub
            </a>{" "}
            to see some of my latest projects.
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
}
