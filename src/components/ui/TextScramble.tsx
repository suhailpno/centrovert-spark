import { useEffect, useState } from "react";

interface TextScrambleProps {
    text: string;
    className?: string;
    duration?: number;
    characterSet?: string;
}

export const TextScramble = ({
    text,
    className = "",
    duration = 1000,
    characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
}: TextScrambleProps) => {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);

    const scramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);

        let iteration = 0;
        const maxIterations = text.length;
        const intervalDuration = duration / maxIterations;

        const interval = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return characterSet[Math.floor(Math.random() * characterSet.length)];
                    })
                    .join("")
            );

            if (iteration >= maxIterations) {
                clearInterval(interval);
                setIsScrambling(false);
                setDisplayText(text);
            }

            iteration += 1 / 3; // Slower reveal for effect
        }, intervalDuration);
    };

    useEffect(() => {
        scramble();
    }, []);

    return (
        <span
            className={className}
            onMouseEnter={scramble}
            style={{ fontFamily: "monospace" }} // Optional: ensures consistent width during scramble
        >
            {displayText}
        </span>
    );
};
