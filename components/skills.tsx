"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({ opacity: 100, y: 0, transition: { delay: 0.05 * index} }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap items-center justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="  bg-white border border-black/[0.1] py-3 px-5 rounded-xl"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}>
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
