import useDarkMode from '../hooks/useDarkMode.ts'

export default function ToggleDarkMode() {
  const [theme, useTheme] = useDarkMode()
  const toggleTheme = () => useTheme() 
  return (
    <div class="fixed top-4 right-4">
        <p class="text-light italic text-xl cursor-pointer" onClick={toggleTheme}>
          { theme ? 'dark' : 'light'}
        </p>
    </div>
  )
}

