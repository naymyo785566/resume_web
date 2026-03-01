import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact(): JSX.Element {
  const [form, setForm] = useState<ContactForm>(initialState);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  /* Input Change */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /* Submit */
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_mwsd1tn",
        "template_gob5cpr",
        form,
        "ItTrZL1Q0AItoM8rD"
      );

      setSent(true);
      setForm(initialState);

      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-emerald-400">&lt;</span>
            <span className="text-white">Get In Touch</span>
            <span className="text-emerald-400">/&gt;</span>
          </h2>

          <p className="text-gray-400 text-lg font-mono">
            <span className="text-emerald-400">// </span>
            Let's build something amazing together
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#1a1a1a] rounded-lg p-8 border border-emerald-500/20 mb-8">
          <form onSubmit={submit} className="space-y-6">

            {/* Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 bg-[#0f0f0f] border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 transition"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 bg-[#0f0f0f] border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

           

            {/* Message */}
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              className="w-full px-4 py-3 bg-[#0f0f0f] border border-emerald-500/30 rounded-lg text-white resize-none focus:outline-none focus:border-emerald-400 transition"
            />

            {/* Button */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 flex items-center gap-2 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {sent && (
                <span className="text-green-400 text-sm">
                  Sent successfully ✅
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Social */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="mailto:naymyo785566@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition"
          >
            <Mail size={20} />
            naymyo785566@gmail.com
          </a>

          <div className="flex gap-4">
            <a
              href="https://github.com/naymyo785566"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1a1a1a] border border-emerald-500/20 rounded-lg hover:bg-emerald-500/10 transition"
            >
              <Github size={24} className="text-gray-300" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1a1a1a] border border-cyan-500/20 rounded-lg hover:bg-cyan-500/10 transition"
            >
              <Linkedin size={24} className="text-gray-300" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm font-mono">
          <p> <span className="text-emerald-400">const</span> year ={" "} <span className="text-yellow-400">2025</span>; </p> <p className="mt-2"> Built with React + TypeScript + Tailwind CSS </p>
        </footer>
      </div>
    </section>
  );
}