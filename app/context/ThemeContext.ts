'use client'

import { createContext } from 'react'

type ContextType = {
    currentTheme: string;
    toggleTheme: (newTheme: 'light' | 'dark') => void;
};

const defaultValue = {
    currentTheme: 'light',
    toggleTheme: () => { },
}

export const ThemeContext = createContext<ContextType>(defaultValue)