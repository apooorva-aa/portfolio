import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import FadeUp from "@/animation/FadeUp";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-20 sm:px-14 md:px-20"
    >
      <AnimatePresence>
        <FadeUp key="contact-title" duration={0.6}>
          <h2 className="text-3xl font-bold md:text-4xl">Get in Touch</h2>
        </FadeUp>
        <FadeUp key="contact-description" duration={0.6} delay={0.2}>
          <p className="mt-4 max-w-2xl text-base text-zinc-700 dark:text-zinc-300 md:text-lg">
            Feel free to reach out to me via email or connect with me on social
            media. I&apos;m always open to discussing new projects, ideas, or
            opportunities.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Email */}
          <FadeUp key="contact-email" duration={0.6} delay={0.3}>
            <Link href="mailto:apoorvayadav@example.com">
              <div className="group flex flex-col items-start gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition-all duration-200 hover:border-teal-400 hover:bg-teal-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-teal-500 dark:hover:bg-zinc-700">
                <Image src="/icons/email.svg" alt="Email" width={32} height={32} />
                <div className="w-full">
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    Email
                  </h3>
                  <p className="mt-1 break-all text-sm text-teal-600 dark:text-teal-400 group-hover:underline">
                    apoorvayadav70516@gmail.com
                  </p>
                </div>
              </div>
            </Link>
          </FadeUp>

          {/* LinkedIn */}
          <FadeUp key="contact-linkedin" duration={0.6} delay={0.4}>
            <Link href="https://www.linkedin.com/in/apoorvayadavv/" target="_blank">
              <div className="group flex flex-col items-start gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition-all duration-200 hover:border-teal-400 hover:bg-teal-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-teal-500 dark:hover:bg-zinc-700">
                <LinkedinIcon className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    LinkedIn
                  </h3>
                  <p className="mt-1 text-sm text-teal-600 dark:text-teal-400 group-hover:underline">
                    Connect with me
                  </p>
                </div>
              </div>
            </Link>
          </FadeUp>

          {/* GitHub */}
          <FadeUp key="contact-github" duration={0.6} delay={0.5}>
            <Link href="https://github.com/apooorva-aa" target="_blank">
              <div className="group flex flex-col items-start gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition-all duration-200 hover:border-teal-400 hover:bg-teal-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-teal-500 dark:hover:bg-zinc-700">
                <GithubIcon className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    GitHub
                  </h3>
                  <p className="mt-1 text-sm text-teal-600 dark:text-teal-400 group-hover:underline">
                    View my projects
                  </p>
                </div>
              </div>
            </Link>
          </FadeUp>
        </div>
      </AnimatePresence>
    </section>
  );
}
