import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AnimalCard } from "@/components/AnimalCard";
import { AnimalFilters } from "@/components/AnimalFilters";
import type { Animal } from "@shared/schema";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import logo from "@assets/image_1762440901294.png";

interface FilterState {
  categories: string[];
  sex: string;
  minAge: number;
  maxAge: number;
  minPrice: number;
  maxPrice: number;
}

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    sex: "all",
    minAge: 0,
    maxAge: 120,
    minPrice: 0,
    maxPrice: 100000,
  });

  const { data: animals, isLoading } = useQuery<Animal[]>({
    queryKey: ["/api/animals"],
  });

  const filteredAnimals = animals?.filter(animal => {
    const matchesSearch = searchQuery === "" || 
      animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal.breed.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = filters.categories.length === 0 || 
      filters.categories.includes(animal.category);

    const matchesSex = filters.sex === "all" || animal.sex === filters.sex;

    const animalAge = Number(animal.age);
    const matchesAge = animalAge >= filters.minAge && animalAge <= filters.maxAge;

    const matchesPrice = !animal.price || 
      (Number(animal.price) >= filters.minPrice && Number(animal.price) <= filters.maxPrice);

    return matchesSearch && matchesCategory && matchesSex && matchesAge && matchesPrice;
  }) || [];

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-catalog-title">
            Catálogo de Animais
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Explore nossa seleção de bovinos, equinos, ovinos e caprinos de alta qualidade
          </p>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por nome ou raça..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="input-search"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <AnimalFilters filters={filters} onFiltersChange={setFilters} />
          </aside>

          <main className="lg:col-span-3">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="h-96 bg-card animate-pulse rounded-md" />
                ))}
              </div>
            ) : filteredAnimals.length === 0 ? (
              <div className="text-center py-16">
                <img src={logo} alt="Senepol" className="h-24 w-24 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="text-no-results">
                  Nenhum animal encontrado
                </h3>
                <p className="text-muted-foreground">
                  Tente ajustar os filtros ou a busca para encontrar o que procura
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground" data-testid="text-results-count">
                    {filteredAnimals.length} {filteredAnimals.length === 1 ? 'animal encontrado' : 'animais encontrados'}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredAnimals.map(animal => (
                    <AnimalCard key={animal.id} animal={animal} />
                  ))}
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
