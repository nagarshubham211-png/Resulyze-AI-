import React, { useState } from "react";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Premium Top Glow Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-50 opacity-80" />

      <nav className="fixed top-0 left-0 w-full z-50 overflow-hidden">

        {/* Main Glass Background */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-black/30 border-b border-white/10 shadow-[0_8px_32px_rgba(0,255,255,0.08)]" />

        {/* Animated AI Glow */}
        <div className="absolute inset-0 opacity-30">

          <div className="absolute -top-20 left-[15%] w-[320px] h-[320px] bg-cyan-500 rounded-full blur-[140px] animate-pulse" />

          <div className="absolute -top-20 right-[15%] w-[320px] h-[320px] bg-purple-600 rounded-full blur-[140px] animate-pulse" />

        </div>

        {/* Premium Grid Background */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Navbar Content */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

          {/* Logo Section */}
          <a
            href="#hero"
            className="flex items-center gap-4 cursor-pointer group"
          >

            {/* AI Orb */}
            <div className="relative">

              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl shadow-cyan-500/30 group-hover:scale-110 transition duration-500" />

              {/* Orb Glow */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-400 blur-xl opacity-40 animate-pulse" />

              {/* Small Floating Dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-300 shadow-lg shadow-cyan-400 animate-ping" />

            </div>

            {/* Logo Text */}
            <div className="leading-tight">

              <h1 className="text-2xl font-bold tracking-wide">

                <span className="text-white">
                  Resulyze
                </span>

                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {" "}AI
                </span>

              </h1>

              <p className="text-[11px] tracking-[3px] uppercase text-gray-400">
                Smart Resume Intelligence
              </p>

            </div>

          </a>


          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
            {[
              { name: "Features", link: "#features" },
              { name: "Solutions", link: "#solutions" },
              { name: "Pricing", link: "#pricing" },
              { name: "About", link: "#about" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="relative hover:text-cyan-400 transition-all duration-300 group"
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="relative overflow-hidden group px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl hover:scale-105 transition-all duration-500">

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-1000" />

              <div className="absolute inset-0 blur-2xl bg-cyan-400 opacity-10 group-hover:opacity-40 transition duration-500" />

              <span className="relative text-white font-semibold tracking-wide">
                Analyze Resume
              </span>

            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <Menu size={28} />
            </button>
          </div>

        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 ${menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
            }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 h-screen w-72 bg-black/70 backdrop-blur-3xl border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-500 ${menuOpen
              ? "translate-x-0"
              : "translate-x-full"
            }`}
        >

          <div className="flex items-center justify-between p-6 border-b border-white/10">

            <h2 className="text-xl font-bold text-white">
              Menu
            </h2>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-white"
            >
              <X size={28} />
            </button>

          </div>

          <div className="flex flex-col p-8 gap-8">

            {[
              {
                name: "Features",
                link: "#features",
              },
              {
                name: "Solutions",
                link: "#solutions",
              },
              {
                name: "Pricing",
                link: "#pricing",
              },
              {
                name: "About",
                link: "#about",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-gray-300 hover:text-cyan-400 transition"
              >
                {item.name}
              </a>
            ))}

            <button className="mt-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition">
              Analyze Resume
            </button>

          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;