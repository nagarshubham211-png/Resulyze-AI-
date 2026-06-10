import React from "react";

const AIDashboardPreview = () => {
  return (
    <section  id="solutions" className="relative py-32 px-6 overflow-hidden bg-[#050816] text-white">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* Massive Glow Effects */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-6">

            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="text-sm tracking-wide text-cyan-300 font-medium">
              AI Powered Dashboard
            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Powerful Resume
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Intelligence System
            </span>

          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Experience a futuristic AI dashboard that delivers ATS scores,
            keyword insights, skill analysis, and optimization recommendations instantly.
          </p>

        </div>

        {/* Main Dashboard */}
        <div className="relative">

          {/* Outer Glow */}
          <div className="absolute inset-0 bg-cyan-500/5 blur-[120px]" />

          {/* Dashboard Container */}
          <div className="relative rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl overflow-hidden shadow-[0_30px_120px_rgba(0,255,255,0.08)]">

            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-[40px] p-[1px] bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-500/20">
              <div className="w-full h-full rounded-[40px] bg-[#070B1A]/90" />
            </div>

            {/* Header */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-6 border-b border-white/10">

              <div className="flex items-center gap-4">

                {/* AI Core */}
                <div className="relative">

                  <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-40 rounded-2xl" />

                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-cyan-500/20">

                    <div className="grid grid-cols-2 gap-[4px]">

                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-100" />
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-200" />
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-300" />

                    </div>

                  </div>

                </div>

                {/* Heading */}
                <div>

                  <h3 className="text-3xl font-black">
                    AI Resume Dashboard
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Real-Time Resume Intelligence Analysis
                  </p>

                </div>

              </div>

              {/* ATS Score */}
              <div className="mt-6 md:mt-0 flex items-center gap-4">

                <div className="relative">

                  <div className="absolute inset-0 bg-green-400 blur-3xl opacity-20 rounded-full" />

                  <div className="relative w-28 h-28 rounded-full border-[8px] border-green-400/20 flex items-center justify-center bg-green-500/10 backdrop-blur-xl">

                    <div className="text-center">

                      <h2 className="text-3xl font-black text-green-400">
                        92%
                      </h2>

                      <p className="text-xs text-gray-400 tracking-[2px] uppercase">
                        ATS
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Dashboard Content */}
            <div className="relative p-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-8">

              {/* LEFT SIDE */}
              <div className="space-y-8">

                {/* Resume Preview */}
                <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6">

                  <div className="flex items-center justify-between mb-6">

                    <h4 className="text-xl font-bold">
                      Resume Analysis
                    </h4>

                    <span className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm">
                      AI Scanning
                    </span>

                  </div>

                  {/* Resume Lines */}
                  <div className="space-y-4">

                    {[85, 100, 75, 90, 60, 95].map((width, index) => (
                      <div
                        key={index}
                        className="h-4 rounded-full bg-white/5 overflow-hidden"
                      >

                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                          style={{ width: `${width}%` }}
                        />

                      </div>
                    ))}

                  </div>

                </div>

                {/* Skill Analysis */}
                <div className="grid md:grid-cols-2 gap-6">

                  {/* Skills */}
                  <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl">

                    <h4 className="text-lg font-bold mb-6">
                      Skills Match
                    </h4>

                    <div className="space-y-5">

                      {[
                        {
                          skill: "React",
                          score: "96%",
                          color: "from-cyan-400 to-blue-500",
                        },
                        {
                          skill: "Node.js",
                          score: "88%",
                          color: "from-purple-400 to-pink-500",
                        },
                        {
                          skill: "UI/UX",
                          score: "82%",
                          color: "from-pink-400 to-orange-400",
                        },
                      ].map((item, index) => (
                        <div key={index}>

                          <div className="flex justify-between mb-2">

                            <span className="text-gray-300">
                              {item.skill}
                            </span>

                            <span className="font-semibold">
                              {item.score}
                            </span>

                          </div>

                          <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">

                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                              style={{ width: item.score }}
                            />

                          </div>

                        </div>
                      ))}

                    </div>

                  </div>

                  {/* AI Suggestions */}
                  <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl">

                    <h4 className="text-lg font-bold mb-6">
                      AI Suggestions
                    </h4>

                    <div className="space-y-4">

                      {[
                        "Add more action verbs",
                        "Improve ATS keywords",
                        "Enhance project descriptions",
                        "Optimize formatting",
                      ].map((tip, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5"
                        >

                          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />

                          <p className="text-gray-300 text-sm">
                            {tip}
                          </p>

                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-6">

                {/* Match Card */}
                <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 p-6 backdrop-blur-2xl">

                  <p className="text-gray-400 text-sm">
                    Job Match Score
                  </p>

                  <h2 className="text-6xl font-black mt-4 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                    89%
                  </h2>

                  <p className="text-gray-400 mt-4">
                    Excellent compatibility with target role.
                  </p>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-5">

                  {[
                    {
                      title: "Keywords",
                      value: "24",
                    },
                    {
                      title: "Issues Found",
                      value: "03",
                    },
                    {
                      title: "Formatting",
                      value: "A+",
                    },
                    {
                      title: "Readability",
                      value: "94%",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl"
                    >

                      <p className="text-gray-400 text-sm">
                        {item.title}
                      </p>

                      <h3 className="text-3xl font-black mt-3">
                        {item.value}
                      </h3>

                    </div>
                  ))}

                </div>

                {/* AI Activity */}
                <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl">

                  <div className="flex items-center justify-between mb-6">

                    <h4 className="text-lg font-bold">
                      AI Activity
                    </h4>

                    <div className="flex items-center gap-2">

                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                      <span className="text-green-400 text-sm">
                        Live
                      </span>

                    </div>

                  </div>

                  <div className="space-y-4">

                    {[
                      "Scanning resume structure...",
                      "Checking ATS compatibility...",
                      "Optimizing keywords...",
                      "Generating recommendations...",
                    ].map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >

                        <div className="w-2 h-2 rounded-full bg-cyan-400" />

                        <p className="text-gray-300 text-sm">
                          {activity}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AIDashboardPreview;