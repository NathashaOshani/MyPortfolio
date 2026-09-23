import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Globe, Copy, Check, MessageSquare } from 'lucide-react';
import CyberFlightGraphic from './CyberFlightGraphic';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submittedType, setSubmittedType] = useState<'whatsapp' | 'email' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setSubmittedType('whatsapp');
    const messageLines = [
      `*New Portfolio Message*`,
      `*From:* ${formData.name}`,
      `*Email:* ${formData.email || 'Not provided'}`,
      `*Subject:* ${formData.subject || 'Portfolio Inquiry'}`,
      ``,
      `*Message:*`,
      formData.message,
    ];

    const encodedText = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/94711050237?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setSubmittedType('email');
    const mailtoUrl = `mailto:nathashamanage2002@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email || 'Not provided'}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6 lg:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Intro */}
        <div className="mb-10">
          <p className="font-mono text-xs text-emerald-400 tracking-wider mb-2">06 / GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Contact <span className="text-emerald-400">Me</span>
          </h2>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for SE & QA Internships
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-start">
          {/* Left Column: Graphic Animation + Direct Channels */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-base">
              I'm an Information Technology undergraduate at the University of Moratuwa. Whether you have an internship opportunity, a project to discuss, or just want to connect, I would love to hear from you.
            </p>

            {/* 🚀 Graphical Animation: Cyber Paper Airplane with Neon Trails */}
            <CyberFlightGraphic />

            {/* Contact Details with Quick Copy */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/50 p-3.5 transition hover:border-emerald-500/40">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="text-emerald-400 shrink-0" size={18} />
                  <a
                    href="mailto:nathashamanage2002@gmail.com"
                    className="text-gray-200 hover:text-emerald-300 transition text-xs sm:text-sm truncate"
                  >
                    nathashamanage2002@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('nathashamanage2002@gmail.com', 'email')}
                  className="text-xs text-gray-400 hover:text-emerald-300 flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-800 transition ml-2 shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/50 p-3.5 transition hover:border-emerald-500/40">
                <div className="flex items-center gap-3">
                  <Phone className="text-emerald-400 shrink-0" size={18} />
                  <a
                    href="https://wa.me/94711050237"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-emerald-300 transition text-xs sm:text-sm"
                  >
                    +94 71 105 0237
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('+94711050237', 'phone')}
                  className="text-xs text-gray-400 hover:text-emerald-300 flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-800 transition shrink-0"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-1">
              <a
                href="https://github.com/NathashaOshani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-11 h-11 rounded-full border-2 border-emerald-400 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 shadow-md shadow-emerald-500/10"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/nathasha-manage-9012a7290/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-11 h-11 rounded-full border-2 border-emerald-400 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 shadow-md shadow-emerald-500/10"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://portfolio-git-main-nathasha-oshanis-projects.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vercel portfolio"
                className="w-11 h-11 rounded-full border-2 border-emerald-400 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 shadow-md shadow-emerald-500/10"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Respectful & Versatile Message Form */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-7 sm:p-8 backdrop-blur-sm shadow-xl mt-2 lg:mt-0">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Send a Message</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill in the details below and select your preferred communication channel.
              </p>
            </div>

            {submittedType ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                  <Check size={28} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {submittedType === 'whatsapp' ? 'Opening WhatsApp...' : 'Opening Email Client...'}
                </h3>
                <p className="text-sm text-gray-300 max-w-sm mx-auto">
                  {submittedType === 'whatsapp'
                    ? 'WhatsApp is opening with your formatted message ready to send directly.'
                    : 'Your mail app is opening with your message pre-addressed to Nathasha.'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedType(null);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full border border-gray-700 text-sm text-gray-300 hover:border-emerald-400 hover:text-white transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700/80 rounded-xl text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700/80 rounded-xl text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Collaboration"
                    className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700/80 rounded-xl text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Nathasha, I'd like to get in touch regarding..."
                    className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700/80 rounded-xl text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>

                {/* Dual Respectful Action Buttons */}
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="w-full py-3.5 bg-emerald-400 text-gray-950 rounded-xl font-semibold hover:bg-emerald-300 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    <MessageSquare size={16} />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="w-full py-3.5 bg-slate-800/90 text-slate-200 border border-slate-700 hover:border-emerald-400 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    <Mail size={16} />
                    <span>Send via Email</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-1 font-mono">
                  I respect your time and typically respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
