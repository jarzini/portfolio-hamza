import React, { useState } from 'react';

const navItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'experience', label: 'Parcours' },
  { id: 'hobbies', label: 'Hobbies & Intérêts' },
  { id: 'contact', label: 'Contact' },
];

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header mobile */}
      <header className="fixed inset-x-0 top-0 z-20 bg-primaryDark md:hidden border-b border-gray-800 flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
            HE
          </div>
          <span className="text-lg font-semibold text-white">Hamza</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-400 hover:text-gray-200 focus:outline-none"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Drawer mobile */}
      {open && (
        <nav className="fixed inset-0 bg-primaryDark bg-opacity-95 backdrop-blur-sm pt-20 p-6 md:hidden">
          <ul className="space-y-6 text-center text-xl text-gray-300">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
