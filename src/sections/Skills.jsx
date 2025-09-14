import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import TerminalWindow from '../components/TerminalWindow';

const Skills = () => {
    const [activeTab, setActiveTab] = useState(portfolioData.skills[0].category);

    const activeSkillGroup = portfolioData.skills.find(group => group.category === activeTab);

    return (
        <section id="skills" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold font-mono text-primary mb-8 text-center">skills_and_technologies<span className="animate-blink text-accent">_</span></h2>
                <TerminalWindow title="~/skills/">
                    <div className="flex flex-wrap justify-center mb-6 border-b-2 border-primary/20">
                        {portfolioData.skills.map(group => (
                            <button
                                key={group.category}
                                onClick={() => setActiveTab(group.category)}
                                className={`px-3 py-2 font-mono text-sm transition-all duration-300 outline-none focus:outline-none ${
                                    activeTab === group.category
                                        ? 'bg-primary/20 text-accent border-b-2 border-accent -mb-px'
                                        : 'text-foreground/70 hover:text-primary'
                                }`}
                            >
                                {group.category}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center min-h-[100px] items-center">
                        {activeSkillGroup && activeSkillGroup.list.map(skill => (
                            <div key={skill} className="bg-primary/20 text-primary font-mono px-4 py-2 rounded-md text-sm animate-fade-in">
                                {skill}
                            </div>
                        ))}
                    </div>
                </TerminalWindow>
            </div>
        </section>
    );
};

export default Skills;