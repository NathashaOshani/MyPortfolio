import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function TodoProject() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-950 text-white relative">

      {/* Back Button */}
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/web-development-projects");
        }}
        className="fixed top-6 right-6 px-6 py-2 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition z-50"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto space-y-20">

        {/* Title */}
        <header className="space-y-4 text-center">
          <h1 className="text-5xl md:text-5xl font-extrabold text-emerald-400">
            ✅ Todo Web Application
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A modern and fully functional Todo web application built using React,
            focusing on clean UI, smooth user experience, and strong frontend
            architecture.
          </p>
        </header>

        {/* Project Overview */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
            Project Overview
          </h2>

          <p className="text-gray-300 max-w-4xl leading-relaxed">
            This project was developed to strengthen my understanding of React
            fundamentals, component-based design, and real-world UI behavior.
            The application keeps the interface simple and user-friendly while
            maintaining a scalable and clean code structure.
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "➕ Add, edit, delete, and complete tasks",
              "⭐ Priority-based task management",
              "📅 Due-date handling with overdue logic",
              "✨ Smooth animations for task interactions",
              "💾 Persistent storage using LocalStorage",
              "🧩 Clean and maintainable component structure",
            ].map((feature, index) => (
              <div
                key={index}
                className="p-5 bg-gray-800 rounded-xl hover:bg-emerald-900 transition shadow-md"
              >
                <p className="text-lg text-gray-200">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
            Tech Stack
          </h2>

          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
            <li>⚛️ React (Vite)</li>
            <li>📜 JavaScript (ES6+)</li>
            <li>🎨 Custom CSS</li>
            <li>🎞️ Framer Motion</li>
            <li>🪝 React Hooks (useState, useEffect)</li>
            <li>💾 Browser LocalStorage</li>
            <li>🛠️ Git & GitHub</li>
          </ul>
        </section>

{/* Screenshots */}
<section className="space-y-6">
  <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
    Project Screenshots
  </h2>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
    {[
      "/todo-app/todo1.png",
      "/todo-app/todo2.png",
      "/todo-app/todo3.png",
      "/todo-app/todo4.png",
    ].map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Todo App Screenshot ${index + 1}`}
        className={`rounded-xl border border-gray-700 hover:scale-105 transition-transform duration-300 w-full h-80 object-cover ${
          index === 2 ? "justify-self-center md:justify-self-center" : ""
        }`}
      />
    ))}
  </div>
</section>



        

        {/* Links */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-emerald-400">
            Project Links
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://todo-app-iota-tawny.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition font-semibold"
            >
              🌐 Live Project
            </a>

            <a
              href="https://github.com/NathashaOshani/todo-app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition font-semibold"
            >
              💻 GitHub Repository
            </a>
          </div>
        </section>

      </div>
    </section>
  );
}
