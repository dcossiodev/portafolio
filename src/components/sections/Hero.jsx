import React from 'react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-32 bg-white dark:bg-dark pt-20 overflow-hidden transition-colors duration-300">
      {/* Background Decor Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-100/50 dark:bg-primary/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col gap-6">
        <Reveal delay={0.1}>
          <p className="text-primary text-lg md:text-xl font-medium tracking-wide">
            Hola, soy
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="text-dark dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-tight font-['Inter',sans-serif]">
            Dayana Cossio Vargas
          </h1>
          <h2 className="text-dark/60 dark:text-white/60 text-sm sm:text-lg md:text-xl lg:text-[24px] font-normal mt-2 leading-snug">
            Ingeniera de Software | Soluciones Digitales | Frontend & UX/UI | Gestión de Proyectos
          </h2>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver proyectos
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
              Contáctame
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
