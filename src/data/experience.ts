import { ShowCaseListDetatils } from "@/components/ShowCaseList";

export const EXPERIENCE: ShowCaseListDetatils[] = [
  {
    title: "Upcoming Software Engineering Intern",
    organisation: {
      name: "Google",
      href: "https://www.google.com/",
    },
    date: "May - July, 2026",
    location: "Bangalore, India",
    description: "Upcoming Software Engineering Intern at Google for the Summer of 2026.",
  },
  {
    title: "Associate Software Development Intern (STEP)",
    organisation: {
      name: "Google",
      href: "https://www.google.com/",
    },
    date: "May - July, 2025",
    location: "Bangalore, India",
    description: [
      "Engineered YouTube Auto Sharding Tool v2.0, introducing a desharding algorithm that reduced test runtime and minimized submit latency, and prevented BDD caused by inefficient over-sharding through advanced optimization techniques",
      "Extended large-scale test infrastructure by adding support for Omnistresser and CPFT tests across YouTube's CI ecosystem",
      "Built a Python Placer Helper library for database storage operations with production-grade contributions",
      "Delivered 22 CLs (~3.6K LOC) to Google's codebase",
    ],
  },
];
