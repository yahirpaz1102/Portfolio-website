import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import { portfolioData } from './data/portfolioData';

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    useEffect(() => {
        const theme = darkMode ? 'dark' : 'light';
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="min-h-screen">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <Hero />
                <About />
                <Experience
                    id="experience"
                    title="Work Experience"
                    experiences={portfolioData.workExperience}
                />
                <Experience
                    id="leadership"
                    title="Leadership Experience"
                    experiences={portfolioData.leadershipExperience}
                />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;