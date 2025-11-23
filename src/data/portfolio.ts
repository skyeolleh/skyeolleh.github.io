export interface ProjectResource {
  title: string;
  link: string;
  type: 'pdf' | 'link' | 'video' | 'github' | 'demo';
}

export interface ProjectContribution {
  title: string;
  detail?: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  image?: string;
  logo?: string;
  
  // 상세 페이지용 확장 데이터
  details: {
    company?: string;
    period?: string;
    role?: string;
    overview: string;
    problem?: string;
    solution?: string;
    features: string[];
    // 문자열(기존) 또는 객체(상세 설명 포함) 모두 지원
    contributions?: (string | ProjectContribution)[];
    challenges?: string;
    images?: string[];
    resources?: ProjectResource[];
  }
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
    description: string[];
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
      slug: "portfolio-website",
      description: "Next.js와 Tailwind CSS로 제작한 개인 포트폴리오 사이트입니다.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/skyeolleh/skyeolleh.github.io",
      details: {
        company: "Personal Project",
        period: "2025.11 - Present",
        role: "Sole Developer",
        overview: "자신의 경험과 기술력을 효과적으로 보여주기 위한 개인 브랜딩 웹사이트입니다. 정적 배포가 가능한 구조로 설계하여 운영 비용을 최소화하면서도, 모던한 웹 기술을 활용해 사용자 경험을 극대화했습니다.",
        problem: "",
        solution: "",
        features: [
          "Next.js 15 App Router 기반의 최신 아키텍처",
          "Tailwind CSS v4를 활용한 반응형 디자인",
          "GitHub Actions를 이용한 자동화된 CI/CD 파이프라인",
          "Framer Motion을 활용한 자연스러운 페이지 전환 효과"
        ],
        contributions: [
          {
            title: "SSG(Static Site Generation) 구현",
            detail: "GitHub Pages 배포를 위해 Next.js의 generateStaticParams를 활용하여 동적 라우팅 문제를 해결하고 빌드 타임에 정적 페이지를 생성하도록 구현했습니다."
          },
          "컴포넌트 재사용성을 고려한 Atomic Design 패턴 일부 적용 (ui/sections/layout 분리)",
          "TypeScript 인터페이스 설계를 통한 데이터 구조화 및 유지보수성 향상",
          "SEO 최적화를 위한 메타데이터 및 시멘틱 태그 적용"
        ],
        challenges: "초기에는 styled-components 사용을 고려했으나, Next.js Server Components(RSC)에서의 스타일링 런타임 오버헤드를 줄이기 위해 Zero-runtime 솔루션인 Tailwind CSS를 도입하여 퍼포먼스를 개선했습니다."
      }
    },
    {
      title: "Project Example 2",
      slug: "project-example-2",
      description: "멋진 프로젝트 설명이 들어갈 자리입니다.",
      techStack: ["React", "Node.js", "PostgreSQL"],
      details: {
        company: "Tech Startup A",
        period: "2023.01 - 2023.06",
        role: "Backend Engineer",
        overview: "이 프로젝트는 예시 데이터입니다. 실제 프로젝트 내용을 채워주세요.",
        features: [
          "주요 기능 1",
          "주요 기능 2"
        ],
        contributions: [
          "기여 내용 1: 서버 아키텍처 설계 및 DB 스키마 최적화",
          "기여 내용 2: API 응답 속도 30% 개선"
        ]
      }
    },
    {
      title: "주디",
      slug: "joody",
      logo: "/images/joody/icon.png",
      link: "https://play.google.com/store/apps/details?id=com.joodyrn",
      description: "주디는 슬라임을 꾸미고 직접 아이템을 제작할 수 있으며, 다른 유저들과의 소통과 교환을 할 수 있는 커뮤니티 중심 게임 입니다.",
      techStack: ["Unity", "C#", "Jenkins", "Django", "Go", "MySQL", "Redis", "Docker"],
      details: {
        company: "주식회사 컨샐러드",
        period: "2022.04 - ",
        role: "유니티 클라이언트 개발 / 서버개발 / Devops",
        overview: "React Native로 대화형 설문 조사 플랫폼에 다마고치 같은 간단한 슬라임 키우기 컨텐츠에서 시작하였지만 슬라임 키우기 컨텐츠를 즐기는 사용자의 니즈가 증가함에 따라 게임적 요소를 개발시켜 현재는 슬라임 키우기 게임이 되었습니다. \n\n유저가 직접 픽셀 에디터를 이용해 아이템을 그리고 콘테스트에 제출하고 투표하여 인게임 아이템으로 출시할 수 있는 UGC기반 게임으로 다른 유저들과 아이템을 교환하고 광장이나 커뮤니티에서 서로 소통하며 즐기는 커뮤니티 중심 소셜 게임입니다.",
        features: [
          "픽셀 에디터로 직접 아이템을 그리고 투표를 통해 인게임 아이템으로 출시",
          "다른 유저와 실시간 아이템 교환하며 나만의 슬라임/아바타를 꾸미기"
        ],
        problem: "매우 많은 아이템의 등장으로 클라이언트와 서버, 운영 입장에서도 상당히 쉽지 않았습니다.",
        solution: "지속적인 프로파일링과 여러 최적화 기법들을 적용하여 많은 문제를 해결했습니다",
        contributions: [
          {
            title: "실시간 아이템 교환 시스템 개발",
          },
          {
            title: "어드레서블 패치 시스템 개발",
            detail: "유니티 어드레서블을 활용하여 필수 데이터 외의 리소스는 패치를 통해 다운받을 수 있도록 하는 시스템을 개발했습니다."
          },
          {
            title: "앱 번들 업로드 파이프라인 구축",
            detail: "Jenkins를 활용하여 앱 번들을 업로드하고 배포하는 파이프라인을 구축했습니다."
          },
          {
            title: "상점, 결제 기능 개발",
            detail: "Unity IAP를 활용하여 안드로이드와 iOS 플랫폼에서 결제 및 영수증 검증 기능을 구현했습니다."
          },
          {
            title: "멀티 플레이 컨텐츠 개발",
            detail: "Photon, Vivox등등 외무 SDK를 통한 멀티 플레이 컨텐츠를 개발했습니다."
          },
          "그리드 배치 시스템 컨텐츠 개발",
          {
            title: "백엔드 개발", 
            detail: "서버 개발과 AWS 클라우드 서비스를 활용한 Devops 업무를 담당했습니다."
          },
        ],
        images: [
          "/images/joody/joody1.png",
          "/images/joody/joody2.png",
          "/images/joody/joody_0.jpg",
          "/images/joody/joody_1.jpg",
          "/images/joody/joody_2.jpg",
          "/images/joody/joody_3.jpg",
          "/images/joody/joody_4.jpg",
        ],
        resources: [
           { title: "Play Store", link: "https://play.google.com/store/apps/details?id=com.joodyrn", type: "demo" }
        ]
      }
    },
  ],
};
