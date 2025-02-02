/**
 *  @copyright 2025 codewithdeep
    @license Apache-2.0
*/ 

/**
 *  Node modules
 */ 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'lenis/dist/lenis.css'
/**
 *  Components
 */ 
import App from './App.jsx'

/**
 *  CSS Link
 */ 
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
