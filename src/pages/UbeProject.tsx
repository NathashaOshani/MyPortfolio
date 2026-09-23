import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Clock, Sparkles, FolderGit2 } from "lucide-react";

export default function UbeProject() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-screen py-20 px-6 sm:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-950 text-white relative">
      {/* Back Button */}
      <button
        onClick={() => navigate("/", { state: { scrollToLatest: true } })}
        className="fixed top-6 right-6 px-5 py-2.5 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition font-semibold shadow-lg backdrop-blur-md bg-gray-900/40 z-50 flex items-center gap-2 text-sm cursor-pointer"
      >
        <ArrowLeft size={16} />
        <span>Back to Projects</span>
      </button>

      <div className="max-w-4xl mx-auto space-y-12 pt-8">
        {/* Header */}
        <header className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Web Development // Multi-Vendor Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Unified Booking Engine <span className="text-emerald-400">(UBE)</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A comprehensive multi-vendor booking platform connecting role-based vendor portals, customer bookings, secure payments, and real-time updates.
          </p>
        </header>

        {/* Project Preview Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group bg-slate-900">
          <div className="flex items-center justify-between border-b border-slate-800 bg-[#0d1624] px-4 py-2.5 font-mono text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-500">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-emerald-300 font-semibold">ube.platform / preview</span>
            </span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              STAGING
            </span>
          </div>
          <img
            src="/portfolio/ube-display.png"
            alt="Unified Booking Engine Interface Preview"
            className="w-full h-auto object-cover max-h-[460px]"
          />
        </div>

        {/* Coming Soon Notice Card */}
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-8 sm:p-10 text-center space-y-5 shadow-xl backdrop-blur-sm">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
            <Clock size={32} className="animate-pulse" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Case Study Coming Soon</h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              The full technical case study, architectural breakdown, database models, and live demonstration links for the Unified Booking Engine are currently being finalized.
            </p>
          </div>

          {/* Planned Tech Highlights */}
          <div className="pt-3">
            <p className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">Planned Highlights & Architecture</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Multi-Vendor Portals', 'Real-Time Sync', 'Role-Based Access (RBAC)', 'Payment Integration', 'RESTful APIs', 'Modern Responsive UI'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1 font-mono text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => navigate("/", { state: { scrollToLatest: true } })}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-400 text-slate-950 font-semibold text-sm hover:bg-emerald-300 transition shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <FolderGit2 size={16} />
              <span>Explore Other Projects</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
