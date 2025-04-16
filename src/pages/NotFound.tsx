/**
 * Página 404 - Não Encontrado
 * Exibida quando o usuário tenta acessar uma rota inexistente
 * Registra tentativas de acesso a rotas inválidas no console
 */
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * Página 404 - Não Encontrado
 * Exibida quando o usuário tenta acessar uma rota que não existe
 */
const NotFound = () => {
  const location = useLocation();

  // Registra no console a tentativa de acesso a uma rota inexistente
  useEffect(() => {
    console.error(
      "Erro 404: Usuário tentou acessar uma rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Ops! Página não encontrada</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
