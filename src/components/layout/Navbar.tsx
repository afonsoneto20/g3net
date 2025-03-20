
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Planos', href: '#services' },
    { name: 'Vantagens', href: '#features' },
    { name: 'Cobertura', href: '#coverage' },
    { name: 'Contato', href: '#contact' },
    { name: 'Empresarial', href: '/empresarial' },
    { name: 'Condomínios', href: '/condominios' },
    { name: 'Provedores', href: '/provedores' },
    { name: 'Contratar', href: '/contratar' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">G3NET</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <Button 
              variant="default"
              size="sm"
              className="gap-2"
            >
              <PhoneCall size={16} />
              Ligue agora
            </Button>
          </div>
          
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 hover:text-primary-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-gray-700 hover:text-primary-500 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-3 text-gray-700 hover:text-primary-500 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button 
              variant="default"
              className="w-full mt-4 gap-2"
            >
              <PhoneCall size={16} />
              Ligue agora
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
