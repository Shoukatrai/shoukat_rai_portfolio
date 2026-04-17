"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Animated Heading & Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="text-indigo-600">Me</span>
          </h2>

          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Hello! I’m{" "}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                Shoukat Rai
              </span>
              , a dedicated MERN Stack Developer. Currently, I am a student at
              <span className="font-semibold text-gray-900 dark:text-white">
                {" "}
                Saylani Mass IT Training (SMIT)
              </span>
              , where I am honing my skills in modern web technologies.
            </p>

            <p>
              My journey in tech is driven by a passion for building scalable,
              high-performance web applications. I specialize in the **MERN
              Stack** (MongoDB, Express.js, React, Node.js) and I am currently
              exploring the power of **Next.js** for better SEO and performance.
            </p>

            <p>
              Being a 3rd-year **BSIT undergraduate**, I combine my academic
              foundation with practical project experience to deliver clean code
              and seamless user experiences.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-indigo-600">Education</h4>
              <p className="text-sm dark:text-gray-400">
                BS Information Technology
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-indigo-600">Training</h4>
              <p className="text-sm dark:text-gray-400">MERN Stack - Saylani</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Decorative Element or Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 hidden md:block"
        >
          <div className="relative p-10">
            <div className="absolute inset-0 bg-indigo-600/10 dark:bg-indigo-400/10 rounded-3xl rotate-3"></div>
            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Why Work With Me?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 dark:text-gray-300">
                  <span className="text-green-500">✔</span> Pixel Perfect UI/UX
                </li>
                <li className="flex items-center gap-2 dark:text-gray-300">
                  <span className="text-green-500">✔</span> Clean & Maintainable
                  Code
                </li>
                <li className="flex items-center gap-2 dark:text-gray-300">
                  <span className="text-green-500">✔</span> Performance
                  Optimized
                </li>
                <li className="flex items-center gap-2 dark:text-gray-300">
                  <span className="text-green-500">✔</span> Modern Tech Stack
                  (Next.js)
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
