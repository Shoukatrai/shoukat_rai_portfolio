"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, FaLinkedin, FaGithub, FaFacebook, 
  FaWhatsapp, FaPaperPlane, FaExternalLinkAlt 
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Formspree API call (Apni Form ID yahan dalen)
    const response = await fetch("https://formspree.io/f/xojydeel", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/shoukat-rai-750507245/", color: "text-[#0077B5]" },
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/shoukatrai", color: "text-gray-900 dark:text-white" },
    { name: "Fiverr", icon: <SiFiverr />, url: "https://www.fiverr.com/shoukatrai", color: "text-[#1dbf73]" },
    { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://wa.me/923473127706", color: "text-[#25D366]" },
    { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/shoukat.umedani", color: "text-[#1877F2]" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold dark:text-white">Let&apos;s <span className="text-indigo-600">Connect</span></h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Available for freelance projects and full-time opportunities.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold dark:text-white mb-6">Find Me On</h3>
            <div className="grid gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-indigo-500 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-3xl ${link.color}`}>{link.icon}</span>
                    <span className="font-semibold dark:text-gray-200">{link.name}</span>
                  </div>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-indigo-600 text-sm" />
                </a>
              ))}
            </div>
            
            <div className="pt-6 flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <FaEnvelope className="text-indigo-600" />
              <span>shoukat.dev@example.com</span>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border dark:border-gray-800 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">Your Name</label>
                <input name="name" type="text" required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">Email Address</label>
                <input name="email" type="email" required placeholder="name@email.com" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">Message</label>
                <textarea name="message" rows="4" required placeholder="Project details..." className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white transition-all"></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/25"
              >
                Send Message <FaPaperPlane />
              </button>

              {status === "SUCCESS" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 text-center font-medium">Message sent successfully!</motion.p>
              )}
              {status === "ERROR" && (
                <p className="text-red-600 text-center font-medium">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}