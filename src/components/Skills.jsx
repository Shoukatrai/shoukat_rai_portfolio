"use client";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaDatabase 
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiPostman } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="dark:text-white text-black" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="dark:text-gray-300 text-gray-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "GitHub", icon: <FaGithub className="dark:text-white text-black" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
      { name: "REST APIs", icon: <FaDatabase className="text-indigo-500" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold dark:text-white">
            Technical <span className="text-indigo-600">Expertise</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Professional skills acquired through training at Saylani and hands-on projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6 text-indigo-600 border-b border-indigo-100 dark:border-indigo-900 pb-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-sm font-medium dark:text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}