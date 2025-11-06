import { Hero } from "@/components/Hero";
import { AnimalCard } from "@/components/AnimalCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Leaf, Heart, Award, TrendingUp, Shield } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Animal } from "@shared/schema";
import farmFacilities from "@assets/image_1762441620741.png";
import rancherImage from "@assets/image_1762441815679.png";
import historyVideo from "@assets/hitoria..Vídeo do WhatsApp de 2025-11-06 à(s) 12.41.42_ba507206_1762444381048.mp4";

export default function Home() {
  const { data: animals, isLoading } = useQuery<Animal[]>({
    queryKey: ["/api/animals"],
  });

  const featuredAnimals = animals?.filter(a => a.featured === "yes").slice(0, 3) || [];

  return (
    <div>
      <Hero />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="text-hero-title">
              Pecuária de Excelência no Coração do Maranhão
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
              Conheça a trajetória de mais de 30 anos da Fazenda Peixe e Boi
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
                Por Que Escolher a Fazenda Peixe e Boi?
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
                alt="Instalações da Fazenda Peixe e Boi"
                className="rounded-md shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={rancherImage} 
                alt="Touro Senepol Cartola da Barra FIV - Fazenda Peixe e Boi"
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
