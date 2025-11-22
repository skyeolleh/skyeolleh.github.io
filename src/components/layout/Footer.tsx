import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-900">
      <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
    </footer>
  );
}

