import React from "react";

const CTA = () => {
    return (
        <section
            id="about"
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

            {/* Massive Glow Effects */}
            <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px]" />

            <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px]" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* CTA Container */}
                <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl shadow-[0_30px_120px_rgba(0,255,255,0.08)]">

                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-[40px] p-[1px] bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-500/20">
                        <div className="w-full h-full rounded-[40px] bg-[#070B1A]/90" />
                    </div>

                    {/* Floating Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[200px] bg-cyan-400/10 blur-[120px]" />

                    {/* Floating Orbs */}
                    <div className="absolute top-12 left-12 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_30px_10px_rgba(34,211,238,0.6)] animate-ping" />

                    <div className="absolute bottom-12 right-12 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_30px_10px_rgba(168,85,247,0.6)] animate-pulse" />

                    {/* Content */}
                    <div className="relative px-8 md:px-16 py-24 text-center">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-8">

                            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

                            <span className="text-sm tracking-wide text-cyan-300 font-medium">
                                AI Powered Career Growth
                            </span>

                        </div>

                        {/* Heading */}
                        <h2 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mx-auto">

                            Ready To Land
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Your Dream Job?
                            </span>

                        </h2>

                        {/* Description */}
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-8">

                            Unlock powerful AI-driven resume analysis, ATS optimization,
                            keyword enhancement, and personalized insights to stand out
                            from thousands of applicants.

                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-center gap-6 mt-12">

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
                            <button className="group px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-500">

                                <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent font-medium group-hover:from-cyan-300 group-hover:to-purple-400 transition-all duration-500">
                                    Watch Live Demo
                                </span>

                            </button>

                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-10 mt-16">

                            {[
                                {
                                    value: "50K+",
                                    label: "Resumes Optimized",
                                },
                                {
                                    value: "98%",
                                    label: "ATS Accuracy",
                                },
                                {
                                    value: "4.9★",
                                    label: "User Rating",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="text-center"
                                >

                                    <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                                        {item.value}
                                    </h3>

                                    <p className="text-gray-500 mt-2">
                                        {item.label}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default CTA;