import { useState, useEffect, useRef } from "react";
import {
  Code2,
  Monitor,
  Server,
  Database,
  GitBranch,
  Laptop,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type SkillsProps = {
  preventAutoOpen?: boolean;
};

export default function Skills({ preventAutoOpen }: SkillsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const skillCategories = [
    { title: "Programming", icon: <Code2 size={28} />, skills: ["Python","Java","PHP","JavaScript","C","Arduino"] },
    { title: "Frontend Development", icon: <Monitor size={28} />, skills: ["HTML","CSS","React JS"] },
    { title: "Backend Development", icon: <Server size={28} />, skills: ["Node JS"] },
    { title: "Database Technologies", icon: <Database size={28} />, skills: ["MySQL"] },
    { title: "Version Controlling", icon: <GitBranch size={28} />, skills: ["Git"] },
    { title: "Operating Systems", icon: <Laptop size={28} />, skills: ["Windows","Ubuntu"] },
  ];

  // Auto-open first accordion only if preventAutoOpen is false
  useEffect(() => {
    if (preventAutoOpen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpenIndex(0);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [preventAutoOpen]);

  const handleMouseEnter = (index: number) => setOpenIndex(index);

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen flex items-center py-20">
      <div className="max-w-5xl mx-auto px-8 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-16"
        >
          My <span className="text-emerald-400">Skills</span>
        </motion.h2>

        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 rounded-2xl overflow-hidden hover:border-emerald-400 transition-all"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <div className="w-full flex items-center justify-between p-6 text-left cursor-pointer">
                <div className="flex items-center gap-4">
                  <span className="text-emerald-400">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <ChevronDown
                  size={26}
                  className={`text-emerald-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </div>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-6"
                  >
                    <ul
                      className={`gap-4 mt-4 ${
                        category.title === "Frontend Development" ? "flex flex-col" : "grid sm:grid-cols-2"
                      }`}
                    >
                      {category.skills.map((skill, i) => (
                        <li key={i} className="text-gray-300 text-lg flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
