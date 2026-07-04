// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-12 text-center text-gray-400 bg-gray-900">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold text-white mb-4">Entrons en contact</h3>
        <div className="flex justify-center gap-6 mb-6">
          <a href="mailto:Jarzinie11@gmail.com" className="hover:text-white transition">
            Jarzinie11@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/hamza-el-jarzini-8ba345200" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            LinkedIn
          </a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Hamza El Jarzini — Tous droits réservés.</p>
      </div>
    </footer>
  );
}
