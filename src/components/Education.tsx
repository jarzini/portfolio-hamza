// src/components/Education.tsx
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

export default function Education() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <FaUniversity className="text-blue-600" /> Formation
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Master */}
        <motion.div
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2 text-white">Master 2 ISC</h3>
          <p className="text-gray-400">Faculté des Sciences et Techniques Errachidia – Développement web, déploiement d’infrastructure et modèles d’apprentissage NLP/RNN.</p>
        </motion.div>

        {/* Licence */}
        <motion.div
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2 text-white">Licence Génie Logiciel</h3>
          <p className="text-gray-400">FST Errachidia</p>
        </motion.div>
      </div>
    </div>
  );
}
