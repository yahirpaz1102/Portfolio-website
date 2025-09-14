import React from 'react';
import { portfolioData } from '../data/portfolioData';
import TerminalWindow from '../components/TerminalWindow';
import { GithubIcon } from '../components/Icons';

const Projects = () => (
    <section id="projects" className="py-20 px-6 bg-background-alt">
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold font-mono text-primary mb-8 text-center">featured_projects<span className="animate-blink text-accent">_</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
                {portfolioData.projects.map(project => (
                    <TerminalWindow key={project.title} title={`${project.title.toLowerCase().replace(/ /g, '_')}/`}>
                        <div className="flex flex-col h-full">
                            <h3 className="text-lg font-bold font-mono text-accent mb-2">{project.title}</h3>
                            <p className="text-sm text-foreground/70 mb-4">{project.subtitle}</p>
                            <p className="text-sm text-foreground/90 mb-4 flex-grow h-24 overflow-y-auto">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(tech => (
                                    <span key={tech} className="text-xs bg-foreground/10 text-foreground/70 px-2 py-1 rounded">
                              {tech}
                            </span>
                                ))}
                            </div>
                            <div className="mt-6">
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-accent transition-colors"
                                >
                                    <GithubIcon />
                                    View Repository
                                </a>
                            </div>
                        </div>
                    </TerminalWindow>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;