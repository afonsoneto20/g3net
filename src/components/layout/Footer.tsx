
/**
 * Componente de rodapé
 * Exibe informações de contato, links úteis e redes sociais
 * Mantém consistência visual em todas as páginas
 */
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col">
              <img 
                src="/logo.png" 
                alt="G3NET Fiber Logo" 
                className="h-12 w-auto mb-2"
              />
              <div className="text-lg font-medium text-blue-100">Fiber</div>
            </div>
            <p className="text-blue-100 mb-6 mt-4">
              Conectando você ao que realmente importa. Internet rápida, estável e com o melhor suporte.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Planos</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Cobertura</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Suporte</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos serviços</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Internet Residencial</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Internet Empresarial</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Telefonia</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">TV por assinatura</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Aplicativo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Av. Principal, 1000, Centro, São Paulo - SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-blue-100">(11) 3000-1000</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-blue-100">contato@g3net.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-400/30 mt-12 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} G3NET. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
