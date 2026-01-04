import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MicrocontrollerProject() {
  const navigate = useNavigate();

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Back button handler
  const handleBack = () => {
    navigate("/", { state: { scrollToLatest: true } });
  };

  const keyFeatures = [
    { title: "🔐 Biometric Fingerprint Access", desc: "Secure gate access using the R503 fingerprint sensor, eliminating the need for physical keys." },
    { title: "📹 Live Video Surveillance", desc: "ESP32-CAM provides real-time video streaming accessible via indoor display and web interface." },
    { title: "🚶 Motion Detection Alerts", desc: "PIR sensor detects movement near the gate and triggers instant alerts." },
    { title: "🎙️ Two-Way Audio Communication", desc: "Enables real-time communication between visitors and homeowners via microphone, speaker, and mobile app." },
    { title: "🔋 Power Failure Protection", desc: "Backup battery and UPS integration ensure uninterrupted operation." },
    { title: "📱 Web & Mobile Integration", desc: "Remote monitoring, notifications, and gate control through user-friendly applications." },
  ];

  const interfaceImages = [
    "/interfaces/ui1.jpeg",
    "/interfaces/ui2.jpeg",
    "/interfaces/ui3.jpeg",
    "/interfaces/ui4.jpeg",
    "/interfaces/ui5.jpeg",
    "/interfaces/ui6.jpeg",
    "/interfaces/ui7.jpeg",
    "/interfaces/ui8.jpeg",
  ];

  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-950 text-white relative">
      
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="fixed top-6 right-6 px-5 py-2 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 font-semibold shadow-lg transition z-50"
      >
        ← Back to Projects
      </button>

      <div className="max-w-6xl mx-auto space-y-20">

        {/* Title */}
        <header className="space-y-4 text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-emerald-400 drop-shadow-lg">
            Microcontroller Based Application Development Project
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            A hardware–software integrated academic project focused on real-world smart security solutions using embedded systems and web technologies.
          </p>
        </header>

        {/* Project Overview */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
            Project Overview
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <h3 className="text-2xl font-semibold text-white">
              Gate Sentinel – Smart Gate Lock & Doorbell System 🔐📹
            </h3>
            <p>
              <strong>Gate Sentinel</strong> is an advanced smart security system developed by <strong>Team Spark Squad</strong> as part of the <strong>BSc (Hons) in Information Technology</strong> at the <strong>University of Moratuwa</strong>.
            </p>
            <p>
              The system integrates biometric authentication, real-time video surveillance, motion detection, and remote gate control into a single reliable solution designed for modern residential environments.
            </p>
          </div>
        </section>

        {/* Why This Project Matters */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
            Why This Project Matters
          </h2>
          <p className="text-gray-300 max-w-4xl">
            In densely populated urban areas, traditional locks and basic doorbells are no longer sufficient. Homeowners require intelligent, secure, and remotely accessible systems that operate reliably even during power outages.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Biometric fingerprint authentication</li>
            <li>Real-time video monitoring</li>
            <li>Motion-based alert system</li>
            <li>Remote gate control via web and mobile applications</li>
            <li>Low power consumption with backup power support</li>
          </ul>
        </section>

        {/* Key Features */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-5 bg-gray-800 rounded-xl hover:bg-emerald-900 transition shadow-md"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Gallery */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img src="/photos/photo1.jpeg" alt="Photo 1" className="rounded-xl border border-gray-700 hover:scale-105 transition-transform duration-300" />
            <img src="/photos/photo2.jpeg" alt="Photo 2" className="rounded-xl border border-gray-700 hover:scale-105 transition-transform duration-300" />
            <img src="/photos/photo3.jpeg" alt="Photo 3" className="rounded-xl border border-gray-700 hover:scale-105 transition-transform duration-300" />
          </div>
        </section>

        {/* Web & Mobile App Interfaces */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
            Web & Mobile App Interfaces
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {interfaceImages.map((img, idx) => {
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl border border-gray-700 hover:border-emerald-400 transition shadow-md"
                >
                  <img
                    src={img}
                    alt={`App Interface ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* Reports & Presentations */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4">
            Reports & Presentations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="/reports/project-report.pdf"
              target="_blank"
              className="group p-8 bg-gray-800 rounded-2xl border border-emerald-400 hover:bg-emerald-400 transition shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-900">📄 Project Report</h3>
              <p className="text-gray-300 group-hover:text-gray-900">
                Detailed documentation covering system design, implementation, and evaluation.
              </p>
            </a>
            <a
              href="/reports/presentation.pdf"
              target="_blank"
              className="group p-8 bg-gray-800 rounded-2xl border border-emerald-400 hover:bg-emerald-400 transition shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-900">📊 Project Presentation</h3>
              <p className="text-gray-300 group-hover:text-gray-900">
                Academic presentation summarizing objectives, architecture, and outcomes.
              </p>
            </a>
          </div>
        </section>

       {/* Project  Video */}
<section className="space-y-6 text-center">
  <h2 className="text-3xl font-semibold text-emerald-400 border-l-4 border-emerald-400 pl-4 text-left">
    Project Video
  </h2>

  <p className="text-gray-300 max-w-3xl mx-auto">
    Watch the complete of the Gate Sentinel smart security system,
    showcasing biometric access, live surveillance, and remote gate control.
  </p>

  <a
    href="https://drive.google.com/file/d/1VFbnEDJgvn5wqh_Ad-O_t3pUPzAmIzBa/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-gray-900 font-semibold rounded-full hover:bg-emerald-400 transition shadow-lg"
  >
    ▶ Watch Project Video
  </a>
</section>


      </div>
    </section>
  );
}
