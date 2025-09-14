import React from 'react';
import { SunIcon, MoonIcon } from './Icons';

const Header = ({ darkMode, toggleDarkMode }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="font-mono text-lg font-bold text-primary">
                    {/* CORRECTED SPELLING HERE */}
                    <a href="#home" className="flex items-center">
                        <span className="text-accent mr-2 text-xl">&gt;</span>
                        yahir.paz
                        <span className="animate-blink text-accent text-xl">_</span>
                    </a>
                </div>
                <nav className="hidden md:flex items-center space-x-6 font-mono text-sm">
                    <a href="#about" className="hover:text-primary transition-colors">About</a>
                    <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                    <a href="#leadership" className="hover:text-primary transition-colors">Leadership</a>
                    <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                    <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </nav>
                <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-primary/20 transition-colors">
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </header>
    );
};

export default Header;