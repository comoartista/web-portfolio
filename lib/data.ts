import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cryptocap from "@/public/cryptocap.png";
import rmtdevImg from "@/public/rmtdev.png";
import eventUpImg from "@/public/event.png";
import finmillImg from "@/public/finmill.png";
import packcheckImg from "@/public/packcheck.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CryptoCap",
    description:
      "CryptoCap is a cryptocurrency app that enables users to access real-time information about different cryptocurrencies.",
    tags: ["React", "Chart.js", "ReactRouter", "Tailwind"],
    linkToDemo: "https://crypto-currency-pi-rouge.vercel.app",
    linkToGithub: "https://github.com/comoartista/crypto-currency",
    imageUrl: cryptocap,
  },
  {
    title: "PackCheck",
    description: "An app that will help you package your luggage.",
    tags: ["React", "Context API", "Zustand"],
    linkToDemo: "https://pack-check.vercel.app/",
    linkToGithub: "https://github.com/comoartista/packCheck",

    imageUrl: packcheckImg,
  },
  {
    title: "EventUp",
    description:
      "Job board for remote developer jobs. It has features like filtering, sorting and pagination.",
    tags: ["JavaScript", "HTTP5", "SCSS"],
    linkToDemo: "https://event-up-ki3u.vercel.app/index.html",
    linkToGithub: "https://github.com/comoartista/event-up",
    imageUrl: eventUpImg,
  },
  {
    title: "Finmill",
    description:
      "A landing page for virtual workshop on personal finance, developed with a mobile-first approach.",
    tags: ["HTML5", "SCSS", "Swiper.js"],
    linkToDemo: "https://finmill.vercel.app",
    linkToGithub: "https://github.com/comoartista/finmill",
    imageUrl: finmillImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Zustand",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
