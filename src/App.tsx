import MainPage from "@/pages"

import { ThemeProvider } from "@/components/theme-provider"
import './App.css'

function App() {

  return (
    <ThemeProvider defaultTheme="dark">
      <MainPage />
    </ThemeProvider>
  )
}

export default App