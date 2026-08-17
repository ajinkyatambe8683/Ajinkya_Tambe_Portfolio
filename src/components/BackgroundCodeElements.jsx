import React from 'react';

const codeSnippets = [
    { text: 'const [state, setState] = useState(null);', top: '12%', left: '8%', size: '0.85rem', delay: '0s', duration: '22s' },
    { text: 'import React, { useState } from "react";', top: '25%', right: '10%', size: '0.9rem', delay: '3s', duration: '28s' },
    { text: '<div className="glass-panel">', top: '40%', left: '15%', size: '0.8rem', delay: '1.5s', duration: '20s' },
    { text: 'export default App;', top: '65%', right: '8%', size: '0.95rem', delay: '5s', duration: '24s' },
    { text: 'const handleScroll = (e) => { ... };', top: '80%', left: '12%', size: '0.85rem', delay: '2s', duration: '26s' },
    { text: 'npm run dev', top: '5%', right: '35%', size: '0.75rem', delay: '4s', duration: '18s' },
    { text: 'git commit -m "feat: add aesthetics"', top: '92%', right: '25%', size: '0.8rem', delay: '6s', duration: '30s' },
    { text: 'map((item, idx) => ( ... ))', top: '55%', left: '5%', size: '0.85rem', delay: '0.5s', duration: '23s' },
    { text: 'console.log("system active");', top: '33%', left: '42%', size: '0.75rem', delay: '3.5s', duration: '21s' },
    { text: 'box-shadow: 0 4px 20px var(--glow);', top: '72%', left: '38%', size: '0.8rem', delay: '1.8s', duration: '29s' },
    { text: 'const response = await fetch(url);', top: '48%', right: '15%', size: '0.88rem', delay: '2.5s', duration: '25s' },
    { text: 'interface Developer { name: string; }', top: '85%', right: '45%', size: '0.8rem', delay: '4.5s', duration: '27s' },
    { text: 'const result = data.filter(x => x.active);', top: '18%', left: '28%', size: '0.82rem', delay: '0.8s', duration: '22s' },
    { text: 'className="scroll-reveal fade-up"', top: '8%', left: '5%', size: '0.8rem', delay: '1s', duration: '24s' },
    { text: '{/* Parallax Liquid Gradient Background */}', top: '58%', right: '48%', size: '0.78rem', delay: '3s', duration: '27s' }
];

const BackgroundCodeElements = () => {
    return (
        <div className="bg-code-container">
            {codeSnippets.map((snippet, idx) => {
                const style = {
                    position: 'absolute',
                    top: snippet.top,
                    left: snippet.left || 'auto',
                    right: snippet.right || 'auto',
                    fontSize: snippet.size,
                    animationDelay: snippet.delay,
                    animationDuration: snippet.duration,
                    fontFamily: 'monospace',
                };
                return (
                    <div 
                        key={idx} 
                        className="bg-code-item"
                        style={style}
                    >
                        {snippet.text}
                    </div>
                );
            })}
        </div>
    );
};

export default BackgroundCodeElements;
