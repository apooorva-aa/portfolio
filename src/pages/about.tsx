import Image from "next/image";
import { PageSEO } from "@/components/PageSEO";
import FadeRight from "@/animation/FadeRight";
import FadeUp from "@/animation/FadeUp";
import { AnimatePresence } from "framer-motion";
import ShowCaseList from "@/components/ShowCaseList";
import Contact from "@/components/Contact";
import { EDUCATION } from "@/data/education";
import heroProfileImg from "@/public/images/profile.png";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";

export default function About() {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        // color="hsla(302, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <PageSEO
        title="Apoorva Yadav | About"
        description="Know more about Apoorva Yadav, Aspiring Software Engineering Student"
      />
      <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
        <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="hero-image" duration={0.6}>
              <Image
                src={heroProfileImg}
                width={100}
                height={100}
                className="h-auto w-full px-0 xl:px-16"
                alt="hero image"
                unoptimized
              />
            </FadeUp>
          </AnimatePresence>
        </div>
        <div className="sm:1/2 mt-10 w-full lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="title-greeting" duration={0.6}>
              <h1 className="bg-gradient-to-r from-teal-500 to-tera-500 bg-clip-text text-6xl font-bold text-transparent dark:from-teal-200 dark:to-teal-500 sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
                Hi, I&apos;m Apoorva Yadav
              </h1>
            </FadeUp>
            <FadeUp key="description-1" duration={0.6} delay={0.2}>
              <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                I&apos;m a Computer Science undergraduate at ABV-IIITM Gwalior with a strong interest in building reliable, well-engineered software that balances performance, correctness, and design.
              </p>
            </FadeUp>
            <FadeUp key="description-2" duration={0.6} delay={0.4}>
              <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                My interests include algorithm designing, graphics and rendering, cybersecurity, and frontend/UI engineering, and I enjoy working on building performant, well-designed software that combine rigorous engineering with real-world impact.
              </p>
            </FadeUp>
            <FadeRight
              key="hero-location"
              duration={0.6}
              delay={0.8}
              className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
            >
              <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
                <Image
                  className="-z-10 h-full w-full bg-cover bg-no-repeat"
                  alt="Indian flag"
                  src="https://flagcdn.com/in.svg"
                  width={15}
                  height={15}
                />
              </div>
              <span className="text-lg font-medium">Gwalior, Madhya Pradesh</span>
            </FadeRight>
          </AnimatePresence>
        </div>
      </div>
      <ShowCaseList title="Education" details={EDUCATION} />
      <Contact />
    </>
  );
}
