export interface CertificationProps {
  title: string;
  issuer: string;
  issuerHref: string;
  description?: string;
}

export const CERTIFICATIONS: CertificationProps[] = [
  {
    title: "Google Cybersecurity Certificate",
    issuer: "Google, Coursera",
    issuerHref: "https://www.coursera.org/account/accomplishments/specialization/3RRCSCLOAG8H",
    description: "Foundational cybersecurity training covering threat analysis, risk mitigation, SIEM usage, and hands-on security work with Python, Linux, and SQL.",
  },
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google, Coursera",
    issuerHref: "https://www.coursera.org/account/accomplishments/professional-cert/ZNZCE3FWLNAV",
    description: "Comprehensive UX design training covering user research, prototyping, and design systems.",
  },
];

export interface MentorshipProps {
  title: string;
  organisation: string;
  organisationHref: string;
  description?: string;
}

export const MENTORSHIPS: MentorshipProps[] = [
  {
    title: "Google WE Scholarship & Mentorship Program",
    organisation: "Talentsprint, supported by Google",
    organisationHref: "https://we.talentsprint.com/",
    description: "Selected for Cohort 6 of the Women Engineers Program, ranking in the top 1% among 30,000+ applicants. Completed intensive training in Data Structures & Algorithms, Web Development, Generative AI, and corporate skills.",
  },
];
