import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Animal } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Scale, Ruler, Palette, User } from "lucide-react";

const categoryLabels: Record<string, string> = {
  bovinos: "Bovinos",
  equinos: "Equinos",
  ovinos: "Ovinos",
  caprinos: "Caprinos",
};

export default function AnimalDetail() {
  const { id } = useParams();
  
  const { data: animals, isLoading } = useQuery<Animal[]>({
    queryKey: ["/api/animals"],
  });

  const animal = animals?.find(a => a.id === id);

  if (isLoading) {
    return (
      <div className="min-h-screen py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-card rounded mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="aspect-square bg-card rounded-md" />
              <div className="space-y-4">
                <div className="h-10 bg-card rounded" />
                <div className="h-20 bg-card rounded" />
                <div className="h-40 bg-card rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!animal) {
    return (
      <div className="min-h-screen py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-2xl font-bold text-foreground mb-4">Animal não encontrado</h1>
            <Link href="/catalogo">
              <Button variant="default" className="hover-elevate active-elevate-2">
                Voltar ao Catálogo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const ageYears = Math.floor(Number(animal.age) / 12);
  const ageMonths = Number(animal.age) % 12;
  const ageText = ageYears > 0 
    ? `${ageYears} ${ageYears === 1 ? 'ano' : 'anos'}${ageMonths > 0 ? ` e ${ageMonths} ${ageMonths === 1 ? 'mês' : 'meses'}` : ''}`
    : `${ageMonths} ${ageMonths === 1 ? 'mês' : 'meses'}`;

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Link href="/catalogo">
          <Button variant="ghost" className="mb-6 hover-elevate active-elevate-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Catálogo
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square rounded-md overflow-hidden mb-4">
              <img 
                src={animal.imageUrl} 
                alt={animal.name}
                className="w-full h-full object-cover"
                data-testid="img-animal-detail"
              />
            </div>
          </div>

          <div>
            <div className="mb-6">
              <Badge className="mb-3" data-testid="badge-category">
                {categoryLabels[animal.category] || animal.category}
              </Badge>
              {animal.featured === "yes" && (
                <Badge className="ml-2 bg-primary text-primary-foreground border-primary-border" data-testid="badge-featured">
                  Destaque
                </Badge>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-2" data-testid="text-animal-name">
                {animal.name}
              </h1>
              <p className="text-xl text-muted-foreground" data-testid="text-animal-breed">
                {animal.breed}
              </p>
            </div>

            {animal.price && (
              <div className="mb-8 p-6 bg-primary/5 rounded-md border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">Preço</div>
                <div className="text-3xl font-bold text-primary" data-testid="text-price">
                  R$ {Number(animal.price).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            )}

            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Especificações</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Idade</div>
                      <div className="font-medium text-foreground" data-testid="text-age">{ageText}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Sexo</div>
                      <div className="font-medium text-foreground capitalize" data-testid="text-sex">{animal.sex}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Scale className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Peso</div>
                      <div className="font-medium text-foreground" data-testid="text-weight">{animal.weight} kg</div>
                    </div>
                  </div>

                  {animal.height && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <Ruler className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Altura</div>
                        <div className="font-medium text-foreground" data-testid="text-height">{animal.height} cm</div>
                      </div>
                    </div>
                  )}

                  {animal.color && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <Palette className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Pelagem</div>
                        <div className="font-medium text-foreground capitalize" data-testid="text-color">{animal.color}</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-3">Descrição</h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-description">
                {animal.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contato">
                <Button size="lg" variant="default" className="hover-elevate active-elevate-2" data-testid="button-contact">
                  Solicitar Informações
                </Button>
              </Link>
              <Link href="/catalogo">
                <Button size="lg" variant="outline" className="hover-elevate active-elevate-2" data-testid="button-continue">
                  Ver Mais Animais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
