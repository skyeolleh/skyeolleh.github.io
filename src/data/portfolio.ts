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
    name: "여재훈",
    role: "유니티 개발자",
    introduction: "경험과 성장을 중요하게 생각하며 새로운 기술을 배우고 적용하는 것을 좋아합니다.",
    contact: {
      email: "yeojh97@gmail.com",
      github: "https://github.com/skyeolleh",
    },
  },
  about: {
    title: "About Me",
    description: [
      "프로젝트 기획단계 부터, 개발, 론칭까지 전체적인 프로세스 경험이 있습니다.",
      "게임 개발 뿐아니라, 웹 개발, 서버 개발, Devops 등 다양한 분야의 개발 경험이 있습니다."
    ],
    skills: ["Unity", "C#", "Jenkins", "Django", "Go", "MySQL", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
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

