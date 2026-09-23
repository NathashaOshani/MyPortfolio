import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function WebDevelopmentProjects(): JSX.Element {
  const navigate = useNavigate();

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Optional: Save scroll if you want to come back later
  const goToProject = (path: string) => {
    // If you want scroll restoration, keep this
    sessionStorage.setItem("portfolioScroll", window.scrollY.toString());
    navigate(path);
  };

  return (
    <section className="relative min-h-screen py-20 px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-950 text-white">
      <div className="max-w-6xl mx-auto space-y-16">
      <button
  onClick={() => navigate("/", { state: { scrollToLatest: true } })}
  className="fixed top-6 right-6 px-6 py-2 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition font-semibold shadow-md"
>
  ← Back to Projects
</button>

        {/* Title */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Web Development Projects</h1>
          <p className="text-gray-300 max-w-3xl mx-auto md:mx-0">
            A collection of frontend websites and web applications built using
            modern React-based technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Food Delivery Project */}
          <div
            onClick={() => goToProject("/food-delivery-project")}
            className="cursor-pointer bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-400 transition group"
          >
            <img
              src="/food-delivery/daily1.png"
              alt="Food Delivery System"
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">🍔 DailyDish</h3>
              <p className="text-gray-300 text-sm">
                Full-stack food ordering with customer checkout, order tracking, and restaurant administration.
              </p>
              <span className="inline-block mt-3 text-emerald-400 font-semibold text-sm">
                View Full Project →
              </span>
            </div>
          </div>



          {/* TaskFlow Web App Project */}
          <div
            onClick={() => goToProject("/todo-project")}
            className="cursor-pointer bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-400 transition group"
          >
            <img
              src="/todo-app/taskflow1.png"
              alt="TaskFlow Web App"
              className="h-48 w-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">✅ TaskFlow</h3>
              <p className="text-gray-300 text-sm">
                AI-driven task management application to break down overwhelming goals into actionable steps.
              </p>
              <span className="inline-block mt-3 text-emerald-400 font-semibold text-sm">
                View Full Project →
              </span>
            </div>
          </div>
{/* Portfolio Project */}
<div
  onClick={() => goToProject("/portfolio-project")} // ✅ Navigate internally
  className="cursor-pointer bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-400 transition group"
>
<img
              src="/portfolio/portfoliocover.png"
              alt="Food Delivery System"
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
  <div className="p-5 space-y-2">
    <h3 className="text-xl font-semibold">💻 Portfolio Website</h3>
    <p className="text-gray-300 text-sm">
      My personal portfolio showcasing web development projects, UI/UX work, and skills.
    </p>
    <span className="inline-block mt-3 text-emerald-400 font-semibold text-sm">
      View Full Project →
    </span>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
