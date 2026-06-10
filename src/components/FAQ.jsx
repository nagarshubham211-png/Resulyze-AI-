import React, { useState } from "react";

const faqs = [
  {
    question: "How does the AI resume analysis work?",
    answer:
      "Our AI scans your resume for ATS compatibility, keyword optimization, formatting quality, readability, and skill relevance to generate detailed improvement suggestions.",
  },
  {
    question: "Is my resume data secure?",
    answer:
      "Yes. Your resume data is encrypted and securely processed. We never share your information with third parties.",
  },
  {
    question: "Which resume formats are supported?",
    answer:
      "You can upload PDF, DOCX, and TXT resume files for analysis and optimization.",
  },
  {
    question: "Can I improve my ATS score?",
    answer:
      "Absolutely. The platform provides personalized recommendations, keyword enhancements, and formatting improvements to maximize your ATS score.",
  },
  {
    question: "Does the AI support different job roles?",
    answer:
      "Yes. Our AI adapts resume analysis based on your target industry, role, and required skill set.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="faq"
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
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px]" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-6">

            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="text-sm tracking-wide text-cyan-300 font-medium">
              Frequently Asked Questions
            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Everything You Need
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              To Know
            </span>

          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
            Get answers to common questions about our AI-powered resume analysis platform.
          </p>

        </div>

        {/* FAQ Items */}
        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[28px] border transition-all duration-500 backdrop-blur-2xl ${active === index
                  ? "border-cyan-400/30 bg-cyan-500/[0.06]"
                  : "border-white/10 bg-white/[0.04]"
                }`}
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

              {/* Question */}
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex items-center justify-between text-left px-8 py-7"
              >

                <h3 className="text-xl font-bold pr-6 relative z-10">
                  {faq.question}
                </h3>

                {/* Icon */}
                <div className={`relative flex items-center justify-center min-w-[42px] h-[42px] rounded-2xl transition-all duration-500 ${active === index
                    ? "bg-cyan-400/10 border border-cyan-400/20"
                    : "bg-white/[0.04] border border-white/10"
                  }`}>

                  <span
                    className={`text-2xl font-light transition-transform duration-500 ${active === index ? "rotate-45 text-cyan-300" : "text-white"
                      }`}
                  >
                    +
                  </span>

                </div>

              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${active === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                  }`}
              >

                <div className="overflow-hidden">

                  <div className="px-8 pb-8 text-gray-400 leading-relaxed text-lg">
                    {faq.answer}
                  </div>

                </div>

              </div>

              {/* Bottom Line */}
              <div className={`h-[2px] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 transition-all duration-700 ${active === index ? "w-full" : "w-0"
                }`} />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;