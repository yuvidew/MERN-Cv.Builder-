import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './components/ThemeProvider'
import HomePage from './Home/HomePage'
import { Suspense, lazy } from 'react'
const Spinner  = lazy(() => import('./components/ui/Spinner'))

function App() {

  return (
    <ThemeProvider  defaultTheme="dark" storageKey="vite-ui-theme">
    <Suspense fallback = {<div className=' flex items-center justify-center h-[100vh]'> <Spinner/> </div>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<HomePage/>}  />
        </Routes>
      </BrowserRouter>
    </Suspense>
    </ThemeProvider>
  )
}

export default App
