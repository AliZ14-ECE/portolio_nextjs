"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/app/data/portfolio";
import { ArrowUpRight, Briefcase } from "lucide-react";

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 lg:py-32 bg-background relative">
      {/* Top border decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            {experience.title}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            {experience.heading}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary leading-relaxed">
            {experience.description}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-secondary to-accent/20 md:-translate-x-1/2 hidden md:block" />
            
            {experience.jobs.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-secondary border-4 border-background z-10" />
                
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block md:w-[calc(50%-2rem)] p-6 rounded-2xl bg-surface border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center text-accent">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-text-primary group-hover:text-accent transition-colors flex items-center gap-1">
                          {job.title}
                          <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </h3>
                        <p className="text-accent font-medium text-sm">{job.company}</p>
                      </div>
                    </div>
                  </div>
                  
                  <span className="inline-block px-3 py-1 rounded-full bg-surface-subtle text-text-muted text-xs font-medium mb-4">
                    {job.date}
                  </span>
                  
                  <p className="text-text-secondary leading-relaxed mb-4 text-sm">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border hover:border-accent/50 text-text-primary hover:text-accent font-medium transition-all duration-300 hover:shadow-lg"
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