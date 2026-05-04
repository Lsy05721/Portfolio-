import { useState } from "react";
import {
  ArrowLeft,
  Briefcase,
  Tag,
  Clock,
  Zap,
  RotateCcw,
  Layers,
  Gamepad2,
  ExternalLink,
  Pause,
  Play,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router";
import breakoutGif from "../../imports/breakout-puls.gif";

export default function BreakoutPlusProjectNew() {
  const githubLink =
    "https://github.com/Lsy05721/breakout-plus/blob/main/final_project.py";

  const [isGifPlaying, setIsGifPlaying] = useState(true);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-12 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <section className="mb-20">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
              Breakout Plus
            </h1>

            <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
              A system-driven remake of the classic arcade game, introducing dynamic power-ups and replayable mechanics.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Game Design", "Systems", "Pygame", "Interaction"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-purple-500/20 text-purple-200 text-sm rounded-lg border border-purple-400/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-slate-400">
              <div className="flex items-start gap-3">
                <Gamepad2 size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Project Type</p>
                  <p className="text-sm">Game Development / Interaction Design</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">My Role</p>
                  <p className="text-sm">Game Designer & Developer</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Duration</p>
                  <p className="text-sm">4 weeks</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Tag size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Tools</p>
                  <p className="text-sm">Python, Pygame</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Course</p>
                  <p className="text-sm">
                    CGT 11505 - Scripting And Computational Thinking
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            onMouseEnter={() => setIsGifPlaying(false)}
            onMouseLeave={() => setIsGifPlaying(true)}
            className="relative block mt-10 rounded-xl overflow-hidden border border-slate-700/50 shadow-lg group"
          >
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              {isGifPlaying ? (
                <img
                  src={breakoutGif}
                  alt="Breakout Plus gameplay preview"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
                />
              ) : (
                <div className="w-full aspect-video bg-slate-950 flex flex-col items-center justify-center text-center px-6">
                  <Pause className="text-purple-300 mb-4" size={40} />
                  <p className="text-white text-xl mb-2">Gameplay Preview Paused</p>
                  <p className="text-slate-400 text-sm">
                    Move your cursor away to play again. Click to view the code.
                  </p>
                </div>
              )}

              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-black/60 backdrop-blur-sm text-white text-sm rounded-lg border border-white/10">
                {isGifPlaying ? <Play size={16} /> : <Pause size={16} />}
                {isGifPlaying ? "Playing" : "Paused"}
              </div>
            </a>
          </div>

          <p className="text-sm text-slate-400 mt-3">
            Gameplay preview showing paddle control, brick collision, and power-up interaction.
          </p>
        </section>

        <div className="border-t border-slate-700/50 mb-20"></div>

        <section className="mb-20">
          <h2 className="text-3xl text-white mb-6 pb-3 border-b-2 border-slate-700/50">
            Overview
          </h2>

          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Breakout Plus is a reimagined version of the classic arcade game Breakout.
              Instead of a fixed and repetitive experience, this project introduces a
              system-driven gameplay loop where power-ups, physics variation, and player
              interaction create a more dynamic and replayable experience.
            </p>
            <p>
              This project is implemented in Python using Pygame and runs as a local
              application. The gameplay preview demonstrates the core mechanics, including
              paddle control, collision logic, and dynamic power-up effects.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-slate-900/50 border-l-4 border-purple-500 p-8 rounded-r-lg">
            <h2 className="text-sm uppercase tracking-wider text-purple-300 mb-3">
              Problem Statement
            </h2>
            <p className="text-xl text-slate-200 leading-relaxed">
              The original Breakout gameplay loop is simple but highly repetitive. After a few
              rounds, the experience can become predictable, with limited variation or
              player-driven change. The challenge was to make a simple arcade system more
              engaging without overcomplicating the core gameplay.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl text-white mb-6 pb-3 border-b-2 border-slate-700/50">
            Solution
          </h2>

          <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-8">
            <p className="text-slate-300 leading-relaxed">
              I designed a complete playable system using Pygame, adding dynamic power-ups,
              improved paddle control, randomized brick layouts, scoring, lives, and a full
              game loop. These additions transform a basic arcade mechanic into a more
              flexible and engaging gameplay experience.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl text-white mb-8 pb-3 border-b-2 border-slate-700/50">
            Key Features
          </h2>

          <div className="space-y-6">
            {[
              {
                icon: <Zap size={22} />,
                title: "Dynamic Power-Up System",
                description:
                  "Power-ups randomly drop from destroyed bricks and temporarily change the rules of play, including paddle size, ball speed, multi-ball effects, extra lives, and sticky paddle behavior.",
              },
              {
                icon: <RotateCcw size={22} />,
                title: "Responsive Ball Physics",
                description:
                  "The ball reflects based on where it hits the paddle, giving players more control over direction and encouraging skill-based aiming.",
              },
              {
                icon: <Layers size={22} />,
                title: "Replayable Game System",
                description:
                  "Randomized brick layouts and unpredictable power-up drops make each play session feel different, increasing replay value while keeping the rules easy to understand.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="text-sm text-purple-300 mb-1">
                      Feature {index + 1}
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl text-white mb-8 pb-3 border-b-2 border-slate-700/50">
            Gameplay System Loop
          </h2>

          <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-10">
            <div className="space-y-6">
              {[
                "Player controls the paddle",
                "Ball hits bricks",
                "Brick breaks and may drop a power-up",
                "Player catches or misses the power-up",
                "Game rules temporarily change",
                "Gameplay continues until win or game over",
              ].map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-purple-600 text-white rounded-lg flex items-center justify-center font-medium flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-slate-300 leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl text-white mb-6 pb-3 border-b-2 border-slate-700/50">
            Final Outcome
          </h2>

          <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-8">
            <p className="text-lg text-slate-200 leading-relaxed">
              The final result is a fully playable Breakout-style arcade game with a start
              menu, gameplay screen, score and lives system, game over screen, restart option,
              randomized bricks, and multiple power-ups.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl text-white mb-8 pb-3 border-b-2 border-slate-700/50">
            Reflection
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/30">
              <h3 className="text-2xl text-white mb-4">What Works</h3>
              <p className="text-slate-300 leading-relaxed">
                The power-up system successfully adds variety and makes the gameplay feel less
                predictable. Multi-ball, sticky paddle, and paddle-size changes create
                different moments of tension and strategy.
              </p>
            </div>

            <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/30">
              <h3 className="text-2xl text-white mb-4">Areas for Improvement</h3>
              <p className="text-slate-300 leading-relaxed">
                Future iterations could include sound effects, stronger visual polish, level
                progression, animated effects, and more advanced brick types.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-10 text-center">
            <h2 className="text-3xl text-white mb-4">View Project</h2>
            <p className="text-slate-300 mb-6">
              The game is built with Python and Pygame. View the full source code on GitHub.
            </p>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors duration-300"
            >
              View Code
              <ExternalLink size={18} />
            </a>
          </div>
        </section>

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
    </div>
  );
}