import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050816] text-white border-t border-white/10">

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
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 relative z-10">

        {/* Top Footer */}
        <div className="grid md:grid-cols-4 gap-14 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-1">

            {/* Logo */}
            <div className="flex items-center gap-4">

              {/* Logo Orb */}
              <div className="relative">

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl shadow-cyan-500/20" />

                <div className="absolute inset-0 rounded-2xl bg-cyan-400 blur-xl opacity-40 animate-pulse" />

              </div>

              {/* Logo Text */}
              <div>

                <h2 className="text-2xl font-black tracking-wide">

                  <span className="text-white">
                    Resulyze
                  </span>

                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {" "}AI
                  </span>

                </h2>

                <p className="text-xs tracking-[3px] uppercase text-gray-500 mt-1">
                  Resume Intelligence
                </p>

              </div>

            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mt-6">

              AI-powered resume optimization platform designed to help
              professionals improve ATS scores and land dream jobs faster.

            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-lg font-bold mb-6">
              Navigation
            </h3>

            <div className="space-y-4">

              {[
                "Home",
                "Features",
                "Dashboard",
                "Pricing",
                "Testimonials",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-400 hover:text-cyan-300 transition duration-300"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* Resources */}
          <div>

            <h3 className="text-lg font-bold mb-6">
              Resources
            </h3>

            <div className="space-y-4">

              {[
                "Resume Templates",
                "Career Tips",
                "ATS Guide",
                "Help Center",
                "Privacy Policy",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-400 hover:text-cyan-300 transition duration-300"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-lg font-bold mb-6">
              Stay Updated
            </h3>

            <p className="text-gray-400 mb-6">
              Get AI resume tips and career insights directly to your inbox.
            </p>

            {/* Input */}
            <div className="relative">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl outline-none focus:border-cyan-400/40 text-white placeholder:text-gray-500"
              />

              <button className="w-full mt-4 relative overflow-hidden group px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 font-semibold tracking-wide shadow-2xl shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-500">

                {/* Shine */}
                <div className="absolute top-0 left-[-120%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[120%] transition-all duration-1000" />

                <span className="relative z-10">
                  Subscribe
                </span>

              </button>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Resulyze AI. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            {["S", "H", "U", "B", "H", "A", "M"].map((item, index) => (
              <button
                key={index}
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center text-gray-400 hover:text-cyan-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 transition-all duration-300"
              >
                {item}
              </button>
            ))}

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;