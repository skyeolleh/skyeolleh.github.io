"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Calendar, Briefcase } from "lucide-react";

export function WorkExperience() {
  return (
    <SectionContainer id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>

        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 md:ml-6 space-y-12">
          {portfolioData.workExperience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-white dark:bg-black border-4 border-blue-600 dark:border-blue-400" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 mb-4">
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium mt-1">
                    <Briefcase size={16} />
                    <span>{exp.position}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-xl border border-gray-100 dark:border-gray-800">
                  <h4 className="font-semibold mb-3 text-sm uppercase text-gray-500 tracking-wider">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}

