import React from 'react';
import Navbar from '../components/sections/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import Education from '../components/sections/Education';

function Home() {
    return (
        <div className="bg-white relative w-full min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;