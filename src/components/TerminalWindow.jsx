import React from 'react';

const TerminalWindow = ({ title, children, customClasses }) => (
    <div className={`border-2 border-primary/50 bg-window-bg/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${customClasses}`}>
        <div className="bg-primary/20 text-primary px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <p className="text-sm font-mono">{title}</p>
            <div className="w-12"></div>
        </div>
        <div className="p-6">
            {children}
        </div>
    </div>
);

export default TerminalWindow;