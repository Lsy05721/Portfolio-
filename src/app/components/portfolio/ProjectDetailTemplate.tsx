import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

interface ProjectMetadata {
  title: string;
  description: string;
  type: string;
  tools: string;
  duration?: string;
  role?: string;
  tags: string[];
}

interface ProjectSection {
  title: string;
  content: ReactNode;
}

interface ProjectFeature {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
}

interface ProjectDetailTemplateProps {
  metadata: ProjectMetadata;
  hero?: ReactNode;
  overview: string;
  problem?: string;
  solution?: string;
  features?: ProjectFeature[];
  systemProcess?: ReactNode;
  outcome: string;
  reflection: {
    whatWorks: string;
    improvements: string;
  };
  links?: {
    label: string;
    url?: string;
    onClick?: () => void;
  }[];
  additionalSections?: ProjectSection[];
}

export default function ProjectDetailTemplate({
  metadata,
  hero,
  overview,
  problem,
  solution,
  features,
  systemProcess,
  outcome,
  reflection,
  links,
  additionalSections
}: ProjectDetailTemplateProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Back */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </Link>

      {/* Header */}
      <section className="mb-16">
        <div className="mb-6">
          <div className="text-sm text-slate-500 mb-2 uppercase tracking-wide">
            {metadata.type}
          </div>

          <h1 className="text-4xl md:text-5xl text-slate-900 mb-4">
            {metadata.title}
          </h1>

          <p className="text-xl text-slate-700 leading-relaxed mb-6">
            {metadata.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {metadata.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metadata grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm border-t border-slate-200 pt-6">
            <div>
              <div className="text-slate-500 mb-1">Tools</div>
              <div className="text-slate-900">{metadata.tools}</div>
            </div>

            {metadata.duration && (
              <div>
                <div className="text-slate-500 mb-1">Duration</div>
                <div className="text-slate-900">{metadata.duration}</div>
              </div>
            )}

            {metadata.role && (
              <div>
                <div className="text-slate-500 mb-1">Role</div>
                <div className="text-slate-900">{metadata.role}</div>
              </div>
            )}
          </div>
        </div>

        {/* Hero */}
        {hero && (
          <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            {hero}
          </div>
        )}
      </section>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl text-slate-900 mb-4">Overview</h2>
        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
          <p className="text-slate-700 leading-relaxed">{overview}</p>
        </div>
      </section>

      {/* Problem */}
      {problem && (
        <section className="mb-12">
          <h2 className="text-2xl text-slate-900 mb-4">Problem</h2>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <p className="text-slate-700 leading-relaxed">{problem}</p>
          </div>
        </section>
      )}

      {/* Solution */}
      {solution && (
        <section className="mb-12">
          <h2 className="text-2xl text-slate-900 mb-4">Solution</h2>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <p className="text-slate-700 leading-relaxed">{solution}</p>
          </div>
        </section>
      )}

      {/* Features */}
      {features && (
        <section className="mb-12">
          <h2 className="text-2xl text-slate-900 mb-6">Key Features</h2>
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-slate-200">
                {f.icon && <div className="mb-3">{f.icon}</div>}
                <h3 className="text-lg text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-700">{f.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process */}
      {systemProcess && (
        <section className="mb-12">
          <h2 className="text-2xl text-slate-900 mb-6">System & Process</h2>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            {systemProcess}
          </div>
        </section>
      )}

      {/* Additional Sections (Team / Course 等) */}
      {additionalSections &&
        additionalSections.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl text-slate-900 mb-6">{section.title}</h2>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              {section.content}
            </div>
          </section>
        ))}

      {/* Outcome */}
      <section className="mb-12">
        <h2 className="text-2xl text-slate-900 mb-4">Final Outcome</h2>
        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
          <p className="text-slate-700">{outcome}</p>
        </div>
      </section>

      {/* Reflection */}
      <section className="mb-12">
        <h2 className="text-2xl text-slate-900 mb-6">Reflection</h2>

        <div className="space-y-4">
          <div className="bg-white p-6 border rounded-lg">
            <h3 className="text-lg mb-2">What Works</h3>
            <p>{reflection.whatWorks}</p>
          </div>

          <div className="bg-white p-6 border rounded-lg">
            <h3 className="text-lg mb-2">Areas for Improvement</h3>
            <p>{reflection.improvements}</p>
          </div>
        </div>
      </section>

      {/* Links */}
      {links && (
        <section className="text-center bg-slate-50 p-8 border rounded-lg">
          <h2 className="text-2xl mb-6">View Project</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {links.map((l, i) => (
              <a
                key={i}
                href={l.url}
                className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}