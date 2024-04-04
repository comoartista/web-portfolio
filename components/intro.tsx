"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="h-screen flex flex-col items-center justify-center max-w-[50rem] sm:-mt-8 sm:mb-8 scroll-mt-[100rem]">
      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.4 }}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-10 mt-4 px-4 text-4xl font-medium !leading-[1.5] text-center">
            Hi, I'm Oksana, a{" "}
            <span className="italic font-semibold">frontend developer</span> who
            loves turning ideas into user-friendly websites and apps.
          </h1>
        </div>
      </motion.div>

      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.4, delay: 0.6 }}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 focus:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}>
            Contact me here
          </Link>
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
            href="/CV.pdf"
            download>
            Download CV
          </a>
          <div className="flex items-center justify-center gap-4 ">
            <a
              className="bg-white text-grey-700 p-4 flex items-center  rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text-gray-950 borderBlack"
              href="https://www.linkedin.com/in/comoartista/"
              target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              className="bg-white text-grey-700 p-4 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
              href="https://github.com/comoartista"
              target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
