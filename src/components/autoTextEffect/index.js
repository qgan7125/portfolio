import { useState, useEffect } from 'react';

const AutoTexEffect = ({ text=[], speed = 4 }) => {
    const [textEffect, setText] = useState("");

    useEffect(() => {
        let idx = 1;
        let direction = 1;
        let textIdx = 0;
        let currentText = text[textIdx];

        const interval = setInterval(() => {
            if (idx === 0) {
                direction = 1;
                textIdx = (textIdx + 1) % text.length;
                currentText = text[textIdx];
            }

            if (idx > currentText.length) {
                direction = -1;
            }

            setText(currentText.slice(0, idx));
            idx += direction;

        }, 300 / speed);

        return () => clearInterval(interval);
    }, [text, speed])

    return (
        textEffect
    )
}

export default AutoTexEffect;