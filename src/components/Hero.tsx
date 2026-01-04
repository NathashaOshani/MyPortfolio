import { Linkedin, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-xl text-gray-300">Hello, I'm</p>
              <h1 className="text-7xl font-bold text-white">Nathasha Oshani</h1>
              <h2 className="text-2xl text-gray-300 font-medium">
                IT Undergraduate, Faculty of IT, University of Moratuwa
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              I am an enthusiastic IT undergraduate with a passion for learning and applying technology to real-world problems. 
              Currently, I am expanding my skills in full-stack development, UI/UX design, and modern web technologies 
              to build practical and efficient digital systems.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/nathasha-manage-9012a7290?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BY5dtXfeESMijUPFDI2ijEQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/NathashaOshani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300"
              >
                <Github size={20} />
              </a>
            </div>

            {/* More About Me Button */}
            <button
              onClick={() =>
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 bg-emerald-400 text-gray-900 rounded-full font-semibold hover:bg-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:scale-105"
            >
              More About Me
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-96 h-96">
              {/* Gradient Pulse Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 blur-xl opacity-75 animate-pulse"></div>

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-emerald-400 shadow-2xl shadow-emerald-500/50">
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
