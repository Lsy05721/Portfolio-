import { ArrowLeft, Users, Briefcase, Tag, ArrowRight, AlertTriangle, Camera, Clock } from "lucide-react";
import { Link } from "react-router";

export default function CampusTransportationProject() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-12 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* HERO SECTION */}
        <section className="mb-20">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
              Campus Mobility & Bike Lane Safety Redesign
            </h1>

            <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
              A research-based redesign proposal focused on improving bike, skateboard, and pedestrian movement across campus by reducing mixed-use conflicts, unclear right-of-way, and unsafe lane transitions.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["UX Research", "Transportation Design", "System Thinking", "Campus Safety"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-purple-500/20 text-purple-200 text-sm rounded-lg border border-purple-400/30">
                  {tag}
                </span>
              ))}
            </div>

            {/* Metadata */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-400">
              <div className="flex items-start gap-3">
                <Users size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Team</p>
                  <p className="text-sm">Meredith Ward, Anjika Shukla, Ayesha Mustajab, Siyuan Liu</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">My Role</p>
                  <p className="text-sm">Researcher, interviewer, observer, and contributor to problem framing and solution development</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Duration</p>
                  <p className="text-sm">13 weeks</p>
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
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-slate-700/50 mb-20"></div>

        {/* CONTEXT */}
        <section className="mb-20">
          <h2 className="text-3xl text-white mb-6 pb-3 border-b-2 border-slate-700/50">Context</h2>

          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              This project began with a broad exploration of campus transportation problems. Our team first considered several possible issues, including inaccessible communal transportation, unintuitive bike lanes, and mobility barriers within campus buildings. After discussion and comparison, we narrowed the focus to one central problem: <span className="font-medium text-white">the campus is not bike- and skateboard-friendly enough.</span>
            </p>
            <p>
              The project focused on how infrastructure, signage, pedestrian behavior, weather, and campus planning affect the experience of bikers, skateboarders, pedestrians, and commuter students.
            </p>
          </div>
        </section>

        {/* PROBLEM STATEMENT */}
        <section className="mb-20">
          <div className="bg-slate-900/50 border-l-4 border-purple-500 p-8 rounded-r-lg">
            <h2 className="text-sm uppercase tracking-wider text-purple-300 mb-3">Problem Statement</h2>
            <p className="text-xl text-slate-200 leading-relaxed">
              Campus mobility spaces are functional but often confusing, inconsistent, and unsafe. Bike lanes, pedestrian paths, and vehicle routes frequently overlap or abruptly disconnect, creating safety risks and cognitive stress for students moving across campus.
            </p>
          </div>
        </section>

        {/* RESEARCH PROCESS */}
        <section className="mb-20">
          <h2 className="text-3xl text-white mb-8 pb-3 border-b-2 border-slate-700/50">Research Process</h2>

          <div className="space-y-6">
            {/* Stage 1 */}
            <div className="border border-slate-700/50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-medium flex-shrink-0">
                  01
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-3">Divergent Thinking</h3>
                  <p className="text-slate-300 mb-3">We explored three possible problem areas:</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">Commuting on and off campus through communal transportation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">Unintuitive bike lanes and personal transportation storage</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">Mobility barriers within campus buildings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="border border-purple-500/30 bg-slate-900/50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-medium flex-shrink-0">
                  02
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-3">Convergent Selection</h3>
                  <p className="text-slate-300">
                    We selected the final problem: <span className="font-medium text-white">campus is not bike- and skateboard-friendly.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="border border-slate-700/50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-medium flex-shrink-0">
                  03
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-3">Interview & Observation Protocols</h3>
                  <p className="text-slate-300">
                    We created interview and observation questions around people, artifacts, environments, events, behaviors, interactions, timelines, and metaphors.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="border border-slate-700/50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-medium flex-shrink-0">
                  04
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-3">Interviews & Observations</h3>
                  <p className="text-slate-300">
                    We conducted interviews and observations around high-traffic campus areas such as WALC, Lawson, Engineering Fountain, BHEE, Northwestern Avenue, and other academic paths.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 5 */}
            <div className="border border-slate-700/50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-medium flex-shrink-0">
                  05
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-3">Synthesis & Final Design Direction</h3>
                  <p className="text-slate-300">
                    We synthesized common themes and proposed a campus traffic improvement strategy focused on bike lane redesign and clearer separation between pedestrians and riders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISUAL RESEARCH INSERTS */}
        <section className="mb-20">
          <h2 className="text-3xl text-white mb-8 pb-3 border-b-2 border-slate-700/50">Early Thinking & Research Artifacts</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div>
              <div className="bg-slate-800 border border-slate-700/50 rounded-lg aspect-[4/3] flex items-center justify-center mb-4">
                <div className="text-center p-6">
                  <Camera size={40} className="text-slate-500 mx-auto mb-3" />
                  <p className="text-slate-400 text-sm">Brainstorming Image</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Early divergent thinking map used to explore possible campus transportation problems.
              </p>
            </div>

            {/* Image 2 */}
            <div>
              <div className="bg-slate-800 border border-slate-700/50 rounded-lg aspect-[4/3] flex items-center justify-center mb-4">
                <div className="text-center p-6">
                  <Camera size={40} className="text-slate-500 mx-auto mb-3" />
                  <p className="text-slate-400 text-sm">Sticky Note Process</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Team brainstorming process used to expand research directions and identify possible intervention points.
              </p>
            </div>

            {/* Image 3 */}
            <div>
              <div className="bg-slate-800 border border-slate-700/50 rounded-lg aspect-[4/3] flex items-center justify-center mb-4">
                <div className="text-center p-6">
                  <Camera size={40} className="text-slate-500 mx-auto mb-3" />
                  <p className="text-slate-400 text-sm">Field Observations</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Field observations showing unclear lane boundaries, bike-pedestrian overlap, and bus stop access issues.
              </p>
            </div>
          </div>
        </section>

        {/* RESEARCH METHODS */}
        <section className="mb-20">
          <h2 className="text-3xl text-white mb-8 pb-3 border-b-2 border-slate-700/50">Research Methods</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Interviews */}
            <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/30">
              <h3 className="text-2xl text-white mb-4">Interviews</h3>
              <p className="text-slate-300 leading-relaxed">
                We interviewed students with different transportation experiences, including pedestrians, bikers, commuter students, and multimodal users. The interviews focused on safety, lane clarity, signage, weather, parking, and everyday travel behavior.
              </p>
            </div>

            {/* Observations */}
            <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/30">
              <h3 className="text-2xl text-white mb-4">Observations</h3>
              <p className="text-slate-300 leading-relaxed">
                We observed high-traffic campus locations during class transition times, focusing on bike lane continuity, pedestrian behavior, rider movement, near-miss incidents, signage clarity, and environmental obstacles.
              </p>
            </div>
          </div>
        </section>

        {/* KEY INSIGHTS */}
        <section className="mb-20">
          <h2 className="text-3xl text-white mb-8 pb-3 border-b-2 border-slate-700/50">Key Insights</h2>

          <div className="space-y-6">
            {[
              {
                number: "1",
                title: "Mixed-use spaces create safety anxiety",
                description: "Pedestrians, cyclists, and skateboarders often share unclear spaces, forcing users to constantly watch for one another and negotiate movement informally."
              },
              {
                number: "2",
                title: "Bike lane continuity is inconsistent",
                description: "Some bike lanes abruptly stop, merge into sidewalks, or fail to clearly reconnect with roads or protected bike corridors."
              },
              {
                number: "3",
                title: "Right-of-way is unclear",
                description: "Many users do not know who should yield at intersections or shared crossing points because signage and markings are inconsistent."
              },
              {
                number: "4",
                title: "Weather and maintenance amplify problems",
                description: "Snow, ice, poor lighting, and uncleared bike lanes make existing infrastructure less safe and less reliable."
              },
              {
                number: "5",
                title: "Users compensate for system gaps",
                description: "Students adapt by slowing down, dismounting, avoiding certain routes, yielding defensively, or planning extra travel time. This shows that the system depends too much on individual caution instead of clear design."
              }
            ].map((insight) => (
              <div key={insight.number} className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-6 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-medium flex-shrink-0">
                    {insight.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">{insight.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SYSTEM DIAGRAM */}
        <section className="mb-20">
          <h2 className="text-3xl text-white mb-8 pb-3 border-b-2 border-slate-700/50">Campus Mobility Conflict System</h2>

          <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-10">
            <div className="space-y-8">
              {/* Users */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-purple-300 mb-4">Users</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Pedestrians", "Cyclists", "Skateboarders", "Commuter Students"].map((user) => (
                    <div key={user} className="bg-slate-800 border border-slate-600 rounded-lg p-3 text-center">
                      <p className="text-sm font-medium text-white">{user}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight size={32} className="text-purple-400" />
              </div>

              {/* Infrastructure */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-purple-300 mb-4">Infrastructure</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {["Bike Lanes", "Sidewalks", "Crossings", "Bus Stops", "Parking Areas"].map((infra) => (
                    <div key={infra} className="bg-purple-600 text-white rounded-lg p-3 text-center">
                      <p className="text-sm">{infra}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight size={32} className="text-purple-400" />
              </div>

              {/* Environmental Factors */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-purple-300 mb-4">Environmental Factors</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {["Weather", "Snow", "Lighting", "Construction", "Peak Traffic"].map((factor) => (
                    <div key={factor} className="bg-slate-800 border border-slate-600 rounded p-3 text-center">
                      <p className="text-sm text-slate-300">{factor}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight size={32} className="text-purple-400" />
              </div>

              {/* Conflict Points */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-purple-300 mb-4">Conflict Points</h3>
                <div className="grid md:grid-cols-5 gap-3">
                  {["Abrupt Lane Endings", "Unclear Crossings", "Mixed-Use Paths", "Bus Stop Access", "Poor Signage"].map((conflict) => (
                    <div key={conflict} className="bg-red-900/40 border border-red-500/50 rounded-lg p-3 text-center">
                      <p className="text-sm text-red-200">{conflict}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight size={32} className="text-purple-400" />
              </div>

              {/* User Adaptation */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-purple-300 mb-4">User Adaptation & Safety Risk</h3>
                <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-6 text-center">
                  <p className="text-slate-200 leading-relaxed">
                    <span className="font-medium">User Movement</span> → <span className="font-medium">Infrastructure Condition</span> → <span className="font-medium">Conflict or Confusion</span> → <span className="font-medium">User Adaptation</span> → <span className="font-medium text-red-400">Continued Safety Risk</span>
                  </p>
                </div>
              </div>

              {/* Feedback Loop */}
              <div className="border-t-2 border-dashed border-slate-600 pt-6">
                <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
                  <p className="text-sm text-blue-200 text-center leading-relaxed">
                    <span className="font-medium">Feedback Loop:</span> Unclear infrastructure causes users to create informal behaviors, which then increases unpredictability for everyone else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESIGN OPPORTUNITY */}
        <section className="mb-20">
          <h2 className="text-3xl text-white mb-6 pb-3 border-b-2 border-slate-700/50">Design Opportunity</h2>

          <div className="bg-slate-900/50 border-l-4 border-purple-500 p-8 rounded-r-lg">
            <p className="text-lg text-slate-200 leading-relaxed">
              Instead of treating safety problems as isolated behavior issues, this project reframes them as a system design problem. The opportunity is to make campus movement more predictable by clarifying space ownership, improving visual communication, and reducing points where bikes, skateboards, pedestrians, and vehicles unexpectedly overlap.
            </p>
          </div>
        </section>

        {/* FINAL DESIGN PROPOSAL */}
        <section className="mb-20">
          <h2 className="text-3xl text-white mb-8 pb-3 border-b-2 border-slate-700/50">Campus Mobility Improvement Strategy</h2>

          <div className="space-y-6">
            {[
              {
                number: "1",
                title: "Reroute high-conflict bike lanes",
                description: "Focus on areas near WALC, Engineering Fountain, Lawson, and other high-traffic academic zones where bike lanes intersect awkwardly with pedestrian movement."
              },
              {
                number: "2",
                title: "Separate pedestrian and rider flows",
                description: "Use clearer zoning, color-coded lanes, and physical or visual separation where possible."
              },
              {
                number: "3",
                title: "Improve signage and right-of-way clarity",
                description: "Add visible stop, yield, and slow-down signs instead of relying only on ground markings."
              },
              {
                number: "4",
                title: "Redesign high-risk crossings",
                description: "Highlight intersections and transition points where bikes, skateboards, and pedestrians overlap."
              },
              {
                number: "5",
                title: "Improve weather resilience and maintenance",
                description: "Keep bike lanes clear of snow, improve lighting, and maintain road surfaces to reduce seasonal safety risks."
              }
            ].map((solution) => (
              <div key={solution.number} className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-6 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-medium flex-shrink-0">
                    {solution.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">{solution.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL TAKEAWAY */}
        <section className="mb-20">
          <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-10">
            <p className="text-lg text-slate-200 leading-relaxed">
              This project helped me understand how transportation design is not only about roads or paths, but about how people interpret space, negotiate movement, and respond to unclear systems. Through interviews, observations, and synthesis, I learned how small infrastructure decisions can shape safety, confidence, and user behavior across a shared campus environment.
            </p>
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
    </div>
  );
}
