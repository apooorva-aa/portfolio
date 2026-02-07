import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Cyberdesk",
    href: "/projects",
    tags: ["Python, React, Figma, Cybersecurity, Web Development"],
    image: {
      LIGHT: "/images/projects/cyberdesk1.png",
      DARK: "/images/projects/cyberdesk1.png",
    },
  },
  {
    index: 1,
    title: "Blackhole Simulator",
    href: "/projects",
    tags: ["Rust, GLFW, Graphics Programming"],
    image: {
      LIGHT: "/images/projects/blackhole1.png",
      DARK: "/images/projects/blackhole1.png",
    },
  },
  {
    index: 2,
    title: "Previously on Netflix",
    href: "/projects",
    tags: ["Flask, Python, HTML, CSS, JavaScript, Figma, Web Development, UI/UX"],
    image: {
      LIGHT: "/images/projects/netflix1.png",
      DARK: "/images/projects/netflix1.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Cyberdesk",
    favicon: "/images/projects/logos/cyberdesk.svg",
    imageUrl: [
      "/images/projects/cyberdesk1.png",
      "/images/projects/cyberdesk2.png",
    ],
    description: "Developed a web application that provides visibility into key security aspects of a personal computer. Built a Password & Browser Security Analyzer using entropy-based evaluation and vulnerability checks for outdated configurations. Developed a port scanner, Camera/Microphone usage detection, CPU activity monitor, and sniffer detection with ARP/DNS spoofing and promiscuous mode alerts.",
    sourceCodeHref: "https://github.com/apooorva-aa/cyberdesk",
  },
  {
    name: "Blackhole Simulator",
    favicon: "/images/projects/logos/blackhole.svg",
    imageUrl: [
      "/images/projects/blackhole1.png",
      "/images/projects/blackhole2.png",
    ],
    description: "Interactive 3D simulator visualizing photon trajectories and accretion-disk appearance around Schwarzschild and Kerr black holes. Built in Rust for safety and performance, using GLFW for windowing/input and OpenGL for rendering. Supports real-time or near-real-time GPU-based ray tracing/ray marching via fragment shaders, with a CPU fallback for high-precision geodesic integration.",
    sourceCodeHref: "https://github.com/apooorva-aa/blackhole",
  },
  {
    name: "Previously on Netflix",
    favicon: "/images/projects/logos/prev_netflix.svg",
    imageUrl: [
      "/images/projects/netflix1.png",
      "/images/projects/netflix2.png",
    ],
    description: "Interactive data-visualization web application that processes Netflix viewing-history files to generate personalized insights. Designed and implemented 20+ wireframes and high-fidelity prototypes with a cohesive, Netflix-inspired visual system, focusing on clarity, motion, and interaction design. Recognized by program mentors for innovative UI design and a seamless, intuitive user experience.",
    sourceCodeHref: "https://github.com/apooorva-aa/previously-on-netflix",
  },
];
