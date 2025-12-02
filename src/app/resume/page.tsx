import { SectionContainer } from "@/components/ui/SectionContainer";
import { portfolioData } from "@/data/portfolio";
import { PrintButton } from "@/components/ui/PrintButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: `${portfolioData.personal.name} - 자기소개서`,
  description: "지원 동기, 직무 역량, 협업 경험 및 가치관을 담은 자기소개서입니다.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen py-20 bg-white dark:bg-black">
      <SectionContainer className="max-w-4xl">
        {/* 상단 네비게이션 & 액션 버튼
        <div className="flex items-center justify-between mb-12 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <PrintButton />
        </div> */}

        {/* 자기소개서 본문 */}
        <article className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-900/50 p-8 md:p-12 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm print:shadow-none print:border-none print:p-0">
          
          {/* 헤더 */}
          <header className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
              자기소개서
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-600 dark:text-gray-400">
              <span className="font-medium text-lg">{portfolioData.personal.name}</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span>{portfolioData.personal.role}</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
              <a href={`mailto:${portfolioData.personal.contact.email}`} className="hover:text-blue-600 transition-colors">
                {portfolioData.personal.contact.email}
              </a>
            </div>
          </header>

          {/* 섹션 1 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-lg">01.</span>
              지원 동기 및 입사 후 포부
            </h2>
            <div className="pl-0 md:pl-8 border-l-2 border-transparent md:border-gray-100 md:dark:border-gray-800 space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                지원 동기: 다양한 분야를 경험한 개발자
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                다양한 파트를 맡으면서 배운 다양한 경험으로 문제를 유연하게 처리할 수 있는 개발자 입니다.
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                맨 처음 웹 개발자를 시작으로 서버 개발, Devops 등등 오래 몸 담았던 회사의 핵심 개발 멤버로써 많은 경험을 할 수 있었습니다. 
                프론트엔드 개발자, 서버 개발자 등을 거쳐 현재 유니티 게임 개발자로써는 2년이 되었으며 꾸준한 프로파일링으로 메모리 최적화, 
                앱 배포 파이프라인 구축, 패치 시스템 등등 유니티 개발자로써의 경험을 쌓았습니다. 다양한 개발 분야에서의 경험이 
                요즘 같이 AI를 활용한 개발의 중요해진 시점에서 큰 장점으로 작용할 것 입니다.
              </p>
            </div>
          </section>

          {/* 섹션 2 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-lg">02.</span>
              직무 역량 및 문제 해결 경험
            </h2>
            <div className="pl-0 md:pl-8 border-l-2 border-transparent md:border-gray-100 md:dark:border-gray-800 space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                '지속 가능한 성능'을 위한 비효율 개선 경험
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                이전 진행했던 프로젝트 ‘주디’는 유저들이 직접 아이템을 제작하여 투표를 받고 아이템으로 출시되는 시스템을 가지고 있었습니다. 
                많은 유저분들의 참여로 게임에는 정말 많은 수의 아이템이 계속 늘어날 수 밖에 없는 구조였고 이를 표시하기 위한 무한 스크롤 뷰나 
                페이지네이션 등이 추가되면서 많은 메모리 사용과 게임이 무거워지는 문제가 발생했습니다.
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                먼저 느려진 로딩을 개선하기 위해 에셋 번들 묶음 리뉴얼과 비동기 로딩 등을 적용했습니다. 그리고 가장 큰 문제였던 메모리 문제는 
                프로파일을 통해 특정 기능에서 많은 메모리와 CPU 사용을 발견했고, 리사이클 무한 스크롤 뷰 적용, 스프라이트 아틀라스 적용 등 
                최적화 기법들을 적용시켜 해결했습니다.
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                앞으로 게임을 만들 때 어떻게 개발해야 하는지를 알게 해주었고, 특히 하면 안되는 것은 무엇인지 배울 수 있는 값진 경험이었습니다.
              </p>
            </div>
          </section>

          {/* 섹션 3 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-lg">03.</span>
              협업 및 소통 경험
            </h2>
            <div className="pl-0 md:pl-8 border-l-2 border-transparent md:border-gray-100 md:dark:border-gray-800 space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                업무 스타일이 다른 팀원과의 '상호 존중 기반' 목표 완수
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                세상에는 정말 다양한 사람이 존재하고 모두 원하는 바가 정말 다릅니다. 특히 스타트업에서는 한명한명이 자신의 분야의 전문가였고, 
                바라보는 시각 자체가 다른 경우가 상당히 많았습니다.
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                기획 파트 인원과 디자인 파트 인원들이 펼친 여러 꿈들을 모두 이뤄주고 싶은 마음이 컸지만 빠른 선택과 집중이 필요한 순간이 많았고, 
                그럴 때마다 어떻게 진행하면 좋을지 토론을 자주 했습니다. 개발자로써 생각했을 때는 더 효율적인 게임을 만드는 것이 중요하다고 믿어왔지만, 
                유저 반응과 다른 시각에서 바라본 의견들을 종합해 어느정도 타협을 하면 더 좋은 결과를 만들어 낼 수 있다는 것을 많이 경험했습니다.
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                결과적으로 서로 서로 의견을 나누고 입장 차이를 설명해주는 분위기 덕분에 서로 기분 상하지 않고 프로젝트를 즐겁게 진행할 수 있었으며 
                상당한 매출 결과를 만들어 낼 수 있었습니다.
              </p>
            </div>
          </section>

          {/* 섹션 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-lg">04.</span>
              본인이 추구하는 가치관 및 태도
            </h2>
            <div className="pl-0 md:pl-8 border-l-2 border-transparent md:border-gray-100 md:dark:border-gray-800 space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                '끊임없이 성장하는 개발자'
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                IT업계는 정말 빠르게 변화합니다. 개발에서의 활용뿐만 아니라 일상생활에서도 큰 도움을 받을 정도로 AI가 빠르게 발전했습니다. 
                처음에는 아직까진 개발에 활용하긴 어렵다고 판단했었으나 든든한 파트너로써 큰 역할을 해주고 있습니다. 
                개발 역량 뿐만 아니라 AI를 활용하여 생산성을 더 높이는 게 중요해졌습니다.
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                이렇게 몇 년 전까진 상상하지 못했던 변화가 생겼습니다. 끊임없이 연구하고 공부하여 계속해서 성장해 나가는 것이 정말 중요합니다. 
                미래를 이끌어갈 새로운 기술과 변화들을 빠르게 학습하고 적용해 나갈 준비가 되어있습니다.
              </p>
            </div>
          </section>

        </article>
      </SectionContainer>
    </main>
  );
}
