
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "A G3NET transformou a conectividade do nosso condomínio. Os moradores estão muito satisfeitos com a velocidade e estabilidade.",
      author: "Carlos Mendes",
      role: "Síndico do Residencial Parque Verde"
    },
    {
      quote: "Processo de instalação extremamente organizado e profissional. O suporte técnico é rápido e eficiente quando precisamos.",
      author: "Mariana Silva",
      role: "Administradora do Condomínio Alta Vista"
    },
    {
      quote: "Nosso condomínio ganhou mais valor no mercado após a instalação da rede de fibra ótica da G3NET. Recomendo a todos.",
      author: "Roberto Almeida",
      role: "Síndico do Edifício Costa Azul"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">O que dizem nossos clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Condomínios que já contam com nossa solução de internet
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-fade-up border border-gray-100 shadow hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary-500">
                  <svg width="45" height="36" className="fill-current">
                    <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                  </svg>
                </div>
                <p className="italic text-gray-600 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
