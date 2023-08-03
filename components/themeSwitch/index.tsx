'use client'

import React, { useContext } from "react"
import { ThemeContext } from "@/app/context/ThemeContext"

const ThemeSwitch = () => {
    const { currentTheme, toggleTheme } = useContext(ThemeContext)
    
    return (
        <button
            style={{
                padding: 5,
                borderRadius: 5,
                color: currentTheme === 'light' ? 'white' : 'black',
                background: currentTheme === 'light' ? 'black' : 'white',
            }}
            onClick={() => toggleTheme(currentTheme === 'light' ? 'dark' : 'light')}
        >
            Go {currentTheme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
        </button>
    )
}

export default ThemeSwitch