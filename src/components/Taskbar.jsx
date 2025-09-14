import React, { useState, useEffect } from 'react';

const Taskbar = ({ toggleDarkMode, darkMode }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed bottom-0 left-0 right-0 h-10 bg-window-bg border-t-2 border-t-gray-100 flex items-center justify-between px-2 z-50">
            <button className="btn-retro px-3 py-1 text-sm font-bold">
                Start
            </button>
            <div className="flex items-center gap-2">
                <button onClick={toggleDarkMode} className="btn-retro p-1">
                    {darkMode ? '☀️' : '🌙'}
                </button>
                <div className="btn-retro px-3 py-1 text-sm">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
            </div>
        </div>
    );
};

export default Taskbar;