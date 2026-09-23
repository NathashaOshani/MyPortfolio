import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Github } from 'lucide-react';

const images = Array.from({ length: 10 }, (_, index) => `/food-delivery/daily${index + 1}.png`);
const customerFeatures = [
  'Browse dishes by category and view detailed information.',
  'Customize orders with available variants and options.',
  'Manage cart items and delivery addresses.',
  'Apply promotional coupons and place orders.',
  'Track order progress and view order history.',
];
const administratorFeatures = [
  'Manage dishes, categories, prices, and availability.',
  'Monitor inventory and stock levels.',
  'View incoming customer orders and update their statuses.',
  'Create and manage promotional coupons.',
  'Moderate customer ratings and reviews.',
];
const stack = [
  { title: 'Frontend', tools: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React Router', 'Context API', 'Vite'] },
  { title: 'Backend & database', tools: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'] },
  { title: 'Security & documentation', tools: ['JWT', 'bcrypt', 'Swagger / OpenAPI'] },
];

export default function FoodDeliveryProject() {
  const [current, setCurrent] = useState(0);

  return (
    <main className="min-h-screen bg-[#090e17] px-6 py-12 text-slate-200 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-16">
        <Link to="/" state={{ scrollToLatest: true }} className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-white"><ArrowLeft size={16} /> Back to Projects</Link>

        <header className="max-w-3xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-300">Full-stack food ordering application</p>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">DailyDish<span className="text-emerald-400">.</span></h1>
          <p className="text-lg leading-relaxed text-slate-300">Connecting the customer ordering experience with restaurant administration, from discovering and customizing dishes to managing inventory and tracking orders.</p>
          <div className="flex flex-wrap gap-3">
            <a href="https://lnkd.in/gvsg94pj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"><Github size={17} /> Frontend repository <ArrowUpRight size={15} /></a>
            <a href="https://lnkd.in/gKV_fTca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 px-5 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/10"><Github size={17} /> Backend repository <ArrowUpRight size={15} /></a>
          </div>
        </header>

        <section aria-labelledby="dailydish-overview" className="border-t border-slate-800 pt-10">
          <h2 id="dailydish-overview" className="text-2xl font-semibold text-white">Project overview</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">DailyDish is a completed full-stack food-ordering application built with React, Node.js, Express, and MongoDB. It brings customer browsing, cart management, and ordering together with the tools administrators need to maintain dishes, stock, promotions, and order statuses.</p>
        </section>

        <div className="grid gap-8 md:grid-cols-2">
          {[{ title: 'Customer experience', features: customerFeatures }, { title: 'Restaurant administration', features: administratorFeatures }].map(({ title, features }) => (
            <section key={title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <ul className="mt-6 space-y-4">
                {features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-7 text-slate-300"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />{feature}</li>)}
              </ul>
            </section>
          ))}
        </div>

        <section aria-labelledby="dailydish-engineering" className="space-y-6">
          <h2 id="dailydish-engineering" className="text-2xl font-semibold text-white">Behind the scenes</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Authentication & access', description: 'JWT authentication, bcrypt password hashing, and role-based access control support customer and administrator workflows.' },
              { title: 'Order consistency', description: 'Request validation, inventory reservation, and duplicate-order protection help maintain consistency throughout the ordering lifecycle.' },
              { title: 'API integration', description: 'RESTful APIs connect the frontend and backend, with interactive Swagger / OpenAPI documentation for exploring API endpoints.' },
            ].map(({ title, description }) => <div key={title} className="border-l border-emerald-400/40 pl-5"><h3 className="font-semibold text-emerald-200">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{description}</p></div>)}
          </div>
        </section>

        <section aria-labelledby="dailydish-stack" className="space-y-6">
          <h2 id="dailydish-stack" className="text-2xl font-semibold text-white">Tech stack</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {stack.map(({ title, tools }) => <div key={title}><h3 className="mb-4 text-sm text-slate-400">{title}</h3><ul className="flex flex-wrap gap-2">{tools.map((tool) => <li key={tool} className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200">{tool}</li>)}</ul></div>)}
          </div>
        </section>

        <section aria-labelledby="dailydish-screens" className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 id="dailydish-screens" className="text-2xl font-semibold text-white">Application screens</h2>
            <div className="flex items-center gap-4">
              <button type="button" aria-label="Previous screenshot" onClick={() => setCurrent((value) => (value - 1 + images.length) % images.length)} className="rounded-lg border border-slate-700 p-3 hover:border-emerald-400"><ChevronLeft size={18} /></button>
              <span aria-live="polite" className="font-mono text-xs text-slate-400">{current + 1} / {images.length}</span>
              <button type="button" aria-label="Next screenshot" onClick={() => setCurrent((value) => (value + 1) % images.length)} className="rounded-lg border border-slate-700 p-3 hover:border-emerald-400"><ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="flex min-h-48 items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-2 sm:p-4"><img src={images[current]} alt={`DailyDish application screenshot ${current + 1} of ${images.length}`} className="max-h-[600px] w-full object-contain" loading="lazy" /></div>
          <div className="flex flex-wrap gap-6 text-sm text-emerald-300">
            <a href="https://food-delivery-frontend-tau-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">Visit frontend demo <ArrowUpRight size={16} /></a>
            <a href="https://drive.google.com/file/d/1EcoXsI3YGSSSmOhRbk0SoaLSEcrnerLj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">Watch project video <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section aria-labelledby="dailydish-learning" className="border-t border-slate-800 pt-10">
          <h2 id="dailydish-learning" className="text-2xl font-semibold text-white">What I learned</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">Building DailyDish strengthened my understanding of frontend-backend integration, database design, authentication, API development, and inventory management. It helped me connect individual features into a consistent ordering lifecycle, from the customer cart to restaurant administration.</p>
        </section>
      </div>
    </main>
  );
}
