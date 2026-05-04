import { ArrowLeft, Clock, User, Wrench, Tag, ExternalLink, Users } from "lucide-react";
import { Link } from "react-router";
import websitePreviewImg from "../../imports/Screenshot_2026-05-01_at_23.07.19.png";
import posterImg from "../../imports/Poster.png";

export default function DataVizCampaign() {
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
          Data Visualization Major Awareness Campaign
        </h1>

        <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
          A multi-platform campaign designed to improve awareness and understanding of the Data Visualization major at Purdue University.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {["Campaign Design", "UX", "Web", "Data Visualization", "Branding"].map((tag) => (
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
              <p className="text-sm">Andrew Shilling, Avani Bhargava, Emily, Nico Gentile, Siyuan Liu</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <User size={20} className="text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-white mb-1">My Role</p>
              <p className="text-sm">Campaign Designer, Visual Communicator</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Wrench size={20} className="text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-white mb-1">Tools</p>
              <p className="text-sm">Figma, Adobe Suite, Web Design</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={20} className="text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-white mb-1">Duration</p>
              <p className="text-sm">8 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-slate-700/50 mb-16"></div>

      {/* OVERVIEW */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Overview</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          This project addresses a key communication gap: many students do not clearly understand what the Data Visualization major is, what skills it teaches, and what career paths it leads to.
        </p>
        <p className="text-slate-300 leading-relaxed">
          To solve this, we designed a multi-touchpoint campaign that combines digital and physical media to communicate the value of the major in a clear, engaging, and accessible way.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Problem</h2>
        <div className="bg-slate-900/50 border-l-4 border-purple-500 p-8 rounded-r-lg">
          <p className="text-lg text-slate-200 leading-relaxed mb-4">
            Many prospective and current students lack a clear understanding of the Data Visualization major.
          </p>
          <p className="text-slate-300 mb-2">Existing information is either:</p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span>limited</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span>too technical</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span>or not effectively presented</span>
            </li>
          </ul>
          <p className="text-slate-300 mt-4">
            This leads to low awareness and misunderstanding of the field.
          </p>
        </div>
      </section>

      {/* TARGET USERS */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Target Users</h2>
        <div className="space-y-3">
          <p className="text-slate-300 leading-relaxed">• Prospective students</p>
          <p className="text-slate-300 leading-relaxed">• Undecided students exploring majors</p>
          <p className="text-slate-300 leading-relaxed">• General audience interested in data-related careers</p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-8">Solution</h2>

        <p className="text-slate-300 leading-relaxed mb-8">
          We designed a cohesive campaign system that includes:
        </p>

        <div className="space-y-6">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl text-purple-200 mb-3">Website Prototype</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              A structured, interactive site explaining the major, coursework, and career outcomes.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl text-purple-200 mb-3">Impact Video</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              A short narrative video showcasing real-world applications and student experiences.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl text-purple-200 mb-3">Informational Poster</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              A concise, visually engaging summary of the major.
            </p>
          </div>
        </div>
      </section>

      {/* WEBSITE DESIGN */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Website Design</h2>

        <p className="text-slate-300 leading-relaxed mb-6">
          The website acts as the central hub of the campaign.
        </p>

        <p className="text-slate-300 mb-6">It includes:</p>
        <ul className="space-y-2 text-slate-300 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>overview of the major</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>course highlights</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>student work and dashboards</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>testimonials from students and faculty</span>
          </li>
        </ul>

        <p className="text-slate-400 italic mb-6">
          This is a simplified redesign of key pages after feedback.
        </p>

        <a
          href="https://www.figma.com/site/UhCfIDfNnYYzYhvYDpH0sj/CGT-Project-3?node-id=0-1&t=YaR75Ce6c3fbm1kI-1"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg border border-slate-700/50 overflow-hidden mb-4 hover:border-purple-500/50 transition-colors duration-300"
        >
          <img
            src={websitePreviewImg}
            alt="Website design preview"
            className="w-full h-auto"
          />
        </a>
      </section>

      {/* IMPACT VIDEO */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Impact Video</h2>

        <p className="text-slate-300 leading-relaxed mb-6">
          The campaign video focuses on storytelling and real-world context.
        </p>

        <p className="text-slate-300 mb-4">It highlights:</p>
        <ul className="space-y-2 text-slate-300 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>how data visualization is used in real scenarios</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>the creative and analytical aspects of the field</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>collaboration and problem-solving</span>
          </li>
        </ul>

        <div className="aspect-video rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ohSCj1EIM8s"
            title="Data Visualization Campaign Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      {/* POSTER DESIGN */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Poster Design</h2>

        <p className="text-slate-300 leading-relaxed mb-6">
          The poster provides a quick, visually engaging summary of the major.
        </p>

        <p className="text-slate-300 mb-6">It includes:</p>
        <ul className="space-y-2 text-slate-300 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>what the major is</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>core courses</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>skills learned</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>potential careers</span>
          </li>
        </ul>

        <div className="max-w-2xl mx-auto rounded-lg border border-slate-700/50 overflow-hidden">
          <img
            src={posterImg}
            alt="Data Visualization Major poster design"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-8">Design Process</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl text-purple-200 mb-2">Research</h3>
            <p className="text-slate-300 text-sm">
              Analyzed other universities (CMU, Northeastern, etc.) to understand how they present similar majors.
            </p>
          </div>

          <div>
            <h3 className="text-xl text-purple-200 mb-2">Insights</h3>
            <p className="text-slate-300 text-sm">
              Identified a lack of clear communication and engaging presentation at Purdue.
            </p>
          </div>

          <div>
            <h3 className="text-xl text-purple-200 mb-2">Design</h3>
            <p className="text-slate-300 text-sm">
              Developed wireframes, campaign structure, and visual identity.
            </p>
          </div>

          <div>
            <h3 className="text-xl text-purple-200 mb-2">Iteration</h3>
            <p className="text-slate-300 text-sm">
              Refined layout and content based on feedback.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL OUTCOME */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">Final Outcome</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          The final result is a cohesive campaign that combines website, video, and poster into a unified system.
        </p>
        <p className="text-slate-300 mb-2">The project focuses on:</p>
        <ul className="space-y-2 text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>improving clarity</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>increasing engagement</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-1">•</span>
            <span>making the major more approachable and understandable</span>
          </li>
        </ul>
      </section>

      {/* MY CONTRIBUTION */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-6">My Contribution</h2>
        <div className="space-y-3">
          <p className="text-slate-300">• Poster Design</p>
          <p className="text-slate-300">• Visual Communication</p>
          <p className="text-slate-300">• Content Structuring</p>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="mb-16">
        <h2 className="text-3xl text-white mb-8">Reflection</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl text-purple-200 mb-4">What Works</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              The multi-platform approach effectively communicates the major through different formats.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl text-purple-200 mb-4">Challenges</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Balancing information clarity with visual design and engagement.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl text-purple-200 mb-4">Improvements</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Future iterations could improve website interaction design and expand the campaign to more platforms.
            </p>
          </div>
        </div>
      </section>

      {/* VIEW PROJECT */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/50 border border-purple-500/30 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-3xl text-white mb-4">View Project</h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.figma.com/site/UhCfIDfNnYYzYhvYDpH0sj/CGT-Project-3?node-id=0-1&t=YaR75Ce6c3fbm1kI-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <ExternalLink size={20} />
              View Website Prototype
            </a>

            <a
              href="https://youtu.be/ohSCj1EIM8s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-purple-500/30 hover:border-purple-400/50 text-slate-300 hover:text-white rounded-lg transition-all duration-300"
            >
              <ExternalLink size={20} />
              View Video
            </a>
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
