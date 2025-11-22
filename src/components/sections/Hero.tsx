"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <SectionContainer id="hero" className="min-h-screen flex flex-col justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <span className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400">
          Hi, I am
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
          {portfolioData.personal.name}
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-500 dark:text-gray-400">
          {portfolioData.personal.role}
        </h2>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {portfolioData.personal.introduction}
        </p>
        
        <div className="pt-8">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400"
      >
        <ArrowDown size={24} />
      </motion.div>
    </SectionContainer>
  );
}

