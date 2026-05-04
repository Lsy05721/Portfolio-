import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router";

export default function CaseStudyTemplate() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-8 transition-colors duration-300"
      >
        <ArrowLeft size={20} />
        Back to Portfolio
      </Link>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl text-white mb-4">Project Title</h1>
        <p className="text-xl text-slate-300 mb-6">
          A brief one-sentence pitch that captures the essence of the project
        </p>

        {/* Tools & Links */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex flex-wrap gap-2">
            {["Unity", "C#", "Blender", "Shader Graph"].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-sm bg-purple-500/20 border border-purple-400/30 text-purple-200 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-purple-500/30 text-slate-200 rounded-lg hover:border-purple-400/50 transition-all duration-300"
            >
              <Github size={18} />
              Code
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all duration-300"
            >
              <ExternalLink size={18} />
              Play Demo
            </a>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden border border-purple-500/20">
        <img
          src="https://images.unsplash.com/photo-1621361356099-704eb70d9f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjBzY3JlZW5zaG90c3xlbnwxfHx8fDE3Nzc2NTc5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Project screenshot"
          className="w-full"
        />
      </div>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-3xl text-white mb-4">Overview</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Provide context about what this project is, when it was created, and what role you played. Explain the core concept and what makes it unique or interesting.
          </p>
          <p className="text-slate-300 leading-relaxed">
            This is where you set up the problem space or creative vision that drove the project forward.
          </p>
        </section>

        {/* Design Goal */}
        <section>
          <h2 className="text-3xl text-white mb-4">Design Goal</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            What were you trying to achieve? What player experience or feeling were you designing for?
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Primary goal or player emotion you wanted to evoke</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Key gameplay pillar or design principle</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Technical or artistic challenge you set for yourself</span>
            </li>
          </ul>
        </section>

        {/* Gameplay / System Design */}
        <section>
          <h2 className="text-3xl text-white mb-4">Gameplay & System Design</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Dive into the mechanics, systems, or interactions that define the experience. Explain how players engage with your project and what makes it work.
          </p>

          {/* Feature Highlight */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl text-purple-200 mb-3">Core Mechanic</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Describe the main gameplay mechanic or interaction loop in detail
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl text-purple-200 mb-3">Technical Implementation</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Brief overview of how you built this feature technically
              </p>
            </div>
          </div>
        </section>

        {/* Process & Iteration */}
        <section>
          <h2 className="text-3xl text-white mb-4">Process & Iteration</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Walk through your development process. What did you prototype first? How did the project evolve? Include sketches, early builds, or design iterations if available.
          </p>

          {/* Process Images Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-800/60 rounded-lg overflow-hidden border border-purple-500/20 aspect-video flex items-center justify-center">
                <span className="text-slate-500">Process Image {i}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-3xl text-white mb-4">Challenges</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            What obstacles did you encounter during development? How did you approach solving them?
          </p>
          <div className="bg-slate-900/50 rounded-xl p-6 border-l-4 border-purple-500">
            <h3 className="text-lg text-purple-200 mb-2">Example Challenge</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
              Describe a specific technical or design challenge you faced
            </p>
            <p className="text-slate-400 text-sm">
              <span className="text-purple-300">Solution:</span> Explain how you resolved it and what you learned
            </p>
          </div>
        </section>

        {/* Reflection */}
        <section>
          <h2 className="text-3xl text-white mb-4">Reflection</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Looking back on the project, what did you learn? What would you do differently next time? What are you most proud of?
          </p>
          <p className="text-slate-300 leading-relaxed">
            This section shows growth mindset and your ability to critically evaluate your own work.
          </p>
        </section>
      </div>

      {/* Navigation to other projects */}
      <div className="mt-16 pt-8 border-t border-purple-500/20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          View More Projects
        </Link>
      </div>
    </div>
  );
}
