import { useNavigate } from "react-router-dom";

export default function ThreeDCarouselProject() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-950 text-white relative">

      {/* Back Button Fixed Top-Right */}
      <button
        onClick={() => navigate("/ui-ux-projects")}
        className="fixed top-6 right-6 px-6 py-2 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition font-semibold shadow-md"
      >
        ← Back
      </button>

      <div className="max-w-5xl mx-auto space-y-16 text-center">

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            🎠 3D Carousel in Figma Using Smart Animate
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Experience a smooth, interactive 3D carousel animation designed entirely
            in Figma. Leveraging Smart Animate and component variants, this design 
            brings your UI/UX concepts to life.
          </p>
        </div>

        {/* Figma Link */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-emerald-400">Figma Design</h2>
          <a
            href="https://www.figma.com/design/hykT1GmOfcILUyaIDdmDLU/Untitled?node-id=0-1&t=GruGcB5bYaDeEt9b-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition font-semibold shadow-lg"
          >
            Open in Figma →
          </a>
        </section>

        {/* Demo Video */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-emerald-400">Demo Video</h2>
          <video
            controls
            className="w-full md:w-4/5 mx-auto rounded-xl border border-gray-700 shadow-2xl"
          >
            <source src="/uiux/3d-carousel-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

      </div>
    </section>
  );
}
