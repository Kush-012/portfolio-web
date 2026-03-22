export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Hero */}
 <section className="relative overflow-hidden">
  {/* Decorative Yellow Circles */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -left-64 -top-64 w-[700px] h-[700px] rounded-full border border-green-400/30 blur-[2px]" />
    <div className="absolute -left-40 top-32 w-[520px] h-[520px] rounded-full border border-green-400/30 blur-[1px]" />
    <div className="absolute left-24 bottom-[-220px] w-[620px] h-[620px] rounded-full border border-green-400/30 blur-[1px]" />
  </div>

  <div className="max-w-6xl mx-auto px-6 py-32 text-center relative z-10">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
      <span className="text-white">Compiling</span>
      <br />
      <span className="text-green-400">
        Coders on Earth
      </span>
    </h1>

    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
      No random grind. Just structured DSA, clear roadmaps, and measurable progress.
    </p>
  </div>
</section>


      {/* Why this exists */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Why this exists
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Most students don’t struggle because they lack effort.
              <br />
              They struggle because preparation is unstructured.
              <br />
              <br />
              CoderEarth exists to remove confusion and replace it
              with a clear, repeatable system for interview prep.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "150+", label: "Curated problems" },
              { value: "10+", label: "Core DSA topics" },
              { value: "100%", label: "Structured flow" },
              { value: "0", label: "Random guesswork" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0F1C2E] border border-emerald-500/10 hover:border-emerald-400/30 transition"
              >
                <div className="text-3xl font-bold text-emerald-400 mb-1">
                  {item.value}
                </div>
                <div className="text-slate-400 text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it helps */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16 text-green-400">
          How this helps you
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Structured DSA",
              desc: "Topic-wise, difficulty-wise problems so you always know what to solve next.",
            },
            {
              title: "Visible Progress",
              desc: "Track what’s done, what matters, and where you actually stand.",
            },
            {
              title: "Interview Ready",
              desc: "Preparation aligned with real interview expectations, not random practice.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-[#0F1C2E] border border-slate-700/60 hover:border-emerald-400/30 transition"
            >
              <div className="text-emerald-400 font-bold text-sm mb-2">
                0{i + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Belief */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-400">
          What we believe
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          Consistency beats talent.
          <br />
          Direction beats random effort.
          <br />
          Systems beat motivation.
        </p>
      </section>

     
    </div>
  );
}
