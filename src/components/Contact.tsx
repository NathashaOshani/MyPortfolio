import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">
                Contact <span className="text-emerald-400">Me</span>
              </h2>
              <p className="text-2xl text-white font-semibold mb-6">Let's Work Together</p>
              <p className="text-gray-300 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a
                question or just want to say hi, feel free to reach out. I'll try my best to get back to you
                as soon as possible!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-emerald-400" size={24} />
                <span>oshaninathasha9@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="text-emerald-400" size={24} />
                <span>+94 71 105 0237</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/NathashaOshani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300"
              >
                <Github size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nathasha-manage-9012a7290/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Enter Your Subject"
                className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Enter Your Message"
                rows={6}
                className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-emerald-400 text-gray-900 rounded-full font-semibold hover:bg-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
