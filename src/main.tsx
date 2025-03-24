
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/**
 * Ponto de entrada da aplicação React
 * Renderiza o componente App no elemento raiz do DOM
 */
createRoot(document.getElementById("root")!).render(<App />);
