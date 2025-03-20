
import React from 'react';
import { Button } from '../ui/button';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="highlight-chip mb-4">
            <Phone size={14} className="mr-1" /> Fale conosco
          </div>
          <h2 className="mb-4">Entre em contato com a G3NET</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos sempre prontos para atender você e tirar todas as suas dúvidas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-up">
            <form className="bg-white rounded-xl shadow-card p-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <select
                  id="subject"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="contratar">Contratar plano</option>
                  <option value="suporte">Suporte técnico</option>
                  <option value="duvidas">Dúvidas</option>
                  <option value="reclamacao">Reclamação</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Digite sua mensagem"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full btn-hover">
                Enviar mensagem
              </Button>
            </form>
          </div>
          
          <div className="animate-fade-up animate-delay-200">
            <div className="bg-gradient-blue-light p-8 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Informações de contato</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-primary-500 text-white rounded-full p-3 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Telefone</h4>
                    <p className="text-gray-700 mt-1">(11) 3000-1000</p>
                    <p className="text-gray-600 text-sm">Seg-Sex: 8h às 20h | Sáb: 8h às 16h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-500 text-white rounded-full p-3 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">E-mail</h4>
                    <p className="text-gray-700 mt-1">contato@g3net.com.br</p>
                    <p className="text-gray-600 text-sm">Retorno em até 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-500 text-white rounded-full p-3 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Endereço</h4>
                    <p className="text-gray-700 mt-1">Av. Principal, 1000</p>
                    <p className="text-gray-600">Centro, São Paulo - SP</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white p-3 rounded-full text-primary-500 hover:bg-primary-50 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-white p-3 rounded-full text-primary-500 hover:bg-primary-50 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-white p-3 rounded-full text-primary-500 hover:bg-primary-50 transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
