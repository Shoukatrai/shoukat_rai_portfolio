"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    title: "Food Delivery App",
    description: "A scalable food delivery platform with real-time tracking and secure payments. Built during MERN stack training at Saylani.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
    link: "https://saylani-papa.netlify.app/",
    tech: ["React.js", "Node.js", "MongoDB", "Cloudinary"],
  },
  {
    title: "Ecommerce Plant Store",
    description: "A modern, mobile-friendly interface for plant shopping with dynamic product filtering and cart functionality.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600&auto=format&fit=crop",
    link: "https://shoukatrai.github.io/e-plantShopping/",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Interactive Quiz App",
    description: "Real-time quiz application featuring Firebase authentication and interactive scoring systems.",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=600&auto=format&fit=crop",
    link: "#",
    tech: ["JavaScript", "Firebase", "CSS3"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold dark:text-white">
            My Featured <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of web applications I have built, showcasing my expertise in the MERN stack and modern frontend development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border dark:border-gray-700 transition-all flex flex-col"
            >
              {/* Project Image Container */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - Shoukat Rai Portfolio`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {project.tech.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/20"
                >
                  View Live Case Study →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}