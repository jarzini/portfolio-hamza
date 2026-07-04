import React from 'react';

const navItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'experience', label: 'Parcours' },
  { id: 'hobbies', label: 'Hobbies & Intérêts' },
  { id: 'contact', label: 'Contact' },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 md:left-0 md:pt-8 md:pb-4 md:px-6 bg-primaryDark border-r border-gray-800">
      {/* Monogramme */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600 text-white text-2xl font-bold">
          HE
        </div>
        <span className="mt-2 text-lg font-semibold text-white">Hamza</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 w-full">
        <ul className="space-y-2">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
