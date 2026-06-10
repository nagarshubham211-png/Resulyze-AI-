import React from "react";

const Hero = () => {
  return (
    <section
  id="hero"
  className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24"
>

      {/* Animated Background Grid */}
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

      {/* Main Gradient Glow */}
      <div className="absolute top-[-120px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] animate-pulse" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] animate-pulse" />

      {/* Floating Light */}
      <div className="absolute top-[20%] right-[20%] w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_40px_10px_rgba(34,211,238,0.7)] animate-ping" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex mt-10 items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl shadow-lg shadow-cyan-500/10">

            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="text-sm tracking-wide text-cyan-300 font-medium">
              AI Powered Resume Intelligence
            </span>

          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mt-8">

            Build A
            <span className="block text-white">
              Job Winning Resume
            </span>

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              With AI Precision
            </span>

          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-xl">
            Analyze resumes with next-gen AI technology. Get ATS scores,
            smart keyword optimization, skill-gap analysis, and personalized
            recommendations to stand out in every job application.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            {/* Primary Button */}
            <button className="relative overflow-hidden group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 font-semibold tracking-wide shadow-2xl shadow-cyan-500/20 hover:scale-105 transition-all duration-500">

              {/* Glow */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Shine */}
              <div className="absolute top-0 left-[-120%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[120%] transition-all duration-1000" />

              <span className="relative z-10">
                Analyze Resume
              </span>

            </button>

            {/* Secondary Button */}
            <button className="group px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-500">

              <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent font-medium group-hover:from-cyan-300 group-hover:to-purple-400 transition-all duration-500">
                Watch Demo
              </span>

            </button>

          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">50K+</h2>
              <p className="text-gray-500 text-sm mt-1">Resumes Analyzed</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-400">98%</h2>
              <p className="text-gray-500 text-sm mt-1">ATS Accuracy</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-pink-400">4.9★</h2>
              <p className="text-gray-500 text-sm mt-1">User Rating</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE ULTRA PREMIUM CARD */}
        <div className="relative flex justify-center items-center">

          {/* Background Glow Effects */}
          <div className="absolute w-[520px] h-[520px] bg-cyan-500/20 rounded-full blur-[140px] animate-pulse" />

          <div className="absolute w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[140px] animate-pulse" />

          {/* Floating Orbs */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-cyan-300 rounded-full shadow-[0_0_30px_10px_rgba(34,211,238,0.6)] animate-bounce" />

          <div className="absolute bottom-16 right-10 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_30px_10px_rgba(168,85,247,0.6)] animate-ping" />

          {/* Main Card */}
          <div className="relative w-full max-w-lg rounded-[36px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl overflow-hidden shadow-[0_25px_100px_rgba(0,255,255,0.12)]">

            {/* Premium Gradient Border */}
            <div className="absolute inset-0 rounded-[36px] p-[1px] bg-gradient-to-br from-cyan-400/40 via-transparent to-purple-500/40">
              <div className="w-full h-full rounded-[36px] bg-[#070B1A]/90 backdrop-blur-3xl" />
            </div>

            {/* Card Content */}
            <div className="relative p-8">

              {/* Top Section */}
              <div className="flex items-center justify-between">

                {/* Left */}
                <div>

                  <div className="flex items-center gap-4">

                    {/* Premium Analysis Icon */}
                    <div className="relative flex items-center justify-center">

                      {/* Rotating Ring */}
                      <div className="absolute w-16 h-16 rounded-full border border-cyan-400/20 border-dashed animate-spin [animation-duration:10s]" />

                      {/* Glow */}
                      <div className="absolute w-16 h-16 rounded-full bg-cyan-400/10 blur-2xl" />

                      {/* Center Core */}
                      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#111827] border border-white/10 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.15)]">

                        {/* AI Bars */}
                        <div className="flex items-end gap-[3px]">

                          <div className="w-[4px] h-4 rounded-full bg-cyan-400 animate-pulse" />

                          <div className="w-[4px] h-6 rounded-full bg-blue-400 animate-pulse delay-100" />

                          <div className="w-[4px] h-8 rounded-full bg-purple-400 animate-pulse delay-200" />

                          <div className="w-[4px] h-5 rounded-full bg-pink-400 animate-pulse delay-300" />

                        </div>

                      </div>

                    </div>

                    {/* Text Content */}
                    <div>

                      <div className="flex items-center gap-2">

                        <h2 className="text-2xl font-black tracking-wide bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                          AI Resume Scan
                        </h2>

                        {/* Live Badge */}
                        <span className="px-2 py-[2px] text-[10px] rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 tracking-[2px] uppercase">
                          Live
                        </span>

                      </div>

                      <p className="text-sm text-gray-400 mt-1 tracking-wide">
                        Neural ATS Intelligence System
                      </p>

                    </div>

                  </div>

                </div>

                {/* ATS Score */}
                <div className="relative">

                  <div className="absolute inset-0 bg-green-400 blur-2xl opacity-20 rounded-2xl" />

                  <div className="relative px-5 py-3 rounded-2xl border border-green-400/20 bg-green-500/10 backdrop-blur-xl">

                    <p className="text-xs text-green-300 uppercase tracking-[2px]">
                      ATS SCORE
                    </p>

                    <h3 className="text-2xl font-bold text-green-400">
                      92%
                    </h3>

                  </div>

                </div>

              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

              {/* Progress Section */}
              <div className="space-y-7">

                {[
                  {
                    title: "Skills Match",
                    value: "95%",
                    width: "95%",
                    color:
                      "from-cyan-400 via-blue-500 to-cyan-300",
                  },
                  {
                    title: "Keyword Optimization",
                    value: "88%",
                    width: "88%",
                    color:
                      "from-purple-400 via-pink-500 to-purple-300",
                  },
                  {
                    title: "Formatting Quality",
                    value: "90%",
                    width: "90%",
                    color:
                      "from-pink-400 via-rose-500 to-orange-300",
                  },
                ].map((item, index) => (
                  <div key={index}>

                    <div className="flex justify-between items-center mb-3">

                      <div className="flex items-center gap-2">

                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`} />

                        <span className="text-gray-300 font-medium">
                          {item.title}
                        </span>

                      </div>

                      <span className="text-white font-bold">
                        {item.value}
                      </span>

                    </div>

                    {/* Premium Progress Bar */}
                    <div className="relative w-full h-4 rounded-full bg-white/5 overflow-hidden border border-white/5">

                      {/* Glass Overlay */}
                      <div className="absolute inset-0 bg-white/[0.02]" />

                      {/* Progress */}
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${item.color} relative`}
                        style={{ width: item.width }}
                      >

                        {/* Shine */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />

                      </div>

                    </div>

                  </div>
                ))}

              </div>

              {/* Bottom Analytics Cards */}
              <div className="grid grid-cols-2 gap-5 mt-10">

                {/* Missing Keywords */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />

                  <p className="relative text-sm text-gray-400">
                    Missing Keywords
                  </p>

                  <div className="relative flex items-end justify-between mt-4">

                    <h3 className="text-4xl font-black text-cyan-300">
                      12
                    </h3>

                    <span className="text-xs text-cyan-400">
                      +3 Improved
                    </span>

                  </div>

                </div>

                {/* Job Match */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">

                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />

                  <p className="relative text-sm text-gray-400">
                    Job Match Score
                  </p>

                  <div className="relative flex items-end justify-between mt-4">

                    <h3 className="text-4xl font-black text-purple-300">
                      89%
                    </h3>

                    <span className="text-xs text-purple-400">
                      Excellent
                    </span>

                  </div>

                </div>

              </div>

              {/* Bottom Floating Glow */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[300px] h-[120px] bg-cyan-400/10 blur-[90px]" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;