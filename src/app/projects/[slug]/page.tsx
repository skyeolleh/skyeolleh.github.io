import { portfolioData } from "@/data/portfolio";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ImageGallery } from "@/components/ui/ImageGallery";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, Github, ExternalLink, Calendar, Briefcase, Building, 
  Download, FileText, PlayCircle, Link as LinkIcon, Image as ImageIcon 
} from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetail(props: Props) {
  const params = await props.params;
  const project = portfolioData.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const galleryImages = project.details.images || [];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <Download size={16} />;
      case 'github': return <Github size={16} />;
      case 'demo': return <ExternalLink size={16} />;
      case 'video': return <PlayCircle size={16} />;
      default: return <LinkIcon size={16} />;
    }
  };

  return (
    <main className="min-h-screen py-20 bg-white dark:bg-black">
      <SectionContainer>
        {/* Navigation */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </Link>

        {/* Header Section */}
        <header className="mb-16 space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Project Logo / Icon */}
            {project.logo ? (
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex-shrink-0">
                <Image 
                  src={project.logo} 
                  alt={`${project.title} logo`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow-sm border border-gray-200 dark:border-gray-700 flex-shrink-0 text-gray-400">
                 <ImageIcon size={32} />
              </div>
            )}
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>

          {/* Meta Info Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
            {project.details.period && (
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white dark:bg-black rounded-lg shadow-sm">
                  <Calendar size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Period</p>
                  <p className="font-medium">{project.details.period}</p>
                </div>
              </div>
            )}
            {project.details.role && (
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white dark:bg-black rounded-lg shadow-sm">
                  <Briefcase size={20} className="text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">My Role</p>
                  <p className="font-medium">{project.details.role}</p>
                </div>
              </div>
            )}
            {project.details.company && (
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white dark:bg-black rounded-lg shadow-sm">
                  <Building size={20} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</p>
                  <p className="font-medium">{project.details.company}</p>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Left Column (2/3): Core Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                Project Overview
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {project.details.overview}
              </p>
            </section>

            {/* Gallery / Screenshots */}
            {galleryImages.length > 0 && (
              <section>
                 <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                  Gallery
                </h2>
                <ImageGallery images={galleryImages} />
              </section>
            )}

            {/* Problem & Solution */}
            {(project.details.problem || project.details.solution) && (
              <section className="grid md:grid-cols-2 gap-8">
                {project.details.problem && (
                  <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/20">
                    <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mb-3">Problem</h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.details.problem}</p>
                  </div>
                )}
                {project.details.solution && (
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/20">
                    <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-3">Solution</h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.details.solution}</p>
                  </div>
                )}
              </section>
            )}

            {/* Key Contributions (Updated to support details) */}
            {project.details.contributions && (
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-green-600 rounded-full"></span>
                  What I Did (Key Contributions)
                </h2>
                <ul className="space-y-6">
                  {project.details.contributions.map((item, idx) => {
                    const title = typeof item === 'string' ? item : item.title;
                    const detail = typeof item === 'string' ? null : item.detail;

                    return (
                      <li key={idx} className="flex items-start gap-4 p-5 bg-gray-50 dark:bg-gray-900 rounded-xl">
                        <div className="mt-1 w-7 h-7 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 text-green-600 dark:text-green-400 font-bold text-sm">
                          {idx + 1}
                        </div>
                        <div className="space-y-2">
                          <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg leading-snug">
                            {title}
                          </p>
                          {detail && (
                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed border-t border-gray-200 dark:border-gray-800 pt-2 mt-1">
                              {detail}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}

            {/* Troubleshooting / Challenges */}
            {project.details.challenges && (
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-600 rounded-full"></span>
                  Challenges & Learnings
                </h2>
                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                  <p className="whitespace-pre-line">{project.details.challenges}</p>
                </div>
              </section>
            )}

             {/* Resources & Links */}
            {project.details.resources && project.details.resources.length > 0 && (
              <section className="pt-8 border-t border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                   <span className="w-2 h-8 bg-gray-600 rounded-full"></span>
                   Resources & Links
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.details.resources.map((res, idx) => (
                    <Link 
                      key={idx}
                      href={res.link} 
                      target="_blank"
                      className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white dark:bg-black rounded-lg shadow-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                          {getResourceIcon(res.type)}
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">{res.title}</span>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-500" />
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column (1/3): Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Tech Stack */}
            <section className="bg-white dark:bg-black lg:sticky lg:top-32">
              <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <h3 className="text-lg font-bold mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="mt-8 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <h3 className="text-lg font-bold mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {project.details.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
          
        </div>
      </SectionContainer>
    </main>
  );
}
