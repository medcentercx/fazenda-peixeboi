import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/image_1762440901294.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/catalogo", label: "Catálogo" },
    { path: "/sobre", label: "Sobre" },
    { path: "/contato", label: "Contato" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md cursor-pointer">
              <img src={logo} alt="Senepol Peixe e Boi" className="h-10 w-10" />
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-foreground">Fazenda Peixe e Boi</div>
                <div className="text-xs text-muted-foreground">Pecuária de Qualidade</div>
              </div>
              <div className="sm:hidden text-lg font-bold text-foreground">Peixe e Boi</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-nav-${item.label.toLowerCase()}`}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  className="hover-elevate active-elevate-2"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link href="/contato" data-testid="button-cta-contact">
              <Button variant="default" className="ml-2">
                <Phone className="w-4 h-4 mr-2" />
                Falar Conosco
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t" data-testid="nav-mobile-menu">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant={location === item.path ? "secondary" : "ghost"}
                    className="w-full justify-start hover-elevate active-elevate-2"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Link href="/contato">
                <Button
                  variant="default"
                  className="w-full justify-start mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="button-mobile-contact"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Falar Conosco
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
