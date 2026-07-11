import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Loader2, 
  Check,
  Lock,
  Shield,
  Sparkles,
  User,
  Mail,
  MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Form State
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<SubmitStatus>({
    type: "idle",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);

  // Input Change Handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  // Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: "error",
        message: "Please compile all secure payload fields.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid cryptographic email address.",
      });
      return;
    }

    setStatus({ type: "loading", message: "" });

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/nithin200511@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: "Portfolio Flashy Uplink Comms",
            message: form.message,
            timestamp: new Date().toISOString(),
          }),
        },
      );

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Transmission verified! Secure payload dispatched.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Gateway rejected transmission. Remote server mismatch.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Secure tunnel link failure. Please check connectivity.",
      });
    } finally {
      setTimeout(() => setStatus({ type: "idle", message: "" }), 8000);
    }
  };

  const formattedDate = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const inputCls = (name: string) =>
    `w-full bg-slate-50/50 dark:bg-[#070b13] border border-slate-200 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/15 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-300 outline-none text-sm font-medium ${
      focused === name
        ? "bg-white dark:bg-[#0c101a] border-blue-500/50 dark:border-blue-400/50 ring-1 ring-blue-500/20 dark:ring-blue-400/20 shadow-[0_0_15px_rgba(59,130,246,0.05)]"
        : ""
    }`;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-transparent transition-colors duration-500 relative overflow-hidden"
    >
      {/* High-impact background visual graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Section Titles */}
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-black text-blue-500 dark:text-cyan-400 uppercase tracking-[0.25em] mb-2 select-none flex items-center justify-center gap-1.5">
              <Shield size={12} className="animate-pulse" />
              SECURE COMMS INTERACTION
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white transition-colors duration-500 tracking-tight">
              Get In Touch
            </h2>
          </div>

          {/* New Flashy Centered Contact Card */}
          <div className="max-w-xl mx-auto relative">
            
            {/* 1. Animated Outer Gradient Border wrapper */}
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-gradient-x opacity-75 dark:opacity-90 blur-[3px]" />
            
            {/* 2. Inner Main Glass Container */}
            <div className="relative bg-white/90 dark:bg-[#070913]/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden">
              
              {/* Laser Scanner Overlay (Sweeps during loading state) */}
              <AnimatePresence>
                {status.type === "loading" && (
                  <motion.div
                    initial={{ top: "0%" }}
                    animate={{ top: "100%" }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      duration: 1.5, 
                      ease: "easeInOut" 
                    }}
                    className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee,0_0_8px_#22d3ee] z-30 pointer-events-none"
                  />
                )}
              </AnimatePresence>

              {/* Holographic scanner active visual overlay */}
              {status.type === "loading" && (
                <div className="absolute inset-0 bg-cyan-500/[0.02] dark:bg-cyan-500/[0.01] pointer-events-none z-20 animate-pulse" />
              )}

              {/* Status Header Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-white/[0.06] mb-6 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 absolute" />
                  <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-extrabold tracking-widest uppercase ml-1 flex items-center gap-1">
                    <Lock size={9} /> SYSTEM PORTAL ACTIVE
                  </span>
                </div>
                <div className="text-[9px] font-mono text-slate-400 dark:text-gray-500 font-bold">
                  UPLINK: TLS-1.3 // {formattedDate}
                </div>
              </div>

              {/* Form Input Fields */}
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                {/* Name field */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`block text-[10px] font-black uppercase tracking-widest mb-1.5 transition-colors duration-300 ${
                      focused === "name" ? "text-blue-500 dark:text-cyan-400" : "text-slate-400 dark:text-gray-500"
                    }`}
                  >
                    Sender Name
                  </label>
                  <div className="relative flex items-center">
                    <User size={16} className={`absolute left-3.5 transition-colors duration-300 ${
                      focused === "name" ? "text-blue-500 dark:text-cyan-400" : "text-slate-400 dark:text-gray-600"
                    }`} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={`${inputCls("name")} pl-11`}
                      required
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`block text-[10px] font-black uppercase tracking-widest mb-1.5 transition-colors duration-300 ${
                      focused === "email" ? "text-blue-500 dark:text-cyan-400" : "text-slate-400 dark:text-gray-500"
                    }`}
                  >
                    Encrypted Reply Gateway (Email)
                  </label>
                  <div className="relative flex items-center">
                    <Mail size={16} className={`absolute left-3.5 transition-colors duration-300 ${
                      focused === "email" ? "text-blue-500 dark:text-cyan-400" : "text-slate-400 dark:text-gray-600"
                    }`} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@address.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={`${inputCls("email")} pl-11`}
                      required
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`block text-[10px] font-black uppercase tracking-widest mb-1.5 transition-colors duration-300 ${
                      focused === "message" ? "text-blue-500 dark:text-cyan-400" : "text-slate-400 dark:text-gray-500"
                    }`}
                  >
                    Payload details (Message)
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className={`absolute left-3.5 top-3.5 transition-colors duration-300 ${
                      focused === "message" ? "text-blue-500 dark:text-cyan-400" : "text-slate-400 dark:text-gray-600"
                    }`} />
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Compose secure gateway request..."
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      rows={4}
                      className={`${inputCls("message")} pl-11 pr-12 resize-none`}
                      maxLength={500}
                      required
                    />
                    <div className="absolute bottom-3 right-3 text-[9px] font-bold text-slate-400 dark:text-gray-600">
                      {form.message.length}/500
                    </div>
                  </div>
                </div>

                {/* Success/Error banner states */}
                {status.type !== "idle" && status.type !== "loading" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2.5 p-3 rounded-xl text-[12px] font-semibold transition-all border ${
                      status.type === "success"
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                        : "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="group relative w-full flex items-center justify-center gap-2 py-3.5 bg-slate-950 text-white dark:bg-white dark:text-black hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:bg-slate-100 dark:disabled:bg-gray-800 disabled:text-slate-400 dark:disabled:text-gray-500 font-extrabold rounded-xl transition-all duration-300 disabled:cursor-not-allowed text-[11px] uppercase tracking-[0.2em] select-none z-10"
                >
                  {status.type === "loading" ? (
                    <>
                      <Loader2 size={12} className="animate-spin text-cyan-400 dark:text-cyan-600" />
                      <span className="text-cyan-400 dark:text-cyan-600 animate-pulse">Scanning & Sending...</span>
                    </>
                  ) : status.type === "success" ? (
                    <>
                      <Check size={12} className="text-emerald-500" />
                      <span className="text-emerald-500">Payload Dispatched</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send
                        size={12}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0"
                      />
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
