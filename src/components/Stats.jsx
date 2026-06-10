import React from "react";

const stats = [
  {
    value: "50K+",
    label: "Resumes Analyzed",
    glow: "from-cyan-400 to-blue-500",
  },
  {
    value: "98%",
    label: "ATS Accuracy",
    glow: "from-purple-400 to-pink-500",
  },
  {
    value: "4.9★",
    label: "User Rating",
    glow: "from-pink-400 to-orange-400",
  },
  {
    value: "10K+",
    label: "Users Hired",
    glow: "from-emerald-400 to-cyan-400",
  },
];

const Stats = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#050816] text-white">

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

      {/* Glow Effects */}
      <div className="absolute top-0 left-20 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-20 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-6">

            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="text-sm tracking-wide text-cyan-300 font-medium">
              Trusted By Thousands
            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            AI Resume Platform
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              In Numbers
            </span>

          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Powerful analytics and proven results trusted by professionals
            worldwide to optimize resumes and land dream jobs.
          </p>

        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 hover:-translate-y-3 transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >

              {/* Glow Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${item.glow}/10 via-transparent to-transparent`} />

              {/* Floating Glow */}
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[80px] opacity-20 bg-gradient-to-r ${item.glow}`} />

              {/* Top Line */}
              <div className={`w-16 h-[4px] rounded-full bg-gradient-to-r ${item.glow} mb-8`} />

              {/* Number */}
              <h3 className={`text-6xl font-black bg-gradient-to-r ${item.glow} bg-clip-text text-transparent`}>

                {item.value}

              </h3>

              {/* Label */}
              <p className="text-gray-400 text-lg mt-4 leading-relaxed">
                {item.label}
              </p>

              {/* Bottom Blur */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[60px] bg-gradient-to-r ${item.glow} blur-[80px] opacity-20`} />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;