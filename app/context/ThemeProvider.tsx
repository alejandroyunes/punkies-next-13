'use client'
 
import React, {  useState, useEffect, FC, ReactNode  } from 'react'
import { ThemeContext } from './ThemeContext'
 
const ThemeContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {

  const localTheme = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;

  const [theme, setTheme] = useState(localTheme || 'light')

  const toggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    if (theme === 'light'){
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
  }, [theme])

  return <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContextWrapper