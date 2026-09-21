import { StrictMode } from 'react'
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { ColorModeProvider } from "./components/ui/color-mode";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
)


