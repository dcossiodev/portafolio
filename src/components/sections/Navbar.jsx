import React, { useState } from 'react';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Tecnologías', href: '#tecnologias' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Educación', href: '#educacion' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="w-full h-[72px] flex items-center justify-between px-6 md:px-16 lg:px-32 bg-white dark:bg-dark fixed top-0 z-50 shadow-sm border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="text-dark dark:text-white text-2xl font-bold font-['Inter',sans-serif]">
        DC
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-8 mr-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-dark/70 dark:text-white/70 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button
          onClick={toggleMenu}
          className="text-2xl text-dark dark:text-white focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-white dark:bg-dark shadow-lg md:hidden flex flex-col py-8 px-6 gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-dark/80 dark:text-white/80 font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full justify-center">
            Contáctame
          </Button>
        </div>
      )}
    </nav>
  );
}
