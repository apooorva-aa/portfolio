import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import FadeUp from "@/animation/FadeUp";
import { CERTIFICATIONS, MENTORSHIPS } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="mx-auto mb-20 max-w-7xl px-6 py-20 sm:px-14 md:px-20">
      <AnimatePresence>
        <FadeUp key="cert-title" duration={0.6}>
          <h2 className="text-3xl font-bold md:text-4xl">
            Certifications & Mentorships
          </h2>
        </FadeUp>
      </AnimatePresence>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Certifications Column */}
        <div>
          <h3 className="mb-6 text-xl font-semibold md:text-2xl">
            Certifications
          </h3>
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <AnimatePresence key={index}>
                <FadeUp key={`cert-${index}`} duration={0.6} delay={0.1 * index}>
                  <Link href={cert.issuerHref} target="_blank">
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 transition-all duration-200 hover:border-teal-400 hover:bg-teal-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-teal-500 dark:hover:bg-zinc-700">
                      <h4 className="font-semibold text-teal-600 dark:text-teal-400">
                        {cert.title}
                      </h4>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                        {cert.issuer}
                      </p>
                      {cert.description && (
                        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                          {cert.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </FadeUp>
              </AnimatePresence>
            ))}
          </div>
        </div>

        {/* Mentorships Column */}
        <div>
          <h3 className="mb-6 text-xl font-semibold md:text-2xl">
            Mentorships
          </h3>
          <div className="space-y-4">
            {MENTORSHIPS.map((mentorship, index) => (
              <AnimatePresence key={index}>
                <FadeUp
                  key={`mentorship-${index}`}
                  duration={0.6}
                  delay={0.1 * index}
                >
                  <Link href={mentorship.organisationHref} target="_blank">
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 transition-all duration-200 hover:border-teal-400 hover:bg-teal-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-teal-500 dark:hover:bg-zinc-700">
                      <h4 className="font-semibold text-teal-600 dark:text-teal-400">
                        {mentorship.title}
                      </h4>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                        {mentorship.organisation}
                      </p>
                      {mentorship.description && (
                        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                          {mentorship.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </FadeUp>
              </AnimatePresence>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
