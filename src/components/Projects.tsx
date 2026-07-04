const PROJECTS = [
  {
    title: "Plateforme d'Ingestion Orientée Événements",
    company: "Mission APICIL",
    description: "Conception et développement de microservices découplés pour ingérer et valider en temps réel des flux métiers d'adhésion complexes.",
    tags: ["Java 17", "Spring Boot", "Apache Kafka", "Angular", "Kubernetes", "PostgreSQL"]
  },
  {
    title: "Moteur d'Orchestration & Automatisation",
    company: "RAM Maroc",
    description: "Création d'une plateforme interne d'orchestration de workflows dynamiques inspirée de n8n, utilisant Apache Camel pour le routage de messages.",
    tags: ["Spring Boot 3", "Apache Camel", "OpenAI API", "Docker", "GitLab CI/CD"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h3 className="text-2xl font-bold text-white border-b border-gray-800 pb-2">
        Projets Sélectionnés
      </h3>
      <div className="grid gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition space-y-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                <span className="text-xs text-blue-400 font-medium">{project.company}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md font-mono">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
