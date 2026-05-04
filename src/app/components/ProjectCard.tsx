import { Link } from "react-router";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  pitch: string;
  tools: string[];
  imageSrc: string;
  link: string; // 必填
  featured?: boolean;
}

export default function ProjectCard({
  title,
  pitch,
  tools,
  imageSrc,
  link,
  featured = false
}: ProjectCardProps) {
  return (
    <Link
      to={link}
      className={`group block relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-purple-900/50 border border-purple-500/20 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] ${featured ? 'md:col-span-2' : ''}`}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-slate-800">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80"></div>
        <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-all duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl mb-2 text-white group-hover:text-purple-200 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-slate-300 leading-relaxed mb-4">
          {pitch}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex items-center gap-2 text-purple-300 group-hover:text-purple-100 transition">
          <span>View Case Study</span>
          <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent group-hover:scale-150 transition-transform duration-700"></div>
    </Link>
  );
}