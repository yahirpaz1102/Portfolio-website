import React from 'react';
import TerminalWindow from '../components/TerminalWindow';
import { DownloadIcon } from '../components/Icons';

const About = () => (
    <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
            <TerminalWindow title="~/about_me.txt">
                <h2 className="text-3xl font-bold font-mono text-primary mb-4">about_me<span className="animate-blink text-accent">_</span></h2>
                <p className="text-foreground/90 mb-4">
                    My background combines hands on experience in full stack web development with a proven foundation in sales and customer service.
                    This dual experience allows me to not only build effective applications but also to understand client needs, communicate clearly,
                    and collaborate effectively in agile team environments.
                </p>
                <p className="text-foreground/90">
                    Beyond coding, I am deeply interested in the full project lifecycle, from initial planning to final deployment. I succeed at
                    translating complex requirements into practical, user-focused solutions that successfully meet project goals.
                </p>
                <div className="mt-6">
                    <a
                        href="/Yahir_Paz_Resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-2 border-2 border-accent text-accent font-mono rounded-md hover:bg-accent hover:text-background transition-all duration-300"
                    >
                        <DownloadIcon />
                        Download Resume
                    </a>
                </div>
            </TerminalWindow>
        </div>
    </section>
);

export default About;