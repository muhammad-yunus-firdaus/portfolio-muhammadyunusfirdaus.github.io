import React, { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setFadeOut(true), 1200);
        const timer2 = setTimeout(() => setVisible(false), 1800);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#0a0f1c] transition-opacity duration-600 ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <div className="flex flex-col items-center gap-4">
                {/* Logo */}
                <img
                    src={`${process.env.PUBLIC_URL}/logo.png`}
                    alt="Logo"
                    className="w-16 h-16 object-contain animate-pulse-logo"
                    style={{ filter: 'brightness(0) invert(1)' }}
                />
                {/* Loading bar */}
                <div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-loading-bar" />
                </div>
            </div>
        </div>
    );
}
