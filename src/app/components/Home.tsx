import { Link } from "react-router";
import { GraduationCap, Mail, Github, Linkedin, FileText, Gamepad2, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "../../imports/83318833107bb4d85aabf6409fafe0ed.jpg";

export default function Home() {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-32 relative">
        {/* Subtle ambient background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 mb-6">
              <Gamepad2 size={16} className="text-purple-300" />
              <span className="text-sm text-purple-200">Game Developer & Creative Technologist</span>
            </div>

            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Siyuan (Grace) Liu
            </h1>

            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Creating playable experiences through code, art, and interaction.
            </p>

            <p className="text-slate-300 mb-8 leading-relaxed">
              Student exploring game development, animation, and visual effects through coursework and hands-on projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#connect"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail size={18} />
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1JSqqZru-rYisDQWvDNRmxflf9DNC0wmi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-purple-400/40 hover:border-purple-300 text-purple-200 hover:text-white rounded-lg transition-all duration-300 hover:bg-purple-500/10"
              >
                <FileText size={18} />
                Resume
              </a>
            </div>
          </div>

          {/* Right: Featured Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-900/20">
              <img
                src={heroImage}
                alt="Portfolio image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Featured Work Section */}
      <section className="mb-32">
        <div className="mb-12">
          <h2 className="text-4xl text-white mb-3">Featured Work</h2>
          <p className="text-slate-400 mb-4">
            Explore my projects and learning exercises
          </p>
          <a
            href="https://050721lportfolio.com/__trashed-6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-purple-300 transition-colors duration-300"
          >
            <span>View previous coursework from my earlier school</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Projects Card */}
          <Link
            to="/projects"
            className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 hover:scale-[1.02] p-8 block"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl text-white group-hover:text-purple-200 transition-colors">
                  Projects
                </h3>
                <ArrowRight size={28} className="text-purple-400 group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Completed works and polished game development projects showcasing finished, structured work.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-purple-500/10 border border-purple-400/20 text-purple-300 rounded-full">
                  UE5
                </span>
                <span className="px-3 py-1 text-sm bg-purple-500/10 border border-purple-400/20 text-purple-300 rounded-full">
                  Figma
                </span>
                <span className="px-3 py-1 text-sm bg-purple-500/10 border border-purple-400/20 text-purple-300 rounded-full">
                  PyCharm
                </span>
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-colors duration-500"></div>
          </Link>

          {/* Exercises Card */}
          <Link
            to="/exercises"
            className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 hover:scale-[1.02] p-8 block"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl text-white group-hover:text-purple-200 transition-colors">
                  Exercises
                </h3>
                <ArrowRight size={28} className="text-purple-400 group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Learning exercises, coursework assignments, and experimental explorations focused on skill development.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-purple-500/10 border border-purple-400/20 text-purple-300 rounded-full">
                  Practice
                </span>
                <span className="px-3 py-1 text-sm bg-purple-500/10 border border-purple-400/20 text-purple-300 rounded-full">
                  Coursework
                </span>
                <span className="px-3 py-1 text-sm bg-purple-500/10 border border-purple-400/20 text-purple-300 rounded-full">
                  Experiments
                </span>
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-colors duration-500"></div>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-32 relative">
        <div className="bg-slate-900/50 rounded-2xl p-8 md:p-12 border border-purple-500/20">
          <div className="max-w-3xl">
            <h2 className="text-3xl text-white mb-6">About</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Hi, I'm Siyuan (Grace) Liu. I'm currently studying game development, animation, and visual effects, working on coursework-based projects and learning through hands-on practice.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Right now, I'm developing my skills through school projects, focusing on design fundamentals, interactive systems, and visual storytelling. Most of what I'm building comes from exploring ideas in class and testing them out through practice rather than professional work.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              I enjoy playing cooperative games like <span className="text-purple-200">It Takes Two</span> and <span className="text-purple-200">Split Fiction</span>, as well as racing games like the <span className="text-purple-200">F1</span> series. I'm interested in how these games handle cooperation, timing, feedback, precision, and pacing—and how those design choices influence the way I think about interactive experiences and system design.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section - Visual Skill Map */}
      <section className="mb-32">
        <div className="mb-12">
          <h2 className="text-3xl text-white mb-3">Capability System</h2>
          <p className="text-slate-400">Multidisciplinary toolkit spanning design, development, and collaboration</p>
        </div>

        {/* Primary Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Design & Creative Tools - Larger, more visual */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-slate-900/50 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500">
            <div className="relative z-10">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs uppercase tracking-wider rounded-full mb-3">
                  Visual Production
                </div>
                <h3 className="text-2xl text-white mb-2">Design & Creative Tools</h3>
                <p className="text-slate-400 text-sm">Motion graphics, visual media, and 3D animation</p>
              </div>

              <div className="space-y-5">
                {/* Adobe Suite - Primary Focus */}
                <div className="bg-slate-900/60 rounded-xl p-4 border border-purple-500/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
                    <h4 className="text-purple-200 uppercase tracking-wide text-xs">Adobe Creative Suite</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "Photoshop", abbr: "PS" },
                      { name: "Illustrator", abbr: "AI" },
                      { name: "After Effects", abbr: "AE" },
                      { name: "Premiere Pro", abbr: "Pr" },
                      { name: "Audition", abbr: "Au" }
                    ].map((tool) => (
                      <div
                        key={tool.abbr}
                        className="px-3 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-400/20 hover:border-purple-400/40 text-purple-200 rounded-lg transition-all duration-300 cursor-default"
                      >
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs opacity-60">{tool.abbr}</span>
                          <span className="text-sm">{tool.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Blender - Secondary Focus */}
                <div className="bg-slate-900/60 rounded-xl p-4 border border-purple-500/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
                    <h4 className="text-purple-200 uppercase tracking-wide text-xs">3D & Animation</h4>
                  </div>
                  <div className="px-3 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-400/20 hover:border-purple-400/40 text-purple-200 rounded-lg transition-all duration-300 cursor-default inline-block">
                    <span className="text-sm">Blender</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          </div>

          {/* Programming & Development - More technical/structured */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-900/80 rounded-2xl p-8 border border-slate-700/40 hover:border-purple-500/40 transition-all duration-500">
            <div className="relative z-10">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-slate-700/40 text-slate-300 text-xs uppercase tracking-wider rounded-full mb-3">
                  Technical Skills
                </div>
                <h3 className="text-2xl text-white mb-2">Programming & Development</h3>
                <p className="text-slate-400 text-sm">Logic systems and interaction design</p>
              </div>

              <div className="space-y-4">
                {/* Game Prototyping */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                    <h4 className="text-slate-300 text-xs uppercase tracking-wide">Game Prototyping</h4>
                  </div>
                  <div className="ml-4 pl-3 border-l border-slate-700/60">
                    <div className="flex flex-wrap gap-2">
                      {["Scratch", "Unreal Engine 5"].map((tool) => (
                        <div
                          key={tool}
                          className="px-3 py-1.5 bg-slate-800/60 hover:bg-slate-800 text-slate-300 rounded text-sm transition-colors duration-300 cursor-default"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Programming Languages */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                    <h4 className="text-slate-300 text-xs uppercase tracking-wide">Programming</h4>
                  </div>
                  <div className="ml-4 pl-3 border-l border-slate-700/60">
                    <div className="px-3 py-1.5 bg-slate-800/60 hover:bg-slate-800 text-slate-300 rounded text-sm inline-block transition-colors duration-300 cursor-default">
                      Python
                    </div>
                  </div>
                </div>

                {/* Web Development */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                    <h4 className="text-slate-300 text-xs uppercase tracking-wide">Web Development</h4>
                  </div>
                  <div className="ml-4 pl-3 border-l border-slate-700/60">
                    <div className="flex flex-wrap gap-2">
                      {["HTML", "CSS", "JavaScript"].map((tool) => (
                        <div
                          key={tool}
                          className="px-3 py-1.5 bg-slate-800/60 hover:bg-slate-800 text-slate-300 rounded text-sm transition-colors duration-300 cursor-default"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* UI/UX */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                    <h4 className="text-slate-300 text-xs uppercase tracking-wide">UI/UX Fundamentals</h4>
                  </div>
                  <div className="ml-4 pl-3 border-l border-slate-700/60">
                    <div className="flex flex-wrap gap-2">
                      {["Interface Design", "User Experience Flow"].map((tool) => (
                        <div
                          key={tool}
                          className="px-3 py-1.5 bg-slate-800/60 hover:bg-slate-800 text-slate-300 rounded text-sm transition-colors duration-300 cursor-default"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-slate-600/10 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-purple-600/15 transition-all duration-700"></div>
          </div>
        </div>

        {/* Cross-disciplinary Skills - Full width, conceptual */}
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-900/40 via-purple-900/10 to-slate-900/40 rounded-2xl p-8 border border-purple-500/20">
          <div className="relative z-10">
            <div className="mb-6 text-center">
              <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-300 text-xs uppercase tracking-wider rounded-full mb-3">
                Collaborative Practice
              </div>
              <h3 className="text-2xl text-white mb-2">Cross-disciplinary Skills</h3>
              <p className="text-slate-400 text-sm">Bridging design thinking and technical execution</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Design ↔ Development",
                  description: "Cross-disciplinary collaboration between design and development"
                },
                {
                  title: "Visual Communication",
                  description: "Visual communication and narrative thinking"
                },
                {
                  title: "Interactive Teamwork",
                  description: "Project-based teamwork in immersive and interactive environments"
                }
              ].map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-900/40 rounded-xl p-5 border border-purple-500/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-purple-400 group-hover:scale-110 transition-transform duration-300"></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-purple-200 mb-2 group-hover:text-purple-100 transition-colors">
                        {skill.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl"></div>
        </div>
      </section>


      {/* Education Section */}
      <section className="mb-32">
        <div className="mb-8">
          <h2 className="text-3xl text-white mb-3">Education</h2>
        </div>

        <div className="space-y-6 max-w-3xl">
          <div className="border-l-2 border-purple-500/40 pl-6">
            <h3 className="text-xl text-white mb-1">
              University Name
            </h3>
            <p className="text-purple-200 mb-2">
              Bachelor's in Game Development, Animation & Visual Effects
            </p>
            <p className="text-slate-400 text-sm mb-3">Expected Graduation: 2028</p>
            <p className="text-slate-300 text-sm">
              Game Engine Programming • 3D Modeling • Character Animation • Interactive Design • Game Physics • VFX
            </p>
          </div>

          <div className="border-l-2 border-purple-500/40 pl-6">
            <h3 className="text-xl text-white mb-1">
              Pratt Institute
            </h3>
            <p className="text-purple-200 mb-2">
              Graphic Design Program
            </p>
            <p className="text-slate-300 text-sm">
              Foundation in visual design principles, typography, and creative problem-solving
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="connect" className="text-center bg-slate-900/50 rounded-2xl p-12 md:p-16 border border-purple-500/20">
        <div>
          <h2 className="text-4xl text-white mb-4">
            Let's Connect
          </h2>

          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            I'm interested in internships, learning opportunities, and collaborative projects in game development and interactive media.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Lsy05721"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-purple-500/30 text-slate-200 rounded-lg hover:border-purple-400/50 hover:bg-slate-700 transition-all duration-300"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/siyuanliu0721"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-purple-500/30 text-slate-200 rounded-lg hover:border-purple-400/50 hover:bg-slate-700 transition-all duration-300"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:liusiyuan0506@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all duration-300"
            >
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
