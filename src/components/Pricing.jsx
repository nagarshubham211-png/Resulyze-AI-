import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    desc: "Perfect for beginners starting resume optimization.",
    features: [
      "Basic ATS Analysis",
      "Resume Score",
      "Keyword Suggestions",
      "Limited Uploads",
    ],
    glow: "from-cyan-400 to-blue-500",
    popular: false,
  },
  {
    name: "Pro AI",
    price: "$19",
    desc: "Advanced AI tools for serious job seekers.",
    features: [
      "Advanced ATS Optimization",
      "Unlimited Resume Uploads",
      "AI Skill Gap Analysis",
      "Job Match Insights",
      "Priority Processing",
    ],
    glow: "from-purple-400 to-pink-500",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    desc: "Complete hiring intelligence for professionals.",
    features: [
      "Team Dashboard",
      "AI Hiring Analytics",
      "Custom Resume Templates",
      "Dedicated Support",
      "Enterprise Security",
    ],
    glow: "from-pink-400 to-orange-400",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative py-32 px-6 overflow-hidden bg-[#050816] text-white scroll-mt-24"
    >

      {/* Grid */}
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

      {/* Glow */}
      <div className="absolute top-0 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-6">

            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="text-sm tracking-wide text-cyan-300 font-medium">
              Flexible Pricing
            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Choose The Perfect
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI Plan
            </span>

          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Powerful AI resume optimization plans designed for students,
            professionals, and enterprises.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[36px] border backdrop-blur-2xl p-8 transition-all duration-500 hover:-translate-y-4 ${
                plan.popular
                  ? "border-purple-400/30 bg-purple-500/[0.06]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-5 right-5 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-xs font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}

              {/* Glow */}
              <div className={`absolute -top-24 -right-24 w-56 h-56 rounded-full blur-[120px] opacity-20 bg-gradient-to-r ${plan.glow}`} />

              {/* Plan Name */}
              <h3 className="text-3xl font-black">
                {plan.name}
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mt-8 flex items-end gap-2">

                <h2 className={`text-6xl font-black bg-gradient-to-r ${plan.glow} bg-clip-text text-transparent`}>
                  {plan.price}
                </h2>

                <span className="text-gray-500 mb-2">
                  /month
                </span>

              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

              {/* Features */}
              <div className="space-y-5">

                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.glow}`} />

                    <span className="text-gray-300">
                      {feature}
                    </span>

                  </div>
                ))}

              </div>

              {/* Button */}
              <button className={`relative overflow-hidden group mt-10 w-full py-4 rounded-2xl font-semibold tracking-wide transition-all duration-500 ${
                plan.popular
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/20"
                  : "bg-white/[0.05] border border-white/10 hover:border-cyan-400/30"
              }`}>

                <div className="absolute top-0 left-[-120%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[120%] transition-all duration-1000" />

                <span className="relative z-10">
                  Get Started
                </span>

              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Pricing;