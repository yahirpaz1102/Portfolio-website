import React, { useState } from 'react';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from './Icons'; // Import new icons

const Header = ({ darkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#leadership", label: "Leadership" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="font-mono text-lg font-bold text-primary">
                    <a href="#home" className="flex items-center">
                        <span className="text-accent mr-2 text-xl">&gt;</span>
                        yahir.paz
                        <span className="animate-blink text-accent text-xl">_</span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 font-mono text-sm">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-primary/20 transition-colors">
                        {darkMode ? <SunIcon /> : <MoonIcon />}
                    </button>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-primary/20 transition-colors md:hidden">
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu Panel */}
            {isMenuOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-md">
                    <nav className="flex flex-col items-center space-y-6 py-8 font-mono">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)} // Close menu on click
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;