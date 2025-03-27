
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Condominios from './pages/Condominios';
import NotFound from './pages/NotFound';

/**
 * Componente principal da aplicação
 * Define as rotas disponíveis na aplicação e qual componente renderizar para cada rota
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Index />} />
        
        {/* Rota para a página de condomínios */}
        <Route path="/condominios" element={<Condominios />} />
        
        {/* Rota de fallback para qualquer URL não encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
