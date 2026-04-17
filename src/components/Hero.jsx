"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload, FaArrowRight, FaCode } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16 overflow-hidden relative">
      
      {/* Background Decorative Elements - Premium look for Dark/Light Mode */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-60" />
        {/* Subtle grid pattern (optional, requires globals.css setup) */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 dark:opacity-10" />
      </div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        
        {/* Left Content - Enhanced Typography and Bio */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          {/* Badge for Saylani */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/50 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-800 shadow-inner"
          >
            <FaCode className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
              Saylani Mass IT Training (SMIT) Graduate
            </span>
          </motion.div>

          {/* Main Heading - Clearer branding */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-950 dark:text-white leading-[1.15] tracking-tight">
            Hi, I&apos;m <span className="text-indigo-600 dark:text-indigo-400">Shoukat Rai</span>
            <span className="block text-3xl md:text-5xl text-gray-800 dark:text-gray-200 mt-2">MERN Stack Developer</span>
          </h1>
          
          {/* Enhanced Bio - Highlighting strengths and training */}
          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
            A passionate **Full-Stack MERN Developer** trained at SMIT. I specialize in crafting modern, highly responsive, and user-centric web applications. Currently, I am leveraging **Next.js** to build performance-optimized, SEO-friendly solutions that bridge the gap between complex requirements and elegant UX.
          </p>
          
          {/* Actions with Icons */}
          <div className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3.5 rounded-2xl hover:bg-indigo-700 transition shadow-xl shadow-indigo-600/30 font-semibold group"
            >
              Explore My Projects 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/Shoukat_Rai_Resume.pdf" // Ensure you have this file in /public
              download
              className="inline-flex items-center gap-2 border-2 border-indigo-600 text-indigo-700 dark:text-indigo-400 px-8 py-3.5 rounded-2xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-900/70 transition font-semibold"
            >
              Download CV 
              <FaDownload className="text-sm" />
            </a>
          </div>
        </motion.div>
        
        {/* Right Content - Premium Framed Image with Hover Effects */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Premium Glowing border effect */}
          <div className="absolute inset-0.5 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-500" />
          
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full border-[10px] border-white dark:border-gray-900 p-3 shadow-2xl overflow-hidden bg-white dark:bg-gray-800">
            <Image 
              src="/1775076952022.jpg" // Ensure public/profile.jpg exists
              alt="Shoukat Rai - MERN Stack Developer trained at Saylani" 
              fill
              className="object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              priority // Crucial for LCP performance
              sizes="(max-width: 768px) 288px, 400px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}