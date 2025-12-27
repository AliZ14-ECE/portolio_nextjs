"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/app/data/portfolio";

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-lg text-blue-600 font-semibold tracking-wide uppercase mb-4">
            {skills.title}
          </h2>
          <h3 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl mb-6">
            {skills.heading}
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-300">
            {skills.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-black rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h4>
              </div>
              <ul className="space-y-2">
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;