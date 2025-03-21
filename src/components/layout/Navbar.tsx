
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    { 
      name: 'Residencial', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Casa', href: '/residencial/casa' },
        { name: 'Apartamento', href: '/residencial/apartamento' }
      ]
    },
    { name: 'Empresarial', href: '/empresarial' },
    { name: 'Condomínios', href: '/condominios' },
    { name: 'Provedores', href: '/provedores' }
  ];

  const internetTypes = [
    { 
      title: 'Residencial', 
      description: 'Internet fibra ótica de alta velocidade para sua casa',
      hasOptions: true,
      options: [
        { name: 'Casa', href: '/residencial/casa' },
        { name: 'Apartamento', href: '/residencial/apartamento' }
      ]
    },
    { 
      title: 'Empresarial', 
      description: 'Soluções de conectividade para empresas de todos os portes',
      href: '/empresarial' 
    },
    { 
      title: 'Condomínios', 
      description: 'Internet para condomínios residenciais e comerciais',
      href: '/condominios' 
    },
    { 
      title: 'Provedores', 
      description: 'Soluções para outros provedores de internet',
      href: '/provedores' 
    }
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
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="text-gray-700 hover:text-primary-500 font-medium transition-colors flex items-center">
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.dropdownItems?.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link to={item.href}>{item.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
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
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" size="sm">
                  Contratar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Escolha o tipo de internet</DialogTitle>
                  <DialogDescription>
                    Selecione o tipo de internet que melhor atende às suas necessidades
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                  {internetTypes.map((type) => (
                    <Card key={type.title} className="cursor-pointer hover:border-primary transition-all">
                      {type.hasOptions ? (
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{type.title}</CardTitle>
                          <CardContent className="p-0 pt-2">
                            <CardDescription>{type.description}</CardDescription>
                            <div className="mt-3 flex flex-col space-y-2">
                              {type.options?.map((option) => (
                                <Link 
                                  key={option.name}
                                  to={option.href} 
                                  className="px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                                >
                                  {option.name}
                                </Link>
                              ))}
                            </div>
                          </CardContent>
                        </CardHeader>
                      ) : (
                        <Link to={type.href}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{type.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription>{type.description}</CardDescription>
                          </CardContent>
                        </Link>
                      )}
                    </Card>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
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
              link.hasDropdown ? (
                <div key={link.name} className="py-2">
                  <div className="font-medium text-gray-700 mb-2">{link.name}</div>
                  <div className="pl-4 space-y-2">
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block py-2 text-gray-600 hover:text-primary-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="default"
                  className="w-full mt-4"
                >
                  Contratar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Escolha o tipo de internet</DialogTitle>
                  <DialogDescription>
                    Selecione o tipo de internet que melhor atende às suas necessidades
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4 py-4">
                  {internetTypes.map((type) => (
                    <Card key={type.title} className="cursor-pointer hover:border-primary transition-all">
                      {type.hasOptions ? (
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{type.title}</CardTitle>
                          <CardContent className="p-0 pt-2">
                            <CardDescription>{type.description}</CardDescription>
                            <div className="mt-3 flex flex-col space-y-2">
                              {type.options?.map((option) => (
                                <Link 
                                  key={option.name}
                                  to={option.href} 
                                  onClick={() => setIsMenuOpen(false)}
                                  className="px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                                >
                                  {option.name}
                                </Link>
                              ))}
                            </div>
                          </CardContent>
                        </CardHeader>
                      ) : (
                        <Link to={type.href} onClick={() => setIsMenuOpen(false)}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{type.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription>{type.description}</CardDescription>
                          </CardContent>
                        </Link>
                      )}
                    </Card>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
