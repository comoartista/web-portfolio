"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a self-taught developer with a background in management. Alongside
        my main job, I used to make simple static pages for friends, but now{" "}
        <span className="font-medium">
          {" "}
          I'm fully immersed in the world of development
        </span>
        . I'm also familiar with TypeScript and the basics of Next.js.
      </p>
      <p>I also love traveling and spending time outdoors.</p>
    </motion.section>
  );
}
