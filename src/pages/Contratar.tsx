
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const Contratar = () => {
  const { plano } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const form = useForm({
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      cep: "",
      endereco: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      planoEscolhido: plano || "Plano Premium",
      formaPagamento: "cartao"
    }
  });

  const onSubmit = (data: any) => {
    setSubmittedData(data);
    setIsDialogOpen(true);
    
    toast({
      title: "Solicitação enviada!",
      description: "Em breve entraremos em contato para confirmar sua contratação.",
    });
  };

  const getPlanoDetalhes = (nomePlano: string) => {
    const planos = {
      "Plano Básico": {
        velocidade: "200 Mbps",
        preco: "79,90"
      },
      "Plano Premium": {
        velocidade: "500 Mbps",
        preco: "109,90"
      },
      "Plano Ultra": {
        velocidade: "1 Gbps",
        preco: "159,90"
      }
    };
    
    return planos[nomePlano as keyof typeof planos] || planos["Plano Premium"];
  };
  
  const planoDetalhe = getPlanoDetalhes(plano || "Plano Premium");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center text-primary-500 mb-6 hover:underline"
          >
            <ArrowLeft size={16} className="mr-1" /> Voltar para página inicial
          </button>
          
          <div className="bg-white rounded-2xl p-8 shadow">
            <h1 className="text-3xl font-bold mb-2">Contratação de Plano</h1>
            <p className="text-gray-600 mb-6">Preencha os dados abaixo para contratar seu plano de internet</p>
            
            <div className="mb-8 p-4 bg-primary-50 rounded-lg">
              <h2 className="font-semibold text-xl mb-2">{plano || "Plano Premium"}</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-primary-600 font-bold text-2xl">{planoDetalhe.velocidade}</p>
                  <p className="text-sm text-gray-500">12 meses de fidelidade</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Mensalidade</p>
                  <p className="text-2xl font-bold">R$ {planoDetalhe.preco}</p>
                </div>
              </div>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="nome"
                    rules={{ required: "Nome é obrigatório" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "Email é obrigatório",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="telefone"
                    rules={{ required: "Telefone é obrigatório" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cpf"
                    rules={{ required: "CPF é obrigatório" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CPF</FormLabel>
                        <FormControl>
                          <Input placeholder="000.000.000-00" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cep"
                    rules={{ required: "CEP é obrigatório" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CEP</FormLabel>
                        <FormControl>
                          <Input placeholder="00000-000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="endereco"
                    rules={{ required: "Endereço é obrigatório" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Endereço</FormLabel>
                        <FormControl>
                          <Input placeholder="Rua, Avenida, etc" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="numero"
                    rules={{ required: "Número é obrigatório" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número</FormLabel>
                        <FormControl>
                          <Input placeholder="123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="complemento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Complemento</FormLabel>
                        <FormControl>
                          <Input placeholder="Apt, Bloco, etc (opcional)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="bairro"
                    rules={{ required: "Bairro é obrigatório" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bairro</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu bairro" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cidade"
                    rules={{ required: "Cidade é obrigatória" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cidade</FormLabel>
                        <FormControl>
                          <Input placeholder="Sua cidade" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="estado"
                    rules={{ required: "Estado é obrigatório" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estado</FormLabel>
                        <FormControl>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="AC">Acre</SelectItem>
                              <SelectItem value="AL">Alagoas</SelectItem>
                              <SelectItem value="AP">Amapá</SelectItem>
                              <SelectItem value="AM">Amazonas</SelectItem>
                              <SelectItem value="BA">Bahia</SelectItem>
                              <SelectItem value="CE">Ceará</SelectItem>
                              <SelectItem value="DF">Distrito Federal</SelectItem>
                              <SelectItem value="ES">Espírito Santo</SelectItem>
                              <SelectItem value="GO">Goiás</SelectItem>
                              <SelectItem value="MA">Maranhão</SelectItem>
                              <SelectItem value="MT">Mato Grosso</SelectItem>
                              <SelectItem value="MS">Mato Grosso do Sul</SelectItem>
                              <SelectItem value="MG">Minas Gerais</SelectItem>
                              <SelectItem value="PA">Pará</SelectItem>
                              <SelectItem value="PB">Paraíba</SelectItem>
                              <SelectItem value="PR">Paraná</SelectItem>
                              <SelectItem value="PE">Pernambuco</SelectItem>
                              <SelectItem value="PI">Piauí</SelectItem>
                              <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                              <SelectItem value="RN">Rio Grande do Norte</SelectItem>
                              <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                              <SelectItem value="RO">Rondônia</SelectItem>
                              <SelectItem value="RR">Roraima</SelectItem>
                              <SelectItem value="SC">Santa Catarina</SelectItem>
                              <SelectItem value="SP">São Paulo</SelectItem>
                              <SelectItem value="SE">Sergipe</SelectItem>
                              <SelectItem value="TO">Tocantins</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="planoEscolhido"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Plano escolhido</FormLabel>
                        <FormControl>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Plano Básico">Plano Básico - 200 Mbps</SelectItem>
                              <SelectItem value="Plano Premium">Plano Premium - 500 Mbps</SelectItem>
                              <SelectItem value="Plano Ultra">Plano Ultra - 1 Gbps</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="formaPagamento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Forma de pagamento</FormLabel>
                        <FormControl>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cartao">Cartão de Crédito</SelectItem>
                              <SelectItem value="boleto">Boleto Bancário</SelectItem>
                              <SelectItem value="pix">PIX</SelectItem>
                              <SelectItem value="debito">Débito Automático</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <div className="mt-1">
                      <input
                        type="checkbox"
                        id="termos"
                        className="mr-2"
                        required
                      />
                    </div>
                    <label htmlFor="termos" className="text-sm">
                      Concordo com os <a href="#" className="text-primary-500 underline">Termos e Condições</a> e com a <a href="#" className="text-primary-500 underline">Política de Privacidade</a> da G3NET, bem como com o <a href="#" className="text-primary-500 underline">Contrato de Fidelidade</a> de 12 meses.
                    </label>
                  </div>
                </div>
                
                <Button type="submit" className="w-full py-6 text-lg">
                  Finalizar contratação
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={24} />
              Solicitação recebida com sucesso!
            </DialogTitle>
            <DialogDescription>
              Agradecemos a sua contratação! Em breve entraremos em contato para confirmar seus dados e agendar a instalação.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Resumo da contratação:</h3>
            <p><strong>Plano:</strong> {submittedData?.planoEscolhido}</p>
            <p><strong>Nome:</strong> {submittedData?.nome}</p>
            <p><strong>Endereço:</strong> {submittedData?.endereco}, {submittedData?.numero}</p>
            <p><strong>Forma de pagamento:</strong> {
              submittedData?.formaPagamento === 'cartao' ? 'Cartão de Crédito' :
              submittedData?.formaPagamento === 'boleto' ? 'Boleto Bancário' :
              submittedData?.formaPagamento === 'pix' ? 'PIX' : 'Débito Automático'
            }</p>
          </div>
          <div className="text-center mt-4">
            <Button onClick={() => navigate('/')}>
              Voltar para página inicial
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Contratar;
