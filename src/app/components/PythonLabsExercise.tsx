import { Link } from "react-router";
import { ArrowLeft, Code2, FileCode, Download } from "lucide-react";

/// <reference types="vite/client" />

const labFiles = import.meta.glob(
  "/src/imports/python-lab-assignment/**/*",
  {
    query: "?url",
    import: "default",
    eager: true,
  }
) as Record<string, string>;


const labs = [
  {
    number: "01",
    title: "Simple Shapes",
    description:
      "Introductory Python drawing practice focused on basic shapes and visual output.",
    tags: ["Python", "Drawing", "Basics"],
  },
  {
    number: "02",
    title: "Turtle Drawing",
    description:
      "A Turtle graphics exercise exploring procedural drawing and visual composition.",
    tags: ["Python", "Turtle", "Graphics"],
  },
  {
    number: "03",
    title: "Custom Math Module",
    description:
      "A programming exercise focused on writing reusable functions and organizing code.",
    tags: ["Functions", "Modules", "Math"],
  },
  {
    number: "04",
    title: "Loops and Iterative Math",
    description:
      "Practice using loops, repeated logic, and calculation-based programming structures.",
    tags: ["Loops", "Logic", "Iteration"],
  },
  {
    number: "05",
    title: "Image Compositing",
    description:
      "A lab exploring image processing, composition, and pixel-based visual manipulation.",
    tags: ["Images", "Processing", "Composition"],
  },
  {
    number: "06",
    title: "Shapes with Pygame",
    description:
      "A Pygame-based visual exercise using shapes, screen coordinates, and rendering.",
    tags: ["Pygame", "Rendering", "Graphics"],
  },
  {
    number: "07",
    title: "Pachinko Simulation",
    description:
      "A small simulation exploring movement, randomness, and interactive systems.",
    tags: ["Simulation", "Randomness", "Pygame"],
  },
  {
    number: "08",
    title: "Pong Game",
    description:
      "A playable Python/Pygame project focusing on collision, movement, and gameplay systems.",
    tags: ["Game", "Pygame", "Interaction"],
  },
];


function getFileName(path: string) {
  return path.split("/").pop() || path;
}

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}



function getFilesForLab(index: number) {
  const labNumber = String(index + 1);
  const padded = labNumber.padStart(2, "0");

  return Object.entries(labFiles).filter(([path]) => {
    const clean = normalize(path);
    return (
      clean.includes(`lab${labNumber}`) ||
      clean.includes(`lab${padded}`) ||
      clean.includes(`assignment${labNumber}`) ||
      clean.includes(`assignment${padded}`) ||
      clean.includes(`exercise${labNumber}`) ||
      clean.includes(`exercise${padded}`)
    );
  });
}


export default function PythonLabsExercise() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Back */}
        <Link
          to="/exercises"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-12 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Exercises
        </Link>

        {/* Header */}
        <section className="mb-14">
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Python Programming Lab Archive
          </h1>

          <p className="text-2xl text-slate-300 leading-relaxed mb-8">
            A collection of Python lab assignments exploring drawing, functions,
            loops, image compositing, and interactive systems using Pygame.
          </p>

          {/* Info Blocks */}
          <div className="grid md:grid-cols-3 gap-6">

            <InfoBlock
              label="Course"
              value="CGT 115 – Scripting and Computational Thinking"
            />

            <InfoBlock
              label="Duration"
              value="Full Semester"
            />

            <InfoBlock
              label="Tools"
              value="Python · PyCharm · Pygame · Turtle"
            />

          </div>
        </section>

        {/* Labs */}
        <div className="grid lg:grid-cols-2 gap-8">
          {labs.map((lab, index) => (
            <LabCard
              key={lab.number}
              number={lab.number}
              title={lab.title}
              description={lab.description}
              tags={lab.tags}
              files={getFilesForLab(index)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}


function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-6">
      <p className="text-sm text-purple-300 mb-1 uppercase tracking-wide">
        {label}
      </p>
      <p className="text-white text-lg">{value}</p>
    </div>
  );
}


function LabCard({
  number,
  title,
  description,
  tags,
  files,
}: {
  number: string;
  title: string;
  description: string;
  tags: string[];
  files: [string, string][];
}) {
  return (
    <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">

      {/* Header */}
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-purple-300 text-sm">Lab {number}</p>
          <h2 className="text-white text-xl">{title}</h2>
        </div>
        <Code2 className="text-purple-300" />
      </div>

      {/* Description */}
      <p className="text-slate-400 mb-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-purple-500/10 border border-purple-400/20 text-purple-300 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Files */}
      <div className="space-y-2">
        {files.length > 0 ? (
          files.map(([path, url]) => (
            <a
              key={path}
              href={url}
              target="_blank"
              className="flex justify-between items-center bg-slate-950/60 p-3 rounded-lg border border-slate-700/40 hover:border-purple-400/50 transition"
            >
              <div className="flex items-center gap-2">
                <FileCode size={16} className="text-purple-300" />
                <span className="text-slate-300 text-sm truncate">
                  {getFileName(path)}
                </span>
              </div>

              <Download size={14} className="text-slate-500" />
            </a>
          ))
        ) : (
          <p className="text-slate-500 text-sm">
            No files matched. (check naming)
          </p>
        )}
      </div>

    </div>
  );
}