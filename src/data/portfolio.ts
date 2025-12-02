export interface ProjectResource {
  title: string;
  link: string;
  type: 'pdf' | 'link' | 'video' | 'github' | 'demo';
}

export interface ProjectContribution {
  title: string;
  detail?: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
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
  
  details: {
    company?: string;
    period?: string;
    role?: string;
    overview: string;
    problem?: string;
    solution?: string;
    features: string[];
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
  workExperience: WorkExperience[]; // 경력 데이터 추가
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
    skills: ["Unity", "C#", "Jenkins", "Django", "Go", "MySQL", "PostgreSQL", "Redis", "Docker"],
  },
  workExperience: [
    {
      company: "주식회사 컨샐러드",
      position: "유니티 클라이언트 개발 / 서버 개발 / Devops",
      period: "2021.06 - 2025.07",
      description: "핵심 개발 멤버로써 클라이언트, 서버 등 다양한 업무를 담당했습니다.",
      achievements: [
        "주디 클라이언트, 서버 개발",
        "Jenkins CI/CD 파이프라인 구축 및 배포 자동화",
      ],
      techStack: ["Unity", "C#", "Django", "Jenkins", "AWS", "Docker"]
    },
    {
      company: "깔라만시 스튜디오",
      position: "프론트엔드 / 백엔드 개발자",
      period: "2020.07 ~ 2021.06",
      description: "React를 메인으로 프론트엔드 개발과, Django로 서버 개발 업무를 담당했습니다.",
      achievements: [
        "React/React Native 프로젝트 개발",
        "Django 서버 개발"
      ],
      techStack: ["React", "React Native", "TypeScript", "Django"]
    },
    {
      company: "마스터 컴퍼니",
      position: "프론트엔드 개발자",
      period: "2015.10 ~ 2017.02",
      description: "온라인 중장비 매칭 서비스 공사마스터 웹 프론트 개발",
      achievements: [
        "HTML, CSS, JavaScript를 이용한 웹 프론트 개발",
        "Objective-C를 이용한 iOS 앱 제작 경험"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Objective-C"]
    }
  ],
  projects: [
    {
      title: "주디",
      slug: "joody",
      logo: "/images/joody/icon.png",
      link: "https://play.google.com/store/apps/details?id=com.joodyrn",
      description: "주디는 슬라임을 꾸미고 직접 아이템을 제작할 수 있으며, 다른 유저들과의 소통과 교환을 할 수 있는 커뮤니티 중심 게임 입니다.",
      techStack: ["Unity", "C#", "Jenkins", "Django", "MySQL", "Redis", "Docker"],
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
    {
      title: "마이주디",
      slug: "myjoody",
      logo: "/images/myjoody/icon.png",
      link: "https://play.google.com/store/apps/details?id=io.consalad.joody2aos",
      description: "마이주디는 주디의 여러 장점들을 계승하고, 단점을들 보완하여 더 나은 품질의 게임 플레이를 제공하기 위해 제작된 게임 입니다.",
      techStack: ["Unity", "C#", "Jenkins", "GRPC", "Go", "PostgreSQL", "Redis"],
      details: {
        company: "주식회사 컨샐러드",
        period: "2025.02 ~ ",
        role: "유니티 클라이언트 개발 / 서버개발",
        overview: "처음 주디를 개발하기 시작했을 떄 부터 쌓아온 노하우와 경험을 바탕으로 더욱 발전된 주디를 제공하기 위한 프로젝트 였습니다. \n플리마켓이라는 유저들의 그린 아이템을 직접 판매할 수 있는 획기적인 시스템이 존재했습니다.",
        features: [
          "유저들이 직접 제작한 아이템을 개인 마켓을 이용해 판매할 수 있었습니다.",
        ],
        problem: "서버 통신을 최소화하고 메모리 최적화를 위한 많은 어려움이 있었습니다.",
        solution: "지속적인 프로파일링과 여러 최적화 기법들을 적용하여 많은 문제를 해결했습니다",
        contributions: [
          {
            title: "개인 마켓 시스템 개발",
            detail: "유저들이 직접 제작한 아이템을 개인 마켓을 이용해 판매할 수 있는 시스템을 개발했습니다."
          },
          {
            title: "상점 시스템 개발",
          },
          {
            title: "멀티 플레이 컨텐츠 개발",
            detail: "Photon Fusion을 활용하여 다양한 멀티 플레이 컨텐츠를 개발했습니다."
          },
          {
            title: "섬 꾸미기 개발",
            detail: "그리드 기반 섬 꾸미기 컨텐츠를 개발했습니다."
          }
        ],
        images: [
          "/images/myjoody/myjoody1.png",
        ],
      }
    },
    {
      title: "픽셀 머지 타워 - 자라나라 슬라임 타워",
      slug: "mergetower",
      logo: "/images/mergetower/icon.png",
      link: "https://play.google.com/store/apps/details?id=io.consalad.joody2aos",
      description: "주디의 장점인 귀여운 슬라임과 다양한 도트 건물들을 세워 나가는 머지 게임입니다.",
      techStack: ["Unity", "C#", "Unity Services", "Firebase", "Jenkins"],
      details: {
        company: "주식회사 컨샐러드",
        // period: "2025.02 ~ ",
        role: "유니티 클라이언트 개발",
        overview: "머지 시스템을 담당해주던 개발자분과 함께 개발자 2명, 디자이너 1명, 기획자1명 4인구성으로 개발했던 게임입니다. 다른 서비스나 게임에서 개발했던 경험을 살려 빠르게 개발하기 위해 머지 시스템을 메인으로 담당하지 못해 아쉬웠지만, 유니티에서 제공하는 다양한 게이밍 서비스를 활용한 개발을 경험할 수 있었습니다.",
        features: [
           
        ],
        problem: "적은 인원 제한된 시간으로 기간내에 최고의 게임을 개발하기 위한 어려움이 있었습니다.",
        solution: "서버리스 프로젝트로 빠르게 개발하여 빠른 기간내에 개발을 완료할 수 있었습니다.",
        contributions: [
          {
            title: "Unity Services를 이용한 서버리스 게임 개발",
            detail: "유니티 서비스의 Cloud Code, Cloud Save, Remote Config 등을 활용하여 서버리스 프로젝트를 개발했습니다."
          },
          {
            title: "Firebase를 이용한 데이터 저장 및 관리",
            detail: "Firebase의 Firestore, Realtime Database, Storage 등을 활용하여 데이터를 저장하고 관리했습니다."
          },
          {
            title: "게임의 각종 시스템 개발",
            detail: "메인 머지 부분을 제외한 게임내 대부분 시스템을 개발했습니다"
          }
        ],
        images: [
          "/images/mergetower/pixel1.png",
          "/images/mergetower/pixel2.png",
          "/images/mergetower/pixel3.png",
        ],
      }
    },
    {
      title: "인피니티 스매시 (가제)",
      slug: "infinitysmash",
      logo: "",
      description: "4가지 색상의 바닥을 부수며 지하세계 마왕을 만나러 가는 몬스터가 되어 무한히 내려가는 게임입니다.",
      techStack: ["Unity", "C#"],
      details: {
        company: "개인 프로젝트",
        period: "2025.11 ~ 개발 중",
        role: "유니티 클라이언트 개발",
        overview: "무한의 계단과 같은 킬링 타임 언제 어디서든 간단하고 쉬운 게임성으로 꾸준히 사랑받는 게임을 만들고 싶었습니다.\n\n요즘같이 AI의 도움을 받을 수 있는 세상에 빠르게 기획 > 개발 > 론칭하는 것이 중요하며 그에 맞게 빠르게 개발하여 게임을 테스트 해보기 좋은 프로젝트 였습니다.",
        features: [
           
        ],
        problem: "특별한 튜토리얼이 없이, 유저가 플레이 방법을 쉽게 터득할 수 있도록 만드는 것",
        solution: "정말 간단한 터치 유도 기능과 직관적인 플레이 방법으로 쉬운 게임 플레이를 유도했습니다.",
        contributions: [
          {
            title: "AI와 에셋스토어 에셋을 활용해 개발",
            detail: "에셋 스토어의 다양한 에셋과 AI를 통해 빠르게 게임을 제작하였습니다."
          },
        ],
        images: [
          "/images/projecta/screenshot1.jpg",
        ],
      }
    },
    {
      title: "가방정리 뱀서라이크",
      slug: "backmerge",
      logo: "",
      description: "가방에 아이템을 머지하고 정리하여 최고의 배치로 몰려오는 적을 잡는 뱀서라이크 게임입니다.",
      techStack: ["Unity", "C#", "ECS", "DOTS"],
      details: {
        company: "개인 프로젝트",
        period: "2025.09 ~ 개발 중",
        role: "유니티 클라이언트 개발",
        overview: "모바일에서의 최고의 퍼포먼스를 위해 ECS, DOTS를 활용하여 개발 진행중이며, 뱀서라이크 게임성을 유지하면서 가방정리와 머지 시스템을 추가했습니다.\n\n효율적인 아이템 배치로 대량의 적을 시원하게 적을 잡는 원초적인 재미를 위해 개발하고 있습니다.",
        features: [
          "Component 기반으로 다양한 무기 시스템 개발",
          "최대 1000마리의 몬스터가 등장 가능하도록 ECS기반으로 게임 개발"
        ],
        problem: "ECS/DOTS를 활용하여 개발하다보니 기존 Monobehaviour 기반 방식과는 꽤나 달라 어려움이 있었습니다.",
        solution: "ECS/DOTS 기반으로 개발되던 기록이 상당히 존재해 열심히 찾고 AI를 활용하며 개발하고 있습니다.",
        contributions: [
          {
            title: "ECS/DOTS 기반 개발",
            detail: "최고의 퍼포먼스를 위한 ECS/DOTS 기반 개발 진행중이며 모든 것을 해결할 순 없기에 하이브리드 방식으로 개발됩니다."
          },
          {
            title: "가방정리 시스템 개발",
            detail: "기본적인 그리드에 아이템을 배치하고 머지하는 시스템을 개발했습니다."
          },
        ],
        images: [
          "/images/projectb/screenshot1.png",
          "/images/projectb/screenshot2.png",
          "/images/projectb/screenshot3.jpg",
        ],
      }
    },
  ],
};
