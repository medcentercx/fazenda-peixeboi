import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import type { Animal } from "@shared/schema";

interface AnimalCardProps {
  animal: Animal;
}

const categoryLabels: Record<string, string> = {
  bovinos: "Bovinos",
  equinos: "Equinos",
  ovinos: "Ovinos",
  caprinos: "Caprinos",
};

const categoryColors: Record<string, string> = {
  bovinos: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  equinos: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  ovinos: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  caprinos: "bg-chart-4/10 text-chart-4 border-chart-4/20",
};

export function AnimalCard({ animal }: AnimalCardProps) {
  const ageYears = Math.floor(Number(animal.age) / 12);
  const ageMonths = Number(animal.age) % 12;
  const ageText = ageYears > 0 
    ? `${ageYears} ${ageYears === 1 ? 'ano' : 'anos'}${ageMonths > 0 ? ` e ${ageMonths} ${ageMonths === 1 ? 'mês' : 'meses'}` : ''}`
    : `${ageMonths} ${ageMonths === 1 ? 'mês' : 'meses'}`;

  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 h-full flex flex-col" data-testid={`card-animal-${animal.id}`}>
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={animal.imageUrl} 
          alt={animal.name}
          className="w-full h-full object-cover"
          data-testid={`img-animal-${animal.id}`}
        />
        {animal.featured === "yes" && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground border-primary-border" data-testid="badge-featured">
            Destaque
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6 flex-1 flex flex-col gap-4">
        <div>
          <Badge className={`mb-2 ${categoryColors[animal.category] || ''}`} data-testid={`badge-category-${animal.category}`}>
            {categoryLabels[animal.category] || animal.category}
          </Badge>
          <h3 className="text-xl font-semibold text-foreground mb-1" data-testid={`text-name-${animal.id}`}>
            {animal.name}
          </h3>
          <p className="text-sm text-muted-foreground" data-testid={`text-breed-${animal.id}`}>
            {animal.breed}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-muted-foreground">Idade:</span>
            <span className="ml-2 font-medium text-foreground" data-testid={`text-age-${animal.id}`}>
              {ageText}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Sexo:</span>
            <span className="ml-2 font-medium text-foreground capitalize" data-testid={`text-sex-${animal.id}`}>
              {animal.sex}
            </span>
          </div>
          <div className="col-span-2">
            <span className="text-muted-foreground">Peso:</span>
            <span className="ml-2 font-medium text-foreground" data-testid={`text-weight-${animal.id}`}>
              {animal.weight} kg
            </span>
          </div>
        </div>

        {animal.price && (
          <div className="pt-2 border-t">
            <div className="text-2xl font-bold text-primary" data-testid={`text-price-${animal.id}`}>
              R$ {Number(animal.price).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link href={`/animal/${animal.id}`} className="w-full">
          <Button variant="outline" className="w-full hover-elevate active-elevate-2" data-testid={`button-details-${animal.id}`}>
            Ver Detalhes
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
