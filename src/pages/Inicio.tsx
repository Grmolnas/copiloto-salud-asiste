import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FeatureCard from "@/components/FeatureCard";
import { MessageSquare, Users, Brain, Layers, BookOpen, CheckCircle, Search } from "lucide-react";

const Inicio = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Hero Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Copiloto RIAS 3280
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Asistente educativo para talento humano en salud
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                Consulta información validada sobre promoción y mantenimiento de la salud según la Resolución 3280/2018
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link to="/copiloto">
                  <Button size="lg" className="w-full sm:w-auto shadow-medium hover:shadow-soft transition-all">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Abrir Copiloto
                  </Button>
                </Link>
                <Link to="/recursos">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto shadow-soft hover:shadow-medium transition-all">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Ver Recursos
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg">
                <img 
                  src="/img/hero-salud.svg" 
                  alt="Ilustración de salud y medicina" 
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Brain className="w-6 h-6" />}
            title="¿Qué hace?"
            description="Responde consultas sobre intervenciones de la RIAS, extrayendo información exclusivamente de fichas técnicas validadas."
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="¿Para quién?"
            description="Personal de salud: médicos, enfermeras, auxiliares y promotores que necesitan consultar lineamientos de la Resolución 3280/2018."
          />
          <FeatureCard
            icon={<Layers className="w-6 h-6" />}
            title="¿Cómo funciona?"
            description="Utiliza RAG (Retrieval Augmented Generation) sobre un corpus cerrado de PDFs validados, sin acceso a internet ni otras fuentes."
          />
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cómo usarlo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tres pasos simples para acceder a información validada
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <Card className="border-border shadow-soft hover:shadow-medium transition-all rounded-2xl">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold shadow-medium">
                      1
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground border-0">
                      Inicio
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">Pregunta</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Formula tu consulta sobre una intervención específica o procedimiento de la RIAS
                    </p>
                  </div>
                  <MessageSquare className="w-12 h-12 text-primary/40" />
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-border shadow-soft hover:shadow-medium transition-all rounded-2xl">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold shadow-medium">
                      2
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground border-0">
                      Citas
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">Respuesta con citas</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Recibe información validada con referencias exactas a las fichas técnicas
                    </p>
                  </div>
                  <BookOpen className="w-12 h-12 text-primary/40" />
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-border shadow-soft hover:shadow-medium transition-all rounded-2xl">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold shadow-medium">
                      3
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground border-0">
                      Checklist
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">Verifica</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Contrasta con las fichas originales disponibles en la Biblioteca
                    </p>
                  </div>
                  <CheckCircle className="w-12 h-12 text-primary/40" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="border-border shadow-soft">
            <CardContent className="pt-6 text-center">
              <Search className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-3xl font-bold text-foreground mb-2">42</p>
              <p className="text-muted-foreground">Fichas validadas</p>
            </CardContent>
          </Card>
          <Card className="border-border shadow-soft">
            <CardContent className="pt-6 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-3xl font-bold text-foreground mb-2">15/10/2024</p>
              <p className="text-muted-foreground">Última actualización del corpus</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Comienza a consultar ahora
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Accede a información validada y confiable para tu práctica profesional
          </p>
          <Link to="/copiloto">
            <Button size="lg" variant="secondary">
              Abrir Copiloto
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
