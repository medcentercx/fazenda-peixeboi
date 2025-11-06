import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="text-center px-4">
        <div className="text-6xl mb-4">🐄</div>
        <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-404">
          Página Não Encontrada
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/">
          <Button variant="default" className="hover-elevate active-elevate-2" data-testid="button-home">
            <Home className="w-4 h-4 mr-2" />
            Voltar para Início
          </Button>
        </Link>
      </div>
    </div>
  );
}
