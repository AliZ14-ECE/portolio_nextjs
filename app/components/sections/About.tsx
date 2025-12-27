"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/app/data/portfolio";
import { User, Code, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-lg text-blue-600 font-semibold tracking-wide uppercase mb-4">
            {portfolioData.about.title}
          </h2>
          <h3 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl mb-6">
            {portfolioData.about.heading}
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500 dark:text-gray-300">
            {portfolioData.about.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mb-4">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
