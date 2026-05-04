import { Link } from "react-router";
import { ArrowLeft, Gamepad2, Code, Zap, Target, RotateCcw, Layers } from "lucide-react";
import BreakoutPlusCover from "./BreakoutPlusCover";

export default function BreakoutPlusProject() {
  const powerUps = [
    { name: "Expand Paddle", description: "Increases paddle width for easier ball control" },
    { name: "Shrink Paddle", description: "Decreases paddle width for increased challenge" },
    { name: "Multi-ball", description: "Spawns additional balls into play" },
    { name: "Slow Ball", description: "Reduces ball speed temporarily" },
    { name: "Fast Ball", description: "Increases ball speed for high-risk play" },
    { name: "Extra Life", description: "Grants an additional attempt" },
    { name: "Sticky Paddle", description: "Ball sticks to paddle allowing aimed release" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-8 transition-colors duration-300"
      >
        <ArrowLeft size={20} />
        Back to Projects
      </Link>

      {/* Hero Section */}
      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 mb-4">
              <Gamepad2 size={14} className="text-purple-300" />
              <span className="text-xs text-purple-200 uppercase tracking-wide">Game Development / Interaction Design</span>
            </div>

            <h1 className="text-4xl md:text-5xl text-white mb-4">
              Breakout Plus
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              A modern remake of the classic arcade game Breakout, enhanced with dynamic mechanics and a power-up system to increase variability and replayability.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Game Design", "Pygame", "Interaction", "Systems"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-purple-500/10 border border-purple-400/20 text-purple-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-slate-500 mb-1">Tools</div>
                <div className="text-slate-300">Python / Pygame</div>
              </div>
              <div>
                <div className="text-slate-500 mb-1">Duration</div>
                <div className="text-slate-300">4 weeks</div>
              </div>
            </div>
          </div>

          {/* Cover Visual */}
          <div className="rounded-xl overflow-hidden border border-purple-500/20 shadow-2xl h-80">
            <BreakoutPlusCover />
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="text-2xl text-white mb-4">Overview</h2>
        <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
          <p className="text-slate-300 leading-relaxed">
            This project reimagines the classic Breakout game by introducing a system-driven gameplay experience. Instead of a static arcade loop, the design focuses on <span className="text-purple-200">variability</span>, <span className="text-purple-200">player interaction</span>, and <span className="text-purple-200">dynamic difficulty</span> through randomized brick layouts and power-up mechanics.
          </p>
        </div>
      </section>

      {/* Core Idea */}
      <section className="mb-16">
        <h2 className="text-2xl text-white mb-4">Core Idea</h2>
        <div className="bg-gradient-to-br from-purple-900/20 to-slate-900/50 rounded-xl p-6 border border-purple-500/30">
          <p className="text-slate-300 leading-relaxed mb-4">
            Transform a simple arcade mechanic into a more engaging system by adding:
          </p>
          <ul className="space-y-2">
            {[
              "Player control over outcomes",
              "Dynamic feedback",
              "Replayability through randomness"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gameplay Mechanics */}
      <section className="mb-16">
        <h2 className="text-2xl text-white mb-6">Gameplay Mechanics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-4">
              <Target size={20} className="text-purple-300" />
            </div>
            <h3 className="text-lg text-white mb-3">Paddle Control</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Players control a paddle to keep the ball in play and strategically aim shots.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-4">
              <RotateCcw size={20} className="text-purple-300" />
            </div>
            <h3 className="text-lg text-white mb-3">Ball Physics</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The ball reflects dynamically based on collision angles, increasing player skill expression.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-4">
              <Layers size={20} className="text-purple-300" />
            </div>
            <h3 className="text-lg text-white mb-3">Brick System</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Bricks are randomly generated and destroyed on impact, creating variation in each play session.
            </p>
          </div>
        </div>
      </section>

      {/* Power-Up System - Key Feature */}
      <section className="mb-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/30 to-slate-900/50 rounded-xl p-8 border border-purple-500/40">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Zap size={24} className="text-purple-300" />
              <h2 className="text-2xl text-white">Power-Up System</h2>
              <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-200 rounded-full uppercase tracking-wide">Key Feature</span>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Power-ups introduce variability and strategic decision-making into the gameplay. They drop from destroyed bricks and must be caught by the player to activate.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {powerUps.map((powerUp) => (
                <div
                  key={powerUp.name}
                  className="bg-slate-900/60 rounded-lg p-4 border border-purple-500/20"
                >
                  <h4 className="text-purple-200 mb-2">{powerUp.name}</h4>
                  <p className="text-slate-400 text-sm">{powerUp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Game Loop */}
      <section className="mb-16">
        <h2 className="text-2xl text-white mb-6">Game Loop</h2>
        <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            {[
              "Start Menu",
              "Gameplay",
              "Power-ups & Scoring",
              "Life Loss",
              "Game Over",
              "Restart"
            ].map((step, index, array) => (
              <div key={step} className="flex items-center gap-3">
                <div className="px-4 py-2 bg-purple-500/10 border border-purple-400/30 text-purple-200 rounded-lg">
                  {step}
                </div>
                {index < array.length - 1 && (
                  <ArrowLeft size={16} className="text-purple-400 rotate-180" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Design */}
      <section className="mb-16">
        <h2 className="text-2xl text-white mb-4">System Design</h2>
        <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
          <p className="text-slate-300 leading-relaxed mb-4">
            The game is designed as an <span className="text-purple-200">interactive system</span> where:
          </p>
          <div className="space-y-3 mb-4">
            {[
              { label: "Player input", effect: "affects trajectory" },
              { label: "Randomness", effect: "affects level structure" },
              { label: "Power-ups", effect: "modify gameplay rules" }
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 text-purple-200 rounded text-sm">
                  {item.label}
                </div>
                <ArrowLeft size={14} className="text-purple-400 rotate-180" />
                <div className="text-slate-400 text-sm">{item.effect}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-300 leading-relaxed">
            This creates a <span className="text-purple-200">dynamic feedback loop</span> rather than a fixed experience.
          </p>
        </div>
      </section>

      {/* Visual Design */}
      <section className="mb-16">
        <h2 className="text-2xl text-white mb-4">Visual Design</h2>
        <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
          <p className="text-slate-300 leading-relaxed mb-4">
            Minimal arcade-style visuals with focus on clarity and gameplay readability:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Clean geometric shapes",
              "High-contrast colors",
              "Neon-inspired palette"
            ].map((item) => (
              <div
                key={item}
                className="px-4 py-2 bg-purple-500/10 border border-purple-400/20 text-purple-200 rounded-lg text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Outcome */}
      <section className="mb-16">
        <h2 className="text-2xl text-white mb-4">Final Outcome</h2>
        <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
          <p className="text-slate-300 leading-relaxed mb-4">
            A fully playable game that:
          </p>
          <ul className="space-y-2">
            {[
              "Maintains the simplicity of the original Breakout",
              "Introduces system-based interaction",
              "Increases replayability through variation and power-ups"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* My Contribution */}
      <section className="mb-16">
        <h2 className="text-2xl text-white mb-4">My Contribution</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Game Logic Implementation",
            "System Design (Power-ups, Mechanics)",
            "Interaction Design"
          ].map((contribution) => (
            <div
              key={contribution}
              className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/20 text-center"
            >
              <div className="text-purple-200">{contribution}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reflection */}
      <section className="mb-16">
        <h2 className="text-2xl text-white mb-6">Reflection</h2>
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-lg text-purple-200 mb-3">What Works</h3>
            <p className="text-slate-300 leading-relaxed">
              The power-up system successfully enhances gameplay depth and replayability.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-lg text-purple-200 mb-3">Challenges</h3>
            <p className="text-slate-300 leading-relaxed">
              Balancing difficulty and maintaining control over multiple balls and effects.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-lg text-purple-200 mb-3">Improvements</h3>
            <p className="text-slate-300 leading-relaxed">
              Future iterations could include sound design, visual polish, and level progression.
            </p>
          </div>
        </div>
      </section>

      {/* View Project CTA */}
      <section className="text-center bg-slate-900/50 rounded-2xl p-8 border border-purple-500/20">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code size={24} className="text-purple-300" />
          <h2 className="text-2xl text-white">View Project</h2>
        </div>
        <p className="text-slate-400 mb-6">
          Source code and game files available on request
        </p>
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 border border-purple-400/30 text-purple-200 rounded-lg">
          Run the Game (Local / Code)
        </div>
      </section>
    </div>
  );
}
