
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/**
 * Ponto de entrada da aplicação React
 * Utiliza o createRoot do React 18+ para melhor performance
 * Renderiza o componente App no elemento root do DOM
 */
createRoot(document.getElementById("root")!).render(<App />);

