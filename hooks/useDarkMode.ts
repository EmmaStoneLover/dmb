import { useState, useEffect } from "preact/hooks";

export default function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState( true )
    const toggleDarkMode = () => { setIsDarkMode(!isDarkMode) }
    useEffect(() => {
        const html = window.document.documentElement
        const prevTheme = isDarkMode ? 'light' : 'dark'
        html.classList.remove(prevTheme)
        const nextTheme = isDarkMode ? 'dark' : 'light'
        html.classList.add(nextTheme)
        localStorage.theme = nextTheme
    }, [isDarkMode])
    return [isDarkMode, toggleDarkMode] as const
}
