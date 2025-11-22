"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Mail, Github } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <SectionContainer id="contact" className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          새로운 기회나 협업에 대해 언제든지 열려있습니다.
          <br />
          궁금한 점이 있거나 인사를 나누고 싶다면 편하게 연락주세요.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href={`mailto:${portfolioData.personal.contact.email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Mail size={20} />
            <span>Send Email</span>
          </Link>
          
          <Link
            href={portfolioData.personal.contact.github}
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </Link>
        </div>
      </motion.div>
    </SectionContainer>
  );
}

