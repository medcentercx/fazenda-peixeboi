import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Filter, X } from "lucide-react";

interface FilterState {
  categories: string[];
  sex: string;
  minAge: number;
  maxAge: number;
  minPrice: number;
  maxPrice: number;
}

interface AnimalFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

const categories = [
  { id: "bovinos", label: "Bovinos" },
  { id: "equinos", label: "Equinos" },
  { id: "ovinos", label: "Ovinos" },
  { id: "caprinos", label: "Caprinos" },
];

export function AnimalFilters({ filters, onFiltersChange }: AnimalFiltersProps) {
  const handleCategoryToggle = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter(c => c !== categoryId)
      : [...filters.categories, categoryId];
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handleSexChange = (value: string) => {
    onFiltersChange({ ...filters, sex: value });
  };

  const handleClearFilters = () => {
    onFiltersChange({
      categories: [],
      sex: "all",
      minAge: 0,
      maxAge: 120,
      minPrice: 0,
      maxPrice: 100000,
    });
  };

  const hasActiveFilters = 
    filters.categories.length > 0 || 
    filters.sex !== "all" ||
    filters.minAge > 0 ||
    filters.maxAge < 120 ||
    filters.minPrice > 0 ||
    filters.maxPrice < 100000;

  return (
    <Card className="sticky top-20" data-testid="filters-panel">
      <CardHeader className="flex flex-row items-center justify-between gap-1 flex-wrap space-y-0 pb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-muted-foreground" />
          <CardTitle className="text-lg">Filtros</CardTitle>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFilters}
            className="hover-elevate active-elevate-2"
            data-testid="button-clear-filters"
          >
            <X className="w-4 h-4 mr-1" />
            Limpar
          </Button>
        )}
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <Label className="text-base font-semibold mb-3 block">Categoria</Label>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={filters.categories.includes(category.id)}
                  onCheckedChange={() => handleCategoryToggle(category.id)}
                  data-testid={`checkbox-category-${category.id}`}
                />
                <Label
                  htmlFor={category.id}
                  className="text-sm font-normal cursor-pointer"
                >
                  {category.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <Label className="text-base font-semibold mb-3 block">Sexo</Label>
          <RadioGroup value={filters.sex} onValueChange={handleSexChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="sex-all" data-testid="radio-sex-all" />
              <Label htmlFor="sex-all" className="text-sm font-normal cursor-pointer">
                Todos
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="macho" id="sex-male" data-testid="radio-sex-male" />
              <Label htmlFor="sex-male" className="text-sm font-normal cursor-pointer">
                Macho
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fêmea" id="sex-female" data-testid="radio-sex-female" />
              <Label htmlFor="sex-female" className="text-sm font-normal cursor-pointer">
                Fêmea
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="pt-4 border-t">
          <Label className="text-base font-semibold mb-3 block">Idade (meses)</Label>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span data-testid="text-age-min">{filters.minAge} meses</span>
              <span data-testid="text-age-max">{filters.maxAge} meses</span>
            </div>
            <Slider
              min={0}
              max={120}
              step={6}
              value={[filters.minAge, filters.maxAge]}
              onValueChange={([min, max]) => onFiltersChange({ ...filters, minAge: min, maxAge: max })}
              data-testid="slider-age"
            />
          </div>
        </div>

        <div className="pt-4 border-t">
          <Label className="text-base font-semibold mb-3 block">Preço (R$)</Label>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span data-testid="text-price-min">R$ {filters.minPrice.toLocaleString('pt-BR')}</span>
              <span data-testid="text-price-max">R$ {filters.maxPrice.toLocaleString('pt-BR')}</span>
            </div>
            <Slider
              min={0}
              max={100000}
              step={1000}
              value={[filters.minPrice, filters.maxPrice]}
              onValueChange={([min, max]) => onFiltersChange({ ...filters, minPrice: min, maxPrice: max })}
              data-testid="slider-price"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
