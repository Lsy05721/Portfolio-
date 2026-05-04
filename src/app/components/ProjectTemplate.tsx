import { ArrowLeft, Clock, User, Wrench } from "lucide-react";
import { Link } from "react-router";

export default function ProjectTemplate() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-12 transition-colors duration-300"
      >
        <ArrowLeft size={20} />
        Back to Projects
      </Link>

      {/* HERO SECTION */}
      <section className="mb-16">
        <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
          Project Title
        </h1>

        <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
          A one-line concept statement explaining the core idea or creative vision behind this project.
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap gap-6 text-slate-400">
          <div className="flex items-center gap-2">
            <User size={18} className="text-purple-400" />
            <span className="text-sm">
              <span className="text-purple-300">Role:</span> Game Designer, Developer
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench size={18} className="text-purple-400" />
            <span className="text-sm">
              <span className="text-purple-300">Tools:</span> Unity, C#, Blender
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-purple-400" />
            <span className="text-sm">
              <span className="text-purple-300">Duration:</span> 4 weeks
            </span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-slate-700/50 mb-16"></div>

      {/* CONTEXT / PROBLEM */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Context & Problem</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg text-purple-200 mb-3">Project Origin</h3>
            <p className="text-slate-300 leading-relaxed">
              Describe what this project was for — was it a course assignment, self-initiated exploration, or collaborative project? Provide context about the assignment brief or personal motivation.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-purple-200 mb-3">Design Problem</h3>
            <p className="text-slate-300 leading-relaxed">
              What design challenge or question did this project address? What were you trying to explore, solve, or understand through this work? Focus on intention and purpose rather than just description.
            </p>
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH */}
      <section className="mb-16 bg-slate-900/50 rounded-2xl p-8 md:p-10 border border-purple-500/20">
        <h2 className="text-3xl text-white mb-8">Design Approach</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl text-purple-200 mb-4">Initial Concept</h3>
            <p className="text-slate-300 leading-relaxed">
              Explain your initial idea or concept. What was the starting point? What inspired this direction? What were you trying to achieve or communicate?
            </p>
          </div>

          <div>
            <h3 className="text-xl text-purple-200 mb-4">Key Design Decisions</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-purple-500/40 pl-6">
                <h4 className="text-purple-300 mb-2">Decision 1: [Title]</h4>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Describe a major design decision you made (e.g., game mechanic, visual style, interaction pattern, system architecture).
                </p>
                <p className="text-slate-400 text-sm italic">
                  Reasoning: Explain why you made this choice and what problem it solved or what experience it created.
                </p>
              </div>

              <div className="border-l-2 border-purple-500/40 pl-6">
                <h4 className="text-purple-300 mb-2">Decision 2: [Title]</h4>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Describe another significant design choice.
                </p>
                <p className="text-slate-400 text-sm italic">
                  Reasoning: Explain the thinking behind this decision.
                </p>
              </div>

              <div className="border-l-2 border-purple-500/40 pl-6">
                <h4 className="text-purple-300 mb-2">Decision 3: [Title]</h4>
                <p className="text-slate-300 leading-relaxed mb-2">
                  Describe a third key decision.
                </p>
                <p className="text-slate-400 text-sm italic">
                  Reasoning: Explain why this approach was chosen.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-purple-200 mb-4">Iteration Process</h3>
            <p className="text-slate-300 leading-relaxed">
              How did the project evolve from initial concept to final form? What changed along the way? What feedback or testing influenced your decisions? Describe the refinement process.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Development Process</h2>

        <div className="space-y-8">
          {/* Sketches / Early Concepts */}
          <div>
            <h3 className="text-xl text-purple-200 mb-4">Early Exploration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="aspect-video bg-slate-800 rounded-lg border border-slate-700/50 flex items-center justify-center">
                <span className="text-slate-500 text-sm">[Sketch or early concept image]</span>
              </div>
              <div className="aspect-video bg-slate-800 rounded-lg border border-slate-700/50 flex items-center justify-center">
                <span className="text-slate-500 text-sm">[Prototype or diagram]</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Caption: Describe what these early explorations show and how they informed your design direction.
            </p>
          </div>

          {/* Development Stages */}
          <div>
            <h3 className="text-xl text-purple-200 mb-4">Development Stages</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm flex-shrink-0">
                    1
                  </div>
                  <h4 className="text-purple-300">Stage Name (e.g., Prototyping, Mechanics Development)</h4>
                </div>
                <div className="ml-11">
                  <div className="aspect-video bg-slate-800 rounded-lg border border-slate-700/50 flex items-center justify-center mb-3">
                    <span className="text-slate-500 text-sm">[Screenshot or image from this stage]</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Describe what you built or explored during this stage and what you learned.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm flex-shrink-0">
                    2
                  </div>
                  <h4 className="text-purple-300">Stage Name</h4>
                </div>
                <div className="ml-11">
                  <div className="aspect-video bg-slate-800 rounded-lg border border-slate-700/50 flex items-center justify-center mb-3">
                    <span className="text-slate-500 text-sm">[Screenshot or image from this stage]</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Describe the progress and refinements made during this phase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL OUTCOME */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Final Outcome</h2>

        <div className="space-y-6">
          {/* Final visuals */}
          <div className="rounded-xl overflow-hidden border border-purple-500/20">
            <div className="aspect-video bg-slate-800 flex items-center justify-center">
              <span className="text-slate-400">[Final project screenshot, video, or demo]</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-purple-200 mb-4">How It Works</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Explain how the final system, game, or design functions. What does the user/player experience? How do the mechanics or interactions work? Focus on clarity and system behavior.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Describe the key features or interactions in the final form and how they achieve the project's goals.
            </p>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="mb-16 bg-slate-900/50 rounded-2xl p-8 md:p-10 border border-purple-500/20">
        <h2 className="text-3xl text-white mb-6">Reflection</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg text-purple-200 mb-3">What I Learned</h3>
            <p className="text-slate-300 leading-relaxed">
              Reflect on what you learned through this project — technical skills, design thinking, problem-solving approaches, or collaborative processes. Be specific and honest.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-purple-200 mb-3">What Worked Well</h3>
            <p className="text-slate-300 leading-relaxed">
              What aspects of the project were successful? What design decisions paid off? What are you proud of?
            </p>
          </div>

          <div>
            <h3 className="text-lg text-purple-200 mb-3">What Could Be Improved</h3>
            <p className="text-slate-300 leading-relaxed">
              What would you do differently if you had more time or started over? What didn't work as expected? What would be the next steps for improvement? This should feel honest, not overly critical.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-slate-700/50">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <Link
          to="/"
          className="px-6 py-3 border border-purple-500/30 text-slate-300 rounded-lg hover:border-purple-400/50 hover:bg-slate-800 transition-all"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
