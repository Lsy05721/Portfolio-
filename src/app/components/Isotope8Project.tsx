import {
  ArrowLeft,
  Briefcase,
  Tag,
  Clock,
  BookOpen,
  Film,
  ExternalLink,
  ScrollText,
  Route,
  Boxes,
  Paintbrush,
  Users,
} from "lucide-react";
import { Link } from "react-router";

export default function Isotope8Project() {
  const firstPlayableLink = "https://youtu.be/mfb3mCpkUvs";
  const awardsTrailerLink = "https://www.youtube.com/watch?v=H2LfgzCfqlk";

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
              The Truth Game: Isotope-8
            </h1>

            <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
              A survival horror game set in an infected school, where players explore,
              solve puzzles, and uncover the truth behind a missing friend.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Game Design", "Level Design", "Narrative", "Horror"].map((tag) => (
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
                <Film size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Project Type</p>
                  <p className="text-sm">Game Development / Narrative Design</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">My Role</p>
                  <p className="text-sm">Artist / Designer</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Duration</p>
                  <p className="text-sm">Full Semester</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Tag size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Tools</p>
                  <p className="text-sm">Unreal Engine, Level Design</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Course</p>
                  <p className="text-sm">
                    CGT 25500 - Game Development II: Design And Psychology
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <a
              href={firstPlayableLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-video rounded-xl overflow-hidden border border-slate-700/50 bg-gradient-to-br from-slate-950 via-purple-950 to-black flex items-center justify-center hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-center px-6">
                <Film className="text-purple-300 mx-auto mb-4 group-hover:scale-110 transition-transform" size={52} />
                <h3 className="text-2xl text-white mb-2">First Playable</h3>
                <p className="text-slate-400 text-sm">
                  Watch the first playable build demonstration.
                </p>
              </div>
            </a>

            <a
              href={awardsTrailerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-video rounded-xl overflow-hidden border border-slate-700/50 bg-gradient-to-br from-black via-purple-950 to-slate-950 flex items-center justify-center hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-center px-6">
                <ExternalLink className="text-purple-300 mx-auto mb-4 group-hover:scale-110 transition-transform" size={52} />
                <h3 className="text-2xl text-white mb-2">Awards Trailer</h3>
                <p className="text-slate-400 text-sm">
                  View the final trailer and presentation cut.
                </p>
              </div>
            </a>
          </div>
        </section>

        <div className="border-t border-slate-700/50 mb-20"></div>

        <section className="mb-20">
          <h2 className="text-3xl text-white mb-6 pb-3 border-b-2 border-slate-700/50">
            Overview
          </h2>

          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              The Truth Game: Isotope-8 is an escape-room-based survival horror game set
              inside a twisted and infected school. The player explores classrooms,
              hallways, and key school locations while solving puzzles, collecting story
              clues, and trying to find their missing friend.
            </p>
            <p>
              The project combines environmental storytelling, puzzle progression, and horror
              atmosphere. My work focused on shaping the story flow, connecting levels, and
              helping build the school environment so the player journey feels cohesive.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-slate-900/50 border-l-4 border-purple-500 p-8 rounded-r-lg">
            <h2 className="text-sm uppercase tracking-wider text-purple-300 mb-3">
              Design Problem
            </h2>
            <p className="text-xl text-slate-200 leading-relaxed">
              The main challenge was connecting a large school environment, multiple puzzle
              rooms, and a mystery-driven horror story into one cohesive player journey.
              Each area needed to feel meaningful rather than disconnected.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl text-white mb-6 pb-3 border-b-2 border-slate-700/50">
            My Contribution
          </h2>

          <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-8">
            <p className="text-slate-300 leading-relaxed">
              As an artist and designer, I mainly contributed to the overall story direction,
              the connection between levels, and the spatial structure of the school. I helped
              plan how the player moves from one area to the next, how each room reveals part
              of the story, and how the environment supports the emotional pacing of the game.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl text-white mb-8 pb-3 border-b-2 border-slate-700/50">
            Key Design Areas
          </h2>

          <div className="space-y-6">
            {[
              {
                icon: <ScrollText size={22} />,
                title: "Narrative Progression",
                description:
                  "The story follows the player discovering Peter’s disappearance, the infection, and the hidden truth of the school through notes, diaries, and environmental clues.",
              },
              {
                icon: <Route size={22} />,
                title: "Level-to-Level Flow",
                description:
                  "The player journey connects classrooms, student center, library, nurse office, office, auditorium, gym, and forest into a larger progression path.",
              },
              {
                icon: <Boxes size={22} />,
                title: "Environment & Building Layout",
                description:
                  "The school layout supports exploration, puzzle placement, and horror pacing across different areas of the map.",
              },
              {
                icon: <Paintbrush size={22} />,
                title: "Atmosphere & Horror Tone",
                description:
                  "Dark lighting, empty spaces, infection imagery, and spider-related visual tension support the survival horror theme.",
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
                      Focus {index + 1}
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
            Game Flow
          </h2>

          <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-10">
            <div className="space-y-6">
              {[
                "Player wakes up and explores the empty school",
                "The story begins through notes and environmental clues",
                "Player moves through classrooms and key school locations",
                "Each area reveals part of Peter’s condition and the infection",
                "Puzzles unlock access to new spaces",
                "The journey leads toward the gym, forest, and final truth",
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
          <h2 className="text-3xl text-white mb-8 pb-3 border-b-2 border-slate-700/50">
            Team
          </h2>

          <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-purple-400" size={24} />
              <p className="text-slate-300">
                Group project team members
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Shreyas Vijayagopal",
                "Seth Leung",
                "Henry Ham",
                "Aiden Crider",
                "Vincent Weaver",
                "Siyuan (Grace) Liu",
                "Mackenzie Jacsk",
              ].map((member) => (
                <span
                  key={member}
                  className="px-4 py-2 bg-purple-500/10 border border-purple-400/20 text-purple-200 rounded-lg text-sm"
                >
                  {member}
                </span>
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
              The final project became a horror escape-room game prototype with a school-wide
              exploration structure, puzzle-based progression, spider/infection theming, and
              an environmental story centered on discovering what happened to Peter.
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
                The strongest part of this project is the connection between horror atmosphere,
                environmental storytelling, and level progression. The school setting supports
                both exploration and fear, while the story gives each area a reason to exist.
              </p>
            </div>

            <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/30">
              <h3 className="text-2xl text-white mb-4">Areas for Improvement</h3>
              <p className="text-slate-300 leading-relaxed">
                Future iterations could further polish level transitions, improve visual
                consistency, refine puzzle pacing, and add more cinematic moments to strengthen
                the emotional buildup.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-10 text-center">
            <h2 className="text-3xl text-white mb-4">View Project</h2>
            <p className="text-slate-300 mb-6">
              Watch the playable milestone and trailer for the horror game prototype.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={firstPlayableLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors duration-300"
              >
                First Playable
                <ExternalLink size={18} />
              </a>

              <a
                href={awardsTrailerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-purple-500/30 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
              >
                Awards Trailer
                <ExternalLink size={18} />
              </a>
            </div>
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