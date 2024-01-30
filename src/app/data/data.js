import corpcommentImg from './corpcomment.png';
import rmtdevImg from './rmtdev.png';
import wordanalyticsImg from './wordanalytics.png';
import { FaFileAlt, FaGraduationCap, FaBriefcase, FaReact } from "react-icons/fa";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },            
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "DigitalHouse | Bootcamp",
    location: "Buenos Aires, AR",
    description:
      "Curso de modalidad intensiva de desarrollo web full-stack. Aprendi a usar node.js y vanilla javascript",
      date: "2022",
    icon:<FaGraduationCap/>
  },
  {
    title: "Presidencia de la Nacion",
    location: "Buenos Aires, AR",
    description:
    "Desarrollé e implementé aplicaciones web y API utilizando React, Django, Docker y Gitlab.",
    date: "2022 - Presente",
    icon:<FaFileAlt/>
  },
  {
    title: "Bigho",
    location: "Buenos Aires, AR",
    description:
      "Co-founder en Bigho. Realizamos desarrollo de software desde cero e implementaciones de software libre. Realizamos aplicaciones webs informativos, E-commerce, Blogs o sistemas de gestión.",
    date: "2022 - Presente",
    icon:<FaBriefcase/>
  },
];

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
];
