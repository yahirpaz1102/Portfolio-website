import React from 'react';

const BackgroundGrid = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern animate-pan-grid"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent"></div>
        </div>
    );
};

export default BackgroundGrid;