import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Instagram, InstagramIcon, Linkedin, Mail, TwitterIcon, XIcon } from "lucide-react";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiFlutter, SiDart, SiTailwindcss, SiReact, SiNextdotjs, SiNestjs, SiDjango, SiFlask, SiPython, SiPostgresql } from "react-icons/si";
import { SiFirebase, SiSupabase, SiNodedotjs, SiMysql } from "react-icons/si";



const sections = ["About", "Projects", "Skills", "Contact"];

// Define a type for your project
type Project = {
  title: string;
  img: string;
  summary: string;
  details: string;
  techStack: string[];
};


const projects = [
  {
    title: "Chirp APP • Cross-Platform Social Platform",
    img: "/assets/chirp.mp4",
    summary:
      "A production inspired social platform engineered for web and mobile, featuring real-time interactions, authentication, media sharing, and scalable cloud architecture.",

    details: `
Chirp is a full-stack social networking platform built to simulate the architecture and engineering challenges of a modern production application.

The platform supports secure authentication, real-time feeds, media uploads, user profiles, comments, likes, notifications, and short-form content while maintaining a responsive experience across mobile and web.

The project emphasizes clean architecture, reusable UI systems, efficient state management, scalable Firebase services, and a backend-first approach to application design. It demonstrates my ability to build complex software systems that balance performance, maintainability, and user experience.

Designed as more than a Flutter application, Chirp showcases full-stack engineering principles, cloud integration, and modern frontend development practices suitable for production environments.
    `,

    techStack: [
      "Flutter",
      "Next.js",
      "TypeScript",
      "Firebase",
      "MySQL",
      "Tailwind CSS",
    ],
  },

  {
    title: "Flutter WhatsApp UI • Scalable Messaging Interface",
    img: "/assets/flutter_whats_ui.mp4",

    summary:
      "A production grade messaging interface focused on scalable UI architecture, reusable components, and responsive cross-platform design.",

    details: `
A pixel-accurate recreation of a modern messaging application built to explore scalable Flutter UI architecture and reusable design systems.

The project focuses on component composition, custom widgets, adaptive layouts, smooth animations, and responsive interfaces while maintaining clean code organization.

Rather than simply recreating a design, the application demonstrates engineering practices for building maintainable mobile interfaces capable of supporting large applications through reusable components and consistent design patterns.

This project reflects my approach to frontend engineering prioritizing architecture, developer experience, and long-term maintainability alongside polished user interfaces.
    `,

    techStack: [
      "NextJS",
      "Flutter",
      "Dart",
    ],
  },
];








type Experience = {
  role: string;
  place: string;
  year: string;
  points: string[];
  tech: string[];
};

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    place: "Softray Technologies",
    year: "2026 – Present",
    points: [
      "Architected multi-agent AI workflows for autonomous software development.",
      "Built shared contextual memory with Obsidian and MCP.",
      "Reduced AI-assisted development time by up to 80%.",
    ],
    tech: [
      "Python",
      "NestJS",
      "Node.js",
      "Next.js",
      "Obsidian",
      "MCP",
    ],
  },

  {
    role: "Backend Developer",
    place: "Softray Technologies",
    year: "2025",
    points: [
      "Engineered secure backend services for a financial platform.",
      "Led migration from Firebase to a scalable backend architecture.",
      "Implemented authentication, encryption, and high-performance APIs.",
    ],
    tech: [
      "NestJS",
      "Node.js",
      "MySQL",
      "Firebase",
    ],
  },

  {
    role: "Software Engineer",
    place: "QuickPost",
    year: "2024",
    points: [
      "Built a real-time social platform for web and mobile.",
      "Implemented feeds, messaging, authentication, and media sharing.",
      "Designed reusable UI systems and scalable architecture.",
    ],
    tech: [
      "Flutter",
      "Next.js",
      "Firebase",
      "Tailwind CSS",
    ],
  },

  {
    role: "Python Developer",
    place: "Media Automation Tools",
    year: "2024",
    points: [
      "Developed high-performance media processing APIs.",
      "Automated large-scale FFmpeg production workflows.",
      "Built reusable command-line automation tools.",
    ],
    tech: [
      "Python",
      "Django",
      "FFmpeg",
      "Bash",
    ],
  },
];





export default function PortfolioLanding() {
  const [activeSection, setActiveSection] = useState("About");
  // useState now accepts either Project or null
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText("teliej52@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-section") || "About");
          }
        });
      },
      { threshold: 0.9 }
    );

    document.querySelectorAll("section[data-section]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document
      .querySelector(`section[data-section="${id}"]`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (

    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen font-sans">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col md:flex-row  ">
        {/* Hero / Sidebar */}
        <section className="md:w-1/2 flex flex-col justify-between px-8 py-10 md:pl-16 md:py-24 md:fixed md:h-screen">
          {/* Hero content */}
          <div className="flex flex-col justify-center space-y-8 h-full">
            <div className="flex flex-col justify-center flex-grow text-left space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-heading font-bold tracking-tight leading-snug text-gray-300 text-[clamp(2.1rem,6vw,2.5rem)]"
              >
                Johnson Adebayo
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-xl md:text-xl font-semibold text-gray-300 max-w-md"
              >
                {/* <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                  alt=""
                  className="w-6 h-6"
                /> */}
                Software Engineer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 leading-relaxed max-w-80"
              >
                I build software that delivers high performance digital experiences.
              </motion.p> 
            </div>
            {/* Context nav (desktop only) + Socials */}
            <div className="flex flex-col items-start gap-8 mt-10">
              {/* Context nav (HIDDEN on mobile) */}
              <div className="hidden md:flex flex-col space-y-4 w-full">
                {sections.map((sec) => {
                  const isActive = activeSection === sec;
                  return (
                    <button
                      key={sec}
                      onClick={() => scrollToSection(sec)}
                      className="flex items-center group text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                    >
                      <span
                        className={`h-[1px] bg-purple-500 transition-all duration-300 ${
                          isActive ? "w-16" : "w-8 group-hover:w-16"
                        }`}
                      ></span>
                      <span
                        className={`ml-3 transition-all duration-300 ${
                          isActive
                            ? "text-purple-400 font-semibold"
                            : "group-hover:text-white"
                        }`}
                      >
                        {sec}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Social icons */}
              <div className="flex gap-6">
                <a href="https://github.com/teliej" className="hover:text-purple-400 transition-colors">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/johnson-adebayo-236873226" className="hover:text-purple-400 transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="teliej52@gmail.com" className="hover:text-purple-400 transition-colors">
                  <Mail size={22} />
                </a>
                <a href="https://x.com/teliej" className="hover:text-purple-400 transition-colors">
                  <XIcon size={26} />
                </a>
                <a href="https://www.instagram.com/teliej_/" className="hover:text-purple-400 transition-colors">
                  <InstagramIcon size={22} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Scrollable right content */}
        <div className="md:ml-[48%] w-full md:w-1/2">
          {/* About Section */}
          <section
            data-section="About"
            className="relative bg-gradient-to-b from-gray-850 to-gray-900 max-w-3xl mx-auto py-10 px-6 md:mt-16 text-left"
          >

            <h2 className="text-xl font-bold mb-1 text-gray-300 py-4
            ">ABOUT</h2>
            <div className="space-y-5">
              <p className="text-gray-300 leading-relaxed">
                I'm a <span className="text-white font-semibold">Software Engineer </span>
                passionate about building modern web and mobile applications that are
                intuitive, scalable, and built to last. With over
                <span className="text-white font-semibold"> 7 years of experience </span>
                across multiple technologies, I transform ideas into reliable software
                through clean architecture, thoughtful design, and maintainable code base.
                My focus is on creating products that deliver exceptional user experiences
                without compromising performance, quality, or scalability.
              </p>
              
              <p className="text-gray-400 italic">
                Beyond software development, I enjoy exploring product design, emerging
                technologies, and the engineering principles behind great digital products.
              </p>







  <h3 className="text-gray-200 font-semibold text-xl pt-4">What Drives My Work</h3>
  {/* Glass Cards */}
  <div className="flex flex-wrap gap-4 pt-4">
    {/* Card 1 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1 * 0.1 }}
      className="flex-1 min-w-[150px] max-w-sm 
                backdrop-blur-xl bg-white/10 border border-white/20 
                rounded-xl p-4 shadow-lg 
                flex flex-col items-center text-center space-y-2">
  
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="text-gray-200 font-semibold text-base">Engineering Excellence</h3>
      <p className="text-gray-300 text-sm">
        Building scalable software with clean architecture, maintainable code, and reliable performance.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1 * 0.1 }}
      className="flex-1 min-w-[150px] max-w-sm
                      backdrop-blur-xl bg-white/10 border border-white/20 
                      rounded-xl p-4 shadow-lg 
                      flex flex-col items-center text-center space-y-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="text-gray-200 font-semibold text-base">Adaptability</h3>
      <p className="text-gray-300 text-sm">
        Learning new technologies quickly and choosing the right tools for each problem instead of forcing a familiar solution.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1 * 0.1 }}
      className="flex-1 min-w-[150px] max-w-sm
                      backdrop-blur-xl bg-white/10 border border-white/20 
                      rounded-xl p-4 shadow-lg 
                      flex flex-col items-center text-center space-y-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <h3 className="text-gray-200 font-semibold text-base">Attention to Detail</h3>
      <p className="text-gray-300 text-sm">
       Polishing every interaction from system design to the smallest UI detail to create software that feels professional and dependable.
      </p>
    </motion.div>
  </div>

            </div>
          </section>




    <section
      data-section="Experience"
      className="bg-gray-900 py-4 px-2"
    >
      <h2 className="text-3xl font-bold text-left ml-4 mb-12 text-gray-300">
        Experience
      </h2>
      <div className="relative mx-auto">

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row md:items-start items-center`}
            >

              {/* Card */}
              <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-xl shadow-lg p-6 w-full">
                <h3 className="text-xl font-semibold text-gray-200 mb-1">
                  {exp.role}
                </h3>
                <p className="text-gray-400 text-sm font-medium mb-2">
                  {exp.place} • {exp.year}
                </p>
                <ul className="text-gray-300 text-sm list-disc pl-5 space-y-1 mb-3">
                  {exp.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs border border-gray-500 font-bold text-gray-300 px-2 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* view full resume */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-xl md:text-xl font-semibold text-gray-400 py-4 px-4 max-w-md"
          >
            <a href="/Johnson_Adebayo_Resume.pdf" download className="hover:text-purple-400 transition-colors">
            View Full Resume </a>
            <ArrowUpRight size={24} />
          </motion.h2>

        </div>
      </div>
    </section>




    <section
      data-section="Projects"
      className="bg-gray-900 max-w-6xl mx-auto py-8 px-4"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-300 text-center">
        Projects Preview
      </h2>
      <h3 className="text-1xl mb-8 text-gray-300"
      >An overview of previous old projects, click to view details</h3>

      <div className="space-y-1 flex flex-rol space-x-2">
        {projects.map((project, index) => (
          <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveProject(project)}
              className={`w-1/2`}
            >

            
            <div className="relative mx-auto w-[100%] md:w-[80%] aspect-[9/19.5] bg-gray-900 rounded-[1rem] border-[4px] border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">


              {/* Punch Hole Camera */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-20"></div>

              {/* Screen Area */}
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                {/* Image */}

                <video
                  src={project.img}
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  aria-hidden
                  className="w-full shadow-lg"
                /> 
                {/* <p className="text-white font-semibold text-lg">App Preview</p> */}
              </div>
            </div>
        </motion.div>
        ))}
      </div>


      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setActiveProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-gray-900 rounded-2xl shadow-2xl 
                         max-w-2xl w-full mx-4 p-8 overflow-y-auto max-h-[80vh]"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              {/* Modal Body */}
              <h2 className="text-2xl font-bold text-purple-400 mb-4">
                {activeProject.title}
              </h2>
              <img
                src={activeProject.img}
                alt={activeProject.summary}
                className="rounded-lg text-gray-300 mb-6"
              />
              <p className="text-gray-300 leading-relaxed mb-4">
                {activeProject.details}
              </p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {activeProject.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 
                               rounded-full text-xs font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 
                           rounded-lg text-white font-medium"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>






    {/* Skills Section */}
    <section
      data-section="Skills"
      className="max-w-5xl mx-auto py-10 px-6 text-center"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-12 text-gray-300">
        Tech Stack
      </h2>

      <div className="grid gap-6">
        {/* Frontend */}
        <div>
          <h3 className="text-xl text-start font-semibold text-gray-400 mb-6">Frontend</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition">
              <SiFlutter className="text-white text-5xl" />
              <span className="font-medium text-gray-400">Flutter</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition">
              <SiReact className="text-white text-5xl" />
              <span className="font-medium text-gray-400">React</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition">
              <FaJsSquare className="text-white text-5xl" />
              <span className="font-medium text-gray-400">JavaScript</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition">
              <SiTailwindcss className="text-white text-5xl" />
              <span className="font-medium text-gray-400">Tailwind CSS</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition">
              <SiNextdotjs className="text-white text-5xl" />
              <span className="font-medium text-gray-400">NextJS</span>
            </div>
          </div>
        </div>


        {/* Backend / Services */}
        <div>
          <h3 className="text-xl text-start font-semibold text-gray-400 mb-6">
            Backend & Services
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">

            {/* Python */}
            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105">
              <SiPython className="h-12 w-12 text-white" />
              <span className="font-medium text-gray-400">Python</span>
            </div>

            {/* Node.js */}
            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105">
              <SiNodedotjs className="h-12 w-12 text-white" />
              <span className="font-medium text-gray-400">NodeJS</span>
            </div>

            {/* Django */}
            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105">
              <SiDjango className="h-12 w-12 text-white" />
              <span className="font-medium text-gray-400">Django</span>
            </div>

            {/* SQL */}
            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105">
              <SiMysql className="h-12 w-12 text-white" />
              <span className="font-medium text-gray-400">MySql</span>
            </div>

            {/* Flask */}
            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105">
              <SiFlask className="h-12 w-12 text-white" />
              <span className="font-medium text-gray-400">Flask</span>
            </div>

            {/* Nestjs */}
            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105">
              <SiNestjs className="h-12 w-12 text-white" />
              <span className="font-medium text-gray-400">NestJS</span>
            </div>

            {/* Firebase */}
            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105">
              <SiFirebase className="h-12 w-12 text-white" />
              <span className="font-medium text-gray-400">Firebase</span>
            </div>

            {/* Supabase */}
            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105">
              <SiSupabase className="h-12 w-12 text-white" />
              <span className="font-medium text-gray-400">Supabase</span>
            </div>

            {/* Postgresql */}
            <div className="flex flex-col items-center gap-3 p-4 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-105">
              <SiPostgresql className="h-12 w-12 text-white" />
              <span className="font-medium text-gray-400">Postgresql</span>
            </div>

          </div>
        </div>
      </div>
    </section>



          {/* Personality Section */}
          <section
            data-section="Personality"
            className="relative max-w-5xl mx-auto py-4 px-2 text-center"
          >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-indigo-900/10 rounded-3xl blur-2xl"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-300 relative z-10">
              Beyond Code
            </h2>

            <div className="relative grid md:grid-cols-2 gap-3 z-10">
              {/* Left: personal story */}
              <div className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 text-left shadow-lg hover:shadow-purple-800/20 transition">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">
                  Calm • Curious • Intentional
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I enjoy building software that is as dependable as it is intuitive. Whether I'm designing a mobile application or architecting a backend service, I value simplicity, thoughtful engineering, and attention to detail. I believe the best products aren't defined by how much they do, but by how effortlessly they solve the problems they were built for.
                </p>
              </div>

              {/* Right: fun side + personality */}
              <div className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 text-left shadow-lg hover:shadow-purple-800/20 transition">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">
                  A Bit About Me
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>🧠 I enjoy breaking down complex problems into simple, practical solutions.</li>
                  <li>🎧 You'll usually find me coding with music in the background and a notebook full of ideas nearby.</li>
                  <li>🚀 I'm always exploring new technologies, software architecture, and better ways to build scalable applications.</li>
                  <li>✨ I believe great software comes from balancing engineering excellence with a genuine understanding of the people who use it.</li>
                </ul>
              </div>
            </div>
          </section>




          <section
            data-section="Vision"
            className="relative max-w-4xl mx-auto py-10 px-6 text-center"
          >
            {/* Soft gradient glow behind text */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-indigo-900/20 blur-3xl"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-300 relative z-10">
              My Vision
            </h2>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed relative z-10">
              I believe exceptional software is built where thoughtful engineering meets{" "}
              <span className="font-semibold text-gray-400">
                purposeful design.{" "}
              </span>
              Every technical decision from architecture to the smallest interface detail should contribute to a product that is{" "}
              <span className="font-bold text-gray-400">
                reliable, intuitive, and built to last.{" "} 
              </span>
              My goal is to create software that solves meaningful problems with clarity, performance, and craftsmanship, delivering experiences that feel effortless because of the engineering behind them.
            </p>

            <div className="mt-12 relative z-10">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                ⚡ Simplicity • Performance • Craftsmanship.
              </p>
            </div>
          </section>




          {/* Contact Section */}
          <section
            data-section="Contact"
            className="bg-gray-900 rounded-2xl py-16 px-10 border-t border-gray-700"
          >
            <div className="max-w-2xl mx-auto text-center">
              {/* Section Label */}
              <p className="uppercase tracking-widest text-sm text-gray-300 mb-2">
                Contact
              </p>

              {/* Headline */}
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-100">
                Got a Project? Let’s Build It Together 🚀
              </h2>

              {/* Subtext */}
              <p className="text-gray-400 mb-8">
                I’m always open to freelance gigs, collabs, or full-time roles.  
                Reach out below. I reply within <span className="font-semibold text-gray-200">24 hours</span>.
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-2 justify-center items-center">
                
                {/* Gmail with Copy */}
                <button
                  onClick={copyEmail}
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-gray-700 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 px-6 py-4 rounded-xl shadow-sm transition-all duration-200 ease-in-out transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 13.065l11.999-7.065v13h-24v-13z" />
                    <path d="M12 10.935l-12-7.065h24z" />
                  </svg>
                  <span className="font-medium text-white">
                    {copied ? "Copied!" : "teliej52@gmail.com"}
                  </span>
                </button>


                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-600 text-white px-6 py-4 rounded-xl shadow-sm transition-all duration-200 ease-in-out transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.38-1.1 2.5-2.48 2.5S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4zM8.5 8.5h3.8v2.1h.1c.5-1 1.7-2.1 3.6-2.1 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.5c0-1.8 0-4-2.5-4s-2.9 2-2.9 3.9V24h-4z"/>
                  </svg>
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/2348032174423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-green-900 hover:bg-green-600 text-white px-6 py-4 rounded-xl shadow-sm transition-all duration-200 ease-in-out transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48C18.21 1.17 15.21 0 12 0 5.37 0 0 5.37 0 12c0 2.11.55 4.14 1.6 5.94L0 24l6.22-1.63c1.71.94 3.63 1.44 5.78 1.44 6.63 0 12-5.37 12-12 0-3.21-1.17-6.21-3.48-8.52zM12 21.33c-1.78 0-3.47-.48-4.96-1.39l-.36-.21-3.69.97.99-3.59-.24-.37c-1-1.54-1.52-3.33-1.52-5.15 0-5.48 4.45-9.93 9.93-9.93 2.65 0 5.14 1.03 7.01 2.9 1.87 1.87 2.9 4.36 2.9 7.03 0 5.48-4.45 9.93-9.93 9.93zm5.55-7.42c-.3-.15-1.78-.88-2.06-.97-.28-.1-.48-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.51-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.57-.48-.49-.67-.5-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.28.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.71.22 1.35.19 1.86.12.57-.08 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.08-.13-.28-.2-.57-.35z" />
                  </svg>
                  <span className="font-medium">Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}