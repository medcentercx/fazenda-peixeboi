import { Hero } from "@/components/Hero";
import { AnimalCard } from "@/components/AnimalCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "wouter";
import { ArrowRight, Leaf, Heart, Award, TrendingUp, Shield, Quote, Send, Handshake, Users, Target } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { Animal } from "@shared/schema";
import farmFacilities from "@assets/image_1762441620741.png";
import rancherImage from "@assets/image_1762441815679.png";
import historyVideo from "@assets/historia-fazenda.mp4";

const testimonials = [
  {
    name: "Carlos Eduardo Rodrigues",
    location: "Goiás",
    role: "Pecuarista",
    comment: "Adquiri 3 touros Senepol da Fazenda Peixe Boi há 2 anos e os resultados foram excelentes. Animais rústicos, de fácil manejo e com ótima genética. A qualidade é incomparável!",
    initials: "CR",
    color: "bg-blue-600"
  },
  {
    name: "Ana Paula Santos",
    location: "Mato Grosso do Sul",
    role: "Produtora Rural",
    comment: "Como mulher no agronegócio, encontrei na Fazenda Peixe Boi não apenas animais de primeira qualidade, mas também respeito e profissionalismo. Minha fazenda cresceu 40% após investir nos animais deles.",
    initials: "AS",
    color: "bg-purple-600"
  },
  {
    name: "José Antônio Silva",
    location: "Bahia",
    role: "Grande Pecuarista",
    comment: "Com mais de 50 anos de experiência na pecuária, posso afirmar: a Fazenda Peixe Boi trabalha com seriedade. Comprei um lote de 20 animais e todos vieram com excelente documentação e saúde impecável.",
    initials: "JS",
    color: "bg-orange-600"
  },
  {
    name: "Mariana Costa Lima",
    location: "Tocantins",
    role: "Jovem Empreendedora Rural",
    comment: "Comecei minha criação há 3 anos e a Fazenda Peixe Boi foi fundamental para o sucesso do meu negócio. Animais saudáveis, assistência pós-venda excepcional e preços justos.",
    initials: "ML",
    color: "bg-pink-600"
  },
  {
    name: "Francisco Almeida",
    location: "Pará",
    role: "Criador de Senepol",
    comment: "A raça Senepol mudou minha fazenda e encontrei os melhores exemplares na Peixe Boi. Animais precoces, dóceis e muito lucrativos. Já indiquei para vários colegas!",
    initials: "FA",
    color: "bg-green-700"
  },
  {
    name: "Rita de Cássia Oliveira",
    location: "São Paulo",
    role: "Proprietária Rural",
    comment: "Aos 68 anos, decidi investir em pecuária de qualidade e a Fazenda Peixe Boi me surpreendeu. Atendimento atencioso, animais excelentes e toda orientação necessária. Estou muito satisfeita!",
    initials: "RO",
    color: "bg-teal-600"
  }
];

export default function Home() {
  const { data: animals, isLoading, isError, error } = useQuery<Animal[]>({
    queryKey: ["/api/animals"],
  });

  const featuredAnimals = animals?.filter(a => a.featured === "yes").slice(0, 3) || [];

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    location: "",
    comment: ""
  });

  const handleSubmitTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pelo seu depoimento! Ele será revisado e publicado em breve.");
    setNewTestimonial({ name: "", location: "", comment: "" });
  };

  return (
    <div>
      <Hero />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="text-hero-title">
              Pecuária de Excelência em Peritoró, Maranhão
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
              Tradição, qualidade e confiança na compra e venda de bovinos, equinos, ovinos e caprinos. 
              Animais selecionados para o sucesso do seu negócio.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link href="/catalogo" data-testid="button-hero-catalog">
                <Button size="lg" variant="default">
                  Ver Catálogo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contato" data-testid="button-hero-contact">
                <Button size="lg" variant="outline">
                  Falar com Vendedor
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-3" data-testid="stat-experience">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">30+ Anos</div>
                  <div className="text-sm text-muted-foreground">de Tradição</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3" data-testid="stat-animals">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">5000+</div>
                  <div className="text-sm text-muted-foreground">Animais Comercializados</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3" data-testid="stat-quality">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Qualidade Garantida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-history-title">
              Nossa História
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça a trajetória de mais de 30 anos da Fazenda Peixe Boi
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-md overflow-hidden shadow-lg">
              <video
                controls
                className="w-full h-full object-cover"
                data-testid="video-history"
              >
                <source src={historyVideo} type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
          </div>
        </div>
      </section>

      {featuredAnimals.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-featured-title">
                Animais em Destaque
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Seleção premium de animais de alta qualidade disponíveis agora
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {isLoading ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="h-96 bg-card animate-pulse rounded-md" />
                ))
              ) : isError ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-destructive text-lg mb-2">Erro ao carregar animais</p>
                  <p className="text-muted-foreground">{error instanceof Error ? error.message : "Tente novamente mais tarde"}</p>
                </div>
              ) : featuredAnimals.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground text-lg">Nenhum animal em destaque no momento</p>
                </div>
              ) : (
                featuredAnimals.map(animal => (
                  <AnimalCard key={animal.id} animal={animal} />
                ))
              )}
            </div>

            <div className="text-center">
              <Link href="/catalogo">
                <Button size="lg" variant="outline" className="hover-elevate active-elevate-2" data-testid="button-view-all">
                  Ver Todo o Catálogo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Por Que Escolher a Fazenda Peixe Boi?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Com mais de 30 anos de experiência no agronegócio, oferecemos animais de qualidade superior 
                com toda a documentação e suporte necessários para o sucesso do seu negócio.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Manejo Sustentável</h3>
                    <p className="text-muted-foreground">
                      Práticas modernas de pecuária com respeito ao meio ambiente e bem-estar animal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Cuidado Premium</h3>
                    <p className="text-muted-foreground">
                      Acompanhamento veterinário constante e alimentação balanceada de qualidade.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Certificações</h3>
                    <p className="text-muted-foreground">
                      Todos os animais com documentação completa e certificados de procedência.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/sobre" className="inline-block mt-8">
                <Button variant="default" className="hover-elevate active-elevate-2" data-testid="button-learn-more">
                  Saiba Mais Sobre Nós
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img 
                src={farmFacilities} 
                alt="Instalações da Fazenda Peixe Boi"
                className="rounded-md shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Depoimentos reais de pecuaristas de todo o Brasil que confiaram na qualidade da Fazenda Peixe Boi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate" data-testid={`testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-semibold text-sm">{testimonial.initials}</span>
                    </div>
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Deixe o Seu Comentário</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Você também fez negócio com a Fazenda Peixe Boi? Compartilhe sua experiência!
              </p>
              <form onSubmit={handleSubmitTestimonial} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Seu Nome
                  </label>
                  <Input
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={newTestimonial.name}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                    required
                    data-testid="input-testimonial-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Localização (Cidade/Estado)
                  </label>
                  <Input
                    type="text"
                    placeholder="Ex: São Paulo, SP"
                    value={newTestimonial.location}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, location: e.target.value })}
                    required
                    data-testid="input-testimonial-location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Seu Comentário
                  </label>
                  <Textarea
                    placeholder="Conte como foi sua experiência com a Fazenda Peixe Boi..."
                    value={newTestimonial.comment}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, comment: e.target.value })}
                    required
                    rows={4}
                    data-testid="input-testimonial-comment"
                  />
                </div>
                <Button type="submit" className="w-full" data-testid="button-submit-testimonial">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Depoimento
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-partnership-title">
              Venha Ser Nosso Parceiro Comercial
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Estamos sempre em busca de parceiros comprometidos com a excelência na pecuária. 
              Junte-se a nós e faça parte de uma rede de sucesso no agronegócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Rede de Contatos</h3>
                <p className="text-muted-foreground text-sm">
                  Acesso a uma ampla rede de criadores, compradores e especialistas do setor pecuário em todo o Brasil.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Animais Premium</h3>
                <p className="text-muted-foreground text-sm">
                  Trabalhe com animais de alta genética e qualidade comprovada, com toda documentação e suporte técnico.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Suporte Especializado</h3>
                <p className="text-muted-foreground text-sm">
                  Conte com nossa experiência de 30+ anos e suporte completo para alavancar seus negócios.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contato">
              <Button size="lg" variant="default" data-testid="button-become-partner">
                <Handshake className="w-5 h-5 mr-2" />
                Quero Ser Parceiro
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={rancherImage} 
                alt="Touro Senepol Cartola da Barra FIV - Fazenda Peixe Boi"
                className="rounded-md shadow-lg w-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pronto para Fazer Negócio?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa equipe especializada está pronta para ajudá-lo a encontrar o animal perfeito 
                para suas necessidades. Entre em contato conosco hoje mesmo.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/catalogo">
                  <Button size="lg" variant="default" className="hover-elevate active-elevate-2" data-testid="button-browse-catalog">
                    Explorar Catálogo
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button size="lg" variant="outline" className="hover-elevate active-elevate-2" data-testid="button-contact-us">
                    Falar Conosco
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
