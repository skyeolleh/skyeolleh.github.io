"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Github, ExternalLink, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
                {/* Header with Logo & Title */}
                <div className="flex items-start justify-between gap-4">
                  <Link href={`/projects/${project.slug}`} className="flex items-start gap-4 flex-grow group-hover:text-blue-600 transition-colors">
                    {/* Logo */}
                    <div className="flex-shrink-0 w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      {project.logo ? (
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <ImageIcon size={20} />
                        </div>
                      )}
                    </div>
                    
                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-bold leading-tight">
                        {project.title}
                      </h3>
                      {project.details.role && (
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 block">
                          {project.details.role}
                        </span>
                      )}
                    </div>
                  </Link>

                  {/* External Links */}
                  <div className="flex gap-3 flex-shrink-0">
                    {project.github && (
                      <Link href={project.github} target="_blank" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                        <Github size={20} />
                      </Link>
                    )}
                    {project.link && (
                      <Link href={project.link} target="_blank" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>
                
                {/* Description */}
                <Link href={`/projects/${project.slug}`} className="block flex-grow">
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    {project.description}
                  </p>
                </Link>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-1 text-xs text-gray-400">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
