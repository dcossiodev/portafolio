import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../../data/education';
import Reveal from '../ui/Reveal';

export default function Education() {
    return (
        <section id="educacion" className="py-24 px-6 md:px-16 lg:px-32 bg-white dark:bg-dark transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
                            Educación
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                    </div>
                </Reveal>

                <div className="relative">
                    <div className="absolute left-5 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20 dark:bg-primary/10 -translate-x-1/2"></div>

                    <div className="space-y-16">
                        {education.map((item, index) => (
                            <Reveal key={item.id} delay={index * 0.1}>
                                <div className="relative flex gap-8 md:gap-12 items-start group">
                                    <div className="relative z-10 shrink-0 w-10 h-10 md:w-16 md:h-16 bg-primary border-4 border-white dark:border-dark rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                                        <FaGraduationCap className="text-white text-sm md:text-xl" />
                                    </div>
                                    
                                    <div className="flex-1 bg-light dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[24px] p-8 md:p-10 w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group-hover:border-primary/30">
                                        <h3 className="text-2xl md:text-3xl font-bold text-dark dark:text-white mb-3">
                                            {item.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="text-primary font-bold text-lg">{item.institution}</span>
                                            <span className="text-dark/30 dark:text-white/20 hidden sm:inline text-xl">|</span>
                                            <span className="text-dark/50 dark:text-white/40 text-base font-medium bg-white/50 dark:bg-white/5 px-3 py-1 rounded-lg">{item.period}</span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
