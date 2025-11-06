import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Award, Heart, TrendingUp, Shield } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import farmFacilities from "@assets/generated_images/Farm_facilities_aerial_view_076d577e.png";
import rancherImage from "@assets/generated_images/Rancher_with_cattle_b0552c94.png";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">
              Sobre a Fazenda Peixe e Boi
            </h1>
            <p className="text-xl text-muted-foreground">
              Tradição, excelência e compromisso com o agronegócio brasileiro há mais de 15 anos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Fazenda Peixe e Boi nasceu da paixão pelo campo e pelo compromisso em oferecer 
                  animais de qualidade superior para o mercado brasileiro. Fundada há mais de 15 anos, 
                  nossa fazenda se consolidou como referência em pecuária de excelência.
                </p>
                <p>
                  Localizada no <strong className="text-foreground">Maranhão</strong>, somos especializados 
                  em <strong className="text-foreground">criatório da raça Senepol</strong>, reconhecida por 
                  suas características excepcionais: <strong className="text-foreground">rústico, dócil, 
                  precoce e lucrativo</strong>. Contamos com infraestrutura moderna e uma equipe altamente 
                  qualificada que garante o bem-estar e a qualidade de cada animal criado em nossas terras.
                </p>
                <p>
                  Ao longo dos anos, comercializamos mais de 5.000 animais, sempre mantendo nosso 
                  compromisso com a qualidade, sustentabilidade e satisfação dos nossos clientes.
                </p>
              </div>
            </div>

            <div>
              <img 
                src={farmFacilities} 
                alt="Instalações da Fazenda"
                className="rounded-md shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que nos torna a melhor escolha para seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-elevate active-elevate-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Manejo Sustentável</h3>
                <p className="text-muted-foreground">
                  Práticas modernas de pecuária com total respeito ao meio ambiente e preservação 
                  dos recursos naturais para as próximas gerações.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate active-elevate-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Bem-Estar Animal</h3>
                <p className="text-muted-foreground">
                  Acompanhamento veterinário constante, alimentação balanceada e ambientes adequados 
                  que garantem a saúde e qualidade de vida dos animais.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate active-elevate-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Certificações</h3>
                <p className="text-muted-foreground">
                  Todos os animais possuem documentação completa, certificados de procedência e 
                  registros genealógicos quando aplicável.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate active-elevate-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Equipe Especializada</h3>
                <p className="text-muted-foreground">
                  Profissionais altamente capacitados em manejo, nutrição e genética animal, 
                  prontos para oferecer todo suporte necessário.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate active-elevate-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Genética Superior</h3>
                <p className="text-muted-foreground">
                  Seleção rigorosa de reprodutores e matrizes para garantir animais de alta 
                  produtividade e qualidade genética excepcional.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate active-elevate-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Garantia de Qualidade</h3>
                <p className="text-muted-foreground">
                  Compromisso total com a satisfação do cliente, oferecendo suporte completo 
                  antes, durante e após a negociação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={rancherImage} 
                alt="Equipe da Fazenda"
                className="rounded-md shadow-lg w-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Faça Parte da Nossa História
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Seja você um produtor rural, investidor ou empresário do agronegócio, estamos 
                prontos para ser seu parceiro de confiança. Entre em contato conosco e descubra 
                como podemos ajudar no crescimento do seu negócio.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/catalogo">
                  <Button size="lg" variant="default" className="hover-elevate active-elevate-2" data-testid="button-catalog">
                    Ver Catálogo
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button size="lg" variant="outline" className="hover-elevate active-elevate-2" data-testid="button-contact">
                    Entrar em Contato
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
