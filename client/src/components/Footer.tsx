import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import logo from "@assets/image_1762440901294.png";

export function Footer() {
  return (
    <footer className="bg-card border-t mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Senepol Peixe e Boi" className="h-10 w-10" />
              <div>
                <div className="text-lg font-bold text-foreground">Fazenda Peixe e Boi</div>
                <div className="text-xs text-muted-foreground">Pecuária de Qualidade</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Tradição e excelência no agronegócio. Compra e venda de animais de alta qualidade.
            </p>
            <div className="space-y-2">
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/fazendapeixeeboi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover-elevate active-elevate-2 rounded-md"
                  data-testid="link-facebook"
                  title="Facebook - Fazenda Peixe e Boi"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground" />
                </a>
                <a
                  href="https://instagram.com/fazendapeixeeboi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover-elevate active-elevate-2 rounded-md"
                  data-testid="link-instagram"
                  title="Instagram - Fazenda Peixe e Boi"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground">@fazendapeixeeboi</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-foreground">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" data-testid="link-footer-home">
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Início</span>
                </Link>
              </li>
              <li>
                <Link href="/catalogo" data-testid="link-footer-catalog">
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Catálogo</span>
                </Link>
              </li>
              <li>
                <Link href="/sobre" data-testid="link-footer-about">
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Sobre</span>
                </Link>
              </li>
              <li>
                <Link href="/contato" data-testid="link-footer-contact">
                  <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Contato</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-foreground">Categorias</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Bovinos</li>
              <li className="text-sm text-muted-foreground">Equinos</li>
              <li className="text-sm text-muted-foreground">Ovinos</li>
              <li className="text-sm text-muted-foreground">Caprinos</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-foreground">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Peritoró, Maranhão, BR-316</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(99) 98835-7918 - Yuri Corrêa</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contato@peixeeboi.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fazenda Peixe e Boi. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
