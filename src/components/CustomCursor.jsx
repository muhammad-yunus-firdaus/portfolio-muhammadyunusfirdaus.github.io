import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const visible = useRef(false);
    const rafId = useRef(null);

    useEffect(() => {
        // Don't show on touch devices
        if ('ontouchstart' in window) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        const handleMouseMove = (e) => {
            pos.current = { x: e.clientX, y: e.clientY };
            if (!visible.current) {
                visible.current = true;
                dot.style.opacity = '1';
                ring.style.opacity = '1';
            }
            // Dot follows immediately
            dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
        };

        const handleMouseLeave = () => {
            visible.current = false;
            dot.style.opacity = '0';
            ring.style.opacity = '0';
        };

        const handleMouseDown = () => {
            ring.style.width = '28px';
            ring.style.height = '28px';
            ring.style.borderColor = 'rgba(59, 130, 246, 0.6)';
        };

        const handleMouseUp = () => {
            ring.style.width = '36px';
            ring.style.height = '36px';
            ring.style.borderColor = 'rgba(59, 130, 246, 0.3)';
        };

        // Ring follows with smooth lag
        const animateRing = () => {
            ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
            ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
            ring.style.transform = `translate(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px)`;
            rafId.current = requestAnimationFrame(animateRing);
        };

        // Enlarge ring on interactive elements
        const handleHoverIn = () => {
            ring.style.width = '48px';
            ring.style.height = '48px';
            ring.style.borderColor = 'rgba(59, 130, 246, 0.5)';
            dot.style.background = 'rgba(59, 130, 246, 0.8)';
        };

        const handleHoverOut = () => {
            ring.style.width = '36px';
            ring.style.height = '36px';
            ring.style.borderColor = 'rgba(59, 130, 246, 0.3)';
            dot.style.background = 'rgba(255, 255, 255, 0.9)';
        };

        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        rafId.current = requestAnimationFrame(animateRing);

        // Observe interactive elements
        const attachHoverListeners = () => {
            const interactives = document.querySelectorAll('a, button, [role="button"], .glass-card');
            interactives.forEach((el) => {
                el.addEventListener('mouseenter', handleHoverIn);
                el.addEventListener('mouseleave', handleHoverOut);
            });
            return interactives;
        };

        // Delay to let DOM render
        const timer = setTimeout(() => {
            attachHoverListeners();
        }, 1000);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            cancelAnimationFrame(rafId.current);
            clearTimeout(timer);
        };
    }, []);

    // Don't render on touch/mobile
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            {/* Small dot — follows cursor instantly */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0"
                style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    transition: 'opacity 0.3s, background 0.3s',
                }}
            />
            {/* Ring — follows with smooth lag */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 pointer-events-none z-[9998] opacity-0"
                style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(59, 130, 246, 0.3)',
                    transition: 'width 0.3s, height 0.3s, border-color 0.3s, opacity 0.3s',
                }}
            />
        </>
    );
}
