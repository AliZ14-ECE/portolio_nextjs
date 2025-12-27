"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/app/data/portfolio";
import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-lg text-blue-600 font-semibold tracking-wide uppercase mb-4">
            {experience.title}
          </h2>
          <h3 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl mb-6">
            {experience.heading}
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-300">
            {experience.description}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.jobs.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors mb-4"
              >
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {job.date}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
                    {job.title} · {job.company}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
          >
            View Full Résumé
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;