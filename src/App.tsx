
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contratar from "./pages/Contratar";
import Empresarial from "./pages/Empresarial";
import Condominios from "./pages/Condominios";
import Provedores from "./pages/Provedores";
import Casa from "./pages/residencial/Casa";
import Apartamento from "./pages/residencial/Apartamento";
import NotFound from "./pages/NotFound";

// Inicialização do cliente de consulta para React Query
const queryClient = new QueryClient();

/**
 * Componente principal da aplicação
 * Configura o roteamento e os provedores globais
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Rota da página inicial */}
          <Route path="/" element={<Index />} />
          
          {/* Rotas de contratação */}
          <Route path="/contratar/:plano" element={<Contratar />} />
          <Route path="/contratar" element={<Contratar />} />
          
          {/* Rotas de segmentos */}
          <Route path="/empresarial" element={<Empresarial />} />
          <Route path="/condominios" element={<Condominios />} />
          <Route path="/provedores" element={<Provedores />} />
          
          {/* Rotas residenciais */}
          <Route path="/residencial/casa" element={<Casa />} />
          <Route path="/residencial/apartamento" element={<Apartamento />} />
          
          {/* Rota para páginas não encontradas (404) */}
          {/* ADICIONE TODAS AS ROTAS PERSONALIZADAS ACIMA DA ROTA CURINGA "*" */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
