import { FaCode, FaPalette, FaProjectDiagram, FaTasks, FaShoppingCart, FaTools } from 'react-icons/fa';
import Card from '../ui/Card';
import Reveal from '../ui/Reveal';
import { skillCategories } from '../../data/skills';

const iconMap = {
  FaCode,
  FaPalette,
  FaProjectDiagram,
  FaTasks,
  FaShoppingCart,
  FaTools
};

export default function Skills() {
  return (
    <section id="tecnologias" className="py-24 px-6 md:px-16 lg:px-32 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
              Tecnologías
            </h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.iconName];
            return (
              <Reveal key={index} delay={index * 0.1}>
                <Card
                  className="p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group border border-black/5 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {Icon && <Icon className="text-3xl text-primary transition-colors duration-300 group-hover:text-white" />}
                  </div>

                  <h3 className="text-xl font-bold text-dark dark:text-white mb-6 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>

                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-3 text-dark/70 dark:text-white/60 font-medium">
                        <div className="w-2 h-2 bg-primary/40 rounded-full group-hover:bg-primary transition-colors duration-300"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
