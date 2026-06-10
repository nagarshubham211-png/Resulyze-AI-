import React from "react";

const features = [
  {
    title: "ATS Optimization",
    desc: "Boost resume ranking using advanced AI-powered ATS analysis and keyword enhancement.",
    number: "01",
    glow: "from-cyan-400 to-blue-500",
  },
  {
    title: "Smart Suggestions",
    desc: "Receive intelligent recommendations to improve structure, wording, and readability instantly.",
    number: "02",
    glow: "from-purple-400 to-pink-500",
  },
  {
    title: "Skill Gap Analysis",
    desc: "Identify missing skills and optimize your profile for your dream job role effortlessly.",
    number: "03",
    glow: "from-pink-400 to-orange-400",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-32 px-6 overflow-hidden bg-[#050816] text-white"
    >

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
      <div className="absolute top-20 left-20 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-6">

            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="text-sm tracking-wide text-cyan-300 font-medium">
              Advanced AI Features
            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Powerful Features
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Built For Success
            </span>

          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Experience next-generation resume intelligence designed to maximize
            ATS performance and increase interview opportunities.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 hover:-translate-y-3 transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >

              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${item.glow}/10 via-transparent to-transparent`} />

              {/* Premium Border Glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-20 bg-gradient-to-r ${item.glow}`} />

              {/* Card Number */}
              <div className="flex items-center justify-between mb-10">

                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.glow} p-[1px]`}>

                  <div className="w-full h-full rounded-2xl bg-[#0B1120] flex items-center justify-center">

                    {/* Animated Bars */}
                    <div className="flex items-end gap-[3px]">

                      <div className="w-[4px] h-4 rounded-full bg-cyan-300 animate-pulse" />

                      <div className="w-[4px] h-7 rounded-full bg-blue-400 animate-pulse delay-100" />

                      <div className="w-[4px] h-5 rounded-full bg-purple-400 animate-pulse delay-200" />

                    </div>

                  </div>

                </div>

                <span className="text-5xl font-black text-white/5 group-hover:text-white/10 transition duration-500">
                  {item.number}
                </span>

              </div>

              {/* Content */}
              <div className="relative z-10">

                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

              </div>

              {/* Bottom Line */}
              <div className={`mt-8 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${item.glow} transition-all duration-700`} />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;