// src/components/Hero.tsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen bg-[#0b0f19]">
      {/* Dark overlay (optional, can keep for contrast) */}
      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        className="relative z-10 text-center max-w-2xl px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Hamza El Jarzini
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
          Développeur Full‑Stack Senior | Expert Java, Spring Boot & Architecture Microservices
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed">
          Développeur Full‑Stack avec plus de 6 ans d'expérience, spécialisé en Java, Angular, Spring Boot et Microservices. Expert en développement de services web hautement industrialisés, automatisation (CI/CD) et déploiement sur Kubernetes.
        </p>
        <a
          href="#experience"
          className="inline-block mt-8 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
        >
          Découvrir mon parcours
        </a>
      </motion.div>
    </section>
  );
}
