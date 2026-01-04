import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function PortfolioProject() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-950 text-white relative">

      {/* Back Button */}
      <button
        onClick={() => navigate("/web-development-projects")}
        className="fixed top-6 right-6 px-6 py-2 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition font-semibold shadow-md z-50"
      >
        ← Back
      </button>

      <div className="max-w-5xl mx-auto space-y-20">

        {/* Title */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-400">
            Personal Portfolio Website
          </h1>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
            A personal developer portfolio showcasing my journey in frontend
            development, UI/UX design, and problem-solving through real-world
            applications.
          </p>
        </header>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
            Project Overview
          </h2>
          <p className="text-gray-300 leading-relaxed">
            This portfolio brings together work across multiple domains — from
            interactive React web applications to UI/UX designs created in
            Figma and microcontroller-based academic projects. It is designed
            with a strong focus on clean architecture, usability, and
            scalability.
          </p>
        </section>

        {/* What You'll Find */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
            What You’ll Find in My Portfolio
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">
                👩‍💻 About Me
              </h3>
              <p>
                An overview of my background, interests, and development journey
                as a frontend developer and designer.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">
                🚀 Latest Projects
              </h3>
              <p>
                Selected web development, UI/UX, and academic projects with
                detailed pages, demos, and relevant links.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">
                🛠️ Skills
              </h3>
              <p>
                A clear breakdown of my technical skills, tools, and technologies
                used across different projects.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">
                💼 Services
              </h3>
              <p>
                Areas where I can contribute, including frontend development and
                UI/UX design.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl md:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-2">
                📩 Contact Me
              </h3>
              <p>
                Easy ways to connect for collaborations, internships, freelance
                work, or learning opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
            My Approach to Development
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I believe in building clean, maintainable solutions while
            prioritizing user experience over unnecessary complexity. Every
            project in this portfolio reflects continuous learning,
            experimentation, and improvement.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
            Tech & Tools I Work With
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300">
            <div className="bg-gray-800 p-4 rounded-xl">⚛️ React (Vite)</div>
            <div className="bg-gray-800 p-4 rounded-xl">📜 TypeScript</div>
            <div className="bg-gray-800 p-4 rounded-xl">🎨 Tailwind / CSS</div>
            <div className="bg-gray-800 p-4 rounded-xl">🎬 Framer Motion</div>
            <div className="bg-gray-800 p-4 rounded-xl">🖌️ Figma</div>
            <div className="bg-gray-800 p-4 rounded-xl">🔧 Git & GitHub</div>
          </div>
        </section>

        {/* Links */}
        <section className="flex flex-wrap justify-center gap-6 pt-10">
          <a
            href="https://portfolio-ruddy-beta-51.vercel.app/"
            target="_blank"
            className="px-8 py-3 bg-emerald-400 text-gray-900 font-semibold rounded-full hover:scale-105 transition"
          >
            🌍 Live Portfolio
          </a>

          <a
            href="https://github.com/NathashaOshani/MyPortfolio"
            target="_blank"
            className="px-8 py-3 border border-emerald-400 text-emerald-400 rounded-full hover:bg-emerald-400 hover:text-gray-900 transition"
          >
            💻 GitHub Repository
          </a>
        </section>

      </div>
    </section>
  );
}
