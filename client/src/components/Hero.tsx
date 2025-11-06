import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, TrendingUp, Shield } from "lucide-react";
import heroVideo from "@assets/SnapInsta.to_AQOs_Ge24CTM7dqUtK3FJ2l5X_E9nMUdfw7GlwMLZ2bI64vEA-wsOBwKsXWeYJFAFpUVgqokmvRRlrbfw4QRlqrBNG9LGjavttItoEA_1762441428751.mp4";

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
            Pecuária de Excelência no Coração do Maranhão
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl" data-testid="text-hero-subtitle">
            Tradição, qualidade e confiança na compra e venda de bovinos, equinos, ovinos e caprinos. 
            Animais selecionados para o sucesso do seu negócio.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/catalogo" data-testid="button-hero-catalog">
              <Button size="lg" variant="default" className="backdrop-blur-md bg-primary/90 hover:bg-primary border border-primary-border">
                Ver Catálogo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contato" data-testid="button-hero-contact">
              <Button size="lg" variant="outline" className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border-white/30">
                Falar com Vendedor
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
            <div className="flex items-center gap-3" data-testid="stat-experience">
              <Award className="w-8 h-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">15+ Anos</div>
                <div className="text-sm text-white/80">de Tradição</div>
              </div>
            </div>
            <div className="flex items-center gap-3" data-testid="stat-animals">
              <TrendingUp className="w-8 h-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm text-white/80">Animais Comercializados</div>
              </div>
            </div>
            <div className="flex items-center gap-3" data-testid="stat-quality">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">Qualidade Garantida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
