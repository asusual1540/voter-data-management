import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
    const [count, setCount] = useState<number>(180);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (count > 0) {
            timer = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [count]);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        const formattedMinutes = minutes > 0 ? `${minutes} মিনিট` : '';
        const formattedSeconds = `${seconds} সেকেন্ড`;
        return `${formattedMinutes} ${formattedSeconds}`;
    };

    return (
        <div>
            <h1>{formatTime(count)}</h1>
        </div>
    );
};

export default CountdownTimer;
