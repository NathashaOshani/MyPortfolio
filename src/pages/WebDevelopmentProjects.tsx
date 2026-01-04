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
              src="/food-delivery/img1.png"
              alt="Food Delivery System"
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">🍔 Food Delivery System</h3>
              <p className="text-gray-300 text-sm">
                Responsive React food ordering UI with cart flow and routing.
              </p>
              <span className="inline-block mt-3 text-emerald-400 font-semibold text-sm">
                View Full Project →
              </span>
            </div>
          </div>

          {/* Portfolio Web Dev Project */}
          <div
            onClick={() => goToProject("/portfolio")}
            className="cursor-pointer bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-400 transition group"
          >
            <img
              src="/portfolio/portfoliocover.png"
              alt="Portfolio Web Development"
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">💻 Portfolio Website</h3>
              <p className="text-gray-300 text-sm">
                My personal portfolio showcasing web development projects and skills.
              </p>
              <span className="inline-block mt-3 text-emerald-400 font-semibold text-sm">
                View Full Project →
              </span>
            </div>
          </div>

          {/* To-Do Web App Project */}
          <div
            onClick={() => goToProject("/todo-project")}
            className="cursor-pointer bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-400 transition group"
          >
            <img
              src="/todo-app/todoc.jpeg"
              alt="To-Do Web App"
              className="h-48 w-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">✅ To-Do Web App</h3>
              <p className="text-gray-300 text-sm">
                Task management web app with add, edit, delete, and local storage.
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
