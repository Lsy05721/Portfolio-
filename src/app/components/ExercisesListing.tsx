import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";


import drawingImg from "../../imports/ad113-drawing-12.jpg";
import labCover from "../../imports/game-dev-lab-archive.png";

export default function ExercisesListing() {
  const exercises = [
    {
      id: "ad113-drawing",
      title: "Structure & Shadow",
      description: "Observational drawings exploring form, shading, and composition.",
      tools: ["Drawing", "Observation", "Composition"],
      imageSrc: drawingImg
    },

  
    {
  id: "gd-labs",
  title: "Game Development Lab Archive",
  description:
    "A collection of Unreal Engine 5 lab exercises exploring whiteboxing, audio implementation, interaction systems, and rapid prototyping workflows.",
  tools: ["Unreal Engine 5", "Blueprint", "Level Design", "Audio"],
  imageSrc: labCover
    },

    {
  id: "python-labs",
  title: "Python Programming Lab Archive",
  description:
    "A collection of Python lab assignments exploring drawing, functions, loops, image compositing, Pygame, and small interactive simulations.",
  tools: ["Python", "Pygame", "Turtle", "Programming"],
  imageSrc:
    "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
}
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-8 transition-colors duration-300"
      >
        <ArrowLeft size={20} />
        Back to Home
      </Link>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl text-white mb-3">Exercises</h1>
        <p className="text-slate-400">
          Coursework and studio-based creative explorations
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-4 gap-5">
        {exercises.map((exercise) => (
          <Link
            key={exercise.id}
            to={`/exercise/${exercise.id}`}
            className="group relative overflow-hidden rounded-lg bg-slate-900/30 border border-slate-700/40 hover:border-purple-400/50 transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="relative h-32 overflow-hidden bg-slate-800">
              <img
                src={exercise.imageSrc}
                alt={exercise.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-base text-white mb-2 group-hover:text-purple-200 transition-colors">
                {exercise.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {exercise.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 text-xs bg-slate-800/60 text-slate-400 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="text-slate-500 text-xs mb-3 leading-relaxed">
                {exercise.description}
              </p>

              <div className="flex items-center gap-1 text-purple-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Details</span>
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}