export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 blur-xl opacity-75 animate-pulse"></div>
              <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-emerald-400 shadow-2xl shadow-emerald-500/50">
                <img src="/profile.jpeg" alt="About" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-white">
              About <span className="text-emerald-400">Me</span>
            </h2>
            <h3 className="text-2xl font-semibold text-white">Full Stack Developer!</h3>
            <p className="text-gray-300 leading-relaxed">
              Hello! I’m Nathasha Oshani, an IT undergraduate at the Faculty of Information Technology, University of Moratuwa. 
              I’m passionate about full-stack development and enjoy building dynamic, responsive, and user-centered digital solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond academics, I am an active member of the Leo Club, contributing to the Membership Growth Committee. 
              Through this, I develop leadership, teamwork, and organizational skills while engaging with the community.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In my free time, I enjoy exploring new technologies, learning about emerging trends in IT, and enhancing my practical skills through hands-on projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
