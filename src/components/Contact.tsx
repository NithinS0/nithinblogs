import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Send, CheckCircle2, AlertCircle, Clock, Loader2
} from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = { type: 'idle' | 'loading' | 'success' | 'error'; message: string };

const MailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#EA4335" className={className}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#34A853" className={className}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#0A66C2" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#25D366" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
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

    try {
      const response = await fetch("https://formsubmit.co/ajax/nithin200511@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: "Portfolio Inquiry",
          message: form.message
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 8000);
    }
  };

  const inputCls = (name: string) =>
    `w-full bg-slate-50/50 dark:bg-[#121214] border border-slate-200 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/15 rounded-xl sm:rounded-2xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-300 outline-none text-sm font-medium ${
      focused === name
        ? 'bg-white dark:bg-[#18181c] border-slate-900/35 dark:border-white/30 ring-1 ring-slate-900/35 dark:ring-white/30 shadow-[0_0_15px_rgba(0,0,0,0.02)] dark:shadow-[0_0_15px_rgba(255,255,255,0.02)]'
        : ''
    }`;

  const channels = [
    { icon: MailIcon, href: 'mailto:nithin200511@gmail.com', hoverBg: 'hover:bg-[#EA4335]/10', label: 'Email' },
    { icon: PhoneIcon, href: 'tel:+919042645273', hoverBg: 'hover:bg-[#34A853]/10', label: 'Phone' },
    { icon: LinkedinIcon, href: 'https://linkedin.com/in/nithin01', hoverBg: 'hover:bg-[#0A66C2]/10', label: 'LinkedIn' },
    { icon: WhatsAppIcon, href: 'https://wa.me/919042645273', hoverBg: 'hover:bg-[#25D366]/10', label: 'WhatsApp' }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-transparent transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2 select-none">
              Get in Touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white transition-colors duration-500 tracking-tight">
              Contact Me
            </h2>
          </div>

          {/* Quick Contact Bar */}
          <div className="flex border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#0a0a0b] rounded-full overflow-hidden mb-12 max-w-md mx-auto shadow-sm dark:shadow-lg select-none transition-all duration-500">
            {channels.map((channel, cIdx) => (
              <a
                key={cIdx}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={channel.label}
                className={`flex-1 flex items-center justify-center py-4 border-r border-slate-200 dark:border-white/[0.08] last:border-r-0 transition-all duration-300 group ${channel.hoverBg}`}
              >
                <channel.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>

          {/* Contact Card Form */}
          <div className="relative bg-white dark:bg-[#0a0a0b] border border-slate-200/80 dark:border-white/[0.06] rounded-3xl p-6 sm:p-10 shadow-md dark:shadow-2xl max-w-3xl mx-auto transition-all duration-500">
            {/* Inset Gradient Border */}
            <div className="absolute -inset-px rounded-3xl bg-transparent dark:bg-gradient-to-br dark:from-blue-500/10 dark:via-transparent dark:to-purple-500/10 pointer-events-none" />

            <div className="relative z-10">
              {/* Info Banner */}
              <div className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/[0.04] rounded-full text-xs font-semibold text-slate-500 dark:text-gray-400 mb-8 max-w-md mx-auto select-none transition-all duration-500">
                <Clock size={13} className="text-slate-400 dark:text-gray-500 shrink-0" />
                <span>Timezone: IST (UTC+5:30)</span>
                <span className="opacity-25">•</span>
                <span>Response within 24 hours</span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[11px] text-slate-500 dark:text-gray-400 font-bold uppercase tracking-widest mb-2 select-none transition-colors duration-500">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className={inputCls('name')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] text-slate-500 dark:text-gray-400 font-bold uppercase tracking-widest mb-2 select-none transition-colors duration-500">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className={inputCls('email')}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] text-slate-500 dark:text-gray-400 font-bold uppercase tracking-widest mb-2 select-none transition-colors duration-500">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      rows={5}
                      className={`${inputCls('message')} resize-none`}
                      maxLength={500}
                      required
                    />
                    <div className="absolute bottom-3 right-4 text-gray-700 text-xs font-semibold select-none">
                      {form.message.length}/500
                    </div>
                  </div>
                </div>

                {status.type !== 'idle' && status.type !== 'loading' && (
                  <div className={`flex items-start gap-3 p-4 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}>
                    {status.type === 'success' ? (
                      <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="group w-full flex items-center justify-center gap-2.5 py-4 bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90 disabled:bg-slate-200 dark:disabled:bg-gray-800 disabled:text-slate-400 dark:disabled:text-gray-500 font-black rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed text-xs uppercase tracking-widest"
                >
                  {status.type === 'loading' ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : status.type === 'success' ? (
                    <>
                      <CheckCircle2 size={15} />
                      <span>Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:rotate-[-10deg] transition-all duration-300 shrink-0" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;