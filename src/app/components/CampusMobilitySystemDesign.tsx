import { ArrowLeft, Navigation, AlertTriangle, Map, Clock, User, Wrench, Tag, Smile, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import smartNavigationImg from "../../imports/Smart_Navigation.png";
import riskAwarenessMapImg from "../../imports/Risk_Awareness_Map.png";
import userReportingSystemImg from "../../imports/User_Reporting_System.png";
import finalOutcomeImg from "../../imports/Final_outcome_.png";

export default function CampusMobilitySystemDesign() {
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
          Campus Mobility System – Digital Intervention
        </h1>

        <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
          A digital system designed to improve campus mobility by reducing conflicts between pedestrians, cyclists, and shared spaces.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {["UX Design", "System Thinking", "Navigation", "Safety"].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-purple-500/20 text-purple-200 text-sm rounded-lg border border-purple-400/30">
              {tag}
            </span>
          ))}
        </div>

        {/* Metadata */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-400">
          <div className="flex items-start gap-3">
            <User size={20} className="text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-white mb-1">Role</p>
              <p className="text-sm">UX Designer, Systems Designer</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Wrench size={20} className="text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-white mb-1">Tools</p>
              <p className="text-sm">Figma, UX Research, System Design</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={20} className="text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-white mb-1">Duration</p>
              <p className="text-sm">9 weeks</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Tag size={20} className="text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-white mb-1">Course</p>
              <p className="text-sm">CGT 17208 - User Experience Design Studio I: Fundamentals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-slate-700/50 mb-16"></div>

      {/* CONTEXT */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Context</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          This project is a design response based on a previous research study on campus mobility. The research identified key issues such as mixed-use space conflicts, unclear navigation, and safety concerns.
        </p>
        <p className="text-slate-300 leading-relaxed">
          This design explores how a digital system can improve navigation clarity, safety awareness, and user participation.
        </p>
      </section>

      {/* DESIGN GOALS */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-8">Design Goals</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <AlertTriangle size={24} className="text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">Reduce Conflicts</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Minimize interaction risks between pedestrians and cyclists in shared spaces.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Navigation size={24} className="text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">Improve Wayfinding</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Help users navigate campus more clearly with structured routes.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Map size={24} className="text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">Increase Spatial Awareness</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Provide real-time feedback about safety and environmental conditions.
            </p>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-8">Key Features</h2>

        <div className="space-y-12">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl text-purple-200 mb-4">Smart Navigation</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Users can select routes based on safety levels and travel preferences.
              </p>
              <div className="bg-slate-900/50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <p className="text-sm text-purple-300 mb-2">UX Thinking</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  This responds to research insights showing that users feel uncertain in shared or unclear pathways.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-slate-700/50 overflow-hidden" style={{ maxWidth: '35%', margin: '0 auto' }}>
              <img
                src={smartNavigationImg}
                alt="Smart Navigation interface screens"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl text-purple-200 mb-4">Risk Awareness Map</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                The map visualizes safety levels using color-coded routes (safe, caution, high risk).
              </p>
              <div className="bg-slate-900/50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <p className="text-sm text-purple-300 mb-2">UX Thinking</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  This feature translates complex environmental conditions into simple visual signals to reduce cognitive load.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-slate-700/50 overflow-hidden" style={{ maxWidth: '35%', margin: '0 auto' }}>
              <img
                src={riskAwarenessMapImg}
                alt="Risk Awareness Map interface screens"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl text-purple-200 mb-4">User Reporting System</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Users can report their experience using emoji-based feedback to indicate safety or comfort.
              </p>
              <div className="bg-slate-900/50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <p className="text-sm text-purple-300 mb-2">UX Thinking</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  This introduces a crowdsourced system where users actively contribute to improving navigation and awareness.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-slate-700/50 overflow-hidden" style={{ maxWidth: '50%', margin: '0 auto' }}>
              <img
                src={userReportingSystemImg}
                alt="User Reporting System interface screens"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM FLOW */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-8">System Flow</h2>
        <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
            <span className="px-4 py-2 bg-purple-600 text-white rounded-lg">User selects route</span>
            <ArrowLeft size={20} className="rotate-180 text-purple-400" />
            <span className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg">Navigates campus</span>
            <ArrowLeft size={20} className="rotate-180 text-purple-400" />
            <span className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg">Encounters condition</span>
            <ArrowLeft size={20} className="rotate-180 text-purple-400" />
            <span className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg">Reports experience</span>
            <ArrowLeft size={20} className="rotate-180 text-purple-400" />
            <span className="px-4 py-2 bg-purple-600 text-white rounded-lg">System updates risk levels</span>
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-8">Design Process</h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-medium flex-shrink-0">
              01
            </div>
            <div className="flex-1">
              <h3 className="text-xl text-white mb-2">Research insights from Project 1</h3>
              <p className="text-slate-400 text-sm">Synthesized findings from campus mobility research study</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-medium flex-shrink-0">
              02
            </div>
            <div className="flex-1">
              <h3 className="text-xl text-white mb-2">Information architecture planning</h3>
              <p className="text-slate-400 text-sm">Structured navigation flows and content hierarchy</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-medium flex-shrink-0">
              03
            </div>
            <div className="flex-1">
              <h3 className="text-xl text-white mb-2">Interface design iterations</h3>
              <p className="text-slate-400 text-sm">Created wireframes and high-fidelity mockups</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-medium flex-shrink-0">
              04
            </div>
            <div className="flex-1">
              <h3 className="text-xl text-white mb-2">Feedback-based refinement</h3>
              <p className="text-slate-400 text-sm">Simplified designs based on user testing and critique</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL OUTCOME */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-8">Final Outcome</h2>

        <p className="text-slate-400 italic mb-6">
          This is a simplified redesign of key interface screens after receiving feedback.
        </p>

        <div className="rounded-lg border border-slate-700/50 overflow-hidden mb-8">
          <img
            src={finalOutcomeImg}
            alt="Final outcome interface screens"
            className="w-full h-auto"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>

        <p className="text-slate-300 leading-relaxed">
          The final design demonstrates a system-level approach to campus mobility, focusing on clarity, safety, and user interaction rather than purely visual interface design.
        </p>
      </section>

      {/* VIEW FULL PROJECT */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/50 border border-purple-500/30 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-3xl text-white mb-4">View Full Project</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore the full prototype and interaction flow in Figma.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.figma.com/proto/fmlPtf2cPH4ava2mm0Pm1D/Untitled?node-id=0-1&t=RZNqvMJyU1OLHPi6-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <ExternalLink size={20} />
              View Prototype
            </a>

            <a
              href="https://www.figma.com/design/fmlPtf2cPH4ava2mm0Pm1D/Untitled?node-id=0-1&m=dev&t=RZNqvMJyU1OLHPi6-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-purple-500/30 hover:border-purple-400/50 text-slate-300 hover:text-white rounded-lg transition-all duration-300"
            >
              <ExternalLink size={20} />
              View Figma File
            </a>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-8">Reflection</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl text-purple-200 mb-4">What Works</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              The system effectively connects research insights with interaction design, especially in navigation and reporting features.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl text-purple-200 mb-4">What Is Unresolved</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              The visual design and UI consistency can be further improved, and the system could benefit from more detailed interaction flows.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl text-purple-200 mb-4">What Could Be Improved</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Future iterations could refine the interface design, improve visual hierarchy, and enhance system scalability.
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
