import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tools: string[];
  imageSrc?: string;
  customCover?: React.ReactNode;
}

export default function ProjectCard({
  id,
  title,
  description,
  tools,
  imageSrc,
  customCover
}: ProjectCardProps) {
  return (
    <Link
      to={`/project/${id}`}
      className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Image / Cover */}
      <div className="relative h-48 overflow-hidden bg-slate-800">
        {customCover ? (
          <div className="w-full h-full">
            {customCover}
          </div>
        ) : imageSrc ? (
          <>
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          </>
        ) : (
          <div className="w-full h-full bg-slate-800" />
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl text-white mb-2 group-hover:text-purple-200 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-1 text-xs bg-purple-500/10 border border-purple-400/20 text-purple-300 rounded"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* View Arrow */}
        <div className="flex items-center gap-2 text-purple-300 text-sm">
          <span>View Project</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}
