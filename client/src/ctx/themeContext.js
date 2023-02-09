import { useState, useEffect, createContext, useContext } from 'react'

const defaultContext = 'light'

export const ThemeContext = createContext(defaultContext)

export const ThemeProvider = props => {
    const [theme, setTheme] = useState(defaultContext)

    console.log(theme)

    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.add('light')
            document.body.classList.remove('dark')
        } else {
            document.body.classList.add('dark')
            document.body.classList.remove('light')
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)