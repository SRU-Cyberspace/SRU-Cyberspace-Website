export type NavItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  kind: "discord" | "instagram" | "linkedin" | "github" | "email"
}

export type Officer = {
  name: string
  role: string
  email?: string
}

export type EventItem = {
  title: string
  date: string
  location: string
  summary: string
  status: "upcoming" | "past" | "tba"
}

export const club = {
  name: "SRU Cyberspace",
  shortName: "Cyberspace",
  formalName: "Cyberspace Club at Slippery Rock University",
  tagline: "Learn security. Build skills. Meet people who care about both.",
  schoolYear: "2026-2027 school year",
  email: "cyberspace@sru.edu",
  location: "Slippery Rock University, Slippery Rock, PA",
  mission:
    "We give Slippery Rock students a place to explore cybersecurity, practice defensive and offensive skills ethically, and grow into professionals who look out for each other.",
  aboutBlurb:
    "Cyberspace Club is the student cybersecurity organization at Slippery Rock University. We run workshops, CTF practice, speaker nights, and hands-on labs for majors and curious beginners alike.",
  joinBlurb:
    "Meetings are open to every SRU student. Show up once, join Discord, or email the officers. No prior experience required.",
  heroImage: {
    src: "https://picsum.photos/seed/sru-cyberspace-hero/960/720",
    alt: "Students collaborating on laptops in a campus lab",
  },
  missionImage: {
    src: "https://picsum.photos/seed/sru-cyberspace-mission/960/720",
    alt: "Campus pathway lined with trees near Old Main",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Join", href: "/join" },
  ] satisfies NavItem[],
  socials: [
    {
      label: "Discord",
      href: "https://discord.gg/TBD",
      kind: "discord",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/TBD",
      kind: "instagram",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/TBD",
      kind: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/SRU-Cyberspace",
      kind: "github",
    },
    {
      label: "Email",
      href: "mailto:cyberspace@sru.edu",
      kind: "email",
    },
  ] satisfies SocialLink[],
  officers: [
    { name: "TBD", role: "President" },
    { name: "TBD", role: "Vice President" },
    { name: "TBD", role: "Treasurer" },
    { name: "TBD", role: "Secretary" },
    { name: "TBD", role: "Events Lead" },
  ] satisfies Officer[],
  events: [
    {
      title: "Kickoff and lab tour",
      date: "TBA · Fall 2026",
      location: "TBA · SRU campus",
      summary:
        "Meet the officers, set up your accounts, and walk through the tools we use for workshops and CTF nights.",
      status: "tba",
    },
    {
      title: "Intro to CTFs",
      date: "TBA · Fall 2026",
      location: "TBA · SRU campus",
      summary:
        "A beginner-friendly capture-the-flag night covering web, crypto, and forensics puzzles you can solve in a group.",
      status: "tba",
    },
    {
      title: "Speaker night",
      date: "TBA · Fall 2026",
      location: "TBA · SRU campus",
      summary:
        "Alumni and industry guests talk through real security work, internships, and how they got started.",
      status: "tba",
    },
  ] satisfies EventItem[],
  initiatives: [
    {
      title: "Workshop nights",
      summary:
        "Hands-on sessions on networking, Linux, web security, and defensive tooling. Bring a laptop.",
    },
    {
      title: "CTF practice",
      summary:
        "Team practice for picoCTF, HackTheBox, and regional competitions. Beginners pair with veterans.",
    },
    {
      title: "Career and community",
      summary:
        "Resume reviews, speaker nights, and connections to SRU faculty and regional security meetups.",
    },
  ],
} as const

export type Club = typeof club
