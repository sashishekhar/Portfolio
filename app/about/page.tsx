"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PhotoCardStack } from '@/components/PhotoCardStack';
import Timeline from '@/components/Timeline';

const timelineData = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    description:
      "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    type: "work" as const,
  },
  {
    year: "2023",
    title: "Portfolio Website Launch",
    description:
      "Designed and developed a modern portfolio website showcasing my projects and skills. Implemented advanced animations and responsive design principles.",
    skills: ["Next.js", "Framer Motion", "Tailwind CSS"],
    type: "project" as const,
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Developed and maintained multiple client projects, focusing on performance optimization and user experience improvements.",
    skills: ["Vue.js", "Python", "PostgreSQL", "Redis"],
    type: "work" as const,
  },
  {
    year: "2021",
    title: "Computer Science Degree",
    company: "University of Technology",
    description:
      "Graduated with honors, specializing in software engineering and web technologies. Completed capstone project on machine learning applications.",
    skills: ["Algorithms", "Data Structures", "Machine Learning"],
    type: "education" as const,
  },
  {
    year: "2020",
    title: "Open Source Contributor",
    description:
      "Started contributing to open source projects, focusing on React component libraries and developer tools. Gained recognition in the developer community.",
    skills: ["Open Source", "React", "JavaScript"],
    type: "achievement" as const,
  },
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full bg-neutral-50 dark:bg-black overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert opacity-70 dark:opacity-40 bg-repeat bg-center z--10"></div>

      {/* Grid layout */}
      <div className="main grid grid-cols-[2.25fr_5.5fr_2.25fr] w-full">

        {/* LEFT COLUMN */}
        <div className="relative">
          <div className="w-[280px] h-[242px] ml-[50px]" />
        </div>

        {/* MIDDLE COLUMN */}
        <div className="middle mx-auto relative  shadow-[2px_0px_5px_rgba(0,0,0,0.2),-2px_0px_5px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] dark:border-l dark:border-r dark:border-neutral-600 border-neutral-300 bg-white dark:bg-neutral-900">
          <div style={{ zIndex: 100, width: '100%' }}>
            <Navbar />
          </div>

          <div className="photostack">
            <PhotoCardStack />
          </div>

          <div className="bio p-5 m-5 about-bio-inset-shadow text-md md:text-lg leading-7 text-neutral-700 dark:text-neutral-300 font-mono">
            I’m a full-stack developer with 2+ years of experience making apps look pretty on the outside and work like a charm on the inside. Think React, Next.js, Node — basically the Avengers of my toolkit.
            <br /><br />
            I’ve built everything from “tiny idea in a Google Doc” to “client-ready product” and I’m slightly obsessed with clean UIs (yes, I judge fonts in the wild). When I’m not debugging code at ungodly hours, I’m probably daydreaming about how to make buttons feel just a little clickier.
            <br /><br />
            In short: I build apps that don’t just function — they vibe. ✨
          </div>

          <div className="w-full flex mt-20 justify-center font-mono">
            <h2 className="text-lg font-semibold tracking-wide text-neutral-700 dark:text-neutral-200">
              a timeline to past
            </h2>
          </div>

          <div className="timeline">
            <Timeline items={timelineData} />
          </div>

          <div className="mt-10">
            <Footer />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative">
          <div className="w-[280px] h-[400px] ml-[15px]" />
        </div>
      </div>
    </div>
  )
};
