"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col items-center justify-center  mb-28 max-w-[50rem] sm:mb-0 scroll-mt-[100rem]">
      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.2 }}>
        <div className="flex">
          <h1 className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-4xl ">
            <span className="font-bold">Hello, I'm Oksana.</span> I'm a{" "}
            <span className="font-bold">frontend developer.</span> I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="font-bold">React</span>.
          </h1>

          <Image
            src="/oksana-melnyk.jpeg"
            width={192}
            height={192}
            quality={95}
            priority={true}
            alt="Oksana Melnyk"
            className="object-cover bg-qray-900  shadow-xl rotate-2 "
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4">
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 focus:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}>
            Contact me here
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
            href="/CV.pdf"
            download>
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <a
            className="bg-white text-grey-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text-gray-950 borderBlack"
            href="https://www.linkedin.com/in/comoartista/"
            target="_blank">
            <BsLinkedin />
          </a>
          <a
            className="bg-white text-grey-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
            href="https://github.com/comoartista"
            target="_blank">
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
