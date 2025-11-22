export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  image?: string; // 이미지 경로 (public 폴더 기준)
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    introduction: string;
    contact: {
      email: string;
      github: string;
      linkedin?: string;
    };
  };
  about: {
    title: string;
    description: string[]; // 여러 문단 지원
    skills: string[];
  };
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Skyeolleh",
    role: "Frontend Developer",
    introduction: "사용자 경험을 최우선으로 생각하는 개발자입니다.",
    contact: {
      email: "example@email.com", // 이메일을 수정하세요
      github: "https://github.com/skyeolleh",
    },
  },
  about: {
    title: "About Me",
    description: [
      "문제를 해결하고 새로운 기술을 배우는 것을 좋아합니다.",
      "깔끔하고 유지보수 가능한 코드를 작성하기 위해 노력합니다.",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  projects: [
    {
      title: "Portfolio Website",
      description: "Next.js와 Tailwind CSS로 제작한 개인 포트폴리오 사이트입니다.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/skyeolleh/skyeolleh.github.io",
    },
    {
      title: "Project Example 2",
      description: "멋진 프로젝트 설명이 들어갈 자리입니다.",
      techStack: ["React", "Node.js", "PostgreSQL"],
    },
  ],
};

