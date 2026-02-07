import Image from "next/image";
import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  GithubIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/Icons";
import { SkillPillProps } from "@/components/Skills";

export const LANGUAGES: SkillPillProps[] = [
  {
    name: "C",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="c logo" src="/icons/c.svg" fill />
      </span>
    ),
  },
  {
    name: "C++",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="cpp logo" src="/icons/cpp.svg" fill />
      </span>
    ),
  },
  {
    name: "Python",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="python logo" src="/icons/python.svg" fill />
      </span>
    ),
  },
  {
    name: "OCaml",
    icon: (
      <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
        🐫
      </span>
    ),
  },
  {
    name: "HTML",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="html logo" src="/icons/html.svg" fill />
      </span>
    ),
  },
  {
    name: "CSS",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="css logo" src="/icons/css.svg" fill />
      </span>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="javascript logo" src="/icons/javascript.svg" fill />
      </span>
    ),
  },
];

export const LIBRARY_FRAMEWORK: SkillPillProps[] = [
  {
    name: "React",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="reactjs logo" src="/icons/reactjs.svg" fill />
      </span>
    ),
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "TailwindCSS",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="tailwindcss logo" src="/icons/tailwindcss.svg" fill />
      </span>
    ),
  },
  {
    name: "Flask",
    icon: <SiFlask className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
];

export const TOOLS_TECHNOLOGIES: SkillPillProps[] = [
  {
    name: "GitHub",
    icon: <GithubIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "VSCode",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="vscode logo" src="/icons/vscode.svg" fill />
      </span>
    ),
  },
  {
    name: "Git",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="git logo" src="/icons/git.svg" fill />
      </span>
    ),
  },
  {
    name: "Jupyter",
    icon: (
      <span className="text-lg font-bold text-orange-500 dark:text-orange-400">
        📓
      </span>
    ),
  },
  {
    name: "OpenGL",
    icon: (
      <span className="text-lg font-bold text-green-600 dark:text-green-400">
        🎨
      </span>
    ),
  },
  {
    name: "GLFW",
    icon: (
      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
        🪟
      </span>
    ),
  },
];

export const PROFICIENCIES: SkillPillProps[] = [
  {
    name: "Data Structures & Algorithms",
    icon: (
      <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
        🔗
      </span>
    ),
  },
  {
    name: "Object-Oriented Programming",
    icon: (
      <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
        🎯
      </span>
    ),
  },
  {
    name: "UI/UX Research & Design",
    icon: (
      <span className="text-lg font-bold text-pink-600 dark:text-pink-400">
        🎨
      </span>
    ),
  },
  {
    name: "Cybersecurity",
    icon: (
      <span className="text-lg font-bold text-red-600 dark:text-red-400">
        🔐
      </span>
    ),
  },
  {
    name: "Computer Graphics",
    icon: (
      <span className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
        ✨
      </span>
    ),
  },
];
