import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/copiloto", label: "Copiloto" },
    { path: "/recursos", label: "Recursos" },
    { path: "/prueba-conocimiento", label: "Prueba tu Conocimiento" },
    { path: "/acerca", label: "Acerca" },
    { path: "/politica", label: "Política" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-soft">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/img/logo-copiloto.svg" 
                alt="Logo Copiloto RIAS" 
                className="w-10 h-10 transition-transform group-hover:scale-105"
              />
              <span className="font-semibold text-lg text-foreground hidden sm:inline">
                Copiloto RIAS 3280
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-primary/10 text-primary border-l-4 border-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-auto">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Proyecto */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Sobre el Proyecto</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Copiloto RIAS 3280 es un asistente educativo para talento humano en salud, 
                basado en la Resolución 3280 de 2018.
              </p>
              <p className="text-xs text-muted-foreground">
                Versión del Corpus: v1.0 (15/10/2024)
              </p>
            </div>

            {/* Enlaces */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/recursos" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Biblioteca de Recursos
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/acerca" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/politica" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Política de Uso
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto/Soporte */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contacto y Soporte</h3>
              <p className="text-sm text-muted-foreground mb-2">
                ¿Necesitas ayuda o tienes preguntas?
              </p>
              <a 
                href="mailto:soporte@copilotorias.edu.co" 
                className="text-sm text-primary hover:underline font-medium"
              >
                soporte@copilotorias.edu.co
              </a>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              © 2024 Copiloto RIAS 3280. Herramienta educativa - No reemplaza el juicio clínico profesional.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
