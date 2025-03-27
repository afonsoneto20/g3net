
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

/**
 * Componente de barra de navegação
 * Responsável por exibir links de navegação e controlar o menu em dispositivos móveis
 */
const Navbar = () => {
  // Estado para controlar a visibilidade do menu em dispositivos móveis
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Hook para acessar informações sobre a rota atual
  const location = useLocation();
  
  // Função para verificar se um link está ativo com base na rota atual
  const isActive = (path: string) => location.pathname === path;

  // Links de navegação do site
  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Planos', href: '/planos' },
    { name: 'Condomínios', href: '/condominios' },
    { name: 'Cobertura', href: '/cobertura' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <nav className="fixed w-full z-30 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo e nome da empresa */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              G3NET
            </Link>
          </div>
          
          {/* Links de navegação em desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Botão de login em desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cliente">
              <Button variant="outline" size="sm">
                Área do Cliente
              </Button>
            </Link>
          </div>
          
          {/* Botão de menu para dispositivos móveis */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu para dispositivos móveis */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.href)
                  ? 'text-primary-600'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/cliente"
            className="block px-3 py-2 mt-4 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700 text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Área do Cliente
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
