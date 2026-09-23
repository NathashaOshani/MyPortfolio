import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, FolderGit2, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Unified Booking Engine',
    name: 'UBE',
    category: 'Web development',
    description: 'A multi-vendor booking platform connecting role-based portals, payments, and real-time updates.',
    tags: ['Full-stack', 'APIs', 'Real-time'],
    image: '/portfolio/ube-display.png',
    route: '/ube-project',
  },
  {
    title: 'Food Delivery Application',
    name: 'DailyDish',
    category: 'Web development',
    description: 'A full-stack food-ordering application with customizable dishes, order tracking, inventory management, and restaurant administration.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: '/food-delivery/daily1.png',
    route: '/food-delivery-project',
  },
  {
    title: 'AI Task Management',
    name: 'TaskFlow',
    category: 'Web development',
    description: 'A focused task manager with AI goal breakdown, priorities, and persistent local storage.',
    tags: ['React', 'Gemini API', 'Responsive UI'],
    image: '/todo-app/taskflow1.png',
    route: '/todo-project',
  },
  {
    title: 'Microcontroller Based Hardware Project',
    name: 'Gate Sentinal',
    category: 'Embedded & IoT',
    description: 'Connected access control with fingerprint authentication, motion detection, and live monitoring.',
    tags: ['ESP32', 'Sensors', 'IoT'],
    image: '/gate-sentinal.jpeg',
    route: '/microcontroller-project',
  },
];

type ProjectItem = typeof projects[0];

function TiltProjectCard({ project }: { project: ProjectItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, isHovered: false });
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y, isHovered: true });

    const xPct = x / rect.width - 0.5;
    const yPct = y / rect.height - 0.5;
    setTransform(
      `perspective(1000px) rotateX(${-yPct * 7}deg) rotateY(${xPct * 7}deg) scale3d(1.015, 1.015, 1.015)`
    );
  };

  const handleMouseLeave = () => {
    setCoords((prev) => ({ ...prev, isHovered: false }));
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: coords.isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className="project-card relative group overflow-hidden border border-[#263246] hover:border-emerald-500/50 shadow-xl"
    >
      {/* Dynamic cursor spotlight glow */}
      {coords.isHovered && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-xl opacity-100 transition-opacity duration-300 z-20"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(52, 211, 153, 0.15), transparent 75%)`,
          }}
        />
      )}

      <Link to={project.route} aria-label={`Explore ${project.name}: ${project.title}`}>
        <div className="project-visual relative overflow-hidden">
          {/* Animated QA Inspection Laser Scan Line on Hover */}
          {coords.isHovered && (
            <div className="pointer-events-none absolute inset-x-0 top-12 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_14px_#34d399] animate-[laserScan_2s_ease-in-out_infinite] z-20" />
          )}

          <div className="project-browser flex items-center justify-between">
            <span aria-hidden="true">&#9679; &#9679; &#9679;</span>
            <span className="font-mono text-emerald-300">{project.name.toLowerCase()} / preview</span>
            <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[8px] text-emerald-400/90 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              <span className="h-1 w-1 rounded-full bg-emerald-400 animate-ping" />
              BUILD: PASS
            </span>
            <ArrowUpRight size={14} className="text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <img src={project.image} alt={`${project.name} project preview`} loading="lazy" />
          <span className="project-category">{project.category}</span>
        </div>

        <div className="project-copy">
          <div className="project-title">
            <div>
              <p>{project.title}</p>
              <h3>{project.name}</h3>
            </div>
            <span className="project-arrow group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
              <ArrowUpRight size={22} />
            </span>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="hover:border-emerald-400/50 transition-colors">
                {tag}
              </span>
            ))}
          </div>
          <div className="project-bottom">
            <span>
              <FolderGit2 size={15} /> Explore project
            </span>
            <span className="group-hover:text-emerald-300 transition-colors">Read case study &nearr;</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

type ProjectsProps = { scrollRef?: React.RefObject<HTMLDivElement> };

export default function Projects({ scrollRef }: ProjectsProps) {
  const [filter, setFilter] = useState('All projects');
  const visibleProjects = projects.filter(
    (project) => filter === 'All projects' || project.category === filter
  );

  return (
    <section id="latest-projects" ref={scrollRef} className="px-6 lg:px-10 py-20 relative">
      <div className="mx-auto max-w-7xl">
        <div className="section-intro">
          <div>
            <p className="section-kicker">04 / SELECTED WORK</p>
            <h2>
              Ideas turned into <span className="text-emerald-400">applications.</span>
            </h2>
          </div>
          <p>
            A selection of academic and personal projects, built through curiosity and hands-on learning.
          </p>
        </div>

        <div className="project-filters" role="group" aria-label="Filter projects">
          {['All projects', 'Web development', 'Embedded & IoT'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className="transition-colors hover:border-emerald-500/40"
            >
              {category}
            </button>
          ))}
          <span aria-live="polite">{visibleProjects.length} projects</span>
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <TiltProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
