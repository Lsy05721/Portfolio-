import { BookOpen, Code2, Lightbulb, Target, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function ExerciseTemplate() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-8 transition-colors duration-300"
      >
        <ArrowLeft size={20} />
        Back to Portfolio
      </Link>

      {/* Exercise Header */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 text-purple-300 rounded-full text-sm">
            Unity
          </span>
          <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 text-purple-300 rounded-full text-sm">
            C#
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl mb-4 text-white">
          Exercise Title
        </h1>

        <p className="text-xl text-slate-300 mb-6">
          Brief description of the exercise topic or concept being practiced
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Target size={16} />
            <span>Difficulty: Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen size={16} />
            <span>Course/Context: Data Structures</span>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <section className="mb-12 bg-slate-900/50 rounded-2xl p-8 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-purple-600">
            <Target className="text-white" size={24} />
          </div>
          <h2 className="text-2xl text-white">
            Problem Statement
          </h2>
        </div>
        <p className="text-slate-300 text-lg leading-relaxed mb-4">
          Clearly state the problem or exercise requirements. What are you trying to solve or implement? Include any specific constraints or requirements.
        </p>
        <div className="bg-slate-800/60 rounded-lg p-4 border border-purple-500/20">
          <p className="text-slate-300 font-mono text-sm">
            Example: Create a simple platformer movement system with jump mechanics and collision detection.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-purple-600">
            <Lightbulb className="text-white" size={24} />
          </div>
          <h2 className="text-2xl text-white">
            My Approach
          </h2>
        </div>
        <div className="bg-slate-900/50 rounded-2xl p-8 border border-purple-500/20">
          <p className="text-slate-300 leading-relaxed mb-6">
            Explain your thought process and the approach you took to solve this exercise. What method or technique did you choose and why?
          </p>

          <h3 className="text-xl text-purple-200 mb-3">Steps:</h3>
          <ol className="space-y-3">
            {[
              "First step in solving the problem",
              "Second step or consideration",
              "Third step or optimization",
              "Final implementation detail",
            ].map((step, index) => (
              <li key={index} className="flex gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white">{index + 1}</span>
                </div>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Solution/Code */}
      <section className="mb-12 bg-slate-900/50 rounded-2xl p-8 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-purple-600">
            <Code2 className="text-white" size={24} />
          </div>
          <h2 className="text-2xl text-white">
            Solution
          </h2>
        </div>

        <div className="bg-slate-950/50 rounded-lg p-6 border border-purple-500/20 overflow-x-auto">
          <pre className="text-slate-300 font-mono text-sm">
{`void Update() {
  // Your solution code here
  float horizontalInput = Input.GetAxis("Horizontal");

  // Move character
  transform.Translate(Vector3.right * horizontalInput * moveSpeed * Time.deltaTime);

  // Jump logic
  if (Input.GetKeyDown(KeyCode.Space) && isGrounded) {
    rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
  }
}`}
          </pre>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800/60 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg text-purple-200 mb-2">Difficulty</h3>
            <p className="text-slate-300">Medium</p>
          </div>
          <div className="bg-slate-800/60 rounded-lg p-4 border border-purple-500/20">
            <h3 className="text-lg text-purple-200 mb-2">Time Spent</h3>
            <p className="text-slate-300">~2 hours</p>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="mb-12 bg-slate-900/50 rounded-2xl p-8 border border-purple-500/20">
        <h2 className="text-2xl mb-4 text-white">
          Key Learnings
        </h2>
        <ul className="space-y-3">
          {[
            "Important concept or technique learned from this exercise",
            "Common pitfall or edge case to watch out for",
            "How this relates to real game development",
            "Alternative approaches considered",
          ].map((learning, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-300">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
              <span>{learning}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Test Results */}
      <section className="mb-12 bg-slate-900/50 rounded-2xl p-8 border border-purple-500/20">
        <h2 className="text-2xl mb-6 text-white">
          Testing & Results
        </h2>
        <div className="space-y-4">
          {[
            { scenario: "Player jumps on flat ground", result: "Working as expected", passed: true },
            { scenario: "Player moves left and right", result: "Smooth movement achieved", passed: true },
            { scenario: "Collision detection", result: "Proper ground detection", passed: true },
          ].map((test, index) => (
            <div key={index} className="bg-slate-950/30 rounded-lg p-4 border border-purple-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-200">Test {index + 1}</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  test.passed
                    ? "bg-green-500/20 text-green-300 border border-green-400/30"
                    : "bg-red-500/20 text-red-300 border border-red-400/30"
                }`}>
                  {test.passed ? "✓ Passed" : "✗ Failed"}
                </span>
              </div>
              <p className="text-slate-300 text-sm mb-1">Scenario: {test.scenario}</p>
              <p className="text-slate-400 text-sm">Result: {test.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center bg-slate-900/50 rounded-2xl p-8 border border-purple-500/20">
        <p className="text-slate-300 mb-6">
          View more exercises or explore my projects
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all">
            View All Work
          </Link>
          <Link to="/" className="px-6 py-3 border border-purple-500/30 text-slate-300 rounded-lg hover:border-purple-400/50 hover:bg-slate-800 transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
