import React, { useRef, useEffect } from 'react';

const DigitalRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const columns = Math.floor(width / 20);
        const drops = Array(columns).fill(1);
        const characters = '01';


        const getPrimaryColor = () => {
            return getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
        };

        const draw = () => {

            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            if (document.documentElement.classList.contains('dark')) {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            } else {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            }

            ctx.fillRect(0, 0, width, height);


            const primaryColor = `hsl(${getPrimaryColor()})`;
            ctx.fillStyle = primaryColor;
            ctx.font = '15px Fira Code';

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const animationId = setInterval(draw, 33);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);


        return () => {
            clearInterval(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full z-0 opacity-20 dark:opacity-30"
        />
    );
};

export default DigitalRain;