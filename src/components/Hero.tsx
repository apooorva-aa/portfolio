import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/FadeUp";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20"
    >
      <div className="mx-auto -mt-[112px] max-w-7xl">
        <div className="max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="mx-auto bg-gradient-to-r from-teal-500 to-tera-500 bg-clip-text text-5xl font-bold text-transparent dark:from-teal-200 dark:to-teal-500 sm:text-6xl md:text-7xl xl:text-8xl">
                Apoorva Yadav
              </h1>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-2xl">
                <span className=" text-teal-600 dark:text-teal-300">
                  Hello
                </span>
                , I&apos;m
                <span className="text-teal-600 dark:text-teal-300">
                  {" "}
                  an aspiring Software Engineer
                </span>
                , passionate about building scalable systems, high-performance tooling, and visually compelling software.
              </div>
            </FadeUp>
            <FadeUp key="social-icons" duration={0.6} delay={0.3}>
              <div className="pointer-events-auto mt-8 flex gap-6">
                <a
                  href="mailto:apoorvayadav70516@gmail.com"
                  className="group transition-opacity duration-200 hover:opacity-70"
                  aria-label="Send email"
                >
                  <Image src="/icons/email.svg" alt="Email" width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/apoorvayadavv/"
                  target="_blank"
                  className="group transition-opacity duration-200 hover:opacity-70"
                  aria-label="Visit LinkedIn"
                >
                  <LinkedinIcon className="h-6 w-6 text-teal-600 transition-opacity duration-200 dark:text-teal-400" />
                </a>
                <a
                  href="https://github.com/apooorva-aa"
                  target="_blank"
                  className="group transition-opacity duration-200 hover:opacity-70"
                  aria-label="Visit GitHub"
                >
                  <GithubIcon className="h-6 w-6 text-teal-600 transition-opacity duration-200 dark:text-teal-400" />
                </a>
              </div>
            </FadeUp>
            <FadeUp key="cta-buttons" duration={0.6} delay={0.4}>
              <div className="pointer-events-auto mt-8 flex flex-wrap gap-4">
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="rounded-lg border-2 border-teal-600 px-6 py-3 font-medium text-teal-600 transition-all duration-200 hover:bg-teal-600 hover:text-white dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-400 dark:hover:text-zinc-900">
                    View Resume
                  </button>
                </Link>
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
