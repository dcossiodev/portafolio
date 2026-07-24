import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

export default function About() {
    return (
        <section id="sobre-mi" className="py-24 px-6 md:px-16 lg:px-32 bg-white dark:bg-dark transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
                            Sobre mí
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                    </div>
                </Reveal>

                <div className="space-y-8">
                    <Reveal>
                        <p className="text-dark/70 dark:text-white/70 leading-relaxed text-lg">
                            ¡Hola! Soy <strong className="text-dark dark:text-white font-bold">Dayana Cossio Vargas</strong>, Ingeniera de Software apasionada por el diseño y desarrollo de productos digitales centrados en el usuario.
                        </p>
                    </Reveal>

                    <Reveal>
                        <p className="text-dark/70 dark:text-white/70 leading-relaxed text-lg">
                            Me enfoco en integrar experiencia de usuario (UX/UI) y desarrollo frontend para construir soluciones funcionales, accesibles y alineadas a las necesidades del negocio. Cuento con experiencia en análisis de requerimientos, diseño de prototipos y desarrollo de plataformas web, participando en distintas etapas del ciclo de vida de proyectos tecnológicos.
                        </p>
                    </Reveal>

                    <Reveal>
                        <p className="text-dark/70 dark:text-white/70 leading-relaxed text-lg">
                            Mi objetivo es transformar ideas en productos eficientes, escalables y orientados a generar valor real para las organizaciones. Trabajo bajo metodologías ágiles, colaborando en la creación de experiencias digitales intuitivas y soluciones enfocadas en la mejora continua.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
