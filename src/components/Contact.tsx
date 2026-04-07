import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Mail, Phone, MapPin, Send, Linkedin, Github,
  CheckCircle2, AlertCircle, Loader2, User, MessageSquare, AtSign,
} from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = { type: 'idle' | 'loading' | 'success' | 'error'; message: string };

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<SubmitStatus>({ type: 'idle', message: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    setStatus({ type: 'loading', message: '' });
    await new Promise((r) => setTimeout(r, 800));
    const body = `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject || 'Portfolio Inquiry'}\n\n${form.message}`;
    window.open(
      `mailto:nithin200511@gmail.com?subject=${encodeURIComponent(form.subject || `Portfolio Inquiry from ${form.name}`)}&body=${encodeURIComponent(body)}`,
      '_blank'
    );
    setStatus({ type: 'success', message: "Email client opened! If not, reach me at nithin200511@gmail.com" });
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus({ type: 'idle', message: '' }), 8000);
  };

  const inputCls = (name: string) =>
    `w-full bg-white/5 rounded-xl sm:rounded-2xl px-4 py-3.5 text-white placeholder-gray-600 transition-all duration-300 outline-none text-sm font-medium ${
      focused === name
        ? 'bg-blue-500/10 shadow-[0_0_25px_-5px_rgba(59,130,246,0.3)] ring-1 ring-blue-500/50'
        : 'hover:bg-white/10'
    }`;

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'nithin200511@gmail.com', href: 'mailto:nithin200511@gmail.com', color: 'from-blue-500 to-indigo-500' },
    { icon: Phone, label: 'Phone', value: '+91 9042645273', href: 'tel:+919042645273', color: 'from-purple-500 to-pink-500' },
    { icon: MapPin, label: 'Location', value: 'Chennai, India', href: null, color: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
              Let's <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-5" />
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed px-4">
              Have a project or want to collaborate? Drop me a message — I respond within 24 hours.
            </p>
          </div>

          {/* Grid — stacked on mobile, 2-col on desktop (2:3 ratio) */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* LEFT — Contact info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <info.icon size={18} className="sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-white font-semibold text-sm hover:text-blue-400 transition-colors break-all">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Socials */}
              <div className="flex gap-3 pt-1">
                <a href="https://linkedin.com/in/nithin01" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0077b5]/15 text-[#00a0dc] font-bold text-xs sm:text-sm hover:bg-[#0077b5]/25 transition-all">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://github.com/NithinS0" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/5 text-white font-bold text-xs sm:text-sm hover:bg-white/10 transition-all">
                  <Github size={16} /> GitHub
                </a>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)] flex-shrink-0" />
                <p className="text-emerald-400 text-xs sm:text-sm font-bold">Available for internships &amp; freelance</p>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="lg:col-span-3">
              <div className="relative bg-[#0d1224]/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl">
                <div className="absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/8 via-transparent to-purple-500/5 pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1">Send a Message</h3>
                  <p className="text-gray-500 text-xs sm:text-sm mb-6">I'll respond within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                        <input type="text" name="name" placeholder="Your name *" value={form.name}
                          onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                          className={`${inputCls('name')} pl-10`} required />
                      </div>
                      <div className="relative">
                        <AtSign size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                        <input type="email" name="email" placeholder="Your email *" value={form.email}
                          onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                          className={`${inputCls('email')} pl-10`} required />
                      </div>
                    </div>

                    <div className="relative">
                      <MessageSquare size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                      <input type="text" name="subject" placeholder="Subject (optional)" value={form.subject}
                        onChange={handleChange} onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                        className={`${inputCls('subject')} pl-10`} />
                    </div>

                    <div className="relative">
                      <textarea name="message" placeholder="Your message... *" value={form.message}
                        onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                        rows={5} required className={`${inputCls('message')} resize-none`} />
                      <div className="absolute bottom-3 right-4 text-gray-700 text-xs">{form.message.length}/500</div>
                    </div>

                    {status.type !== 'idle' && status.type !== 'loading' && (
                      <div className={`flex items-start gap-3 p-3.5 rounded-xl text-xs sm:text-sm font-medium ${
                        status.type === 'success'
                          ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                          : 'bg-red-500/10 border border-red-500/20 text-red-400'
                      }`}>
                        {status.type === 'success' ? <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" /> : <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />}
                        <span>{status.message}</span>
                      </div>
                    )}

                    <button type="submit" disabled={status.type === 'loading'}
                      className="group w-full flex items-center justify-center gap-2.5 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-gray-600 disabled:to-gray-600 text-white font-black rounded-xl sm:rounded-2xl transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 disabled:cursor-not-allowed text-sm uppercase tracking-widest">
                      {status.type === 'loading' ? (
                        <><Loader2 size={17} className="animate-spin" /> Preparing...</>
                      ) : status.type === 'success' ? (
                        <><CheckCircle2 size={17} /> Sent!</>
                      ) : (
                        <><Send size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /> Send Message</>
                      )}
                    </button>

                    <p className="text-center text-gray-600 text-xs">Opens your email client pre-filled.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;