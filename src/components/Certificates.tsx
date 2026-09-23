import { Award, ArrowUpRight } from 'lucide-react';

type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
  preview?: string;
};

// Replace each placeholder with your certificate details.
// Use a public file path (e.g. /certificates/course.pdf) or a credential URL.
const certificates: Certificate[] = [
  {
    title: 'CyberSecurity Fundamentals',
    issuer: 'IBM',
    date: 'September 2026',
    url: '/certificates/ibm-cybersecurity-fundamentals.pdf',
    preview: '/certificates/ibm-cybersecurity-fundamentals.png',
  },
  {
    title: 'Cloud Computing Fundamentals',
    issuer: 'IBM',
    date: 'September 2026',
    url: '/certificates/ibm-cloud-computing-fundamentals.pdf',
    preview: '/certificates/ibm-cloud-computing-fundamentals.png',
  },
  {
    title: 'Front-End Web Development',
    issuer: 'University of Moratuwa - Centre for Open & Distance Learning',
    date: '',
    url: '/certificates/front-end-web-development.pdf',
    preview: '/certificates/front-end-web-development.png',
  },
  {
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa - Centre for Open & Distance Learning',
    date: '',
    url: '/certificates/web-design-for-beginners.pdf',
    preview: '/certificates/web-design-for-beginners.png',
  },
  {
    title: 'Python Programming',
    issuer: 'University of Moratuwa - Centre for Open & Distance Learning',
    date: '',
    url: '/certificates/python-programming.pdf',
    preview: '/certificates/python-programming.png',
  },
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa - Centre for Open & Distance Learning',
    date: 'August 2023',
    url: '/certificates/python-for-beginners.pdf',
    preview: '/certificates/python-for-beginners.png',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" aria-labelledby="certificates-heading" className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">Learning &amp; growth</p>
        <h2 id="certificates-heading" className="mt-3 text-4xl font-black text-white sm:text-5xl">My <span className="text-emerald-400">Certificates</span></h2>
        <p className="mt-5 max-w-xl leading-relaxed text-slate-300">A look at my learning beyond the classroom.</p>
        {certificates.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((certificate) => (
              <article key={`${certificate.issuer}-${certificate.title}`} className="group relative overflow-hidden flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/5">
                {/* Holographic light sweep */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent group-hover:animate-[flowRight_1.5s_ease-in-out] pointer-events-none z-10" />

                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    VERIFIED CREDENTIAL
                  </span>
                  <span className="font-mono text-[9px] text-slate-500">ACCREDITED</span>
                </div>

                {certificate.preview ? (
                  <a href={certificate.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${certificate.title} PDF (opens in a new tab)`} className="mb-5 block overflow-hidden rounded-lg border border-white/10 bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400">
                    <img src={certificate.preview} alt={`Preview of ${certificate.title} from ${certificate.issuer}`} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" />
                  </a>
                ) : (
                  <Award aria-hidden="true" className="mb-5 text-emerald-400" size={32} />
                )}
                <h3 className="text-xl font-semibold text-white">{certificate.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{certificate.issuer}</p>
                {certificate.date && <p className="mt-2 text-sm text-slate-400 font-mono text-xs">{certificate.date}</p>}
                {certificate.url && (
                  <a href={certificate.url} target="_blank" rel="noopener noreferrer" aria-label={`View certificate: ${certificate.title} (opens in a new tab)`} className="mt-6 inline-flex items-center gap-2 self-start rounded text-sm font-semibold text-emerald-300 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 font-mono text-xs">
                    View certificate <ArrowUpRight aria-hidden="true" size={16} />
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 flex items-center gap-5 rounded-2xl border border-emerald-400/15 bg-white/[0.03] p-6 sm:p-8">
            <Award aria-hidden="true" className="shrink-0 text-emerald-400" size={36} />
            <p className="text-slate-300">Certificate details coming soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
