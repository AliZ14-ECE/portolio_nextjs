"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/app/data/portfolio";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg text-blue-600 font-semibold tracking-wide uppercase mb-4">
            {portfolioData.personal.role}
          </h2>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-6">
            Hi, I'm{" "}
            <span className="text-blue-600">{portfolioData.personal.name}</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 mb-8">
            {portfolioData.personal.description}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View Work
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
