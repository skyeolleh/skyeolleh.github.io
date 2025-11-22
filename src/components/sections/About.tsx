"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function About() {
  return (
    <SectionContainer id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">{portfolioData.about.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {portfolioData.about.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.about.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}

