import MainPage from "@/pages"
import { ThemeProvider } from "@/components/theme-provider"
import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">    
        <MainPage />
      </ThemeProvider>   
    </QueryClientProvider>
  )
}

export default App