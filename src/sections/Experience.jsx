import React from 'react';
import TerminalWindow from '../components/TerminalWindow';

const Experience = ({ title, experiences, id }) => {
    return (
        <section id={id} className="py-20 px-6 bg-background-alt">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold font-mono text-primary mb-8 text-center">{title.toLowerCase().replace(/ /g, '_')}
                    <span className="animate-blink text-accent">_</span></h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <TerminalWindow key={index} title={`~/${title.toLowerCase().replace(/ /g, '_')}/${exp.role.toLowerCase().replace(/ /g, '_')}`}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold font-mono text-accent">{exp.role}</h3>
                                    <p className="text-sm text-foreground/70 font-mono">{exp.company}</p>
                                </div>
                                <p className="text-sm text-foreground/70 font-mono">{exp.duration}</p>
                            </div>
                            <p className="mt-4 text-foreground/90">{exp.description}</p>
                        </TerminalWindow>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;