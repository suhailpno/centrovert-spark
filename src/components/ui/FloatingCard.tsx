import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
    children: React.ReactNode;
    className?: string;
    depth?: number;
}

export const FloatingCard = ({ children, className, depth = 1 }: FloatingCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 20 * depth;
        const y = (e.clientY - top - height / 2) / 20 * depth;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn("transition-transform duration-200 ease-out", className)}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            {children}
        </div>
    );
};
