export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-3xl font-bold text-white mb-8">Compétences &amp; Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Back‑end & Architecture */}
        <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-3">Back‑end &amp; Architecture</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Java/JEE</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Spring Boot (Certifié)</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Microservices</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Architecture Hexagonale</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">DDD</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">REST/SOAP</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Apache Camel</span>
          </div>
        </div>
        {/* Front‑end */}
        <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-3">Front‑end</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Angular</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">React</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">TypeScript</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">HTML5</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">CSS3</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">JS</span>
          </div>
        </div>
        {/* Data & Streaming */}
        <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-3">Data &amp; Streaming</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Apache Kafka</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">RabbitMQ</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">PostgreSQL</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">MongoDB</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Oracle</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">SQL Server</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Liquibase</span>
          </div>
        </div>
        {/* DevOps & Cloud */}
        <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-3">DevOps &amp; Cloud</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Kubernetes</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Docker</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">GitLab CI/CD</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Jenkins</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">AWS S3</span>
          </div>
        </div>
        {/* Monitoring */}
        <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-3">Monitoring</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Dynatrace</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">ELK</span>
            <span className="bg-indigo-800 text-xs text-white rounded-full px-2.5 py-0.5">Grafana</span>
          </div>
        </div>
        {/* Certification highlight */}
        <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700 col-span-full">
          <h3 className="text-xl font-semibold text-white mb-2">Certification phare</h3>
          <p className="text-gray-300 text-sm">Spring Boot Certified Developer – VMware/Tanzu (02/2024)</p>
        </div>
      </div>
    </section>
  );
}
