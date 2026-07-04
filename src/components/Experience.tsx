// src/components/Experience.tsx
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  // ... (same as before)
];

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <FaBriefcase className="text-blue-600" /> Parcours Professionnel
      </h2>
      <div className="relative border-l border-gray-700">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="mb-12 ml-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
              {i + 1}
            </span>
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.period}</p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
              {exp.missions.map((m, idx) => (
                <li key={idx}>{m}</li>
              ))}
            </ul>
            {exp.tech && (
              <p className="mt-2 text-sm text-gray-400 italic">Tech Stack: {exp.tech}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
