import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "compra",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          <Card className="text-center p-8">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-foreground mb-4" data-testid="text-success">
              Mensagem Enviada com Sucesso!
            </h2>
            <p className="text-muted-foreground mb-6">
              Obrigado pelo contato! Nossa equipe entrará em contato em breve.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="default"
              className="hover-elevate active-elevate-2"
              data-testid="button-send-another"
            >
              Enviar Outra Mensagem
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Entre em Contato
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você. Preencha o formulário ou use nossos canais de contato
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Envie sua Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Seu nome" 
                              {...field} 
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="seu@email.com" 
                              {...field} 
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone (opcional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(00) 00000-0000" 
                              {...field} 
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Interesse</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="space-y-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="compra" id="compra" data-testid="radio-compra" />
                                <Label htmlFor="compra" className="font-normal cursor-pointer">
                                  Compra de Animais
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="venda" id="venda" data-testid="radio-venda" />
                                <Label htmlFor="venda" className="font-normal cursor-pointer">
                                  Venda de Animais
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="parceria" id="parceria" data-testid="radio-parceria" />
                                <Label htmlFor="parceria" className="font-normal cursor-pointer">
                                  Parceria/Negócios
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="outros" id="outros" data-testid="radio-outros" />
                                <Label htmlFor="outros" className="font-normal cursor-pointer">
                                  Outros Assuntos
                                </Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Conte-nos como podemos ajudá-lo..."
                              className="min-h-32 resize-none"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full hover-elevate active-elevate-2"
                      disabled={mutation.isPending}
                      data-testid="button-submit"
                    >
                      {mutation.isPending ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Localização</div>
                      <div className="text-sm text-muted-foreground">
                        Peritoró, Maranhão<br />
                        BR-316<br />
                        Criatório Senepol
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Telefone</div>
                      <div className="text-sm text-muted-foreground">
                        (99) 98835-7918<br />
                        Yuri Corrêa
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">
                        contato@peixeeboi.com.br
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Horário de Atendimento</div>
                      <div className="text-sm text-muted-foreground">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Visite Nossa Fazenda
                </h3>
                <p className="text-muted-foreground mb-4">
                  Agende uma visita para conhecer nossas instalações e nossos animais pessoalmente. 
                  Nossa equipe terá prazer em recebê-lo!
                </p>
                <Button variant="default" className="hover-elevate active-elevate-2" data-testid="button-schedule">
                  Agendar Visita
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
