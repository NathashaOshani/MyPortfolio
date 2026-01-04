import { useNavigate } from "react-router-dom";

export default function UIUXProjects() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-950 text-white relative">

      {/* Back Button Fixed Top-Right */}
      <button
  onClick={() => navigate("/", { state: { scrollToLatest: true } })}
  className="fixed top-6 right-6 px-6 py-2 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition font-semibold shadow-md"
>
  ← Back to Projects
</button>



      <div className="max-w-6xl mx-auto space-y-16">

        {/* Title */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">UI / UX Design Projects</h1>
          <p className="text-gray-300 max-w-3xl mx-auto md:mx-0">
            UI/UX projects designed using Figma with focus on interaction,
            animation, and modern design principles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 3D Carousel Card */}
          <div
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/uiux-3d-carousel");
            }}
            className="cursor-pointer bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-400 transition group"
          >
            <img
              src="/uiux/3d-carousel-cover.png"
              alt="3D Carousel Figma"
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">
                🎠 3D Carousel in Figma
              </h3>
              <p className="text-gray-300 text-sm">
                Interactive 3D carousel animation built using Smart Animate
                in Figma.
              </p>
              <span className="inline-block mt-3 text-emerald-400 font-semibold text-sm">
                View Design →
              </span>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center p-10 text-center transition hover:border-emerald-400">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-200">
                🚧 Coming Soon
              </h3>
              <p className="text-gray-400 text-sm">
                Stay tuned for more exciting UI/UX projects.  
                New designs are on the way!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
