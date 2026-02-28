import { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.includes("@")) return "Valid email required";
    if (form.message.length < 10)
      return "Message must be at least 10 characters";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    try {
      setLoading(true);

      // simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-950 to-black px-6 py-20"
    >
      <div className="w-full max-w-2xl bg-indigo-950/60 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Let's Work Together
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-indigo-900/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-indigo-900/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-indigo-900/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#1E90FF] rounded-lg font-medium transition-all duration-300 hover:brightness-110 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
