import React from 'react';
import { portfolioData } from '../data/portfolioData';
import DigitalRain from '../components/DigitalRain';

const Hero = () => {
    return (
        <section id="home"
                 className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
            <DigitalRain />

            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold font-mono text-primary mb-4">
                    Yahir Fernando Paz Ardon
                    <span className="animate-blink text-accent">_</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
                    Computer Science student applying a developer's mindset to solve business challenges and drive projects forward.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <a href="#contact"
                       className="px-6 py-2 border-2 border-accent text-accent font-mono rounded-md hover:bg-accent hover:text-background transition-all duration-300">
                        Contact Me
                    </a>
                    <a href={`https://www.${portfolioData.contact.github}`}
                       target="_blank" rel="noopener noreferrer"
                       className="px-6 py-2 border-2 border-primary/50 text-primary font-mono rounded-md hover:bg-primary/50 hover:text-[var(--primary-foreground)] transition-all duration-300">
                        View Github
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;