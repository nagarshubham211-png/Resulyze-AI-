import React from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    review:
      "This AI resume analyzer completely transformed my resume. I started getting interview calls within a week.",
    glow: "from-cyan-400 to-blue-500",
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    review:
      "The ATS optimization and keyword suggestions were insanely accurate. The dashboard feels futuristic and premium.",
    glow: "from-purple-400 to-pink-500",
  },
  {
    name: "Rohit Singh",
    role: "Software Engineer",
    review:
      "I improved my ATS score from 58% to 92%. The AI suggestions genuinely helped me land my dream role.",
    glow: "from-pink-400 to-orange-400",
  },
];

const Testimonials = () => {
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
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-6">

            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="text-sm tracking-wide text-cyan-300 font-medium">
              User Success Stories
            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Loved By
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Job Seekers Worldwide
            </span>

          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Thousands of professionals use our AI-powered platform
            to optimize resumes and land high-paying opportunities.
          </p>

        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 hover:-translate-y-3 transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >

              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${item.glow}/10 via-transparent to-transparent`} />

              {/* Floating Glow */}
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[80px] opacity-20 bg-gradient-to-r ${item.glow}`} />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">

                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.784 1.402 8.168L12 18.896l-7.336 3.867 1.402-8.168L.132 9.211l8.2-1.193z" />
                  </svg>
                ))}

              </div>

              {/* Review */}
              <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                “{item.review}”
              </p>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

              {/* User Info */}
              <div className="flex items-center gap-4">

                {/* Avatar */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${item.glow} p-[1px]`}>

                  <div className="w-full h-full rounded-2xl bg-[#0B1120] flex items-center justify-center text-xl font-black text-white">

                    {item.name.charAt(0)}

                  </div>

                </div>

                {/* Text */}
                <div>

                  <h4 className="text-lg font-bold">
                    {item.name}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {item.role}
                  </p>

                </div>

              </div>

              {/* Bottom Gradient */}
              <div className={`mt-8 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${item.glow} transition-all duration-700`} />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;