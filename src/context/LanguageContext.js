import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('portfolio-lang') || 'id';
    });

    useEffect(() => {
        localStorage.setItem('portfolio-lang', lang);
    }, [lang]);

    const toggleLang = () => {
        setLang((prev) => (prev === 'id' ? 'en' : 'id'));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
