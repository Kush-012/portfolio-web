import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      title: "DSA Master Sheet",
      description:
        "Curated problems from LeetCode & GFG. Level up your coding game.",
      path: "/",
    },
    {
      title: "Career Roadmaps",
      description:
        "Data Science, Full-Stack, AI/ML paths. Your journey starts here.",
      path: "/",
    },
    {
      title: "Progress Tracker",
      description:
        "Track every win. Build consistency. Watch yourself grow.",
      path: "/",
    },
  ];

  return (
    <div className="w-full text-white overflow-hidden bg-gray-900">
      <section className="relative flex items-start md:items-center px-4 pt-20 sm:pt-0 md:min-h-screen">


        {/* ================= Background effects ================= */}
        <div className="absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-white-600/10 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ================= Left Side ================= */}
            <div>
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="text-[#EAEFEF]">Where coders</span>
                <br />
                <span className="text-white">prove their skills on </span>
                <span className="text-green-400">Earth</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mb-6">
                Stop grinding random problems. Follow structured sheets, stay
                consistent, and crack interviews with confidence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-0">

                <Link
                  to="/dsasheet"
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-bold text-lg hover:scale-105 transition text-center"
                >
                  Start Learning →
                </Link>

                <Link
                  to="/roadmap"
                  className="px-8 py-4 bg-white/5 border border-green-500/30 rounded-xl font-semibold hover:bg-green-950/30 transition text-center"
                >
                  View Roadmaps
                </Link>
              </div>
            </div>

            {/* ================= Right Side (Hidden on Phone) ================= */}
            <div className="relative h-full items-center justify-center hidden md:flex">
              <div className="relative w-full max-w-xl h-[400px] flex">



                {/* First Column */}
                <div className="w-1/2 pr-8 relative">
                  {/* Graph */}
                  <div className="absolute top-8 w-full rotate-1 transition-all duration-300 hover:scale-105 hover:rotate-0 group">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl blur opacity-20 group-hover:opacity-30" />
                    <div className="relative bg-gray-900/95 rounded-xl p-4 border border-green-500/30 backdrop-blur-sm">
                      <div className="flex justify-between mb-2">
                        <div className="text-2xl">🕸️</div>
                        <span className="text-xs text-white font-bold bg-green-500/10 px-2 py-1 rounded text-center flex items-center">
                          70%
                        </span>
                      </div>
                      <h4 className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                        Graph Traversal
                      </h4>
                      <p className="text-gray-400 text-xs mb-3">DFS, BFS, Dijkstra</p>
                      <div className="h-1 bg-gray-800 rounded-full">
                        <div className="h-full bg-gradient-to-r from-white to-emerald-500 rounded-full w-[70%]" />
                      </div>
                    </div>
                  </div>


                  <div className="absolute bottom-8 w-full -rotate-2 transition-all duration-300 hover:scale-105 hover:rotate-0 group">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl blur opacity-15 group-hover:opacity-25" />
                    <div className="relative bg-gray-900/95 rounded-xl p-4 border border-green-500/30 backdrop-blur-sm">
                      <div className="flex justify-between mb-2">
                        <div className="text-2xl">🕸️</div>
                        <span className="text-xs text-white font-bold bg-green-500/10 px-2 py-1 rounded flex items-center">
                          30%
                        </span>
                      </div>
                      <h4 className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                        Dynamic Programming
                      </h4>
                      <p className="text-gray-400 text-xs mb-3">Memoization, Tabulation</p>
                      <div className="h-1 bg-gray-800 rounded-full">
                        <div className="h-full bg-gradient-to-r from-white to-emerald-500 rounded-full w-[30%]" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Second Column */}
                <div className="w-1/2 pl-8 relative flex items-center justify-center">
                  <div className="absolute top-1/2 -translate-y-1/2 w-full transition-all duration-300 hover:scale-105 group">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-35" />
                    <div className="relative bg-gray-900/95 rounded-xl p-5 border border-green-500/30 backdrop-blur-sm">
                      <div className="flex justify-between mb-3">
                        <div className="text-3xl">🕸️</div>
                        <span className="text-xs text-white font-bold bg-green-500/10 px-2 py-1 rounded flex items-center">85%</span>
                      </div>
                      <h4 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                        Binary Search
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">Search in sorted arrays</p>
                      <div className="h-1 bg-gray-800 rounded-full">
                        <div className="h-full bg-gradient-to-r from-white to-emerald-600 rounded-full w-[35%]" />
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="pt-8 pb-20 px-4 sm:px-6 md:px-12 lg:px-24 sm:pt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-10 sm:mb-16">
            <span className="text-[#EAEFEF]">Features That</span>{" "}
            <span className="text-green-400">Elevate Your Journey</span>
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.title}
                to={feature.path}
                className="group relative overflow-hidden border border-green-500/20 rounded-2xl p-8 bg-gray-900/50 hover:border-green-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/0 via-green-600/0 to-green-600/0 group-hover:from-green-600/5 group-hover:via-green-600/10 group-hover:to-green-600/5 transition-all duration-500" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-green-400">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent group-hover:w-4/5 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ================= PERSONALIZED DSA SHEET ================= */}
      <section className="pt-10 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-6">
                  <span className="text-[#EAEFEF]">Personalized</span>
                  <br />
                  <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 bg-clip-text text-transparent">
                    DSA Sheet
                  </span>
                </h2>

                <p className="text-gray-400 text-xl leading-relaxed">
                  Master 150+ curated problems. Track progress in real-time. Crack top
                  company interviews.
                </p>
              </div>

              <a
                href="https://docs.google.com/spreadsheets/d/1H1K1_lstpKPOyWO2YOxyL5-r9-umN_2JwVGpVdds5A4/edit?gid=0#gid=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 px-10 py-5 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-600/30 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 group-hover:via-green-500/20 transition-all duration-500"></div>
                <span className="relative z-10">Access DSA Sheet</span>
                <div className="ml-4 transform group-hover:translate-x-2 transition-transform">
                  →
                </div>
              </a>

              <p className="text-gray-500 text-sm">
                Updated weekly • Free forever • Google Sheets format
              </p>
            </div>

            {/* Right Side */}
            <div className="relative h-[600px] w-full -ml-10 sm:ml-0">

              {/* Pulse Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-60 h-60 border border-green-500/20 rounded-full animate-pulse-slow"></div>
                <div className="absolute w-80 h-80 border border-green-500/10 rounded-full animate-pulse-slower"></div>
              </div>

              {/* Fixed pseudo-random positions */}
              {(() => {
                const bubblePositions = {
                  Array: { left: "28%", top: "55%" },
                  String: { left: "52%", top: "12%" },
                  Stack: { left: "62%", top: "22%" },
                  Queue: { left: "54%", top: "68%" },
                  "Linked List": { left: "78%", top: "28%" },
                  Tree: { left: "46%", top: "39%" },
                  Graph: { left: "24%", top: "22%" },
                  DP: { left: "72%", top: "48%" },
                };

                return [
                  { text: "Array", size: "w-28 h-28", color: "from-red-500/25 to-emerald-500/25", speed: "18s" },
                  { text: "String", size: "w-26 h-26", color: "from-blue-500/25 to-cyan-500/25", speed: "20s" },
                  { text: "Stack", size: "w-24 h-24", color: "from-white-500/25 to-green-500/25", speed: "16s" },
                  { text: "Queue", size: "w-24 h-24", color: "from-purple-500/25 to-pink-500/25", speed: "22s" },
                  { text: "Linked List", size: "w-32 h-32", color: "from-indigo-500/25 to-purple-500/25", speed: "24s" },
                  { text: "Tree", size: "w-36 h-36", color: "from-white-600/25 to-blue-700/55", speed: "26s" },
                  { text: "Graph", size: "w-34 h-34", color: "from-blue-600/25 to-cyan-600/25", speed: "21s" },
                  { text: "DP", size: "w-30 h-30", color: "from-red-300/25 to-white-500/25", speed: "19s" },
                ].map((bubble, index) => {
                  const position = bubblePositions[bubble.text];

                  return (
                    <div
                      key={index}
                      className={`absolute ${bubble.size} rounded-full bg-gradient-to-br ${bubble.color} border border-white/20 flex items-center justify-center animate-float-orbital cursor-pointer hover:scale-110 transition-all duration-500`}
                      style={{
                        left: position.left,
                        top: position.top,
                        animationDuration: bubble.speed,
                      }}
                    >
                      <span className="text-white font-bold text-xs md:text-sm text-center">
                        {bubble.text}
                      </span>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
  @keyframes float-orbital {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-14px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .animate-float-orbital {
    animation: float-orbital ease-in-out infinite;
  }

  @keyframes pulse-slow {
    0%,
    100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.15;
      transform: scale(1.1);
    }
  }

  @keyframes pulse-slower {
    0%,
    100% {
      opacity: 0.25;
      transform: scale(1);
    }
    50% {
      opacity: 0.1;
      transform: scale(1.05);
    }
  }

  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }

  .animate-pulse-slower {
    animation: pulse-slower 5s ease-in-out infinite;
  }
`}</style>






      {/* ================= ROADMAP SECTION ================= */}
      <section className="py-20 px-6 md:px-12 lg:px-24 relative">
        {/* Left Side Design - Green Half Circle */}
        <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-32 border-l-2 border-green-500/30 rounded-l-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="relative pl-12">
              {/* Green vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500/0 via-green-500/50 to-emerald-500/0"></div>

              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="text-[#EAEFEF]">Structured Career</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Roadmaps
                </span>
              </h2>

              <div className="space-y-6">
                {/* Point 1 */}
                <div className="flex items-start group">
                  <div className="mr-4 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 group-hover:scale-125 transition-transform"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-200 mb-2">
                      Clear Learning Path
                    </h3>
                    <p className="text-gray-400">
                      Follow step-by-step roadmaps for different tech careers with curated resources and milestones.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex items-start group">
                  <div className="mr-4 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 group-hover:scale-125 transition-transform"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-200 mb-2">
                      Industry-Ready Skills
                    </h3>
                    <p className="text-gray-400">
                      Learn exactly what companies need. Each roadmap includes real-world projects and interview prep.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex items-start group">
                  <div className="mr-4 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 group-hover:scale-125 transition-transform"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-200 mb-2">
                      Time-Optimized Learning
                    </h3>
                    <p className="text-gray-400">
                      Complete your journey in 6-12 months. We've removed all fluff and focused on what matters.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/roadmap"
                className="inline-flex items-center mt-10 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-bold text-lg hover:scale-105 transition hover:shadow-xl hover:shadow-green-600/20 group"
              >
                Explore Roadmaps
                <div className="ml-3 transform group-hover:translate-x-2 transition-transform">
                  →
                </div>
              </Link>
            </div>

            {/* Right Side - Roadmap Cards */}
            <div className="relative">
              {/* Main Container */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-green-500/20 p-6">
                {/* Green glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl"></div>

                <div className="relative z-10">
                  {/* Roadmap Timeline */}
                  <div className="space-y-6">
                    {/* Full-Stack Roadmap */}
                    <div className="group hover:bg-gray-900/30 p-4 rounded-xl transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mr-3">
                            <div className="text-xl">💻</div>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-200">Full-Stack Developer</h3>
                            <p className="text-green-400 text-sm">6-8 months</p>
                          </div>
                        </div>
                        <div className="text-green-400 font-bold">65%</div>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500" style={{ width: '65%' }}></div>
                      </div>
                    </div>

                    {/* Data Science Roadmap */}
                    <div className="group hover:bg-gray-900/30 p-4 rounded-xl transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mr-3">
                            <div className="text-xl">📊</div>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-200">Data Scientist</h3>
                            <p className="text-green-400 text-sm">8-10 months</p>
                          </div>
                        </div>
                        <div className="text-green-400 font-bold">45%</div>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500" style={{ width: '45%' }}></div>
                      </div>
                    </div>

                    {/* AI/ML Roadmap */}
                    <div className="group hover:bg-gray-900/30 p-4 rounded-xl transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mr-3">
                            <div className="text-xl">🧠</div>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-200">AI/ML Engineer</h3>
                            <p className="text-green-400 text-sm">10-12 months</p>
                          </div>
                        </div>
                        <div className="text-green-400 font-bold">35%</div>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mt-8">
                    <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-green-500/10">
                      <div className="text-lg font-bold text-green-400">3</div>
                      <div className="text-xs text-gray-400 mt-1">Roadmaps</div>
                    </div>
                    <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-green-500/10">
                      <div className="text-lg font-bold text-green-400">500+</div>
                      <div className="text-xs text-gray-400 mt-1">Resources</div>
                    </div>
                    <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-green-500/10">
                      <div className="text-lg font-bold text-green-400">98%</div>
                      <div className="text-xs text-gray-400 mt-1">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-xl -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>



      {/* ================= FOOTER ================= */}
      {/* ================= FOOTER ================= */}
      <footer className="border-t border-green-500/10 py-10 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top Row */}
          <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-0">

            {/* Left – Policies */}
            <div className="text-xs space-x-4">
              <a href="/privacy-policy" className="hover:text-green-400 transition">
                Privacy Policy
              </a>
              <a href="/terms-and-conditions" className="hover:text-green-400 transition">
                Terms & Conditions
              </a>
            </div>

            {/* Center – Brand */}
            <div>
              <span className="text-green-400 font-bold text-lg">
                <span className="text-white">Coder</span>Earth
              </span>
            </div>

            {/* Right – spacer (desktop only, keeps brand centered) */}
            <div className="hidden sm:block w-[175px]" />
          </div>

          {/* Bottom Text */}
          <p>© {new Date().getFullYear()} · Built for developers who stay consistent</p>
          <p className="mt-2 text-gray-600 text-center">Master DSA, One Problem at a Time</p>

        </div>
      </footer>
    </div>
  );
} 