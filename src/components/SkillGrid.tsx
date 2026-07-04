// src/components/SkillGrid.tsx
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

const categories = [
  {
    name: "Back‑end & Architecture",
    items: [
      "Java/JEE",
      "Spring Boot (Certifié)",
      "Microservices",
      "Architecture Hexagonale",
      "DDD",
      "REST/SOAP",
      "Apache Camel"
    ]
  },
  {
    name: "Front‑end",
    items: ["Angular", "React", "TypeScript", "HTML5", "CSS3", "JS"]
  },
  {
    name: "Data & Streaming",
    items: [
      "Apache Kafka",
      "RabbitMQ",
      "PostgreSQL",
      "MongoDB",
      "Oracle",
      "SQL Server",
      "Liquibase"
    ]
  },
  {
    name: "DevOps & Cloud",
    items: ["Kubernetes", "Docker", "GitLab CI/CD", "Jenkins", "AWS S3"]
  },
  {
    name: "Monitoring",
    items: ["Dynatrace", "ELK", "Grafana"]
  },
  {
    name: "Certification phare",
    items: ["Spring Boot Certified Developer – VMware/Tanzu (02/2024)"]
  }
];

export default function SkillGrid() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <FaTools className="text-blue-600" /> Compétences & Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((it, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200 hover:bg-blue-600 hover:text-white transition-colors"
                >{it}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
