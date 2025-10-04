import React, { useRef, useState } from 'react';
import { CircleCheck } from 'lucide-react';

interface Position {
    x: number;
    y: number;
}

interface SpotlightCardProps {
    title: string;
    description: string;
    className?: string;
    spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    title,
    description,
    className = '',
    spotlightColor = 'rgba(250, 53, 115, 1)',
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState<number>(0);

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!divRef.current || isFocused) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(0.6);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => setOpacity(0.2);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative w-90 h-50 rounded-lg border border-neutral-800 flex flex-col justify-center items-center p-5 ${className}`}
        >
            {/* Spotlight effect */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
                style={{
                    opacity,
                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
                }}
            />

            {/* Ícone no topo */}
            <div className="flex items-center gap-2">
                <CircleCheck className="w-10 h-10 text-white" />
            </div>

            {/* Título e descrição */}
            <div className="flex flex-col items-center text-center">
                <h3 className="text-white font-['Loos-Normal'] font-bold text-lg">{title}</h3>
                <p className="text-white text-sm">{description}</p>
            </div>
        </div>
    );
};

export default SpotlightCard;
