import React, { useEffect } from 'react';
import AOS from 'aos';

/**
 * LazySection — simple scroll anchor wrapper.
 *
 * Intersection-observer lazy rendering has been intentionally removed because
 * smooth-scrolling into a zero-height placeholder (while the real content
 * hasn't mounted yet) causes the scroll animation to fight against rapidly
 * changing page layout, which freezes the browser tab.
 *
 * React.lazy + Suspense in App.js still handles JS bundle code-splitting;
 * this component only provides the `id` anchor and AOS refresh trigger.
 */
export default function LazySection({ children, id }) {
    useEffect(() => {
        // Give AOS a tick to discover newly-mounted elements.
        const timer = setTimeout(() => {
            AOS.refresh();
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id={id}>
            {children}
        </div>
    );
}

