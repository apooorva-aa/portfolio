import { AnimatePresence } from "framer-motion";
import FadeRight from "@/animation/FadeRight";
import {
  LANGUAGES,
  LIBRARY_FRAMEWORK,
  TOOLS_TECHNOLOGIES,
  PROFICIENCIES,
} from "@/data/skills";

export type SkillPillProps = {
  name: string;
  icon: JSX.Element;
};

function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;

  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-tera-500/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
      {icon}
      <span className="font-medium">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold sm:text-4xl">Skills</h2>
        <AnimatePresence>
          <div className="mt-4">
            <span className="text-xs font-semibold sm:text-sm">Languages</span>
            <div className="mt-2 flex flex-wrap gap-4 text-xl dark:text-zinc-100">
              {LANGUAGES.map((pill, index) => (
                <FadeRight
                  key={`lang-${index}`}
                  duration={0.4}
                  delay={0.1 + index * 0.1}
                  whileInView
                  className="-z-20"
                >
                  <SkillPill {...pill} />
                </FadeRight>
              ))}
            </div>
          </div>
        </AnimatePresence>
        <AnimatePresence>
          <div className="mt-4">
            <span className="text-xs font-semibold sm:text-sm">
              Libraries and frameworks
            </span>
            <div className="mt-2 flex flex-wrap gap-4 text-xl dark:text-zinc-100">
              {LIBRARY_FRAMEWORK.map((pill, index) => (
                <FadeRight
                  key={`lib-frame-${index}`}
                  duration={0.4}
                  delay={0.1 + index * 0.1}
                  whileInView
                  className="-z-20"
                >
                  <SkillPill {...pill} />
                </FadeRight>
              ))}
            </div>
          </div>
        </AnimatePresence>
        <AnimatePresence>
          <div className="mt-4">
            <span className="text-xs font-semibold sm:text-sm">
              Tools and technologies
            </span>
            <div className="mt-2 flex flex-wrap gap-3">
              {TOOLS_TECHNOLOGIES.map((pill, index) => (
                <FadeRight
                  key={`tools-techs-${index}`}
                  duration={0.4}
                  delay={0.1 + index * 0.1}
                  whileInView
                  className="-z-20"
                >
                  <SkillPill {...pill} />
                </FadeRight>
              ))}
            </div>
          </div>
        </AnimatePresence>
        <AnimatePresence>
          <div className="mt-4">
            <span className="text-xs font-semibold sm:text-sm">
              Proficiencies
            </span>
            <div className="mt-2 flex flex-wrap gap-3">
              {PROFICIENCIES.map((pill, index) => (
                <FadeRight
                  key={`proficiencies-${index}`}
                  duration={0.4}
                  delay={0.1 + index * 0.1}
                  whileInView
                  className="-z-20"
                >
                  <SkillPill {...pill} />
                </FadeRight>
              ))}
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
