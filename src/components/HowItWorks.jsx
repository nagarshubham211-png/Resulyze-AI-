import React from "react";

const steps = [
  {
    number: "01",
    title: "Upload Resume",
    desc: "Upload your resume securely in seconds and let our AI start analyzing instantly.",
    glow: "from-cyan-400 to-blue-500",
  },
  {
    number: "02",
    title: "AI Deep Analysis",
    desc: "Our intelligent engine scans ATS compatibility, keywords, formatting, and skills.",
    glow: "from-purple-400 to-pink-500",
  },
  {
    number: "03",
    title: "Get Smart Insights",
    desc: "Receive ATS scores, missing keywords, optimization tips, and job match analysis.",
    glow: "from-pink-400 to-orange-400",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#050816] text-white">

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
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-6">

            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="text-sm tracking-wide text-cyan-300 font-medium">
              Simple AI Workflow
            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            How It
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Actually Works
            </span>

          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Experience a powerful AI-driven resume analysis process designed
            to maximize your interview opportunities effortlessly.
          </p>

        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-10">

          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-[16%] w-[68%] h-[2px] bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 hover:-translate-y-3 transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >

              {/* Glow Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${step.glow}/10 via-transparent to-transparent`} />

              {/* Floating Glow */}
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[80px] opacity-20 bg-gradient-to-r ${step.glow}`} />

              {/* Step Number */}
              <div className="relative mb-10">

                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.glow} p-[1px]`}>

                  <div className="w-full h-full rounded-3xl bg-[#0B1120] flex items-center justify-center relative overflow-hidden">

                    {/* Animated Circle */}
                    <div className="absolute w-16 h-16 rounded-full border border-white/10 animate-spin [animation-duration:10s]" />

                    <span className="text-2xl font-black text-white relative z-10">
                      {step.number}
                    </span>

                  </div>

                </div>

              </div>

              {/* Content */}
              <div className="relative z-10">

                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {step.desc}
                </p>

              </div>

              {/* Bottom Gradient Line */}
              <div className={`mt-8 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${step.glow} transition-all duration-700`} />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;