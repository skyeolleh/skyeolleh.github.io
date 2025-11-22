"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <SectionContainer id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <Link href={project.github} target="_blank" className="text-gray-500 hover:text-black dark:hover:text-white">
                        <Github size={20} />
                      </Link>
                    )}
                    {project.link && (
                      <Link href={project.link} target="_blank" className="text-gray-500 hover:text-black dark:hover:text-white">
                        <ExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
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

